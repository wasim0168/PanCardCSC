"use client";

import { motion, type Variants } from "motion/react";
import {
  Trash2,
  Leaf,
  AlertCircle,
  Recycle,
  Wind,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function EnvironmentAwareness() {
  const benefits = [
    {
      icon: Trash2,
      title: "Reduce Landfill Waste",
      description:
        "Every solar panel recycled keeps e-toxic and hazardous materials out of landfills and groundwater from contamination.",
      badge: "90% less waste",
      badgeColor: "bg-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Leaf,
      title: "Save Natural Resources",
      description:
        "Recovering valuable materials like silicon, copper, and glass reduces mining and preserves natural resources.",
      badge: "95% recovery rate",
      badgeColor: "bg-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: AlertCircle,
      title: "Prevent Toxic Pollution",
      description:
        "Safe handling of hazardous materials limits the lead and cadmium contamination and health hazards.",
      badge: "100% safe disposal",
      badgeColor: "bg-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description:
        "Transform waste into resources, creating a sustainable cycle where materials are continuously reused and repurposed.",
      badge: "Zero to landfill",
      badgeColor: "bg-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: Wind,
      title: "Lower Carbon Footprint",
      description:
        "Recycling solar panels uses significantly less energy than producing new materials from raw resources.",
      badge: "75% less energy",
      badgeColor: "bg-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description:
        "Reduces water consumption in manufacturing processes by reusing recovered materials instead of extraction.",
      badge: "Millions of liters saved",
      badgeColor: "bg-blue-500",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-muted/30 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="space-y-12 sm:space-y-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header Badge */}
            <motion.div variants={item} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200">
                <Leaf className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">
                  Environmental Awareness
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={item}
              className="text-center space-y-3 sm:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 text-balance leading-tight">
                Why Solar Recycling Matters
              </h1>
              <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground text-balance">
                Every solar panel recycled is a step towards a sustainable
                future. Here&apos;s how we&apos;re making a difference for our
                planet.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div key={benefit.title} variants={card}>
                    <div
                      className={`${benefit.bgColor} rounded-xl border border-gray-200 p-6 sm:p-8 transition-all hover:shadow-md h-full flex flex-col`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-sm">
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-700" />
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">
                        {benefit.description}
                      </p>
                      <span
                        className={`${benefit.badgeColor} text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full inline-block w-fit`}
                      >
                        {benefit.badge}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-primary py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-6 sm:space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Icon */}
            <motion.div variants={item} className="flex justify-center">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-foreground/20 backdrop-blur-sm">
                <Leaf className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={item} className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground text-balance leading-tight">
                Join the Green Revolution
              </h2>
              <p className="mx-auto max-w-2xl text-sm sm:text-base text-primary-foreground/90 text-balance">
                Together, we can create a sustainable future by recycling solar
                panels and reducing environmental impact.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
              >
                Start Recycling Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary hover:bg-primary-foreground/10 font-semibold"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
