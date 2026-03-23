"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  accentColor: string;
  visual: ReactNode;
}

export function ServiceHero({
  category,
  categoryColor,
  title,
  description,
  accentColor,
  visual,
}: ServiceHeroProps) {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden border-b border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="flex flex-col items-start gap-8 relative z-10">
            {/* Badge */}
            <div 
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{
                borderColor: `${accentColor}40`,
                backgroundColor: `${accentColor}10`,
                color: categoryColor,
              }}
            >
              {category}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both max-w-2xl">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg text-[#8b8b8b] leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
              <Button size="lg" className="rounded-sm bg-white text-black hover:bg-white/90">
                Talk to an Expert
              </Button>
              <Button size="lg" variant="outline" className="rounded-sm border-white/10 bg-white/5 hover:bg-white/10 text-white">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Visual Area */}
          <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
            <div className="relative w-full max-w-[500px] aspect-square rounded-full border border-white/[0.05] bg-black/50 shadow-2xl backdrop-blur-3xl flex items-center justify-center overflow-hidden">
              {/* Internal subtle glow */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background: `radial-gradient(circle at center, ${accentColor}, transparent 60%)`,
                }}
              />
              {visual}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
