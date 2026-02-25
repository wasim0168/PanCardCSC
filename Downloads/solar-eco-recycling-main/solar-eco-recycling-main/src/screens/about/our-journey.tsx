"use client";

import { motion } from "motion/react";
import {
  Plane,
  Anchor,
  Building2,
  Recycle,
  Lightbulb,
  TrendingUp,
  Award,
} from "lucide-react";

const milestones = [
  {
    year: "2021",
    text: "Started with a vision to revolutionize solar recycling.",
    icon: Anchor,
    color: "bg-yellow-500",
    top: true,
    left: "18%",
  },
  {
    year: "2022",
    text: "Opened first recycling facility.",
    icon: Building2,
    color: "bg-red-500",
    top: true,
    left: "38%",
  },
  {
    year: "2023",
    text: "Recovered 150,000+ panels.",
    icon: Recycle,
    color: "bg-cyan-500",
    top: true,
    left: "58%",
  },
  {
    year: "2024",
    text: "Developed proprietary recycling technology.",
    icon: Lightbulb,
    color: "bg-purple-500",
    top: false,
    left: "25%",
  },
  {
    year: "2025",
    text: "Expanded operations nationwide.",
    icon: TrendingUp,
    color: "bg-green-500",
    top: false,
    left: "50%",
  },
  {
    year: "2026",
    text: "Became industry leader.",
    icon: Award,
    color: "bg-blue-600",
    top: false,
    left: "75%",
  },
];

export default function OurJourneyExact() {
  return (
    <section className="w-full bg-gray-100 py-28 px-6">
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Journey
        </h2>
        <p className="text-gray-600 mt-3 mb-20">
          Building a sustainable future, one milestone at a time
        </p>

        {/* Timeline Container */}
        <div className="relative w-full h-[500px]">
          {/* S-Shaped Road */}
          <svg
            viewBox="0 0 1200 500"
            className="absolute w-full h-full"
            fill="none"
          >
            {/* Smooth Road */}
            <path
              d="
      M80 120
      H1000
      C1120 120 1120 220 1000 220
      H250
      C130 220 130 350 250 350
      H1120
    "
              stroke="#d1d5db"
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Center Dashed Line */}
            <path
              d="
      M80 120
      H1000
      C1120 120 1120 220 1000 220
      H250
      C130 220 130 350 250 350
      H1120
    "
              stroke="white"
              strokeWidth="4"
              strokeDasharray="14 14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Airplane */}
          <div className="absolute left-0 top-[110px]">
            <Plane className="w-8 h-8 text-black rotate-45" />
          </div>

          {/* Milestones */}
          {milestones.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: item.top ? -40 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="absolute flex flex-col items-center text-center"
                style={{
                  left: item.left,
                  top: item.top ? "40px" : "300px",
                }}
              >
                {/* Year */}
                <span className="font-semibold text-gray-900 mb-2">
                  {item.year}
                </span>

                {/* Diamond Icon Badge */}
                <div
                  className={`w-12 h-12 rotate-45 ${item.color} shadow-lg flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5 text-white -rotate-45" />
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 mt-3 w-40 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}

          {/* GOOD TO GREAT */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[210px] text-2xl font-bold text-gray-800">
            GOOD <span className="text-gray-400">TO</span> GREAT
          </div>

          {/* End Arrow */}
          <div className="absolute right-0 top-[330px] text-gray-400 text-2xl">
            ➤
          </div>
        </div>
      </div>
    </section>
  );
}
