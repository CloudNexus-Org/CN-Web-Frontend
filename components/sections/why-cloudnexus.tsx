"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Globe, Handshake, BrainCircuit, ArrowRight, Award, Target, Users } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";

function AnimatedStat({ stat, isInView }: { stat: string; isInView: boolean }) {
  const numMatch = stat.match(/^([\d.]+)(.*)$/);
  const target = numMatch ? parseFloat(numMatch[1]) : 0;
  const suffix = numMatch ? numMatch[2] : "";
  const hasNum = numMatch !== null;
  const [count, setCount] = useState(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || !hasNum || hasAnimated.current) return;
    hasAnimated.current = true;
    setCount(0);
    const duration = 1600;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, hasNum, target]);

  if (!hasNum) return <>{stat}</>;
  return <>{count}{suffix}</>;
}

/* ── SVG Visual Decorations ── */
function AwardVisual() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
      <circle cx="100" cy="48" r="32" stroke="currentColor" strokeWidth="1.8" opacity="0.35" />
      <circle cx="100" cy="48" r="20" stroke="currentColor" strokeWidth="2" opacity="0.45" />
      <path d="M90 78 L100 96 L110 78" stroke="currentColor" strokeWidth="1.8" opacity="0.35" />
      <path d="M84 78 L100 100 L116 78" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      <path d="M92 40 L98 36 L100 28 L102 36 L108 40 L103 44 L104 52 L100 49 L96 52 L97 44Z" fill="currentColor" opacity="0.3" />
      <circle cx="38" cy="28" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="162" cy="68" r="5" fill="currentColor" opacity="0.15" />
      <circle cx="155" cy="22" r="3" fill="currentColor" opacity="0.25" />
      <circle cx="48" cy="80" r="3" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

function PartnerVisual() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
      {/* Central hub */}
      <circle cx="100" cy="55" r="16" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="100" cy="55" r="6" fill="currentColor" opacity="0.3" />
      {/* Partner nodes */}
      <circle cx="45" cy="30" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="30" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="155" cy="30" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="155" cy="30" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="45" cy="85" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="85" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="155" cy="85" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="155" cy="85" r="4" fill="currentColor" opacity="0.2" />
      {/* Connection lines to hub */}
      <line x1="55" y1="35" x2="85" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <line x1="145" y1="35" x2="115" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <line x1="55" y1="80" x2="85" y2="62" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <line x1="145" y1="80" x2="115" y2="62" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      {/* Pulse rings on nodes */}
      <circle cx="45" cy="30" r="15" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />
      <circle cx="155" cy="30" r="15" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />
      <circle cx="100" cy="55" r="24" stroke="currentColor" strokeWidth="0.8" opacity="0.1" strokeDasharray="4 4" />
    </svg>
  );
}

function BrainVisual() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
      <circle cx="100" cy="55" r="30" stroke="currentColor" strokeWidth="1.8" opacity="0.3" />
      <path d="M84 38 Q100 20 116 38" stroke="currentColor" strokeWidth="1.8" opacity="0.35" />
      <path d="M84 72 Q100 90 116 72" stroke="currentColor" strokeWidth="1.8" opacity="0.35" />
      <line x1="100" y1="28" x2="100" y2="82" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
      <circle cx="100" cy="43" r="4" fill="currentColor" opacity="0.35" />
      <circle cx="88" cy="55" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="112" cy="55" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="100" cy="67" r="4" fill="currentColor" opacity="0.35" />
      <path d="M72 48 L84 55" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path d="M128 48 L116 55" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <circle cx="66" cy="45" r="6" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
      <circle cx="134" cy="45" r="6" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
    </svg>
  );
}

function GlobeVisual() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
      <circle cx="100" cy="55" r="35" stroke="currentColor" strokeWidth="1.8" opacity="0.3" />
      <ellipse cx="100" cy="55" rx="16" ry="35" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <line x1="65" y1="43" x2="135" y2="43" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
      <line x1="65" y1="67" x2="135" y2="67" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
      <line x1="65" y1="55" x2="135" y2="55" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
      <circle cx="48" cy="32" r="3.5" fill="currentColor" opacity="0.35" />
      <circle cx="148" cy="38" r="3.5" fill="currentColor" opacity="0.35" />
      <circle cx="78" cy="82" r="2.5" fill="currentColor" opacity="0.25" />
      <path d="M46 32 L48 32 M48 30 L48 34" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path d="M146 38 L148 38 M148 36 L148 40" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
    </svg>
  );
}

