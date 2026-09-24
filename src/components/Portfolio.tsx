"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section className="py-20 md:py-28 relative bg-[#FFFFFF] overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16 sm:mb-20">
          {/* Left Column: Tilted Accent, "Projects" Title & "Hire Me" Button */}
          <div className="flex flex-col items-start gap-6">
            <div className="relative">
              {/* Tilted Blue Accent Bar */}
              <div className="absolute -top-3 left-0 w-16 sm:w-20 h-2.5 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-full -rotate-6 shadow-sm" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] leading-none pt-1">
                Projects
              </h2>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#041738] hover:bg-[#0B2564] text-[#FFFFFF] px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column: Clean Subtitle */}
          <div className="max-w-md lg:max-w-lg pt-1">
            <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed font-normal">
              Explore my selected projects to discover my design style, architectural engineering, and full-stack capabilities.
            </p>
          </div>
        </div>

        {/* 3D Showcase Banner with Real Screenshots */}
        <div className="relative w-full rounded-3xl bg-transparent py-10 sm:py-16 my-4 overflow-visible">
          {/* Dynamic Slanted Royal Electric Blue Ribbon Bands */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-56 sm:h-72 md:h-80 -rotate-6 pointer-events-none -z-0 overflow-hidden flex flex-col justify-center">
            {/* Top Light Blue Accent Stripe */}
            <div className="w-full h-4 sm:h-6 bg-[#DBEAFE]/80 mb-1" />

            {/* Main Rich Theme Blue Banner with Angled Typography */}
            <div className="w-full flex-1 bg-gradient-to-r from-[#0A2558] via-[#1D4ED8] to-[#2563EB] flex items-center justify-center shadow-xl relative">
              <span className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] tracking-tight text-[#FFFFFF] uppercase select-none drop-shadow-md font-sans whitespace-nowrap">
                FEATURED CLIENT WEBSITES
              </span>
            </div>

            {/* Bottom Light Sky Accent Stripe */}
            <div className="w-full h-6 sm:h-10 bg-[#93C5FD]/60 mt-1" />
          </div>

          {/* 3 Floating 3D Overlapping Perspective Mockup Cards with Real Screenshots */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6 pb-8 max-w-6xl mx-auto items-stretch">
            {/* Card 1: The Wheels Turbo Cafe */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group w-full rounded-2xl overflow-hidden bg-[#090F1F] border border-white/20 shadow-[-15px_25px_50px_rgba(0,0,0,0.35)] p-3 text-white transform -rotate-6 hover:-rotate-2 hover:scale-[1.03] transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="relative rounded-xl overflow-hidden bg-[#0A1128] flex flex-col justify-between border border-white/10 shadow-inner h-[280px] sm:h-[300px]">
                {/* Browser Window Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#060D1E] border-b border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="ml-1.5 font-mono font-bold text-white text-[11px] truncate">wheelsturbocafe.com</span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-[#EA580C] text-white font-bold shrink-0 uppercase tracking-wider">CAFE // RACING</span>
                </div>

                {/* Screenshot Visual */}
                <div className="relative flex-1 w-full overflow-hidden bg-[#050B14]">
                  <Image
                    src="/projects/wheels-turbo-cafe.webp"
                    alt="The Wheels Turbo Cafe"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Card Footer */}
                <div className="px-3.5 py-2.5 bg-[#060D1E] flex items-center justify-between text-[11px] text-white/80 border-t border-white/10 font-mono">
                  <span className="truncate font-semibold text-white">THE WHEELS TURBO CAFE</span>
                  <span className="text-[#F97316] font-bold shrink-0">RS PURAM, CBE</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Sarvilinga Builders & Structures (Center Spotlight) */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="group w-full rounded-2xl overflow-hidden bg-[#090F1F] border border-white/30 shadow-[-10px_35px_60px_rgba(0,0,0,0.45)] p-3 text-white z-20 transform -rotate-6 hover:-rotate-2 hover:scale-[1.03] transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="relative rounded-xl overflow-hidden bg-[#0A1128] flex flex-col justify-between border border-white/10 shadow-inner h-[280px] sm:h-[300px]">
                {/* Browser Window Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#060D1E] border-b border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="ml-1.5 font-mono font-bold text-white text-[11px] truncate">sarvilingabuilders.com</span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-[#DC2626] text-white font-bold shrink-0 uppercase tracking-wider">ENGINEERING</span>
                </div>

                {/* Screenshot Visual */}
                <div className="relative flex-1 w-full overflow-hidden bg-[#050B14]">
                  <Image
                    src="/projects/sarvilinga-builders.webp"
                    alt="Sarvilinga Builders & Structures"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Card Footer */}
                <div className="px-3.5 py-2.5 bg-[#060D1E] flex items-center justify-between text-[11px] text-white/80 border-t border-white/10 font-mono">
                  <span className="truncate font-semibold text-white">SARVILINGA BUILDERS</span>
                  <span className="text-[#38BDF8] font-bold shrink-0">COIMBATORE, TN</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Niyozenix Dental & Orthodontics */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group w-full rounded-2xl overflow-hidden bg-[#090F1F] border border-white/20 shadow-[15px_25px_50px_rgba(0,0,0,0.35)] p-3 text-white transform -rotate-6 hover:-rotate-2 hover:scale-[1.03] transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="relative rounded-xl overflow-hidden bg-[#0A1128] flex flex-col justify-between border border-white/10 shadow-inner h-[280px] sm:h-[300px]">
                {/* Browser Window Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#060D1E] border-b border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="ml-1.5 font-mono font-bold text-white text-[11px] truncate">niyozenix.com</span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-[#4F46E5] text-white font-bold shrink-0 uppercase tracking-wider">HEALTHCARE</span>
                </div>

                {/* Screenshot Visual */}
                <div className="relative flex-1 w-full overflow-hidden bg-[#050B14]">
                  <Image
                    src="/projects/niyozenix-dental.webp"
                    alt="Niyozenix Dental & Orthodontics"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Card Footer */}
                <div className="px-3.5 py-2.5 bg-[#060D1E] flex items-center justify-between text-[11px] text-white/80 border-t border-white/10 font-mono">
                  <span className="truncate font-semibold text-white">NIYOZENIX DENTAL</span>
                  <span className="text-[#818CF8] font-bold shrink-0">PONDICHERRY</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Right Details CTA */}
          <div className="relative z-10 flex items-center justify-end pt-4">
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="text-sm sm:text-base font-bold text-[#2563EB] tracking-wide">
                Hospitality • Architecture • Healthcare
              </span>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-2xl sm:text-3xl font-extrabold text-[#111111] hover:text-[#1D4ED8] transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5 text-[#111111] group-hover:text-[#1D4ED8]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
