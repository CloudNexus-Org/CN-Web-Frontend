"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
const stats = [
  { value: "527", suffix: "+", label: "successful IT projects delivered" },
  { value: "10", suffix: "+ yrs", label: "of proven expertise in scaling businesses" },
  { value: "90", suffix: "%", label: "reduction in hiring timelines" },
  { value: "<1", suffix: "%", label: "candidate drop-off ratio for contract roles" },
  { value: "8.5", suffix: "/10", label: "NPS Score" },
];

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  connections: number[];
}

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -200, y: -200 });
  const nodesRef = useRef<Node[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -200, y: -200 };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.scale(dpr, dpr);
      return { w, h };
    }

    const dims = resize();
    if (!dims) return;
    let { w, h } = dims;

    const nodeCount = 50;
    const connectionDist = 160;
    const mouseRadius = 140;
    const mouseForce = 0.03;

    if (nodesRef.current.length === 0) {
      const nodes: Node[] = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 2 + Math.random() * 2.5,
          pulsePhase: Math.random() * Math.PI * 2,
          connections: [],
        });
      }
      nodesRef.current = nodes;
    }

    const nodes = nodesRef.current;
    let time = 0;

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      time += 0.008;

      const mouse = mouseRef.current;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));

        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius && dist > 0) {
          const force = (1 - dist / mouseRadius) * mouseForce;
          n.vx += dx * force;
          n.vy += dy * force;
        }

        n.vx *= 0.99;
        n.vy *= 0.99;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.35;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = isDark
              ? `rgba(129, 140, 248, ${alpha})`
              : `rgba(79, 70, 229, ${alpha * 0.7})`;
            ctx!.lineWidth = 0.8;
            ctx!.stroke();
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(time * 2 + n.pulsePhase) * 0.3 + 1;
        const r = n.radius * pulse;

        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const nearMouse = dist < mouseRadius;

        if (nearMouse) {
          const glowSize = r * 4;
          const gradient = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowSize);
          gradient.addColorStop(0, isDark ? "rgba(129, 140, 248, 0.3)" : "rgba(79, 70, 229, 0.2)");
          gradient.addColorStop(1, "transparent");
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, glowSize, 0, Math.PI * 2);
          ctx!.fillStyle = gradient;
          ctx!.fill();
        }

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = nearMouse
          ? isDark
            ? "rgba(165, 180, 252, 0.9)"
            : "rgba(79, 70, 229, 0.85)"
          : isDark
            ? "rgba(129, 140, 248, 0.5)"
            : "rgba(79, 70, 229, 0.4)";
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      const d = resize();
      if (d) {
        w = d.w;
        h = d.h;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full cursor-crosshair"
    />
  );
}

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
    <section className="w-full relative overflow-hidden">
      <div className="absolute inset-0">
        <NetworkCanvas />
      </div>

      <div className="absolute inset-0 bg-white/70 dark:bg-black/70 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 md:px-8 relative z-10 py-20 md:py-28">
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
