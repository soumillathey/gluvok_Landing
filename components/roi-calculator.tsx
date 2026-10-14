"use client";

import React, { useState, useId } from "react";
import {
  calculateRoi,
  formatINR,
  DEFAULT_ROI_INPUTS,
  type RoiCalculatorInputs,
  type RoiCalculatorResults,
} from "@/lib/roi-calculator";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  Info,
} from "lucide-react";

export function RoiCalculator({
  className = "",
  initialInputs = DEFAULT_ROI_INPUTS,
}: {
  className?: string;
  initialInputs?: Partial<RoiCalculatorInputs>;
}) {
  const [inputs, setInputs] = useState<RoiCalculatorInputs>({
    ...DEFAULT_ROI_INPUTS,
    ...initialInputs,
    // By default, since automation price has not been set, default user capex & recurring budget to 0
    oneTimeDeploymentCost: initialInputs.oneTimeDeploymentCost ?? 0,
    monthlySoftwareCost: initialInputs.monthlySoftwareCost ?? 0,
    otherRecurringMonthlyCost: initialInputs.otherRecurringMonthlyCost ?? 0,
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const results: RoiCalculatorResults = calculateRoi(inputs);

  const handleInputChange = <K extends keyof RoiCalculatorInputs>(
    key: K,
    value: RoiCalculatorInputs[K]
  ) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setInputs({
      ...DEFAULT_ROI_INPUTS,
      oneTimeDeploymentCost: 0,
      monthlySoftwareCost: 0,
      otherRecurringMonthlyCost: 0,
    });
  };

  // Accessibility IDs
  const idOperators = useId();
  const idSalary = useId();
  const idReduction = useId();
  const idDeployment = useId();
  const idSoftware = useId();
  const idRecurring = useId();

  // Check if user has entered custom capex/software assumptions
  const hasCustomBudget =
    inputs.oneTimeDeploymentCost > 0 ||
    inputs.monthlySoftwareCost > 0 ||
    inputs.otherRecurringMonthlyCost > 0;

  return (
    <div
      id="roi-calculator"
      className={`rounded-[12px] border border-[var(--border-hairline)] bg-[var(--surface-card)] p-6 sm:p-8 lg:p-10 shadow-sm transition-all ${className}`}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER STRIP (Clean & Matches Site Aesthetic)
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-hairline)] mb-8">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="font-heading font-extrabold text-2xl tracking-tight text-[var(--text-primary)]">
              Weighbridge Staffing &amp; Potential Savings Calculator
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-[var(--olive-wash)] border border-[var(--olive-border)] text-[11px] font-mono font-medium text-[var(--olive-text)]">
              Tailored Pricing Model
            </span>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] max-w-2xl">
            Calculate your current operator salary spend and see the potential amount that can be saved using Gluvok automation.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] border border-[var(--border-hairline)] bg-[var(--bg-canvas)] text-xs font-sans text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--olive-accent)] transition-colors self-start sm:self-center shrink-0"
        >
          <RotateCcw className="size-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. 2-COLUMN LAYOUT (Operational Inputs vs Hero Comparison)
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: 4 Operational Staffing Inputs (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Input 1: Operators per Shift */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={idOperators} className="font-sans text-xs uppercase tracking-wider font-medium text-[var(--text-muted)]">
                Operators Required Per Shift:
              </label>
              <div className="flex items-center gap-1.5">
                <input
                  id={idOperators}
                  type="number"
                  min="0"
                  max="250"
                  value={inputs.operatorsPerShift}
                  onChange={(e) => handleInputChange("operatorsPerShift", Math.max(0, Number(e.target.value)))}
                  className="w-16 px-2 py-1 rounded-[6px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-right font-mono text-sm font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--olive-accent)]"
                />
                <span className="font-mono text-xs text-[var(--text-muted)]">ops</span>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={Math.min(inputs.operatorsPerShift, 50)}
              onChange={(e) => handleInputChange("operatorsPerShift", Number(e.target.value))}
              className="w-full accent-[var(--olive-accent)] cursor-pointer"
              aria-label="Operators per shift slider"
            />

            {/* Quick Preset Buttons */}
            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              <span className="text-[11px] font-sans text-[var(--text-muted)] mr-1">Presets:</span>
              {[1, 2, 3, 5, 8, 12].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleInputChange("operatorsPerShift", num)}
                  className={`px-2 py-0.5 rounded-[4px] border font-mono text-[11px] transition-colors ${
                    inputs.operatorsPerShift === num
                      ? "bg-[var(--olive-accent)] text-white border-[var(--olive-accent)] font-semibold"
                      : "bg-[var(--bg-canvas)] text-[var(--text-muted)] border-[var(--border-hairline)] hover:border-[var(--olive-accent)]"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Input 2: Shifts Per Day */}
          <div>
            <label className="font-sans text-xs uppercase tracking-wider font-medium text-[var(--text-muted)] block mb-2">
              Operating Shifts Per Day:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleInputChange("shiftsPerDay", s as 1 | 2 | 3 | 4)}
                  className={`p-2.5 rounded-[6px] border text-center transition-all ${
                    inputs.shiftsPerDay === s
                      ? "bg-[var(--olive-accent)] text-white border-[var(--olive-accent)] shadow-xs font-semibold"
                      : "bg-[var(--bg-canvas)] text-[var(--text-primary)] border-[var(--border-hairline)] hover:border-[var(--olive-accent)]"
                  }`}
                >
                  <div className="font-mono text-xs font-bold">{s} Shift{s > 1 ? "s" : ""}</div>
                  <div className="text-[10px] opacity-80 mt-0.5">
                    {24 / s}h each
                  </div>
                </button>
              ))}
            </div>
            <p className="font-sans text-[11px] text-[var(--text-muted)] mt-1.5">
              {inputs.shiftsPerDay === 3
                ? "Standard 24h continuous operation (3 shifts = 9 total operators)."
                : inputs.shiftsPerDay === 2
                ? "Two 12-hour shifts covering 24 hours."
                : inputs.shiftsPerDay === 1
                ? "Single daytime shift (8 hours)."
                : "Four 6-hour high-tempo rotations."}
            </p>
          </div>

          {/* Input 3: Operator Salary */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor={idSalary} className="font-sans text-xs uppercase tracking-wider font-medium text-[var(--text-muted)]">
                Monthly Salary Per Operator:
              </label>
              <span className="font-mono text-xs font-semibold text-[var(--text-primary)] tabular-nums">
                {formatINR(inputs.monthlySalaryPerOperator)} / mo
              </span>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-2 text-xs font-mono text-[var(--text-muted)]" aria-hidden="true">₹</span>
              <input
                id={idSalary}
                type="number"
                step="1000"
                min="0"
                max="250000"
                value={inputs.monthlySalaryPerOperator}
                onChange={(e) => handleInputChange("monthlySalaryPerOperator", Math.max(0, Number(e.target.value)))}
                className="w-full pl-7 pr-3 py-1.5 rounded-[6px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] font-mono text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--olive-accent)]"
              />
            </div>
            <span className="font-sans text-[11px] text-[var(--text-muted)] mt-1 block">
              Direct salary or loaded payroll cost per operator.
            </span>
          </div>

          {/* Input 4: Assumed Automation Potential */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor={idReduction} className="font-sans text-xs uppercase tracking-wider font-medium text-[var(--text-muted)]">
                Manual Workflow Reduction:
              </label>
              <span className="font-mono text-sm font-bold text-[var(--olive-accent)]">
                {inputs.operatorCostReductionPct}%
              </span>
            </div>
            <input
              id={idReduction}
              type="range"
              min="30"
              max="90"
              step="5"
              value={inputs.operatorCostReductionPct}
              onChange={(e) => handleInputChange("operatorCostReductionPct", Number(e.target.value))}
              className="w-full accent-[var(--olive-accent)] cursor-pointer"
              aria-label="Staffing reduction slider"
            />
            <div className="flex justify-between font-mono text-[10px] text-[var(--text-muted)] mt-1">
              <span>30% Assisted</span>
              <span>70% Standard Gluvok</span>
              <span>90% Max Unmanned</span>
            </div>
            <p className="font-sans text-[11px] text-[var(--text-muted)] mt-1">
              Gluvok automates optical plate capture, gross/tare recording, and slip dispatch, eliminating routine manual operator dependency.
            </p>
          </div>

          {/* Optional Collapsible: Custom Budget Modeling (Capex / Fees) */}
          <div className="pt-2 border-t border-[var(--border-hairline)]">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center justify-between w-full font-sans text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-1"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <span>Custom Budget Modeling (Optional Capex &amp; Fees)</span>
              </span>
              {showAdvanced ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
            </button>

            {showAdvanced && (
              <div className="mt-3 p-4 rounded-[8px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-3.5 text-xs">
                <div className="flex items-start gap-1.5 text-[11px] text-[var(--text-muted)] leading-relaxed pb-2 border-b border-[var(--border-hairline)]">
                  <Info className="size-3.5 shrink-0 mt-0.5 text-[var(--olive-accent)]" />
                  <span>
                    <strong>Pricing Note:</strong> Gluvok does not charge a fixed list price; deployment is quoted per site based on scale indicators, cameras, and barriers. Enter your internal budget below if you wish to simulate net cash flows.
                  </span>
                </div>

                <div>
                  <label htmlFor={idDeployment} className="font-sans text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                    Estimated Deployment Capex (Optional):
                  </label>
                  <input
                    id={idDeployment}
                    type="number"
                    step="10000"
                    min="0"
                    value={inputs.oneTimeDeploymentCost}
                    onChange={(e) => handleInputChange("oneTimeDeploymentCost", Math.max(0, Number(e.target.value)))}
                    placeholder="0 (Custom Quote)"
                    className="w-full px-3 py-1 rounded-[4px] bg-white border border-[var(--border-hairline)] font-mono text-xs text-[var(--text-primary)]"
                  />
                  <span className="font-sans text-[10px] text-[var(--text-muted)] mt-0.5 block">
                    Leave as 0 for tailored quote on request.
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor={idSoftware} className="font-sans text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                      Monthly Software Fee:
                    </label>
                    <input
                      id={idSoftware}
                      type="number"
                      step="500"
                      min="0"
                      value={inputs.monthlySoftwareCost}
                      onChange={(e) => handleInputChange("monthlySoftwareCost", Math.max(0, Number(e.target.value)))}
                      placeholder="0 (Quoted)"
                      className="w-full px-3 py-1 rounded-[4px] bg-white border border-[var(--border-hairline)] font-mono text-xs text-[var(--text-primary)]"
                    />
                  </div>

                  <div>
                    <label htmlFor={idRecurring} className="font-sans text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                      Recurring Maint. / LTE:
                    </label>
                    <input
                      id={idRecurring}
                      type="number"
                      step="500"
                      min="0"
                      value={inputs.otherRecurringMonthlyCost}
                      onChange={(e) => handleInputChange("otherRecurringMonthlyCost", Math.max(0, Number(e.target.value)))}
                      placeholder="0"
                      className="w-full px-3 py-1 rounded-[4px] bg-white border border-[var(--border-hairline)] font-mono text-xs text-[var(--text-primary)]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Results & Visual Comparison (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* ─────────────────────────────────────────────────────────────
              HERO CARD: Current Salary Amount ------------> Potential Saved Using Gluvok
          ───────────────────────────────────────────────────────────── */}
          <div className="p-6 sm:p-7 rounded-[12px] bg-[var(--olive-wash)] border-2 border-[var(--olive-border)] transition-colors shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[var(--olive-border)]">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-[var(--olive-accent)]" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-[var(--olive-text)]">
                  OPERATIONAL SALARY SPEND VS. POTENTIAL SAVINGS
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-white border border-[var(--olive-border)] font-mono text-[10px] text-[var(--olive-text)] font-semibold">
                Automation Price: Custom Quoted
              </span>
            </div>

            {/* Direct Side-by-Side Transition */}
            <div className="grid grid-cols-1 md:grid-cols-11 gap-3 sm:gap-4 items-center">
              {/* Left Box: Current Salary Amount */}
              <div className="md:col-span-5 p-4 sm:p-5 rounded-[10px] bg-white border border-[var(--olive-border)] shadow-xs">
                <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)] block mb-1">
                  Current Salary Spend
                </span>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight tabular-nums">
                  {formatINR(results.currentMonthlyStaffingCost)}
                  <span className="text-xs font-sans font-normal text-[var(--text-muted)] ml-1.5">/ month</span>
                </div>
                <div className="font-mono text-sm font-semibold text-[var(--text-muted)] mt-1 tabular-nums">
                  {formatINR(results.currentAnnualStaffingCost)} / year
                </div>
                <div className="mt-3 pt-2.5 border-t border-[var(--border-hairline)] text-[11px] font-sans text-[var(--text-muted)] space-y-0.5">
                  <div>
                    • <strong>{results.requiredHeadcount} operators</strong> ({inputs.operatorsPerShift} per shift × {inputs.shiftsPerDay} shifts)
                  </div>
                  <div>
                    • <strong>{formatINR(inputs.monthlySalaryPerOperator)}</strong> salary per operator / mo
                  </div>
                </div>
              </div>

              {/* Center Transition: ------------> using Gluvok */}
              <div className="md:col-span-1 flex flex-col items-center justify-center py-2 md:py-0 text-center">
                <div className="hidden md:flex flex-col items-center gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)] whitespace-nowrap">
                    potential
                  </span>
                  <div className="flex items-center text-[var(--olive-accent)] my-0.5">
                    <span className="font-mono text-base tracking-tighter leading-none">──────►</span>
                  </div>
                  <span className="font-heading font-extrabold text-[11px] text-[var(--olive-accent)] tracking-tight whitespace-nowrap bg-white px-2 py-0.5 rounded border border-[var(--olive-border)] shadow-2xs">
                    using GLUVOK
                  </span>
                  <div className="flex items-center text-[var(--olive-accent)] my-0.5">
                    <span className="font-mono text-base tracking-tighter leading-none">──────►</span>
                  </div>
                  <span className="font-mono text-[9px] text-[var(--olive-accent)] font-bold whitespace-nowrap">
                    {inputs.operatorCostReductionPct}% Saved
                  </span>
                </div>

                {/* Mobile version of transition */}
                <div className="flex md:hidden items-center justify-center gap-2 py-1 text-[var(--olive-accent)]">
                  <span className="font-mono text-xs">────────►</span>
                  <span className="font-heading font-extrabold text-xs tracking-tight bg-white px-2.5 py-0.5 rounded border border-[var(--olive-border)]">
                    using GLUVOK ({inputs.operatorCostReductionPct}% Saved)
                  </span>
                  <span className="font-mono text-xs">────────►</span>
                </div>
              </div>

              {/* Right Box: Potential Amount Saved Using Gluvok */}
              <div className="md:col-span-5 p-4 sm:p-5 rounded-[10px] bg-white border-2 border-[var(--olive-accent)] shadow-xs relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[var(--olive-accent)] text-white font-mono text-[10px] font-semibold px-2 py-0.5 rounded-bl-[6px]">
                  POTENTIAL SAVINGS
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[var(--olive-accent)] block mb-1">
                  Potential Amount Saved
                </span>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[var(--olive-accent)] tracking-tight tabular-nums">
                  {formatINR(results.grossMonthlyStaffingSavings)}
                  <span className="text-xs font-sans font-normal text-[var(--text-muted)] ml-1.5">/ month</span>
                </div>
                <div className="font-mono text-sm font-bold text-[var(--olive-accent)] mt-1 tabular-nums">
                  {formatINR(results.grossAnnualStaffingSavings)} / year
                </div>
                <div className="mt-3 pt-2.5 border-t border-[var(--border-hairline)] text-[11px] font-sans text-[var(--text-muted)] space-y-0.5">
                  <div>
                    • <strong>{formatINR(results.grossThreeYearStaffingSavings)}</strong> potential 3-year savings
                  </div>
                  <div>
                    • <strong>{formatINR(results.estimatedRemainingStaffingCost)} / mo</strong> remaining staffing
                  </div>
                </div>
              </div>
            </div>

            {/* Transparent Note on Automation Pricing */}
            <div className="mt-5 pt-4 border-t border-[var(--olive-border)] text-xs font-sans text-[var(--text-muted)] leading-relaxed flex items-start gap-2">
              <Info className="size-4 shrink-0 mt-0.5 text-[var(--olive-accent)]" />
              <p>
                <strong>Pricing Transparency:</strong> We have not set a fixed automation price. Gluvok deployment and software licensing are tailored to your weighbridge stations, indicator models, barrier integration, and camera count. The figures above reflect your current operator salary spend and the potential savings unlocked by Gluvok automation.
              </p>
            </div>
          </div>

          {/* 4 Clean Summary Metric Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-[8px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)]">
              <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                Current Annual Salary Spend
              </div>
              <div className="font-mono text-lg font-bold text-[var(--text-primary)] mt-1 tabular-nums">
                {formatINR(results.currentAnnualStaffingCost)}
              </div>
              <div className="font-sans text-[11px] text-[var(--text-muted)] mt-1">
                {results.requiredHeadcount} operators across {inputs.shiftsPerDay} shifts
              </div>
            </div>

            <div className="p-4 rounded-[8px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)]">
              <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                Potential Annual Savings
              </div>
              <div className="font-mono text-lg font-bold text-[var(--olive-accent)] mt-1 tabular-nums">
                {formatINR(results.grossAnnualStaffingSavings)}
              </div>
              <div className="font-sans text-[11px] text-[var(--text-muted)] mt-1">
                {inputs.operatorCostReductionPct}% manual reduction
              </div>
            </div>

            <div className="p-4 rounded-[8px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)]">
              <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                Post-Automation Staffing
              </div>
              <div className="font-mono text-lg font-bold text-[var(--text-primary)] mt-1 tabular-nums">
                {formatINR(results.estimatedRemainingStaffingCost)}
                <span className="text-[11px] font-normal text-[var(--text-muted)] ml-1">/ mo</span>
              </div>
              <div className="font-sans text-[11px] text-[var(--text-muted)] mt-1">
                ~{results.simplifiedRemainingHeadcountEquiv} supervisory operators retained
              </div>
            </div>

            <div className="p-4 rounded-[8px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)]">
              <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                Automation Pricing
              </div>
              <div className="font-mono text-lg font-bold text-[var(--olive-accent)] mt-1">
                Custom Quote
              </div>
              <div className="font-sans text-[11px] text-[var(--text-muted)] mt-1">
                Tailored per weighbridge &amp; cameras
              </div>
            </div>
          </div>

          {/* Simple Before vs After Visual Bar */}
          <div className="p-4 rounded-[8px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)]">
            <div className="flex justify-between items-center text-xs font-sans text-[var(--text-muted)] mb-2">
              <span>Monthly Salary Comparison:</span>
              <span className="font-mono font-semibold text-[var(--olive-accent)]">
                {inputs.operatorCostReductionPct}% Potential Savings ({formatINR(results.grossMonthlyStaffingSavings)} / mo)
              </span>
            </div>

            {/* Visual comparison bar */}
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1">
                  <span className="text-[var(--text-muted)]">Current Operator Payroll (Manual)</span>
                  <span className="font-semibold">{formatINR(results.currentMonthlyStaffingCost)} / mo</span>
                </div>
                <div className="h-4 rounded bg-[#E4E5DD] w-full overflow-hidden">
                  <div className="h-full bg-[#9E9F94] w-full rounded" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1">
                  <span className="text-[var(--olive-accent)] font-semibold">Estimated Post-Automation Staffing</span>
                  <span className="font-bold text-[var(--olive-accent)]">{formatINR(results.estimatedRemainingStaffingCost)} / mo</span>
                </div>
                <div className="h-4 rounded bg-[#E4E5DD] w-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--olive-accent)] rounded transition-all duration-300"
                    style={{
                      width: `${Math.max(
                        10,
                        results.currentMonthlyStaffingCost > 0
                          ? (results.estimatedRemainingStaffingCost / results.currentMonthlyStaffingCost) * 100
                          : 0
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* If user modeled custom budget in Advanced, display simulated net benefit */}
          {hasCustomBudget && (
            <div className="p-3.5 rounded-[8px] bg-white border border-[var(--border-hairline)] text-xs text-[var(--text-muted)] space-y-1 font-sans">
              <div className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[var(--text-primary)]">
                Custom Budget Simulation (Based on User-Entered Capex &amp; Fees)
              </div>
              <div>
                Simulated Net Annual Benefit: <strong className="font-mono text-[var(--text-primary)]">{formatINR(results.annualNetSavings)} / year</strong>
                {inputs.oneTimeDeploymentCost > 0 && (
                  <span className="ml-2">(Estimated Payback: <strong className="font-mono text-[var(--olive-accent)]">{results.paybackPeriodDisplay}</strong>)</span>
                )}
              </div>
            </div>
          )}

          {/* Call to Action Button */}
          <div className="pt-2">
            <a
              href="#book-demo"
              className="w-full h-11 px-6 rounded-[8px] bg-[var(--olive-accent)] text-[#FFFFFF] font-sans font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[var(--olive-accent-hover)] transition-all active:scale-[0.98] shadow-xs"
            >
              <span>Request Tailored Automation Quote &amp; Site Walkthrough</span>
              <ArrowRight className="size-4" />
            </a>
            <p className="font-sans text-[11px] text-[var(--text-muted)] text-center mt-2">
              Estimates are based on {inputs.operatorsPerShift} operator(s)/shift across {inputs.shiftsPerDay} shift(s). Talk to our engineering team to get an exact quotation tailored to your site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
