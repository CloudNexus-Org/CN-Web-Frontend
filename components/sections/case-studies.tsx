"use client";

import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  ShieldCheck,
  Bot,
  Rocket,
  ChevronRight,
  Clock,
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
    id: "fintech",
    tag: "Java Migration",
    tagColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    company: "NexBank",
    industry: "Financial Services",
    headline: "Legacy core migrated to cloud-native microservices in 90 days.",
    challenge:
      "A 12-year-old monolithic Java EE codebase processing 2M+ daily transactions—fragile, costly to maintain, and blocking every new product launch.",
    solution:
      "Strangler-fig migration to Spring Boot microservices on AWS EKS with zero downtime. Automated test coverage raised from 14% → 87%.",
    duration: "90 days",
    Icon: Zap,
    metrics: [
      { value: 68, suffix: "%", label: "Infra cost cut" },
      { value: 4, suffix: "x", label: "Deploy velocity" },
      { value: 99.99, suffix: "%", label: "Uptime achieved" },
    ],
    timeline: [
      { phase: "Discovery & Audit", detail: "Deep-dive codebase analysis, dependency mapping, risk matrix" },
      { phase: "Modular Extraction", detail: "Carved 6 bounded contexts — payments, auth, ledger, reporting, notifications, config" },
      { phase: "Parallel Run", detail: "Shadow traffic routing; both systems live, diff-testing outputs" },
      { phase: "Cut-over & Hardening", detail: "Blue-green cut, SLA monitoring, on-call war-room" },
    ],
    gradient: "from-blue-600/10 via-transparent to-transparent",
    accentColor: "#3b82f6",
  },
  {
    id: "ecommerce",
    tag: "AI Integration",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "CartFlow",
    industry: "E-Commerce Platform",
    headline: "AI-powered recommendations drove 38% lift in average order value.",
    challenge:
      "Generic product suggestions leading to cart abandonment rates of 71%. The team had data but no way to operationalize it in real time.",
    solution:
      "Embedded a real-time ML recommendation engine using TensorFlow Serving behind a low-latency Spring Boot API, integrated with the existing GraphQL storefront.",
    duration: "60 days",
    Icon: Bot,
    metrics: [
      { value: 38, suffix: "%", label: "AOV increase" },
      { value: 22, suffix: "%", label: "Abandonment drop" },
      { value: 18, suffix: "ms", label: "Inference latency" },
    ],
    timeline: [
      { phase: "Data Pipeline", detail: "Kafka streams ingesting clickstream, purchase history, session data" },
      { phase: "Model Training", detail: "Collaborative filtering + content-based hybrid; A/B split 50/50" },
      { phase: "API Layer", detail: "Spring Boot serving TF Model Server with Redis caching" },
      { phase: "Rollout & Tuning", detail: "Canary at 5% → 100% with feature-flag control" },
    ],
    gradient: "from-violet-600/10 via-transparent to-transparent",
    accentColor: "#8b5cf6",
  },
  {
    id: "healthtech",
    tag: "DevOps Engineering",
    tagColor: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    company: "MediCore",
    industry: "Healthcare Technology",
    headline: "Release cycle compressed from 6 weeks to 4 hours with full compliance.",
    challenge:
      "HIPAA-regulated releases required manual sign-off chains taking 6 weeks. Security audits were a bottleneck; breaches went undetected for days.",
    solution:
      "End-to-end GitOps pipeline on GitHub Actions with automated SAST, DAST, and compliance gates. Secrets vault with Hashicorp Vault; immutable infra via Terraform.",
    duration: "45 days",
    Icon: ShieldCheck,
    metrics: [
      { value: 97, suffix: "%", label: "Release time cut" },
      { value: 100, suffix: "%", label: "Audit pass rate" },
      { value: 0, suffix: " breaches", label: "Post-deploy" },
    ],
    timeline: [
      { phase: "Security Baseline", detail: "SAST/DAST toolchain, secret scanning, policy-as-code (OPA)" },
      { phase: "Pipeline Architecture", detail: "Multi-stage GitHub Actions with environment promotion gates" },
      { phase: "Compliance Automation", detail: "Evidence collection bots for SOC2 & HIPAA controls" },
      { phase: "Team Enablement", detail: "Runbooks, internal training, on-call rotation setup" },
    ],
    gradient: "from-sky-600/10 via-transparent to-transparent",
    accentColor: "#0ea5e9",
  },
  {
    id: "saas",
    tag: "Generative AI",
    tagColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    company: "DocuMind",
    industry: "SaaS / Legal Tech",
    headline: "LLM-powered contract analysis cuts review time by 83%.",
    challenge:
      "Lawyers spending 6–8 hours per contract review on clause identification. No AI solution could handle domain-specific legal ontology with sufficient accuracy.",
    solution:
      "Fine-tuned Llama 3 on 50k+ legal contracts with RAG over firm's clause library. Spring Boot orchestration layer with streaming responses and citation tracing.",
    duration: "75 days",
    Icon: Rocket,
    metrics: [
      { value: 83, suffix: "%", label: "Review time saved" },
      { value: 94, suffix: "%", label: "Clause accuracy" },
      { value: 12, suffix: "x", label: "Throughput gain" },
    ],
    timeline: [
      { phase: "Domain Data Prep", detail: "50k contract corpus cleaning, annotation, RLHF preference pairs" },
      { phase: "Fine-tuning & RAG", detail: "LoRA fine-tune on Llama 3; Pinecone vector store for clause retrieval" },
      { phase: "Product Integration", detail: "Streaming API with citation links, confidence scores, diff viewer" },
      { phase: "Accuracy Validation", detail: "Blind review by senior attorneys; iterative prompt engineering" },
    ],
    gradient: "from-amber-600/10 via-transparent to-transparent",
    accentColor: "#f59e0b",
  },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────

