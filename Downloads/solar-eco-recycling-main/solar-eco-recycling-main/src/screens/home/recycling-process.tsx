"use client";

import { motion, type Variants } from "motion/react";
import {
  Recycle,
  Zap,
  Wrench,
  Package,
  Flame,
  Leaf,
  Droplets,
  RotateCw,
  Square,
  Zap as Lightning,
  Gem,
  SquareActivity,
  AlignRight,
  ChevronRight,
} from "lucide-react";

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

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function RecyclingProcess() {
  const stats = [
    {
      icon: Recycle,
      value: "95%",
      label: "Materials Recovery",
    },
    {
      icon: Leaf,
      value: "100%",
      label: "Eco-Friendly Process",
    },
    {
      icon: Droplets,
      value: "0%",
      label: "Waste to Landfill",
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Processing Time",
    },
  ];

  const materials = [
    {
      icon: Square,
      name: "Glass",
      percentage: "85%",
      color: "bg-blue-500",
    },
    {
      icon: Gem,
      name: "Silicon",
      percentage: "5%",
      color: "bg-yellow-500",
    },
    {
      icon: SquareActivity,
      name: "Aluminum",
      percentage: "7%",
      color: "bg-slate-500",
    },
    {
      icon: Lightning,
      name: "Copper & Silver",
      percentage: "3%",
      color: "bg-amber-600",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Collection & Transport",
      description:
        "We collect end-of-life solar panels from your location using specialized vehicles",
      icon: Package,
      items: ["Free pickup service", "Safe transportation", "Tracking system"],
    },
    {
      number: 2,
      title: "Inspection & Testing",
      description:
        "Each panel is inspected and tested to determine the best recycling approach",
      icon: Zap,
      items: ["Quality assessment", "Component analysis", "Data logging"],
    },
    {
      number: 3,
      title: "Dismantling",
      description:
        "Careful disassembly of frames, junction boxes and protective layers",
      icon: Wrench,
      items: ["Manual separation", "Frame removal", "Component sorting"],
    },
    {
      number: 4,
      title: "Chemical Treatment",
      description:
        "Safe extraction and separation of silicon cells from glass and other materials",
      icon: Droplets,
      items: ["Eco-friendly solvents", "Cell extraction", "Purity enhancement"],
    },
    {
      number: 5,
      title: "Thermal Processing",
      description:
        "High-temperature treatment to recover valuable metals and materials",
      icon: Flame,
      items: ["Controlled heating", "Metal recovery", "Energy capture"],
    },
    {
      number: 6,
      title: "Material Separation",
      description:
        "Advanced separation techniques to isolate glass, silicon, silver, and copper",
      icon: Leaf,
      items: ["Mechanical sorting", "95% recovery rate", "Quality control"],
    },
    {
      number: 7,
      title: "Purification",
      description:
        "Recovered materials are purified to meet industry standards for reuse",
      icon: Recycle,
      items: ["Chemical refinement", "Quality testing", "Certification"],
    },
    {
      number: 8,
      title: "Redistribution",
      description:
        "Purified materials are packaged and sent to manufacturers for new products",
      icon: RotateCw,
      items: [
        "New solar panels",
        "Electronic components",
        "Building materials",
      ],
    },
  ];

  return (
    <section className="w-full bg-muted/50 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/20 border border-primary/30">
              <Recycle className="h-4 w-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">
                Our Recycling Process
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={item}
            className="text-center space-y-3 sm:space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary text-balance leading-tight">
              How Solar Panel Recycling Works
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
              Our advanced 8-step recycling process ensures maximum material
              recovery while maintaining the highest environmental standards
            </p>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 auto-rows-max"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} variants={cardVariant}>
                  <div className="relative bg-card rounded-xl border border-border p-6 sm:p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                    {/* Number Badge */}
                    <div className="absolute -top-3 right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm sm:text-base font-bold">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary/15">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground mb-5">
                      {step.description}
                    </p>

                    {/* Items List */}
                    <ul className="space-y-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            checked
                            readOnly
                            className="w-4 h-4 sm:w-5 sm:h-5 rounded border-primary text-primary accent-primary mt-0.5 flex-shrink-0 cursor-default"
                          />
                          <span className="text-xs sm:text-sm text-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Arrow Connector - hide on last item in each row */}
                    {(index + 1) % 4 !== 0 && index < 7 && (
                      <div className="hidden lg:block absolute -right-9 top-1/2 transform -translate-y-1/2 text-primary/40">
                        <ChevronRight className="h-10 w-10" />
                      </div>
                    )}

                    {/* Vertical Arrow for mobile */}
                    {index < 7 && (
                      <div className="lg:hidden flex justify-center mt-4 text-primary/40">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={item} className="w-full">
            <div className="rounded-2xl bg-primary p-8 sm:p-12 shadow-lg">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground mb-3" />
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
                        {stat.value}
                      </div>
                      <p className="text-xs sm:text-sm text-primary-foreground/90 mt-2">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Materials Recovery Section */}
          <motion.div variants={item} className="w-full space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
                Materials We Recover
              </h2>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {materials.map((material, index) => {
                const Icon = material.icon;
                return (
                  <motion.div key={index} variants={cardVariant}>
                    <div className="bg-card rounded-xl border border-border p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      <div
                        className={`${material.color} h-12 w-12 sm:h-14 sm:w-14 rounded-lg mx-auto mb-4 flex items-center justify-center`}
                      >
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                        {material.name}
                      </h3>
                      <div className="mt-auto">
                        <div className="w-full bg-muted rounded-full h-2 mb-3">
                          <div
                            className={`${material.color} h-2 rounded-full`}
                            style={{ width: material.percentage }}
                          />
                        </div>
                        <p className="text-sm sm:text-base font-bold text-primary">
                          {material.percentage}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
