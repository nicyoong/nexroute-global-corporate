"use client";

import { useState } from "react";

type FreightMethod = "air" | "sea";

const FREIGHT_DIVISORS: Record<FreightMethod, number> = {
  air: 5000,
  sea: 1000,
};

const FREIGHT_LABELS: Record<FreightMethod, string> = {
  air: "Air Freight",
  sea: "Sea Freight",
};

export default function ChargeableWeightCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [actualWeight, setActualWeight] = useState("");
  const [freightMethod, setFreightMethod] = useState<FreightMethod>("air");
  const [showResult, setShowResult] = useState(false);

  const dimensionalWeight = calculateDimensionalWeight(
    parseFloat(length),
    parseFloat(width),
    parseFloat(height),
    freightMethod
  );

  const actualWeightNum = parseFloat(actualWeight) || 0;
  const chargeableWeight = Math.max(actualWeightNum, dimensionalWeight);
  const isDimensional = dimensionalWeight > actualWeightNum;

  const handleCalculate = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setLength("");
    setWidth("");
    setHeight("");
    setActualWeight("");
    setShowResult(false);
  };

  return (
    <div className="bg-surface rounded-2xl p-8 shadow-soft">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-5">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-primary-700 mb-2">
              Freight Method
              <Tooltip text="Air freight uses a smaller divisor (5000) because air space is more expensive. Sea freight uses a larger divisor (1000) due to lower space costs.">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Tooltip>
            </label>
            <div className="flex gap-3">
              {(Object.keys(FREIGHT_DIVISORS) as FreightMethod[]).map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => { setFreightMethod(method); setShowResult(false); }}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    freightMethod === method
                      ? "bg-accent text-white shadow-accent"
                      : "bg-white text-primary-600 border border-slate-200 hover:border-accent"
                  }`}
                  aria-pressed={freightMethod === method}
                >
                  {FREIGHT_LABELS[method]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <InputField
              label="Length (cm)"
              value={length}
              onChange={setLength}
              tooltip="Measure the longest side of your cargo"
              ariaLabel="Length in centimeters"
            />
            <InputField
              label="Width (cm)"
              value={width}
              onChange={setWidth}
              tooltip="Measure the widest side of your cargo"
              ariaLabel="Width in centimeters"
            />
            <InputField
              label="Height (cm)"
              value={height}
              onChange={setHeight}
              tooltip="Measure the tallest side of your cargo"
              ariaLabel="Height in centimeters"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-primary-700 mb-2">
              Actual Weight (kg)
              <Tooltip text="The real weight of your cargo as measured on a scale">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Tooltip>
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={actualWeight}
              onChange={(e) => setActualWeight(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:outline-none transition-colors"
              placeholder="e.g., 500"
              aria-label="Actual weight in kilograms"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={handleCalculate}
              className="flex-1 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-accent transition-colors"
            >
              Calculate Weight
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 bg-white hover:bg-surface text-primary-600 font-medium rounded-lg border border-slate-200 transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Explanation */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
            <p className="text-sm text-primary-700 leading-relaxed">
              <strong>Why charge by volume?</strong> Freight forwarders charge by
              chargeable weight because aircraft and vessels have limited space.
              Lightweight but bulky cargo takes up valuable room that could
              carry heavier goods. This ensures fair pricing based on space
              utilization.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-xl p-6 border border-slate-100">
          <h3 className="font-display font-semibold text-lg text-primary mb-6">
            Calculation Results
          </h3>

          {!showResult ? (
            <div className="text-center py-12 text-slate-400">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <p>Enter your cargo details and click Calculate</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Dimensional Weight */}
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-primary-600">Dimensional Weight</span>
                <span className="font-semibold text-primary">
                  {dimensionalWeight.toFixed(2)} kg
                </span>
              </div>

              {/* Actual Weight */}
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-primary-600">Actual Weight</span>
                <span className="font-semibold text-primary">
                  {actualWeightNum.toFixed(2)} kg
                </span>
              </div>

              {/* Chargeable Weight */}
              <div className={`flex justify-between items-center py-4 px-4 rounded-lg ${
                isDimensional ? "bg-accent/10" : "bg-primary/10"
              }`}>
                <div>
                  <span className="font-display font-bold text-lg text-primary">
                    Chargeable Weight
                  </span>
                  <p className="text-xs text-primary-600 mt-1">
                    {isDimensional
                      ? "Billed by volume (dim weight)"
                      : "Billed by actual weight"}
                  </p>
                </div>
                <span className={`font-display font-bold text-2xl ${
                  isDimensional ? "text-accent" : "text-primary"
                }`}>
                  {chargeableWeight.toFixed(2)} kg
                </span>
              </div>

              {/* Formula */}
              <div className="text-xs text-slate-500 bg-surface rounded-lg p-3">
                <p className="font-mono">
                  {freightMethod === "air" ? "L×W×H ÷ 5000" : "L×W×H ÷ 1000"} ={" "}
                  {dimensionalWeight.toFixed(2)} kg
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  tooltip,
  ariaLabel,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  tooltip: string;
  ariaLabel: string;
}) {
  return (
    <div>
      <label className="flex items-center gap-1 text-sm font-medium text-primary-700 mb-1">
        {label}
        <Tooltip text={tooltip}>
          <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Tooltip>
      </label>
      <input
        type="number"
        min="0"
        step="0.1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:outline-none transition-colors text-sm"
        aria-label={ariaLabel}
        placeholder="0.0"
      />
    </div>
  );
}

function Tooltip({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      <span className="cursor-help">{children}</span>
      {show && (
        <span
          className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-primary rounded-lg shadow-medium whitespace-normal max-w-xs"
          role="tooltip"
        >
          {text}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-primary"></span>
        </span>
      )}
    </span>
  );
}

function calculateDimensionalWeight(
  length: number,
  width: number,
  height: number,
  method: FreightMethod
): number {
  if (!length || !width || !height) return 0;
  return (length * width * height) / FREIGHT_DIVISORS[method];
}
