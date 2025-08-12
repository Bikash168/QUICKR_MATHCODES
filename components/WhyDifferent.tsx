'use client';
import { motion } from 'framer-motion';

export default function WhyDifferent() {
  return (
    <section
      id="whydifferent"
      className="relative bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-[color:#e9c49a]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Our Platform is Different
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mathematics can be challenging — but with the right guidance, it becomes logical,
          interesting, and even exciting. Our app bridges the gap between learners and experienced
          teachers who know how to explain concepts in a way that clicks.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          From foundational skills to advanced problem-solving, we provide learning experiences
          tailored to your goals — so you can study smarter, achieve higher scores, and enjoy the
          process.
        </motion.p>
      </div>
    </section>
  );
}
