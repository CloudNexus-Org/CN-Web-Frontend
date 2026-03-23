import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { TopClients } from "@/components/sections/top-clients";
import { KnownFor } from "@/components/sections/known-for";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { CaseStudies } from "@/components/sections/case-studies";

export const metadata: Metadata = {
  title: "Build Powerful Digital Products",
  description: "We design and build scalable digital solutions including web applications, cloud infrastructure, data platforms, and modern software systems.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <HeroSection />
      <TopClients />
      <KnownFor />
      <TechStack />
      <CaseStudies />
      <Testimonials />
    </main>
  );
}
