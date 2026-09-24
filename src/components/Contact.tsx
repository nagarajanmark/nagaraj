"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  Globe2,
  Clock,
  Sparkles,
  ShieldCheck,
  Video,
  CheckCircle2,
  MessageCircle,
  Zap,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nagarajanmark0@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative bg-[#FFFFFF] text-[#111111] border-t border-[#111111]/10 overflow-hidden"
    >
      {/* Premium Background Lighting & Subtle Pattern */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1D4ED8]/6 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] bg-[#3B82F6]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] text-xs font-mono font-bold uppercase tracking-wider border border-[#1D4ED8]/20 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
            [ DIRECT COLLABORATION &amp; DISCOVERY ]
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
          >
            Schedule a Call &amp;{" "}
            <span className="bg-gradient-to-r from-[#0C2B6E] via-[#1D4ED8] to-[#3B82F6] bg-clip-text text-transparent">
              Connect Directly
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#111111]/70 leading-relaxed font-normal max-w-2xl"
          >
            Prefer discussing your engineering roadmap live or need direct communication channels? Choose your preferred way to collaborate.
          </motion.p>
        </div>

        {/* 2-Column High-End Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Discovery Video Call */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-[32px] bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#F8FAFC] text-[#111111] border border-[#111111]/12 hover:border-[#1D4ED8]/60 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_22px_55px_rgba(29,78,216,0.12)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#091E42] via-[#1D4ED8] to-[#3B82F6] opacity-80 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col gap-6">
              {/* Card Header & Badge */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1D4ED8]/15 to-[#1D4ED8]/5 text-[#1D4ED8] border border-[#1D4ED8]/25 flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <Calendar className="w-7 h-7 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight">
                      Discovery Video Call
                    </h3>
                    <div className="inline-flex items-center gap-1.5 mt-0.5 text-xs text-[#1D4ED8] font-mono font-bold tracking-wide uppercase">
                      <Video className="w-3.5 h-3.5" />
                      <span>30-Min Architecture Review</span>
                    </div>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#1D4ED8] bg-[#1D4ED8]/8 px-2.5 py-1 rounded-full border border-[#1D4ED8]/15 shrink-0">
                  <Zap className="w-3 h-3 text-[#1D4ED8]" /> Live 1-on-1
                </span>
              </div>

              <p className="text-sm sm:text-[15px] text-[#111111]/75 leading-relaxed font-normal">
                Prefer discussing your architecture live? Schedule a direct 30-minute discovery call to evaluate project scope, tech stack, and milestones.
              </p>

              {/* Feature Points */}
              <div className="space-y-2.5 pt-2 border-t border-[#111111]/8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111111]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>Direct 1-on-1 evaluation with Lead Full-Stack Architect</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111111]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>Tech stack recommendations &amp; cloud architecture roadmap</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111111]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>Transparent timeline &amp; milestones estimate (No sales pitch)</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-6 border-t border-[#111111]/8">
              <a
                href="https://calendly.com/nagarajanmark0/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#091E42] via-[#0C2B6E] to-[#1D4ED8] hover:from-[#0B2556] hover:to-[#2563EB] text-[#FFFFFF] px-8 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_8px_24px_rgba(9,30,66,0.25)] hover:shadow-[0_12px_30px_rgba(29,78,216,0.35)] border border-white/10 group-hover:scale-[1.01]"
              >
                <span>Schedule 30-Min Call</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-[#111111]/50 mt-3 text-center">
                <span>⚡ Instant Confirmation</span>
                <span>•</span>
                <span>Google Meet / Zoom</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Direct Information & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-[32px] bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#F8FAFC] text-[#111111] border border-[#111111]/12 hover:border-[#1D4ED8]/60 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_22px_55px_rgba(29,78,216,0.12)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#10B981] opacity-80 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col gap-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 relative flex items-center justify-center">
                    <span className="absolute w-full h-full rounded-full bg-emerald-500 animate-ping opacity-75" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Live Channel &amp; Status
                  </span>
                </div>

                <span className="text-[11px] font-mono text-[#111111]/50 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8]" /> Fast Response
                </span>
              </div>

              {/* Direct Email */}
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase font-mono text-[#1D4ED8] font-bold tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  DIRECT EMAIL
                </span>
                <div className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#111111]/10 hover:border-[#1D4ED8]/40 transition-colors">
                  <a
                    href="mailto:nagarajanmark0@gmail.com"
                    className="text-base sm:text-lg font-bold text-[#111111] hover:text-[#1D4ED8] transition-colors truncate tracking-tight"
                  >
                    nagarajanmark0@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-[#111111]/12 hover:bg-[#1D4ED8] hover:text-[#FFFFFF] text-gray-700 text-xs font-bold transition-all shadow-sm shrink-0 cursor-pointer"
                    aria-label="Copy Email"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Work Mode */}
              <div className="flex flex-col gap-1.5 pt-4 border-t border-[#111111]/8">
                <span className="text-xs uppercase font-mono text-[#1D4ED8] font-bold tracking-wider flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5" />
                  LOCATION &amp; WORK MODE
                </span>
                <div className="flex items-center justify-between text-sm sm:text-[15px] font-semibold text-[#111111]">
                  <span>Worldwide Remote ✦ Global Client Collaboration</span>
                </div>
                <span className="text-xs text-[#111111]/55 font-mono">
                  Flexible overlap with IST, UTC, EST, and PST working hours
                </span>
              </div>

              {/* Current Availability */}
              <div className="flex flex-col gap-2 pt-4 border-t border-[#111111]/8">
                <span className="text-xs uppercase font-mono text-[#1D4ED8] font-bold tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  CURRENT AVAILABILITY
                </span>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs sm:text-sm font-bold text-emerald-900">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>Open for Q3 &amp; Q4 2026 Full-Stack Contracts (1–2 Projects Max)</span>
                </div>
              </div>
            </div>

            {/* Response SLA footer */}
            <div className="pt-4 mt-6 border-t border-[#111111]/8 flex items-center justify-between text-xs text-[#111111]/60 font-medium">
              <span className="flex items-center gap-1.5 text-[#1D4ED8] font-semibold">
                <ShieldCheck className="w-4 h-4" /> 24h Response SLA
              </span>
              <span className="text-[11px] font-mono text-[#111111]/50">
                Avg Response: &lt; 2h
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
