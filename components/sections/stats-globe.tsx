"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "527", suffix: "+", label: "successful IT projects delivered" },
  { value: "10", suffix: "+ yrs", label: "of proven expertise in scaling businesses" },
  { value: "90", suffix: "%", label: "reduction in hiring timelines" },
  { value: "<1", suffix: "%", label: "candidate drop-off ratio for contract roles" },
  { value: "8.5", suffix: "/10", label: "NPS Score" },
];

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          if (value.includes("<") || value.includes("+")) {
            setDisplayValue(value);
            return;
          }

          const target = parseFloat(value);
          const isDecimal = value.includes(".");
          const duration = 1500;
          const start = performance.now();

          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            setDisplayValue(isDecimal ? current.toFixed(1) : Math.floor(current).toString());
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex items-baseline justify-center gap-0.5">
      <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white tabular-nums">
        {displayValue}
      </span>
      <span className="text-lg md:text-xl lg:text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
        {suffix}
      </span>
    </div>
  );
}

export function StatsGlobe() {
  return (
    <section className="w-full relative bg-white dark:bg-black py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-4">
            By The Numbers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white">
            Proven Track Record
          </h2>
          <p className="mt-4 text-sm md:text-base text-black/50 dark:text-white/40 max-w-lg mx-auto">
            A decade of delivering results that speak for themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`group relative rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.04] backdrop-blur-md p-5 md:p-6 text-center transition-all duration-300 hover:border-indigo-500/20 dark:hover:border-indigo-400/15 hover:shadow-xl hover:shadow-indigo-500/[0.06] hover:bg-white dark:hover:bg-white/[0.07] ${
                index === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="mt-2 h-px w-8 mx-auto bg-indigo-500/20 dark:bg-indigo-400/15" />
                <p className="text-[11px] md:text-xs text-black/50 dark:text-white/40 leading-snug mt-3">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
