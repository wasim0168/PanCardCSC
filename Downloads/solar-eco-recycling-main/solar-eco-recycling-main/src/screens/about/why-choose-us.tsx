"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const leftPoints = [
  "Certified Recycling Process",
  "Full Government Compliance",
  "100% Eco-Friendly Operations",
  "Secure Material Handling",
];

const rightPoints = [
  "Advanced Tracking Systems",
  "Transparent Reporting",
  "Competitive Pricing",
  "Expert Technical Support",
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-28 px-6 bg-linear-to-br from-emerald-500 to-emerald-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          Why Choose Us
        </motion.h2>

        <p className="mt-4 text-lg md:text-xl text-white/90">
          Your trusted partner in sustainable solar recycling
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <FeatureCard items={leftPoints} />
          <FeatureCard items={rightPoints} />
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-white text-emerald-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          Get Started Today
        </motion.button>
      </div>
    </section>
  );
}

/* ================= Reusable Card ================= */

function FeatureCard({ items }: { items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        bg-white/10 
        backdrop-blur-md 
        border border-white/20
        rounded-3xl 
        p-10 
        shadow-[0_0_40px_rgba(255,255,255,0.2)]
      "
    >
      <ul className="space-y-6 text-left">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-4 text-lg">
            <div className="w-7 h-7 rounded-full bg-emerald-400 flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
