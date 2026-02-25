"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PartnerCTA() {
  return (
    <section className="w-full bg-emerald-600 py-24 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold"
        >
          Ready to Partner With Us?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-base md:text-lg text-white/90 max-w-3xl mx-auto"
        >
          Join leading corporations and municipalities who trust our advanced
          facilities for their solar panel and electronic waste recycling needs.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            href="/contact"
            className="
              inline-flex 
              items-center 
              gap-2 
              bg-white 
              text-emerald-600 
              font-semibold 
              px-10 
              py-4 
              rounded-full 
              shadow-lg 
              hover:scale-105 
              transition-all 
              duration-300
            "
          >
            Schedule a Facility Tour
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
