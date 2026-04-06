"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, GitBranch, Box, Server, Zap, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const offerings = [
  { icon: GitBranch, title: "CI/CD Pipelines", desc: "Automated build, test, and deploy pipelines using GitHub Actions, Jenkins, or GitLab CI." },
  { icon: Box, title: "Containerization", desc: "Docker containerization and Kubernetes orchestration for consistent, portable deployments." },
  { icon: Server, title: "Infrastructure as Code", desc: "Terraform and Pulumi for reproducible, version-controlled infrastructure provisioning." },
  { icon: Zap, title: "Auto-Scaling", desc: "Dynamic scaling policies, load balancing, and performance optimization for peak traffic." },
  { icon: BarChart3, title: "Monitoring & Observability", desc: "Full-stack monitoring with Prometheus, Grafana, and distributed tracing tools." },
  { icon: Shield, title: "DevSecOps", desc: "Security scanning integrated into CI/CD — SAST, DAST, container scanning, and secrets management." },
];

const process = [
  { step: "01", title: "Assessment", desc: "Evaluating current deployment processes, infrastructure, and pain points." },
  { step: "02", title: "Pipeline Design", desc: "Designing CI/CD architecture with automated testing, staging, and production gates." },
  { step: "03", title: "Infrastructure Setup", desc: "Provisioning cloud infrastructure with IaC and setting up container orchestration." },
  { step: "04", title: "Automation", desc: "Automating deployments, scaling policies, backup strategies, and alerts." },
  { step: "05", title: "Monitoring", desc: "Setting up dashboards, alerting rules, log aggregation, and incident workflows." },
  { step: "06", title: "Optimization", desc: "Continuous improvement of pipeline speed, reliability, and cost efficiency." },
];

const techStack = ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Ansible", "Prometheus", "Grafana", "ArgoCD", "Helm", "AWS EKS", "Datadog"];

export default function DevOpsCloudAutomationPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80" alt="DevOps & Cloud Automation" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors mb-6"><ArrowLeft size={16} /> Back to Services</Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">DevOps & Cloud Automation</motion.h1>
        </div>
      </div>

      <div className="w-full px-6 md:px-10 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="py-16 max-w-4xl">
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">We engineer CI/CD pipelines, containerized deployments, and automated infrastructure that enable your team to ship faster, more reliably, and with confidence.</p>
          <p className="mt-6 text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">From Docker and Kubernetes to Terraform and monitoring stacks, our DevOps practice eliminates deployment friction and gives you full visibility into your production systems.</p>
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

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (<span key={tech} className="px-4 py-2 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60">{tech}</span>))}
          </div>
        </div>

        <div className="py-20 border-t border-black/[0.06] dark:border-white/[0.06] text-center">
          <h2 className="text-3xl font-bold mb-4">Ship Faster, Sleep Better</h2>
          <p className="text-black/50 dark:text-white/50 mb-8 max-w-lg mx-auto">Let us automate your infrastructure and build deployment pipelines that your team will love.</p>
          <Link href="/resources/free-consultation"><Button size="lg" className="rounded-lg bg-blue-600 text-foreground hover:bg-blue-700 px-8">Book a Free Consultation <ArrowRight size={16} className="ml-2" /></Button></Link>
        </div>
      </div>
    </section>
  );
}
