'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Target, Calculator, Zap } from 'lucide-react';

const courses = [
  {
    icon: <GraduationCap size={40} color="#e9c49a" />,
    title: 'School Mathematics',
    description: 'Classes 5–12 for CBSE, ICSE, and State Boards with step-by-step guidance.',
  },
  {
    icon: <Target size={40} color="#e9c49a" />,
    title: 'Competitive Exam Prep',
    description: 'Specialized coaching for JEE, NDA, SSC, Banking, and more.',
  },
  {
    icon: <Calculator size={40} color="#e9c49a" />,
    title: 'College-Level Mathematics',
    description: 'Advanced courses for university students and research aspirants.',
  },
  {
    icon: <Zap size={40} color="#e9c49a" />,
    title: 'Skill Booster Programs',
    description: 'Speed math, shortcut tricks, and mental calculation mastery.',
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 tracking-wide text-[color:#e9c49a]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Courses Offered
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[color:#e9c49a]">{course.title}</h3>
              <p className="text-gray-400">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
