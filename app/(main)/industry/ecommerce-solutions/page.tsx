"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, TrendingUp, ChevronRight, Clock } from "lucide-react";

interface Metric {
  value: number;
  suffix: string;
  label: string;
}
interface TimelineStep {
  phase: string;
  detail: string;
}
interface Project {
  id: string;
  tag: string;
  tagColor: string;
  company: string;
  industry: string;
  headline: string;
  challenge: string;
  solution: string;
  duration: string;
  metrics: Metric[];
  timeline: TimelineStep[];
  accentColor: string;
}

const projects: Project[] = [
  {
    id: "cartflow-ecom",
    tag: "Headless Commerce",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "CartFlow",
    industry: "E-Commerce",
    headline: "AI-powered headless commerce platform driving 38% increase in average order value.",
    challenge:
      "Generic product suggestions leading to 71% cart abandonment. No real-time ML infrastructure for personalization.",
    solution:
      "Built a headless commerce platform with real-time ML recommendation engine using TensorFlow Serving. Multi-currency support and dynamic pricing.",
    duration: "60 days",
    accentColor: "#8b5cf6",
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
  },
  {
    id: "shopnest-marketplace",
    tag: "Multi-Vendor Marketplace",
    tagColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    company: "ShopNest",
    industry: "E-Commerce",
    headline: "Scalable multi-vendor marketplace supporting 10K+ sellers with real-time inventory.",
    challenge:
      "Managing inventory across thousands of vendors. Payment splitting and commission tracking. Real-time order synchronization.",
    solution:
      "Microservices-based marketplace with event-driven inventory management. Automated payment splitting with Stripe Connect and real-time order tracking.",
    duration: "75 days",
    accentColor: "#a855f7",
    metrics: [
      { value: 10, suffix: "K+", label: "Active sellers" },
      { value: 99.5, suffix: "%", label: "Order accuracy" },
      { value: 2, suffix: "s", label: "Sync latency" },
    ],
    timeline: [
      { phase: "Marketplace Architecture", detail: "Multi-tenant design, vendor onboarding flow" },
      { phase: "Inventory Engine", detail: "Event-driven stock management across vendors" },
      { phase: "Payments & Splits", detail: "Stripe Connect integration, automated commissions" },
      { phase: "Launch & Scale", detail: "Load testing, CDN setup, monitoring dashboards" },
    ],
  },
];

function useCounter(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  const rafId = useRef<number>(0);
  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 2 : 0)));
      if (progress < 1) rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [target, active, duration]);
  return count;
}

function MetricCounter({ value, suffix, label, active }: Metric & { active: boolean }) {
  const count = useCounter(value, active);
  return (
    <div className="flex flex-col gap-1">
      <span className="text-3xl lg:text-4xl font-bold text-foreground tabular-nums">
        {value % 1 !== 0 ? count.toFixed(2) : Math.round(count)}
        <span className="text-lg font-medium text-accent">{suffix}</span>
      </span>
      <span className="text-[13px] text-muted-foreground leading-tight">{label}</span>
    </div>
  );
}

function TimelineStepComp({
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
        <p className="text-[13px] font-semibold text-foreground mb-0.5">{step.phase}</p>
        <p className="text-[12px] text-muted-foreground leading-relaxed">{step.detail}</p>
      </div>
    </div>
  );
}

