"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DevopsCloudAutomationPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-4xl px-4 pt-24 pb-24 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-5xl mb-6">⚡</div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            DevOps & Cloud Automation
          </h1>
          <p className="mt-6 text-lg text-black/60 dark:text-white/60 leading-relaxed">
            CI/CD pipelines, containerization, and automated infrastructure for faster delivery. We streamline your development lifecycle so you can ship with confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="space-y-3 text-black/55 dark:text-white/55 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                CI/CD pipeline design and implementation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                Docker and Kubernetes container orchestration
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                Infrastructure as Code (Terraform, Ansible, Pulumi)
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                Monitoring, logging, and alerting (Prometheus, Grafana, ELK)
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                Site reliability engineering (SRE) and uptime optimization
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
