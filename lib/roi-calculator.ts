/**
 * Gluvok ROI Calculator Financial Engine
 * Lathey Weigh Trix (LWT)
 *
 * Implements exact financial calculations for weighbridge automation ROI,
 * staffing cost models, payback periods, and multi-scenario analyses.
 */

export interface RoiCalculatorInputs {
  // Operator & Shift Inputs
  operatorsPerShift: number; // 0 to 250, default 3
  shiftsPerDay: 1 | 2 | 3 | 4; // 1 to 4, default 3
  operatingDaysPerMonth: number; // 1 to 31, default 30
  monthlySalaryPerOperator: number; // INR, min 0, default 25,000
  monthlyOverheadPerOperator: number; // INR, benefits/PF/ESI, min 0, default 0
  reliefStaffingFactor: number; // 1.0 to 1.5, default 1.0
  useReliefCoverage: boolean; // toggle, default false (factor 1.0)
  staffingModel: 'payroll_full_month' | 'operating_days_prorated'; // default payroll_full_month

  // Automation Assumptions
  operatorCostReductionPct: number; // 0 to 100, default 70
  oneTimeDeploymentCost: number; // INR, default 150,000
  monthlySoftwareCost: number; // INR, default 5,000
  otherRecurringMonthlyCost: number; // INR, default 3,000

  // Optional Additional Operational Benefits
  adminSavingsMonthly: number; // default 0
  documentationSavingsMonthly: number; // default 0
  otherVerifiedSavingsMonthly: number; // default 0
}

export const DEFAULT_ROI_INPUTS: RoiCalculatorInputs = {
  operatorsPerShift: 3,
  shiftsPerDay: 3,
  operatingDaysPerMonth: 30,
  monthlySalaryPerOperator: 25000,
  monthlyOverheadPerOperator: 0,
  reliefStaffingFactor: 1.0,
  useReliefCoverage: false,
  staffingModel: 'payroll_full_month',
  operatorCostReductionPct: 70,
  oneTimeDeploymentCost: 150000,
  monthlySoftwareCost: 5000,
  otherRecurringMonthlyCost: 3000,
  adminSavingsMonthly: 0,
  documentationSavingsMonthly: 0,
  otherVerifiedSavingsMonthly: 0,
};

export interface ScenarioMetrics {
  name: string;
  label: string;
  description: string;
  reductionPct: number;
  deploymentCost: number;
  monthlySoftwareCost: number;
  otherRecurringMonthlyCost: number;
  grossMonthlyStaffingSavings: number;
  monthlyNetSavings: number;
  annualNetSavings: number;
  paybackMonths: number | null;
  paybackDisplay: string;
  firstYearRoiPct: number | null;
  firstYearRoiDisplay: string;
  threeYearNetBenefit: number;
  threeYearRoiPct: number | null;
  threeYearRoiDisplay: string;
}

export interface MonthlyTimelinePoint {
  month: number;
  label: string;
  cumulativeNetBenefit: number;
  cumulativeCurrentCost: number;
  cumulativeAutomatedCost: number;
  isBreakEven: boolean;
}

export interface RoiCalculatorResults {
  // Headcount & Staffing
  dailyPositions: number;
  effectiveReliefFactor: number;
  requiredHeadcount: number;
  loadedMonthlyCostPerOperator: number;

  // Current Operating Costs (Before Gluvok)
  currentMonthlyStaffingCost: number;
  currentAnnualStaffingCost: number;
  currentThreeYearStaffingCost: number;

  // Post-Automation Breakdown (After Gluvok)
  grossMonthlyStaffingSavings: number;
  grossAnnualStaffingSavings: number;
  grossThreeYearStaffingSavings: number;
  additionalMonthlyBenefits: number;
  totalMonthlyRecurringAutomationCost: number;
  estimatedRemainingStaffingCost: number;
  estimatedFutureMonthlyOperatingCost: number;
  monthlyOperatingCostReductionPct: number;
  simplifiedRemainingHeadcountEquiv: number;

