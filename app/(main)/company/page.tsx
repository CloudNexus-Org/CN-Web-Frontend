"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Eye, Heart, Users, Calendar, Info,
  GitBranch, Server, Gift, CalendarCheck, Mail,
  Globe, Award, Rocket, ShieldCheck,
  Sprout, Leaf, TreePine, Sun,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let n = 0;
        const step = Math.max(1, Math.floor(value / 35));
        const id = setInterval(() => {
          n = Math.min(n + step, value);
          el.textContent = `${n}${suffix}`;
          if (n >= value) clearInterval(id);
        }, 25);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 10, suffix: "+", label: "Years of Excellence", icon: Award },
  { value: 100, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { value: 15, suffix: "+", label: "Industries Served", icon: Globe },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: ShieldCheck },
];

const companyPages = [
  {
    icon: Eye, title: "Overview", href: "/company/overview",
    desc: "Get to know Cloud Nexus  -  our journey since Jan 2025, our vision for the future, and what drives us to build exceptional technology solutions for businesses worldwide.",
    color: "#4EB3E8",
    image: "/images/stock/stock-55a92f3801.jpg",
  },
  {
    icon: Info, title: "About Us", href: "/company/about-us",
    desc: "Our story, values, and the team culture that makes Cloud Nexus a trusted partner for digital transformation across the globe.",
    color: "#8b5cf6",
    image: "/images/stock/stock-fc8dfdff10.jpg",
  },
  {
    icon: Heart, title: "Life @ Cloud Nexus", href: "/company/life-at-cloud-nexus",
    desc: "Discover what it's like to work at Cloud Nexus  -  our culture, workspace, team activities, and the environment that fuels innovation.",
    color: "#ef4444",
    image: "/images/stock/stock-c3eba1f81a.jpg",
  },
  {
    icon: Users, title: "Our Team", href: "/company/team",
    desc: "Meet the talented engineers, designers, and leaders who bring ideas to life and deliver world-class solutions every day.",
    color: "#10b981",
    image: "/images/stock/stock-cc0cc29ac3.jpg",
  },
  {
    icon: GitBranch, title: "Process Methodology", href: "/company/process-methodology",
    desc: "Our agile development process  -  sprint planning, code reviews, automated testing, and continuous deployment. See how we deliver 50+ projects on time with quality.",
    color: "#f59e0b",
    image: "/images/stock/stock-8edd9d0bbc.jpg",
  },
  {
    icon: Server, title: "Infrastructure", href: "/company/infrastructure",
    desc: "A modern, thoughtfully designed workspace in the heart of Bhopal, equipped with high-performance workstations, enterprise connectivity, and world-class facilities for our team.",
    color: "#06b6d4",
    image: "/images/stock/stock-ad2b2430e6.jpg",
  },
  {
    icon: Calendar, title: "Events", href: "/company/events",
    desc: "From global tech conferences to hands-on workshops  -  discover where Cloud Nexus is connecting, learning, and innovating.",
    color: "#8b5cf6",
    image: "/images/stock/stock-69ff23980e.jpg",
  },
  {
    icon: Gift, title: "Career Benefits", href: "/company/career-benefits",
    desc: "12+ unique perks  -  complimentary meals, ₹2Cr insurance, PS5 chill room, team outings, certifications, and a supportive work culture that values your growth.",
    color: "#f59e0b",
    image: "/images/stock/stock-22acc99230.jpg",
  },
];

const values = [
  { title: "Innovation First", desc: "We push boundaries and embrace cutting-edge technologies to solve complex problems.", color: "#4EB3E8" },
  { title: "Client Success", desc: "Your success is our success. We measure ourselves by the impact we create for your business.", color: "#10b981" },
  { title: "Transparency", desc: "Open communication, honest timelines, and no surprises  -  that's how we build trust.", color: "#8b5cf6" },
  { title: "Quality Obsession", desc: "Every line of code, every pixel, and every interaction is crafted with precision and care.", color: "#f59e0b" },
];

