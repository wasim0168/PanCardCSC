import { motion } from "motion/react";

export default function GetInTouch() {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-black"
        >
          Get In Touch
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-gray-600 text-base md:text-lg"
        >
          Ready to recycle your solar panels? Contact us for a free consultation
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-lg transition-all duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
