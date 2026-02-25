"use client";

import { motion } from "motion/react";
import { Eye } from "lucide-react";

export default function OurVision() {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-gray-100 via-emerald-50 to-gray-100">
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Top Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
            <Eye className="text-white w-8 h-8" />
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
          Our Vision
        </motion.h2>

        {/* Underline */}
        <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-3xl shadow-2xl p-10 md:p-14 relative"
        >
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            To be the{" "}
            <span className="text-emerald-600 font-semibold">
              global leader
            </span>{" "}
            in sustainable solar recycling, setting industry standards and
            pioneering technologies that ensure renewable energy remains truly
            renewable—creating a world where every solar panel has{" "}
            <span className="text-emerald-600 font-semibold">
              multiple lives
            </span>
            , and waste becomes opportunity.
          </p>

          {/* Bottom Accent Line */}
          <div className="w-full h-1 bg-emerald-500 mt-8 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
