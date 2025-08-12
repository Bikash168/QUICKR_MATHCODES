'use client';
import { motion } from 'framer-motion';
import { FaUserPlus, FaChalkboardTeacher, FaLaptopCode, FaChartLine } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus className="text-3xl sm:text-4xl text-[#e9c49a]" />,
      title: "Sign Up & Set Goals",
      description: "Create your account and share your learning needs.",
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl sm:text-4xl text-[#e9c49a]" />,
      title: "Choose Your Teacher",
      description: "Select from a list of verified and experienced mathematics educators.",
    },
    {
      icon: <FaLaptopCode className="text-3xl sm:text-4xl text-[#e9c49a]" />,
      title: "Join Live Classes",
      description: "Learn through interactive whiteboards, real-time quizzes, and clear explanations.",
    },
    {
      icon: <FaChartLine className="text-3xl sm:text-4xl text-[#e9c49a]" />,
      title: "Track Progress",
      description: "Get feedback reports and improvement plans after each session.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#e9c49a] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-[#e9c49a]/40 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {step.icon}
              <h3 className="mt-4 text-lg sm:text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
