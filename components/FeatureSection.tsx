'use client';

import { BookOpen, Users, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Users size={40} color="#e9c49a" />,
    title: 'Teacher-Student Matchmaking',
    description: 'Smart algorithm to connect learners with the most suitable Math teachers.',
  },
  {
    icon: <BookOpen size={40} color="#e9c49a" />,
    title: 'Interactive Learning',
    description: 'Live problem-solving sessions, quizzes, and practice sets.',
  },
  {
    icon: <Smartphone size={40} color="#e9c49a" />,
    title: 'Mobile-First Experience',
    description: 'Optimized for phones and tablets – learn on the go!',
  },
];


export default function FeatureSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 tracking-wide text-[color:#e9c49a]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Platform Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[color:#e9c49a]">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
