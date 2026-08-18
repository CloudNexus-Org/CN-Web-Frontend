"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle, Mail, Phone, FileText, HelpCircle, Clock,
  Headphones, ArrowRight, ChevronDown, Shield, Zap, Globe,
  CheckCircle2, Send, LifeBuoy, BookOpen, Video,
  Loader2, AlertCircle,
  type LucideIcon,
} from "lucide-react";
import { submitSupportForm } from "@/lib/api/services/contact.service";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import { useTranslation } from "@/lib/i18n/context";



/* ═══════ HERO SECTION ═══════ */
function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      {/* Animated dot grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.09, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#4EB3E8] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#4EB3E8] rounded-full blur-[100px]"
        />
      </div>

      {/* Floating decorative icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {[
          { Icon: MessageCircle, pos: "top-32 left-[8%]", y: [0, -14, 0], r: [0, 6, 0], dur: 5, d: 0 },
          { Icon: Mail, pos: "top-40 right-[10%]", y: [0, 12, 0], r: [0, -5, 0], dur: 6, d: 1 },
          { Icon: Shield, pos: "bottom-32 left-[15%]", y: [0, -10, 0], r: [0, 4, 0], dur: 7, d: 2 },
          { Icon: Headphones, pos: "bottom-36 right-[12%]", y: [0, 16, 0], r: [0, -8, 0], dur: 5.5, d: 0.5 },
          { Icon: Zap, pos: "top-52 left-[25%]", y: [0, -8, 0], r: [0, -3, 0], dur: 4.5, d: 1.5 },
          { Icon: Globe, pos: "top-48 right-[22%]", y: [0, 10, 0], r: [0, 5, 0], dur: 6.5, d: 3 },
        ].map(({ Icon, pos, y, r, dur, d }, i) => (
          <motion.div
            key={i}
            animate={{ y, rotate: r }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: d }}
            className={`absolute ${pos} flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/[0.06] border border-[#4EB3E8]/[0.08]`}
          >
            <Icon className="w-4 h-4 text-[#4EB3E8]/40" strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>

      {/* Animated pulse rings behind heading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
        {[200, 300, 400].map((size, i) => (
          <motion.div
            key={size}
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4EB3E8]/[0.08]"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
        >
          <span className="text-[#4EB3E8]">{t("support.hero.title", "How Can We")}</span>{" "}
          <span>{t("support.hero.titleHighlight", "Help You?")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-base md:text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          {t("support.hero.description", "Our dedicated support team is here to ensure your success. Whether you need instant help or in-depth guidance, choose the channel that works best for you.")}
        </motion.p>


      </div>
    </div>
  );
}

/* ═══════ ANIMATED COUNTER ═══════ */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

/* ═══════ DATA ═══════ */
const supportChannels = [
  {
    icon: MessageCircle,
    title: "Chat",
    description: "Connect with our support specialists instantly. Average response time under 3 hours during business hours.",
    action: "Start Chat",
    href: "https://wa.me/918793830447?text=Hi%20CloudNexus!%20I'm%20interested%20in%20your%20services.%20Please%20share%20more%20information.",
    badge: "Fastest",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed inquiry with attachments. Our team responds within 4 business hours guaranteed.",
    action: "Send Email",
    href: "mailto:work@cloudnexus.in",
    badge: "Detailed",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a senior engineer for urgent production issues. Available 24/7 for enterprise clients.",
    action: "Call Now",
    href: "tel:+919201004208",
    badge: "Priority",
  },
];

const selfServiceOptions = [
  { icon: BookOpen, title: "Documentation", description: "Comprehensive guides, API references, and integration walkthroughs.", href: "#" },
  { icon: Video, title: "Video Tutorials", description: "Step-by-step video guides for common tasks and advanced features.", href: "#" },
  { icon: FileText, title: "Knowledge Base", description: "Searchable database of articles, troubleshooting guides, and best practices.", href: "#" },
  { icon: HelpCircle, title: "Community Forum", description: "Connect with other users, share solutions, and get peer support.", href: "#" },
];

const faqs = [
  { q: "What are your support hours?", a: "Our live chat and email support are available Monday to Friday, 9 AM to 6 PM IST. Enterprise clients with Premium Support have access to 24/7 phone support and dedicated account managers. All critical production issues are triaged within 15 minutes regardless of the plan." },
  { q: "How quickly will I get a response?", a: "Live chat: under 30 seconds average. Email: within 4 business hours guaranteed (typically under 2 hours). Phone: immediate connection during business hours. Enterprise SLA guarantees are outlined in your service agreement with response times as low as 15 minutes for P0 issues." },
  { q: "Do you offer dedicated account managers?", a: "Yes, all Enterprise and Premium plan clients are assigned a dedicated Technical Account Manager (TAM) who understands your architecture, handles escalations, and conducts quarterly business reviews to align our support with your growth goals." },
  { q: "What is included in your SLA?", a: "Our SLA covers uptime guarantees (99.9% for Standard, 99.99% for Enterprise), response time commitments, escalation procedures, and financial credits for any SLA breaches. Custom SLAs are available for clients with specific compliance or regulatory requirements." },
  { q: "Can I upgrade my support plan?", a: "Absolutely. You can upgrade your support tier at any time from your dashboard. Changes take effect immediately, and you'll only be billed the prorated difference. Contact your account manager or our sales team for Enterprise plan upgrades." },
  { q: "How do I report a critical production issue?", a: "For P0/critical issues: Call our 24/7 hotline, use the 'Critical' flag in live chat, or email work@cloudnexus.in. All critical issues are triaged within 15 minutes with a dedicated incident commander assigned. You'll receive real-time status updates via your preferred channel." },
];

const slaStats = [
  { value: 99.9, suffix: "%", label: "Uptime SLA", icon: Shield },
  { value: 30, suffix: "s", label: "Avg Chat Response", icon: Zap },
  { value: 4, suffix: "hr", label: "Email Response", icon: Clock },
  { value: 24, suffix: "/7", label: "Enterprise Support", icon: Globe },
];

/* ═══════ PAGE ═══════ */
const priorityToInterest: Record<string, string> = {
  "Low - General question": "Support - General Question",
  "Medium - Feature request": "Support - Feature Request",
  "High - Bug report": "Support - Bug Report",
  "Critical - Production down": "Support - Critical Issue",
};

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const translatedSupportChannels = useTranslatedData(supportChannels);
  const translatedSelfServiceOptions = useTranslatedData(selfServiceOptions);
  const translatedFaqs = useTranslatedData(faqs);
  const translatedSlaStats = useTranslatedData(slaStats);
  const { t } = useTranslation();

  const [supportForm, setSupportForm] = useState({ name: "", email: "", priority: "Low - General question", message: "" });
  const [supportLoading, setSupportLoading] = useState(false);
  const [supportError, setSupportError] = useState("");
  const [supportSent, setSupportSent] = useState(false);

  const handleSupportChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setSupportForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSupportLoading(true);
    setSupportError("");
    try {
      await submitSupportForm({
        fullName: supportForm.name,
        email: supportForm.email,
        interestedIn: priorityToInterest[supportForm.priority] || "Support",
        projectDetails: supportForm.message,
      });
      setSupportSent(true);
      setSupportForm({ name: "", email: "", priority: "Low - General question", message: "" });
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { message?: string } } }).response?.data?.message
          : undefined;
      setSupportError(msg || t("support.form.errorFallback", "Something went wrong. Please try again."));
    } finally {
      setSupportLoading(false);
    }
  };


  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* ═══════ HERO ═══════ */}
      <HeroSection />

      {/* ═══════ SLA STATS ═══════ */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {translatedSlaStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="relative rounded-2xl p-5 text-center overflow-hidden bg-[#f5f5f5] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]"
              >
                <div className="flex justify-center mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20">
                    <Icon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black tracking-tight text-[#4EB3E8]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] font-semibold text-black/40 dark:text-white/40 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════ SUPPORT CHANNELS ═══════ */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">{t("support.channels.title", "Get in Touch")}</span>{" "}
            <span>{t("support.channels.titleHighlight", "With Our Team")}</span>
          </h2>
          <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-xl mx-auto">
            {t("support.channels.description", "Choose your preferred support channel. All channels are staffed by experienced engineers.")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {translatedSupportChannels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/[0.06]"
              >
                <div className="h-[2px] w-full bg-[#4EB3E8]/20 group-hover:bg-[#4EB3E8] transition-colors duration-500" />

                <div className="flex flex-col h-full p-7 bg-[#f8f9fa] dark:bg-white/[0.02] border border-t-0 border-black/[0.06] dark:border-white/[0.06] group-hover:border-[#4EB3E8]/15 rounded-b-2xl transition-colors duration-500">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-5 bg-[#4EB3E8]/8 text-[#4EB3E8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4EB3E8]" />
                    {channel.badge}
                  </div>

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4EB3E8]/[0.06] border border-[#4EB3E8]/10 group-hover:bg-[#4EB3E8]/10 group-hover:border-[#4EB3E8]/25 transition-all duration-500">
                    <Icon className="w-7 h-7 text-[#4EB3E8] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-2">{channel.title}</h3>
                  <p className="text-sm text-black/50 dark:text-white/45 leading-relaxed flex-1">
                    {channel.description}
                  </p>

                  <div className="mt-6">
                    <Link
                      href={channel.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-lg transition-all duration-300"
                    >
                      {channel.action}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════ SELF-SERVICE ═══════ */}
      <div className="border-y border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-[#4EB3E8]">{t("support.selfService.title", "Self-Service")}</span>{" "}
              <span>{t("support.selfService.titleHighlight", "Resources")}</span>
            </h2>
            <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-xl mx-auto">
              {t("support.selfService.description", "Find answers on your own with our comprehensive resource library.")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {translatedSelfServiceOptions.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.div
                  key={opt.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                >
                  <Link
                    href={opt.href}
                    className="group flex flex-col h-full rounded-2xl p-6 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/25 hover:bg-white dark:hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-lg transition-all duration-400"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/15 group-hover:bg-[#4EB3E8]/15 group-hover:border-[#4EB3E8]/30 transition-all duration-400">
                      <Icon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-bold tracking-tight mb-1.5 group-hover:text-[#4EB3E8] transition-colors duration-300">{opt.title}</h3>
                    <p className="text-sm text-black/45 dark:text-white/40 leading-relaxed flex-1">{opt.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#4EB3E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t("support.selfService.browse", "Browse")} <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ FAQ + CONTACT FORM ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">{t("support.faq.title", "Frequently Asked")}</span>{" "}
            <span>{t("support.faq.titleHighlight", "Questions")}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* FAQ Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {translatedFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className={`w-full text-left rounded-xl p-5 transition-all duration-300 ${
                      isOpen
                        ? "bg-white dark:bg-[#0c1322] shadow-lg border border-[#4EB3E8]/20"
                        : "bg-[#f8f9fa] dark:bg-white/[0.02] border border-transparent hover:bg-[#f0f0f0] dark:hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {isOpen && (
                          <div className="w-1 h-5 rounded-full bg-[#4EB3E8] flex-shrink-0" />
                        )}
                        <h3 className={`text-sm font-bold tracking-tight ${isOpen ? "text-[#4EB3E8]" : ""}`}>
                          {faq.q}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 flex-shrink-0 text-black/30 dark:text-white/30 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#4EB3E8]" : ""}`}
                      />
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 pl-4 text-sm text-black/50 dark:text-white/45 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl p-7 bg-[#f8f9fa] dark:bg-[#0c1322] border border-black/[0.06] dark:border-white/[0.06] sticky top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20">
                  <Send className="w-5 h-5 text-[#4EB3E8]" />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight">{t("support.form.title", "Send a Message")}</h3>
                  <p className="text-xs text-black/40 dark:text-white/40">{t("support.form.subtitle", "We'll get back within 4 hours")}</p>
                </div>
              </div>

              {supportSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="text-base font-bold mb-1">{t("support.form.successTitle", "Message Sent!")}</h4>
                  <p className="text-xs text-black/45 dark:text-white/40 mb-4">{t("support.form.successDesc", "We'll respond within 4 hours.")}</p>
                  <button onClick={() => setSupportSent(false)} className="text-xs font-semibold text-[#4EB3E8] hover:underline">
                    {t("support.form.sendAnother", "Send Another")}
                  </button>
                </motion.div>
              ) : (
                <>
                  {supportError && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-3 py-2.5 text-xs text-red-600 dark:text-red-400"
                    >
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {supportError}
                    </motion.div>
                  )}

                  <form className="space-y-4" onSubmit={handleSupportSubmit}>
                    <div>
                      <label className="text-xs font-semibold text-black/50 dark:text-white/40 uppercase tracking-wider">{t("support.form.nameLabel", "Name")}</label>
                      <input
                        type="text"
                        name="name"
                        value={supportForm.name}
                        onChange={handleSupportChange}
                        required
                        placeholder={t("support.form.namePlaceholder", "Your full name")}
                        className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-sm font-medium placeholder:text-black/25 dark:placeholder:text-white/25 focus:outline-none focus:border-[#4EB3E8]/40 focus:ring-2 focus:ring-[#4EB3E8]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-black/50 dark:text-white/40 uppercase tracking-wider">{t("support.form.emailLabel", "Email")}</label>
                      <input
                        type="email"
                        name="email"
                        value={supportForm.email}
                        onChange={handleSupportChange}
                        required
                        placeholder={t("support.form.emailPlaceholder", "you@company.com")}
                        className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-sm font-medium placeholder:text-black/25 dark:placeholder:text-white/25 focus:outline-none focus:border-[#4EB3E8]/40 focus:ring-2 focus:ring-[#4EB3E8]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-black/50 dark:text-white/40 uppercase tracking-wider">{t("support.form.priorityLabel", "Priority")}</label>
                      <select
                        name="priority"
                        value={supportForm.priority}
                        onChange={handleSupportChange}
                        className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-sm font-medium text-black/60 dark:text-white/60 focus:outline-none focus:border-[#4EB3E8]/40 focus:ring-2 focus:ring-[#4EB3E8]/10 transition-all"
                      >
                        <option value="Low - General question">{t("support.form.priorityLow", "Low - General question")}</option>
                        <option value="Medium - Feature request">{t("support.form.priorityMedium", "Medium - Feature request")}</option>
                        <option value="High - Bug report">{t("support.form.priorityHigh", "High - Bug report")}</option>
                        <option value="Critical - Production down">{t("support.form.priorityCritical", "Critical - Production down")}</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-black/50 dark:text-white/40 uppercase tracking-wider">{t("support.form.messageLabel", "Message")}</label>
                      <textarea
                        name="message"
                        value={supportForm.message}
                        onChange={handleSupportChange}
                        required
                        rows={4}
                        placeholder={t("support.form.messagePlaceholder", "Describe your issue or question...")}
                        className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-sm font-medium placeholder:text-black/25 dark:placeholder:text-white/25 focus:outline-none focus:border-[#4EB3E8]/40 focus:ring-2 focus:ring-[#4EB3E8]/10 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={supportLoading}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-semibold shadow-lg transition-all duration-300 disabled:opacity-60"
                    >
                      {supportLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {t("support.form.sending", "Sending...")}
                        </>
                      ) : (
                        <>
                          {t("support.form.sendMessage", "Send Message")}
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════ SUPPORT PROMISE ═══════ */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-[#4EB3E8]">{t("support.promise.title", "Our Support")}</span>{" "}
              <span>{t("support.promise.titleHighlight", "Promise")}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Headphones, title: t("support.promise.humanFirst.title", "Human-First Support"), desc: t("support.promise.humanFirst.desc", "No chatbots, no runaround. Every conversation starts with an experienced engineer who understands your stack.") },
              { icon: Shield, title: t("support.promise.enterpriseSla.title", "Enterprise-Grade SLA"), desc: t("support.promise.enterpriseSla.desc", "Guaranteed response times, uptime commitments, and financial credits  -  backed by transparent reporting.") },
              { icon: CheckCircle2, title: t("support.promise.resolution.title", "Resolution, Not Deflection"), desc: t("support.promise.resolution.desc", "We don't close tickets until you're satisfied. Our CSAT score consistently exceeds 98% across all channels.") },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="group rounded-2xl p-7 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-400"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 group-hover:bg-[#4EB3E8]/15 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-[#4EB3E8] transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-black/50 dark:text-white/45 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ CTA ═══════ */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="relative rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(78,179,232,0.04) 0%, transparent 70%)" }} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-[#4EB3E8]/10">
                <Headphones className="w-6 h-6 text-[#4EB3E8]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t("support.cta.title", "Still Need Help?")}
                <br />
                <span className="text-[#4EB3E8]">{t("support.cta.titleHighlight", "We're Here For You")}</span>
              </h2>

              <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">
                {t("support.cta.description", "Schedule a free consultation with our solutions team to discuss your specific needs and find the right support plan.")}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
                >
                  {t("support.cta.bookConsultation", "Book Free Consultation")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/resources/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
                >
                  {t("support.cta.contactSales", "Contact Sales")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
