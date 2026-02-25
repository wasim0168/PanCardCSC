"use client";

import { motion, type Variants } from "motion/react";
import { Award, Check, Leaf } from "lucide-react";
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

export default function ComplianceCertifications() {
  const certifications = [
    {
      id: "iso-9001",
      title: "ISO 9001:2015",
      description: "Quality Management System",
    },
    {
      id: "iso-14001",
      title: "ISO 14001:2015",
      description: "Environmental Management",
    },
    {
      id: "e-waste",
      title: "E-Waste Compliance",
      description: "Electronic Waste Standards",
    },
    {
      id: "hazard",
      title: "Hazard Control",
      description: "Safety & Hazardous Materials",
    },
    {
      id: "carbon",
      title: "Carbon Certification",
      description: "Carbon Footprint Verified",
    },
    {
      id: "r2",
      title: "R2 Compliance",
      description: "Responsible Recycling",
    },
  ];

  const stats = [
    { value: "100%", label: "Compliance Rate" },
    { value: "6+", label: "Major Certifications" },
    { value: "12+", label: "Industry Standards" },
  ];

  const categories = [
    "Material of Commitment",
    "UPC",
    "Audit Test",
    "R2 Certification",
  ];

  return (
    <>
      {/* Certifications Section */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                <Award className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">
                  Compliance & Certifications
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={item}
              className="text-center space-y-3 sm:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
                Compliance & Certifications
              </h1>
              <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground text-balance">
                Comprehensive certifications and compliance standards
              </p>
            </motion.div>

            {/* Certifications Grid */}
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {certifications.map((cert) => (
                <motion.div key={cert.id} variants={card}>
                  <div className="rounded-lg border border-border bg-card p-6 sm:p-8 transition-all hover:shadow-md">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-foreground">
                          {cert.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      <Check className="h-3 w-3" />
                      Verified
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Bar */}
            <motion.div variants={item} className="w-full">
              <div className="rounded-lg bg-primary p-6 sm:p-10 grid grid-cols-3 gap-4 sm:gap-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center text-primary-foreground"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                      {stat.value}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-balance">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Categories Filter */}
            <motion.div
              variants={item}
              className="w-full flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2.5 rounded-lg bg-muted text-foreground text-xs sm:text-sm font-semibold hover:bg-muted/80 transition-colors"
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-primary py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground text-balance leading-tight">
                Recycle Your Solar Waste Responsibly
              </h2>
              <p className="text-sm sm:text-base text-primary-foreground/90 text-balance leading-relaxed">
                Join thousands of businesses and homeowners making a positive
                environmental impact. Our certified recycling process ensures
                maximum material recovery with zero waste to landfill.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
            >
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold w-full sm:w-auto"
              >
                Schedule Pickup
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary hover:bg-primary-foreground/10 font-semibold w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Footer Info */}
            <motion.div
              variants={item}
              className="text-xs sm:text-sm text-primary-foreground/80 space-y-2 pt-4"
            >
              <p>📞 Call us at 1-800-RECYCLE or visit our office</p>
              <p>📧 Email: hello@solarrecycle.com</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
