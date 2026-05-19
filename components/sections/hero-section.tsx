"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TypingAnimation } from '../ui/typing-animation';
import { Component, type ReactNode, useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '@/lib/i18n/context';

const SPLINE_DARK = 'https://prod.spline.design/s5qNGeR6oT0MDO0i/scene.splinecode';
const SPLINE_LIGHT = 'https://prod.spline.design/GKBZHlmODH6AWg9T/scene.splinecode';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-950/20 to-transparent animate-pulse rounded-lg" />
  ),
});

function SplineFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4EB3E8]/20 via-indigo-500/10 to-transparent animate-pulse" />
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#1a4a7a]/15 via-transparent to-indigo-500/10 animate-pulse delay-300" />
        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#4EB3E8]/10 to-transparent animate-pulse delay-700" />
      </div>
    </div>
  );
}

class SplineErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <SplineFallback />;
    return this.props.children;
  }
}

function SafeSpline({ scene, className }: { scene: string; className?: string }) {
  const [supported, setSupported] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) setSupported(false);
    } catch {
      setSupported(false);
    }
  }, []);

  useEffect(() => {
    if (!supported) return;

    const handleRejection = (e: PromiseRejectionEvent) => {
      const msg = e.reason?.message || String(e.reason);
      if (msg && (msg.includes('spline') || msg.includes('scene.splinecode') || msg.includes('Failed to fetch'))) {
        setLoadError(true);
        e.preventDefault();
      }
    };
    const handleError = () => setLoadError(true);
    window.addEventListener('unhandledrejection', handleRejection);
    window.addEventListener('error', handleError);
    return () => {
      window.removeEventListener('unhandledrejection', handleRejection);
      window.removeEventListener('error', handleError);
    };
  }, [supported]);

  if (!supported || loadError) return <SplineFallback />;

  return (
    <SplineErrorBoundary>
      <Spline
        scene={scene}
        className={className}
      />
    </SplineErrorBoundary>
  );
}

function useAnimatedCount(target: number, active: boolean, delay = 0, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      let raf: number;
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(eased * target));
        if (progress < 1) raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timeout);
  }, [active, target, delay, duration]);

  return count;
}

function HeroStats() {
  const { t } = useTranslation();
  const statsData = [
    { target: 100, suffix: "+", label: t("hero.stat.projects"), delay: 0 },
    { target: 10, suffix: `+ ${t("hero.stat.yrs", "yrs")}`, label: t("hero.stat.expertise"), delay: 200 },
    { target: 90, suffix: "+", label: t("hero.stat.hiring"), delay: 400 },
  ];
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count1 = useAnimatedCount(100, visible, 0);
  const count2 = useAnimatedCount(10, visible, 200);
  const count3 = useAnimatedCount(90, visible, 400);
  const counts = [count1, count2, count3];

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[1200ms] fill-mode-both"
    >
      {statsData.map((data, i) => (
        <div key={data.label} className="contents">
          {i > 0 && (
            <div
              className="w-px h-10 bg-border transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'scaleY(1)' : 'scaleY(0)',
                transitionDelay: `${data.delay + 100}ms`,
              }}
            />
          )}
          <div
            className="flex flex-col items-center lg:items-start transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transitionDelay: `${data.delay}ms`,
            }}
          >
            <span className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
              {counts[i]}
              <span className="text-[#4EB3E8]">{data.suffix}</span>
            </span>
            <span className="text-[11px] text-muted-foreground mt-0.5">{data.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const splineScene = mounted && resolvedTheme === 'light' ? SPLINE_LIGHT : SPLINE_DARK;

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side (Content) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 relative z-10 w-full">

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.15] md:leading-[1.15] lg:leading-[1.15]">
              <span className="block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both text-[7vw] sm:text-5xl lg:text-6xl pb-1 md:pb-2 whitespace-nowrap">
                {t("hero.title1")}
              </span>
              <span className="flex flex-wrap justify-center lg:justify-start gap-x-3 text-muted-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both text-[7.5vw] sm:text-5xl lg:text-6xl">
                <span className="text-[#4EB3E8]">{t("hero.title2")}</span>
                <span
                  className="text-[#4EB3E8] pb-1 glitch-text"
                  data-text={t("hero.title3")}
                >
                  {t("hero.title3")}
                </span>
              </span>
            </h1>

            {/* Description */}
            <div className="relative max-w-xl mx-auto lg:mx-0 w-full flex flex-col items-center lg:items-start pb-2 sm:pb-4 min-h-[96px] sm:min-h-[80px]">
              <span className="invisible text-center lg:text-left text-base md:text-lg font-medium leading-relaxed select-none pointer-events-none">
              {t("hero.description")}
              <span className="inline-block">|</span>
              </span>
              <TypingAnimation
                delay={700}
                duration={25}
                className="absolute inset-x-0 top-0 text-center lg:text-left text-base md:text-lg font-medium text-muted-foreground leading-relaxed"
              >
                {t("hero.description")}
              </TypingAnimation>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-both">
              <Link href="/resources/free-consultation">
                <Button size="lg" className="w-full sm:w-auto rounded-sm bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80">
                  {t("hero.cta.connect")}
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-sm bg-background/50 backdrop-blur-sm border-border/50 hover:bg-accent/50 text-primary hover:text-primary">
                  {t("hero.cta.knowMore")}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <HeroStats />
          </div>

          {/* Right Side (Visual) */}
          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 lg:-right-32 lg:scale-110 pointer-events-none sm:pointer-events-auto">
              <SafeSpline
                key={splineScene}
                scene={splineScene}
                className="w-full h-full object-contain"
              />

              <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none z-20" />
              <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none z-20" />
              <div className="absolute inset-x-0 top-0 h-24 md:h-40 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none z-20" />
              <div className="absolute inset-x-0 bottom-0 h-24 md:h-40 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none z-20" />
              {/* Watermark cover  -  bottom-right corner */}
              <div className="absolute bottom-0 right-0 w-48 h-16 bg-gradient-to-tl from-white via-white/95 to-transparent dark:from-black dark:via-black/95 pointer-events-none z-30" />
            </div>
          </div>

        </div>
      </div>

      <motion.div
        style={{ y: bgY, background: 'radial-gradient(circle, oklch(0.55 0.245 262 / 12%) 0%, transparent 70%)' }}
        className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none w-[700px] h-[700px]"
      />
    </section>
  );
}
