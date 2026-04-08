import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero-section";
import { BuildScaleThrive } from "@/components/sections/build-scale-thrive";
import { KnownFor } from "@/components/sections/known-for";

import { TechStack } from "@/components/sections/tech-stack";
import { TopClients } from "@/components/sections/top-clients";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyCloudNexus } from "@/components/sections/why-cloudnexus";
import { FreeConsultation } from "@/components/sections/free-consultation";
import { FAQs } from "@/components/sections/faqs";

const CaseStudies = dynamic(
  () => import("@/components/sections/case-studies").then((m) => m.CaseStudies),
);

const StatsGlobe = dynamic(
  () => import("@/components/sections/stats-globe").then((m) => m.StatsGlobe),
);

export const metadata: Metadata = {
  title: "Build Powerful Digital Products",
  description: "We design and build scalable digital solutions including web applications, cloud infrastructure, data platforms, and modern software systems.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white text-black dark:bg-black dark:text-white">
      <HeroSection />
      <BuildScaleThrive />
      <KnownFor />
      <CaseStudies />
      <WhyCloudNexus />
      <StatsGlobe />
      <TechStack />
      <TopClients />
      <Testimonials />
      <FreeConsultation />
      <FAQs />
    </main>
  );
}