  // Net Savings & Benefits
  netMonthlySavings: number;
  annualNetSavings: number;
  firstYearNetBenefit: number;
  threeYearCumulativeNetBenefit: number;

  // Investment, Payback & ROI
  oneTimeDeploymentCost: number;
  firstYearRoiPct: number | null;
  firstYearRoiDisplay: string;
  threeYearRoiPct: number | null;
  threeYearRoiDisplay: string;
  paybackPeriodMonths: number | null;
  paybackPeriodDisplay: string;
  breakEvenMonth: number | null;

  // Cost over Time
  totalAutomationCostOneYear: number;
  totalAutomationCostThreeYear: number;

  // Safety / Boundary Flags
  isNegativeNetSavings: boolean;
  isZeroInvestment: boolean;

  // 36-Month Cumulative Timeline
  timeline36Months: MonthlyTimelinePoint[];

  // 3 Comparison Scenarios
  scenarios: {
    conservative: ScenarioMetrics;
    expected: ScenarioMetrics;
    optimistic: ScenarioMetrics;
  };
}

/**
 * Format any number into Indian Rupee representation (e.g., ₹1,25,000)
 */
export function formatINR(val: number, options?: { showDecimals?: boolean; fallbackZero?: boolean }): string {
  if (isNaN(val) || !isFinite(val)) {
    return options?.fallbackZero ? '₹0' : '—';
  }
  const isNegative = val < 0;
  const absVal = Math.abs(val);

  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: options?.showDecimals ? 2 : 0,
    minimumFractionDigits: options?.showDecimals ? 2 : 0,
  }).format(absVal);

  return `${isNegative ? '-' : ''}₹${formatted}`;
}

/**
 * Format large INR numbers into Lakhs / Crores for compact visualization
 */
export function formatCompactINR(val: number): string {
  if (isNaN(val) || !isFinite(val)) return '—';
  const isNegative = val < 0;
  const absVal = Math.abs(val);

  let formatted: string;
  if (absVal >= 10000000) {
    formatted = `${(absVal / 10000000).toFixed(2)} Cr`;
  } else if (absVal >= 100000) {
    formatted = `${(absVal / 100000).toFixed(2)} L`;
  } else if (absVal >= 1000) {
    formatted = `${(absVal / 1000).toFixed(1)} k`;
  } else {
    formatted = absVal.toFixed(0);
  }

  return `${isNegative ? '-' : ''}₹${formatted}`;
}

/**
 * Calculate complete financial metrics and scenario projections
 */
