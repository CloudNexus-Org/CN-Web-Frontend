"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Search, TrendingUp, Share2, Mail, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const offerings = [
  { icon: Search, title: "SEO & Content", desc: "Technical SEO audits, keyword strategy, content creation, and link building to drive organic traffic." },
  { icon: Target, title: "Paid Advertising", desc: "Google Ads, Meta Ads, and LinkedIn campaigns with precise targeting and continuous A/B optimization." },
  { icon: Share2, title: "Social Media Marketing", desc: "Strategy, content calendar, community management, and growth across all major platforms." },
  { icon: Mail, title: "Email Marketing", desc: "Automated email sequences, newsletter campaigns, and drip flows that convert and retain customers." },
  { icon: TrendingUp, title: "Conversion Optimization", desc: "Landing page optimization, funnel analysis, heatmaps, and A/B testing to maximize conversions." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Custom dashboards, attribution modeling, and monthly performance reports with actionable insights." },
];

const process = [
  { step: "01", title: "Audit", desc: "Analyzing your current digital presence, competitors, and market opportunities." },
  { step: "02", title: "Strategy", desc: "Building a data-driven marketing plan aligned with your business objectives." },
  { step: "03", title: "Create", desc: "Producing high-quality content, creatives, and ad copy for all channels." },
  { step: "04", title: "Launch", desc: "Deploying campaigns across search, social, email, and paid channels." },
  { step: "05", title: "Optimize", desc: "Continuous A/B testing, bid adjustments, and content iteration for peak performance." },
  { step: "06", title: "Report", desc: "Transparent reporting with clear KPIs, ROI tracking, and strategic recommendations." },
];

const techStack = ["Google Analytics", "Google Ads", "Meta Ads", "Semrush", "Ahrefs", "HubSpot", "Mailchimp", "Hotjar", "Hootsuite", "Canva"];

export default function DigitalMarketingPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80" alt="Digital Marketing" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="mx-auto max-w-7xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors mb-6"><ArrowLeft size={16} /> Back to Services</Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">Digital Marketing</motion.h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="py-16 max-w-4xl">
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">We boost your brand visibility and drive measurable growth through data-driven digital marketing strategies. From SEO to paid campaigns, our team delivers results that impact your bottom line.</p>
          <p className="mt-6 text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">Every campaign is backed by analytics, continuously optimized, and transparently reported — so you always know exactly what&apos;s working and where your budget is going.</p>
        </motion.div>

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#215B97]/30 hover:bg-black/[0.04] transition-all dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#215B97]/30 dark:hover:bg-white/[0.04]">
                <item.icon size={24} className="text-[#215B97] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-12">Our Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <span className="text-4xl font-bold text-[#215B97]/20">{item.step}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-8">Tools We Use</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (<span key={tech} className="px-4 py-2 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60">{tech}</span>))}
          </div>
        </div>

        <div className="py-20 border-t border-black/[0.06] dark:border-white/[0.06] text-center">
          <h2 className="text-3xl font-bold mb-4">Grow Your Brand Online</h2>
          <p className="text-black/50 dark:text-white/50 mb-8 max-w-lg mx-auto">Let us create a marketing strategy that drives traffic, leads, and revenue for your business.</p>
          <Link href="/resources/free-consultation"><Button size="lg" className="rounded-lg bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 px-8">Book a Free Consultation <ArrowRight size={16} className="ml-2" /></Button></Link>
        </div>
      </div>
    </section>
  );
}
