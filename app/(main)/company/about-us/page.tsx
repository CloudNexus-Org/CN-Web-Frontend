"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Globe, Users, Target, Award, ShieldCheck, Rocket,
  BrainCircuit, Building2, Handshake, Code2, HeartHandshake,
  Lightbulb, Shield, CheckCircle2, MapPin, Phone,
  Cpu, Eye, Star, Clock, Mail,
} from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import { useTranslation } from "@/lib/i18n/context";

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

const highlights = [
  { icon: Clock, title: "Established 19 Jan 2025", desc: "Founded on 19th January 2025, delivering cutting-edge IT solutions from day one.", color: "#4EB3E8" },
  { icon: MapPin, title: "Located in India", desc: "Headquartered in India with offices in Hyderabad, Bhopal & Bengaluru.", color: "#10b981" },
  { icon: ShieldCheck, title: "Quality Driven", desc: "Delivering enterprise-grade, secure, and scalable software solutions.", color: "#8b5cf6" },
  { icon: Rocket, title: "100+ Projects", desc: "Successfully delivered across 15+ industries worldwide.", color: "#f59e0b" },
  { icon: Target, title: "Startup & Enterprise", desc: "Tailored support for startups, SMEs, and enterprise clients.", color: "#ef4444" },
  { icon: Award, title: "Award-Winning Team", desc: "Building robust, scalable, and innovative digital products.", color: "#06b6d4" },
];

const aboutStats = [
  { value: 10, suffix: "+", label: "Years in the Market" },
  { value: 200, suffix: "+", label: "In-house Engineers" },
  { value: 20, suffix: "+", label: "Senior-level Developers" },
  { value: 100, suffix: "+", label: "Successful Projects" },
];

const values = [
  { icon: Star, title: "Excellence in Work", desc: "We empower businesses and elevate customer experiences through our commitment to delivering outstanding results in every project. Every line of code, every design decision, and every interaction reflects our pursuit of excellence.", color: "#4EB3E8" },
  { icon: Users, title: "Respect Individuality", desc: "We respect individual values and support leading changes to reinvent and emerge powerful. Our culture celebrates diverse perspectives, encouraging every team member to bring their unique strengths to the table.", color: "#10b981" },
  { icon: ShieldCheck, title: "Integrity", desc: "Driven by integrity, we honor and uphold valuable contributions, building lasting associations based on trust and transparency. We do what we say and say what we do  -  no exceptions.", color: "#f59e0b" },
  { icon: Lightbulb, title: "Progressive Learning", desc: "We inspire, innovate, and evolve individual curiosity to fuel expected achievements. Continuous learning is embedded in our DNA  -  from internal tech talks to sponsored certifications and conference attendance.", color: "#8b5cf6" },
];

const workforce = [
  { pct: 10, label: "Sales & Marketing", color: "#4EB3E8" },
  { pct: 10, label: "Business Analytics", color: "#10b981" },
  { pct: 20, label: "Design & Strategy", color: "#f59e0b" },
  { pct: 40, label: "Development", color: "#8b5cf6" },
  { pct: 10, label: "Testing & QA", color: "#ef4444" },
  { pct: 10, label: "Maintenance", color: "#06b6d4" },
];

const reasons = [
  { icon: HeartHandshake, title: "Unmatched Customer Service", desc: "Personalized attention, continuous communication, immediate action, and definitive follow-through. We listen and we deliver." },
  { icon: BrainCircuit, title: "Helpful Experts", desc: "Big ideas need big talents  -  we only hire the best and invest substantially in their continued education." },
  { icon: Award, title: "Exceptional Quality", desc: "We take pride in our ability to supply excellent technological solutions, tailored and delivered on time." },
  { icon: Cpu, title: "Technology & Best Practices", desc: "We continually identify, test, and deploy new technologies to make a positive impact on our customers' business." },
  { icon: Eye, title: "Independent & Objective", desc: "Technology-agnostic and vendor neutral. Our experts provide sound and independent strategic advice." },
  { icon: Globe, title: "Global Delivery", desc: "Seamless delivery across time zones with teams strategically located across India for 24/7 support." },
];

