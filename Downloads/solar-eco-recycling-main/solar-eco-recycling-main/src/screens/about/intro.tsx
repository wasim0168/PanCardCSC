"use client";

import { Users2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-150 flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/about/about.png" // put your image inside public/
          alt="Solar Recycling"
          fill
          priority
          className="object-cover"
        />

        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green-900/50 backdrop-blur-[2px]" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 space-y-6 px-6"
        >
          <p className="text-sm opacity-90">Home &gt; About Us</p>

          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>

          <p className="text-lg md:text-2xl opacity-90">
            Driving Sustainable Solar Recycling
          </p>

          {/* Recycle Icon */}
          <div className="text-6xl mt-6">♻️</div>
        </motion.div>
      </section>

      {/* ================= WHO WE ARE SECTION ================= */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We are pioneers in sustainable solar panel recycling, committed to
              transforming end-of-life solar equipment into valuable resources.
              With cutting-edge technology and environmental expertise,
              we&apos;re building a circular economy for renewable energy
              infrastructure.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our state-of-the-art facilities process thousands of solar panels
              annually, recovering precious materials while minimizing
              environmental impact. We don’t just recycle—we reimagine the
              future of sustainable energy.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard
              title="15+"
              subtitle="Years of Experience"
              gradient="from-green-400 to-green-700"
            />

            <StatCard
              title="50K+"
              subtitle="Panels Recycled"
              gradient="from-blue-400 to-blue-800"
            />

            <StatCard
              title="98%"
              subtitle="Recovery Rate"
              gradient="from-cyan-400 to-teal-800"
            />

            <StatCard
              title="100%"
              subtitle="Eco-Friendly"
              gradient="from-green-600 to-lime-500"
            />
          </div>
        </div>
      </section>

      {/* ================= Founders Message ================= */}
      <section className="w-full px-6 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto relative">
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl shadow-xl px-8 py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center border-l-10 border-green-700"
          >
            {/* Icon Circle */}
            <div className="shrink-0 w-20 h-20 rounded-full bg-green-700 flex items-center justify-center">
              <Users2 className="text-white w-10 h-10" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Message from Our Founder
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                &quot;Our journey began with a simple vision: to ensure that the
                technology powering our sustainable future doesn&apos;t become
                tomorrow&apos;s environmental burden. Every solar panel we
                recycle is a step toward a truly circular economy in renewable
                energy.&quot;
              </p>

              <p className="mt-4 text-green-600 font-semibold text-sm">
                — Sarah Chen, Founder & CEO
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ================= Reusable Stat Card ================= */

function StatCard({
  title,
  subtitle,
  gradient,
}: {
  title: string;
  subtitle: string;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`rounded-2xl p-8 text-white bg-linear-to-br ${gradient} shadow-xl`}
    >
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90 font-semibold">{subtitle}</p>
    </motion.div>
  );
}
