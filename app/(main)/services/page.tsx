"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2, Smartphone, Globe, Cloud, Palette, Zap, TrendingUp, Brain,
  Shield, GitMerge, ArrowRight, CheckCircle2, Layers, Users, Clock,
  Lightbulb, Rocket, BarChart3, HeartHandshake, Building2, GraduationCap,
  CreditCard, ShoppingCart, Stethoscope, Truck, Factory, Cog,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  highlights: string[];
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "End-to-end development of scalable, high-performance software tailored to your unique business requirements — from architecture to deployment.",
    href: "/services/custom-software-development",
    highlights: ["Enterprise platforms", "SaaS products", "API integrations"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform iOS & Android applications with seamless UI/UX, offline support, and advanced functionality.",
    href: "/services/mobile-app-development",
    highlights: ["React Native & Flutter", "Native iOS/Android", "App Store optimization"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive, secure, and lightning-fast web applications — from startup landing pages to complex enterprise platforms.",
    href: "/services/web-development",
    highlights: ["Next.js & React", "Progressive Web Apps", "Performance optimization"],
  },
  {
    icon: Cloud,
    title: "Cloud & SaaS Solutions",
    description: "Cloud migration, cloud-native architecture, and scalable multi-tenant SaaS platform development on AWS, Azure & GCP.",
    href: "/services/cloud-saas-solutions",
    highlights: ["Cloud migration", "Multi-tenant SaaS", "Cost optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centric design solutions focused on usability, engagement, and modern aesthetics — from research to pixel-perfect interfaces.",
    href: "/services/ui-ux-design",
    highlights: ["Design systems", "User research", "Prototyping & testing"],
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernizing legacy systems, automating workflows, and integrating cutting-edge technologies to future-proof your business.",
    href: "/services/digital-transformation",
    highlights: ["Legacy modernization", "Process automation", "Change management"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven SEO, social media, paid campaigns, and analytics strategies to boost brand visibility and measurable growth.",
    href: "/services/digital-marketing",
    highlights: ["SEO & SEM", "Social media strategy", "Analytics & reporting"],
  },
  {
    icon: Brain,
    title: "AI, ML & Data Science",
    description: "Predictive analytics, NLP, computer vision, and intelligent automation — turning raw data into actionable business intelligence.",
    href: "/services/ai-ml-data-science",
    highlights: ["Machine learning models", "NLP & chatbots", "Data pipelines"],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Comprehensive security audits, penetration testing, and regulatory compliance frameworks — SOC2, HIPAA, GDPR, and more.",
    href: "/services/cybersecurity-compliance",
    highlights: ["Penetration testing", "Compliance frameworks", "Threat detection"],
  },
  {
    icon: GitMerge,
    title: "DevOps & Cloud Automation",
    description: "CI/CD pipelines, containerization with Docker & Kubernetes, IaC with Terraform, and automated infrastructure for faster delivery.",
    href: "/services/devops-cloud-automation",
    highlights: ["CI/CD pipelines", "Kubernetes & Docker", "Infrastructure as Code"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We deep-dive into your business goals, pain points, and technical landscape to craft a tailored strategy.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our team designs intuitive interfaces and robust system architectures that scale with your growth.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Iterative sprints with continuous feedback loops ensure transparent progress and rapid delivery.",
    icon: Cog,
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Rigorous automated and manual testing across devices, browsers, and edge cases for bulletproof quality.",
    icon: CheckCircle2,
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "Zero-downtime deployments with monitoring, rollback strategies, and performance optimization.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Support & Growth",
    description: "Ongoing maintenance, analytics-driven improvements, and scaling support as your business evolves.",
    icon: HeartHandshake,
  },
];

const industries = [
  { icon: CreditCard, name: "FinTech & Banking" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: ShoppingCart, name: "E-Commerce" },
  { icon: GraduationCap, name: "Education" },
  { icon: Truck, name: "Logistics" },
  { icon: Building2, name: "Real Estate" },
  { icon: Factory, name: "Manufacturing" },
  { icon: BarChart3, name: "SaaS & Startups" },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "10+", label: "Industries Served" },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#215B97]/10 via-transparent to-transparent dark:from-[#215B97]/5 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#215B97]/10 border border-[#215B97]/20 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#215B97] animate-pulse" />
            <span className="text-[13px] font-semibold text-[#215B97] tracking-wide uppercase">What We Do</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            End-to-End Technology
            <br />
            <span className="text-[#215B97]">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            From strategy to deployment, we deliver full-spectrum digital services that help businesses innovate, scale, and lead in their markets.
          </motion.p>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={service.href}>
                  <div className="group h-full rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 transition-all duration-500 hover:border-[#215B97]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#215B97]/5 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-[#215B97]/30 dark:hover:bg-white/[0.04]">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#215B97]/30 group-hover:bg-[#215B97]/10 transition-all duration-500">
                      <Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#215B97] transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#215B97] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#215B97]/70 group-hover:bg-[#215B97]/5 transition-all duration-500"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center text-[13px] font-semibold text-[#215B97] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#215B97]">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-black/40 dark:text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How We Work ── */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#215B97]/10 border border-[#215B97]/20 mb-6"
          >
            <span className="text-[13px] font-semibold text-[#215B97] tracking-wide uppercase">Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            How We Bring Ideas to Life
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto"
          >
            A proven six-step methodology that ensures quality, transparency, and on-time delivery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl border border-black/[0.06] dark:border-white/[0.06] p-6 hover:border-[#215B97]/20 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-[#215B97]/10 border border-[#215B97]/20">
                    <StepIcon className="w-5 h-5 text-[#215B97]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#215B97] tracking-widest uppercase">Step {step.step}</span>
                    <h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Industries We Serve ── */}
      <div className="bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#215B97]/10 border border-[#215B97]/20 mb-6"
              >
                <span className="text-[13px] font-semibold text-[#215B97] tracking-wide uppercase">Industries</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                Industries We Serve
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-[15px] font-medium text-black/50 dark:text-white/50 leading-relaxed"
              >
                We deliver tailored solutions across diverse sectors — from banking and healthcare to e-commerce and logistics. Our domain expertise ensures every solution addresses real industry challenges.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 space-y-3"
              >
                {["Customized industry solutions", "Domain-expert engineering teams", "Regulatory compliance built-in", "Scalable architectures for growth"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#215B97] flex-shrink-0" />
                    <span className="text-sm font-medium text-black/60 dark:text-white/60">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, i) => {
                const IndIcon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="group flex items-center gap-3 rounded-xl border border-black/[0.06] dark:border-white/[0.06] p-4 hover:border-[#215B97]/20 hover:bg-[#215B97]/[0.03] transition-all duration-400"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#215B97]/10 border border-[#215B97]/15 flex-shrink-0">
                      <IndIcon className="w-4 h-4 text-[#215B97]" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-semibold tracking-tight">{industry.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Why Businesses Choose Us
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Expert Teams", desc: "Senior engineers, designers, and strategists with deep domain expertise across industries." },
            { icon: Clock, title: "On-Time Delivery", desc: "Agile sprints with transparent timelines — 95% of projects delivered on or ahead of schedule." },
            { icon: Layers, title: "Scalable Solutions", desc: "Architectures built to handle 10x growth — from startup MVP to enterprise-grade systems." },
            { icon: HeartHandshake, title: "Long-Term Partnership", desc: "We don't just build and leave. Ongoing support, optimization, and strategic guidance as you grow." },
          ].map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#215B97]/10 border border-[#215B97]/20">
                  <ItemIcon className="w-6 h-6 text-[#215B97]" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Ready to Build Something Great?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto"
          >
            Let&apos;s discuss your project. Our team is ready to turn your vision into reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#215B97] text-white font-semibold text-sm hover:bg-[#1a4a7a] transition-colors"
            >
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
