"use client";

import { motion } from "motion/react";
import { Leaf, Eye, Zap, Shield, CheckCircle, Award } from "lucide-react";

const values = [
  {
    title: "Sustainability",
    description:
      "Environmental stewardship is at the heart of our operations. We're committed to minimizing waste and maximizing resource recovery in every process.",
    icon: Leaf,
  },
  {
    title: "Transparency",
    description:
      "We believe in open communication and honest practices. Our clients receive detailed reports and full visibility into our recycling processes.",
    icon: Eye,
  },
  {
    title: "Innovation",
    description:
      "Continuous improvement drives us forward. We invest in cutting-edge technology and research to enhance our recycling efficiency and environmental impact.",
    icon: Zap,
  },
  {
    title: "Compliance & Safety",
    description:
      "We exceed industry regulations and maintain the highest safety standards, ensuring responsible handling of hazardous materials and worker protection.",
    icon: Shield,
  },
  {
    title: "Responsibility",
    description:
      "We take ownership of our environmental impact and hold ourselves accountable to our customers, employees, and the planet.",
    icon: CheckCircle,
  },
  {
    title: "Excellence",
    description:
      "Quality is non-negotiable. We strive for excellence in every aspect of our business, from customer service to material recovery rates.",
    icon: Award,
  },
];

export default function CoreValues() {
  return (
    <section className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Core Values
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            The principles that guide everything we do
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
