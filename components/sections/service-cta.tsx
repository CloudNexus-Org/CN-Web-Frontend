"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCtaProps {
  title?: string;
  description?: string;
  accentColor: string;
}

export function ServiceCta({
  title = "Ready to modernize?",
  description = "Schedule a technical consultation with our engineering team to discuss your architecture and requirements.",
  accentColor
}: ServiceCtaProps) {
  return (
    <section className="w-full py-24 pb-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div
          className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden border border-[#2e2e2e] bg-[#0a0a0a]"
          style={{
            boxShadow: `0 20px 40px -20px rgba(0,0,0,0.5), inset 0 0 80px -40px ${accentColor}40`,
          }}
        >
          {/* Subtle moving noise/gradient overlay */}
          {/* <div 
            className="absolute inset-0 opacity-20 Mix-blend-screen pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at top, ${accentColor}, transparent 70%)`
            }}
          /> */}

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              {title}
            </h2>
            <p className="text-base md:text-lg text-[#8b8b8b] leading-relaxed mb-10">
              {description}
            </p>
            <Button
              size="sm"
              className="group rounded-sm bg-white text-black hover:bg-white/90 h-12 px-8 text-base shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
            >
              Start the Conversation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
