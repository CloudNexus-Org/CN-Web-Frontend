"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Clock, Shield, Target, Rocket, MessageSquare, Phone, Mail,
  ChevronRight, CalendarCheck, FileSearch, Handshake, BarChart3,
  Zap, Globe, Award, BrainCircuit, Layers, Code2, Sparkles,
} from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import { useTranslation } from "@/lib/i18n/context";

const CALENDLY_URL = "https://calendly.com/ritika-pankar-cloudnexus/30min";

// function CalendlyEmbed() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.head.appendChild(script);
//     return () => { script.remove(); };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="calendly-inline-widget rounded-2xl overflow-hidden"
//       data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=4EB3E8`}
//       style={{ width: "100%", minWidth: 400, height: 600 }}
//     />
//   );
// }
function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{
        width: "100%",
        minWidth: "600px",
        height: "700px",
      }}
    />
  );
}
// function CalendlyEmbedLight() {
//   useEffect(() => {
//     const script = document.createElement("script");

//     script.src =
//       "https://assets.calendly.com/assets/external/widget.js";

//     script.async = true;

//     document.head.appendChild(script);

//     return () => {
//       script.remove();
//     };
//   }, []);

//   return (
//     <div
//       className="calendly-inline-widget"
//       data-url={`${CALENDLY_URL}`}
//       style={{
//         width: "100%",
//         minWidth: "400px",
//         height: "600px",
//       }}
//     />
//   );
// }

/* ═══════ ANIMATED COUNTER ═══════ */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const dur = 1500;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

/* ═══════ DATA ═══════ */
const benefits = [
  { icon: BrainCircuit, title: "Expert Strategy Session", desc: "30-minute focused discussion with a senior solutions architect who'll analyze your requirements and suggest the optimal technology stack." },
  { icon: Target, title: "Custom Project Roadmap", desc: "Receive a tailored roadmap with milestones, timelines, and budget estimates  -  specific to your business goals and scale." },
  { icon: Shield, title: "NDA Protected", desc: "Your ideas are safe with us. We sign a mutual NDA before every consultation to ensure complete confidentiality." },
  { icon: Rocket, title: "Zero Obligation", desc: "No strings attached, no hidden fees. Get actionable insights you can use  -  whether or not you choose to work with us." },
];

const processSteps = [
  { icon: CalendarCheck, title: "Book a Slot", desc: "Fill the form and choose a convenient time. You'll receive an instant calendar invite." },
  { icon: FileSearch, title: "Requirement Analysis", desc: "Our team reviews your submission and prepares relevant case studies and recommendations." },
  { icon: MessageSquare, title: "Strategy Call", desc: "30-minute call with a senior architect to discuss your vision, challenges, and solutions." },
  { icon: Handshake, title: "Proposal & Next Steps", desc: "Receive a detailed proposal with scope, timeline, team composition, and transparent pricing." },
];

const consultationTypes = [
  { icon: Code2, title: "Software Development", desc: "Web, mobile, and enterprise application consulting" },
  { icon: BrainCircuit, title: "AI & Machine Learning", desc: "AI strategy, model selection, and implementation roadmap" },
  { icon: Layers, title: "Cloud & Infrastructure", desc: "Cloud migration, architecture review, and DevOps strategy" },
  { icon: BarChart3, title: "Digital Transformation", desc: "End-to-end digital strategy and technology modernization" },
  { icon: Sparkles, title: "UI/UX Audit", desc: "Design review, usability analysis, and improvement plan" },
  { icon: Globe, title: "E-Commerce Solutions", desc: "Platform selection, optimization, and growth strategy" },
];

const stats = [
  { value: 500, suffix: "+", label: "Consultations Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 90, suffix: "+", label: "Scalable Teams" },
  { value: 10, suffix: "+", label: "Global Clients" },
];

/* ═══════ PAGE ═══════ */
export default function FreeConsultationPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const translatedBenefits = useTranslatedData(benefits);
  const translatedProcessSteps = useTranslatedData(processSteps);
  const translatedConsultationTypes = useTranslatedData(consultationTypes);
  const translatedStats = useTranslatedData(stats);
  const { t } = useTranslation();

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* ═══════ HERO ═══════ */}
 <div className="relative mx-auto max-w-7xl px-6 py-10">
  <div className="flex justify-center">
    <motion.div
      className="
      w-full
      max-w-6xl
      rounded-2xl
      overflow-hidden
      "
    >
      <CalendlyEmbed />
    </motion.div>
  </div>
