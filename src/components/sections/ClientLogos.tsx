"use client";

import { useEffect, useState } from "react";
import Container from "../ui/Container";

const clients = [
  "Meridian Foods",
  "Atlas Pharma",
  "Kite Retail",
  "Vantor Automotive",
  "Helios Electronics",
];

export default function ClientLogos() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const duration = 30000;
    const width = clients.length * 200;
    let start: number;
    let animFrame: number;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      setOffset((elapsed / duration) * width % width);
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden" aria-label="Our clients">
      <Container>
        <p className="sr-only">Trusted by leading global brands</p>
        <div className="relative">
          <div
            className="flex gap-x-16 items-center"
            style={{
              transform: `translateX(-${offset}px)`,
              width: "max-content",
            }}
          >
            {[...clients, ...clients].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-slate-300 font-display font-semibold text-lg tracking-wide hover:text-slate-500 transition-colors cursor-default whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
