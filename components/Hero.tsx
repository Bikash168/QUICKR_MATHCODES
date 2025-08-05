'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const mathSymbols = ['∑', 'π', '√', '∞', '≠', '∫', '∆', 'θ', '∂', 'µ', '∇', 'Ω', '≈', '∝', 'λ', 'Ψ', '∅', 'α', 'β', 'γ', 'δ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

type SymbolProps = {
  top: number;
  left: number;
  symbol: string;
  duration: number;
};

export default function HeroSection() {
  const [symbols, setSymbols] = useState<SymbolProps[]>([]);

  useEffect(() => {
    const totalSymbols = 100; // Increase number of floating symbols
    const newSymbols: SymbolProps[] = Array.from({ length: totalSymbols }, () => ({
      symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
      top: Math.random() * 90,
      left: Math.random() * 95,
      duration: Math.random() * 3 + 3, // Faster animations (3s–6s)
    }));
    setSymbols(newSymbols);
  }, []);

  return (
    <section className="relative bg-black text-white h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] pt-[88px] pb-16 overflow-hidden">
      {/* SVG Grid Background */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Hero Text Content */}
      {/* Hero Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 h-full">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-[color:#e9c49a]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          QUICKR MATHCODES
        </motion.h1>
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Where Math Meets Magic — Connect, Learn, Solve.
        </motion.p>
      </div>


      {/* Floating Math Symbols */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {symbols.map((s, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0.2 }}
            animate={{
              y: ['0%', '-15%', '15%', '0%'],
              x: ['0%', '5%', '-5%', '0%'],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute text-white text-3xl md:text-5xl font-bold mix-blend-difference blur-[1px]"
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
