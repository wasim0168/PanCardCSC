"use client";

import { motion } from "motion/react";
import { Recycle, Leaf, Award } from "lucide-react";

export default function OurMission() {
  return (
    <section className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Top Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-200 flex items-center justify-center shadow-md">
            <div className="w-10 h-10 rounded-full border-4 border-emerald-700" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our Mission
        </motion.h2>

        {/* Underline */}
        <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-3xl shadow-2xl p-10 md:p-14"
        >
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
            To revolutionize solar waste management through innovative recycling
            solutions that protect our environment and champion the circular
            economy.
          </p>

          {/* Feature Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Recycle className="w-8 h-8" />}
              title="Responsible Solar Waste Management"
            />
            <FeatureCard
              icon={<Leaf className="w-8 h-8" />}
              title="Environmental Protection"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Circular Economy Excellence"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= Reusable Feature Card ================= */

function FeatureCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-emerald-100 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-center text-emerald-700 mb-4">{icon}</div>
      <h3 className="font-semibold text-gray-900 text-sm md:text-base">
        {title}
      </h3>
    </motion.div>
  );
}
