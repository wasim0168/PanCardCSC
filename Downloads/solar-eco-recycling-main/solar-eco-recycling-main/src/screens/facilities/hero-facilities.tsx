"use client";

import { motion } from "motion/react";
import Image from "next/image";

const stats = [
  { value: "3", label: "Specialized Facilities" },
  { value: "96%", label: "Material Recovery Rate" },
  { value: "ISO", label: "Certified Standards" },
  { value: "24/7", label: "Environmental Monitoring" },
];

export default function HeroFacilities() {
  return (
    <section className="w-full">
      {/* ================= HERO IMAGE ================= */}
      <div className="relative w-full h-[420px] md:h-[500px]">
        <Image
          src="/facilities/facilities.png" // place inside public/
          alt="Solar Recycling Facility"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Our Recycling Facilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 max-w-3xl text-sm md:text-lg text-white/90"
          >
            State-of-the-art processing centers equipped with advanced
            technology for sustainable solar panel and electronic waste
            recycling.
          </motion.p>
        </div>
      </div>

      {/* ================= STATS STRIP ================= */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Stat Box */}
              <div className="border border-gray-400 rounded-2xl px-10 py-4 w-full max-w-[220px]">
                <span className="text-2xl md:text-3xl font-bold text-green-700">
                  {stat.value}
                </span>
              </div>

              <p className="mt-4 text-sm md:text-base text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
