"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="bg-primary overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-32">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block text-accent-light font-display font-semibold text-sm tracking-widest uppercase mb-4"
            >
              End-to-End Supply Chain Solutions
            </motion.span>
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Freight that moves at the speed of your business.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-surface/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              NexRoute Global connects 40+ countries with a single source of
              truth — real-time visibility, proactive exception management, and
              a 24/7 control tower that keeps your supply chain on schedule,
              every shipment, every time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button href="/contact" variant="primary" size="lg" ariaLabel="Get a Quote">
                Get a Quote
              </Button>
              <Button href="/track" variant="ghost" size="lg" ariaLabel="Track Shipment" className="text-white border-white/30 hover:bg-white/10 hover:border-white/50">
                Track Shipment
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-2 text-surface/60 text-sm"
            >
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>
                Trusted by <strong className="text-white">300+ enterprises</strong> worldwide
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Animated SVG map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 600 400"
              className="w-full max-w-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F97316" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#F97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Simplified continent shapes */}
              <path d="M80 140 Q120 100 180 120 Q240 140 260 100 Q280 60 320 80 Q360 100 380 140 Q400 180 360 200 Q320 220 280 200 Q240 180 200 200 Q160 220 120 200 Q80 180 80 140Z" fill="#152C4F" stroke="#1E293B" strokeWidth="1.5" />
              <path d="M360 60 Q400 50 440 70 Q480 90 470 130 Q460 170 420 180 Q380 190 360 160 Q340 130 350 90 Q355 70 360 60Z" fill="#152C4F" stroke="#1E293B" strokeWidth="1.5" />
              <path d="M180 200 Q220 180 260 200 Q300 220 320 200 Q340 180 360 200 Q380 220 360 260 Q340 280 300 270 Q260 260 220 270 Q180 280 160 260 Q140 240 160 200Z" fill="#152C4F" stroke="#1E293B" strokeWidth="1.5" />
              {/* Shipping route arcs */}
              <path d="M120 160 Q200 100 300 120" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M300 120 Q400 100 480 140" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M120 160 Q200 200 280 180" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M280 180 Q360 220 440 200" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M200 260 Q300 240 400 260" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M160 140 Q240 80 340 100 Q440 120 500 160" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              {/* Hub markers with pulse */}
              {[
                { cx: 120, cy: 160, dur: "2s" },
                { cx: 300, cy: 120, dur: "2.5s" },
                { cx: 480, cy: 140, dur: "3s" },
                { cx: 280, cy: 180, dur: "2.2s" },
                { cx: 440, cy: 200, dur: "2.8s" },
                { cx: 200, cy: 260, dur: "3.2s" },
                { cx: 400, cy: 260, dur: "2.6s" },
              ].map((hub, i) => (
                <g key={i}>
                  <circle cx={hub.cx} cy={hub.cy} r="6" fill="#F97316" opacity="0.15">
                    <animate attributeName="r" values="6;14;6" dur={hub.dur} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur={hub.dur} repeatCount="indefinite" />
                  </circle>
                  <circle cx={hub.cx} cy={hub.cy} r="4" fill="#F97316" />
                  <circle cx={hub.cx} cy={hub.cy} r="1.5" fill="#fff" />
                </g>
              ))}
              {/* Moving shipment dots */}
              <circle r="3" fill="#fff" opacity="0.9">
                <animateMotion dur="4s" repeatCount="indefinite" path="M120 160 Q200 100 300 120" />
              </circle>
              <circle r="3" fill="#fff" opacity="0.9">
                <animateMotion dur="5s" repeatCount="indefinite" path="M300 120 Q400 100 480 140" />
              </circle>
              <circle r="3" fill="#fff" opacity="0.9">
                <animateMotion dur="6s" repeatCount="indefinite" path="M160 140 Q240 80 340 100 Q440 120 500 160" />
              </circle>
            </svg>
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white text-sm">
              <span className="text-accent font-semibold">24/7 Control Tower</span> · Live tracking
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
