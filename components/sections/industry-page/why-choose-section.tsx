"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { IndustryWhyChooseProps } from "./types";

function AnimatedCounter({ value, suffix = "", isInView }: { value: number; suffix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function IndustryWhyChooseSection({
  heading: rawHeading = "Why Choose Us",
  subtitle: rawSubtitle,
  items: rawItems,
  accentColor = "#4EB3E8",
}: IndustryWhyChooseProps) {
  const heading = useTranslatedData(rawHeading);
  const subtitle = useTranslatedData(rawSubtitle);
  const items = useTranslatedData(rawItems);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);

  if (!items || items.length === 0) return null;

  const activeItem = items[activeIdx];
  const ActiveIcon = activeItem.icon;

  return (
    <div ref={ref} className="border-b border-black/[0.04] dark:border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{heading}</h2>
          {subtitle && (
            <p className="mt-4 text-base font-medium text-black/45 dark:text-white/45 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Main layout: left showcase + right selector grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Active Item Showcase */}
          <motion.div
            className="lg:col-span-2 relative rounded-3xl overflow-hidden p-8 min-h-[340px] flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: `linear-gradient(145deg, ${accentColor}, ${accentColor}BB)` }}
          >
            {/* Decorative circles */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full"
              style={{ background: "rgba(255,255,255,0.04)" }}
            />
            <div
              className="absolute top-1/2 right-8 w-20 h-20 rounded-full"
              style={{ background: "rgba(255,255,255,0.03)" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 flex flex-col h-full justify-between"
              >
                <div>
                  {/* Step badge */}
                  <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-xs font-semibold text-white/90 tracking-wider uppercase">
                      Reason {String(activeIdx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm">
                    <ActiveIcon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{activeItem.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed max-w-sm">{activeItem.description}</p>
                </div>

                {/* Progress indicator */}
                <div className="mt-8 flex items-center gap-2">
                  {items.map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-1 rounded-full cursor-pointer"
                      style={{
                        width: i === activeIdx ? 32 : 12,
                        background: i === activeIdx ? "#fff" : "rgba(255,255,255,0.3)",
                      }}
                      onClick={() => setActiveIdx(i)}
                      whileHover={{ scale: 1.2 }}
                      layout
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Selector Cards Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {items.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeIdx === i;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  onClick={() => setActiveIdx(i)}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`relative rounded-2xl p-5 cursor-pointer overflow-hidden transition-all duration-400 group border-2 ${
                    isActive
                      ? "border-transparent bg-white shadow-lg dark:bg-[#0c1322]"
                      : "border-transparent bg-[#f5f5f5] hover:bg-white hover:shadow-md dark:bg-[#0a0f1a] dark:hover:bg-[#0c1322]"
                  }`}
                  style={{
                    borderColor: isActive ? accentColor : undefined,
                    boxShadow: isActive
                      ? `0 8px 30px ${accentColor}15`
                      : undefined,
                  }}
                >

                  {/* Large faded number */}
                  <div
                    className="absolute -top-1 -right-1 text-[64px] font-black leading-none select-none transition-all duration-400"
                    style={{
                      color: isActive ? `${accentColor}18` : `${accentColor}0A`,
                    }}
                  >
                    0{i + 1}
                  </div>

                  {/* Active left bar */}
                  <motion.div
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                    style={{ background: accentColor }}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-400"
                        style={{
                          background: isActive ? `${accentColor}15` : `${accentColor}08`,
                          border: `1px solid ${isActive ? `${accentColor}30` : `${accentColor}12`}`,
                        }}
                      >
                        <Icon
                          className="w-5 h-5 transition-colors duration-400"
                          style={{ color: isActive ? accentColor : `${accentColor}90` }}
                          strokeWidth={1.5}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4
                          className="text-sm font-bold tracking-tight mb-1 transition-colors duration-400"
                          style={{ color: isActive ? accentColor : undefined }}
                        >
                          <span className={isActive ? "" : "text-black dark:text-white"}>{item.title}</span>
                        </h4>
                        <p className="text-xs font-medium leading-relaxed text-black/50 dark:text-white/45 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover arrow indicator */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 right-4"
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ color: accentColor }}
                      >
                        <path
                          d="M6 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            { value: 100, suffix: "+", label: "Projects Delivered" },
            { value: 98, suffix: "%", label: "Client Retention" },
            { value: 200, suffix: "+", label: "Expert Engineers" },
            { value: 15, suffix: "+", label: "Industries Served" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="relative rounded-xl p-4 text-center overflow-hidden group/stat"
            >
              <div className="absolute inset-0 bg-[#f5f5f5] dark:bg-[#0a0f1a] rounded-xl border border-black/[0.06] dark:border-white/[0.06]" />
              <div className="relative z-10">
                <div
                  className="text-2xl md:text-3xl font-black tracking-tight"
                  style={{ color: accentColor }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                </div>
                <div className="text-xs font-semibold text-black/40 dark:text-white/40 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
