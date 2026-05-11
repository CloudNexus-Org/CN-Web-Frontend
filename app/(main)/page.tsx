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
import { HomeSplashWrapper } from "@/components/home-splash-wrapper";

const CaseStudies = dynamic(
  () => import("@/components/sections/case-studies").then((m) => m.CaseStudies),
);

export const metadata: Metadata = {
  title: "Cloud Nexus - Custom Software Development & IT Solutions Company",
  description:
    "Cloud Nexus is a leading software development company offering custom software, mobile apps, cloud solutions & AI/ML services from Bhopal, India.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cloud Nexus - Custom Software Development & IT Solutions Company",
    description:
      "Cloud Nexus is a leading software development company offering custom software, mobile apps, cloud solutions & AI/ML services from Bhopal, India.",
    url: "https://cloudnexus.in/",
  },
};

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-white text-black dark:bg-black dark:text-white">
      <HomeSplashWrapper />
      <HeroSection />
      <BuildScaleThrive />
      <KnownFor />
      <CaseStudies />
      <WhyCloudNexus />


      <TechStack />
      <TopClients />
      <Testimonials />
      <FreeConsultation />
      <FAQs />
    </main>
  );
}
