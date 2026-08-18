"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Building2, MapPin, Users, Monitor,
  Wifi, Shield, Zap, CalendarCheck, Mail,
  Cpu, Layers, Coffee, TreePine, Dumbbell,
  ParkingCircle, UtensilsCrossed, Gamepad2,
  CheckCircle2,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";

const officePhotos = [
  "/images/infrastucture-images/team-photo.png",
  "/images/infrastucture-images/office-cabin.png",
  "/images/infrastucture-images/media-1.jpeg",
  "/images/infrastucture-images/media-2.jpeg",
  "/images/infrastucture-images/media-3.jpeg",
  "/images/infrastucture-images/media-4.jpeg",
  "/images/infrastucture-images/media-5.jpeg",
  "/images/infrastucture-images/media-6.jpeg",
  "/images/infrastucture-images/media-7.jpeg",
  "/images/infrastucture-images/media-9.jpeg",
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let n = 0;
        const step = Math.max(1, Math.floor(value / 35));
        const id = setInterval(() => {
          n = Math.min(n + step, value);
          el.textContent = `${n}${suffix}`;
          if (n >= value) clearInterval(id);
        }, 25);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const officesData = [
  {
    id: "india",
    label: "INDIA Office",
    flag: "🇮🇳",
    city: "Bhopal, Madhya Pradesh",
    address: "Cloud Nexus Technologies, Bhopal, Madhya Pradesh, India",
    description:
      "Situated in the heart of Bhopal, our India headquarters is a thoughtfully designed technology center built for innovation and collaboration. Spread across a modern workspace, it houses our core engineering, design, and delivery teams in an environment that inspires creativity and high-performance output.",
    highlights: [
      "Modern open-plan workspace designed for collaboration",
      "High-speed enterprise-grade internet connectivity",
      "Dedicated meeting rooms and conference facilities",
      "24/7 power backup with UPS systems",
      "CCTV surveillance and biometric access control",
      "Cafeteria and recreational zones for team wellbeing",
    ],
    stats: [
      { value: 200, suffix: "+", label: "Team Members" },
      { value: 5000, suffix: " sq ft", label: "Office Space" },
      { value: 24, suffix: "/7", label: "Operations" },
    ],
  },
];

const facilityFeaturesData = [
  {
    icon: Monitor,
    title: "High-Performance Workstations",
    desc: "Every team member works on powerful machines with fast processors, ample RAM, and high-resolution displays for maximum productivity.",
    color: "#4EB3E8",
  },
  {
    icon: Wifi,
    title: "Enterprise-Grade Connectivity",
    desc: "High-speed fiber internet with redundant connections ensuring uninterrupted work, video calls, and cloud access throughout the day.",
    color: "#8b5cf6",
  },
  {
    icon: Shield,
    title: "Security & Access Control",
    desc: "Biometric entry systems, CCTV surveillance across all zones, visitor management protocols, and secure network infrastructure.",
    color: "#10b981",
  },
  {
    icon: Zap,
    title: "Uninterrupted Power Supply",
    desc: "Enterprise UPS systems with generator backup ensuring zero downtime during power outages - keeping operations running 24/7.",
    color: "#f59e0b",
  },
  {
    icon: Coffee,
    title: "Cafeteria & Pantry",
    desc: "Well-stocked pantry with beverages, snacks, and a dedicated cafeteria space where the team can recharge and connect over meals.",
    color: "#ef4444",
  },
  {
    icon: Gamepad2,
    title: "Recreation & Wellness Zone",
    desc: "Indoor games area, comfortable breakout spaces, and wellness corners designed to keep the team refreshed, motivated, and balanced.",
    color: "#06b6d4",
  },
];

const workspaceHighlightsData = [
  { icon: Building2, title: "Modern Office Space", desc: "Open-plan design with natural lighting, ergonomic furniture, and thoughtful interiors." },
  { icon: Users, title: "Collaboration Zones", desc: "Dedicated brainstorming areas, huddle rooms, and whiteboard walls for team ideation." },
  { icon: TreePine, title: "Green Environment", desc: "Indoor plants, clean air systems, and a refreshing ambiance that boosts productivity." },
  { icon: Cpu, title: "Tech-Enabled Rooms", desc: "Smart meeting rooms with AV equipment, video conferencing, and digital whiteboards." },
  { icon: ParkingCircle, title: "Convenient Parking", desc: "Ample parking space for the team with easy access to the main workspace." },
  { icon: UtensilsCrossed, title: "In-House Cafeteria", desc: "Freshly prepared meals, beverages, and a comfortable dining space for the team." },
  { icon: Dumbbell, title: "Health & Wellness", desc: "Focus on employee wellbeing with recreational activities and wellness initiatives." },
  { icon: Layers, title: "Scalable Setup", desc: "Infrastructure designed to grow with the team - ready to scale as Cloud Nexus expands." },
];

export default function InfrastructurePage() {
  const [activeOffice, setActiveOffice] = useState(0);
  const { t } = useTranslation();

  const offices = useTranslatedData(officesData);
  const facilityFeatures = useTranslatedData(facilityFeaturesData);
  const workspaceHighlights = useTranslatedData(workspaceHighlightsData);

  const office = offices[activeOffice];

  return (
    <section className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white">

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#4EB3E8] rounded-full blur-[150px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.05, 0.02] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-44 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              {t("infra.hero.title", "Cloud Nexus")}{" "}
              <span className="text-[#4EB3E8]">{t("infra.hero.titleHighlight", "Infrastructure")}</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-black/55 dark:text-white/50 leading-relaxed max-w-2xl mx-auto">
              {t("infra.hero.description", "Our thoughtfully designed workspace is built for innovation, collaboration, and high-performance delivery. A modern technology center where world-class software gets built every day.")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/resources/free-consultation"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-semibold transition-all shadow-lg hover:-translate-y-0.5"
              >
                {t("infra.hero.cta", "Get in Touch")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/company/life-at-cloud-nexus"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all hover:-translate-y-0.5"
              >
                {t("infra.hero.ctaSecondary", "Life at Cloud Nexus")}
              </Link>
            </div>
          </motion.div>

          {/* Hero Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-16"
          >
            {office.stats.map((s, i) => (
              <div key={i} className="text-center">
                <span className="block text-3xl md:text-4xl font-black text-[#4EB3E8]">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-xs font-medium text-black/40 dark:text-white/40 mt-1 block tracking-wide uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* OFFICE PHOTO GALLERY — Bento Grid */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("infra.gallery.title", "Inside Our")} <span className="text-[#4EB3E8]">{t("infra.gallery.titleHighlight", "Office")}</span>
          </h2>
          <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t("infra.gallery.description", "A glimpse into where innovation happens every day at Cloud Nexus.")}
          </p>
        </motion.div>

        {/* Row 1 — 2 photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {officePhotos.slice(0, 2).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative h-[280px] md:h-[340px] rounded-2xl overflow-hidden group border border-black/[0.06] dark:border-white/[0.06]"
            >
              <Image src={src} alt={`Cloud Nexus office ${i + 1}`} fill className="object-cover object-center" sizes="(max-width:768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Row 2 — 3 photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {officePhotos.slice(2, 5).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 2) * 0.1 }}
              className="relative h-[240px] rounded-2xl overflow-hidden group border border-black/[0.06] dark:border-white/[0.06]"
            >
              <Image src={src} alt={`Cloud Nexus office ${i + 3}`} fill className="object-cover object-center" sizes="(max-width:640px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Row 3 — 3 photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {officePhotos.slice(5, 8).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 5) * 0.1 }}
              className="relative h-[240px] rounded-2xl overflow-hidden group border border-black/[0.06] dark:border-white/[0.06]"
            >
              <Image src={src} alt={`Cloud Nexus office ${i + 6}`} fill className="object-cover object-center" sizes="(max-width:640px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Row 4 — remaining photos */}
        {officePhotos.length > 8 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {officePhotos.slice(8).map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 8) * 0.1 }}
                className="relative h-[280px] md:h-[340px] rounded-2xl overflow-hidden group border border-black/[0.06] dark:border-white/[0.06]"
              >
                <Image src={src} alt={`Cloud Nexus office ${i + 9}`} fill className="object-cover object-center" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* OFFICE LOCATION */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.015]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOffice}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {office.label.replace(" Office", "")}{" "}
                  <span className="text-[#4EB3E8]">{t("infra.location.headquarters", "Headquarters")}</span>
                </h2>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <MapPin className="w-4 h-4 text-[#4EB3E8]" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-black/50 dark:text-white/45">{office.city}</span>
                </div>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Left — Description + Stats */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-base text-black/60 dark:text-white/50 leading-relaxed mb-10">
                    {office.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {office.stats.map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] text-center shadow-sm"
                      >
                        <span className="block text-2xl font-black text-[#4EB3E8]">
                          <Counter value={s.value} suffix={s.suffix} />
                        </span>
                        <span className="text-[11px] font-semibold text-black/40 dark:text-white/35 mt-1.5 block uppercase tracking-wide">
                          {s.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-xs text-black/35 dark:text-white/25 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {office.address}
                  </p>
                </motion.div>

                {/* Right — Highlights Card */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-7 md:p-9 shadow-sm">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                      {t("infra.location.highlightsTitle", "Office Highlights")}
                    </h3>
                    <ul className="space-y-4">
                      {office.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#4EB3E8] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-sm text-black/65 dark:text-white/50 leading-relaxed">
                            {h}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FACILITY FEATURES */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("infra.facilities.title", "World-Class")} <span className="text-[#4EB3E8]">{t("infra.facilities.titleHighlight", "Facilities")}</span>
          </h2>
          <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t("infra.facilities.description", "Our office is equipped with everything our team needs to deliver exceptional work in a comfortable, secure, and inspiring environment.")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilityFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group rounded-2xl p-7 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/25 dark:hover:border-[#4EB3E8]/25 hover:shadow-xl hover:shadow-[#4EB3E8]/[0.06] transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl"
                  style={{ backgroundColor: f.color }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border transition-colors duration-300"
                  style={{
                    backgroundColor: `${f.color}12`,
                    borderColor: `${f.color}20`,
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: f.color }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-base font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/45 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* WORKSPACE HIGHLIGHTS */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("infra.workspace.title", "Our")} <span className="text-[#4EB3E8]">{t("infra.workspace.titleHighlight", "Workspace")}</span>
            </h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
              {t("infra.workspace.description", "Designed with care to create an environment where talent thrives, ideas flow, and great products are built.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {workspaceHighlights.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group text-center p-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] hover:border-[#4EB3E8]/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-[#4EB3E8]/10">
                    <Icon
                      className="w-5 h-5 text-[#4EB3E8]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4 className="text-sm font-bold mb-2">{w.title}</h4>
                  <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed">
                    {w.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#4EB3E8]/[0.04] to-purple-500/[0.04] dark:from-[#4EB3E8]/[0.06] dark:to-purple-500/[0.06] p-8 sm:p-12 md:p-16 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(78,179,232,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t("infra.cta.title", "Do you have a project in mind?")}
            </h2>
            <p className="text-lg font-semibold text-[#4EB3E8] mb-3">
              {t("infra.cta.subtitle", "Talk to the experts.")}
            </p>
            <p className="text-base text-black/55 dark:text-white/50 max-w-lg mx-auto leading-relaxed mb-10">
              {t("infra.cta.description", "Let's discuss how Cloud Nexus can help you build, scale, and deliver your next big idea.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/free-consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 font-semibold text-sm transition-all shadow-lg hover:-translate-y-0.5"
              >
                <CalendarCheck className="w-4 h-4" /> {t("infra.cta.primaryBtn", "Get in Touch")}
              </Link>
              <Link
                href="/resources/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" /> {t("infra.cta.secondaryBtn", "Contact Us")}
              </Link>
            </div>
            <p className="mt-6 text-xs text-black/30 dark:text-white/25">
              work@cloudnexus.in &middot; +91 9201004208
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
