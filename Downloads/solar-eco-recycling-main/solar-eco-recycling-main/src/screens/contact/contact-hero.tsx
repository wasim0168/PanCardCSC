"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative w-full bg-linear-to-br from-lime-500 via-green-600 to-green-700 text-center text-black overflow-hidden">
      {/* Background Shape Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#ffffff_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#ffffff_0%,transparent_40%)]" />

      <div className="relative z-10 px-6 pt-28 pb-40 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-green-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
        >
          Leading Solar Recycling Experts
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Get in Touch
        </motion.h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          Let&apos;s work together to create a sustainable future through
          innovative solar panel recycling solutions.
        </p>

        <p className="mt-4 text-sm md:text-base max-w-3xl mx-auto">
          Whether you&apos;re a solar farm operator, installer, or simply
          interested in our services, we&apos;d love to hear from you.
        </p>
      </div>

      {/* Floating Contact Cards */}
      <div className="relative z-20 -mt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ContactCard
            icon={<MapPin />}
            title="Visit Us"
            lines={["123 Green Energy Blvd", "Solar City, SC 12345"]}
          />

          <ContactCard
            icon={<Phone />}
            title="Call Us"
            lines={["+1 (555) 123-4567", "Mon–Fri 9AM–6PM"]}
          />

          <ContactCard
            icon={<Mail />}
            title="Email Us"
            lines={["info@solarrecycle.com", "support@solarrecycle.com"]}
          />

          <ContactCard
            icon={<Clock />}
            title="Business Hours"
            lines={["Monday – Friday", "9:00 AM – 6:00 PM EST"]}
          />
        </div>
      </div>
    </section>
  );
}

/* ================= Reusable Card ================= */

function ContactCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 shadow-2xl text-center"
    >
      {/* Icon Circle */}
      <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      {lines.map((line) => (
        <p key={line} className="text-sm text-gray-600">
          {line}
        </p>
      ))}
    </motion.div>
  );
}
