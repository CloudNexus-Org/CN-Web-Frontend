'use client';

import { FC } from 'react';
import Link from 'next/link';
import {
  Bot,
  Sparkles,
  Globe,
  Smartphone,
  Cloud,
  Users,
  ArrowRight,
  Cpu,
  Zap,
  Code2,
  Layers,
  Server,
  GitBranch,
  Settings,
  Activity,
  Wifi,
} from 'lucide-react';

/* ─────────────────────────── Animated Visuals ─────────────────────────── */

/** AI Development – pulsing neural-net nodes */
const AIVisual = () => (
  <div className="absolute -right-6 -bottom-6 w-48 h-48 pointer-events-none overflow-hidden opacity-25 group-hover:opacity-100 transition-opacity duration-700">
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* edges */}
      {[
        [30, 40, 80, 80], [30, 80, 80, 80], [30, 120, 80, 80],
        [80, 80, 130, 40], [80, 80, 130, 80], [80, 80, 130, 120],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#3b82f6" strokeWidth="1"
          strokeOpacity="0"
          className="group-hover:[stroke-opacity:0.4] transition-all duration-700"
          style={{ transitionDelay: `${i * 80}ms` }}
        />
      ))}
      {/* layer 1 nodes */}
      {[40, 80, 120].map((cy, i) => (
        <circle key={i} cx={30} cy={cy} r={6}
          fill="#1a1a1a" stroke="#333"
          className="group-hover:stroke-[#3b82f6] group-hover:fill-[#3b82f6]/20 transition-all duration-500"
          style={{ transitionDelay: `${i * 100}ms` }}
        />
      ))}
      {/* center node */}
      <circle cx={80} cy={80} r={9}
        fill="#1a1a1a" stroke="#444"
        className="group-hover:stroke-[#3b82f6] group-hover:fill-[#3b82f6]/30 group-hover:[filter:drop-shadow(0_0_8px_#3b82f6)] transition-all duration-500"
      />
      {/* layer 2 nodes */}
      {[40, 80, 120].map((cy, i) => (
        <circle key={i} cx={130} cy={cy} r={6}
          fill="#1a1a1a" stroke="#333"
          className="group-hover:stroke-[#3b82f6] group-hover:fill-[#3b82f6]/20 transition-all duration-500"
          style={{ transitionDelay: `${150 + i * 100}ms` }}
        />
      ))}
    </svg>
  </div>
);

/** Generative AI – orbiting sparkle particles */
const GenAIVisual = () => (
  <div className="absolute -right-4 -bottom-4 w-44 h-44 pointer-events-none overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity duration-700">
    <div className="relative w-full h-full flex items-center justify-center">
      {/* rings */}
      {[56, 80, 108].map((size, i) => (
        <div key={i}
          className="absolute border border-[#333] rounded-full transition-colors duration-700 group-hover:border-[#3b82f6]/25"
          style={{ width: size, height: size }}
        >
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#444] opacity-0 group-hover:opacity-100 group-hover:bg-[#3b82f6] group-hover:[box-shadow:0_0_8px_#3b82f6] transition-all duration-500"
            style={{ transitionDelay: `${i * 150}ms` }}
          />
        </div>
      ))}
      {/* center */}
      <Sparkles className="w-7 h-7 text-[#444] group-hover:text-[#3b82f6] group-hover:scale-110 transition-all duration-500 z-10" />
    </div>
  </div>
);

/** Web Development – browser chrome with animated cursor */
const WebVisual = () => (
  <div className="absolute right-4 bottom-4 w-36 h-24 pointer-events-none opacity-25 group-hover:opacity-100 transition-opacity duration-700">
    <div className="w-full h-full bg-[#111] border border-[#2e2e2e] group-hover:border-[#3b82f6]/40 rounded-xl overflow-hidden transition-colors duration-500">
      {/* title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#2e2e2e] group-hover:border-[#3b82f6]/20 transition-colors">
        {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
          <div key={i} className="w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ background: c, transitionDelay: `${i * 80}ms` }} />
        ))}
      </div>
      {/* code lines */}
      <div className="px-3 py-2 flex flex-col gap-1.5">
        {[{ w: 'w-3/4', delay: 0 }, { w: 'w-1/2', delay: 80 }, { w: 'w-5/6', delay: 160 }, { w: 'w-2/5', delay: 240 }].map((l, i) => (
          <div key={i} className={`h-1.5 ${l.w} rounded-full bg-[#2e2e2e] group-hover:bg-[#3b82f6]/30 transition-colors duration-500`} style={{ transitionDelay: `${l.delay}ms` }} />
        ))}
      </div>
    </div>
  </div>
);

