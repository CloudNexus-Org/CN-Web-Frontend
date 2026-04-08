"use client";

import { useState, useEffect, useRef, useMemo, memo, useCallback } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  ShieldCheck,
  Bot,
  Rocket,
  ChevronRight,
  Clock,
  ShoppingCart,
  Truck,
  Factory,
  DollarSign,
  Package,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

interface TimelineStep {
  phase: string;
  detail: string;
}

interface CaseStudy {
  id: string;
  tag: string;
  tagColor: string;
  company: string;
  industry: string;
  headline: string;
  challenge: string;
  solution: string;
  duration: string;
  Icon: React.ElementType;
  metrics: Metric[];
  timeline: TimelineStep[];
  gradient: string;
  accentColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "chorus",
    tag: "Healthcare App",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    company: "CHORUS",
    industry: "Healthcare / Google",
    headline: "Cross-platform healthcare app for Google with real-time patient vitals monitoring.",
    challenge:
      "Inconsistent BLE performance across platforms. Real-time data synchronization. Maintaining healthcare-grade data security. Optimizing performance for multiple platforms.",
    solution:
      "Built CHORUS, a scalable cross-platform application (Web, Android, iOS). Tracks live patient vitals such as heart rate and oxygen levels. Monitors medical device status via BLE. Implements secure architecture with SAST, SCA, and rigorous testing.",
    duration: "120 days",
    Icon: ShieldCheck,
    metrics: [
      { value: 99.9, suffix: "%", label: "Uptime achieved" },
      { value: 3, suffix: " platforms", label: "Web, Android, iOS" },
      { value: 0, suffix: " breaches", label: "Security incidents" },
    ],
    timeline: [
      { phase: "Platform Architecture", detail: "Cross-platform framework selection, BLE protocol design, security architecture" },
      { phase: "Vitals Integration", detail: "Real-time heart rate, oxygen level tracking with BLE device connectivity" },
      { phase: "Security Hardening", detail: "SAST, SCA scanning, healthcare-grade encryption, compliance" },
      { phase: "Multi-Platform Launch", detail: "Synchronized release across Web, Android, and iOS with monitoring" },
    ],
    gradient: "from-emerald-600/10 via-transparent to-transparent",
    accentColor: "#10b981",
  },
  {
    id: "edtech",
    tag: "AI-Driven Platform",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "EdTech",
    industry: "Education Technology",
    headline: "AI-driven e-learning platform with personalized learning paths and live classes.",
    challenge:
      "Creating a scalable AI model for personalized learning paths. Ensuring real-time performance for live classes and collaboration. Balancing gamification with academic rigor.",
    solution:
      "Developed a web and mobile platform with AI-driven course recommendations and adaptive learning paths. Live class functionality using WebRTC for real-time video and chat. Gamification features to boost engagement.",
    duration: "90 days",
    Icon: Bot,
    metrics: [
      { value: 45, suffix: "%", label: "Learner improvement" },
      { value: 3, suffix: "x", label: "Engagement increase" },
      { value: 10, suffix: "K+", label: "Active students" },
    ],
    timeline: [
      { phase: "AI Model Design", detail: "Adaptive learning algorithm, personalized path engine, recommendation system" },
      { phase: "Live Class Engine", detail: "WebRTC integration for real-time video, chat, and collaboration tools" },
      { phase: "Gamification Layer", detail: "Points, badges, leaderboards balanced with academic rigor" },
      { phase: "Scale & Launch", detail: "Platform rollout for students, educators, and professionals" },
    ],
    gradient: "from-violet-600/10 via-transparent to-transparent",
    accentColor: "#8b5cf6",
  },
  {
    id: "fintech",
    tag: "AI-Powered Finance",
    tagColor: "bg-[#215B97]/15 text-[#4a7db8] border-[#215B97]/30",
    company: "FinTech",
    industry: "Financial Technology",
    headline: "AI-powered financial management app with fraud detection and smart budgeting.",
    challenge:
      "Ensuring secure handling of sensitive financial data. Building accurate AI models for spending analysis and fraud detection.",
    solution:
      "Developed a cross-platform mobile app with AI-driven insights. Bank-grade encryption, biometric authentication, and secure APIs. ML algorithms to analyze spending, detect anomalies, and automate budgeting. Seamless digital wallet and payment gateway integration.",
    duration: "80 days",
    Icon: Zap,
    metrics: [
      { value: 95, suffix: "%", label: "Fraud detection rate" },
      { value: 40, suffix: "%", label: "Better money mgmt" },
      { value: 100, suffix: "%", label: "Data encryption" },
    ],
    timeline: [
      { phase: "Security Architecture", detail: "Bank-grade encryption, biometric auth, secure API design" },
      { phase: "AI Model Training", detail: "Spending analysis, anomaly detection, and automated budgeting models" },
      { phase: "Payment Integration", detail: "Digital wallets, payment gateways, and transaction management" },
      { phase: "Launch & Monitor", detail: "Cross-platform release with real-time fraud monitoring" },
    ],
    gradient: "from-[#1a4a7a]/10 via-transparent to-transparent",
    accentColor: "#215B97",
  },
  {
    id: "analytics",
    tag: "Predictive Analytics",
    tagColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    company: "FinTech BI",
    industry: "Business Intelligence",
    headline: "Predictive analytics platform transforming reactive decisions into proactive strategy.",
    challenge:
      "Reliance on static reporting. Difficulty in data analysis. Inefficient resource management. Integrating IoT data streams.",
    solution:
      "Analyze large volumes of historical and real-time data. Build predictive models for demand forecasting, customer behavior, and risk detection. Provide interactive dashboards with actionable insights for decision-makers.",
    duration: "60 days",
    Icon: Rocket,
    metrics: [
      { value: 60, suffix: "%", label: "Smarter decisions" },
      { value: 35, suffix: "%", label: "Resource optimized" },
      { value: 3, suffix: "x", label: "Risk detection speed" },
    ],
    timeline: [
      { phase: "Data Infrastructure", detail: "Historical and real-time data pipeline setup, IoT integration" },
      { phase: "Predictive Models", detail: "Demand forecasting, customer behavior, and risk detection models" },
      { phase: "Dashboard Design", detail: "Interactive dashboards with actionable insights for decision-makers" },
      { phase: "Strategy Enablement", detail: "Shift from reactive to proactive decision-making workflows" },
    ],
    gradient: "from-amber-600/10 via-transparent to-transparent",
    accentColor: "#f59e0b",
  },
  {
    id: "pharma",
    tag: "IoT & Cold Chain",
    tagColor: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    company: "Pharma",
    industry: "Pharmaceutical",
    headline: "Cold chain monitoring system achieving 40% reduction in spoilage for leading pharma client.",
    challenge:
      "Ensuring real-time temperature monitoring across distributed facilities. Meeting compliance. Minimizing spoilage. Integrating IoT data across regions.",
    solution:
      "Built an IoT-enabled mobile/web platform. Implemented AI-driven alerts for temperature deviations. Designed centralized dashboards for visibility. Enabled secure enterprise integration across facilities.",
    duration: "75 days",
    Icon: ShieldCheck,
    metrics: [
      { value: 40, suffix: "%", label: "Spoilage reduced" },
      { value: 100, suffix: "%", label: "Compliance met" },
      { value: 5, suffix: " regions", label: "Supply chain visibility" },
    ],
    timeline: [
      { phase: "IoT Infrastructure", detail: "Sensor deployment, real-time temperature monitoring across facilities" },
      { phase: "AI Alert System", detail: "Predictive alerts for temperature deviations and equipment failures" },
      { phase: "Dashboard & Reporting", detail: "Centralized visibility dashboards for all regions and facilities" },
      { phase: "Enterprise Integration", detail: "Secure API integration with existing pharma systems and compliance" },
    ],
    gradient: "from-sky-600/10 via-transparent to-transparent",
    accentColor: "#0ea5e9",
  },
];

