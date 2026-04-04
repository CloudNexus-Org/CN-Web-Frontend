"use client";

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { TypingAnimation } from '../ui/typing-animation';
import { Component, type ReactNode, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

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
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent animate-pulse" />
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-blue-600/15 via-transparent to-indigo-500/10 animate-pulse delay-300" />
        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent animate-pulse delay-700" />
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
      const msg = e.reason?.message;
      if (msg && (msg.includes('spline') || msg.includes('scene.splinecode'))) {
        setLoadError(true);
        e.preventDefault();
      }
    };
    window.addEventListener('unhandledrejection', handleRejection);
    return () => window.removeEventListener('unhandledrejection', handleRejection);
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

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount resolvedTheme is undefined (SSR) — default to dark
  const splineScene = mounted && resolvedTheme === 'light' ? SPLINE_LIGHT : SPLINE_DARK;

  return (
    <section className="relative w-full overflow-hidden py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side (Content) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 relative z-10 w-full">

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.15] md:leading-[1.15] lg:leading-[1.15]">
              <span className="block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both whitespace-nowrap text-[8.5vw] sm:text-5xl lg:text-6xl pb-1 md:pb-2">
                Pioneering Innovation.
              </span>
              <span className="flex flex-wrap justify-center lg:justify-start gap-x-3 text-muted-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both text-[8.5vw] sm:text-5xl lg:text-6xl">
                <span>with Smart</span>
                <span
                  className="text-foreground pb-1 glitch-text"
                  data-text="Solutions."
                >
                  Solutions.
                </span>
              </span>
            </h1>

            {/* Description */}
            <div className="relative max-w-xl mx-auto lg:mx-0 w-full flex flex-col items-center lg:items-start">
              <span className="invisible text-center lg:text-left text-base md:text-lg leading-relaxed select-none pointer-events-none">
                Building the digital infrastructure of tomorrow with precision and scale.
              </span>
              <TypingAnimation
                delay={700}
                className="absolute inset-x-0 top-0 text-center lg:text-left text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                Building the digital infrastructure of tomorrow with precision and scale.
              </TypingAnimation>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-both">
              <Button size="lg" className="rounded-sm text-white bg-black hover:bg-white/80 hover:text-black">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="rounded-sm bg-background/50 backdrop-blur-sm border-border/50 hover:bg-accent/50 text-primary hover:text-primary">
                Explore Services
              </Button>
            </div>
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
              {/* Watermark cover — bottom-right corner */}
              <div className="absolute bottom-0 right-0 w-48 h-16 bg-gradient-to-tl from-white via-white/95 to-transparent dark:from-black dark:via-black/95 pointer-events-none z-30" />
            </div>
          </div>

        </div>
      </div>

      <div
        className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none w-[700px] h-[700px]"
        style={{ background: 'radial-gradient(circle, oklch(0.55 0.245 262 / 12%) 0%, transparent 70%)' }}
      />
    </section>
  );
}
