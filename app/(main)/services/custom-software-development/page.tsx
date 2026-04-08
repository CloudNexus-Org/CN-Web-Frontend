"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Code, Layers, Settings, Shield, Zap, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

const offerings = [
  { icon: Code, title: "Enterprise Software", desc: "Scalable enterprise-grade applications built with robust architectures that grow with your business." },
  { icon: Layers, title: "SaaS Products", desc: "End-to-end SaaS development from MVP to market-ready product with multi-tenant architecture." },
  { icon: Settings, title: "Legacy Modernization", desc: "Transform outdated systems into modern, cloud-ready solutions without disrupting operations." },
  { icon: GitBranch, title: "API & Integrations", desc: "RESTful & GraphQL API development with seamless third-party service integrations." },
  { icon: Shield, title: "Quality Assurance", desc: "Comprehensive testing strategies — unit, integration, E2E, and performance testing." },
  { icon: Zap, title: "Maintenance & Support", desc: "24/7 monitoring, proactive updates, and continuous optimization post-launch." },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understanding your business goals, user needs, and technical requirements." },
  { step: "02", title: "Architecture", desc: "Designing scalable system architecture, database schemas, and API contracts." },
  { step: "03", title: "Development", desc: "Agile sprints with iterative builds, code reviews, and continuous integration." },
  { step: "04", title: "Testing", desc: "Rigorous QA across functional, security, performance, and usability dimensions." },
  { step: "05", title: "Deployment", desc: "Zero-downtime deployments with containerized infrastructure and monitoring." },
  { step: "06", title: "Support", desc: "Post-launch optimization, feature enhancements, and dedicated support." },
];

const techStack = ["Java", "Spring Boot", "Node.js", "React", "Next.js", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Azure", "Redis"];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80"
          alt="Custom Software Development"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={16} /> Back to Services
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
            >
              Custom Software Development
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="py-16 max-w-4xl"
        >
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">
            We build custom software solutions from the ground up — designed to solve your unique challenges, streamline operations, and drive growth. From enterprise platforms to SaaS products, our engineering team delivers high-performance applications that scale with your business.
          </p>
          <p className="mt-6 text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">
            Every line of code is written with purpose. We follow industry best practices in clean architecture, automated testing, and DevOps to ensure your software is maintainable, secure, and future-proof.
          </p>
        </motion.div>

        {/* What We Offer */}
        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#215B97]/30 hover:bg-black/[0.04] transition-all dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#215B97]/30 dark:hover:bg-white/[0.04]"
              >
                <item.icon size={24} className="text-[#215B97] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-12">Our Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="text-4xl font-bold text-[#215B97]/20">{item.step}</span>
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
              <span key={tech} className="px-4 py-2 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 border-t border-black/[0.06] dark:border-white/[0.06] text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-black/50 dark:text-white/50 mb-8 max-w-lg mx-auto">Let&apos;s discuss your project requirements and create a custom solution tailored to your business.</p>
          <Link href="/resources/free-consultation">
            <Button size="lg" className="rounded-lg bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 px-8">
              Book a Free Consultation <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
