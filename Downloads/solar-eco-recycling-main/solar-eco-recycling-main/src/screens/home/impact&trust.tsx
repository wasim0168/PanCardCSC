"use client";

import { Leaf, Zap, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import { motion, type Variants } from "motion/react";

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

export default function ImpactSection() {
  const stats = [
    {
      icon: Leaf,
      value: "150000+",
      label: "Solar Modules Recycled",
      description: "Successfully processed",
    },
    {
      icon: Zap,
      value: "25000+",
      label: "Tons CO2 Emissions Reduced",
      description: "Environmental impact",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Materials Recovered",
      description: "Recovery efficiency",
    },
    {
      icon: Award,
      value: "12%",
      label: "Years of Experience",
      description: "Industry expertise",
    },
  ];

  const certifications = [
    { icon: CheckCircle2, text: "ISO Certified" },
    { icon: Leaf, text: "100% Eco-Friendly" },
    { icon: TrendingUp, text: "E-Waste Compliant" },
  ];

  return (
    <section className="relative w-full bg-primary py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              <Leaf className="h-4 w-4 text-primary-foreground" />
              <span className="text-xs sm:text-sm font-semibold text-primary-foreground">
                Our Impact & Trust
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={item}
            className="text-center space-y-3 sm:space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-balance leading-tight">
              Making a Real Difference
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-primary-foreground/80 text-balance">
              Building trust through measurable environmental impact
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} variants={card}>
                  <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm p-6 sm:p-8 transition-all hover:bg-primary-foreground/15 hover:border-primary-foreground/30 h-full">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground mb-4" />
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-primary-foreground text-sm sm:text-base mb-2">
                      {stat.label}
                    </div>
                    <p className="text-xs sm:text-sm text-primary-foreground/70">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Certification Badges */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.text}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                    <span className="text-xs sm:text-sm font-semibold text-primary-foreground">
                      {cert.text}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