function TargetVisual() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
      <circle cx="100" cy="55" r="38" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <circle cx="100" cy="55" r="27" stroke="currentColor" strokeWidth="1.8" opacity="0.3" />
      <circle cx="100" cy="55" r="16" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <circle cx="100" cy="55" r="6" fill="currentColor" opacity="0.4" />
      <line x1="142" y1="18" x2="106" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M142 18 L148 20 L145 26" stroke="currentColor" strokeWidth="2" opacity="0.35" fill="none" />
      <path d="M58 92 L78 86 L74 74" stroke="currentColor" strokeWidth="1.2" opacity="0.15" strokeDasharray="4 4" />
    </svg>
  );
}

function TeamVisual() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
      <circle cx="100" cy="35" r="12" stroke="currentColor" strokeWidth="1.8" opacity="0.35" />
      <path d="M80 70 Q100 54 120 70" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="58" cy="48" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path d="M42 76 Q58 62 74 76" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <circle cx="142" cy="48" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path d="M126 76 Q142 62 158 76" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <line x1="70" y1="46" x2="86" y2="39" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeDasharray="3 3" />
      <line x1="130" y1="46" x2="114" y2="39" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeDasharray="3 3" />
      <circle cx="100" cy="90" r="3" fill="currentColor" opacity="0.15" />
      <circle cx="78" cy="96" r="2.5" fill="currentColor" opacity="0.12" />
      <circle cx="122" cy="96" r="2.5" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

const features = [
  {
    Icon: Award,
    title: "Proven Project Delivery",
    description: "From CHORUS (healthcare platform for Google) to CartFlow's AI-powered e-commerce engine — we ship production-grade products on schedule.",
    stat: "100",
    statLabel: "Projects Delivered",
    Visual: AwardVisual,
  },
  {
    Icon: Handshake,
    title: "Cross-Industry Expertise",
    description: "Trusted by startups and enterprises across Healthcare, Fintech, Logistics, E-Commerce, and 15+ industries with domain-specific solutions.",
    stat: "15+",
    statLabel: "Industries Served",
    Visual: PartnerVisual,
  },
  {
    Icon: BrainCircuit,
    title: "AI & ML Engineering",
    description: "AI-driven solutions powering fraud detection at FinSmart, route optimization at FleetTrack, and personalized learning at LearnAI.",
    stat: "98%",
    statLabel: "Client Satisfaction",
    Visual: BrainVisual,
  },
  {
    Icon: Globe,
    title: "Global Delivery",
    description: "Seamless delivery across time zones with dedicated engineering teams based in Hyderabad, Bhopal, and Bengaluru.",
    stat: "3",
    statLabel: "Office Locations",
    Visual: GlobeVisual,
  },
  {
    Icon: Target,
    title: "Result-Driven Approach",
    description: "Every engagement is backed by measurable KPIs — 45% downtime reduction at FactoryIQ, 38% AOV increase at CartFlow, 99.99% uptime at PayBridge.",
    stat: "100%",
    statLabel: "Transparency",
    Visual: TargetVisual,
  },
  {
    Icon: Users,
    title: "Scalable Teams",
    description: "Rapidly scale from a single developer to a full 50+ member engineering pod within weeks across DevOps, Development, and Data squads.",
    stat: "90+",
    statLabel: "Engineers On-Demand",
    Visual: TeamVisual,
  },
];

