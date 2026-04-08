"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2,
  Stethoscope, ShoppingCart, Truck, MessageCircle, Building2,
  GraduationCap, Landmark, Plane, Factory, Droplets,
  Film, Package, Home, Wallet, Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  highlights: string[];
}

const industries: Industry[] = [
  {
    icon: Stethoscope,
    title: "Healthcare & Lifesciences",
    description: "HIPAA-compliant digital health solutions — from patient portals and telemedicine to clinical data platforms and medical device integration.",
    href: "/industry/healthcare-lifesciences",
    highlights: ["Telemedicine platforms", "EHR integration", "HIPAA compliance"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Scalable online retail platforms with AI-driven personalization, inventory management, and seamless payment gateway integration.",
    href: "/industry/ecommerce-solutions",
    highlights: ["AI recommendations", "Multi-vendor marketplaces", "Payment integration"],
  },
  {
    icon: Truck,
    title: "Transport & Logistics",
    description: "Fleet management, route optimization, and real-time tracking solutions to streamline supply chain operations.",
    href: "/industry/transport-logistics",
    highlights: ["Fleet tracking", "Route optimization", "Supply chain visibility"],
  },
  {
    icon: MessageCircle,
    title: "Social Networking",
    description: "Community and social platforms with real-time messaging, content feeds, and user engagement features at scale.",
    href: "/industry/social-networking",
    highlights: ["Real-time chat", "Content moderation", "User engagement"],
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property tech and listing platforms with virtual tours, CRM integration, and automated lead management.",
    href: "/industry/real-estate",
    highlights: ["Property listings", "Virtual tours", "Lead management"],
  },
  {
    icon: GraduationCap,
    title: "Education & eLearning",
    description: "EdTech and LMS solutions with adaptive learning paths, live classes, gamification, and progress analytics.",
    href: "/industry/education-elearning",
    highlights: ["LMS platforms", "Live classes", "Adaptive learning"],
  },
  {
    icon: Landmark,
    title: "Banking, Finance & Insurance",
    description: "Secure fintech solutions for digital banking, loan management, insurance claims, and regulatory compliance.",
    href: "/industry/banking-finance-insurance",
    highlights: ["Digital banking", "Loan processing", "Regulatory compliance"],
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Booking engines, travel management platforms, and hospitality solutions with dynamic pricing and multi-channel distribution.",
    href: "/industry/travel-hospitality",
    highlights: ["Booking engines", "Dynamic pricing", "Channel management"],
  },
  {
    icon: Factory,
    title: "Enterprise Retail & Manufacturing",
    description: "IoT-powered smart factory systems, inventory optimization, and enterprise retail management platforms.",
    href: "/industry/enterprise-retail-manufacturing",
    highlights: ["IoT integration", "Smart factory", "Inventory optimization"],
  },
  {
    icon: Droplets,
    title: "Oil & Gas",
    description: "Energy sector digital solutions for asset monitoring, predictive maintenance, and operational efficiency.",
    href: "/industry/oil-gas",
    highlights: ["Asset monitoring", "Predictive maintenance", "Safety compliance"],
  },
  {
    icon: Film,
    title: "Media & Entertainment",
    description: "Streaming platforms, content management systems, and digital media distribution with DRM and analytics.",
    href: "/industry/media-entertainment",
    highlights: ["Streaming platforms", "Content CMS", "DRM & analytics"],
  },
  {
    icon: Package,
    title: "On Demand Delivery",
    description: "Last-mile delivery and logistics apps with real-time tracking, route optimization, and dynamic dispatch.",
    href: "/industry/on-demand-delivery",
    highlights: ["Real-time tracking", "Route optimization", "Dynamic dispatch"],
  },
  {
    icon: Home,
    title: "Home Service",
    description: "On-demand home service platforms connecting service providers with customers — booking, scheduling, and payments.",
    href: "/industry/home-service",
    highlights: ["Service booking", "Provider matching", "In-app payments"],
  },
  {
    icon: Wallet,
    title: "Fintech",
    description: "Financial technology solutions including digital wallets, payment gateways, lending platforms, and wealth management.",
    href: "/industry/fintech",
    highlights: ["Digital wallets", "Payment gateways", "Lending platforms"],
  },
  {
    icon: Smartphone,
    title: "mCommerce",
    description: "Mobile commerce platforms optimized for conversions with one-tap checkout, push notifications, and loyalty programs.",
    href: "/industry/mcommerce",
    highlights: ["Mobile-first shopping", "One-tap checkout", "Loyalty programs"],
  },
];

const stats = [
  { value: "15+", label: "Industries Served" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function IndustryPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* Hero */}
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
            <span className="text-[13px] font-semibold text-[#215B97] tracking-wide uppercase">Industries</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Tailored Solutions for
            <br />
            <span className="text-[#215B97]">Every Industry</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            We bring deep domain expertise across 15+ industries, delivering solutions that address real business challenges with precision and scale.
          </motion.p>
        </div>
      </div>

      {/* Stats Bar */}
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

      {/* Industries Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link href={industry.href}>
                  <div className="group h-full rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 transition-all duration-500 hover:border-[#215B97]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#215B97]/5 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-[#215B97]/30 dark:hover:bg-white/[0.04]">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#215B97]/30 group-hover:bg-[#215B97]/10 transition-all duration-500">
                      <Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#215B97] transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#215B97] transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors duration-300">
                      {industry.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {industry.highlights.map((h) => (
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
                      Explore <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Don&apos;t See Your Industry?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto"
          >
            We work across verticals. Let&apos;s discuss how we can build the right solution for your domain.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/resources/free-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
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
