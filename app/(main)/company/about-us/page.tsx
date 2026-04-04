"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Users,
  Zap,
  Target,
  Award,
  ShieldCheck,
  Rocket,
  BrainCircuit,
  Building2,
  Handshake,
} from "lucide-react";

const milestones = [
  { year: "2013", event: "CloudNexus founded with a vision to bridge the tech talent gap" },
  { year: "2016", event: "Expanded to 100+ enterprise clients across India and the US" },
  { year: "2018", event: "Launched dedicated engineering pod model for Y Combinator startups" },
  { year: "2020", event: "Partnered with Tiger Global and Accel-backed ventures" },
  { year: "2023", event: "Recognized as LinkedIn Top 20 Company — two years running" },
  { year: "2024", event: "Selected for Google AI Accelerator Batch; Fortune 500 portfolio" },
];

const values = [
  {
    Icon: Target,
    title: "Precision First",
    description: "Every hire, every solution is backed by data-driven matching and measurable KPIs — no guesswork.",
  },
  {
    Icon: ShieldCheck,
    title: "Radical Transparency",
    description: "Real-time dashboards, open communication, and honest timelines. We earn trust by showing the work.",
  },
  {
    Icon: Zap,
    title: "Speed at Scale",
    description: "From single engineers to 50+ member pods, we scale in weeks — not months.",
  },
  {
    Icon: BrainCircuit,
    title: "AI-Native Thinking",
    description: "Our proprietary AI sourcing engine achieves 98% joining rates by matching talent with surgical precision.",
  },
  {
    Icon: Globe,
    title: "Global by Design",
    description: "Seamless delivery across time zones with teams in India, the US, and Europe.",
  },
  {
    Icon: Handshake,
    title: "Partnership Mindset",
    description: "We don't do transactions. We build lasting relationships that compound into mutual growth.",
  },
];

const stats = [
  { value: "527+", label: "Projects Delivered" },
  { value: "10+", label: "Years of Expertise" },
  { value: "98%", label: "Joining Rate" },
  { value: "15+", label: "Industries Served" },
];

const leaders = [
  {
    name: "Leadership",
    title: "Executive Team",
    description: "Seasoned operators with 50+ combined years in enterprise tech, staffing, and AI — driving CloudNexus's vision forward.",
    Icon: Users,
  },
  {
    name: "Engineering",
    title: "Technical Excellence",
    description: "Full-stack architects, ML engineers, and DevOps specialists building production-grade solutions at scale.",
    Icon: Rocket,
  },
  {
    name: "Partnerships",
    title: "Strategic Alliances",
    description: "Deep relationships with Y Combinator, Tiger Global, Accel, and Fortune 500 enterprises across verticals.",
    Icon: Building2,
  },
];

