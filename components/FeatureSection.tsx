'use client';

import { Users, PenTool, MessageCircle, Clock, DollarSign, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Users size={40} color="#e9c49a" />,
    title: 'Experienced Teachers',
    description: 'Verified educators with proven results.',
  },
  {
    icon: <PenTool size={40} color="#e9c49a" />,
    title: 'Interactive Learning Tools',
    description: 'Step-by-step problem solving.',
  },
  {
    icon: <MessageCircle size={40} color="#e9c49a" />,
    title: 'Anytime Doubt Clearing',
    description: 'No more waiting for the next class.',
  },
  {
    icon: <Clock size={40} color="#e9c49a" />,
    title: 'Flexible Scheduling',
    description: 'Choose class times that fit your routine.',
  },
  {
    icon: <DollarSign size={40} color="#e9c49a" />,
    title: 'Affordable Learning',
    description: 'High-quality teaching at reasonable rates.',
  },
  {
    icon: <BookOpen size={40} color="#e9c49a" />,
    title: 'Personalized Learning Plans',
    description: 'Custom study paths based on your strengths and weaknesses.',
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 tracking-wide text-[color:#e9c49a]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
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
