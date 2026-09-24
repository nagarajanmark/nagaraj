"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#FFFFFF] text-[#111111] pt-20 pb-12 relative overflow-hidden border-t border-[#111111]/10 select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#1D4ED8]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#111111]/10">
          {/* Brand Info with Logo Pod (Name removed as requested) */}
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label="Nagarajan Home"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#091E42] via-[#0C2A66] to-[#1D4ED8] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-lg shadow-[#0C2A66]/25 border border-white/20 group-hover:scale-105 group-hover:shadow-[#1D4ED8]/40 transition-all duration-300">
                N
              </div>
            </Link>

            <p className="text-sm sm:text-base text-[#111111]/70 max-w-sm leading-relaxed font-normal">
              Full Stack Developer specializing in frontend and backend development with React.js, Next.js, Node.js and TypeScript, building scalable web applications.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Worldwide Remote ✦ Open for Q3/Q4 Projects</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#1D4ED8] font-bold">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="#work" className="text-sm sm:text-base text-[#111111]/70 hover:text-[#1D4ED8] transition-colors font-medium">
                Projects &amp; Selected Works
              </a>
              <a href="#techstack" className="text-sm sm:text-base text-[#111111]/70 hover:text-[#1D4ED8] transition-colors font-medium">
                Tech Stack &amp; Frameworks
              </a>
              <a href="#services" className="text-sm sm:text-base text-[#111111]/70 hover:text-[#1D4ED8] transition-colors font-medium">
                Engineering Services
              </a>
              <a href="#why-me" className="text-sm sm:text-base text-[#111111]/70 hover:text-[#1D4ED8] transition-colors font-medium">
                Why Work With Me
              </a>
              <a href="#faq" className="text-sm sm:text-base text-[#111111]/70 hover:text-[#1D4ED8] transition-colors font-medium">
                Common Questions
              </a>
              <a href="#contact" className="text-sm sm:text-base text-[#111111]/70 hover:text-[#1D4ED8] transition-colors font-medium">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Connect & Social Channels */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#1D4ED8] font-bold">
              CONNECT &amp; SOCIAL
            </span>
            <div className="flex flex-col gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nagarajan369"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#111111]/10 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/[0.02] hover:shadow-md hover:shadow-[#0A66C2]/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[#111111] group-hover:text-[#0A66C2] transition-colors">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#111111]/40 group-hover:text-[#0A66C2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@hoverwanderman"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#111111]/10 hover:border-[#FF0000]/40 hover:bg-[#FF0000]/[0.02] hover:shadow-md hover:shadow-[#FF0000]/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#FF0000] group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[#111111] group-hover:text-[#FF0000] transition-colors">
                    YouTube
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#111111]/40 group-hover:text-[#FF0000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/nagaraj_insights"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#111111]/10 hover:border-[#E1306C]/40 hover:bg-[#E1306C]/[0.02] hover:shadow-md hover:shadow-[#E1306C]/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-gradient-to-tr group-hover:from-[#F58529] group-hover:via-[#DD2A7B] group-hover:to-[#8134AF] group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[#111111] group-hover:text-[#E1306C] transition-colors">
                    Instagram
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#111111]/40 group-hover:text-[#E1306C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#111111]/60">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Nagarajan. All rights reserved. Engineered for scale and performance.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#1D4ED8] font-mono font-bold">
              Available Worldwide
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-[#111111]/15 text-[#111111] hover:bg-[#1D4ED8] hover:text-[#FFFFFF] hover:border-[#1D4ED8] hover:shadow-md transition-all duration-300 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
