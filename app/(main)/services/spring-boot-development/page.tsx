
import type { Metadata } from "next";
import { Leaf, Lock, Component, Server } from "lucide-react";
import { ServicePageLayout } from "@/components/layout/service-page-layout";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServiceCta } from "@/components/sections/service-cta";

export const metadata: Metadata = {
  title: "Spring Boot Development | Cloud Nexus",
  description: "Build robust, production-grade microservices and backend systems leveraging the Spring ecosystem.",
};

// Custom automated Bar Chart / Growth visual for the Hero
function SpringBootVisual() {
  return (
    <div className="relative w-full h-full flex items-end justify-center isolate p-12 pb-24">
      {/* Background grid lines */}
      <div className="absolute inset-x-8 top-12 bottom-24 border-b border-l border-[#333] z-0 flex flex-col justify-between pt-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-full border-t border-[#333]/40" />
        ))}
      </div>

      <div className="relative flex items-end justify-center gap-4 sm:gap-6 lg:gap-8 w-full h-[200px] z-10 px-8">

        {/* Growing Bars */}
        {[30, 55, 40, 85, 60, 100].map((height, i) => (
          <div key={i} className="relative flex flex-col items-center group">

            {/* Pop-up metric value on hover */}
            <div className="absolute -top-8 bg-[#222] text-[#22c55e] text-[10px] font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {height}0k req/s
            </div>

            <div
              className="w-8 sm:w-10 lg:w-12 bg-gradient-to-t from-[#22c55e]/20 to-[#22c55e] rounded-sm rounded-t-md border-t border-l border-[#22c55e]/50 shadow-[0_0_15px_rgba(34,197,94,0.2)] animate-[grow-up_1.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{
                height: '0%', // Start height for animation
                animationDelay: `${i * 0.15}s`,
                '--target-height': `${height}%`
              } as React.CSSProperties}
            >
              <div className="w-full h-1 bg-white/30 rounded-t-md" />
            </div>

            {/* Label below axis */}
            <span className="absolute -bottom-6 text-[9px] text-[#666] font-mono uppercase tracking-wider">
              Node 0{i + 1}
            </span>
          </div>
        ))}

        <Leaf className="absolute top-0 right-4 w-6 h-6 text-[#22c55e] opacity-20" />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes grow-up {
          0% { height: 0%; opacity: 0; }
          100% { height: var(--target-height); opacity: 1; }
        }
      `}} />
    </div>
  );
}

export default function SpringBootPage() {
  return (
    <ServicePageLayout serviceName="Spring Boot Development" accentColor="#22c55e">

      <ServiceHero
        category="Architecture"
        categoryColor="#4ade80"
        accentColor="#22c55e"
        title="Enterprise backends built to scale instantly."
        description="We architect and build highly concurrent, fault-tolerant microservices using the Spring ecosystem, designed to handle massive throughput with ease."
        visual={<SpringBootVisual />}
      />

      <ServiceFeatures
        title="Production-Grade JVM Systems"
        subtitle="Harnessing decades of Java stability coupled with modern cloud deployment strategies."
        accentColor="#22c55e"
        features={[
          {
            title: "Microservice Topology",
            description: "Design strictly bound contexts interacting via async eventbuses (Kafka/RabbitMQ) or RESTful APIs.",
            icon: Component,
          },
          {
            title: "Reactive Paradigms",
            description: "Implement Spring WebFlux for non-blocking, event-driven applications that handle massive workloads.",
            icon: Server,
          },
          {
            title: "Zero-Trust Security",
            description: "Secure cross-service communication with Spring Security, OAuth2 resource servers, and JWT tokens.",
            icon: Lock,
          },
        ]}
      />

      <ServiceProcess
        accentColor="#22c55e"
        steps={[
          {
            title: "Domain Modeling",
            description: "Collaborative event storming to define aggregates, entities, and bounded contexts.",
          },
          {
            title: "Core Framework",
            description: "Setup the Spring Boot chassis including config servers, service discovery, and tracing.",
          },
          {
            title: "Business Logic",
            description: "Test-Driven Development (TDD) of domain logic insulated from framework dependencies.",
          },
          {
            title: "Containerization",
            description: "Dockerize JVM apps, applying native compilation (GraalVM) if fast startup is required.",
          },
        ]}
      />

      <ServiceCta accentColor="#22c55e" />

    </ServicePageLayout>
  );
}
