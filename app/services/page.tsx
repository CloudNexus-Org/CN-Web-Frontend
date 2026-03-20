import { KnownFor } from "@/components/sections/known-for";
import { ServicePageLayout } from "@/components/layout/service-page-layout";

export const metadata = {
  title: "All Services | Cloud Nexus",
  description: "Browse our comprehensive suite of cloud, data, and software engineering services designed to scale your business.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative">
      {/* Background ambient glow shared across the index */}
      <div 
        className="absolute top-0 right-0 pointer-events-none transition-all duration-1000 blur-[120px] opacity-10 w-[800px] h-[800px] rounded-full translate-x-1/3 -translate-y-1/3"
        style={{
          background: `radial-gradient(circle, #3b82f6, transparent 70%)`,
        }}
      />
      
      {/* Index Hero */}
      <section className="relative w-full pt-40 pb-20 overflow-hidden border-b border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-[#3b82f6] px-4 py-1.5 text-xs font-semibold text-[#8baef8] uppercase tracking-widest bg-[#3b82f6]/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Our Expertise
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both max-w-4xl mx-auto">
            Engineering solutions for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]">modern web.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#888] leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
            From legacy modernization to cutting-edge generative AI, we provide the architectural foundation and execution your business needs to scale.
          </p>
        </div>
      </section>

      {/* Reusing the KnownFor section which contains all our services */}
      <div className="py-12 relative z-10">
        <KnownFor />
      </div>
    </main>
  );
}
