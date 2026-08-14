"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function CTABand() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden" aria-labelledby="cta-heading">
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 id="cta-heading" className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
          Ready to de-risk your supply chain?
        </h2>
        <p className="text-xl text-surface/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Whether you need a single route quote or a complete logistics overhaul,
          our team is ready to build a solution that fits your operation — and
          your bottom line.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" ariaLabel="Request a Custom Quote">
            Request a Custom Quote
          </Button>
          <Button
            href="/about"
            variant="ghost"
            size="lg"
            ariaLabel="Learn About Our Company"
            className="text-white border-white/30 hover:bg-white/10 hover:border-white/50"
          >
            Learn About NexRoute
          </Button>
        </div>
        <p className="mt-8 text-surface/50 text-sm">
          No commitment required. Our logistics specialists respond within 2 business hours.
        </p>
      </motion.div>
    </section>
  );
}