const recentWork: CaseStudy[] = [
  {
    id: "cartflow",
    tag: "Headless Commerce",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "CartFlow",
    industry: "E-Commerce",
    headline: "AI-powered headless commerce platform driving 38% increase in average order value.",
    challenge: "Generic product suggestions leading to 71% cart abandonment. No real-time ML infrastructure for personalization.",
    solution: "Built a headless commerce platform with real-time ML recommendation engine using TensorFlow Serving. Multi-currency support and dynamic pricing.",
    duration: "60 days",
    Icon: ShoppingCart,
    metrics: [
      { value: 38, suffix: "%", label: "AOV increase" },
      { value: 22, suffix: "%", label: "Abandonment drop" },
      { value: 18, suffix: "ms", label: "Inference latency" },
    ],
    timeline: [
      { phase: "Data Pipeline", detail: "Kafka streams for clickstream and purchase history" },
      { phase: "ML Model Training", detail: "Collaborative filtering + content-based hybrid" },
      { phase: "API & Caching Layer", detail: "Spring Boot serving TF models with Redis caching" },
      { phase: "Rollout & Tuning", detail: "Canary at 5% → 100% with feature-flag control" },
    ],
    gradient: "from-violet-600/10 via-transparent to-transparent",
    accentColor: "#8b5cf6",
  },
  {
    id: "fleettrack",
    tag: "Fleet Management",
    tagColor: "bg-[#215B97]/15 text-[#4a7db8] border-[#215B97]/30",
    company: "FleetTrack",
    industry: "Transport & Logistics",
    headline: "IoT-powered fleet management system reducing fuel costs by 25% across 2000+ vehicles.",
    challenge: "No real-time visibility into vehicle locations. Manual route planning causing inefficiency. High fuel costs.",
    solution: "GPS + IoT sensor integration for real-time fleet tracking. AI-based route optimization engine. Predictive maintenance alerts reducing breakdowns by 40%.",
    duration: "90 days",
    Icon: Truck,
    metrics: [
      { value: 25, suffix: "%", label: "Fuel cost reduction" },
      { value: 2000, suffix: "+", label: "Vehicles tracked" },
      { value: 40, suffix: "%", label: "Fewer breakdowns" },
    ],
    timeline: [
      { phase: "IoT Integration", detail: "GPS trackers, fuel sensors, OBD-II device setup" },
      { phase: "Tracking Platform", detail: "Real-time dashboard with geofencing and alerts" },
      { phase: "Route Optimization", detail: "AI-based routing engine with traffic data" },
      { phase: "Predictive Maintenance", detail: "ML models for breakdown prediction" },
    ],
    gradient: "from-[#1a4a7a]/10 via-transparent to-transparent",
    accentColor: "#215B97",
  },
  {
    id: "factoryiq",
    tag: "Smart Factory",
    tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    company: "FactoryIQ",
    industry: "Manufacturing",
    headline: "IoT-powered smart factory platform reducing downtime by 45% across 12 production lines.",
    challenge: "Unplanned equipment downtime costing millions. No predictive maintenance capability. Siloed production data.",
    solution: "1000+ IoT sensors for real-time machine monitoring. ML-based predictive maintenance models. Unified production dashboard with OEE tracking.",
    duration: "100 days",
    Icon: Factory,
    metrics: [
      { value: 45, suffix: "%", label: "Downtime reduced" },
      { value: 1000, suffix: "+", label: "IoT sensors" },
      { value: 30, suffix: "%", label: "OEE improvement" },
    ],
    timeline: [
      { phase: "IoT Infrastructure", detail: "Sensor deployment, edge computing setup" },
      { phase: "Data Platform", detail: "Time-series DB, real-time streaming pipeline" },
      { phase: "Predictive Models", detail: "Equipment failure prediction, anomaly detection" },
      { phase: "Dashboard & Alerts", detail: "OEE tracking, automated maintenance alerts" },
    ],
    gradient: "from-orange-600/10 via-transparent to-transparent",
    accentColor: "#f97316",
  },
  {
    id: "paybridge",
    tag: "Payment Gateway",
    tagColor: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
    company: "PayBridge",
    industry: "Fintech",
    headline: "Unified payment gateway processing $500M+ annually with 99.99% uptime.",
    challenge: "Supporting 50+ payment methods across regions. PCI-DSS Level 1 compliance. Sub-200ms transaction processing.",
    solution: "Multi-acquirer routing for optimal success rates. PCI-DSS Level 1 certified infrastructure. Smart retry logic with fallback routing.",
    duration: "100 days",
    Icon: DollarSign,
    metrics: [
      { value: 500, suffix: "M+", label: "Annual volume ($)" },
      { value: 99.99, suffix: "%", label: "Uptime" },
      { value: 150, suffix: "ms", label: "Avg latency" },
    ],
    timeline: [
      { phase: "Gateway Architecture", detail: "Multi-acquirer routing, tokenization" },
      { phase: "PCI Compliance", detail: "Level 1 certification, encryption, audits" },
      { phase: "Smart Routing", detail: "Success rate optimization, retry logic" },
      { phase: "Merchant Dashboard", detail: "Real-time analytics, settlement tracking" },
    ],
    gradient: "from-indigo-600/10 via-transparent to-transparent",
    accentColor: "#6366f1",
  },
  {
    id: "quickdrop",
    tag: "Last-Mile Delivery",
    tagColor: "bg-lime-500/15 text-lime-400 border-lime-500/30",
    company: "QuickDrop",
    industry: "On Demand Delivery",
    headline: "Last-mile delivery platform processing 50K+ daily orders with AI route optimization.",
    challenge: "Inefficient last-mile delivery routes. Real-time tracking for customers and drivers. Peak hour demand management.",
    solution: "AI-powered route optimization cutting delivery time by 30%. Real-time GPS tracking with ETA predictions. Dynamic pricing and surge management.",
    duration: "70 days",
    Icon: Package,
    metrics: [
      { value: 50, suffix: "K+", label: "Daily orders" },
      { value: 30, suffix: "%", label: "Faster deliveries" },
      { value: 4.8, suffix: "/5", label: "Customer rating" },
    ],
    timeline: [
      { phase: "Order Management", detail: "Multi-vendor order aggregation, dispatch" },
      { phase: "Route Optimization", detail: "AI routing with traffic and demand data" },
      { phase: "Real-Time Tracking", detail: "GPS tracking, ETA prediction, notifications" },
      { phase: "Surge Management", detail: "Dynamic pricing, demand forecasting" },
    ],
    gradient: "from-lime-600/10 via-transparent to-transparent",
    accentColor: "#84cc16",
  },
];

