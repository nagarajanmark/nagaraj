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
              Senior Full Stack Web Developer architecting scalable cloud platforms, Next.js web applications, and high-throughput backend APIs.
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
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#111111]/10 hover:border-[#1D4ED8] hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[#111111] group-hover:text-[#1D4ED8] transition-colors">
                    GitHub
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#111111]/40 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#111111]/10 hover:border-[#1D4ED8] hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[#111111] group-hover:text-[#1D4ED8] transition-colors">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#111111]/40 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#111111]/10 hover:border-[#1D4ED8] hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[#111111] group-hover:text-[#1D4ED8] transition-colors">
                    X (Twitter)
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#111111]/40 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
