"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, RefreshCw, Workflow, Bot, Database, Cloud, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const offerings = [
  { icon: RefreshCw, title: "Legacy Modernization", desc: "Transform aging monolithic systems into modern, cloud-native microservices architectures." },
  { icon: Workflow, title: "Process Automation", desc: "Automate repetitive workflows with RPA, custom scripts, and intelligent orchestration tools." },
  { icon: Bot, title: "AI-Powered Solutions", desc: "Embed AI and machine learning into business processes for smarter decision-making." },
  { icon: Database, title: "Data Strategy", desc: "Unified data platforms, ETL pipelines, and real-time analytics for data-driven operations." },
  { icon: Cloud, title: "Cloud Adoption", desc: "End-to-end cloud strategy — assessment, migration, optimization, and managed services." },
  { icon: BarChart3, title: "Digital Roadmapping", desc: "Strategic roadmaps aligned with business goals, technology trends, and market opportunities." },
];

const process = [
  { step: "01", title: "Audit", desc: "Comprehensive assessment of current systems, processes, and technology landscape." },
  { step: "02", title: "Strategy", desc: "Defining transformation goals, KPIs, and phased implementation roadmap." },
  { step: "03", title: "Pilot", desc: "Implementing quick-win projects to demonstrate value and build momentum." },
  { step: "04", title: "Scale", desc: "Rolling out transformation initiatives across departments and business units." },
  { step: "05", title: "Measure", desc: "Tracking KPIs, gathering feedback, and measuring ROI of transformations." },
  { step: "06", title: "Evolve", desc: "Continuous improvement cycles with emerging technologies and market feedback." },
];

const techStack = ["Kubernetes", "Terraform", "Apache Kafka", "Airflow", "Power Automate", "UiPath", "Snowflake", "dbt", "Azure DevOps", "GitHub Actions"];

export default function DigitalTransformationPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80" alt="Digital Transformation" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors mb-6"><ArrowLeft size={16} /> Back to Services</Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">Digital Transformation</motion.h1>
        </div>
      </div>

      <div className="w-full px-6 md:px-10 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="py-16 max-w-4xl">
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">We help organizations modernize their technology landscape — from legacy systems to automated workflows — enabling them to operate faster, smarter, and more efficiently in the digital era.</p>
          <p className="mt-6 text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">Our approach combines strategic consulting with hands-on engineering, ensuring every transformation initiative delivers measurable business impact.</p>
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
            {techStack.map((tech) => (<span key={tech} className="px-4 py-2 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60">{tech}</span>))}
          </div>
        </div>

        <div className="py-20 border-t border-black/[0.06] dark:border-white/[0.06] text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Business</h2>
          <p className="text-black/50 dark:text-white/50 mb-8 max-w-lg mx-auto">Start your digital transformation journey with a team that understands both technology and business.</p>
          <Link href="/resources/free-consultation"><Button size="lg" className="rounded-lg bg-blue-600 text-foreground hover:bg-blue-700 px-8">Book a Free Consultation <ArrowRight size={16} className="ml-2" /></Button></Link>
        </div>
      </div>
    </section>
  );
}
