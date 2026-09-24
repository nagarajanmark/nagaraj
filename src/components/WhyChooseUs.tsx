"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Zap, Layers, Sparkles, ArrowUpRight } from "lucide-react";

const differentiators = [
  {
    number: "01",
    icon: Terminal,
    title: "Full-Stack System Mastery",
    description: "End-to-end expertise spanning PostgreSQL & MongoDB databases, high-throughput Node.js microservices, and reactive Next.js interfaces.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Clean, Maintainable Architecture",
    description: "Strict TypeScript type-safety, modular component design, and zero-debt database schemas built for long-term maintainability.",
  },
  {
    number: "03",
    icon: Zap,
    title: "High-Velocity Engineering",
    description: "Production-ready features shipped in rapid weekly sprints with automated CI/CD pipelines, robust unit tests, and zero bureaucracy.",
  },
  {
    number: "04",
    icon: Layers,
    title: "Direct Senior Engineering",
    description: "Work directly with a senior full-stack engineer who owns technical execution, architectural decisions, and production launch.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-me" className="py-24 md:py-32 relative bg-[#FFFFFF] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1D4ED8]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 mb-16 border-b border-[#111111]/10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] text-xs font-mono font-bold uppercase tracking-wider w-max">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
              [ WHY WORK WITH NAGARAJAN ]
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
              Engineering web applications built to scale.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111111]/70 max-w-md leading-relaxed font-normal">
            Proven engineering standards, pragmatic architectural decisions, and clean modern execution that drives business growth.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-[28px] bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] text-[#111111] border border-[#111111]/10 hover:border-[#1D4ED8] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(29,78,216,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Top Subtle Corner Radial Glow on Hover */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#1D4ED8]/10 rounded-full blur-2xl group-hover:bg-[#1D4ED8]/20 transition-all duration-500 pointer-events-none" />

                {/* Top Row: Icon Container & Number Index */}
                <div>
                  <div className="flex items-center justify-between w-full mb-8">
                    {/* Glowing Icon Pod */}
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#091E42] via-[#0C2A66] to-[#1D4ED8] text-[#FFFFFF] flex items-center justify-center shadow-lg shadow-[#0C2A66]/30 group-hover:shadow-[#1D4ED8]/50 group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 border border-white/20">
                      <Icon className="w-6 h-6 stroke-[2.2] text-[#FFFFFF]" />
                    </div>

                    {/* Step / Number Badge */}
                    <div className="flex items-center">
                      <span className="font-mono text-2xl font-black text-[#111111]/20 group-hover:text-[#1D4ED8] transition-colors duration-300">
                        {diff.number}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#1D4ED8] transition-colors duration-300 leading-snug mb-3">
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#111111]/70 leading-relaxed font-normal">
                    {diff.description}
                  </p>
                </div>

                {/* Bottom Interactive Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
