"use client";

import { motion } from "framer-motion";
import { Globe, Handshake, BrainCircuit, ArrowRight, Award, Target, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    Icon: Award,
    title: "Global Recognition",
    description:
      "Featured as a LinkedIn Top 20 Company (2023, 2024) and part of the Google AI Accelerator Batch (2024).",
    stat: "Top 20",
    statLabel: "LinkedIn Ranking",
  },
  {
    Icon: Handshake,
    title: "Elite Partnerships",
    description:
      "Worked with Y Combinator, Tiger Global, Accel-backed ventures, and Fortune 500 giants like Adani and Apollo Hospitals.",
    stat: "Fortune 500",
    statLabel: "Client Portfolio",
  },
  {
    Icon: BrainCircuit,
    title: "Precision Talent Matching",
    description:
      "AI-powered sourcing ensures a 98% joining rate with reduced turnover.",
    stat: "98%",
    statLabel: "Joining Rate",
  },
  {
    Icon: Globe,
    title: "Global Delivery",
    description:
      "Seamless delivery across time zones with dedicated teams in India, US, and Europe.",
    stat: "3+",
    statLabel: "Global Regions",
  },
  {
    Icon: Target,
    title: "Result-Driven Approach",
    description:
      "Every engagement is backed by measurable KPIs and transparent reporting from day one.",
    stat: "100%",
    statLabel: "Transparency",
  },
  {
    Icon: Users,
    title: "Scalable Teams",
    description:
      "Rapidly scale from a single developer to a full 50+ member engineering pod within weeks.",
    stat: "50+",
    statLabel: "Engineers On-Demand",
  },
];

export function WhyCloudNexus() {
  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">
                Why CloudNexus
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white"
            >
              Your Partner for Scalable,
              <br className="hidden sm:block" />
              Efficient, and Transparent Hiring
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-sm md:text-base text-black/50 dark:text-white/50 leading-relaxed"
            >
              For over a decade, CloudNexus has helped enterprises hire smarter,
              scale seamlessly, and reduce costs.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              href="/company/about-us"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#3b82f6] hover:underline"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="group relative rounded-2xl bg-[#121212] border border-[#2e2e2e] hover:border-[#3b82f6]/50 hover:bg-[#161616] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] transition-all duration-500 p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/[0.03] rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#2e2e2e] bg-[#1a1a1a] text-[#ededed] group-hover:text-[#3b82f6] group-hover:border-[#3b82f6]/30 transition-colors duration-500">
                  <feature.Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="text-lg font-medium text-[#ededed] mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#8b8b8b] leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="pt-4 border-t border-[#2e2e2e] group-hover:border-[#3b82f6]/20 transition-colors duration-500">
                  <span className="text-2xl font-bold text-white tabular-nums">
                    {feature.stat}
                  </span>
                  <p className="text-[11px] text-[#555] mt-0.5 uppercase tracking-wider font-medium">
                    {feature.statLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
