
import type { Metadata } from "next";
import { AreaChart, BrainCircuit, Microscope, Network } from "lucide-react";
import { ServicePageLayout } from "@/components/layout/service-page-layout";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServiceCta } from "@/components/sections/service-cta";

export const metadata: Metadata = {
  title: "TensorFlow Solutions | Cloud Nexus",
  description: "Develop custom machine learning models tailored to your specific data utilizing the TensorFlow ecosystem.",
};

// Custom automated TensorFlow/Neural Network Grid visual for the Hero
function TensorFlowVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center isolate perspective-1000">

      {/* 3D rotated grid of nodes representing a tensor/matrix */}
      <div className="relative w-56 h-56 rotate-x-60 -rotate-z-45 transform-style-3d animate-[float_6s_ease-in-out_infinite]">

        {/* Layer 1 - Bottom */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-30 transform translate-z-[-40px]">
          {[...Array(16)].map((_, i) => (
            <div key={`l1-${i}`} className="w-full h-full bg-[#ef4444]/20 border border-[#ef4444]/40 rounded-sm" />
          ))}
        </div>

        {/* Layer 2 - Middle */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-60">
          {[...Array(16)].map((_, i) => {
            const isActive = [5, 6, 9, 10].includes(i);
            return (
              <div
                key={`l2-${i}`}
                className={`w-full h-full rounded-sm transition-colors duration-1000 border ${isActive ? 'bg-[#ef4444]/60 border-[#ef4444] shadow-[0_0_15px_#ef4444]' : 'bg-[#ef4444]/10 border-[#ef4444]/30'}`}
                style={{ animation: isActive ? `pulse 2s infinite ${i * 0.2}s` : 'none' }}
              />
            );
          })}
        </div>

        {/* Layer 3 - Top */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-90 transform translate-z-[40px]">
          {[...Array(16)].map((_, i) => {
            const isActive = [5, 10].includes(i);
            return (
              <div
                key={`l3-${i}`}
                className={`w-full h-full rounded-sm flex items-center justify-center border ${isActive ? 'bg-[#ef4444] border-white/50 shadow-[0_0_20px_#ef4444]' : 'bg-[#1a1a1a] border-[#ef4444]/40'}`}
              >
                {isActive && <div className="w-1 h-1 bg-white rounded-full" />}
              </div>
            );
          })}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .perspective-1000 { perspective: 1000px; }
        .rotate-x-60 { transform: rotateX(60deg); }
        .-rotate-z-45 { transform: rotateX(60deg) rotateZ(-45deg); }
        .transform-style-3d { transform-style: preserve-3d; }
        .translate-z-\\[-40px\\] { transform: translateZ(-40px); }
        .translate-z-\\[40px\\] { transform: translateZ(40px); }
        
        @keyframes float {
          0% { transform: rotateX(55deg) rotateZ(-45deg) translateZ(0px); }
          50% { transform: rotateX(65deg) rotateZ(-45deg) translateZ(20px); }
          100% { transform: rotateX(55deg) rotateZ(-45deg) translateZ(0px); }
        }
      `}} />
    </div>
  );
}

export default function TensorFlowPage() {
  return (
    <ServicePageLayout serviceName="TensorFlow Solutions" accentColor="#ef4444">

      <ServiceHero
        category="Machine Learning"
        categoryColor="#f87171"
        accentColor="#ef4444"
        title="Custom ML models trained for your domain."
        description="We build, train, and deploy high-performance neural networks using the TensorFlow ecosystem to solve complex classification, forecasting, and computer vision challenges."
        visual={<TensorFlowVisual />}
      />

      <ServiceFeatures
        title="Deep Learning Architecture"
        subtitle="Harnessing mathematical precision to extract high-value insights from vast datasets."
        accentColor="#ef4444"
        features={[
          {
            title: "Custom Model Architectures",
            description: "Design bespoke CNNs for vision, LSTMs for time-series, or custom Transformer architectures for niche datasets.",
            icon: Network,
          },
          {
            title: "Transfer Learning",
            description: "Accelerate development by fine-tuning state-of-the-art pre-trained models on your specific classification tasks.",
            icon: BrainCircuit,
          },
          {
            title: "TF Serving Deployment",
            description: "Export optimized SavedModels into gRPC/REST APIs using TensorFlow Serving for low-latency production inference.",
            icon: AreaChart,
          },
        ]}
      />

      <ServiceProcess
        accentColor="#ef4444"
        steps={[
          {
            title: "Data Engineering",
            description: "Ingest, clean, and annotate training data, resolving class imbalances using tf.data pipelines.",
          },
          {
            title: "Model Prototyping",
            description: "Establish baseline metrics and iterate on network architectures using Keras in Jupyter environments.",
          },
          {
            title: "Training at Scale",
            description: "Distribute training workloads across GPU clusters using MirroredStrategy and track with TensorBoard.",
          },
          {
            title: "Optimization",
            description: "Quantize and prune models with TF Lite/TensorRT to maximize throughput on production hardware.",
          },
        ]}
      />

      <ServiceCta accentColor="#ef4444" />

    </ServicePageLayout>
  );
}
