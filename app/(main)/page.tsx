import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { TopClients } from "@/components/sections/top-clients";
import { BuildScaleThrive } from "@/components/sections/build-scale-thrive";
import { KnownFor } from "@/components/sections/known-for";

import { Testimonials } from "@/components/sections/testimonials";
import { CaseStudies } from "@/components/sections/case-studies";

export const metadata: Metadata = {
  title: "Build Powerful Digital Products",
  description: "We design and build scalable digital solutions including web applications, cloud infrastructure, data platforms, and modern software systems.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white text-black dark:bg-black dark:text-white">
      <HeroSection />
      <BuildScaleThrive />
      {/* <TopClients /> */}
      <KnownFor />

      <CaseStudies />
      <Testimonials />
    </main>
  );
}
