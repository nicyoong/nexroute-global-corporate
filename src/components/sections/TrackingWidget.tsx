"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const validPattern = /^NX-\d{6}$/i;

type TrackingStatus =
  | "Booked"
  | "Departed Hub"
  | "In Transit"
  | "Out for Delivery"
  | "Delivered";

type ExceptionType = "customs" | "weather" | "congestion" | null;

interface ExceptionState {
  type: ExceptionType;
  status: TrackingStatus;
  description: string;
  resolutionNote?: string;
  estimatedClearanceDate?: string;
}

const STATUS_FLOW: TrackingStatus[] = [
  "Booked",
  "Departed Hub",
  "In Transit",
  "Out for Delivery",
  "Delivered",
];

const MOCK_TIMELINE: Record<TrackingStatus, { time: string; location: string }> = {
  Booked: { time: "2024-11-18 09:30 UTC", location: "Los Angeles, US" },
  "Departed Hub": { time: "2024-11-19 14:15 UTC", location: "Los Angeles Port" },
  "In Transit": { time: "2024-11-22 08:00 UTC", location: "Pacific Ocean" },
  "Out for Delivery": { time: "2024-11-28 06:45 UTC", location: "Rotterdam, NL" },
  Delivered: { time: "2024-11-28 11:20 UTC", location: "Rotterdam Warehouse" },
};

const EXCEPTION_STATES: Record<string, ExceptionState> = {
  "NX-000001": {
    type: "customs",
    status: "In Transit",
    description: "Held at Customs - Documentation review required",
    resolutionNote: "Commercial invoice and certificate of origin submitted. Awaiting broker approval.",
    estimatedClearanceDate: "2024-11-25",
  },
  "NX-000002": {
    type: "weather",
    status: "Departed Hub",
    description: "Weather Delay - Typhoon Orange Warning",
    resolutionNote: "Vessel rerouted to alternate port. Crew safety prioritized.",
    estimatedClearanceDate: "2024-11-27",
  },
  "NX-000003": {
    type: "congestion",
    status: "In Transit",
    description: "Port Congestion - 48hr berth wait",
    resolutionNote: "Alternative terminal allocated. Expedited handling arranged.",
    estimatedClearanceDate: "2024-11-24",
  },
};

