"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger, random } from "animejs";
import { motion, AnimatePresence } from "framer-motion";
import { Search, PenTool, Zap, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "discovery",
    phase: "01",
    title: "Discovery & Analysis",
    description: "Deep-dive infrastructure audits to identify hidden bottlenecks and exponential growth vectors.",
    icon: Search,
    color: "#ff3e00" // Anime.js Orange/Red
  },
  {
    id: "mapping",
    phase: "02",
    title: "Cloud Synthesis",
    description: "Architecting bespoke network topologies tailored for high-frequency scale and zero-latency performance.",
    icon: PenTool,
    color: "#fadc00" // Anime.js Yellow
  },
  {
    id: "optimization",
    phase: "03",
    title: "Rigorous Execution",
    description: "Precision deployment utilizing verified CI/CD patterns and automated rollback safety nets.",
    icon: Zap,
    color: "#00d1b2" // Anime.js Teal/Green
  },
  {
    id: "launch",
    phase: "04",
    title: "Scale & Transcend",
    description: "Global edge distribution with self-healing capabilities, ready for decadal traffic surges.",
    icon: Rocket,
    color: "#007fff" // Anime.js Blue
  }
];

export default function WorkflowPage() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // 1. Grid Entrance
    animate('.grid-dot', {
      scale: [0, 1],
      opacity: [0, 0.15],
      delay: stagger(10, { grid: [20, 20], from: 'center' }),
      duration: 1500,
      ease: 'outExpo'
    });

    // 2. Initial Path Reveal
    animate('#main-path', {
      strokeDashoffset: [2000, 0],
      duration: 3000,
      ease: 'inOutExpo'
    });
  }, []);

  useEffect(() => {
    // 3. Step Transition: Grid Pulse
    animate('.grid-dot', {
      opacity: [0.15, 0.4, 0.15],
      scale: [1, 1.5, 1],
      delay: stagger(20, { grid: [20, 20], from: activeStep }),
      duration: 1000,
      ease: 'inOutQuad'
    });

    // 4. Path "Drawing" to active node
    animate('#active-indicator', {
      strokeDashoffset: [500, 0],
      duration: 1200,
      ease: 'outQuart'
    });
  }, [activeStep]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/10 overflow-hidden font-sans">
      {/* Anime.js Background Grid */}
      <div 
        ref={gridRef}
        className="fixed inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-30 pointer-events-none"
      >
        {[...Array(400)].map((_, i) => (
          <div key={i} className="flex items-center justify-center p-2">
            <div className="grid-dot w-1 h-1 bg-white/20 rounded-full" />
          </div>
        ))}
      </div>

      <main className="relative z-10 pt-32 pb-40 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/40" />
            <span className="text-xs tracking-[0.4em] uppercase font-medium text-white/40">Technical Workflow</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tighter max-w-4xl leading-[1.1]">
            Engineering the <span className="text-white/30 italic">Future</span> of Cloud Persistence.
          </h1>
        </div>

        {/* The Interactive Visualizer */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Canvas (Left) */}
          <div className="relative aspect-square">
            {/* SVG Background Layer */}
            <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full opacity-20">
              <path 
                id="main-path"
                d="M 250,50 C 350,50 450,150 450,250 C 450,350 350,450 250,450 C 150,450 50,350 50,250 C 50,150 150,50 250,50" 
                fill="none" 
                stroke="white" 
                strokeWidth="0.5"
                strokeDasharray="2 4"
              />
              <path 
                id="active-indicator"
                d="M 250,50 C 350,50 450,150 450,250 C 450,350 350,450 250,450 C 150,450 50,350 50,250 C 50,150 150,50 250,50" 
                fill="none" 
                stroke={steps[activeStep].color} 
                strokeWidth="2"
                strokeDashoffset="500"
                strokeDasharray="500"
              />
            </svg>

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-40 h-40 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-3xl flex items-center justify-center p-8">
                <div className="w-full h-full rounded-full border-2 border-dashed border-white/10 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
                </div>
              </div>
            </div>

            {/* Interactive Phase Nodes */}
            {steps.map((step, i) => {
              const Icon = step.icon;
              const positions = [
                "top-0 left-1/2 -translate-x-1/2",
                "top-1/2 right-0 -translate-y-1/2",
                "bottom-0 left-1/2 -translate-x-1/2",
                "top-1/2 left-0 -translate-y-1/2"
              ];
              const isActive = activeStep === i;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={`absolute z-30 group transition-all duration-700 ${positions[i]}`}
                >
                  <div className={`relative flex flex-col items-center gap-4`}>
                    <div className={`
                      w-20 h-20 rounded-xl border flex items-center justify-center transition-all duration-500
                      ${isActive 
                        ? 'bg-white text-black border-white scale-110 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]' 
                        : 'bg-[#111] text-white/40 border-white/10 group-hover:border-white/40 group-hover:text-white'
                      }
                    `}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className={`text-[10px] tracking-[0.3em] uppercase font-mono transition-opacity duration-500 ${isActive ? 'opacity-100 text-white' : 'opacity-40 text-white/40'}`}>
                      PHASE {step.phase}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Pane (Right) */}
          <div className="flex flex-col justify-center gap-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-mono tracking-widest text-white/40 bg-white/5">
                    INTERNAL_PROTOCOL_V4.3
                  </span>
                  <h2 className="text-5xl font-serif leading-tight">
                    {steps[activeStep].title}
                  </h2>
                  <p className="text-xl text-white/50 font-light leading-relaxed max-w-lg">
                    {steps[activeStep].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="space-y-2">
                    <div className="text-[10px] tracking-widest uppercase text-white/30 font-mono">Status</div>
                    <div className="text-sm font-medium flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Live Architecture
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] tracking-widest uppercase text-white/30 font-mono">Precision</div>
                    <div className="text-sm font-medium">99.999% Reliability</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Step Selection Bar */}
            <div className="flex items-center gap-10 pt-16 border-t border-white/5">
              <div className="flex gap-4">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-1.5 rounded-full transition-all duration-700 ${activeStep === i ? 'w-16 bg-white' : 'w-4 bg-white/10 hover:bg-white/30'}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 text-white/30 font-mono text-xs">
                <span>0{activeStep + 1}</span>
                <div className="w-12 h-px bg-white/10" />
                <span>04</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Technical Banner */}
      <div className="fixed bottom-0 left-0 right-0 py-4 px-8 border-t border-white/5 bg-black/80 backdrop-blur-md z-50 flex justify-between items-center">
        <div className="flex items-center gap-6 text-[10px] font-mono tracking-widest text-white/20 uppercase">
          <span>System_Status: Operational</span>
          <span className="hidden md:inline">Region: Global_Edge</span>
          <span className="hidden md:inline">Latency: 12ms</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Synced with Nexus Core</span>
        </div>
      </div>
    </div>
  );
}