/** Mobile App Development – phone frame with shimmer UI */
const MobileVisual = () => (
  <div className="absolute right-6 bottom-0 top-0 flex items-center pointer-events-none opacity-25 group-hover:opacity-100 transition-opacity duration-700">
    <div className="w-16 h-28 border border-[#2e2e2e] group-hover:border-[#3b82f6]/40 rounded-2xl overflow-hidden bg-[#111] transition-colors duration-500 relative">
      {/* notch */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-1 bg-[#2e2e2e] group-hover:bg-[#3b82f6]/30 rounded-full transition-colors duration-500" />
      {/* screen content */}
      <div className="absolute inset-0 top-4 px-2 pt-3 flex flex-col gap-1.5">
        <div className="w-full h-6 bg-[#1e1e1e] group-hover:bg-[#3b82f6]/15 rounded-lg transition-colors duration-500" />
        {[{ w: 'w-full', delay: 0 }, { w: 'w-3/4', delay: 100 }, { w: 'w-1/2', delay: 200 }].map((l, i) => (
          <div key={i} className={`h-1.5 ${l.w} bg-[#2e2e2e] group-hover:bg-[#3b82f6]/25 rounded-full transition-colors duration-500`} style={{ transitionDelay: `${l.delay}ms` }} />
        ))}
        {/* bottom nav */}
        <div className="absolute bottom-2 left-1 right-1 h-5 border border-[#2e2e2e] group-hover:border-[#3b82f6]/30 rounded-lg flex items-center justify-around transition-colors duration-500">
          {[0, 1, 2].map(i => (
            <div key={i} className="w-3 h-3 rounded-sm bg-[#2e2e2e] group-hover:bg-[#3b82f6]/30 transition-colors duration-300" style={{ transitionDelay: `${i * 100}ms` }} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

/** Cloud & DevOps – spinning gears */
const CloudVisual = () => (
  <div className="absolute -right-3 -bottom-3 w-32 h-32 pointer-events-none overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity duration-700">
    <Settings className="absolute top-3 left-3 w-12 h-12 text-[#555] group-hover:text-[#3b82f6] group-hover:animate-[spin_5s_linear_infinite] transition-colors duration-500" />
    <Settings className="absolute bottom-1 right-1 w-16 h-16 text-[#333] group-hover:text-[#3b82f6]/50 group-hover:animate-[spin_8s_linear_infinite_reverse] transition-colors duration-500" />
  </div>
);

/** Hire Developers – avatar stack with ripple */
const HireVisual = () => (
  <div className="absolute right-4 bottom-0 top-0 flex items-center pointer-events-none opacity-25 group-hover:opacity-100 transition-opacity duration-700">
    <div className="flex flex-col items-center gap-3">
      {/* avatar stack */}
      <div className="flex -space-x-3">
        {['#3b82f6', '#8b5cf6', '#06b6d4'].map((color, i) => (
          <div key={i}
            className="w-8 h-8 rounded-full border-2 border-[#111] flex items-center justify-center text-xs font-semibold transition-transform duration-500 group-hover:-translate-y-0.5"
            style={{ background: `${color}22`, borderColor: '#2e2e2e', transitionDelay: `${i * 80}ms` }}
          >
            <Users className="w-3 h-3 transition-colors duration-500" style={{ color }} />
          </div>
        ))}
      </div>
      {/* active dot */}
      <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
        <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
        <span className="text-[9px] text-[#555] group-hover:text-[#8b8b8b] transition-colors duration-500 font-mono">available</span>
      </div>
    </div>
  </div>
);

/* ─────────────────────────── Services Data ─────────────────────────── */

const services = [
  {
    title: 'AI Development Solutions',
    description: 'Drive automation through data and intelligence. We build smart AI systems that integrate seamlessly into your operations.',
    icon: Bot,
    Visual: AIVisual,
    span: 2,
  },
  {
    title: 'Generative AI',
    description: 'Harness the power of large language models to automate content creation, code generation, and customer interactions.',
    icon: Sparkles,
    Visual: GenAIVisual,
    span: 1,
  },
  {
    title: 'Web Development',
    description: 'We design, develop, and maintain high-performance websites and web apps built for scale.',
    icon: Globe,
    Visual: WebVisual,
    span: 1,
  },
  {
    title: 'Mobile App Development',
    description: 'We build cross-platform mobile apps for iOS and Android with immersive user experiences.',
    icon: Smartphone,
    Visual: MobileVisual,
    span: 1,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Streamline delivery using leading cloud platforms — AWS, Azure & GCP — with modern infrastructure as code.',
    icon: Cloud,
    Visual: CloudVisual,
    span: 1,
  },
  {
    title: 'Hire Dedicated Developers',
    description: 'Hire full-time, dedicated software engineers who work exclusively on your product and team.',
    icon: Users,
    Visual: HireVisual,
    span: 2,
  },
];

/* ─────────────────────────── Section Header ─────────────────────────── */

const SectionHeader = () => (
  <div className="flex flex-col gap-4 mb-12">
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit shadow-[0_0_15px_rgba(59,130,246,0.1)]">
      <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
      <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">What We Do</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#ededed] max-w-xl leading-tight">
      End-to-End Digital&nbsp;
      <span className="text-[#8b8b8b]">Services Powered by AI</span>
    </h2>
    <p className="text-[15px] text-[#8b8b8b] max-w-2xl leading-relaxed">
      From ideation to deployment, we deliver scalable software solutions that grow with your business.
    </p>
  </div>
);

/* ─────────────────────────── Main Component ─────────────────────────── */

export const TechStack: FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const colSpan = service.span === 2 ? 'lg:col-span-2' : 'lg:col-span-1';

            return (
              <Link
                key={i}
                href={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className={`group relative flex flex-col items-start bg-[#121212] border border-[#2e2e2e] hover:border-[#3b82f6]/50 hover:bg-[#161616] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] transition-all duration-500 rounded-2xl p-8 overflow-hidden cursor-pointer min-h-[20rem] md:min-h-[22rem] ${colSpan}`}
              >
                {/* Animated visual */}
                {service.Visual && <service.Visual />}

                {/* Icon badge */}
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-[#2e2e2e] bg-[#1a1a1a] text-[#ededed] group-hover:text-[#3b82f6] group-hover:border-[#3b82f6]/30 transition-colors duration-500">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-medium text-[#ededed] mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-[15px] text-[#8b8b8b] leading-relaxed mb-6 flex-1 max-w-full lg:max-w-[80%]">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="relative z-10 mt-auto flex items-center text-[#3b82f6] text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Explore <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
            <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">Small Team. Massive Impact.</span>
          </div>
          <p className="text-[#8b8b8b] text-[15px]">
            Engineering robust, scalable infrastructure for the global stage.
          </p>
        </div>
      </div>
    </section>
  );
};