export default function AboutUsPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <div className="relative w-full pt-24 pb-16 px-6 md:px-8 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
            <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5"
          >
            Building the Future
            <br className="hidden sm:block" />
            of Digital Talent
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-black/50 dark:text-[#8b8b8b] max-w-2xl leading-relaxed"
          >
            For over a decade, CloudNexus has been the bridge between ambitious
            enterprises and exceptional engineering talent — delivering scalable
            teams and innovative solutions across the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-8 mt-8 pt-8 border-t border-black/[0.06] dark:border-[#1e1e1e]"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold">{stat.value}</span>
                <p className="text-[12px] text-black/40 dark:text-[#666] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mission */}
      <div className="w-full py-16 md:py-24 px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[11px] font-semibold text-[#3b82f6] uppercase tracking-[0.2em] mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Empowering Enterprises
                <br className="hidden sm:block" />
                to Hire Smarter
              </h2>
              <p className="text-[15px] text-black/50 dark:text-[#8b8b8b] leading-relaxed mb-6">
                We exist to eliminate the friction between great companies and
                great talent. By combining deep industry expertise with
                AI-powered matching, we&apos;ve redefined how enterprises build
                engineering teams — faster, more precisely, and at a fraction
                of the traditional cost.
              </p>
              <p className="text-[15px] text-black/50 dark:text-[#8b8b8b] leading-relaxed">
                From Y Combinator startups to Fortune 500 giants like Adani and
                Apollo Hospitals, our clients trust us because we deliver
                measurable results with radical transparency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-2xl bg-[#121212] border border-[#2e2e2e] p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3b82f6]/[0.06] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10 flex flex-col gap-1">
                {milestones.map((m, i) => (
                  <div
                    key={m.year}
                    className="flex gap-4 py-3 group"
                  >
                    <div className="flex flex-col items-center gap-0 pt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                      {i < milestones.length - 1 && (
                        <div className="w-px flex-1 mt-1 min-h-[1.5rem] bg-[#3b82f6]/20" />
                      )}
                    </div>
                    <div className="pb-1">
                      <span className="text-[13px] font-bold text-[#3b82f6] tabular-nums">
                        {m.year}
                      </span>
                      <p className="text-[13px] text-[#8b8b8b] leading-relaxed mt-0.5">
                        {m.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="w-full py-16 md:py-24 px-6 md:px-8 border-t border-black/[0.06] dark:border-[#1e1e1e]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit mb-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
                <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">
                  Our Values
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                What Drives Us
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="group relative rounded-2xl bg-[#121212] border border-[#2e2e2e] hover:border-[#3b82f6]/50 hover:bg-[#161616] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] transition-all duration-500 p-8 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/[0.03] rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#2e2e2e] bg-[#1a1a1a] text-[#ededed] group-hover:text-[#3b82f6] group-hover:border-[#3b82f6]/30 transition-colors duration-500">
                    <value.Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#ededed] mb-2 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[14px] text-[#8b8b8b] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Pillars */}
      <div className="w-full py-16 md:py-24 px-6 md:px-8 border-t border-black/[0.06] dark:border-[#1e1e1e]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">
                Our Team
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              The People Behind CloudNexus
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base text-black/50 dark:text-[#8b8b8b] leading-relaxed max-w-2xl"
            >
              A diverse team of operators, engineers, and strategists united by one goal — helping enterprises build world-class teams.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="group relative rounded-2xl bg-[#121212] border border-[#2e2e2e] hover:border-[#3b82f6]/50 hover:bg-[#161616] transition-all duration-500 p-8 md:p-10 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#2e2e2e] bg-[#1a1a1a] text-[#ededed] group-hover:text-[#3b82f6] group-hover:border-[#3b82f6]/30 transition-colors duration-500">
                    <leader.Icon className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <p className="text-[11px] font-semibold text-[#555] uppercase tracking-widest mb-2">
                    {leader.name}
                  </p>
                  <h3 className="text-xl font-semibold text-[#ededed] mb-3 tracking-tight">
                    {leader.title}
                  </h3>
                  <p className="text-[14px] text-[#8b8b8b] leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full py-16 md:py-24 px-6 md:px-8 border-t border-black/[0.06] dark:border-[#1e1e1e]">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-gradient-to-br from-black via-black to-zinc-900 dark:from-white dark:via-white dark:to-zinc-100"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#3b82f6]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

            <div className="relative px-8 py-12 md:px-14 md:py-16 text-center">
              <Award className="w-10 h-10 text-[#3b82f6] mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white dark:text-black leading-tight mb-4">
                Ready to Build Your
                <br className="hidden sm:block" />
                Dream Team?
              </h2>
              <p className="text-sm md:text-base text-white/50 dark:text-black/50 leading-relaxed max-w-lg mx-auto mb-8">
                Whether you need a single engineer or a full delivery squad,
                we&apos;ll match you with the right talent — fast.
              </p>
              <Link
                href="/resources/contact"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-white dark:bg-black text-black dark:text-white px-7 py-3 text-sm font-semibold hover:bg-white/90 dark:hover:bg-black/90 transition-all duration-300 shadow-lg shadow-white/10 dark:shadow-black/10"
              >
                Get Started
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
