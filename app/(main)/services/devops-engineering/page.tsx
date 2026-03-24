
import type { Metadata } from "next";
import { Cloud, Cog, Lock, Settings, ShieldCheck, TerminalSquare } from "lucide-react";
import { ServicePageLayout } from "@/components/layout/service-page-layout";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServiceCta } from "@/components/sections/service-cta";

export const metadata: Metadata = {
  title: "DevOps Engineering | Cloud Nexus",
  description: "Streamline operations with modern infrastructure as code, automated pipelines, and immutable deployments.",
};

// Custom automated Spinning Gears visual for the Hero
function DevOpsVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center isolate overflow-hidden">

      {/* Background terminal aesthetic */}
      <div className="absolute inset-0 bg-[#0a0a0a] rounded-full opacity-60 flex items-center justify-center border border-[#0ea5e9]/20 font-mono text-[8px] text-[#0ea5e9]/30 p-8 leading-tight break-all overflow-hidden">
        {`terraform apply -auto-approve
module.vpc.aws_vpc.main: Creating...
module.eks.aws_eks_cluster.core: Creating...
Apply complete! Resources: 14 added, 0 changed, 0 destroyed.
kubectl apply -f manifest.yaml
deployment.apps/frontend created
service/frontend-svc created
ingress.networking.k8s.io/main-ingress created`}
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center">

        {/* Large Gear */}
        <div className="absolute top-1/2 left-1/2 -ml-16 -mt-16 w-32 h-32 text-[#0ea5e9]/80 animate-[spin_10s_linear_infinite]">
          <Settings className="w-full h-full stroke-[1.5]" />
        </div>

        {/* Small Gear interlocking */}
        <div className="absolute top-1/2 left-1/2 ml-[22px] mt-[12px] w-20 h-20 text-[#0ea5e9]/50 animate-[spin_8s_linear_infinite_reverse]">
          <Settings className="w-full h-full stroke-[2]" />
        </div>

        {/* Tiny Gear */}
        <div className="absolute top-1/2 left-1/2 -ml-[40px] mt-[30px] w-12 h-12 text-[#0ea5e9]/40 animate-[spin_5s_linear_infinite]">
          <Cog className="w-full h-full stroke-[2]" />
        </div>

        {/* Center hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0ea5e9] rounded-full shadow-[0_0_15px_#0ea5e9] z-10" />

        {/* Orbiting particles */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full z-20"
            style={{
              animation: `dev-orbit 4s linear infinite`,
              animationDelay: `${i * 1}s`,
            }}
          />
        ))}

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes dev-orbit {
            0% { transform: translate(-50%, -50%) rotate(0deg) translateX(100px) scale(0); opacity: 0;}
            20% { opacity: 1; scale: 1; }
            80% { opacity: 1; scale: 1;}
            100% { transform: translate(-50%, -50%) rotate(360deg) translateX(100px) scale(0); opacity: 0; }
          }
        `}} />
      </div>
    </div>
  );
}

export default function DevOpsPage() {
  return (
    <ServicePageLayout serviceName="DevOps Engineering" accentColor="#0ea5e9">

      <ServiceHero
        category="Operations"
        categoryColor="#38bdf8"
        accentColor="#0ea5e9"
        title="Infrastructure as predictable code."
        description="Eliminate configuration drift, manual deployments, and brittle infrastructure. We engineer resilient DevOps ecosystems that empower teams to ship faster, safely."
        visual={<DevOpsVisual />}
      />

      <ServiceFeatures
        title="Modern Cloud Operations"
        subtitle="End-to-end automation of your software delivery lifecycle, bridging the gap between development and IT operations."
        accentColor="#0ea5e9"
        features={[
          {
            title: "Infrastructure as Code",
            description: "Provision and manage AWS, GCP, or Azure environments declaratively using Terraform and Pulumi.",
            icon: TerminalSquare,
          },
          {
            title: "Cloud-Native Platforms",
            description: "Architecture and management of scalable Kubernetes (EKS/GKE) clusters with Istio service meshes.",
            icon: Cloud,
          },
          {
            title: "Security & Vault",
            description: "Immutable deployments with baked-in compliance scanning and dynamic secrets management using Hashicorp Vault.",
            icon: ShieldCheck,
          },
        ]}
      />

      <ServiceProcess
        accentColor="#0ea5e9"
        steps={[
          {
            title: "System Assessment",
            description: "Analyze existing infrastructure, identify manual bottlenecks, and map out the target GitOps workflow.",
          },
          {
            title: "IaC Foundation",
            description: "Codify network topologies, IAM roles, and compute layers into version-controlled Terraform modules.",
          },
          {
            title: "Deployment Pipelines",
            description: "Construct automated delivery pipelines triggering off Git pushes with automated rollback capabilities.",
          },
          {
            title: "Observability",
            description: "Instrument the entire stack with Prometheus, Grafana, and Datadog for actionable alerting.",
          },
        ]}
      />

      <ServiceCta accentColor="#0ea5e9" />

    </ServicePageLayout>
  );
}