export function calculateRoi(inputs: RoiCalculatorInputs): RoiCalculatorResults {
  // Sanitize numeric inputs (prevent NaN / negative inputs)
  const operatorsPerShift = Math.max(0, Math.min(250, Number(inputs.operatorsPerShift) || 0));
  const shiftsPerDay = ([1, 2, 3, 4].includes(inputs.shiftsPerDay) ? inputs.shiftsPerDay : 3) as 1 | 2 | 3 | 4;
  const operatingDays = Math.max(1, Math.min(31, Number(inputs.operatingDaysPerMonth) || 30));
  const salary = Math.max(0, Number(inputs.monthlySalaryPerOperator) || 0);
  const overhead = Math.max(0, Number(inputs.monthlyOverheadPerOperator) || 0);
  const loadedMonthlyCostPerOperator = salary + overhead;

  // Relief staffing multiplier
  const effectiveReliefFactor = inputs.useReliefCoverage
    ? Math.max(1.0, Math.min(2.0, Number(inputs.reliefStaffingFactor) || 1.0))
    : 1.0;

  // Total daily positions: O * S
  const dailyPositions = operatorsPerShift * shiftsPerDay;

  // Required headcount: CEILING(O * S * R)
  const requiredHeadcount = Math.ceil(dailyPositions * effectiveReliefFactor);

  // Current Monthly Staffing Cost
  let currentMonthlyStaffingCost = 0;
  if (inputs.staffingModel === 'operating_days_prorated') {
    currentMonthlyStaffingCost = requiredHeadcount * loadedMonthlyCostPerOperator * (operatingDays / 30);
  } else {
    // Default: full month payroll
    currentMonthlyStaffingCost = requiredHeadcount * loadedMonthlyCostPerOperator;
  }
  const currentAnnualStaffingCost = currentMonthlyStaffingCost * 12;
  const currentThreeYearStaffingCost = currentMonthlyStaffingCost * 36;

  // Automation assumptions
  const reductionPct = Math.max(0, Math.min(100, Number(inputs.operatorCostReductionPct) || 0));
  const deploymentCost = Math.max(0, Number(inputs.oneTimeDeploymentCost) || 0);
  const monthlySoftwareCost = Math.max(0, Number(inputs.monthlySoftwareCost) || 0);
  const otherRecurringMonthlyCost = Math.max(0, Number(inputs.otherRecurringMonthlyCost) || 0);
  const totalMonthlyRecurringAutomationCost = monthlySoftwareCost + otherRecurringMonthlyCost;

  // Additional Operational Benefits
  const adminSavings = Math.max(0, Number(inputs.adminSavingsMonthly) || 0);
  const docSavings = Math.max(0, Number(inputs.documentationSavingsMonthly) || 0);
  const otherSavings = Math.max(0, Number(inputs.otherVerifiedSavingsMonthly) || 0);
  const additionalMonthlyBenefits = adminSavings + docSavings + otherSavings;

  // Savings Calculations
  const grossMonthlyStaffingSavings = currentMonthlyStaffingCost * (reductionPct / 100);
  const grossAnnualStaffingSavings = grossMonthlyStaffingSavings * 12;
  const grossThreeYearStaffingSavings = grossMonthlyStaffingSavings * 36;
  const estimatedRemainingStaffingCost = currentMonthlyStaffingCost - grossMonthlyStaffingSavings;
  const estimatedFutureMonthlyOperatingCost = estimatedRemainingStaffingCost + totalMonthlyRecurringAutomationCost;

  // Net monthly savings
  const netMonthlySavings = grossMonthlyStaffingSavings + additionalMonthlyBenefits - totalMonthlyRecurringAutomationCost;
  const annualNetSavings = netMonthlySavings * 12;
  const firstYearNetBenefit = annualNetSavings - deploymentCost;
  const threeYearCumulativeNetBenefit = (netMonthlySavings * 36) - deploymentCost;

  // Operating cost reduction percentage
  let monthlyOperatingCostReductionPct = 0;
  if (currentMonthlyStaffingCost > 0) {
    monthlyOperatingCostReductionPct = ((currentMonthlyStaffingCost - estimatedFutureMonthlyOperatingCost) / currentMonthlyStaffingCost) * 100;
  }

  // Simplified remaining headcount equivalent
  const simplifiedRemainingHeadcountEquiv = Math.max(0, Math.round(requiredHeadcount * (1 - reductionPct / 100)));

  // ROI Calculations
  const isZeroInvestment = deploymentCost === 0;
  const isNegativeNetSavings = netMonthlySavings <= 0;

  // First-Year ROI
  let firstYearRoiPct: number | null = null;
  let firstYearRoiDisplay = 'Not applicable';
  if (!isZeroInvestment) {
    firstYearRoiPct = (firstYearNetBenefit / deploymentCost) * 100;
    firstYearRoiDisplay = `${firstYearRoiPct.toFixed(1)}%`;
  }

  // 3-Year ROI
  let threeYearRoiPct: number | null = null;
  let threeYearRoiDisplay = 'Not applicable';
  if (!isZeroInvestment) {
    threeYearRoiPct = (threeYearCumulativeNetBenefit / deploymentCost) * 100;
    threeYearRoiDisplay = `${threeYearRoiPct.toFixed(1)}%`;
  }

  // Payback Period (Months)
  let paybackPeriodMonths: number | null = null;
  let paybackPeriodDisplay = 'No payback under current assumptions';
  let breakEvenMonth: number | null = null;

  if (netMonthlySavings > 0) {
    if (deploymentCost === 0) {
      paybackPeriodMonths = 0;
      paybackPeriodDisplay = 'Immediate (₹0 Capex)';
      breakEvenMonth = 0;
    } else {
      const rawMonths = deploymentCost / netMonthlySavings;
      paybackPeriodMonths = Number(rawMonths.toFixed(1));
      breakEvenMonth = Math.ceil(rawMonths);
      if (rawMonths < 1) {
        paybackPeriodDisplay = '< 1 month';
      } else {
        paybackPeriodDisplay = `${rawMonths.toFixed(1)} months`;
      }
    }
  }

  // Total Automation Costs
  const totalAutomationCostOneYear = deploymentCost + (totalMonthlyRecurringAutomationCost * 12);
  const totalAutomationCostThreeYear = deploymentCost + (totalMonthlyRecurringAutomationCost * 36);

  // 36-Month Cumulative Timeline
  const timeline36Months: MonthlyTimelinePoint[] = [];
  for (let m = 0; m <= 36; m++) {
    const cumulativeNetBenefit = (m * netMonthlySavings) - deploymentCost;
    const cumulativeCurrentCost = m * currentMonthlyStaffingCost;
    const cumulativeAutomatedCost = deploymentCost + (m * estimatedFutureMonthlyOperatingCost);
    timeline36Months.push({
      month: m,
      label: m === 0 ? 'M0 (Deploy)' : `M${m}`,
      cumulativeNetBenefit,
      cumulativeCurrentCost,
      cumulativeAutomatedCost,
      isBreakEven: breakEvenMonth !== null && m === breakEvenMonth,
    });
  }

  // Scenarios helper
  function computeScenario(
    name: string,
    label: string,
    description: string,
    scenReductionPct: number,
    scenDeploymentCost: number,
    scenMonthlySoftware: number,
    scenOtherRecurring: number,
    scenAdditionalBenefits: number
  ): ScenarioMetrics {
    const sGrossSavings = currentMonthlyStaffingCost * (scenReductionPct / 100);
    const sRecurring = scenMonthlySoftware + scenOtherRecurring;
    const sNetMonthly = sGrossSavings + scenAdditionalBenefits - sRecurring;
    const sAnnualNet = sNetMonthly * 12;
    const sFirstYearBenefit = sAnnualNet - scenDeploymentCost;
    const sThreeYearBenefit = (sNetMonthly * 36) - scenDeploymentCost;

    let sPaybackMonths: number | null = null;
    let sPaybackDisplay = 'No payback';
    if (sNetMonthly > 0) {
      if (scenDeploymentCost === 0) {
        sPaybackMonths = 0;
        sPaybackDisplay = 'Immediate';
      } else {
        const p = scenDeploymentCost / sNetMonthly;
        sPaybackMonths = Number(p.toFixed(1));
        sPaybackDisplay = p < 1 ? '< 1 month' : `${p.toFixed(1)} mos`;
      }
    }

    let sFirstYearRoi: number | null = null;
    let sFirstYearRoiDisp = 'Not applicable';
    if (scenDeploymentCost > 0) {
      sFirstYearRoi = (sFirstYearBenefit / scenDeploymentCost) * 100;
      sFirstYearRoiDisp = `${sFirstYearRoi.toFixed(1)}%`;
    }

    let sThreeYearRoi: number | null = null;
    let sThreeYearRoiDisp = 'Not applicable';
    if (scenDeploymentCost > 0) {
      sThreeYearRoi = (sThreeYearBenefit / scenDeploymentCost) * 100;
      sThreeYearRoiDisp = `${sThreeYearRoi.toFixed(1)}%`;
    }

    return {
      name,
      label,
      description,
      reductionPct: scenReductionPct,
      deploymentCost: scenDeploymentCost,
      monthlySoftwareCost: scenMonthlySoftware,
      otherRecurringMonthlyCost: scenOtherRecurring,
      grossMonthlyStaffingSavings: sGrossSavings,
      monthlyNetSavings: sNetMonthly,
      annualNetSavings: sAnnualNet,
      paybackMonths: sPaybackMonths,
      paybackDisplay: sPaybackDisplay,
      firstYearRoiPct: sFirstYearRoi,
      firstYearRoiDisplay: sFirstYearRoiDisp,
      threeYearNetBenefit: sThreeYearBenefit,
      threeYearRoiPct: sThreeYearRoi,
      threeYearRoiDisplay: sThreeYearRoiDisp,
    };
  }

  // 1. Conservative: Lower staffing reduction (50%), higher capex (+33%), higher software & maintenance (+40%)
  const conservativeReduction = Math.max(30, Math.min(60, reductionPct - 20));
  const conservative = computeScenario(
    'conservative',
    'Conservative Scenario',
    'Lower staffing reduction with higher integration and maintenance contingency.',
    conservativeReduction,
    Math.round(deploymentCost * 1.33),
    Math.round(monthlySoftwareCost * 1.4),
    Math.round(otherRecurringMonthlyCost * 1.5),
    additionalMonthlyBenefits * 0.5
  );

  // 2. Expected: Exact user inputs
  const expected = computeScenario(
    'expected',
    'Expected Scenario',
    'Calculated based directly on your current operating inputs and baseline plan.',
    reductionPct,
    deploymentCost,
    monthlySoftwareCost,
    otherRecurringMonthlyCost,
    additionalMonthlyBenefits
  );

  // 3. Optimistic: Higher staffing reduction (85%), streamlined recurring fees
  const optimisticReduction = Math.max(70, Math.min(95, reductionPct + 15));
  const optimistic = computeScenario(
    'optimistic',
    'Optimistic Scenario',
    'Maximized automation adoption with streamlined remote telemetry maintenance.',
    optimisticReduction,
    Math.round(deploymentCost * 0.9),
    Math.round(monthlySoftwareCost * 0.9),
    Math.round(otherRecurringMonthlyCost * 0.8),
    additionalMonthlyBenefits * 1.25
  );

  return {
    dailyPositions,
    effectiveReliefFactor,
    requiredHeadcount,
    loadedMonthlyCostPerOperator,
    currentMonthlyStaffingCost,
    currentAnnualStaffingCost,
    currentThreeYearStaffingCost,
    grossMonthlyStaffingSavings,
    grossAnnualStaffingSavings,
    grossThreeYearStaffingSavings,
    additionalMonthlyBenefits,
    totalMonthlyRecurringAutomationCost,
    estimatedRemainingStaffingCost,
    estimatedFutureMonthlyOperatingCost,
    monthlyOperatingCostReductionPct,
    simplifiedRemainingHeadcountEquiv,
    netMonthlySavings,
    annualNetSavings,
    firstYearNetBenefit,
    threeYearCumulativeNetBenefit,
    oneTimeDeploymentCost: deploymentCost,
    firstYearRoiPct,
    firstYearRoiDisplay,
    threeYearRoiPct,
    threeYearRoiDisplay,
    paybackPeriodMonths,
    paybackPeriodDisplay,
    breakEvenMonth,
    totalAutomationCostOneYear,
    totalAutomationCostThreeYear,
    isNegativeNetSavings,
    isZeroInvestment,
    timeline36Months,
    scenarios: {
      conservative,
      expected,
      optimistic,
    },
  };
}
