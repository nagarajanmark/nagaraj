"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GlyphPortal from "@/components/ui/glyph-portal";
import {
  Sparkles,
  CheckCircle2,
  Loader2,
  FileDown,
  Layers,
  Server,
  Layout,
  Database
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const skillPills = [
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  "React.js & Next.js",
  "Node.js & Express",
  "TypeScript",
  "REST & GraphQL APIs",
  "PostgreSQL & MongoDB",
];

const marqueePills = [...skillPills, ...skillPills, ...skillPills];

const family = '"Montserrat", sans-serif';

export default function Hero() {
  const [fontReady, setFontReady] = useState<string>('"Montserrat", sans-serif');
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "completed">("idle");
  const [progress, setProgress] = useState<number>(0);

  const handleDownloadCV = () => {
    if (downloadState !== "idle") return;

    setDownloadState("downloading");
    setProgress(20);

    const t1 = setTimeout(() => setProgress(65), 300);
    const t2 = setTimeout(() => {
      setProgress(100);

      // Trigger automatic download of Nagarajan_cv.pdf
      const link = document.createElement("a");
      link.href = "/pdf/Nagarajan_cv.pdf";
      link.download = "Nagarajan_cv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadState("completed");
    }, 750);

    const t3 = setTimeout(() => {
      setDownloadState("idle");
      setProgress(0);
    }, 3200);
  };

  useEffect(() => {
    let active = true;

    if (typeof window !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        if (active) setFontReady(family);
      });

      return () => {
        active = false;
      };
    }
  }, []);

  return (
    <div className="relative w-full bg-[#FFFFFF]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Dancing+Script:wght@700&family=Montserrat:wght@800;900&display=swap');
        
        /* Fiery Orange Studio Portrait Background on sticky pin */
        [data-hero-portal] [data-gp-pin] {
          background-image: 
            
            url('/nagarajan-studio-portrait-hero-background.webp') !important;
          background-size: cover !important;
          background-position: center 30% !important;
          background-repeat: no-repeat !important;
        }

        [data-hero-portal] [data-gp-caption] {
          inset: calc(var(--gp-word-bottom, 50%) + 44px) 16px auto;
          justify-content: center;
          z-index: 30;
        }
        [data-hero-portal] [data-gp-hint] {
          display: none;
        }
        [data-hero-portal] [data-gp-touch-picker] {
          display: none !important;
        }
        [data-hero-portal] [data-gp-enter] {
          min-height: 40px;
          padding: 0 18px;
          gap: 10px;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 9999px;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
          transition: all 0.25s ease;
        }
        @media (min-width: 640px) {
          [data-hero-portal] [data-gp-caption] {
            inset: calc(var(--gp-word-bottom, 50%) + 54px) 24px auto;
          }
          [data-hero-portal] [data-gp-enter] {
            min-height: 44px;
            padding: 0 20px;
            font-size: 13px;
          }
        }
        [data-hero-portal] [data-gp-enter]:hover {
          background: rgba(0, 0, 0, 0.65);
          color: #FFFFFF;
          box-shadow: 0 12px 30px rgba(255, 90, 0, 0.4);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Main GlyphPortal */}
      <div
        data-hero-portal
        className="relative w-full min-h-screen"
        style={{
          fontFamily: fontReady ?? '"Montserrat", sans-serif',
        }}
      >
        <GlyphPortal
          word="NAGARAJAN"
          scrollLength={2.8}
          interactive={false}
          annotations={false}
          fontFamily={fontReady ?? '"Montserrat", sans-serif'}
          fontWeight={900}
          enterLabel="Explore Portfolio"
          style={{
            "--gp-paper": "transparent",
            "--gp-ink": "#FFFFFF",
            "--gp-field": "#FFFFFF",
            "--gp-foreground": "#111111",
          }}
          background={
            /* Solid White fill inside the letters that expands on scroll */
            <div className="absolute inset-0 w-full h-full bg-[#FFFFFF]">
              {/* Subtle Grid Pattern on White interior */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(17, 17, 17, 0.06) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(17, 17, 17, 0.06) 1px, transparent 1px)`,
                  backgroundSize: "64px 64px",
                }}
              />
            </div>
          }
          front={
            <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-between p-4 sm:p-8 md:p-12 lg:p-14 z-25">

              {/* TOP ROW: Brand Statement */}
              <div className="w-full flex items-start justify-between pt-16 sm:pt-14 md:pt-10">

                {/* Top Left: 4-square icon + statement */}
                <div className="pointer-events-auto flex items-start gap-2.5 max-w-[200px] sm:max-w-xs select-none">
                  {/* 4-square icon matching screenshot */}
                  <div className="grid grid-cols-2 gap-1 w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0">
                    <span className="w-1.5 h-1.5 bg-white rounded-[1px] shadow-sm" />
                    <span className="w-1.5 h-1.5 bg-white/70 rounded-[1px]" />
                    <span className="w-1.5 h-1.5 bg-white/70 rounded-[1px]" />
                    <span className="w-1.5 h-1.5 bg-white rounded-[1px] shadow-sm" />
                  </div>

                  <p className="text-[11px] sm:text-[13px] md:text-sm font-semibold leading-tight sm:leading-snug text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                    Full Stack Developer<br />
                    Frontend &amp; Backend<br />
                    Web Applications.
                  </p>
                </div>
              </div>

              {/* CENTER: Trademark Registered Badge symbol aligned with NAGARAJAN */}
              <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-center">
                <div className="relative inline-block">
                  <span className="opacity-0 text-7xl sm:text-8xl md:text-9xl font-black">
                    NAGARAJAN
                  </span>
                  <span className="absolute -top-1 sm:-top-2 md:-top-3 -right-6 sm:-right-10 md:-right-14 w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11 rounded-full border-2 border-white flex items-center justify-center text-[10px] sm:text-xs md:text-sm font-black text-white bg-black/30 backdrop-blur-sm shadow-xl">
                    R
                  </span>
                </div>
              </div>

              {/* BOTTOM ROW: Primary H1 & Capabilities Statement (Left) + Skills Pills row (Right) */}
              <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-4 sm:pb-8">

                {/* Bottom Left: Primary Semantic H1 & Supporting Text */}
                <div className="pointer-events-auto max-w-[320px] sm:max-w-lg select-none flex flex-col gap-1.5">
                  <h1 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Nagarajan — Full Stack Developer
                  </h1>
                  <p className="text-[11px] sm:text-xs md:text-[13px] font-medium text-white/90 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Full Stack Developer specializing in modern frontend and backend engineering. I build responsive user interfaces, scalable APIs and complete web applications using React.js, Next.js, Node.js and TypeScript.
                  </p>
                </div>

                {/* Bottom Right: Interactive Glass Marquee Pills */}
                <div className="pointer-events-auto w-full md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden relative select-none [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                  <div className="flex items-center gap-2 sm:gap-2.5 w-max animate-marquee hover:[animation-play-state:paused]">
                    {marqueePills.map((pill, idx) => (
                      <div
                        key={idx}
                        className="px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-2xl bg-white/[0.14] hover:bg-white/[0.22] backdrop-blur-md border border-white/20 text-white text-xs sm:text-[13px] font-semibold tracking-wide whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-200 cursor-default"
                      >
                        {pill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

             
            </div>
          }
        >
          {/* Inside Letter Portal Experience - Who Am I Section */}
          <div className="relative w-full max-w-6xl mx-auto py-8 sm:py-16 px-4 sm:px-6 text-[#111111]">
            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-14">

              {/* Left Column: Vertical Sideways Name + Electric Blue / Amber Theme Stat Block */}
              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                {/* Sideways Vertical Text: NAGARAJAN */}
                <div className="[writing-mode:vertical-lr] rotate-180 text-2xl sm:text-3xl md:text-4xl font-black tracking-widest text-[#1D4ED8] select-none uppercase">
                  NAGARAJAN
                </div>

                {/* Solid Electric Royal Blue Square Card */}
                <div className="relative bg-gradient-to-br from-[#091E42] via-[#0C2A66] to-[#1D4ED8] text-white rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 flex flex-col justify-between aspect-square w-[240px] sm:w-[290px] md:w-[330px] shadow-2xl overflow-hidden border border-blue-400/20">
                  {/* Subtle Background Glow */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Huge Number */}
                  <div className="text-7xl sm:text-8xl md:text-[8.5rem] font-black tracking-tight leading-none text-white select-none">
                    5+
                  </div>

                  {/* Bottom Text */}
                  <div className="text-lg sm:text-2xl font-bold tracking-tight text-white/95 leading-tight">
                    Years of Full-Stack Experience
                  </div>
                </div>
              </div>

              {/* Right Column: About Me Details, Engineering Pillars & CTA */}
              <div className="relative flex-1 flex flex-col justify-center gap-4 sm:gap-6">
                {/* Ghost Watermark Background Text: About Me */}
                <div className="absolute -top-6 sm:-top-8 left-16 sm:left-28 text-5xl sm:text-7xl md:text-8xl font-black text-slate-900/[0.04] select-none pointer-events-none tracking-tight leading-none -z-0">
                  About Me
                </div>

                {/* Subtitle with Dash: — About Me */}
                <div className="relative z-10 flex items-center gap-2.5 text-[#1D4ED8] text-sm sm:text-base font-bold tracking-wide">
                  <span className="w-5 h-[2px] bg-[#1D4ED8] rounded-full" />
                  <span className="font-mono uppercase text-xs sm:text-sm font-bold tracking-wider">About Me</span>
                </div>

                {/* Main Heading: Who is Nagarajan? */}
                <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#111111] tracking-tight leading-[1.15]">
                  Who is{" "}
                  <span className="text-[#1D4ED8]">
                    Nagarajan?
                  </span>
                </h2>

                {/* Primary About Bio Description */}
                <p className="relative z-10 text-slate-700 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                  Nagarajan is a Full Stack Developer experienced in building modern frontend interfaces, scalable backend systems and complete web applications. His work spans React.js, Next.js, TypeScript, Node.js, REST APIs, databases and cloud deployment.
                </p>

                {/* Core Engineering Pillars Breakdown */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {/* Frontend Pillar */}
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-black/5 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider font-mono">
                      <Layout className="w-3.5 h-3.5 text-[#1D4ED8]" />
                      <span>Frontend</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3 &amp; Tailwind CSS
                    </p>
                  </div>

                  {/* Backend Pillar */}
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-black/5 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider font-mono">
                      <Server className="w-3.5 h-3.5 text-[#1D4ED8]" />
                      <span>Backend</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Node.js, Express.js, REST APIs, GraphQL, Auth &amp; API Integrations
                    </p>
                  </div>

                  {/* Database Pillar */}
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-black/5 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider font-mono">
                      <Database className="w-3.5 h-3.5 text-[#1D4ED8]" />
                      <span>Database</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      PostgreSQL, MongoDB, MySQL, Supabase &amp; Redis Caching
                    </p>
                  </div>
                </div>

                {/* Two Stats Side-by-Side */}
                <div className="relative z-10 flex items-center gap-10 sm:gap-16 pt-1">
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl sm:text-4xl md:text-[2.5rem] font-black text-[#111111] tracking-tight leading-none">
                      30+
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500">
                      Full-Stack Projects
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-3xl sm:text-4xl md:text-[2.5rem] font-black text-[#111111] tracking-tight leading-none">
                      15+
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500">
                      Frontend &amp; Backend Stacks
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Animated Theme-styled Pill Button */}
                <div className="relative z-10 flex items-center pt-2">
                  <motion.button
                    type="button"
                    onClick={handleDownloadCV}
                    whileHover={{ scale: downloadState === "idle" ? 1.03 : 1 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative inline-flex items-center rounded-full p-1 shadow-lg transition-all duration-500 group border cursor-pointer select-none overflow-hidden ${downloadState === "completed"
                        ? "bg-emerald-950/90 border-emerald-400/40 shadow-emerald-500/25 shadow-xl"
                        : downloadState === "downloading"
                          ? "bg-[#091E42] border-blue-400/40 shadow-blue-500/30 shadow-xl"
                          : "bg-[#091E42] border-white/10 hover:shadow-xl hover:shadow-blue-500/20"
                      }`}
                  >
                    {/* Left Icon Capsule with Smooth Rotation & Morph */}
                    <motion.div
                      layout
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${downloadState === "completed"
                          ? "bg-emerald-500 text-white"
                          : downloadState === "downloading"
                            ? "bg-[#1D4ED8] text-white"
                            : "bg-[#0C2A66] text-white group-hover:bg-[#1D4ED8]"
                        }`}
                    >
                      <AnimatePresence mode="wait">
                        {downloadState === "downloading" && (
                          <motion.div
                            key="loader"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ duration: 0.25 }}
                          >
                            <Loader2 className="w-5 h-5 animate-spin text-white" />
                          </motion.div>
                        )}
                        {downloadState === "completed" && (
                          <motion.div
                            key="check"
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1.15, rotate: 0 }}
                            exit={{ scale: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                        {downloadState === "idle" && (
                          <motion.div
                            key="arrow"
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 4 }}
                          >
                            <FileDown className="w-5 h-5 text-blue-200 group-hover:translate-y-0.5 transition-transform" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Right Button Text Capsule with Progress Track */}
                    <div
                      className={`relative overflow-hidden font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-500 ml-1 ${downloadState === "completed"
                          ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white"
                          : "bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] group-hover:from-[#2563EB] group-hover:to-[#3B82F6] text-white"
                        }`}
                    >
                      {/* Active Download Progress Bar Fill */}
                      {downloadState === "downloading" && (
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress}%` }}
                          transition={{ ease: "easeInOut", duration: 0.3 }}
                        />
                      )}

                      <AnimatePresence mode="wait">
                        <motion.span
                          key={downloadState}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="relative z-10 flex items-center gap-1.5"
                        >
                          {downloadState === "downloading" && "Downloading..."}
                          {downloadState === "completed" && "Downloaded! 🎉"}
                          {downloadState === "idle" && "Download CV"}
                        </motion.span>
                      </AnimatePresence>
                    </div>

                    {/* Celebration particles/glow when completed */}
                    {downloadState === "completed" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.4, 1.6] }}
                        transition={{ duration: 1.2, repeat: 1 }}
                        className="absolute inset-0 rounded-full border-2 border-emerald-400 pointer-events-none"
                      />
                    )}
                  </motion.button>
                </div>

              </div>
            </div>
          </div>
        </GlyphPortal>
      </div>
    </div>
  );
}
