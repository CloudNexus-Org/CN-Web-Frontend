"use client";

import { motion } from "framer-motion";
import { Banknote, HeartPulse, GraduationCap, Plane, Home, Trophy } from "lucide-react";

const benefits = [
  { icon: Banknote, title: "Competitive Salary", text: "Industry-standard compensation with regular appraisals and performance bonuses." },
  { icon: HeartPulse, title: "Health & Wellness", text: "Comprehensive health insurance, mental health support, and wellness programs." },
  { icon: GraduationCap, title: "Learning Budget", text: "Annual budget for courses, certifications, books, and conference tickets." },
  { icon: Home, title: "Remote Flexibility", text: "Work from anywhere — office, home, or a beach. We trust our team." },
  { icon: Plane, title: "Paid Time Off", text: "Generous leave policy including vacation, sick days, and personal time." },
  { icon: Trophy, title: "Recognition & Rewards", text: "Spot bonuses, shoutouts, and awards for outstanding contributions." },
];

export default function CareerBenefitsPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 lg:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold tracking-tight sm:text-5xl">
          Career Benefits
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto">
          We take care of our people so they can do their best work.
        </motion.p>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 dark:border-white/[0.08] dark:bg-white/[0.02]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03] mb-4">
                  <Icon className="w-6 h-6 text-[#215B97]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-black/45 dark:text-white/45 leading-relaxed">{benefit.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