export default function EcommerceSolutionsPage() {
  const [active, setActive] = useState(projects[0].id);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  const study = projects.find((p) => p.id === active)!;

  useEffect(() => {
    setMetricsVisible(false);
    const t = setTimeout(() => setMetricsVisible(true), 200);
    return () => clearTimeout(t);
  }, [active]);
  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMetricsVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen">
      <div className="w-full pt-24 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">E-Commerce Solutions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Scalable online retail platforms with AI-powered recommendations and seamless checkout.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="w-full px-6 py-16 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Powering E-Commerce at Scale</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                We design and build high-performance e-commerce platforms that drive conversions and revenue growth.
                From headless commerce architectures to AI-powered product recommendations, our solutions handle
                millions of transactions with sub-second response times.
              </p>
            </div>
            <div>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Our e-commerce expertise spans multi-vendor marketplaces, payment gateway integrations, inventory
                management systems, and personalization engines. We leverage technologies like Next.js, Node.js, Redis,
                and TensorFlow to deliver seamless shopping experiences across all channels.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-border bg-card">
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-[12px] text-muted-foreground mt-1">Sellers onboarded</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card">
                  <p className="text-2xl font-bold text-foreground">38%</p>
                  <p className="text-[12px] text-muted-foreground mt-1">Avg AOV increase</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card">
                  <p className="text-2xl font-bold text-foreground">18ms</p>
                  <p className="text-[12px] text-muted-foreground mt-1">Inference latency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Work */}
      <div className="w-full px-6 pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-3">Our Work</h2>
            <p className="text-muted-foreground">Projects we have delivered in this industry.</p>
          </div>
          <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
            {projects.map((p) => {
              const isActive = p.id === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg border text-[13px] font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? "border-transparent text-foreground"
                      : "bg-transparent border-border text-muted-foreground hover:border-[#444] hover:text-[#ccc]"
                  }`}
                  style={isActive ? { backgroundColor: `${p.accentColor}15`, borderColor: `${p.accentColor}40` } : {}}
                >
                  {p.company}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: p.accentColor }} />
                  )}
                </button>
              );
            })}
          </div>

          <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-2xl p-0">
            <div className="grid lg:grid-cols-[1fr_360px] min-h-[480px]">
              <div className="relative p-8 md:p-10 lg:p-12 overflow-hidden">
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <Badge className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md border ${study.tagColor}`}>
                    {study.tag}
                  </Badge>
                  <Badge className="text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-border bg-transparent text-muted-foreground">
                    {study.industry}
                  </Badge>
                  <div className="ml-auto flex items-center gap-1.5 text-[12px] text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {study.duration}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-tight mb-6 max-w-[520px]">
                  {study.headline}
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">The Challenge</span>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">Our Approach</span>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>
                <div ref={metricsRef} className="flex flex-wrap gap-8 pt-8 border-t border-border">
                  {study.metrics.map((m, i) => (
                    <MetricCounter key={i} {...m} active={metricsVisible} />
                  ))}
                </div>
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
              <div className="border-t lg:border-t-0 lg:border-l border-border p-8 md:p-10 flex flex-col gap-0">
                <div className="flex items-center gap-2 mb-8">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-[12px] font-semibold text-muted-foreground uppercase tracking-widest">Engagement Timeline</span>
                </div>
                <div className="flex flex-col">
                  {study.timeline.map((step, i) => (
                    <TimelineStepComp key={i} step={step} index={i} active={metricsVisible} accentColor={study.accentColor} />
                  ))}
                </div>
                <div
                  className="mt-auto p-4 rounded-xl border transition-all duration-500"
                  style={{ borderColor: `${study.accentColor}30`, background: `${study.accentColor}08` }}
                >
                  <p className="text-[12px] text-muted-foreground leading-relaxed mb-3">
                    Every engagement starts with a no-commitment discovery call.
                  </p>
                  <button className="inline-flex items-center gap-1 text-[12px] font-semibold text-foreground hover:gap-2 transition-all duration-200">
                    Start a conversation <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className="transition-all duration-300"
                  style={{
                    width: p.id === active ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "9999px",
                    backgroundColor: p.id === active ? study.accentColor : "#2e2e2e",
                  }}
                />
              ))}
            </div>
            <span className="text-[12px] text-muted-foreground">
              {projects.findIndex((p) => p.id === active) + 1} / {projects.length} projects
            </span>
          </div>

          <div className="flex justify-center mt-14 pb-20">
            <Link href="/our-work">
              <Button size="lg" className="rounded-lg bg-white text-black hover:bg-white/90 px-8 font-semibold dark:bg-black dark:text-white">
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
