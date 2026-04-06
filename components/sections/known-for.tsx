'use client';

import { type FC, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Code2, Smartphone, Globe, Cloud, Palette,
  Zap, TrendingUp, Brain, Shield, GitMerge, ChevronLeft, ChevronRight
} from 'lucide-react';

/* ══════════════════ PREMIUM ANIMATED VISUALS ══════════════════ */

/** 1. Custom Software – abstract overlapping isometric planes glowing */
const CustomSoftwareVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-[-10%] bottom-[-20%] w-64 h-64 rotate-[30deg] skew-x-[20deg] scale-90 group-hover:scale-100 transition-transform duration-1000">
      <div className="absolute inset-0 border border-[#3b82f6]/20 bg-gradient-to-tr from-[#3b82f6]/5 to-transparent rounded-xl translate-y-8 group-hover:translate-y-0 transition-transform duration-1000 delay-100" />
      <div className="absolute inset-0 border border-[#8b5cf6]/20 bg-gradient-to-tr from-[#8b5cf6]/5 to-transparent rounded-xl translate-x-8 translate-y-4 group-hover:translate-x-4 transition-transform duration-1000 delay-200 backdrop-blur-sm" />
      <div className="absolute inset-0 border border-[#ec4899]/10 bg-gradient-to-tl from-[#ec4899]/5 to-transparent rounded-xl translate-x-16 group-hover:translate-x-8 transition-transform duration-1000 delay-300 backdrop-blur-md" />
    </div>
  </div>
);

/** 2. UI/UX Design – smooth morphing glassmorphism blur orbs */
const UIUXVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-0 bottom-0 w-48 h-48 blur-2xl opacity-40 mix-blend-screen translate-y-4 group-hover:translate-y-0 transition-transform duration-1000">
      <div className="absolute top-4 left-4 w-24 h-24 bg-[#3b82f6] rounded-full mix-blend-multiply animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#8b5cf6] rounded-full mix-blend-multiply animate-[pulse_4s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-[#ec4899] rounded-full mix-blend-multiply animate-[pulse_4s_ease-in-out_infinite_2s]" />
    </div>
  </div>
);

/** 3. AI, ML & Data Science – central node emitting soft ripple rings */
const AIMLVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute -right-8 -bottom-8 w-64 h-64 flex items-center justify-center">
      <div className="absolute w-2 h-2 bg-[#3b82f6] rounded-full shadow-[0_0_20px_4px_#3b82f6] z-10" />
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="absolute border border-[#3b82f6]/30 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ width: `${i * 3}rem`, height: `${i * 3}rem`, animationDelay: `${i * 1}s` }} />
      ))}
      {/* Orbiting data points */}
      <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
        <div className="absolute top-4 left-1/2 w-1.5 h-1.5 bg-[#8b5cf6] rounded-full shadow-[0_0_10px_#8b5cf6]" />
        <div className="absolute bottom-4 right-1/4 w-1.5 h-1.5 bg-[#ec4899] rounded-full shadow-[0_0_10px_#ec4899]" />
      </div>
    </div>
  </div>
);

/** 4. Mobile App – glowing minimal frame border trace */
const MobileVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-4 bottom-[-10%] w-24 h-48 border border-white/5 rounded-3xl overflow-hidden group-hover:-translate-y-4 transition-transform duration-1000 ease-out">
      {/* Animated gradient tracing the border */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b82f6]/0 via-[#3b82f6]/40 to-[#3b82f6]/0 opacity-50 -translate-y-[100%] group-hover:animate-[shimmer_3s_infinite]" />
      {/* Screen glow */}
      <div className="absolute inset-2 bg-gradient-to-br from-[#3b82f6]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300" />
      {/* Screen elements */}
      <div className="absolute top-6 left-4 right-4 h-2 bg-white/5 rounded-full" />
      <div className="absolute top-10 left-4 right-10 h-2 bg-white/5 rounded-full" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full" />
    </div>
  </div>
);

/** 5. Web Development – fanning glassmorphism cards */
const WebVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-4 bottom-4 w-40 h-28 perspective-1000">
      <div className="relative w-full h-full transform-style-3d rotate-x-12 rotate-y-[-10deg]">
        <div className="absolute inset-0 bg-[#111] border border-white/10 rounded-xl translate-z-0 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:border-[#3b82f6]/30 transition-all duration-700 shadow-2xl" />
        <div className="absolute inset-0 bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/5 rounded-xl -translate-z-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-700 delay-100 shadow-2xl flex flex-col p-3 gap-2">
          <div className="w-1/3 h-1.5 bg-[#3b82f6]/40 rounded-full" />
          <div className="w-1/2 h-1.5 bg-white/10 rounded-full" />
          <div className="w-5/6 h-1.5 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

