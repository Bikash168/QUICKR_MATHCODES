'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="bg-black text-[#e9c49a] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
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
          We are a dedicated mathematics learning platform committed to making math simple, engaging, and effective for learners of all ages.
          Our mission is to connect students with highly qualified teachers who use interactive tools and personalized strategies to make learning more impactful.
          Whether you’re aiming to improve grades, prepare for competitive exams, or master advanced topics, our platform gives you the right support.
          <br /><br />
          We believe that every learner has unique strengths. That’s why our app adapts to your pace, style, and goals — making sure your journey in mathematics is both enjoyable and successful.
        </motion.p>
      </div>
    </section>
  );
}
