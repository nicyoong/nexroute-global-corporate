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

export default function TrackingWidget() {
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);

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

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Animate through steps
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCurrentStep(step);
        if (step >= STATUS_FLOW.length - 1) clearInterval(interval);
      }, 600);
    }, 1200);
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
              <span className="px-3 py-1 bg-accent/20 text-accent-light text-sm font-medium rounded-full">
                {STATUS_FLOW[currentStep]}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mb-6" role="progressbar" aria-valuenow={currentStep} aria-valuemin={0} aria-valuemax={4} aria-label="Tracking progress">
              <div className="flex gap-1">
                {STATUS_FLOW.map((status, i) => (
                  <div key={status} className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/10">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        i <= currentStep ? "bg-accent w-full" : "w-0"
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
                return (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: completed ? 1 : 0.3, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
                        completed ? "bg-accent" : "bg-white/20"
                      } ${current ? "ring-4 ring-accent/20" : ""}`}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${current ? "text-white" : "text-surface/70"}`}>
                        {status}
                      </p>
                      <p className="text-surface/50 text-sm">
                        {info.time} · {info.location}
                      </p>
                    </div>
                    {current && (
                      <span className="text-accent text-xs font-semibold animate-pulse">
                        LIVE
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
