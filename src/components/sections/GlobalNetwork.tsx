"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";

const hubs = [
  { region: "North America", city: "Los Angeles, CA", throughput: "2.4M TEU/yr" },
  { region: "Europe", city: "Rotterdam, Netherlands", throughput: "3.1M TEU/yr" },
  { region: "Asia Pacific", city: "Singapore", throughput: "2.8M TEU/yr" },
  { region: "Middle East", city: "Jebel Ali, UAE", throughput: "1.6M TEU/yr" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function GlobalNetwork() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="network-heading">
      <Container>
        <SectionHeading
          eyebrow="Global Network"
          title="Four Regional Hubs, Worldwide Reach"
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* SVG World Map */}
          <div className="relative" aria-hidden="true">
            <svg
              viewBox="0 0 560 320"
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M60 80 Q100 60 140 80 Q180 100 200 80 Q220 60 260 70 Q300 80 320 100 Q340 120 320 140 Q300 160 260 150 Q220 140 180 160 Q140 180 100 160 Q60 140 60 80Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M360 60 Q400 50 440 70 Q480 90 470 130 Q460 170 420 180 Q380 190 360 160 Q340 130 350 90 Q355 70 360 60Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M180 200 Q220 180 260 200 Q300 220 320 200 Q340 180 360 200 Q380 220 360 260 Q340 280 300 270 Q260 260 220 270 Q180 280 160 260 Q140 240 160 200Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
              {hubs.map((_, i) => {
                const positions = [{ cx: 130, cy: 110 }, { cx: 270, cy: 90 }, { cx: 410, cy: 130 }, { cx: 340, cy: 170 }];
                const pos = positions[i];
                return (
                  <g key={i}>
                    <circle cx={pos.cx} cy={pos.cy} r="8" fill="#F97316" opacity="0.2">
                      <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={pos.cx} cy={pos.cy} r="5" fill="#F97316" />
                    <circle cx={pos.cx} cy={pos.cy} r="2" fill="#fff" />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Hub list */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h3 id="network-heading" className="sr-only">Regional Hubs</h3>
            <div className="space-y-5">
              {hubs.map((hub) => (
                <motion.div key={hub.region} variants={item} className="flex items-start gap-4 p-4 rounded-xl bg-surface hover:bg-surface-alt transition-colors">
                  <div className="w-3 h-3 rounded-full bg-accent mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-display font-semibold text-primary text-lg">{hub.region}</div>
                    <div className="text-primary-500 text-sm">{hub.city}</div>
                    <div className="text-accent font-semibold text-sm mt-0.5">{hub.throughput} annual throughput</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-primary-600 text-sm leading-relaxed">
              Each hub operates as a multi-modal interchange — connecting ocean,
              air, and ground freight under one management team with shared
              visibility.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
