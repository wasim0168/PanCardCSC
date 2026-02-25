"use client";

import { ContactForm } from "./contcat-form";

export default function ContactSection() {
  return (
    <section className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* ================= LEFT - FORM ================= */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ContactForm />
        </div>

        {/* ================= RIGHT - MAP ================= */}
        <div className="flex flex-col gap-6">
          {/* Map Card */}
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019790123456!2d-122.41941548468163!3d37.77492977975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5fcd123%3A0x1234567890abcdef!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1699999999999"
              width="100%"
              height="100%"
              className="min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location Info Box */}
          <div className="bg-green-700 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Our Location</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Visit our state-of-the-art solar recycling facility. We’re
              committed to sustainable practices and would love to show you our
              process in action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