export default function CompanyPage() {
  const { t } = useTranslation();
  const translatedStats = useTranslatedData(stats);
  const translatedCompanyPages = useTranslatedData(companyPages);
  const translatedValues = useTranslatedData(values);
  return (
    <section className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white">

      {/* ═══ HERO ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#4EB3E8] rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1]">
                {t("companyHub.hero.title.line1", "Building the Future,")}<br /><span className="text-[#4EB3E8]">{t("companyHub.hero.title.highlight", "One Solution")}</span> {t("companyHub.hero.title.line2", "at a Time")}
              </h1>
              <p className="mt-6 text-base md:text-lg text-black/55 dark:text-white/50 leading-relaxed max-w-xl">
                {t("companyHub.hero.description", "Cloud Nexus is a technology company that transforms ideas into powerful digital products. Founded in January 2025, we bring together talented engineers, designers, and strategists to deliver exceptional software solutions.")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/company/about-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-semibold transition-all shadow-lg">
                  {t("companyHub.hero.cta.learnAbout", "Learn About Us")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all">
                  {t("companyHub.hero.cta.getInTouch", "Get in Touch")}
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#4EB3E8]/10">
                <img src="/images/stock/stock-0ca9676f09.jpg" alt="Cloud Nexus office" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-4 gap-2">
                    {translatedStats.map((s, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                        className="text-center px-2 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                        <span className="block text-sm font-black text-white"><Counter value={s.value} suffix={s.suffix} /></span>
                        <span className="text-[8px] font-semibold text-white/50">{s.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ STATS BAR ═══ */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {translatedStats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02]">
                  <div className="w-10 h-10 rounded-lg bg-[#4EB3E8]/8 dark:bg-[#4EB3E8]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-lg font-black text-[#4EB3E8]"><Counter value={s.value} suffix={s.suffix} /></span>
                    <span className="text-[10px] font-semibold text-black/40 dark:text-white/35">{s.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ EXPLORE COMPANY ═══ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("companyHub.explore.title", "Explore")} <span className="text-[#4EB3E8]">Cloud Nexus</span></h2>
          <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t("companyHub.explore.description", "Discover who we are, how we work, and what makes us the right technology partner for your business.")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {translatedCompanyPages.map((page, i) => {
            const Icon = page.icon;
            return (
              <motion.div key={page.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={page.href}
                  className="group block rounded-2xl bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5 h-full">
                  <div className="relative h-40 overflow-hidden">
                    <img src={page.image} alt={page.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: page.color }}>
                        <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-sm font-bold text-white">{page.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed line-clamp-4">{page.desc}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold" style={{ color: page.color }}>
                      {t("companyHub.explore.cardCta", "Explore")} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══ OUR VALUES ═══ */}
      <div className="bg-[#fafafa] dark:bg-white/[0.015] border-y border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("companyHub.values.title", "Our Core")} <span className="text-[#4EB3E8]">{t("companyHub.values.titleHighlight", "Values")}</span></h2>
              <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
                {t("companyHub.values.description", "These principles guide every decision we make, every product we build, and every relationship we nurture.")}
              </p>

              <div className="mt-8 space-y-4">
                {translatedValues.map((v, i) => (
                  <motion.div key={v.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-white dark:bg-white/[0.02]">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: v.color }} />
                    <div>
                      <h4 className="text-sm font-bold mb-0.5">{v.title}</h4>
                      <p className="text-xs text-black/50 dark:text-white/40 leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#4EB3E8]/10">
                <img src="/images/stock/stock-95b9f15766.jpg" alt="Team values" className="w-full h-[480px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ OUR GROWTH JOURNEY ═══ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t("companyHub.growth.title", "Our Growth")} <span className="text-[#4EB3E8]">{t("companyHub.growth.titleHighlight", "Journey")}</span></h2>
          <p className="text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t("companyHub.growth.description", "From a seed of an idea to a growing force in technology  -  every milestone marks a step toward our vision.")}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Plant image with line coming from it */}
          <div className="flex flex-col items-center mb-0">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 w-full">
              <img src="/assets/images/growth-plant.png" alt="Growing plant seedling symbolizing company growth" className="w-full h-[280px] md:h-[350px] object-cover" />
            </motion.div>
            {/* Connecting line from image to timeline */}
            <div className="w-[3px] h-16 bg-gradient-to-b from-[#4EB3E8] to-[#4EB3E8]/40 rounded-full" />
          </div>

          {/* Vertical line through timeline */}
          <div className="absolute left-6 md:left-1/2 top-[calc(350px+4rem)] bottom-0 w-[3px] bg-gradient-to-b from-[#4EB3E8]/30 via-[#4EB3E8]/20 to-[#10b981]/10 dark:from-[#4EB3E8]/25 dark:via-[#4EB3E8]/15 dark:to-[#10b981]/5 md:-translate-x-[1.5px] rounded-full" />

          {[
            {
              icon: Sprout, date: t("companyHub.growth.step1.date", "19 Jan 2025"), title: t("companyHub.growth.step1.title", "The Seed Was Planted"),
              desc: t("companyHub.growth.step1.desc", "Cloud Nexus was founded with a clear mission  -  to bridge the gap between business needs and technology. What started as a small team with big dreams became the foundation of something meaningful."),
              color: "#4EB3E8",
            },
            {
              icon: Leaf, date: t("companyHub.growth.step2.date", "Mid 2025"), title: t("companyHub.growth.step2.title", "Taking Root & Growing"),
              desc: t("companyHub.growth.step2.desc", "We expanded our team, onboarded our first global clients, and delivered 30+ successful projects. Our expertise in mobile, web, cloud, and AI started gaining recognition across industries."),
              color: "#8b5cf6",
            },
            {
              icon: TreePine, date: t("companyHub.growth.step3.date", "Early 2026"), title: t("companyHub.growth.step3.title", "Branching Out"),
              desc: t("companyHub.growth.step3.desc", "With 50+ projects delivered across 15+ industries, we began attending global tech conferences like GITEX, built dedicated AI/ML capabilities, and expanded our service portfolio significantly."),
              color: "#10b981",
            },
            {
              icon: Sun, date: t("companyHub.growth.step4.date", "Today & Beyond"), title: t("companyHub.growth.step4.title", "Reaching New Heights"),
              desc: t("companyHub.growth.step4.desc", "We're now a full-service technology company trusted by businesses worldwide. Our journey is just beginning  -  with plans to scale further, innovate boldly, and create lasting impact."),
              color: "#f59e0b",
            },
          ].map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <div key={step.date} className="relative mb-12 last:mb-0">
                {/* Timeline dot - centered */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 top-4">
                  <motion.div whileInView={{ scale: [0.5, 1.2, 1] }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center border-[3px] bg-white dark:bg-[#0a0a0a] shadow-lg"
                    style={{ borderColor: step.color, boxShadow: `0 0 20px ${step.color}20` }}>
                    <Icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div initial={{ opacity: 0, x: isLeft ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3.5rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
                  <div className={`group rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${isLeft ? "" : "md:text-left"}`}>
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: step.color }} />
                    <span className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full text-white mb-3 inline-block" style={{ backgroundColor: step.color }}>
                      {step.date}
                    </span>
                    <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                    <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ CTA ═══ */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#4EB3E8]/[0.03] to-purple-500/[0.03] dark:from-[#4EB3E8]/[0.05] dark:to-purple-500/[0.05] p-6 sm:p-10 md:p-14 text-center">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(78,179,232,0.04) 0%, transparent 70%)" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("companyHub.cta.title", "Let's Build Something")} <span className="text-[#4EB3E8]">{t("companyHub.cta.titleHighlight", "Extraordinary")}</span>
              </h2>
              <p className="text-base text-black/55 dark:text-white/50 max-w-lg mx-auto leading-relaxed mb-8">
                {t("companyHub.cta.description", "Whether you're a startup with a bold idea or an enterprise seeking digital transformation  -  we're here to make it happen.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 font-semibold text-sm transition-all shadow-lg">
                  <CalendarCheck className="w-4 h-4" /> {t("companyHub.cta.bookConsultation", "Book Free Consultation")}
                </Link>
                <Link href="/resources/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors">
                  <Mail className="w-4 h-4" /> {t("companyHub.cta.contactUs", "Contact Us")}
                </Link>
              </div>
              <p className="mt-5 text-xs text-black/30 dark:text-white/25">work@cloudnexus.in &middot; +91 9201004208</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
