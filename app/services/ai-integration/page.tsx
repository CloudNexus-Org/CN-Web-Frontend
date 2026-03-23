
import type { Metadata } from "next";
import { Bot, Cpu, Network, Zap } from "lucide-react";
import { ServicePageLayout } from "@/components/layout/service-page-layout";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServiceCta } from "@/components/sections/service-cta";

export const metadata: Metadata = {
  title: "AI Integration Services | Cloud Nexus",
  description: "Embed advanced artificial intelligence and machine learning capabilities directly into your existing business workflows.",
};

// Custom automated Neural Network visual for the Hero
function AiIntegrationVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center isolate">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8b5cf610_0,transparent_100%)]" />

      <div className="relative w-64 h-64">
        {/* Core Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#1a1a1a] border border-[#8b5cf6] rounded-full flex items-center justify-center z-20 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
          <Bot className="w-8 h-8 text-[#8b5cf6]" />
        </div>

        {/* Orbiting / Connecting Nodes */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          const radius = 90;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div key={i}>
              <div
                className="absolute w-10 h-10 bg-[#121212] border border-[#8b5cf6]/40 rounded-full flex items-center justify-center z-10 animate-pulse"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.4}s`
                }}
              >
                <div className="w-2 h-2 bg-[#8b5cf6] rounded-full shadow-[0_0_8px_#8b5cf6]" />
              </div>

              {/* SVG Line connecting to center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke="#8b5cf6"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="opacity-30"
                />
              </svg>
            </div>
          );
        })}

        {/* Pulsing data packets along lines */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`packet-${i}`}
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff] z-30"
            style={{
              animation: `orbit-pulse ${2 + i}s linear infinite`,
              transformOrigin: `${Math.cos(i) * 60}px ${Math.sin(i) * 60}px`
            }}
          />
        ))}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes orbit-pulse {
            0% { transform: rotate(0deg) translateX(40px) scale(1); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: rotate(360deg) translateX(40px) scale(0); opacity: 0; }
          }
        `}} />
      </div>
    </div>
  );
}

export default function AiIntegrationPage() {
  return (
    <ServicePageLayout serviceName="AI Integration" accentColor="#8b5cf6">

      <ServiceHero
        category="Intelligence"
        categoryColor="#a78bfa"
        accentColor="#8b5cf6"
        title="Smarter workflows with embedded intelligence."
        description="We seamlessly integrate advanced ML models and AI automation into your existing platforms, turning passive data into predictive action."
        visual={<AiIntegrationVisual />}
      />

      <ServiceFeatures
        title="Seamless Artificial Intelligence"
        subtitle="Don't just collect data. Operationalize it in real-time with production-ready AI services."
        accentColor="#8b5cf6"
        features={[
          {
            title: "Workflow Automation",
            description: "Replace repetitive manual tasks with intelligent agents that learn and adapt to your business rules.",
            icon: Zap,
          },
          {
            title: "Real-Time Inference",
            description: "Deploy low-latency machine learning models built for high-throughput transactional environments.",
            icon: Cpu,
          },
          {
            title: "Model Orchestration",
            description: "Connect multiple narrow AI models via intelligent pipelines to solve complex, multi-step business problems.",
            icon: Network,
          },
        ]}
      />

      <ServiceProcess
        accentColor="#8b5cf6"
        steps={[
          {
            title: "Data Readiness",
            description: "Evaluate existing data silos, establish streaming pipelines, and ensure data quality.",
          },
          {
            title: "Model Selection",
            description: "Benchmark open-source vs proprietary models to find the optimal cost-to-performance ratio.",
          },
          {
            title: "API Integration",
            description: "Wrap models in highly available microservices and connect them to your core platforms.",
          },
          {
            title: "Monitoring & Drift",
            description: "Setup continuous observability to track model accuracy and retrain as data distributions change.",
          },
        ]}
      />

      <ServiceCta accentColor="#8b5cf6" />

    </ServicePageLayout>
  );
}