const allEntries = [...caseStudies, ...recentWork];

// ─── Animated Counter ─────────────────────────────────────────────────────────

function useCounter(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!active) { setCount(0); return; }

    startTime.current = null;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 2 : 0)));

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    rafId.current = requestAnimationFrame(animate);
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, [target, active, duration]);

  return count;
}

const MetricCounter = memo(function MetricCounter({ value, suffix, label, active }: Metric & { active: boolean }) {
  const count = useCounter(value, active);
  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tabular-nums">
        {value % 1 !== 0 ? count.toFixed(2) : Math.round(count)}
        <span className="text-lg font-medium text-[#215B97]">{suffix}</span>
      </span>
      <span className="text-[13px] text-[#8b8b8b] leading-tight">{label}</span>
    </div>
  );
});

// ─── Timeline Step ────────────────────────────────────────────────────────────

const TimelineStep = memo(function TimelineStep({
  step,
  index,
  active,
  accentColor,
}: {
  step: TimelineStep;
  index: number;
  active: boolean;
  accentColor: string;
}) {
  return (
    <div
      className="flex gap-4 transition-all duration-500"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateX(0)" : "translateX(-8px)",
        transitionDelay: active ? `${index * 120}ms` : "0ms",
      }}
    >
      {/* Connector line + dot */}
      <div className="flex flex-col items-center gap-0 pt-1">
        <div
          className="w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-500"
          style={{ backgroundColor: active ? accentColor : "#333" }}
        />
        {index < 3 && (
          <div
            className="w-px flex-1 mt-1 min-h-[2rem] transition-colors duration-700"
            style={{
              backgroundColor: active ? `${accentColor}40` : "#222",
              transitionDelay: `${index * 120 + 300}ms`,
            }}
          />
        )}
      </div>
      <div className="pb-5">
        <p className="text-[13px] font-semibold text-[#ededed] mb-0.5">{step.phase}</p>
        <p className="text-[12px] text-[#666] leading-relaxed font-medium">{step.detail}</p>
      </div>
    </div>
  );
});

