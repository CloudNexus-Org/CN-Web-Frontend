
import type { Metadata } from "next";
import { Coffee, Layers, RefreshCw, ShieldCheck } from "lucide-react";
import { ServicePageLayout } from "@/components/layout/service-page-layout";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServiceCta } from "@/components/sections/service-cta";

export const metadata: Metadata = {
  title: "Java Migration Services | Cloud Nexus",
  description: "Modernize legacy Java applications with scalable, cloud-ready architectures and microservices.",
};

// Custom automated Java class diagram visual for the Hero
function JavaMigrationVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center isolate">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative w-72 h-72">
        {/* Legacy Monolith (Fading out / breaking apart) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-48 border-2 border-dashed border-[#555] rounded-xl flex items-center justify-center opacity-30">
          <span className="text-xs text-[#555] font-mono tracking-widest uppercase mb-32">Legacy EE</span>
        </div>

        {/* New Microservices (Fading in / floating) */}
        <div className="absolute top-4 left-4 w-24 h-28 bg-[#1a1a1a] border border-[#3b82f6]/40 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.15)] flex flex-col p-3 animate-pulse" style={{ animationDuration: '3s' }}>
          <div className="flex items-center gap-2 mb-2">
            <Coffee className="w-4 h-4 text-[#3b82f6]" />
            <span className="text-[10px] text-white font-mono">AuthService</span>
          </div>
          <div className="space-y-1.5 mt-auto">
            <div className="h-1.5 w-full bg-[#333] rounded-full" />
            <div className="h-1.5 w-4/5 bg-[#333] rounded-full" />
            <div className="h-1.5 w-2/3 bg-[#333] rounded-full" />
          </div>
        </div>

        <div className="absolute bottom-4 right-4 w-28 h-24 bg-[#1a1a1a] border border-[#3b82f6]/40 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.15)] flex flex-col p-3 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-[#3b82f6]" />
            <span className="text-[10px] text-white font-mono">DataCore</span>
          </div>
          <div className="space-y-1.5 mt-auto">
            <div className="h-1.5 w-full bg-[#333] rounded-full" />
            <div className="h-1.5 w-5/6 bg-[#333] rounded-full" />
          </div>
        </div>

        <div className="absolute top-20 right-2 w-20 h-20 bg-[#1a1a1a] border border-[#3b82f6]/40 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.15)] flex items-center justify-center animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
          <RefreshCw className="w-6 h-6 text-[#3b82f6]" />
        </div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          <path d="M 120 70 C 150 70, 150 120, 180 120" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="opacity-50" />
          <path d="M 170 180 C 130 180, 130 120, 100 120" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="opacity-50" />
        </svg>
      </div>
    </div>
  );
}

export default function JavaMigrationPage() {
  return (
    <ServicePageLayout serviceName="Java Migration" accentColor="#3b82f6">

      <ServiceHero
        category="Modernization"
        categoryColor="#60a5fa"
        accentColor="#3b82f6"
        title="Breathe new life into legacy Java operations."
        description="Escape monolithic constraints. We migrate outdated Java EE applications to scalable, cloud-native Spring Boot microservices with zero operational downtime."
        visual={<JavaMigrationVisual />}
      />

      <ServiceFeatures
        title="Purpose-built for the Cloud Era"
        subtitle="Our modernization strategies guarantee performance, scalability, and security without interrupting your current business flow."
        accentColor="#3b82f6"
        features={[
          {
            title: "Strangler Fig Migration",
            description: "Gradually replace pieces of your monolith with microservices, minimizing risk and ensuring continuous delivery.",
            icon: Layers,
          },
          {
            title: "Zero-Downtime Strategy",
            description: "Advanced blue-green deployments and parallel routing ensure your business never stops during the transition.",
            icon: RefreshCw,
          },
          {
            title: "Security & Compliance",
            description: "Upgrade outdated dependencies and enforce modern OAuth2/OIDC security standards across the new architecture.",
            icon: ShieldCheck,
          },
        ]}
      />

      <ServiceProcess
        accentColor="#3b82f6"
        steps={[
          {
            title: "Discovery & Audit",
            description: "Deep-dive codebase analysis, dependency mapping, and risk matrix evaluation.",
          },
          {
            title: "Modular Extraction",
            description: "Carving out bounded contexts mapping to independent microservices.",
          },
          {
            title: "Parallel Run",
            description: "Shadow traffic routing; both systems operate live to validate data consistency.",
          },
          {
            title: "Cut-over & Hardening",
            description: "Controlled blue-green cut-over with strict SLA monitoring and on-call support.",
          },
        ]}
      />

      <ServiceCta accentColor="#3b82f6" />

    </ServicePageLayout>
  );
}
