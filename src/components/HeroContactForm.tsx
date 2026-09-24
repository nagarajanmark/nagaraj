"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  User,
  Mail,
  Phone,
  Check,
  RefreshCw,
} from "lucide-react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  botField: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function HeroContactForm() {
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
    botField: "",
  });

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [shakeField, setShakeField] = useState<string | null>(null);
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);

  const mountTimeRef = useRef<number>(Date.now());
  const maxMessageLength = 1500;
  const minMessageLength = 15;

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  const validate = (values: FormValues): FormErrors => {
    const errs: FormErrors = {};

    const trimmedName = values.name.trim();
    if (!trimmedName) {
      errs.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      errs.name = "Name must be at least 2 letters.";
    } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
      errs.name = "Name must contain letters only (no numbers).";
    }

    const trimmedEmail = values.email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail) {
      errs.email = "Please enter your email address.";
    } else if (!emailRegex.test(trimmedEmail)) {
      errs.email = "Please enter a valid email address.";
    }

    const trimmedPhone = values.phone.trim();
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,16}$/;
    if (!trimmedPhone) {
      errs.phone = "Please enter your mobile number.";
    } else if (!phoneRegex.test(trimmedPhone)) {
      errs.phone = "Please enter a valid mobile number.";
    }

    const trimmedMessage = values.message.trim();
    if (!trimmedMessage) {
      errs.message = "Please describe your project requirements.";
    } else if (trimmedMessage.length < minMessageLength) {
      errs.message = `Please provide at least ${minMessageLength} characters.`;
    } else if (trimmedMessage.length > maxMessageLength) {
      errs.message = `Message cannot exceed ${maxMessageLength} characters.`;
    }

    return errs;
  };

  useEffect(() => {
    setErrors(validate(formData));
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let sanitized = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

    if (name === "name") {
      sanitized = sanitized.replace(/[^a-zA-Z\s'-]/g, "");
    } else if (name === "phone") {
      sanitized = sanitized.replace(/[^\d+\s-]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: sanitized }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRateLimitError(null);

    setTouched({ name: true, email: true, phone: true, message: true });

    const currentErrors = validate(formData);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      const firstError = Object.keys(currentErrors)[0];
      setShakeField(firstError);
      setTimeout(() => setShakeField(null), 600);
      return;
    }

    if (formData.botField) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    const timeSpent = Date.now() - mountTimeRef.current;
    if (timeSpent < 800) {
      setRateLimitError("Submission flagged by automated spam protection. Please try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit message.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Transmission error. Please try again.";
      setRateLimitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      botField: "",
    });
    setTouched({ name: false, email: false, phone: false, message: false });
    setErrors({});
    setRateLimitError(null);
    mountTimeRef.current = Date.now();
  };

  return (
    <div className="w-full max-w-[580px] flex flex-col gap-5 sm:gap-6 pointer-events-auto">
      {/* Title & Badge Section from Screenshot */}
      <div className="flex flex-col gap-2.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] text-xs font-mono font-bold uppercase tracking-wider w-max">
          <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
          [ START A CONVERSATION ]
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#111111] tracking-tight leading-tight">
          Let&apos;s engineer your next{" "}
          <span className="text-[#1D4ED8]">web application.</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-normal">
          Have a full-stack project in mind, need to architect a new SaaS platform, or looking to scale your engineering? Fill out the form below or reach out directly.
        </p>
      </div>

      {/* The Exact Contact Form Card */}
      <div className="w-full bg-[#FFFFFF] text-[#111111] p-5 sm:p-7 rounded-[26px] border border-[#111111]/10 shadow-[0_15px_45px_rgba(0,0,0,0.07)] relative overflow-hidden">
        <AnimatePresence mode="wait">
          {submitted ? (
            /* SUCCESS STATE */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="py-10 text-center flex flex-col items-center gap-5"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl"
                />
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                  className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-500/30 flex items-center justify-center relative z-10 shadow-lg shadow-emerald-500/10"
                >
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </motion.div>
              </div>

              <div className="space-y-2 max-w-md">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-2xl font-black text-[#111111]"
                >
                  Project Inquiry Received!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-sm text-[#111111]/75 leading-relaxed"
                >
                  Thank you, <span className="font-bold text-[#111111]">{formData.name}</span>. Your technical requirements have been securely recorded. We will review your project scope and reply to{" "}
                  <span className="font-bold text-[#1D4ED8] underline decoration-[#1D4ED8]/30 underline-offset-4">
                    {formData.email}
                  </span>{" "}
                  within 24 hours.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-wrap items-center justify-center gap-3 py-2.5 px-4 rounded-2xl bg-[#F8FAFC] border border-[#111111]/10 text-xs font-mono text-[#111111]/70"
              >
                <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <ShieldCheck className="w-4 h-4" /> 256-Bit Encrypted
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-[#1D4ED8] font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> SLA: 24h Response
                </span>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                onClick={resetForm}
                className="mt-1 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111111]/5 hover:bg-[#1D4ED8] hover:text-white text-sm font-bold text-[#111111] transition-all duration-300 cursor-pointer border border-[#111111]/10"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Send Another Inquiry</span>
              </motion.button>
            </motion.div>
          ) : (
            /* EXACT PROJECT REQUIREMENTS FORM */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4 sm:gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#111111]/10">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-[#1D4ED8]" />
                  <h3 className="text-xl font-bold text-[#111111]">
                    Project Requirements
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#1D4ED8] font-bold bg-[#1D4ED8]/10 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-pulse" />
                  <span>• FAST RESPONSE • 24H</span>
                </div>
              </div>

              {/* Honeypot */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  top: "-9999px",
                  opacity: 0,
                  pointerEvents: "none",
                }}
              >
                <label htmlFor="hero-botField">Leave blank</label>
                <input
                  type="text"
                  id="hero-botField"
                  name="botField"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.botField}
                  onChange={handleChange}
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <motion.div
                  animate={
                    shakeField === "name"
                      ? { x: [-8, 8, -6, 6, -3, 3, 0] }
                      : { x: 0 }
                  }
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="hero-contact-name"
                      className="text-xs font-mono uppercase text-[#1D4ED8] font-bold flex items-center gap-1"
                    >
                      <User className="w-3.5 h-3.5" />
                      <span>YOUR NAME *</span>
                    </label>
                    {touched.name && !errors.name && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" /> Valid
                      </motion.span>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      id="hero-contact-name"
                      name="name"
                      type="text"
                      required
                      maxLength={60}
                      placeholder="Alex Vance"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur("name")}
                      disabled={isSubmitting}
                      className={`w-full bg-[#FFFFFF] rounded-xl px-4 py-2.5 text-sm text-[#111111] placeholder-[#111111]/35 font-medium transition-all duration-200 border outline-none ${
                        touched.name && errors.name
                          ? "border-rose-500 ring-2 ring-rose-500/15 bg-rose-50/10"
                          : touched.name && !errors.name
                          ? "border-emerald-500 ring-2 ring-emerald-500/10"
                          : "border-[#111111]/15 focus:border-[#1D4ED8] focus:ring-3 focus:ring-[#1D4ED8]/10"
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {touched.name && errors.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -4 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -4 }}
                        className="flex items-center gap-1.5 text-xs text-rose-600 font-semibold pt-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  animate={
                    shakeField === "email"
                      ? { x: [-8, 8, -6, 6, -3, 3, 0] }
                      : { x: 0 }
                  }
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="hero-contact-email"
                      className="text-xs font-mono uppercase text-[#1D4ED8] font-bold flex items-center gap-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>EMAIL ADDRESS *</span>
                    </label>
                    {touched.email && !errors.email && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" /> Valid
                      </motion.span>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      id="hero-contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={100}
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      disabled={isSubmitting}
                      className={`w-full bg-[#FFFFFF] rounded-xl px-4 py-2.5 text-sm text-[#111111] placeholder-[#111111]/35 font-medium transition-all duration-200 border outline-none ${
                        touched.email && errors.email
                          ? "border-rose-500 ring-2 ring-rose-500/15 bg-rose-50/10"
                          : touched.email && !errors.email
                          ? "border-emerald-500 ring-2 ring-emerald-500/10"
                          : "border-[#111111]/15 focus:border-[#1D4ED8] focus:ring-3 focus:ring-[#1D4ED8]/10"
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {touched.email && errors.email && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -4 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -4 }}
                        className="flex items-center gap-1.5 text-xs text-rose-600 font-semibold pt-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Mobile Number Field */}
              <motion.div
                animate={
                  shakeField === "phone"
                    ? { x: [-8, 8, -6, 6, -3, 3, 0] }
                    : { x: 0 }
                }
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="hero-contact-phone"
                    className="text-xs font-mono uppercase text-[#1D4ED8] font-bold flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>MOBILE NUMBER *</span>
                  </label>
                  {touched.phone && !errors.phone && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600"
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" /> Valid
                    </motion.span>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="hero-contact-phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={20}
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                    disabled={isSubmitting}
                    className={`w-full bg-[#FFFFFF] rounded-xl px-4 py-2.5 text-sm text-[#111111] placeholder-[#111111]/35 font-medium transition-all duration-200 border outline-none ${
                      touched.phone && errors.phone
                        ? "border-rose-500 ring-2 ring-rose-500/15 bg-rose-50/10"
                        : touched.phone && !errors.phone
                        ? "border-emerald-500 ring-2 ring-emerald-500/10"
                        : "border-[#111111]/15 focus:border-[#1D4ED8] focus:ring-3 focus:ring-[#1D4ED8]/10"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {touched.phone && errors.phone && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -4 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -4 }}
                      className="flex items-center gap-1.5 text-xs text-rose-600 font-semibold pt-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message Field */}
              <motion.div
                animate={
                  shakeField === "message"
                    ? { x: [-8, 8, -6, 6, -3, 3, 0] }
                    : { x: 0 }
                }
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="hero-contact-message"
                    className="text-xs font-mono uppercase text-[#1D4ED8] font-bold"
                  >
                    PROJECT OVERVIEW &amp; TECHNICAL REQUIREMENTS *
                  </label>
                  <span
                    className={`text-[11px] font-mono font-medium transition-colors ${
                      formData.message.length > maxMessageLength - 50
                        ? "text-rose-600 font-bold"
                        : formData.message.length >= minMessageLength
                        ? "text-emerald-600 font-bold"
                        : "text-[#111111]/50"
                    }`}
                  >
                    {formData.message.length}/{maxMessageLength}
                  </span>
                </div>

                <div className="relative">
                  <textarea
                    id="hero-contact-message"
                    name="message"
                    required
                    rows={3}
                    maxLength={maxMessageLength}
                    placeholder="Tell me about your product vision, tech stack requirements, timeline, and key goals..."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    disabled={isSubmitting}
                    className={`w-full bg-[#FFFFFF] rounded-xl p-3 text-sm text-[#111111] placeholder-[#111111]/35 resize-none font-medium transition-all duration-200 border outline-none ${
                      touched.message && errors.message
                        ? "border-rose-500 ring-2 ring-rose-500/15 bg-rose-50/10"
                        : touched.message && !errors.message && formData.message.length >= minMessageLength
                        ? "border-emerald-500 ring-2 ring-emerald-500/10"
                        : "border-[#111111]/15 focus:border-[#1D4ED8] focus:ring-3 focus:ring-[#1D4ED8]/10"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {touched.message && errors.message && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -4 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -4 }}
                      className="flex items-center gap-1.5 text-xs text-rose-600 font-semibold pt-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Error message */}
              <AnimatePresence>
                {rateLimitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{rateLimitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button Row */}
              <div className="flex items-center justify-end pt-1">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  style={{
                    background: "linear-gradient(90deg, #091E42 0%, #0C2B6E 50%, #1D4ED8 100%)",
                    color: "#FFFFFF",
                    boxShadow: "0 8px 22px rgba(9,30,66,0.28)",
                  }}
                  className="hero-submit-btn w-full sm:w-auto min-w-[220px] !flex items-center justify-center gap-2.5 !text-white px-8 py-3.5 rounded-[14px] text-[15px] font-bold cursor-pointer border border-white/10 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="!w-4 !h-4 animate-spin !text-white" style={{ width: "16px", height: "16px", color: "#FFFFFF" }} />
                      <span className="!text-white font-bold" style={{ color: "#FFFFFF" }}>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="!text-white font-bold" style={{ color: "#FFFFFF" }}>Send Project Details</span>
                      <Send className="!w-4 !h-4 stroke-[2.3] !text-white" style={{ width: "16px", height: "16px", color: "#FFFFFF", stroke: "#FFFFFF" }} />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
