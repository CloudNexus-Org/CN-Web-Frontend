
import type { Metadata } from "next";
import { BookOpen, MessagesSquare, Sparkles, Wand2 } from "lucide-react";
import { ServicePageLayout } from "@/components/layout/service-page-layout";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServiceCta } from "@/components/sections/service-cta";

export const metadata: Metadata = {
  title: "Generative AI Services | Cloud Nexus",
  description: "Harness the power of large language models to automate text generation, document analysis, and conversational interfaces.",
};

// Custom automated streaming text visual for the Hero
function GenAiVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center isolate p-8">
      {/* Container simulating a terminal or chat interface */}
      <div className="w-full max-w-[320px] bg-[#121212] border border-[#f59e0b]/30 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.15)] overflow-hidden flex flex-col relative z-10">

        {/* Header bar */}
        <div className="h-8 bg-[#1a1a1a] border-b border-[#333] flex items-center px-4 gap-2 shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
          <span className="text-[10px] text-[#888] font-mono">llm-generate-v2.sh</span>
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col gap-4 relative flex-1 min-h-[180px]">
          {/* User Prompt */}
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-md bg-[#222] shrink-0" />
            <div className="space-y-2 w-full pt-1.5 animate-in fade-in slide-in-from-left-2 duration-500 fill-mode-both">
              <div className="h-1.5 w-3/4 bg-[#444] rounded-full" />
              <div className="h-1.5 w-1/2 bg-[#444] rounded-full" />
            </div>
          </div>

          {/* AI Response showing streaming effect */}
          <div className="flex gap-3 mt-2">
            <div className="w-6 h-6 rounded-md bg-[#f59e0b]/20 flex items-center justify-center shrink-0 border border-[#f59e0b]/40">
              <Wand2 className="w-3.5 h-3.5 text-[#f59e0b]" />
            </div>

            <div className="w-full pt-1">
              <div className="space-y-2 flex flex-col items-start w-full">
                {/* Simulated streaming lines */}
                <div className="h-1.5 bg-[#f59e0b]/80 rounded-full animate-[stream-width_2s_ease-out_forwards] w-0" />
                <div className="h-1.5 bg-[#f59e0b]/80 rounded-full animate-[stream-width_2.5s_ease-out_forwards_0.5s] w-0" />
                <div className="h-1.5 bg-[#f59e0b]/80 rounded-full animate-[stream-width_3s_ease-out_forwards_1s] w-0" />

                {/* Blinking cursor */}
                <div className="h-3 w-1.5 bg-[#f59e0b] ml-1 mt-1 animate-pulse" style={{ animationDuration: '0.8s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background ambient particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#f59e0b] rounded-full shadow-[0_0_5px_#f59e0b] opacity-0 z-0"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float-up 4s ease-in ${i * 0.7}s infinite`
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes stream-width {
          0% { width: 0%; opacity: 0; }
          1% { opacity: 1; }
          100% { width: ${Math.random() * 40 + 50}%; opacity: 1; }
        }
        @keyframes float-up {
          0% { transform: translateY(20px) scale(0.5); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
        }
      `}} />
    </div>
  );
}


export default function GenerativeAIPage() {
  return (
    <ServicePageLayout serviceName="Generative AI" accentColor="#f59e0b">

      <ServiceHero
        category="Creation"
        categoryColor="#fbbf24"
        accentColor="#f59e0b"
        title="Automate creation with generative models."
        description="From intelligent semantic search over your private documents to fine-tuning LLMs for domain-specific drafting, we make Generative AI safe and practical."
        visual={<GenAiVisual />}
      />

      <ServiceFeatures
        title="Enterprise-Grade Generative Tech"
        subtitle="Moving beyond API wrappers to build deeply integrated, secure AI solutions tailored to your proprietary data."
        accentColor="#f59e0b"
        features={[
          {
            title: "Retrieval-Augmented Gen (RAG)",
            description: "Connect foundational models to your internal knowledge bases to eliminate hallucinations and provide cited answers.",
            icon: BookOpen,
          },
          {
            title: "Model Fine-Tuning",
            description: "Adapt open-weights models (like LLaMA) with LoRA/QLoRA on your specific domain data for superior accuracy.",
            icon: Wand2,
          },
          {
            title: "Conversational Interfaces",
            description: "Build autonomous agents that can interact with users, trigger APIs, and process complex multi-turn workflows.",
            icon: MessagesSquare,
          },
        ]}
      />

      <ServiceProcess
        accentColor="#f59e0b"
        steps={[
          {
            title: "Corpus Preparation",
            description: "Clean, chunk, and embed your unstructured internal documents into vector databases.",
          },
          {
            title: "Prompt Engineering",
            description: "Iterate on system prompts and Few-Shot examples to establish a reliable baseline.",
          },
          {
            title: "Orchestration Logic",
            description: "Build the routing and RAG layers using frameworks like LangChain or Spring AI.",
          },
          {
            title: "Eval & Moderation",
            description: "Implement strict guardrails to prevent data leakage and benchmark outputs for safety.",
          },
        ]}
      />

      <ServiceCta accentColor="#f59e0b" />

    </ServicePageLayout>
  );
}
