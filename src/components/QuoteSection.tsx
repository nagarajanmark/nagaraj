"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Droplets, Quote } from "lucide-react";
import Image from "next/image";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax physics mappings
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const iconRotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const floatingQuoteY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden text-center select-none flex items-center justify-center min-h-[520px] md:min-h-[600px] border-y border-white/10"
    >
      {/* 1. Parallax Background Image Container */}
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
        className="absolute inset-0 -top-[25%] -bottom-[25%] w-full h-[150%] pointer-events-none z-0"
      >
        <Image
          src="/quote-bg.webp"
          alt="Architectural minimalist texture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered cinematic vignette & dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091E42]/85 via-black/75 to-[#091E42]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.18)_0%,transparent_70%)]" />
      </motion.div>

      {/* 2. Floating Ambient Parallax Elements */}
      <motion.div
        style={{ y: floatingQuoteY }}
        className="absolute top-12 left-8 md:left-24 text-white/5 pointer-events-none hidden sm:block z-[1]"
      >
        <Quote className="w-28 h-28 stroke-[1]" />
      </motion.div>
      <motion.div
        style={{ y: floatingQuoteY }}
        className="absolute bottom-12 right-8 md:right-24 text-white/5 pointer-events-none hidden sm:block rotate-180 z-[1]"
      >
        <Quote className="w-28 h-28 stroke-[1]" />
      </motion.div>

      {/* 3. Foreground Content with Smooth Parallax Float */}
      <motion.div
        style={{ y: contentY }}
        className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center gap-8"
      >
        {/* Glassmorphic Icon Pod */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ rotate: iconRotate }}
          className="relative group cursor-default"
        >
          <div className="absolute -inset-2 rounded-full bg-[#1D4ED8]/30 blur-md group-hover:bg-[#1D4ED8]/50 transition-all duration-500" />
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md text-[#38BDF8] flex items-center justify-center border border-white/20 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300">
            <Droplets className="w-7 h-7 fill-[#38BDF8] text-[#38BDF8] drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]" />
          </div>
        </motion.div>

        {/* Quote Statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] max-w-3xl"
        >
          &ldquo;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.&rdquo;
        </motion.blockquote>

        {/* Author Details & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-1.5 font-mono text-xs uppercase tracking-widest font-bold"
        >
          <span className="text-[#38BDF8] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            ANTOINE DE SAINT-EXUPÉRY
          </span>
          <span className="text-white/60 tracking-[0.2em] text-[10px] sm:text-xs">
            STUDIO GUIDING PHILOSOPHY
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
