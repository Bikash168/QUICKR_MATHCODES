'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="bg-black text-[color:#e9c49a] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-gray-300 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-white font-medium">QUICKR MATHCODES</span> is an innovative educational platform built to connect passionate math teachers with curious learners. Whether you’re mastering school curriculum or preparing for competitive exams, we simplify your journey through the power of visual learning and interactive practice.
        </motion.p>
      </div>
    </section>
  );
}
