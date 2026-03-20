
import type { Metadata } from "next";
import { Activity, CheckCircle2, Code2, Rocket } from "lucide-react";
import { ServicePageLayout } from "@/components/layout/service-page-layout";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServiceCta } from "@/components/sections/service-cta";

export const metadata: Metadata = {
  title: "CI/CD Pipelines | Cloud Nexus",
  description: "Accelerate your delivery with automated testing, continuous integration, and continuous deployment pipelines.",
};

// Custom automated Pipeline Stages visual for the Hero
function CiCdVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center isolate px-8">
      <div className="flex items-center justify-between w-full max-w-[360px] relative">

        {/* Continuous underlying track line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#333] -translate-y-1/2 z-0" />

        {/* Animated progressive fill line */}
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-[#3b82f6] shadow-[0_0_10px_#3b82f6] -translate-y-1/2 z-0 animate-[fill-line_4s_ease-in-out_infinite]"
        />

        {/* Stage 1: Build */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border-2 border-[#3b82f6] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Code2 className="w-5 h-5 text-[#3b82f6]" />
          </div>
          <span className="text-[10px] text-[#888] font-mono tracking-widest uppercase truncate animate-[fade-text_4s_infinite]">Build</span>
        </div>

        {/* Stage 2: Test */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border-2 border-[#555] flex items-center justify-center transition-colors animate-[activate-node-2_4s_infinite]">
            <Activity className="w-5 h-5 text-[#555] animate-[activate-icon-2_4s_infinite]" />
          </div>
          <span className="text-[10px] text-[#888] font-mono tracking-widest uppercase truncate animate-[fade-text-2_4s_infinite]">Test</span>
        </div>

        {/* Stage 3: Deploy */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border-2 border-[#555] flex items-center justify-center transition-colors animate-[activate-node-3_4s_infinite]">
            <Rocket className="w-5 h-5 text-[#555] animate-[activate-icon-3_4s_infinite]" />
          </div>
          <span className="text-[10px] text-[#888] font-mono tracking-widest uppercase truncate animate-[fade-text-3_4s_infinite]">Deploy</span>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fill-line {
          0%, 15% { width: 0%; opacity: 1; }
          40% { width: 50%; opacity: 1; }
          75%, 90% { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
        
        @keyframes activate-node-2 {
          0%, 35% { border-color: #555; box-shadow: none; }
          40%, 100% { border-color: #3b82f6; box-shadow: 0 0 15px rgba(59,130,246,0.3); }
        }
        @keyframes activate-icon-2 {
          0%, 35% { color: #555; }
          40%, 100% { color: #3b82f6; }
        }
        @keyframes fade-text-2 {
          0%, 35% { color: #888; }
          40%, 100% { color: #fff; }
        }

        @keyframes activate-node-3 {
          0%, 70% { border-color: #555; box-shadow: none; transform: translateY(0); }
          75%, 100% { border-color: #3b82f6; box-shadow: 0 0 15px rgba(59,130,246,0.5); transform: translateY(-4px); }
        }
        @keyframes activate-icon-3 {
          0%, 70% { color: #555; }
          75%, 100% { color: #3b82f6; }
        }
        @keyframes fade-text-3 {
          0%, 70% { color: #888; }
          75%, 100% { color: #fff; }
        }
        
        @keyframes fade-text {
          0%, 100% { color: #fff; }
        }
      `}} />
    </div>
  );
}

export default function CiCdPage() {
  return (
    <ServicePageLayout serviceName="CI/CD Pipelines" accentColor="#3b82f6">

      <ServiceHero
        category="Delivery"
        categoryColor="#60a5fa"
        accentColor="#3b82f6"
        title="Ship code faster with zero friction."
        description="Automate your entire release lifecycle. We design and implement robust continuous integration and deployment pipelines that catch bugs early and deploy to production safely."
        visual={<CiCdVisual />}
      />

      <ServiceFeatures
        title="Continuous Delivery Excellence"
        subtitle="Remove human error from your deployment process allowing your team to focus exclusively on building features."
        accentColor="#3b82f6"
        features={[
          {
            title: "Automated Testing",
            description: "Block failing PRs immediately with parallelized unit, integration, and end-to-end test suites running on every commit.",
            icon: Activity,
          },
          {
            title: "Quality & Security Gates",
            description: "Enforce static code analysis strictly. Auto-scan containers and dependencies for CVEs before artifacts are built.",
            icon: CheckCircle2,
          },
          {
            title: "Zero-Downtime Releases",
            description: "Safely orchestrate blue-green deployments, canary rollouts, and automated rollbacks when health checks fail.",
            icon: Rocket,
          },
        ]}
      />

      <ServiceProcess
        accentColor="#3b82f6"
        steps={[
          {
            title: "Pipeline Audit",
            description: "Analyze your current trunk-based or feature-branch workflow to identify manual bottlenecks.",
          },
          {
            title: "The Build Matrix",
            description: "Setup containerized build environments that guarantee 'works on my machine' parity everywhere.",
          },
          {
            title: "Testing Integration",
            description: "Wire up test runners and coverage reporters to fail fast on regressions.",
          },
          {
            title: "Deployment Automation",
            description: "Connect the validated artifact registry to your orchestration layer (ECS/EKS) for automated rollout.",
          },
        ]}
      />

      <ServiceCta accentColor="#3b82f6" />

    </ServicePageLayout>
  );
}
