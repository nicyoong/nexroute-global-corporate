"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Container from "../ui/Container";

const stats = [
  { value: "12M+", label: "Shipments Per Year" },
  { value: "99.2%", label: "On-Time Delivery Rate" },
  { value: "40+", label: "Countries Served" },
  { value: "24/7", label: "Global Control Tower" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Stats() {
  return (
    <section className="py-16 bg-primary" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="text-center"
            >
              <div className="font-display font-bold text-3xl sm:text-4xl text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-surface/70 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
