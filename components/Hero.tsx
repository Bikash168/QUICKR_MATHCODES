'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const mathSymbols = [
  '∑', 'π', '√', '∞', '≠', '∫', '∆', 'θ', '∂', 'µ', '∇', 'Ω', '≈', '∝',
  'λ', 'Ψ', '∅', 'α', 'β', 'γ', 'δ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

type SymbolProps = {
  top: number;
  left: number;
  symbol: string;
  duration: number;
};

export default function HeroSection() {
  const [symbols, setSymbols] = useState<SymbolProps[]>([]);

  useEffect(() => {
    const totalSymbols = window.innerWidth < 640 ? 50 : 100; // fewer symbols on mobile
    const newSymbols: SymbolProps[] = Array.from({ length: totalSymbols }, () => ({
      symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
      top: Math.random() * 90,
      left: Math.random() * 95,
      duration: Math.random() * 3 + 3,
    }));
    setSymbols(newSymbols);
  }, []);

  return (
    <section className="relative bg-black text-white min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] pt-[88px] pb-12 overflow-hidden">
      {/* Background grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-full">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#e9c49a] leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Master Mathematics with Expert Teachers
        </motion.h1>

        <motion.p
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          An innovative app platform connecting learners with top mathematics educators for personalized, interactive, and result-focused learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#download"
            className="bg-[#e9c49a] text-black px-5 py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base lg:text-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            📲 Download the App
          </a>
          <a
            href="#book-trial"
            className="bg-transparent border border-[#e9c49a] text-[#e9c49a] px-5 py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base lg:text-lg hover:bg-[#e9c49a] hover:text-black transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            🎯 Book a Free Trial Class
          </a>
        </motion.div>
      </div>

      {/* Floating Math Symbols */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {symbols.map((s, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0.15 }}
            animate={{
              y: ['0%', '-20%', '20%', '0%'],
              x: ['0%', '5%', '-5%', '0%'],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mix-blend-difference blur-[1px]"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
            }}
          >
            {s.symbol}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
