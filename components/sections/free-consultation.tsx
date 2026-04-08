"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, Clock, Shield } from "lucide-react";

const highlightIcons = [MessageSquare, Clock, Shield];

const consultationHighlights = [
  "1-on-1 Expert Session",
  "30 Min Free Call",
  "No Commitment Required",
];

export function FreeConsultation() {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-gradient-to-br from-black via-black to-zinc-900 dark:from-white dark:via-white dark:to-zinc-100"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#215B97]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

          <div className="relative px-5 py-10 sm:px-8 sm:py-12 md:px-14 md:py-16 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-[11px] font-semibold text-indigo-400 dark:text-indigo-600 uppercase tracking-[0.2em] mb-4">
                Free Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white dark:text-black leading-tight mb-4">
                Let&apos;s Build Something
                <br className="hidden sm:block" />
                Great Together
              </h2>
              <p className="text-sm md:text-base text-white/50 dark:text-black/50 leading-relaxed max-w-md mb-8">
                Book a free consultation with our experts. Share your vision, discuss your challenges, and get a tailored roadmap — no strings attached.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                {highlightIcons.map((Icon, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white/60 dark:text-black/60"
                  >
                    <Icon size={15} strokeWidth={1.8} />
                    <span className="text-xs font-medium">{consultationHighlights[i]}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/resources/contact"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-white dark:bg-black text-black dark:text-white px-7 py-3 text-sm font-semibold hover:bg-white/90 dark:hover:bg-black/90 transition-all duration-300 shadow-lg shadow-white/10 dark:shadow-black/10"
              >
                Get Free Consultation
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="hidden md:flex flex-col items-center gap-4 flex-shrink-0">
              <div className="w-44 h-44 rounded-2xl border border-white/[0.08] dark:border-black/[0.08] bg-white/[0.04] dark:bg-black/[0.04] backdrop-blur-sm flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-indigo-500/15 flex items-center justify-center">
                  <MessageSquare size={28} strokeWidth={1.5} className="text-indigo-400 dark:text-indigo-600" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-white dark:text-black">Talk to an Expert</p>
                  <p className="text-[10px] text-white/40 dark:text-black/40 mt-0.5">Response within 24hrs</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-indigo-400 dark:bg-indigo-600" : "bg-white/20 dark:bg-black/20"}`} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
