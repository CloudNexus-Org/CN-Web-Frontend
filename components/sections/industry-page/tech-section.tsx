"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { IndustryTechProps } from "./types";

export function IndustryTechSection({
  heading: rawHeading = "Technologies We Leverage",
  subtitle: rawSubtitle,
  technologies: rawTechnologies,
  accentColor = "#4EB3E8",
}: IndustryTechProps) {
  const heading = useTranslatedData(rawHeading);
  const subtitle = useTranslatedData(rawSubtitle);
  const technologies = useTranslatedData(rawTechnologies);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  if (!technologies || technologies.length === 0) return null;

  const scroll = (dir: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = 380;
    scrollContainerRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div ref={sectionRef} className="relative border-b border-black/[0.04] dark:border-white/[0.04] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header with parallax */}
        <motion.div
          className="text-center mb-14"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{heading}</h2>
          {subtitle && (
            <p className="mt-4 text-base font-medium text-black/45 dark:text-white/45 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Scroll arrows */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-[#f0f0f0] hover:bg-[#e5e5e5] dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-black/[0.06] dark:border-white/[0.08]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border"
            style={{
              background: accentColor,
              borderColor: accentColor,
              color: "#fff",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Horizontal scroll carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent" />

          <motion.div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
          >
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              const isHovered = hoveredIdx === i;

              return (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, x: 60 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.12 * i }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="flex-shrink-0 w-[320px] sm:w-[350px] relative rounded-2xl p-7 overflow-hidden transition-all duration-500 group"
                  style={{
                    scrollSnapAlign: "start",
                    transform: isHovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
                  }}
                >
                  {/* Card background */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      isHovered
                        ? "bg-white shadow-2xl dark:bg-[#0c1322]"
                        : "bg-[#f5f5f5] dark:bg-[#0a0f1a]"
                    }`}
                    style={{
                      border: isHovered
                        ? `1.5px solid ${accentColor}50`
                        : "1.5px solid rgba(0,0,0,0.04)",
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl hidden dark:block pointer-events-none"
                    style={{
                      border: isHovered
                        ? `1.5px solid ${accentColor}50`
                        : "1.5px solid rgba(255,255,255,0.06)",
                    }}
                  />

                  {/* Accent gradient glow */}
                  <div
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${accentColor}15, transparent 70%)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                  {/* Top accent stripe */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                    }}
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Step number */}
                  <div
                    className="absolute bottom-4 right-5 text-[72px] font-black leading-none select-none transition-all duration-500"
                    style={{
                      color: isHovered ? `${accentColor}12` : `${accentColor}06`,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with pulse ring */}
                    <div className="relative mb-6 w-14 h-14">
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{ border: `2px solid ${accentColor}` }}
                        initial={false}
                        animate={{
                          opacity: isHovered ? 0.25 : 0,
                          scale: isHovered ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      <div
                        className="relative h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500"
                        style={{
                          background: isHovered ? `${accentColor}18` : `${accentColor}0A`,
                          border: `1px solid ${isHovered ? `${accentColor}35` : `${accentColor}15`}`,
                        }}
                      >
                        <Icon
                          className="w-6 h-6 transition-all duration-500"
                          style={{
                            color: accentColor,
                            transform: isHovered ? "scale(1.1)" : "scale(1)",
                          }}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold tracking-tight mb-2.5 transition-colors duration-500">
                      <span
                        className={isHovered ? "" : "text-black dark:text-white"}
                        style={{ color: isHovered ? accentColor : undefined }}
                      >
                        {tech.title}
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-medium leading-relaxed text-black/50 dark:text-white/45 pr-8">
                      {tech.description}
                    </p>

                    {/* Dot indicators on hover */}
                    <motion.div
                      className="mt-5 flex gap-1.5"
                      initial={false}
                      animate={{ opacity: isHovered ? 1 : 0.3, y: isHovered ? 0 : 4 }}
                      transition={{ duration: 0.35 }}
                    >
                      {[...Array(3)].map((_, d) => (
                        <div
                          key={d}
                          className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                          style={{
                            background: d === 0 && isHovered ? accentColor : `${accentColor}30`,
                            transform: isHovered ? "scale(1)" : "scale(0.7)",
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
