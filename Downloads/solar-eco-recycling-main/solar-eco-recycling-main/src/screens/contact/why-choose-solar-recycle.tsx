"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "98% Recovery Rate",
    description: "Industry-leading material recovery from solar panels",
  },
  {
    title: "Eco-Friendly Process",
    description: "Zero waste to landfill commitment",
  },
  {
    title: "24/7 Support",
    description: "Dedicated team ready to assist you",
  },
];

export default function WhyChooseSolarRecycle() {
  return (
    <section className="w-full bg-green-700 py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          Why Choose SolarRecycle?
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-green-600 
                rounded-2xl 
                p-8 
                shadow-lg 
                hover:shadow-2xl 
                transition-all 
                duration-300
              "
            >
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

              <p className="text-sm text-white/90 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