/** 6. Cloud & SaaS – faint bezier curve network */
const CloudVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <svg className="absolute right-[-10%] bottom-[-10%] w-64 h-64 text-[#3b82f6]/20" viewBox="0 0 100 100">
      <path d="M 20 80 Q 40 50 80 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="custom-dash group-hover:animate-[dash_3s_linear_infinite]" />
      <path d="M 10 50 Q 50 10 90 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="custom-dash group-hover:animate-[dash_4s_linear_infinite]" />
      <path d="M 30 90 Q 70 80 80 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="custom-dash group-hover:animate-[dash_5s_linear_infinite]" />
      <circle cx="20" cy="80" r="1.5" fill="#3b82f6" className="opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#3b82f6] transition-all duration-1000" />
      <circle cx="80" cy="20" r="1.5" fill="#3b82f6" className="opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#3b82f6] transition-all duration-1000 delay-100" />
      <circle cx="10" cy="50" r="1" fill="#8b5cf6" className="opacity-50 group-hover:opacity-100 transition-all duration-1000 delay-200" />
      <circle cx="90" cy="60" r="1" fill="#ec4899" className="opacity-50 group-hover:opacity-100 transition-all duration-1000 delay-300" />
      <circle cx="80" cy="40" r="2" fill="white" className="opacity-20 group-hover:opacity-80 transition-all duration-1000 delay-400" />
    </svg>
  </div>
);

/** 7. Digital Transformation – organic geometric morphing (square to circle array) */
const DigitalTransformVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden flex items-end justify-end p-6">
    <div className="grid grid-cols-4 gap-2 w-24 h-24">
      {[...Array(16)].map((_, i) => (
        <div 
          key={i} 
          className="bg-white/5 border border-white/10 w-full h-full rounded-[2px] group-hover:rounded-full group-hover:bg-[#3b82f6]/20 group-hover:border-[#3b82f6]/40 transition-all duration-1000 ease-in-out" 
          style={{ transitionDelay: `${(i % 4 + Math.floor(i / 4)) * 50}ms` }} 
        />
      ))}
    </div>
  </div>
);

/** 8. Digital Marketing – elegant overlapping fluid waveforms */
const DigitalMarketingVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <svg className="absolute w-[200%] h-32 bottom-[-10%] right-[-20%] text-[#3b82f6]/10 group-hover:text-[#3b82f6]/30 transition-colors duration-1000" viewBox="0 0 200 50" preserveAspectRatio="none">
      <path d="M 0 50 Q 50 10 100 50 T 200 50 L 200 50 L 0 50 Z" fill="currentColor" className="group-hover:animate-[wave_10s_linear_infinite]" />
      <path d="M 0 50 Q 50 30 100 50 T 200 50 L 200 50 L 0 50 Z" fill="currentColor" className="text-[#8b5cf6]/10 group-hover:text-[#8b5cf6]/20 transition-colors duration-1000 group-hover:animate-[wave_8s_linear_infinite_reverse]" />
      <path d="M 0 50 Q 50 40 100 50 T 200 50 L 200 50 L 0 50 Z" fill="currentColor" className="text-[#ec4899]/10 group-hover:text-[#ec4899]/20 transition-colors duration-1000 group-hover:animate-[wave_12s_linear_infinite]" />
    </svg>
  </div>
);

/** 9. Cybersecurity – minimal intersecting rotating arcs */
const CyberVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute -right-8 -bottom-8 w-64 h-64 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
      <div className="absolute w-32 h-32 border-t-2 border-r-2 border-transparent border-t-[#3b82f6]/50 rounded-full animate-[spin_4s_linear_infinite]" />
      <div className="absolute w-40 h-40 border-b-2 border-l-2 border-transparent border-b-[#8b5cf6]/50 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
      <div className="absolute w-48 h-48 border-t-[1px] border-transparent border-t-[#ec4899]/30 rounded-full animate-[spin_7s_linear_infinite]" />
      <div className="absolute w-2 h-2 bg-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
    </div>
  </div>
);

/** 10. DevOps – glowing infinite loop path */
const DevOpsVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <svg className="absolute right-4 bottom-4 w-48 h-24 text-white/5" viewBox="0 0 100 50">
      {/* Background path */}
      <path d="M 25 25 C 10 10, 10 40, 25 25 C 40 10, 60 40, 75 25 C 90 10, 90 40, 75 25 C 60 10, 40 40, 25 25" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Animated glowing path */}
      <path d="M 25 25 C 10 10, 10 40, 25 25 C 40 10, 60 40, 75 25 C 90 10, 90 40, 75 25 C 60 10, 40 40, 25 25" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" className="custom-infinity opacity-0 group-hover:opacity-100 transition-opacity duration-1000 group-hover:animate-[infinity_4s_linear_infinite]" style={{ filter: 'drop-shadow(0 0 4px #3b82f6)' }} />
    </svg>
  </div>
);

/* ══════════════════ SERVICES DATA ══════════════════ */

