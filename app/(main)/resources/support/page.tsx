"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, FileText, Clock, HelpCircle } from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time for instant help.",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed email and we'll respond within 24 hours.",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call our dedicated support line for urgent issues.",
  },
  {
    icon: FileText,
    title: "Knowledge Base",
    description: "Browse our documentation and guides for self-service help.",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Find quick answers to the most commonly asked questions.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Our systems are monitored round the clock for uptime and performance.",
  },
];

export default function SupportPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Support
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto"
        >
          We&apos;re here to help. Choose a support channel that works best for you.
        </motion.p>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportOptions.map((option, i) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 transition-all duration-300 hover:border-black/[0.15] hover:bg-black/[0.05] dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.15] dark:hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03] mb-4">
                  <Icon className="w-6 h-6 text-[#215B97]" />
                </div>
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <p className="mt-2 text-sm text-black/45 dark:text-white/45 leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
