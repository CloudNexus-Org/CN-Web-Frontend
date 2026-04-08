"use client";

import { motion } from "framer-motion";
import { Heart, Coffee, Gamepad2, GraduationCap, Globe, Sparkles } from "lucide-react";

const perks = [
  { icon: Coffee, title: "Flexible Work Culture", text: "Work from anywhere — we believe in results, not hours." },
  { icon: Heart, title: "Employee Well-being", text: "Mental health support, wellness programs, and a healthy work-life balance." },
  { icon: Gamepad2, title: "Fun at Work", text: "Team outings, game nights, hackathons, and celebrations that keep the energy high." },
  { icon: GraduationCap, title: "Learning & Growth", text: "Access to courses, certifications, conferences, and mentorship programs." },
  { icon: Globe, title: "Diverse & Inclusive", text: "A team from different backgrounds, united by a shared passion for technology." },
  { icon: Sparkles, title: "Innovation First", text: "We encourage experimentation — your ideas can become real products." },
];

export default function LifeAtCloudNexusPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 lg:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold tracking-tight sm:text-5xl">
          Life @ Cloud Nexus
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto">
          More than a workplace — it&apos;s a community of builders, dreamers, and innovators.
        </motion.p>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <motion.div key={perk.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 dark:border-white/[0.08] dark:bg-white/[0.02]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03] mb-4">
                  <Icon className="w-6 h-6 text-[#215B97]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{perk.title}</h3>
                <p className="text-sm text-black/45 dark:text-white/45 leading-relaxed">{perk.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