const services = [
  {
    title: 'Custom Software Development',
    description: 'End-to-end scalable software engineered to your exact specifications — from architecture to deployment.',
    icon: Code2,
    href: '/services/custom-software-development',
    Visual: CustomSoftwareVisual,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design that converts — from wireframes to pixel-perfect interfaces.',
    icon: Palette,
    href: '/services/ui-ux-design',
    Visual: UIUXVisual,
  },
  {
    title: 'AI, ML & Data Science',
    description: 'Predictive analytics, NLP, computer vision, and intelligent automation tailored to your data.',
    icon: Brain,
    href: '/services/ai-ml-data-science',
    Visual: AIMLVisual,
  },
  {
    title: 'Mobile App Development',
    description: 'High-performance iOS & Android apps with immersive, platform-native experiences.',
    icon: Smartphone,
    href: '/services/mobile-app-development',
    Visual: MobileVisual,
  },
  {
    title: 'Web Development',
    description: 'Responsive, lightning-fast web apps built for scale and conversion.',
    icon: Globe,
    href: '/services/web-development',
    Visual: WebVisual,
  },
  {
    title: 'Cloud & SaaS Solutions',
    description: 'Cloud migration, multi-tenant SaaS architecture, and managed infrastructure on AWS, Azure & GCP.',
    icon: Cloud,
    href: '/services/cloud-saas-solutions',
    Visual: CloudVisual,
  },
  {
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems with cloud-native, microservices-driven architectures.',
    icon: Zap,
    href: '/services/digital-transformation',
    Visual: DigitalTransformVisual,
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, paid media, social campaigns, and analytics-driven growth strategies.',
    icon: TrendingUp,
    href: '/services/digital-marketing',
    Visual: DigitalMarketingVisual,
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Advanced audits, penetration testing, and compliance frameworks (SOC2, HIPAA, GDPR).',
    icon: Shield,
    href: '/services/cybersecurity-compliance',
    Visual: CyberVisual,
  },
  {
    title: 'DevOps & Cloud Automation',
    description: 'CI/CD pipelines, containerization, IaC, and automated delivery for faster, reliable releases.',
    icon: GitMerge,
    href: '/services/devops-cloud-automation',
    Visual: DevOpsVisual,
  },
];

/* ══════════════════ SECTION ══════════════════ */

export const KnownFor: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback ((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 416; // rough card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <section className="w-full py-12 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
              What We&apos;re Known For
            </h2>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div 
            ref={scrollRef}
            className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-6 px-6 md:-mx-8 md:px-8"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={i}
                  href={service.href}
                  className={`shrink-0 snap-start w-[85vw] sm:w-[340px] lg:w-[400px] group relative flex flex-col items-start bg-[#0a0a0a] border border-white/5 hover:border-white/10 hover:bg-[#111] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#3b82f6]/5 transition-all duration-700 ease-out rounded-2xl p-7 overflow-hidden cursor-pointer min-h-[18rem] md:min-h-[20rem]`}
                >
                  {/* Subtle base gradient inside card to match Apple/Linear aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Animated visual component */}
                  <service.Visual />

                  {/* Content layer above visual */}
                  <div className="relative z-10 flex flex-col h-full pointer-events-none w-full">
                    {/* Icon */}
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#161616] text-[#ededed] group-hover:text-[#3b82f6] group-hover:border-[#3b82f6]/30 group-hover:bg-[#1a1a1a] transition-all duration-500 shadow-sm">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-medium text-[#ededed] mb-2 tracking-tight leading-snug group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-[#8b8b8b] group-hover:text-[#a1a1a1] leading-relaxed flex-1 w-[90%] transition-colors duration-300 font-light">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-5 flex items-center text-[#3b82f6] text-[13px] font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                      Explore Service <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
            <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">Our Services</span>
          </div>
          <p className="text-[#8b8b8b] text-[15px]">
            We deliver end-to-end solutions across the full spectrum of digital services.
          </p>
          <Link
            href="/services"
            className="text-[13px] font-semibold text-[#3b82f6] hover:underline inline-flex items-center gap-1"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CSS for custom abstract animations and hiding scrollbar */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            @keyframes dash {
              0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
              50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
              100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
            }
            .custom-dash {
              stroke-dasharray: 4, 12;
            }
            @keyframes shimmer {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(200%); }
            }
            @keyframes wave {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes infinity {
              0% { stroke-dasharray: 0, 300; stroke-dashoffset: 0; }
              50% { stroke-dasharray: 100, 300; stroke-dashoffset: -100; }
              100% { stroke-dasharray: 0, 300; stroke-dashoffset: -300; }
            }
            .custom-infinity {
              stroke-dasharray: 300, 300;
              stroke-dashoffset: 300;
            }
            .perspective-1000 {
              perspective: 1000px;
            }
            .transform-style-3d {
              transform-style: preserve-3d;
            }
            .translate-z-0 { transform: translateZ(0); }
            .-translate-z-4 { transform: translateZ(-1rem); }
          `
        }} />

      </div>
    </section>
  );
};
