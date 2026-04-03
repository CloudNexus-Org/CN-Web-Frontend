"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, TestTube, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery & Research", text: "We understand your business, goals, and users before writing a single line of code." },
  { icon: PenTool, title: "Design & Prototyping", text: "Wireframes, UI/UX design, and interactive prototypes to visualize the solution." },
  { icon: Code2, title: "Development", text: "Agile sprints with clean, scalable code — built for performance and maintainability." },
  { icon: TestTube, title: "Testing & QA", text: "Rigorous testing — unit, integration, performance, and security — before every release." },
  { icon: Rocket, title: "Deployment & Launch", text: "CI/CD pipelines ensure smooth, zero-downtime deployments to production." },
  { icon: LifeBuoy, title: "Support & Iteration", text: "Post-launch monitoring, bug fixes, feature updates, and ongoing support." },
];

export default function ProcessMethodologyPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 lg:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold tracking-tight sm:text-5xl">
          Process Methodology
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto">
          Our proven 6-step process ensures every project is delivered on time, on budget, and at the highest quality.
        </motion.p>
      </div>
      <div className="mx-auto max-w-3xl px-4 pb-24 lg:px-8 space-y-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div key={step.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-start gap-5 rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03] shrink-0">
                <Icon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  <span className="text-blue-500 mr-2">{i + 1}.</span>{step.title}
                </h3>
                <p className="text-sm text-black/45 dark:text-white/45 leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