</div>

      {/* ═══════ STATS ═══════ */}
      <div className="border-y border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {translatedStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black tracking-tight text-[#4EB3E8]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] font-semibold text-black/40 dark:text-white/35 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ WHAT YOU GET ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">{t("freeConsult.whatYouGet.title", "What You'll")}</span>{" "}
            <span>{t("freeConsult.whatYouGet.titleHighlight", "Walk Away With")}</span>
          </h2>
          <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-xl mx-auto">
            {t("freeConsult.whatYouGet.description", "Every consultation is designed to deliver tangible, actionable value.")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {translatedBenefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group rounded-2xl p-6 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-400"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8]/15 group-hover:border-[#4EB3E8]/25 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold tracking-tight mb-2 group-hover:text-[#4EB3E8] transition-colors duration-300">{b.title}</h3>
                <p className="text-sm text-black/45 dark:text-white/40 leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════ CONSULTATION TYPES ═══════ */}
      <div className="border-y border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-[#4EB3E8]">{t("freeConsult.areas.title", "Consultation")}</span>{" "}
              <span>{t("freeConsult.areas.titleHighlight", "Areas")}</span>
            </h2>
            <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-xl mx-auto">
              {t("freeConsult.areas.description", "We offer expert guidance across every area of digital product development.")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {translatedConsultationTypes.map((ct, i) => {
              const Icon = ct.icon;
              return (
                <motion.div
                  key={ct.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:bg-white dark:hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8]/15 transition-all duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight mb-1 group-hover:text-[#4EB3E8] transition-colors duration-300">{ct.title}</h3>
                    <p className="text-xs text-black/40 dark:text-white/35 leading-relaxed">{ct.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ PROCESS ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">{t("freeConsult.process.title", "How It")}</span>{" "}
            <span>{t("freeConsult.process.titleHighlight", "Works")}</span>
          </h2>
          <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-xl mx-auto">
            {t("freeConsult.process.description", "Four simple steps from booking to receiving your custom proposal.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {translatedProcessSteps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                onClick={() => setActiveStep(i)}
                className={`group relative rounded-2xl p-6 cursor-pointer transition-all duration-400 hover:-translate-y-1 ${
                  isActive
                    ? "bg-white dark:bg-[#0c1322] border-[#4EB3E8]/25 shadow-lg shadow-[#4EB3E8]/[0.06]"
                    : "bg-[#f8f9fa] dark:bg-white/[0.02] border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/15"
                } border`}
              >
                {/* Step number */}
                <div className="absolute top-4 right-4 text-[40px] font-black leading-none text-black/[0.03] dark:text-white/[0.03]">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Connecting line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 -right-3 w-6 z-10">
                    <ChevronRight className="w-5 h-5 text-[#4EB3E8]/25" />
                  </div>
                )}

                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#4EB3E8]/15 border-[#4EB3E8]/30"
                    : "bg-[#4EB3E8]/8 border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8]/12"
                } border`}>
                  <Icon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                </div>

                <h3 className={`text-base font-bold tracking-tight mb-2 transition-colors duration-300 ${isActive ? "text-[#4EB3E8]" : "group-hover:text-[#4EB3E8]"}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-black/45 dark:text-white/40 leading-relaxed">{step.desc}</p>

                {isActive && (
                  <motion.div
                    layoutId="process-indicator"
                    className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#4EB3E8] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════ CTA ═══════ */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="relative rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(78,179,232,0.04) 0%, transparent 70%)" }} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-[#4EB3E8]/10">
                <Rocket className="w-6 h-6 text-[#4EB3E8]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t("freeConsult.cta.title", "Ready to Get Started?")}
                <br />
                <span className="text-[#4EB3E8]">{t("freeConsult.cta.titleHighlight", "Let's Talk Today")}</span>
              </h2>

              <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">
                {t("freeConsult.cta.description", "Join 500+ companies who've accelerated their growth with our expert guidance.")}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
                >
                  {t("freeConsult.cta.bookConsultation", "Book Free Consultation")} <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-center justify-center gap-4">
                  <a href="mailto:work@cloudnexus.in" className="flex items-center gap-2 text-sm font-semibold text-black/50 dark:text-white/45 hover:text-[#4EB3E8] transition-colors">
                    <Mail className="w-4 h-4" /> {t("freeConsult.cta.emailUs", "Email Us")}
                  </a>
                  <span className="text-black/15 dark:text-white/15">|</span>
                  <a href="tel:+918793830447" className="flex items-center gap-2 text-sm font-semibold text-black/50 dark:text-white/45 hover:text-[#4EB3E8] transition-colors">
                    <Phone className="w-4 h-4" /> {t("freeConsult.cta.callUs", "Call Us")}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
