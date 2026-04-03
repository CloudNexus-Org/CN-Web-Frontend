"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Shield, Gauge, GitBranch, Database } from "lucide-react";

const infra = [
  { icon: Cloud, title: "Cloud Platforms", text: "AWS, Azure, and GCP — multi-cloud architecture for reliability and flexibility." },
  { icon: Server, title: "Containerization", text: "Docker and Kubernetes for scalable, portable, and consistent deployments." },
  { icon: GitBranch, title: "CI/CD Pipelines", text: "GitHub Actions and automated pipelines for fast, safe releases." },
  { icon: Database, title: "Data Infrastructure", text: "PostgreSQL, MongoDB, Redis, and data lakes for any workload." },
  { icon: Shield, title: "Security", text: "End-to-end encryption, IAM, vulnerability scanning, and compliance automation." },
  { icon: Gauge, title: "Monitoring & Observability", text: "Prometheus, Grafana, and ELK stack for real-time insights and alerting." },
];

export default function InfrastructurePage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 lg:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold tracking-tight sm:text-5xl">
          Infrastructure
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto">
          The technology backbone that powers everything we build.
        </motion.p>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {infra.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 dark:border-white/[0.08] dark:bg-white/[0.02]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03] mb-4">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-black/45 dark:text-white/45 leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
