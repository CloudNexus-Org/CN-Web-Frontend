"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Smartphone, Cpu, Palette, Cloud, ShieldCheck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const offerings = [
  { icon: Smartphone, title: "Native iOS & Android", desc: "High-performance native apps built with Swift and Kotlin for the best user experience." },
  { icon: Cpu, title: "Cross-Platform Apps", desc: "React Native & Flutter development for consistent experiences across platforms with a single codebase." },
  { icon: Palette, title: "UI/UX for Mobile", desc: "Intuitive, gesture-driven interfaces designed following Apple HIG and Material Design guidelines." },
  { icon: Cloud, title: "Backend & APIs", desc: "Robust backend services with real-time sync, push notifications, and cloud infrastructure." },
  { icon: ShieldCheck, title: "App Security", desc: "Secure authentication, encrypted storage, and compliance with app store security requirements." },
  { icon: BarChart3, title: "Analytics & Growth", desc: "Built-in analytics, A/B testing, and performance monitoring for data-driven improvements." },
];

const process = [
  { step: "01", title: "Strategy & Research", desc: "Market research, competitor analysis, and defining the product roadmap." },
  { step: "02", title: "Wireframing", desc: "Low and high-fidelity wireframes with user flow mapping and prototyping." },
  { step: "03", title: "UI/UX Design", desc: "Pixel-perfect designs with micro-interactions and accessibility in mind." },
  { step: "04", title: "Development", desc: "Iterative development sprints with CI/CD pipelines and automated testing." },
  { step: "05", title: "QA & Beta", desc: "Device-specific testing, beta distribution, and user feedback collection." },
  { step: "06", title: "Launch & Scale", desc: "App store submissions, ASO, and post-launch feature iterations." },
];

const techStack = ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Node.js", "AWS Amplify", "Redux", "TypeScript"];

export default function MobileAppDevelopmentPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80"
          alt="Mobile App Development"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            Mobile App Development
          </motion.h1>
        </div>
      </div>

      <div className="w-full px-6 md:px-10 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="py-16 max-w-4xl">
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">
            We craft iOS and Android applications that users love. From concept to launch, our mobile team delivers polished, high-performance apps with seamless UX, robust backends, and scalable architecture.
          </p>
          <p className="mt-6 text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">
            Whether you need a consumer-facing app, an enterprise mobility solution, or a cross-platform product, we bring deep expertise in native and cross-platform development to turn your vision into reality.
          </p>
        </motion.div>

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-blue-500/30 hover:bg-black/[0.04] transition-all dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-blue-500/30 dark:hover:bg-white/[0.04]">
                <item.icon size={24} className="text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-12">Our Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <span className="text-4xl font-bold text-blue-500/20">{item.step}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60">{tech}</span>
            ))}
          </div>
        </div>

        <div className="py-20 border-t border-black/[0.06] dark:border-white/[0.06] text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your App?</h2>
          <p className="text-black/50 dark:text-white/50 mb-8 max-w-lg mx-auto">Let&apos;s turn your app idea into a polished product that users love.</p>
          <Link href="/resources/free-consultation">
            <Button size="lg" className="rounded-lg bg-blue-600 text-foreground hover:bg-blue-700 px-8">
              Book a Free Consultation <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
