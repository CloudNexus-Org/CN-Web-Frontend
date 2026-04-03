"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket, Users } from "lucide-react";

const highlights = [
  { icon: Target, title: "Our Mission", text: "To empower businesses with cutting-edge technology solutions that drive growth and innovation." },
  { icon: Eye, title: "Our Vision", text: "To be the most trusted technology partner for businesses worldwide." },
  { icon: Rocket, title: "What We Do", text: "We design, build, and scale digital products — from cloud infrastructure to AI-powered applications." },
  { icon: Users, title: "Who We Serve", text: "Startups, enterprises, and organizations across healthcare, finance, e-commerce, and more." },
];

export default function OverviewPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 lg:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold tracking-tight sm:text-5xl">
          Company Overview
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto">
          Cloud Nexus is a technology company building scalable digital solutions for the modern world.
        </motion.p>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-black/[0.08] bg-black/[0.02] p-8 dark:border-white/[0.08] dark:bg-white/[0.02]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03] mb-4">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
