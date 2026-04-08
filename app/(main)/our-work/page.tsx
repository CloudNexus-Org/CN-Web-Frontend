"use client";

import { useState, useEffect, useRef, useMemo, memo, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  ChevronRight,
  Clock,
} from "lucide-react";
import { projects, industries, type Metric, type TimelineStep } from "./data";

// ─── Hooks ─────────────────────────────────────────────────────────────────────

function useCounter(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (!active) { setCount(0); return; }
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 2 : 0)));
      if (progress < 1) rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, [target, active, duration]);

  return count;
}

// ─── Memoized Sub-components ────────────────────────────────────────────────────

const MetricCounter = memo(function MetricCounter({ value, suffix, label, active }: Metric & { active: boolean }) {
  const count = useCounter(value, active);
  return (
    <div className="flex flex-col gap-1">
      <span className="text-3xl lg:text-4xl font-bold text-foreground tabular-nums">
        {value % 1 !== 0 ? count.toFixed(2) : Math.round(count)}
        <span className="text-lg font-medium text-[#215B97]">{suffix}</span>
      </span>
      <span className="text-[13px] text-muted-foreground leading-tight">{label}</span>
    </div>
  );
});

const TimelineStepComp = memo(function TimelineStepComp({
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
          className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-500 ${!active ? "bg-black/20 dark:bg-white/20" : ""}`}
          style={active ? { backgroundColor: accentColor } : {}}
        />
        {index < 3 && (
          <div
            className={`w-px flex-1 mt-1 min-h-[2rem] transition-colors duration-700 ${!active ? "bg-black/10 dark:bg-white/10" : ""}`}
            style={{
              ...(active ? { backgroundColor: `${accentColor}40` } : {}),
              transitionDelay: `${index * 120 + 300}ms`,
            }}
          />
        )}
      </div>
      <div className="pb-5">
        <p className="text-[13px] font-semibold text-foreground mb-0.5">{step.phase}</p>
        <p className="text-[12px] text-muted-foreground leading-relaxed font-medium">{step.detail}</p>
      </div>
    </div>
  );
});

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function OurWorkPage() {
  const [activeIndustry, setActiveIndustry] = useState("all");
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => activeIndustry === "all"
      ? projects
      : projects.filter((p) => p.industrySlug === activeIndustry),
    [activeIndustry]
  );

  const study = useMemo(
    () => filtered.find((p) => p.id === activeProject) || filtered[0],
    [filtered, activeProject]
  );

  useEffect(() => {
    if (filtered.length > 0 && !filtered.find((p) => p.id === activeProject)) {
      setActiveProject(filtered[0].id);
    }
  }, [activeIndustry, filtered, activeProject]);

  useEffect(() => {
    setMetricsVisible(false);
    const t = setTimeout(() => setMetricsVisible(true), 200);
    return () => clearTimeout(t);
  }, [activeProject]);

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

  const handleIndustryClick = useCallback((slug: string) => {
    setActiveIndustry(slug);
  }, []);

  const handleProjectClick = useCallback((id: string) => {
    setActiveProject(id);
  }, []);

  if (!study) return null;

  return (
    <section className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <div className="relative w-full pt-24 pb-16 px-6 md:px-8 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#215B97]/10 border border-[#215B97]/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#215B97] shadow-[0_0_8px_#215B97] animate-pulse" />
            <span className="text-[13px] font-medium text-[#215B97] tracking-wide uppercase">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            Our Work
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed font-medium">
            Real projects, real impact. Explore how we&apos;ve helped businesses across industries build scalable digital solutions.
          </p>
          <div className="flex items-center gap-8 mt-8 pt-8 border-t border-border">
            <div>
              <span className="text-2xl font-bold text-foreground">{projects.length}+</span>
              <p className="text-[12px] text-muted-foreground mt-0.5">Projects Delivered</p>
            </div>
            <div className="w-px h-10 bg-card border-border" />
            <div>
              <span className="text-2xl font-bold text-foreground">{industries.length - 1}</span>
              <p className="text-[12px] text-muted-foreground mt-0.5">Industries Served</p>
            </div>
            <div className="w-px h-10 bg-card border-border" />
            <div>
              <span className="text-2xl font-bold text-foreground">98%</span>
              <p className="text-[12px] text-muted-foreground mt-0.5">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Filter */}
      <div className="w-full px-6 md:px-8 pb-6 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Filter by Industry</p>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {industries.map((ind) => {
              const isActive = ind.slug === activeIndustry;
              const count = ind.slug === "all" ? projects.length : projects.filter((p) => p.industrySlug === ind.slug).length;
              return (
                <button
                  key={ind.slug}
                  onClick={() => handleIndustryClick(ind.slug)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-[13px] font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${ isActive ? "bg-black/[0.06] dark:bg-white/[0.06] border-black/20 dark:border-white/20 text-black dark:text-white" : "bg-transparent border-border text-muted-foreground hover:border-black/30 dark:hover:border-[#444] hover:text-black dark:hover:text-[#aaa]" }`}
                >
                  <ind.Icon className="w-3.5 h-3.5" />
                  {ind.label}
                  <span className={`text-[11px] px-1.5 py-0.5 rounded-md ${isActive ? "bg-black/10 dark:bg-white/10 text-black/70 dark:text-white/70" : "bg-black/[0.03] dark:bg-white/[0.03] text-black/40 dark:text-[#555]"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Tabs */}
      <div className="w-full px-6 md:px-8 pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {filtered.map((p) => {
              const isActive = p.id === activeProject;
              return (
                <button
                  key={p.id}
                  onClick={() => handleProjectClick(p.id)}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg border text-[13px] font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${ isActive ? "border-transparent text-black dark:text-white" : "bg-transparent border-border text-muted-foreground hover:border-black/30 dark:hover:border-[#444] hover:text-black dark:hover:text-[#ccc]" }`}
                  style={isActive ? { backgroundColor: `${p.accentColor}15`, borderColor: `${p.accentColor}40` } : {}}
                >
                  <p.Icon
                    className="w-3.5 h-3.5 transition-colors duration-300"
                    style={{ color: isActive ? p.accentColor : undefined }}
                  />
                  {p.company}
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: p.accentColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Project Card */}
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
                    <p className="text-[14px] text-muted-foreground leading-relaxed font-medium">{study.challenge}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">Our Approach</span>
                    <p className="text-[14px] text-muted-foreground leading-relaxed font-medium">{study.solution}</p>
                  </div>
                </div>

                <div ref={metricsRef} className="flex flex-wrap gap-8 pt-8 border-t border-border">
                  {study.metrics.map((m) => (
                    <MetricCounter key={`${study.id}-${m.label}`} {...m} active={metricsVisible} />
                  ))}
                </div>

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

              <div className="border-t lg:border-t-0 lg:border-l border-border p-8 md:p-10 flex flex-col gap-0">
                <div className="flex items-center gap-2 mb-8">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-[12px] font-semibold text-muted-foreground uppercase tracking-widest">
                    Engagement Timeline
                  </span>
                </div>

                <div className="flex flex-col">
                  {study.timeline.map((step, i) => (
                    <TimelineStepComp
                      key={`${study.id}-${step.phase}`}
                      step={step}
                      index={i}
                      active={metricsVisible}
                      accentColor={study.accentColor}
                    />
                  ))}
                </div>

                <div
                  className="mt-auto p-4 rounded-xl border transition-all duration-500"
                  style={{ borderColor: `${study.accentColor}30`, background: `${study.accentColor}08` }}
                >
                  <p className="text-[12px] text-muted-foreground leading-relaxed font-medium mb-3">
                    Every engagement starts with a no-commitment discovery call.
                  </p>
                  <button className="inline-flex items-center gap-1 text-[12px] font-semibold text-foreground hover:gap-2 transition-all duration-200">
                    Start a conversation <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation dots */}
          <div className="flex items-center justify-between mt-8 pb-20">
            <div className="flex items-center gap-2">
              {filtered.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleProjectClick(p.id)}
                  className={`transition-all duration-300 ${p.id !== activeProject ? "bg-black/20 dark:bg-white/20" : ""}`}
                  style={{
                    width: p.id === activeProject ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "9999px",
                    ...(p.id === activeProject ? { backgroundColor: study.accentColor } : {}),
                  }}
                />
              ))}
            </div>
            <span className="text-[12px] text-muted-foreground">
              {filtered.findIndex((p) => p.id === activeProject) + 1} / {filtered.length} projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
