"use client";

import { motion, type Variants } from "motion/react";
import {
  Recycle,
  Building2,
  CheckCircle,
  Target,
  Truck,
  Check,
  Clock,
  Shield,
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

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function RecyclingProcess() {
  const services = [
    {
      icon: Recycle,
      title: "Solar Panel Collection",
      description:
        "Free doorstep pickup service for residential and commercial solar panels. Secure handling and logistics with safety and efficiency.",
      items: ["Free pickup service", "Safe handling", "Quick scheduling"],
    },
    {
      icon: Building2,
      title: "Bulk Recycling (Industries)",
      description:
        "Specialized bulk recycling solutions for industries, solar farms, and large-scale manufacturers with dedicated support.",
      items: ["High volume capacity", "Custom solutions", "On-site service"],
    },
    {
      icon: CheckCircle,
      title: "Compliance & Certification",
      description:
        "Complete documentation and certificates for environmental compliance, CSR reporting, and regulatory requirements.",
      items: ["ISO certified", "Legal compliance", "Detailed reports"],
    },
    {
      icon: Target,
      title: "Expert Consulting",
      description:
        "Professional guidance on solar waste management, recycling strategies, and environmental best practices.",
      items: ["Expert advice", "Best practices", "Custom strategies"],
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Pickup Service",
    },
    {
      icon: Check,
      title: "ISO Certified Process",
    },
    {
      icon: Clock,
      title: "24/7 Support",
    },
    {
      icon: Shield,
      title: "Full Compliance",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-background py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <Recycle className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Our Services
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={item}
              className="text-center space-y-3 sm:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
                Service Snapshot
              </h1>
              <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground text-balance">
                Comprehensive solar panel recycling solutions tailored to your
                needs
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div key={service.title} variants={card}>
                    <div className="rounded-xl border border-border bg-card p-6 sm:p-8 transition-all hover:shadow-md h-full flex flex-col">
                      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/15 mb-4">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-grow">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Features Bar */}
            <motion.div variants={item} className="w-full">
              <div className="rounded-xl bg-primary p-6 sm:p-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="flex flex-col items-center text-center text-primary-foreground"
                    >
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 mb-3" />
                      <span className="text-xs sm:text-sm font-semibold text-balance">
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