const offices = [
  { city: "Hyderabad", state: "Telangana", address: "Hitech City, Hyderabad, Telangana, India", phone: "+91 9201004208", type: "Development Center" },
  { city: "Bhopal", state: "Madhya Pradesh", address: "Plot No 20, Kusturi Arched, Barrai, Bhopal, MP 462042", phone: "+91 9201004208", type: "Headquarters" },
  { city: "Bengaluru", state: "Karnataka", address: "2nd Stage, BTM Layout, Bengaluru, Karnataka 560076", phone: "+91 9201004208", type: "Technology Hub" },
];

function DonutChart({ workforce: wf }: { workforce: typeof workforce }) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState<number | null>(null);
  const total = wf.reduce((s, w) => s + w.pct, 0);
  let cumulative = 0;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;

  return (
    <div ref={ref} className="flex flex-col items-center gap-8">
      <div className="relative w-[280px] h-[280px] rounded-full bg-white/50 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] p-2.5">
        <div className="relative w-full h-full">
          <svg viewBox="0 0 240 240" className="w-full h-full -rotate-90">
            {wf.map((w, i) => {
              const offset = (cumulative / total) * circumference;
              const length = (w.pct / total) * circumference;
              cumulative += w.pct;
              return (
                <motion.circle key={i} cx="120" cy="120" r={radius} fill="none" stroke={w.color}
                  strokeWidth={hovered === i ? 28 : 22}
                  strokeDasharray={`${length} ${circumference - length}`}
                  strokeDashoffset={-offset} strokeLinecap="round"
                  className="transition-all duration-300 cursor-pointer"
                  style={{ opacity: hovered !== null && hovered !== i ? 0.25 : 1 }}
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  animate={inView ? { strokeDasharray: `${length} ${circumference - length}` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {hovered !== null ? (
                <motion.div key={hovered} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="text-center">
                  <div className="text-3xl font-black" style={{ color: wf[hovered].color }}>{wf[hovered].pct}%</div>
                  <div className="text-[10px] font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider mt-0.5">{wf[hovered].label}</div>
                </motion.div>
              ) : (
                <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                  <div className="text-2xl font-black text-[#4EB3E8]">90+</div>
                  <div className="text-[10px] font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider mt-0.5">{t("aboutUs.workforce.teamMembers", "Team Members")}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full max-w-xs">
        {wf.map((w, i) => (
          <button key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-200 ${hovered === i ? "bg-black/[0.05] dark:bg-white/[0.06] scale-105" : "hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"}`}
          >
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: w.color }} />
            <span className="text-[10px] font-semibold text-black/55 dark:text-white/45 truncate">{w.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function AboutUsPage() {
  const [activeValue, setActiveValue] = useState(0);
  const translatedHighlights = useTranslatedData(highlights);
  const translatedAboutStats = useTranslatedData(aboutStats);
  const translatedValues = useTranslatedData(values);
  const translatedWorkforce = useTranslatedData(workforce);
  const translatedReasons = useTranslatedData(reasons);
  const translatedOffices = useTranslatedData(offices);
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white">

      {/* ═══════ HERO ═══════ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#4EB3E8] rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1]">
                {t("aboutUs.hero.title1", "Enriching Lives")}<br />{t("aboutUs.hero.title2", "Through Our ")}{" "}
                <span className="text-[#4EB3E8]">{t("aboutUs.hero.titleHighlight", "Tech-Innovations")}</span>
              </h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-xl">
                {t("aboutUs.hero.description", "We are delivering exceptional digital experiences with our boldest ideas that make the world better for everyone.")}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }} className="mt-8 flex flex-wrap gap-3">
                <Link href="/resources/free-consultation"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-semibold transition-all shadow-lg">
                  {t("aboutUs.hero.getStarted", "Get Started")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all">
                  {t("aboutUs.hero.contactUs", "Contact Us")}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-black/[0.06] dark:border-white/[0.06] shadow-2xl shadow-[#4EB3E8]/[0.08]">
                  <Image src="/assets/images/about-hero-v2.jpg" alt={t("aboutUs.hero.altTeam", "Cloud Nexus team innovating")} fill className="object-cover" sizes="(max-width: 1024px) 0vw, 450px" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 flex-wrap">
                      {[
                        { key: "aboutUs.hero.chipAIML", fallback: "AI/ML" },
                        { key: "aboutUs.hero.chipCloud", fallback: "Cloud" },
                        { key: "aboutUs.hero.chipWeb", fallback: "Web" },
                        { key: "aboutUs.hero.chipMobile", fallback: "Mobile" },
                        { key: "aboutUs.hero.chipDevOps", fallback: "DevOps" },
                        { key: "aboutUs.hero.chipData", fallback: "Data" },
                      ].map((tag) => (
                        <span key={tag.key} className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-semibold text-white border border-white/20">{t(tag.key, tag.fallback)}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl bg-[#4EB3E8]/10 dark:bg-[#4EB3E8]/15 border border-[#4EB3E8]/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Rocket className="w-6 h-6 text-[#4EB3E8]" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <BrainCircuit className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════ PARTNER INTRO ═══════ */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("aboutUs.partner.title1", "Your End-To-End")}{" "}
              <span className="text-[#4EB3E8]">{t("aboutUs.partner.titleHighlight", "AI-Driven Software Development")}</span>
              <br className="hidden md:block" />
              {" "}{t("aboutUs.partner.title2", "and Digital Transformation Partner")}
            </h2>
            <p className="mt-4 text-base text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
              {t("aboutUs.partner.description", "Embrace our partnership to experience the power of collective knowledge and a tech-driven skillset that promises the best work infused with advanced technologies.")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {translatedHighlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.06 * i }}
                  className="group rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 dark:hover:border-[#4EB3E8]/25 hover:shadow-xl hover:shadow-[#4EB3E8]/[0.04] transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 transition-all duration-300 flex-shrink-0"
                      style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}25` }}>
                      <Icon className="w-5 h-5 transition-colors duration-300" style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold tracking-tight mb-1 group-hover:text-[#4EB3E8] transition-colors duration-300">{item.title}</h3>
                      <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ ABOUT CLOUDNEXUS + IMAGE ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {t("aboutUs.about.title", "About")} <span className="text-[#4EB3E8]">{t("aboutUs.about.titleHighlight", "CloudNexus")}</span>
            </h2>
            <p className="text-base text-black/60 dark:text-white/55 leading-relaxed mb-4">
              {t("aboutUs.about.description1", "At CloudNexus, we are more than just an IT consulting company  -  we are innovators, problem-solvers, and architects of the digital future. We specialize in progressive IT solutions, cloud transformation, AI-driven automation, and enterprise consulting.")}
            </p>
            <p className="text-base text-black/60 dark:text-white/55 leading-relaxed mb-8">
              {t("aboutUs.about.description2", "Together with our partnership and industry experience, we are creating a robust ecosystem to bring huge business transformations  -  enhancing efficiency, driving growth, and future-proofing operations.")}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {translatedAboutStats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + 0.08 * i }}
                  className="group rounded-xl p-4 bg-[#fafafa] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 dark:hover:border-[#4EB3E8]/25 transition-all duration-300">
                  <div className="text-2xl font-black text-[#4EB3E8]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-black/[0.06] dark:border-white/[0.06]">
              <img src="/images/stock/stock-53f4689e75.jpg" alt={t("aboutUs.about.altTeam", "Team collaborating on innovative solutions")} className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2">
                {[
                  { icon: Rocket, label: t("aboutUs.about.overlayCloud", "Cloud Transformation") },
                  { icon: BrainCircuit, label: t("aboutUs.about.overlayAI", "AI & Automation") },
                  { icon: Code2, label: t("aboutUs.about.overlayEngineering", "Software Engineering") },
                  { icon: Shield, label: t("aboutUs.about.overlayCyber", "Cybersecurity") },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                    <Icon className="w-4 h-4 text-[#4EB3E8] flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[11px] font-semibold text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl border-2 border-[#4EB3E8]/15 dark:border-[#4EB3E8]/10 -z-10" />
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-2xl border-2 border-[#4EB3E8]/10 dark:border-[#4EB3E8]/8 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* ═══════ OUR VALUES ═══════ */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight"><span className="text-[#4EB3E8]">{t("aboutUs.values.titleHighlight", "Our")}</span> {t("aboutUs.values.title", "Values")}</h2>
            <p className="mt-4 text-base text-black/50 dark:text-white/50 max-w-xl mx-auto">
              {t("aboutUs.values.description", "Our core values are defined by our individual characters through their work patterns and business decisions.")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-2">
              {translatedValues.map((v, i) => {
                const Icon = v.icon;
                const isActive = activeValue === i;
                return (
                  <motion.button key={v.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.08 * i }}
                    onClick={() => setActiveValue(i)}
                    className={`w-full text-left flex items-center gap-4 p-5 rounded-xl transition-all duration-300 ${
                      isActive ? "bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] shadow-lg shadow-black/[0.03] dark:shadow-black/30"
                        : "bg-transparent hover:bg-white/60 dark:hover:bg-white/[0.02] border border-transparent"
                    }`}>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 flex-shrink-0 ${
                      isActive ? "border-2" : "bg-black/[0.04] dark:bg-white/[0.04] border border-transparent"
                    }`} style={isActive ? { backgroundColor: `${v.color}12`, borderColor: `${v.color}35` } : {}}>
                      <Icon className="w-5 h-5 transition-colors duration-300" style={{ color: isActive ? v.color : undefined }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold tracking-tight transition-colors duration-300 ${isActive ? "" : "text-black/50 dark:text-white/45"}`}
                        style={isActive ? { color: v.color } : {}}>{v.title}</h3>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div key={activeValue} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
                  className="rounded-2xl p-8 md:p-10 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden shadow-sm dark:shadow-none">
                  <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ backgroundColor: translatedValues[activeValue].color }} />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2"
                      style={{ backgroundColor: `${translatedValues[activeValue].color}10`, borderColor: `${translatedValues[activeValue].color}20` }}>
                      {(() => { const Icon = translatedValues[activeValue].icon; return <Icon className="w-8 h-8" style={{ color: translatedValues[activeValue].color }} strokeWidth={1.5} />; })()}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{translatedValues[activeValue].title}</h3>
                  </div>

                  <p className="text-base text-black/60 dark:text-white/55 leading-relaxed mb-6">{translatedValues[activeValue].desc}</p>

                  <div className="flex items-center gap-2">
                    {translatedValues.map((_, idx) => (
                      <button key={idx} onClick={() => setActiveValue(idx)} className="h-1.5 rounded-full transition-all duration-300"
                        style={{ width: idx === activeValue ? 32 : 6, backgroundColor: idx === activeValue ? translatedValues[activeValue].color : "rgba(128,128,128,0.2)" }} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ WORKFORCE ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t("aboutUs.workforce.title1", "Our")} <span className="text-[#4EB3E8]">{t("aboutUs.workforce.titleHighlight", "Visionaries")}</span> {t("aboutUs.workforce.title2", "Help in")}
              <br className="hidden md:block" /> {t("aboutUs.workforce.title3", "Accelerating the Process")}
            </h2>
            <p className="text-base text-black/55 dark:text-white/50 leading-relaxed mb-6">
              {t("aboutUs.workforce.description", "With our enthusiast workforce and seasoned engineers, we create excellent solutions at a rushed pace to serve businesses across the world.")}
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { val: "200+", label: t("aboutUs.workforce.statTeam", "Team Members"), color: "#4EB3E8" },
                { val: "15+", label: t("aboutUs.workforce.statIndustries", "Industries"), color: "#10b981" },
                { val: "24/7", label: t("aboutUs.workforce.statSupport", "Support"), color: "#8b5cf6" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#fafafa] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]">
                  <span className="text-lg font-bold" style={{ color: s.color }}>{s.val}</span>
                  <span className="text-xs text-black/45 dark:text-white/40 font-semibold">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <DonutChart workforce={translatedWorkforce} />
          </motion.div>
        </div>
      </div>

      {/* ═══════ COMPELLING REASONS ═══════ */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("aboutUs.reasons.title", "Compelling Reasons To")} <span className="text-[#4EB3E8]">{t("aboutUs.reasons.titleHighlight", "Partner with Us")}</span>
            </h2>
            <p className="mt-4 text-base text-black/50 dark:text-white/50 max-w-2xl mx-auto">
              {t("aboutUs.reasons.description", "We achieve the highest level of market attention with our excellent work commitment in an ever-changing world.")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] border border-black/[0.06] dark:border-white/[0.06]">
                <img src="/images/stock/stock-72d9fb781c.jpg" alt={t("aboutUs.reasons.altTeam", "Professional team delivering IT solutions")} className="w-full h-full object-cover absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2.5">
                  {[
                    { num: "100+", label: t("aboutUs.reasons.statProjects", "Projects Delivered") },
                    { num: "98%", label: t("aboutUs.reasons.statSatisfaction", "Client Satisfaction") },
                    { num: "24/7", label: t("aboutUs.reasons.statSupport", "Support Available") },
                  ].map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + 0.1 * i }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                      <span className="text-lg font-bold text-[#4EB3E8]">{s.num}</span>
                      <span className="text-sm text-white/75">{s.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {translatedReasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.06 * i }}
                    className="group relative rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 dark:hover:border-[#4EB3E8]/25 hover:shadow-xl hover:shadow-[#4EB3E8]/[0.04] transition-all duration-300 overflow-hidden hover:-translate-y-1">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#4EB3E8] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#4EB3E8]/8 dark:bg-[#4EB3E8]/10 border border-[#4EB3E8]/12 dark:border-[#4EB3E8]/15 group-hover:bg-[#4EB3E8] group-hover:border-[#4EB3E8] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#4EB3E8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-bold tracking-tight mb-1.5 group-hover:text-[#4EB3E8] transition-colors duration-300">{r.title}</h3>
                    <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed">{r.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ OFFICE LOCATIONS ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight"><span className="text-[#4EB3E8]">{t("aboutUs.offices.titleHighlight", "Our")}</span> {t("aboutUs.offices.title", "Offices")}</h2>
          <p className="mt-4 text-base text-black/50 dark:text-white/50 max-w-xl mx-auto">
            {t("aboutUs.offices.description", "Strategically located across India  -  delivering world-class IT solutions from our development centers.")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {translatedOffices.map((o, i) => (
            <motion.div key={o.city} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
              className="group rounded-2xl bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 dark:hover:border-[#4EB3E8]/25 hover:shadow-xl hover:shadow-[#4EB3E8]/[0.04] transition-all duration-300 overflow-hidden hover:-translate-y-1">
              <div className="h-1 bg-gradient-to-r from-[#4EB3E8] to-[#4EB3E8]/50" />
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4EB3E8]/8 dark:bg-[#4EB3E8]/10 border border-[#4EB3E8]/12 dark:border-[#4EB3E8]/15 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{o.city}</h3>
                      <p className="text-[11px] text-black/35 dark:text-white/30 font-medium">{o.state}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#4EB3E8]/8 dark:bg-[#4EB3E8]/10 text-[#4EB3E8] border border-[#4EB3E8]/12">{o.type}</span>
                </div>
                <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed mb-3">{o.address}</p>
                <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-xs text-[#4EB3E8] font-semibold hover:underline">
                  <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />{o.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════ CTA ═══════ */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#4EB3E8]/[0.03] to-purple-500/[0.03] dark:from-[#4EB3E8]/[0.05] dark:to-purple-500/[0.05] p-10 sm:p-14 text-center">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(78,179,232,0.04) 0%, transparent 70%)" }} />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("aboutUs.cta.title1", "Ready to Build Something")}<br className="hidden sm:block" />
                <span className="text-[#4EB3E8]"> {t("aboutUs.cta.titleHighlight", "Extraordinary?")}</span>
              </h2>

              <p className="text-base text-black/55 dark:text-white/50 max-w-lg mx-auto leading-relaxed mb-8">
                {t("aboutUs.cta.description", "Whether you're a startup building your MVP or an enterprise modernizing your stack  -  we're here to help you turn ambitious ideas into reality.")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 font-semibold text-sm transition-all duration-300 shadow-lg">
                  {t("aboutUs.cta.bookConsultation", "Book Free Consultation")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors">
                  <Mail className="w-4 h-4" /> {t("aboutUs.cta.contactUs", "Contact Us")}
                </Link>
              </div>

              <p className="mt-5 text-xs text-black/30 dark:text-white/25">work@cloudnexus.in &middot; +91 9201004208</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
