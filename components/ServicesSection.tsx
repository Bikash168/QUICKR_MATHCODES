"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Live One-on-One Classes",
    description:
      "Personalized sessions with expert teachers, designed to focus on your individual learning needs.",
  },
  {
    title: "Group Learning Programs",
    description:
      "Interactive classes where students learn together, share ideas, and solve problems collaboratively.",
  },
  {
    title: "Exam Preparation Courses",
    description:
      "Specialized programs for board exams, JEE, NDA, SSC, Banking, and other competitive tests.",
  },
  {
    title: "Doubt Clearing Sessions",
    description:
      "Quick and effective solutions to your questions, with step-by-step explanations.",
  },
  {
    title: "Topic Mastery Modules",
    description:
      "Focused learning on specific areas like algebra, geometry, calculus, statistics, and more.",
  },
  {
    title: "Performance Tracking",
    description:
      "Detailed progress reports and feedback to help you improve steadily.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-[#e9c49a] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-12 tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
