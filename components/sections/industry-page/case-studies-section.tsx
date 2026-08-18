"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  ChevronRight,
  Clock,
  ChevronLeft,
} from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { Project, Metric } from "./types";

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
      setCount(
        parseFloat((eased * target).toFixed(target % 1 !== 0 ? 2 : 0))
      );
      if (progress < 1) rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [target, active, duration]);

  return count;
}

function MetricCounter({
  value,
  suffix,
  label,
  active,
  accentColor,
}: Metric & { active: boolean; accentColor: string }) {
  const count = useCounter(value, active);
  return (
    <motion.div
      className="flex flex-col gap-1"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 10 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-3xl lg:text-4xl font-bold text-foreground tabular-nums">
        {value % 1 !== 0 ? count.toFixed(2) : Math.round(count)}
        <span className="text-lg font-medium" style={{ color: accentColor }}>
          {suffix}
        </span>
      </span>
      <span className="text-[13px] text-muted-foreground leading-tight">
        {label}
      </span>
    </motion.div>
  );
}

export function CaseStudiesSection({
  projects: rawProjects,
}: {
  projects: Project[];
}) {
  const projects = useTranslatedData(rawProjects);
  const [activeIdx, setActiveIdx] = useState(0);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  const study = projects[activeIdx];

  const goNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const goPrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    setMetricsVisible(false);
    const t = setTimeout(() => setMetricsVisible(true), 250);
    return () => clearTimeout(t);
  }, [activeIdx]);

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

  if (projects.length === 0) return null;

  return (
    <div className="w-full px-6 pt-20 pb-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Our Work
          </h2>
          <p className="text-black/50 dark:text-white/50 font-medium">
            Projects we have delivered in this industry.
          </p>
        </motion.div>

        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {projects.map((p, i) => {
            const isActive = i === activeIdx;
            return (
              <motion.button
                key={p.id}
                onClick={() => setActiveIdx(i)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl border text-[13px] font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "border-transparent text-foreground shadow-lg"
                    : "bg-transparent border-black/[0.08] dark:border-white/[0.08] text-black/50 dark:text-white/50 hover:border-black/20 dark:hover:border-white/20 hover:text-black/70 dark:hover:text-white/70"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: `${p.accentColor}12`,
                        borderColor: `${p.accentColor}40`,
                        boxShadow: `0 4px 20px ${p.accentColor}15`,
                      }
                    : {}
                }
              >
                {p.company}
                {isActive && (
                  <motion.span
                    layoutId="activeProjectDot"
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: p.accentColor }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="bg-white dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl p-0 transition-shadow duration-500 hover:shadow-3xl">
              <div className="grid lg:grid-cols-[1fr_380px] min-h-[500px]">
                <div className="relative p-8 md:p-10 lg:p-12 overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
                    style={{ background: study.accentColor }}
                  />

                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      <Badge
                        className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md border ${study.tagColor || ""}`}
                        style={{
                          backgroundColor: `${study.accentColor}15`,
                          color: study.accentColor,
                          borderColor: `${study.accentColor}30`,
                        }}
                      >
                        {study.tag}
                      </Badge>
                      <Badge className="text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-black/[0.08] dark:border-white/[0.08] bg-transparent text-black/50 dark:text-white/50">
                        {study.industry}
                      </Badge>
                      <div className="ml-auto flex items-center gap-1.5 text-[12px] text-black/40 dark:text-white/40">
                        <Clock className="w-3 h-3" />
                        {study.duration}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-6 max-w-[520px]">
                      {study.headline}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div className="flex flex-col gap-2">
                        <span
                          className="text-[11px] font-bold uppercase tracking-widest"
                          style={{ color: `${study.accentColor}99` }}
                        >
                          The Challenge
                        </span>
                        <p className="text-[14px] font-medium text-black/50 dark:text-white/50 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span
                          className="text-[11px] font-bold uppercase tracking-widest"
                          style={{ color: `${study.accentColor}99` }}
                        >
                          Our Approach
                        </span>
                        <p className="text-[14px] font-medium text-black/50 dark:text-white/50 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div
                      ref={metricsRef}
                      className="flex flex-wrap gap-8 pt-8 border-t border-black/[0.06] dark:border-white/[0.06]"
                    >
                      {study.metrics.map((m, i) => (
                        <MetricCounter
                          key={i}
                          {...m}
                          active={metricsVisible}
                          accentColor={study.accentColor}
                        />
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/our-work"
                        className="group inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-300"
                        style={{ color: study.accentColor }}
                      >
                        View full case study
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="border-t lg:border-t-0 lg:border-l border-black/[0.06] dark:border-white/[0.06] p-8 md:p-10 flex flex-col gap-0 bg-black/[0.01] dark:bg-white/[0.01]">
                  <div className="flex items-center gap-2 mb-8">
                    <TrendingUp
                      className="w-4 h-4"
                      style={{ color: `${study.accentColor}80` }}
                    />
                    <span className="text-[12px] font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">
                      Engagement Timeline
                    </span>
                  </div>

                  <div className="flex flex-col">
                    {study.timeline.map((step, i) => (
                      <div
                        key={i}
                        className="flex gap-4 transition-all duration-500"
                        style={{
                          opacity: metricsVisible ? 1 : 0,
                          transform: metricsVisible
                            ? "translateX(0)"
                            : "translateX(-8px)",
                          transitionDelay: metricsVisible
                            ? `${i * 120}ms`
                            : "0ms",
                        }}
                      >
                        <div className="flex flex-col items-center gap-0 pt-1">
                          <div
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-colors duration-500 ring-2"
                            style={{
                              backgroundColor: metricsVisible
                                ? study.accentColor
                                : "transparent",
                              outlineColor: metricsVisible
                                ? `${study.accentColor}30`
                                : "#33333330",
                            }}
                          />
                          {i < study.timeline.length - 1 && (
                            <div
                              className="w-px flex-1 mt-1 min-h-[2rem] transition-colors duration-700"
                              style={{
                                backgroundColor: metricsVisible
                                  ? `${study.accentColor}25`
                                  : "#22222220",
                                transitionDelay: `${i * 120 + 300}ms`,
                              }}
                            />
                          )}
                        </div>
                        <div className="pb-5">
                          <p className="text-[13px] font-semibold text-foreground mb-0.5">
                            {step.phase}
                          </p>
                          <p className="text-[12px] font-medium text-black/40 dark:text-white/40 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/918793830447?text=${encodeURIComponent(
                      "Hi CloudNexus! I'm interested in starting a conversation about a discovery call."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto p-5 rounded-xl border transition-all duration-500 block group cursor-pointer hover:opacity-90"
                    style={{
                      borderColor: `${study.accentColor}20`,
                      background: `${study.accentColor}06`,
                    }}
                  >
                    <p className="text-[12px] font-medium text-black/40 dark:text-white/40 leading-relaxed mb-3">
                      Every engagement starts with a no-commitment discovery
                      call.
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-[12px] font-bold group-hover:gap-2 transition-all duration-200"
                      style={{ color: study.accentColor }}
                    >
                      Start a conversation{" "}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className="w-8 h-8 rounded-full border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center text-black/40 dark:text-white/40 hover:text-foreground hover:border-black/20 dark:hover:border-white/20 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeIdx ? "28px" : "8px",
                    height: "8px",
                    borderRadius: "9999px",
                    backgroundColor:
                      i === activeIdx
                        ? study.accentColor
                        : "rgba(128,128,128,0.2)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="w-8 h-8 rounded-full border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center text-black/40 dark:text-white/40 hover:text-foreground hover:border-black/20 dark:hover:border-white/20 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <span className="text-[12px] font-medium text-black/40 dark:text-white/40">
            {activeIdx + 1} / {projects.length} projects
          </span>
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/our-work">
            <Button
              size="lg"
              className="rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 px-8 font-semibold shadow-lg"
            >
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