export function WhyCloudNexus() {
  const { t } = useTranslation();
  const translatedFeatures = useTranslatedData(features);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="relative w-full py-14 md:py-20 bg-white dark:bg-black overflow-hidden">
      <motion.div style={{ y: orbY1 }} className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#4EB3E8]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <motion.div style={{ y: orbY2 }} className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-indigo-500/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#4EB3E8]"
            >
            {t("knownFor.titleBlue", "Your Partner for Scalable,")}
              <br className="hidden sm:block" />
            <span className="text-black dark:text-white">{t("knownFor.titleWhite", "Efficient, and Transparent Hiring")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto"
            >
            {t("knownFor.subtitle", "For over a decade, CloudNexus has helped enterprises build smarter, scale seamlessly, and optimize costs with high-performance solutions.")}
            </motion.p>
        </div>

        {/* Bento Grid: Row 1 = large(2col) + 2 small stacked | Row 2 = 4 equal */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Row 1: Large card + 2 stacked */}
          <motion.div
            className="lg:col-span-1 lg:row-span-1 contents lg:block"
          >
            {(() => {
              const feature = translatedFeatures[0];
              const isHovered = hoveredIdx === 0;
              return (
        <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0 }}
                  onMouseEnter={() => setHoveredIdx(0)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group relative rounded-2xl bg-[#D9EAFD] dark:bg-[#121212] border border-[#4EB3E8]/10 dark:border-[#2e2e2e] hover:border-[#4EB3E8]/25 dark:hover:border-[#4EB3E8]/50 hover:bg-[#cde3fc] dark:hover:bg-[#161616] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)] transition-all duration-500 p-6 sm:p-8 overflow-hidden cursor-pointer h-full"
                >
            <motion.div
                    className="absolute top-0 right-0 w-[220px] h-[140px] text-[#4EB3E8] pointer-events-none"
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.7, x: isHovered ? -8 : 20, y: isHovered ? 8 : -10 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <feature.Visual />
                  </motion.div>
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(78,179,232,0.12), transparent 70%)" }}
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500" style={{ background: isHovered ? "rgba(78,179,232,0.15)" : undefined, border: isHovered ? "1px solid rgba(78,179,232,0.3)" : "1px solid rgba(78,179,232,0.2)" }}>
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${!isHovered ? "bg-white dark:bg-[#1a1a1a]" : ""} transition-all duration-500`}>
                          <feature.Icon className="w-6 h-6 stroke-[1.5] transition-all duration-500" style={{ color: "#4EB3E8", transform: isHovered ? "scale(1.1)" : "scale(1)" }} />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-black/85 dark:text-[#ededed] mb-2 tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-500">{feature.title}</h3>
                      <p className="text-[14px] text-black/50 dark:text-[#8b8b8b] leading-relaxed mb-6 font-medium">{feature.description}</p>
                    </div>
                    <div className="pt-4 border-t border-[#4EB3E8]/10 dark:border-[#2e2e2e] group-hover:border-[#4EB3E8]/25 transition-colors duration-500">
                      <span className="text-2xl font-bold text-black dark:text-white tabular-nums"><AnimatedStat stat={feature.stat} isInView={isInView} /></span>
                      <p className="text-[11px] text-black/35 dark:text-[#555] mt-0.5 uppercase tracking-wider font-medium">{feature.statLabel}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>

          {/* Middle: tall card */}
          {(() => {
            const feature = translatedFeatures[1];
            const isHovered = hoveredIdx === 1;
            return (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.08 }}
                onMouseEnter={() => setHoveredIdx(1)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative rounded-2xl bg-[#D9EAFD] dark:bg-[#121212] border border-[#4EB3E8]/10 dark:border-[#2e2e2e] hover:border-[#4EB3E8]/25 dark:hover:border-[#4EB3E8]/50 hover:bg-[#cde3fc] dark:hover:bg-[#161616] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)] transition-all duration-500 p-6 sm:p-8 overflow-hidden cursor-pointer"
              >
                <motion.div className="absolute top-0 right-0 w-[200px] h-[120px] text-[#4EB3E8] pointer-events-none" initial={false} animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.7, x: isHovered ? -8 : 20, y: isHovered ? 8 : -10 }} transition={{ duration: 0.5, ease: "easeOut" }}>
                  <feature.Visual />
                </motion.div>
                <motion.div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(78,179,232,0.12), transparent 70%)" }} initial={false} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.4 }} />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500" style={{ background: isHovered ? "rgba(78,179,232,0.15)" : undefined, border: isHovered ? "1px solid rgba(78,179,232,0.3)" : "1px solid rgba(78,179,232,0.2)" }}>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${!isHovered ? "bg-white dark:bg-[#1a1a1a]" : ""} transition-all duration-500`}>
                        <feature.Icon className="w-6 h-6 stroke-[1.5] transition-all duration-500" style={{ color: "#4EB3E8", transform: isHovered ? "scale(1.1)" : "scale(1)" }} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-black/85 dark:text-[#ededed] mb-2 tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-500">{feature.title}</h3>
                    <p className="text-[14px] text-black/50 dark:text-[#8b8b8b] leading-relaxed mb-6 font-medium">{feature.description}</p>
                  </div>
                  <div className="pt-4 border-t border-[#4EB3E8]/10 dark:border-[#2e2e2e] group-hover:border-[#4EB3E8]/25 transition-colors duration-500">
                    <span className="text-2xl font-bold text-black dark:text-white tabular-nums"><AnimatedStat stat={feature.stat} isInView={isInView} /></span>
                    <p className="text-[11px] text-black/35 dark:text-[#555] mt-0.5 uppercase tracking-wider font-medium">{feature.statLabel}</p>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Right: 2 stacked small cards */}
          <div className="flex flex-col gap-4">
            {translatedFeatures.slice(2, 4).map((feature, idx) => {
              const i = idx + 2;
              const isHovered = hoveredIdx === i;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.08 * i }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group relative rounded-2xl bg-[#D9EAFD] dark:bg-[#121212] border border-[#4EB3E8]/10 dark:border-[#2e2e2e] hover:border-[#4EB3E8]/25 dark:hover:border-[#4EB3E8]/50 hover:bg-[#cde3fc] dark:hover:bg-[#161616] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)] transition-all duration-500 p-5 sm:p-6 overflow-hidden cursor-pointer flex-1"
                >
                  <motion.div className="absolute top-0 right-0 w-[150px] h-[90px] text-[#4EB3E8] pointer-events-none" initial={false} animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.6, x: isHovered ? -4 : 15, y: isHovered ? 4 : -8 }} transition={{ duration: 0.45, ease: "easeOut" }}>
                    <feature.Visual />
                  </motion.div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500" style={{ background: isHovered ? "rgba(78,179,232,0.15)" : undefined, border: isHovered ? "1px solid rgba(78,179,232,0.3)" : "1px solid rgba(78,179,232,0.2)" }}>
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${!isHovered ? "bg-white dark:bg-[#1a1a1a]" : ""} transition-all duration-500`}>
                        <feature.Icon className="w-5 h-5 stroke-[1.5]" style={{ color: "#4EB3E8" }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-black/85 dark:text-[#ededed] tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-500">{feature.title}</h3>
                      <span className="text-lg font-bold text-black dark:text-white tabular-nums"><AnimatedStat stat={feature.stat} isInView={isInView} /></span>
                      <span className="text-[10px] text-black/35 dark:text-[#555] ml-1.5 uppercase tracking-wider font-medium">{feature.statLabel}</span>
                </div>
              </div>
            </motion.div>
              );
            })}
          </div>

          {/* Row 2: 2 equal cards */}
          {translatedFeatures.slice(4).map((feature, idx) => {
            const i = idx + 4;
            const isHovered = hoveredIdx === i;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.08 * i }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative rounded-2xl bg-[#D9EAFD] dark:bg-[#121212] border border-[#4EB3E8]/10 dark:border-[#2e2e2e] hover:border-[#4EB3E8]/25 dark:hover:border-[#4EB3E8]/50 hover:bg-[#cde3fc] dark:hover:bg-[#161616] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)] transition-all duration-500 p-6 sm:p-8 overflow-hidden cursor-pointer ${idx === 0 ? "lg:col-span-2" : ""}`}
              >
                <motion.div className="absolute top-0 right-0 w-[200px] h-[120px] text-[#4EB3E8] pointer-events-none" initial={false} animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.7, x: isHovered ? -8 : 20, y: isHovered ? 8 : -10 }} transition={{ duration: 0.5, ease: "easeOut" }}>
                  <feature.Visual />
                </motion.div>
                <motion.div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(78,179,232,0.12), transparent 70%)" }} initial={false} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.4 }} />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500" style={{ background: isHovered ? "rgba(78,179,232,0.15)" : undefined, border: isHovered ? "1px solid rgba(78,179,232,0.3)" : "1px solid rgba(78,179,232,0.2)" }}>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${!isHovered ? "bg-white dark:bg-[#1a1a1a]" : ""} transition-all duration-500`}>
                        <feature.Icon className="w-6 h-6 stroke-[1.5] transition-all duration-500" style={{ color: "#4EB3E8", transform: isHovered ? "scale(1.1)" : "scale(1)" }} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-black/85 dark:text-[#ededed] mb-2 tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-500">{feature.title}</h3>
                    <p className="text-[14px] text-black/50 dark:text-[#8b8b8b] leading-relaxed mb-6 font-medium">{feature.description}</p>
                  </div>
                  <div className="pt-4 border-t border-[#4EB3E8]/10 dark:border-[#2e2e2e] group-hover:border-[#4EB3E8]/25 transition-colors duration-500">
                    <span className="text-2xl font-bold text-black dark:text-white tabular-nums"><AnimatedStat stat={feature.stat} isInView={isInView} /></span>
                    <p className="text-[11px] text-black/35 dark:text-[#555] mt-0.5 uppercase tracking-wider font-medium">{feature.statLabel}</p>
                  </div>
                </div>
        </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/company/about-us"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-300"
          >
            {t("knownFor.learnMore", "Learn more about us")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