export default function TrackingWidget() {
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const [exception, setException] = useState<ExceptionState | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!trackingId.trim()) {
      setError("Please enter a tracking ID.");
      return;
    }
    if (!validPattern.test(trackingId.trim())) {
      setError("Invalid format. Use NX-XXXXXX (e.g. NX-123456).");
      return;
    }

    setLoading(true);
    setHasSearched(true);
    setCurrentStep(0);
    setException(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      // Check for exception state
      const mockException = EXCEPTION_STATES[trackingId.toUpperCase()];
      if (mockException) {
        setException(mockException);
      }
      
      // Animate through steps
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCurrentStep(step);
        if (step >= STATUS_FLOW.length - 1) clearInterval(interval);
      }, 600);
    }, 1200);
  };

  const getExceptionColor = (type: ExceptionType | null) => {
    switch (type) {
      case "customs":
        return "text-amber-400 bg-amber-400";
      case "weather":
        return "text-orange-400 bg-orange-400";
      case "congestion":
        return "text-yellow-400 bg-yellow-400";
      default:
        return "text-accent bg-accent";
    }
  };

  const getExceptionLabel = (type: ExceptionType | null) => {
    switch (type) {
      case "customs":
        return "Customs Hold";
      case "weather":
        return "Weather Delay";
      case "congestion":
        return "Port Congestion";
      default:
        return "In Progress";
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="flex gap-3" noValidate>
        <label htmlFor="track-input" className="sr-only">
          Tracking ID
        </label>
        <input
          id="track-input"
          type="text"
          placeholder="Enter tracking ID (e.g. NX-123456)"
          value={trackingId}
          onChange={(e) => {
            setTrackingId(e.target.value);
            if (error) setError("");
          }}
          className={`flex-1 px-4 py-3 rounded-lg border text-base ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-white/20 focus:border-accent"
          } bg-white/10 text-white placeholder-surface/40 focus:outline-none transition-colors`}
          aria-invalid={!!error}
          aria-describedby={error ? "track-error" : undefined}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-accent transition-colors disabled:opacity-60"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span className="sr-only">Loading</span>
            </span>
          ) : (
            "Track"
          )}
        </button>
      </form>
      
      {/* Hint for exception tracking IDs */}
      <p className="mt-2 text-surface/50 text-xs">
        Try <code className="text-accent-light font-mono">NX-000001</code> for customs hold,{' '}
        <code className="text-accent-light font-mono">NX-000002</code> for weather delay, or{' '}
        <code className="text-accent-light font-mono">NX-000003</code> for port congestion
      </p>

      {error && (
        <p id="track-error" className="mt-2 text-red-400 text-sm" role="alert">
          {error}
        </p>
      )}

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-8 space-y-3"
            aria-label="Loading tracking information"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-4 h-4 rounded-full bg-white/10 animate-pulse"
                  aria-hidden="true"
                />
                <div
                  className="h-4 bg-white/10 rounded animate-pulse"
                  style={{ width: `${60 + i * 10}%` }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </motion.div>
        )}

        {!loading && hasSearched && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-surface/50 text-sm">Tracking ID</p>
                <p className="text-white font-mono font-semibold text-lg">
                  {trackingId.toUpperCase()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {exception && (
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true"></span>
                    {getExceptionLabel(exception.type)}
                  </span>
                )}
                {!exception && (
                  <span className="px-3 py-1 bg-accent/20 text-accent-light text-sm font-medium rounded-full">
                    {STATUS_FLOW[currentStep]}
                  </span>
                )}
              </div>
            </div>

            {/* Exception alert */}
            {exception && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg"
                role="alert"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-amber-400 font-semibold text-sm">{exception.description}</p>
                    {exception.resolutionNote && (
                      <p className="text-surface/70 text-sm mt-1">{exception.resolutionNote}</p>
                    )}
                    {exception.estimatedClearanceDate && (
                      <p className="text-surface/60 text-xs mt-2">
                        <span className="text-surface/40">Estimated clearance:</span> {exception.estimatedClearanceDate}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Progress bar */}
            <div className="mb-6" role="progressbar" aria-valuenow={currentStep} aria-valuemin={0} aria-valuemax={4} aria-label="Tracking progress">
              <div className="flex gap-1">
                {STATUS_FLOW.map((status, i) => (
                  <div key={status} className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/10">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        i <= currentStep 
                          ? exception && i === currentStep 
                            ? "bg-amber-400 w-full" 
                            : "bg-accent w-full"
                          : "w-0"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {STATUS_FLOW.map((status, i) => {
                const info = MOCK_TIMELINE[status];
                const completed = i <= currentStep;
                const current = i === currentStep;
                const isException = exception && current;
                
                return (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: completed ? 1 : 0.3, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      isException ? "bg-amber-500/10 border border-amber-500/20" : ""
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
                        completed
                          ? isException
                            ? "bg-amber-400"
                            : "bg-accent"
                          : "bg-white/20"
                      } ${current ? `ring-4 ${isException ? 'ring-amber-400/20' : 'ring-accent/20'}` : ""}`}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${current ? "text-white" : "text-surface/70"}`}>
                        {status}
                        {isException && (
                          <span className="ml-2 text-xs font-normal text-amber-400">
                            ⚠ Exception
                          </span>
                        )}
                      </p>
                      <p className="text-surface/50 text-sm">
                        {info.time} · {info.location}
                      </p>
                      {isException && exception.resolutionNote && (
                        <p className="text-surface/60 text-xs mt-1 italic">
                          {exception.resolutionNote}
                        </p>
                      )}
                    </div>
                    {current && !exception && (
                      <span className="text-accent text-xs font-semibold animate-pulse">
                        LIVE
                      </span>
                    )}
                    {current && isException && (
                      <span className="text-amber-400 text-xs font-semibold animate-pulse">
                        DELAYED
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