function useCounter(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) { setCount(0); return; }
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(target % 1 !== 0 ? 2 : 0)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, active, duration]);
  return count;
}

function MetricCounter({ value, suffix, label, active }: Metric & { active: boolean }) {
  const count = useCounter(value, active);
  return (
    <div className="flex flex-col gap-1">
      <span className="text-3xl lg:text-4xl font-bold text-white tabular-nums">
        {value % 1 !== 0 ? count.toFixed(2) : Math.round(count)}
        <span className="text-lg font-medium text-[#3b82f6]">{suffix}</span>
      </span>
      <span className="text-[13px] text-[#8b8b8b] leading-tight">{label}</span>
    </div>
  );
}

// ─── Timeline Step ────────────────────────────────────────────────────────────

function TimelineStep({
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
        <p className="text-[12px] text-[#666] leading-relaxed">{step.detail}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function CaseStudies() {
  const [active, setActive] = useState(caseStudies[0].id);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  const study = caseStudies.find((c) => c.id === active)!;

  // Reset & trigger metrics animation on tab switch
  useEffect(() => {
    setMetricsVisible(false);
    const t = setTimeout(() => setMetricsVisible(true), 200);
    return () => clearTimeout(t);
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
    <section className="w-full py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute pointer-events-none transition-all duration-1000 blur-3xl opacity-[0.06] w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${study.accentColor}, transparent 70%)`,
          top: "20%",
          right: "-10%",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
            <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">
              Case Studies
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Built for outcomes.<br />
            <span className="text-[#8b8b8b]">Measured in results.</span>
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-10">
          {caseStudies.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-300 ${isActive
                  ? "bg-[#121212] border-[#3b82f6]/50 text-white shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                  : "bg-transparent border-[#2e2e2e] text-[#8b8b8b] hover:border-[#444] hover:text-[#ccc]"
                  }`}
              >
                <c.Icon
                  className="w-3.5 h-3.5 transition-colors duration-300"
                  style={{ color: isActive ? study.id === c.id ? c.accentColor : "#3b82f6" : undefined }}
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

        {/* Main Card */}
        <Card className="bg-[#0d0d0d] border-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl p-0">
          <div className="grid lg:grid-cols-[1fr_360px] min-h-[480px]">

            {/* Left — Story */}
            <div className={`relative p-8 md:p-10 lg:p-12 bg-gradient-to-br ${study.gradient} overflow-hidden`}>

              {/* Top row: badges */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
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
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight mb-6 max-w-[520px]">
                {study.headline}
              </h3>

              {/* Challenge / Solution */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold text-[#555] uppercase tracking-widest">
                    The Challenge
                  </span>
                  <p className="text-[14px] text-[#8b8b8b] leading-relaxed">{study.challenge}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold text-[#555] uppercase tracking-widest">
                    Our Approach
                  </span>
                  <p className="text-[14px] text-[#8b8b8b] leading-relaxed">{study.solution}</p>
                </div>
              </div>

              {/* Metrics */}
              <div
                ref={metricsRef}
                className="flex flex-wrap gap-8 pt-8 border-t border-[#1e1e1e]"
              >
                {study.metrics.map((m, i) => (
                  <MetricCounter key={i} {...m} active={metricsVisible} />
                ))}
              </div>

              {/* View full case study link */}
              <div className="mt-8">
                <button
                  className="group inline-flex items-center gap-1.5 text-[13px] font-medium transition-all duration-300"
                  style={{ color: study.accentColor }}
                >
                  View full case study
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right — Timeline */}
            <div className="border-t lg:border-t-0 lg:border-l border-[#1e1e1e] p-8 md:p-10 flex flex-col gap-0">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-4 h-4 text-[#555]" />
                <span className="text-[12px] font-semibold text-[#555] uppercase tracking-widest">
                  Engagement Timeline
                </span>
              </div>

              <div className="flex flex-col">
                {study.timeline.map((step, i) => (
                  <TimelineStep
                    key={i}
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
                <p className="text-[12px] text-[#666] leading-relaxed mb-3">
                  Every engagement starts with a no-commitment discovery call.
                </p>
                <button className="inline-flex items-center gap-1 text-[12px] font-semibold text-white hover:gap-2 transition-all duration-200">
                  Start a conversation <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </Card>

        {/* Bottom Row: navigation dots + label */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            {caseStudies.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
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
            {caseStudies.findIndex((c) => c.id === active) + 1} / {caseStudies.length} case studies
          </span>
        </div>

      </div>
    </section>
  );
}
