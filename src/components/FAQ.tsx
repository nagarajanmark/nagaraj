"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqData } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-16 sm:py-24 md:py-32 relative border-t border-[#111111]/10 bg-[#FFFFFF] overflow-hidden"
      id="faq"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Header Column - static on mobile, sticky only on large desktop */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6 static lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] text-xs font-mono font-bold uppercase tracking-wider w-max border border-[#1D4ED8]/15">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
              Full Stack FAQs
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-sm sm:text-base text-[#111111]/70 leading-relaxed">
              Common questions about Nagarajan&apos;s full-stack development expertise, frontend capabilities, backend architectures, APIs, and project collaboration.
            </p>

            <div className="pt-1">
              <a
                href="mailto:nagarajanmark0@gmail.com"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1D4ED8] hover:text-[#3B82F6] transition-colors"
              >
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>Have a project question? Email Nagarajan directly</span>
              </a>
            </div>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-8 flex flex-col gap-3.5 sm:gap-4">
            {faqData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#FFFFFF] text-[#111111] border border-[#111111]/10 overflow-hidden transition-all duration-300 hover:border-[#1D4ED8]/40 shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-sm sm:text-base text-[#111111] font-bold pr-2 leading-snug">
                      {faq.question}
                    </h3>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1D4ED8] text-[#FFFFFF] flex items-center justify-center shrink-0 font-bold shadow-sm transition-transform duration-200">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2 text-xs sm:text-sm text-[#111111]/75 leading-relaxed border-t border-[#111111]/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