// ─── Main Component ───────────────────────────────────────────────────────────

export function CaseStudies() {
  const [active, setActive] = useState(allEntries[0].id);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  const study = useMemo(() => allEntries.find((c) => c.id === active)!, [active]);

  const handleSetActive = useCallback((id: string) => setActive(id), []);

  // Reset & trigger metrics animation on tab switch
  useEffect(() => {
    setMetricsVisible(false);
    const timer = setTimeout(() => setMetricsVisible(true), 200);
    return () => clearTimeout(timer);
  }, [active]);

  // Intersection observer to auto-trigger on scroll into view
  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setMetricsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-black relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute pointer-events-none transition-all duration-1000 w-[600px] h-[600px]"
        style={{
          background: `radial-gradient(circle, ${study.accentColor}10 0%, transparent 70%)`,
          top: "20%",
          right: "-10%",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#215B97]/10 border border-[#215B97]/20 w-fit mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#215B97] shadow-[0_0_8px_#215B97] animate-pulse" />
            <span className="text-[13px] font-medium text-[#215B97] tracking-wide uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white mb-3">
            Case Studies & Our Recent Work
          </h2>
          <p className="text-base text-black/50 dark:text-[#8b8b8b] max-w-2xl font-medium">
            Real solutions delivered for real businesses.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 mb-4 sm:mb-10 overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap sm:overflow-x-visible sm:pb-0">
          {allEntries.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => handleSetActive(c.id)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-300 shrink-0 sm:shrink ${isActive
                  ? "border-transparent text-black dark:text-white shadow-[0_0_12px_rgba(59,130,246,0.1)]"
                  : "bg-transparent border-black/15 dark:border-[#2e2e2e] text-black/50 dark:text-[#8b8b8b] hover:border-black/30 dark:hover:border-[#444] hover:text-black dark:hover:text-[#ccc]"
                  }`}
                style={isActive ? { backgroundColor: `${c.accentColor}15`, borderColor: `${c.accentColor}40` } : {}}
              >
                <c.Icon
                  className="w-3.5 h-3.5 transition-colors duration-300"
                  style={{ color: isActive ? c.accentColor : undefined }}
                />
                {c.company}
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: c.accentColor }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile: navigation dots just below tabs */}
        <div className="flex lg:hidden items-center justify-between mb-6">
          <div className="flex items-center gap-1.5">
            {allEntries.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSetActive(c.id)}
                className="transition-all duration-300"
                style={{
                  width: c.id === active ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "9999px",
                  backgroundColor: c.id === active ? study.accentColor : "#2e2e2e",
                }}
              />
            ))}
          </div>
          <span className="text-[12px] text-[#555]">
            {allEntries.findIndex((c) => c.id === active) + 1} / {allEntries.length}
          </span>
        </div>

        {/* Main Card */}
        <Card className="bg-[#0d0d0d] border-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl p-0">
          <div className="grid lg:grid-cols-[1fr_360px] min-h-[480px]">

            {/* Left — Story */}
            <div className={`relative p-5 sm:p-8 md:p-10 lg:p-12 overflow-hidden`}>

              {/* Top row: badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
                <Badge
                  className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md border ${study.tagColor}`}
                >
                  {study.tag}
                </Badge>
                <Badge className="text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-[#2e2e2e] bg-transparent text-[#666]">
                  {study.industry}
                </Badge>
                <div className="ml-auto flex items-center gap-1.5 text-[12px] text-[#555]">
                  <Clock className="w-3 h-3" />
                  {study.duration}
                </div>
              </div>

              {/* Headline */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight mb-4 sm:mb-6 max-w-[520px]">
                {study.headline}
              </h3>

              {/* Challenge / Solution */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold text-[#555] uppercase tracking-widest">
                    The Challenge
                  </span>
                  <p className="text-[14px] text-[#8b8b8b] leading-relaxed font-medium">{study.challenge}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold text-[#555] uppercase tracking-widest">
                    Our Approach
                  </span>
                  <p className="text-[14px] text-[#8b8b8b] leading-relaxed font-medium">{study.solution}</p>
                </div>
              </div>

              {/* Metrics */}
              <div
                ref={metricsRef}
                className="flex flex-col gap-4 pt-8 border-t border-[#1e1e1e]"
              >
                <span className="text-[11px] font-semibold text-[#555] uppercase tracking-widest">
                  Key Metrics
                </span>
                <div className="flex flex-wrap gap-8">
                  {study.metrics.map((m) => (
                    <MetricCounter key={`${study.id}-${m.label}`} {...m} active={metricsVisible} />
                  ))}
                </div>
              </div>

              {/* View full case study link */}
              <div className="mt-8">
                <Link
                  href="/our-work"
                  className="group inline-flex items-center gap-1.5 text-[13px] font-medium transition-all duration-300"
                  style={{ color: study.accentColor }}
                >
                  View full case study
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Right — Timeline */}
            <div className="border-t lg:border-t-0 lg:border-l border-[#1e1e1e] p-5 sm:p-8 md:p-10 flex flex-col gap-0">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-4 h-4 text-[#555]" />
                <span className="text-[12px] font-semibold text-[#555] uppercase tracking-widest">
                  Timeline
                </span>
              </div>

              <div className="flex flex-col">
                {study.timeline.map((step, i) => (
                  <TimelineStep
                    key={`${study.id}-${step.phase}`}
                    step={step}
                    index={i}
                    active={metricsVisible}
                    accentColor={study.accentColor}
                  />
                ))}
              </div>

              {/* Bottom CTA card */}
              <div
                className="mt-auto p-4 rounded-xl border transition-all duration-500"
                style={{ borderColor: `${study.accentColor}30`, background: `${study.accentColor}08` }}
              >
                <p className="text-[12px] text-[#666] leading-relaxed mb-3 font-medium">
                  Every engagement starts with a no-commitment discovery call.
                </p>
                <button className="inline-flex items-center gap-1 text-[12px] font-semibold text-white hover:gap-2 transition-all duration-200">
                  Start a conversation <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </Card>

        {/* Desktop: navigation dots below the card */}
        <div className="hidden lg:flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            {allEntries.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSetActive(c.id)}
                className="transition-all duration-300"
                style={{
                  width: c.id === active ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  backgroundColor: c.id === active ? study.accentColor : "#2e2e2e",
                }}
              />
            ))}
          </div>
          <span className="text-[12px] text-[#555]">
            {allEntries.findIndex((c) => c.id === active) + 1} / {allEntries.length} projects
          </span>
        </div>

        {/* Our Work Button */}
        <div className="flex justify-center mt-14">
          <Link href="/our-work">
            <Button size="lg" className="rounded-lg bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90 px-8 font-semibold">
              Our Work
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
