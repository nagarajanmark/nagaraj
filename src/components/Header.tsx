"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#work" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Services", href: "#services" },
  { name: "Why Me", href: "#why-me" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none flex justify-center">
      {/* Floating Island Glass Capsule */}
      <div
        className={`pointer-events-auto transition-all duration-500 rounded-full border flex items-center justify-between gap-3 sm:gap-6 px-3.5 py-2 sm:px-5 sm:py-2.5 max-w-fit shadow-[0_8px_32px_rgba(0,0,0,0.08)] ${
          isScrolled
            ? "bg-white/85 backdrop-blur-2xl backdrop-saturate-150 border-black/10 shadow-[0_14px_40px_rgba(0,0,0,0.12)] scale-[0.98]"
            : "bg-white/75 backdrop-blur-xl border-black/[0.08]"
        }`}
      >
        {/* Brand Logo Pod */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-bold tracking-tight text-[#111111] pr-1 sm:pr-2"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#091E42] via-[#0C2A66] to-[#1D4ED8] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
            N
          </div>
        </Link>

        {/* Status Dot: Open to work */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-700">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="whitespace-nowrap">Available</span>
        </div>

        {/* Separator Divider */}
        <div className="hidden md:block w-px h-4 bg-black/10" />

        {/* Compact Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 sm:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-semibold text-[#111111]/75 hover:text-[#1D4ED8] transition-colors whitespace-nowrap py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Separator Divider */}
        <div className="hidden md:block w-px h-4 bg-black/10" />

        {/* Compact CTA Button */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 bg-gradient-to-r from-[#091E42] via-[#0C2A66] to-[#1D4ED8] text-[#FFFFFF] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold overflow-hidden transition-all duration-300 hover:from-[#0C2A66] hover:to-[#2563EB] shadow-[0_3px_12px_rgba(29,78,216,0.3)] hover:shadow-[0_6px_20px_rgba(29,78,216,0.45)] hover:scale-105 active:scale-95 border border-white/20 whitespace-nowrap"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[#111111] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="pointer-events-auto absolute top-16 left-4 right-4 sm:left-auto sm:right-auto sm:w-80 bg-white/95 backdrop-blur-2xl text-[#111111] border border-black/10 rounded-3xl p-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-lg font-bold tracking-tight text-[#111111]/80 hover:text-[#1D4ED8] transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="pt-3 border-t border-black/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#091E42] via-[#0C2A66] to-[#1D4ED8] text-[#FFFFFF] py-3 rounded-full text-sm font-bold shadow-md"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
