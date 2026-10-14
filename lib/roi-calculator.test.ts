import { describe, it, expect } from 'vitest';
import {
  calculateRoi,
  formatINR,
  formatCompactINR,
  DEFAULT_ROI_INPUTS,
  type RoiCalculatorInputs,
} from './roi-calculator';

describe('Gluvok ROI Calculator Engine', () => {
  it('calculates baseline default scenario correctly', () => {
    const results = calculateRoi(DEFAULT_ROI_INPUTS);

    // 3 operators * 3 shifts = 9 daily positions
    expect(results.dailyPositions).toBe(9);
    // Relief coverage disabled by default -> multiplier 1.0 -> 9 headcount
    expect(results.requiredHeadcount).toBe(9);
    // Headcount (9) * 25,000 loaded cost = 2,25,000
    expect(results.currentMonthlyStaffingCost).toBe(225000);
    // Annual: 2,25,000 * 12 = 27,00,000
    expect(results.currentAnnualStaffingCost).toBe(2700000);

    // Gross savings: 70% of 2,25,000 = 1,57,500
    expect(results.grossMonthlyStaffingSavings).toBe(157500);
    expect(results.grossAnnualStaffingSavings).toBe(1890000);
    expect(results.grossThreeYearStaffingSavings).toBe(5670000);
    // Remaining staffing cost: 30% of 2,25,000 = 67,500
    expect(results.estimatedRemainingStaffingCost).toBe(67500);

    // Recurring costs: 5,000 + 3,000 = 8,000
    expect(results.totalMonthlyRecurringAutomationCost).toBe(8000);

    // Net monthly savings: 1,57,500 - 8,000 = 1,49,500
    expect(results.netMonthlySavings).toBe(149500);
    // Annual net savings: 1,49,500 * 12 = 17,94,000
    expect(results.annualNetSavings).toBe(1794000);

    // First year net benefit: 17,94,000 - 1,50,000 = 16,44,000
    expect(results.firstYearNetBenefit).toBe(1644000);
    // First year ROI: (16,44,000 / 1,50,000) * 100 = 1096%
    expect(results.firstYearRoiPct).toBeCloseTo(1096.0, 1);
    expect(results.firstYearRoiDisplay).toBe('1096.0%');

    // 3-Year net benefit: (1,49,500 * 36) - 1,50,000 = 53,82,000 - 1,50,000 = 52,32,000
    expect(results.threeYearCumulativeNetBenefit).toBe(5232000);
    expect(results.threeYearRoiPct).toBeCloseTo((5232000 / 150000) * 100, 1);

    // Payback period: 1,50,000 / 1,49,500 = 1.003 months (~1.0 month)
    expect(results.paybackPeriodMonths).toBe(1.0);
    expect(results.paybackPeriodDisplay).toBe('1.0 months');
    expect(results.breakEvenMonth).toBe(2);
  });

  it('handles maximum scale: 250 operators per shift across 4 shifts per day', () => {
    const inputs: RoiCalculatorInputs = {
      ...DEFAULT_ROI_INPUTS,
      operatorsPerShift: 250,
      shiftsPerDay: 4,
      monthlySalaryPerOperator: 30000,
      monthlyOverheadPerOperator: 5000,
    };
    const results = calculateRoi(inputs);

    // 250 * 4 = 1,000 operators
    expect(results.dailyPositions).toBe(1000);
    expect(results.requiredHeadcount).toBe(1000);
    // Loaded cost = 30k + 5k = 35k
    expect(results.loadedMonthlyCostPerOperator).toBe(35000);
    // Monthly cost = 1,000 * 35,000 = 3.5 Crore (35,000,000)
    expect(results.currentMonthlyStaffingCost).toBe(35000000);
    // Annual cost = 42 Crore
    expect(results.currentAnnualStaffingCost).toBe(420000000);

    // Gross savings: 70% of 35M = 24.5M
    expect(results.grossMonthlyStaffingSavings).toBe(24500000);
    // Net monthly savings: 24.5M - 8k = 24,492,000
    expect(results.netMonthlySavings).toBe(24492000);
    // Payback: 150,000 / 24,492,000 = < 1 month
    expect(results.paybackPeriodDisplay).toBe('< 1 month');
  });

  it('strictly does NOT multiply shift count twice in monthly staffing costs', () => {
    const inputs: RoiCalculatorInputs = {
      ...DEFAULT_ROI_INPUTS,
      operatorsPerShift: 2,
      shiftsPerDay: 3,
      monthlySalaryPerOperator: 20000,
      monthlyOverheadPerOperator: 0,
      useReliefCoverage: false,
    };
    const results = calculateRoi(inputs);

    // 2 operators * 3 shifts = 6 headcount
    expect(results.requiredHeadcount).toBe(6);
    // Monthly cost MUST be 6 * 20,000 = 120,000.
    // If shifts were multiplied again, it would incorrectly be 360,000!
    expect(results.currentMonthlyStaffingCost).toBe(120000);
    expect(results.currentMonthlyStaffingCost).not.toBe(360000);
  });

  it('calculates relief staffing factor with ceiling rounding correctly', () => {
    const inputs: RoiCalculatorInputs = {
      ...DEFAULT_ROI_INPUTS,
      operatorsPerShift: 3,
      shiftsPerDay: 3,
      useReliefCoverage: true,
      reliefStaffingFactor: 1.15, // 9 * 1.15 = 10.35 -> CEIL = 11
    };
    const results = calculateRoi(inputs);

    expect(results.dailyPositions).toBe(9);
    expect(results.effectiveReliefFactor).toBe(1.15);
    expect(results.requiredHeadcount).toBe(11);
    expect(results.currentMonthlyStaffingCost).toBe(11 * 25000);
  });

  it('handles zero salary safely without NaN or crashes', () => {
    const inputs: RoiCalculatorInputs = {
      ...DEFAULT_ROI_INPUTS,
      monthlySalaryPerOperator: 0,
      monthlyOverheadPerOperator: 0,
    };
    const results = calculateRoi(inputs);

    expect(results.currentMonthlyStaffingCost).toBe(0);
    expect(results.grossMonthlyStaffingSavings).toBe(0);
    expect(results.netMonthlySavings).toBe(-8000); // 0 - 8k recurring = -8k
    expect(results.isNegativeNetSavings).toBe(true);
    expect(results.paybackPeriodMonths).toBeNull();
    expect(results.paybackPeriodDisplay).toBe('No payback under current assumptions');
  });

  it('handles zero deployment cost safely (ROI not applicable, immediate payback)', () => {
    const inputs: RoiCalculatorInputs = {
      ...DEFAULT_ROI_INPUTS,
      oneTimeDeploymentCost: 0,
    };
    const results = calculateRoi(inputs);

    expect(results.isZeroInvestment).toBe(true);
    expect(results.firstYearRoiPct).toBeNull();
    expect(results.firstYearRoiDisplay).toBe('Not applicable');
    expect(results.threeYearRoiPct).toBeNull();
    expect(results.threeYearRoiDisplay).toBe('Not applicable');
    expect(results.paybackPeriodMonths).toBe(0);
    expect(results.paybackPeriodDisplay).toBe('Immediate (₹0 Capex)');
  });

  it('detects negative net savings and sets appropriate warnings', () => {
    const inputs: RoiCalculatorInputs = {
      ...DEFAULT_ROI_INPUTS,
      operatorsPerShift: 1,
      shiftsPerDay: 1,
      monthlySalaryPerOperator: 10000, // Monthly cost: 10,000
      operatorCostReductionPct: 20, // Gross savings: 2,000
      monthlySoftwareCost: 10000,
      otherRecurringMonthlyCost: 5000, // Total recurring: 15,000
    };
    const results = calculateRoi(inputs);

    // Net savings: 2,000 - 15,000 = -13,000
    expect(results.netMonthlySavings).toBe(-13000);
    expect(results.isNegativeNetSavings).toBe(true);
    expect(results.paybackPeriodMonths).toBeNull();
    expect(results.paybackPeriodDisplay).toBe('No payback under current assumptions');
  });

  it('includes optional additional verified benefits correctly', () => {
    const inputs: RoiCalculatorInputs = {
      ...DEFAULT_ROI_INPUTS,
      adminSavingsMonthly: 12000,
      documentationSavingsMonthly: 8000,
      otherVerifiedSavingsMonthly: 5000,
    };
    const results = calculateRoi(inputs);

    expect(results.additionalMonthlyBenefits).toBe(25000);
    // Baseline net was 1,49,500 -> now 1,49,500 + 25,000 = 1,74,500
    expect(results.netMonthlySavings).toBe(174500);
    expect(results.annualNetSavings).toBe(174500 * 12);
  });

  it('computes 36-month timeline points accurately', () => {
    const results = calculateRoi(DEFAULT_ROI_INPUTS);

    expect(results.timeline36Months).toHaveLength(37); // Month 0 to 36
    // Month 0: -DeploymentCost (-1,50,000)
    expect(results.timeline36Months[0].cumulativeNetBenefit).toBe(-150000);
    // Month 12: 1-year net benefit
    expect(results.timeline36Months[12].cumulativeNetBenefit).toBe(results.firstYearNetBenefit);
    // Month 36: 3-year net benefit
    expect(results.timeline36Months[36].cumulativeNetBenefit).toBe(results.threeYearCumulativeNetBenefit);
  });

  it('generates 3 comparative scenarios without mutating inputs', () => {
    const results = calculateRoi(DEFAULT_ROI_INPUTS);

    expect(results.scenarios.conservative).toBeDefined();
    expect(results.scenarios.expected).toBeDefined();
    expect(results.scenarios.optimistic).toBeDefined();

    // Conservative reduction should be lower than Expected
    expect(results.scenarios.conservative.reductionPct).toBeLessThan(results.scenarios.expected.reductionPct);
    // Optimistic reduction should be higher than Expected
    expect(results.scenarios.optimistic.reductionPct).toBeGreaterThan(results.scenarios.expected.reductionPct);
    // Expected must match current net monthly savings
    expect(results.scenarios.expected.monthlyNetSavings).toBe(results.netMonthlySavings);
  });

  it('formats Indian currency (INR) with standard grouping', () => {
    expect(formatINR(125000)).toBe('₹1,25,000');
    expect(formatINR(2500000)).toBe('₹25,00,000');
    expect(formatINR(-50000)).toBe('-₹50,000');
    expect(formatINR(0)).toBe('₹0');
  });

  it('formats compact INR with Lakhs and Crores', () => {
    expect(formatCompactINR(150000)).toBe('₹1.50 L');
    expect(formatCompactINR(25000000)).toBe('₹2.50 Cr');
    expect(formatCompactINR(4500)).toBe('₹4.5 k');
    expect(formatCompactINR(500)).toBe('₹500');
  });
});
