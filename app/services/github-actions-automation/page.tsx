
import type { Metadata } from "next";
import { GitBranch, GitMerge, Settings2, Workflow } from "lucide-react";
import { ServicePageLayout } from "@/components/layout/service-page-layout";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServiceCta } from "@/components/sections/service-cta";

export const metadata: Metadata = {
  title: "GitHub Actions Automation | Cloud Nexus",
  description: "Automate your entire software lifecycle right from your code repository with reusable GitHub Actions.",
};

// Custom automated Git Branch / Merge diagram visual for the Hero
function GitHubActionsVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center isolate px-4">
      <div className="relative w-full max-w-[280px] h-[200px]">

        {/* Main Branch (main) */}
        <div className="absolute left-[40px] top-0 bottom-0 w-1 bg-gradient-to-b from-[#333] via-[#a78bfa]/60 to-[#a78bfa] z-0" />

        <div className="absolute left-[34px] top-[20px] w-4 h-4 rounded-full border-[3px] border-[#a78bfa] bg-[#1a1a1a] z-10" />
        <div className="absolute left-[34px] top-[160px] w-4 h-4 rounded-full border-[3px] border-[#a78bfa] bg-[#1a1a1a] z-10 shadow-[0_0_15px_#a78bfa]" />

        {/* Feature Branch (feat/auth) */}
        {/* Curve out */}
        <div className="absolute left-[42px] top-[40px] w-[60px] h-[40px] border-b-[4px] border-r-[4px] border-[#3b82f6] rounded-br-2xl z-0" />
        <div className="absolute left-[102px] top-[80px] w-[60px] h-[40px] border-t-[4px] border-l-[4px] border-[#3b82f6] rounded-tl-2xl z-0" />

        {/* Feature commits */}
        <div className="absolute left-[154px] top-[80px] bottom-[120px] w-1 bg-[#3b82f6] z-0" />
        <div className="absolute left-[148px] top-[100px] w-4 h-4 rounded-full border-[3px] border-[#3b82f6] bg-[#1a1a1a] z-10 animate-[pulse-glow_2s_infinite]" />

        {/* Curve in (Merge PR) */}
        <div className="absolute left-[102px] top-[120px] w-[60px] h-[40px] border-b-[4px] border-l-[4px] border-[#3b82f6]/40 border-dashed rounded-bl-2xl z-0" />
        <div className="absolute left-[42px] top-[160px] w-[60px] h-[40px] border-t-[4px] border-r-[4px] border-[#3b82f6]/40 border-dashed rounded-tr-2xl z-0" />

        {/* Labels */}
        <span className="absolute left-[64px] top-[16px] text-[10px] font-mono text-[#888]">main</span>
        <span className="absolute left-[174px] top-[96px] text-[10px] font-mono text-[#3b82f6]">feat/ci</span>

        {/* The Action badge floating near the merge */}
        <div className="absolute left-[60px] top-[120px] w-8 h-8 rounded border border-[#a78bfa] bg-[#121212] flex items-center justify-center shadow-[0_0_15px_rgba(167,139,250,0.4)] animate-[float_3s_ease-in-out_infinite]">
          <GitMerge className="w-4 h-4 text-[#a78bfa]" />
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59,130,246,0.3); }
          50% { box-shadow: 0 0 15px rgba(59,130,246,0.8); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}} />
    </div>
  );
}


export default function GitHubActionsPage() {
  return (
    <ServicePageLayout serviceName="GitHub Actions" accentColor="#a78bfa">

      <ServiceHero
        category="Automation"
        categoryColor="#c4b5fd"
        accentColor="#a78bfa"
        title="Everything as code inside your codebase."
        description="Consolidate your tooling. We engineer sophisticated GitHub Actions workflows that handle everything from linting to multi-cloud deployments natively within GitHub."
        visual={<GitHubActionsVisual />}
      />

      <ServiceFeatures
        title="Native Repository Intelligence"
        subtitle="Unify collaboration and automation by treating your delivery pipelines exactly like your source code."
        accentColor="#a78bfa"
        features={[
          {
            title: "Reusable Workflows",
            description: "Standardize organizational compliance by creating centralized, centrally managed workflows that multiple repositories invoke.",
            icon: Workflow,
          },
          {
            title: "Matrix Build Strategies",
            description: "Test your application against permutations of operating systems, runtimes, and libraries concurrently to guarantee compatibility.",
            icon: GitBranch,
          },
          {
            title: "Custom Actions",
            description: "When shell scripts aren't enough, we build and publish custom Docker or JS-based actions to handle niche tooling integrations.",
            icon: Settings2,
          },
        ]}
      />

      <ServiceProcess
        accentColor="#a78bfa"
        steps={[
          {
            title: "Vulnerability Audit",
            description: "Review third-party actions in use to ensure no compromised tokens or insecure permissions exist.",
          },
          {
            title: "Workflow Consolidation",
            description: "Migrate away from fragmented legacy controllers (like Jenkins) into native YAML configurations.",
          },
          {
            title: "Self-Hosted Runners",
            description: "Deploy scalable ephemeral runners directly in your VPC to handle heavy compute tasks securely.",
          },
          {
            title: "Environments & Secrets",
            description: "Configure GitHub Environments with rigorous manual approval gates connecting securely via OIDC.",
          },
        ]}
      />

      <ServiceCta accentColor="#a78bfa" />

    </ServicePageLayout>
  );
}
