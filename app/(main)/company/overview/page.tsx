"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Target, Eye, Rocket, Users, Shield, Zap, Globe,
  BrainCircuit, Handshake, Award, Building2, ChevronRight,
  Code2, Layers, HeartHandshake, Lightbulb, Clock, CheckCircle2,
  MapPin, BarChart3, Smartphone, Boxes, Layout, Palette,
  ShoppingBag, Cloud, Megaphone, Settings, ServerCog, Monitor, Phone,
  Sprout, Leaf, TreePine, Sun,
} from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import { useTranslation } from "@/lib/i18n/context";

/* ═══════ ANIMATED COUNTER ═══════ */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const dur = 1500;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

/* ═══════ DATA ═══════ */
const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { value: 1, suffix: "+", label: "Year of Excellence", icon: Award },
  { value: 90, suffix: "+", label: "Scalable Teams", icon: Users },
  { value: 15, suffix: "+", label: "Industries Served", icon: Globe },
];

const whyCloudNexus = [
  { icon: Rocket, title: "Innovative & Scalable Solutions", desc: "We leverage the latest advancements in cloud computing, AI, and automation to develop smart, future-ready IT solutions. Our approach ensures your business stays ahead in the digital era." },
  { icon: HeartHandshake, title: "Tailored Approach", desc: "Every business is unique, and so are its challenges. We take a consultative approach, designing customized IT strategies that align with your goals, industry demands, and operational needs." },
  { icon: Lightbulb, title: "Product-Driven Innovation", desc: "Beyond consulting, we develop intelligent digital products that simplify daily operations, enhance efficiency, and improve user experiences. From HRMS systems to AI-powered automation tools, our solutions make technology work for you." },
  { icon: Shield, title: "Security & Reliability", desc: "Cybersecurity and data protection are at the core of everything we do. We implement robust security protocols to safeguard your IT infrastructure, ensuring compliance, privacy, and peace of mind." },
  { icon: Globe, title: "Expert Team & Global Experience", desc: "Our team of seasoned IT consultants, engineers, and strategists brings extensive experience in helping businesses worldwide navigate complex technological landscapes." },
  { icon: BarChart3, title: "Business-Centric Results", desc: "We don't just implement technology  -  we align it with your business objectives, ensuring measurable improvements in efficiency, productivity, and profitability." },
  { icon: CheckCircle2, title: "End-to-End Support", desc: "From initial consultation to deployment and ongoing support, we are committed to providing seamless, 24/7 assistance, ensuring smooth and uninterrupted IT operations." },
];

const offerings = [
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform iOS & Android apps built for performance, scalability, and exceptional user experience.", href: "/services/mobile-app-development" },
  { icon: Globe, title: "Web Development", desc: "Responsive, fast, and SEO-optimized web applications using modern frameworks like Next.js, React, and Node.js.", href: "/services/web-development" },
  { icon: Code2, title: "Software Development", desc: "Full-cycle custom software solutions from architecture design to deployment, tailored to your business needs.", href: "/services/software-development" },
  { icon: Users, title: "Hire Dedicated Developers", desc: "Pre-vetted engineers in 48 hours  -  full-stack, mobile, AI/ML, DevOps, and QA specialists on flexible engagement models.", href: "/services/hire-dedicated-developers" },
  { icon: Boxes, title: "Product Engineering", desc: "End-to-end product development from ideation to market-ready launch with continuous iteration and optimization.", href: "/services/product-engineering" },
  { icon: Layout, title: "WordPress Development", desc: "Custom themes, plugins, and enterprise WordPress solutions with performance optimization and security hardening.", href: "/services/wordpress-development" },
  { icon: Palette, title: "UI/UX Design", desc: "User-centric design solutions with research-driven wireframes, prototypes, and pixel-perfect interfaces.", href: "/services/ui-ux-design" },
  { icon: Zap, title: "Digital Transformation", desc: "Modernize legacy systems, digitize operations, and build data-driven workflows that accelerate business growth.", href: "/services/digital-transformation" },
  { icon: ShoppingBag, title: "E-Commerce Development", desc: "Scalable online store platforms with payment integrations, inventory management, and conversion optimization.", href: "/services/ecommerce-development" },
  { icon: Cloud, title: "SaaS Development", desc: "Multi-tenant SaaS products with subscription management, analytics dashboards, and enterprise-grade security.", href: "/services/saas-development" },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media marketing, PPC campaigns, and content strategies that drive traffic, leads, and revenue.", href: "/services/digital-marketing" },
  { icon: Settings, title: "Technology Consulting", desc: "Strategic technology advisory, architecture reviews, and roadmaps aligned with your business objectives.", href: "/services/technology-consulting" },
  { icon: Rocket, title: "MVP Development", desc: "Rapid prototyping and MVP launches to validate your idea, attract investors, and enter the market faster.", href: "/services/mvp-development" },
  { icon: ServerCog, title: "Cloud Services", desc: "AWS, Azure & GCP solutions  -  cloud migration, multi-cloud architecture, CI/CD pipelines, and infrastructure automation.", href: "/services/cloud-services" },
  { icon: Monitor, title: "IT Consulting", desc: "Infrastructure planning, IT strategy, and technology audits to optimize your IT ecosystem for long-term success.", href: "/services/it-consulting" },
];

const locations = [
  { region: "Hyderabad", city: "Hitech City, Hyderabad, Telangana, India", phone: "+91 000 000 0000", icon: Building2 },
  { region: "Bhopal", city: "Plot No 20, Kusturi Arched, Barrai, Bhopal, MP 462042, India", phone: "+91 87938 30447", icon: Building2 },
  { region: "Bengaluru", city: "2nd Stage, BTM Layout, Bengaluru, Karnataka 560076, India", phone: "+91 87938 30447", icon: Building2 },
];

/* ═══════ VISION & MISSION SECTION ═══════ */
const missionPoints = [
  { icon: Zap, text: "Developing industry-leading IT solutions and products that enable businesses to operate efficiently, automate workflows, and stay ahead in a rapidly evolving digital world." },
  { icon: Layers, text: "Transforming outdated methodologies by replacing legacy systems with modern, intelligent, and scalable solutions tailored to each business's needs." },
  { icon: BrainCircuit, text: "Driving digital innovation through AI, cloud computing, and automation, ensuring seamless integration of technology into daily business operations." },
  { icon: Shield, text: "Empowering businesses of all sizes with accessible, secure, and intelligent IT infrastructure that fosters productivity and long-term success." },
];

function VisionMissionSection({ missionPoints: mp }: { missionPoints: typeof missionPoints }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <div className="border-y border-black/[0.05] dark:border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">{t("overview.vision.title", "Our Purpose")}</span>{" "}
            <span>{t("overview.vision.titleHighlight", "& Direction")}</span>
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex rounded-xl bg-[#f0f0f0] dark:bg-white/[0.04] p-1 border border-black/[0.05] dark:border-white/[0.05]">
            {(["vision", "mission"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-black/50 dark:text-white/40 hover:text-black/70 dark:hover:text-white/60"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="vm-tab"
                    className="absolute inset-0 rounded-lg bg-[#4EB3E8]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">{tab === "vision" ? t("overview.vision.tabVision", "Our vision") : t("overview.vision.tabMission", "Our mission")}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "vision" ? (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-5 gap-8 items-center"
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20">
                    <Eye className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{t("overview.vision.ourVision", "Our Vision")}</h3>
                </div>
                <p className="text-base text-black/55 dark:text-white/50 leading-relaxed">
                  {t("overview.vision.visionText", "To be the global leader in IT solutions and digital product innovation, empowering businesses with progressive technology that enhances efficiency, scalability, and growth. At CloudNexus, we envision a future where businesses thrive by leveraging smart, automated, and future-ready solutions.")}
                </p>
              </div>
              <div className="md:col-span-2 relative">
                <img
                  src="/images/stock/stock-62f261eec0.jpg"
                  alt={t("overview.vision.altVision", "Futuristic technology and digital innovation")}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mission"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-5 gap-8"
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20">
                    <Rocket className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{t("overview.vision.ourMission", "Our Mission")}</h3>
                    <p className="text-sm text-black/40 dark:text-white/35">{t("overview.vision.missionSubtitle", "Redefining the IT landscape")}</p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {mp.map((point, i) => {
                    const Icon = point.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.08 * i }}
                        className="group flex gap-4 p-4 rounded-2xl bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8]/15 transition-all duration-300 flex-shrink-0">
                          <Icon className="w-4.5 h-4.5 text-[#4EB3E8]" strokeWidth={1.5} />
                        </div>
                        <p className="text-sm text-black/50 dark:text-white/45 leading-relaxed">{point.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="md:col-span-2 relative flex items-center">
                <img
                  src="/images/stock/stock-fcc914b15f.jpg"
                  alt={t("overview.vision.altMission", "Team working together on digital innovation")}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════ PAGE ═══════ */
export default function OverviewPage() {
  const translatedStats = useTranslatedData(stats);
  const translatedWhyCloudNexus = useTranslatedData(whyCloudNexus);
  const translatedOfferings = useTranslatedData(offerings);
  const translatedLocations = useTranslatedData(locations);
  const translatedMissionPoints = useTranslatedData(missionPoints);
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* ═══════ HERO ═══════ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#4EB3E8] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#4EB3E8] rounded-full blur-[100px]"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="ov-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ov-dots)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                {t("overview.hero.title", "Innovators, Problem-Solvers &")}{" "}
                <span className="text-[#4EB3E8]">{t("overview.hero.titleHighlight", "Architects of the Digital Future")}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-xl"
              >
                {t("overview.hero.description", "At CloudNexus, we are more than just an IT consulting company. We specialize in progressive IT solutions, cloud transformation, AI-driven automation, and enterprise consulting, helping businesses thrive in an ever-evolving tech landscape.")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/resources/free-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-semibold hover:opacity-90 transition-all shadow-lg"
                >
                  {t("overview.hero.getStarted", "Get Started")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/company/about-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all"
                >
                  {t("overview.hero.learnAboutUs", "Learn About Us")}
                </Link>
              </motion.div>
            </div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/stock/stock-fc458b1405.jpg"
                  alt={t("overview.hero.altTeam", "Team collaborating on digital solutions")}
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />

                {/* Floating info cards on image */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-5 left-5 right-5 flex gap-3"
                >
                  {[
                    { val: t("overview.hero.stat1Val", "200+"), lbl: t("overview.hero.stat1Label", "Projects") },
                    { val: t("overview.hero.stat2Val", "1+"), lbl: t("overview.hero.stat2Label", "Year") },
                    { val: t("overview.hero.stat3Val", "90+"), lbl: t("overview.hero.stat3Label", "Teams") },
                  ].map((s) => (
                    <div key={s.lbl} className="flex-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3 py-2.5 text-center">
                      <div className="text-lg font-black text-white">{s.val}</div>
                      <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">{s.lbl}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════ STATS ═══════ */}
      <div className="border-y border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {translatedStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="flex items-center gap-4"
              >
                <div className="text-4xl md:text-5xl font-black tracking-tight text-[#4EB3E8]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider leading-tight max-w-[80px]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ ABOUT INTRO ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-[#4EB3E8]">{t("overview.whoWeAre.title", "Who We Are")}</span>
            </h2>
            <p className="text-base text-black/55 dark:text-white/50 leading-relaxed mb-4">
              {t("overview.whoWeAre.description1", "At CloudNexus, we are more than just an IT consulting company  -  we are innovators, problem-solvers, and architects of the digital future. We specialize in progressive IT solutions, cloud transformation, AI-driven automation, and enterprise consulting, helping businesses thrive in an ever-evolving tech landscape.")}
            </p>
            <p className="text-base text-black/55 dark:text-white/50 leading-relaxed">
              {t("overview.whoWeAre.description2", "Our team of technology experts, strategists, and problem-solvers collaborates closely with clients to design tailored solutions that enhance efficiency, drive growth, and future-proof operations. Whether it's cloud migration, software development, automation, or cybersecurity, we ensure that your IT ecosystem is agile, secure, and optimized for success.")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/stock/stock-bada4b3051.jpg"
                alt={t("overview.whoWeAre.altTeam", "Team strategy and innovation")}
                className="w-full h-[380px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent rounded-2xl" />

              {/* Overlay capabilities */}
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2">
                {[
                  { icon: Rocket, label: t("overview.whoWeAre.capCloud", "Cloud Transformation") },
                  { icon: BrainCircuit, label: t("overview.whoWeAre.capAI", "AI & Automation") },
                  { icon: Code2, label: t("overview.whoWeAre.capSoftware", "Software Dev") },
                  { icon: Shield, label: t("overview.whoWeAre.capCyber", "Cybersecurity") },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                    <Icon className="w-4 h-4 text-[#4EB3E8] flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[11px] font-semibold text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl border-2 border-[#4EB3E8]/15 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* ═══════ MISSION & VISION ═══════ */}
      <VisionMissionSection missionPoints={translatedMissionPoints} />

      {/* ═══════ OUR SERVICES ═══════ */}
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
              <span className="text-[#4EB3E8]">{t("overview.services.title", "Our")}</span>{" "}
              <span>{t("overview.services.titleHighlight", "Services")}</span>
            </h2>
            <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-xl mx-auto">
              {t("overview.services.description", "End-to-end technology capabilities tailored to your business stage and growth ambitions.")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {translatedOfferings.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.04 * i }}
                    className="group h-full rounded-2xl p-5 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-400 cursor-pointer"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8] group-hover:border-[#4EB3E8] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#4EB3E8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-bold tracking-tight mb-1.5 group-hover:text-[#4EB3E8] transition-colors duration-300">{item.title}</h3>
                    <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed line-clamp-3">{item.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#4EB3E8] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                      {t("overview.services.learnMore", "Learn More")} <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ WHY CLOUDNEXUS ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">{t("overview.whyCloudNexus.title", "Why")}</span>{" "}
            <span>{t("overview.whyCloudNexus.titleHighlight", "CloudNexus?")}</span>
          </h2>
          <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-2xl mx-auto">
            {t("overview.whyCloudNexus.description", "Choosing the right technology partner is crucial for business success. We don't just offer IT solutions  -  we create transformative experiences that drive innovation, efficiency, and growth.")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Image + Stats */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[420px]">
              <img
                src="/images/stock/stock-72d9fb781c.jpg"
                alt={t("overview.whyCloudNexus.altTeam", "Professional team delivering IT solutions")}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating stats on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                {[
                  { num: t("overview.whyCloudNexus.stat1Val", "200+"), label: t("overview.whyCloudNexus.stat1Label", "Projects Delivered") },
                  { num: t("overview.whyCloudNexus.stat2Val", "1+"), label: t("overview.whyCloudNexus.stat2Label", "Year of Excellence") },
                  { num: t("overview.whyCloudNexus.stat3Val", "90+"), label: t("overview.whyCloudNexus.stat3Label", "Scalable Teams") },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * i }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-xl font-bold text-[#4EB3E8]">{s.num}</span>
                    <span className="text-sm text-white/70">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl border-2 border-[#4EB3E8]/15 -z-10" />
          </motion.div>

          {/* Right - Cards grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {translatedWhyCloudNexus.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.06 * i }}
                  className={`group relative rounded-2xl p-5 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ${i === 6 ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8] group-hover:border-[#4EB3E8] transition-all duration-300 flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#4EB3E8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold tracking-tight mb-1 group-hover:text-[#4EB3E8] transition-colors duration-300">{val.title}</h3>
                      <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed line-clamp-3">{val.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ GLOBAL PRESENCE ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">{t("overview.offices.title", "Our")}</span>{" "}
            <span>{t("overview.offices.titleHighlight", "Offices")}</span>
          </h2>
          <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-xl mx-auto">
            {t("overview.offices.description", "Strategically located across Rajasthan, India  -  delivering world-class IT solutions from our development centers.")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {translatedLocations.map((loc, i) => {
            const Icon = loc.icon;
            return (
              <motion.div
                key={loc.region}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group rounded-2xl p-7 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-400 text-center"
              >
                <div className="flex items-start gap-3 text-left">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8]/15 transition-all duration-300 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold tracking-tight mb-1 group-hover:text-[#4EB3E8] transition-colors duration-300">{loc.region}</h3>
                    <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed mb-2">{loc.city}</p>
                    <div className="flex items-center gap-1.5 text-xs text-black/40 dark:text-white/35">
                      <Phone className="w-3.5 h-3.5 text-[#4EB3E8]" strokeWidth={1.5} />
                      <span>{loc.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════ GROWTH JOURNEY ═══════ */}
      <div className="bg-[#fafafa] dark:bg-white/[0.015] border-y border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t("overview.growth.title", "Our Growth")} <span className="text-[#4EB3E8]">{t("overview.growth.titleHighlight", "Journey")}</span></h2>
            <p className="text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
              {t("overview.growth.description", "From a seed of an idea to a growing force in technology  -  every milestone marks a step toward our vision.")}
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-0">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 w-full">
                <img src="/assets/images/growth-plant.png" alt={t("overview.growth.altPlant", "Growing plant seedling symbolizing company growth")} className="w-full h-[280px] md:h-[350px] object-cover" />
              </motion.div>
              <div className="w-[3px] h-16 bg-gradient-to-b from-[#4EB3E8] to-[#4EB3E8]/40 rounded-full" />
            </div>

            <div className="absolute left-6 md:left-1/2 top-[calc(350px+4rem)] bottom-0 w-[3px] bg-gradient-to-b from-[#4EB3E8]/30 via-[#4EB3E8]/20 to-[#10b981]/10 dark:from-[#4EB3E8]/25 dark:via-[#4EB3E8]/15 dark:to-[#10b981]/5 md:-translate-x-[1.5px] rounded-full" />

            {[
              { icon: Sprout, date: t("overview.growth.step1Date", "19 Jan 2025"), title: t("overview.growth.step1Title", "The Seed Was Planted"), desc: t("overview.growth.step1Desc", "Cloud Nexus was founded with a clear mission  -  to bridge the gap between business needs and technology. What started as a small team with big dreams became the foundation of something meaningful."), color: "#4EB3E8" },
              { icon: Leaf, date: t("overview.growth.step2Date", "Mid 2025"), title: t("overview.growth.step2Title", "Taking Root & Growing"), desc: t("overview.growth.step2Desc", "We expanded our team, onboarded our first global clients, and delivered 30+ successful projects. Our expertise in mobile, web, cloud, and AI started gaining recognition across industries."), color: "#8b5cf6" },
              { icon: TreePine, date: t("overview.growth.step3Date", "Early 2026"), title: t("overview.growth.step3Title", "Branching Out"), desc: t("overview.growth.step3Desc", "With 50+ projects delivered across 15+ industries, we began attending global tech conferences like GITEX, built dedicated AI/ML capabilities, and expanded our service portfolio significantly."), color: "#10b981" },
              { icon: Sun, date: t("overview.growth.step4Date", "Today & Beyond"), title: t("overview.growth.step4Title", "Reaching New Heights"), desc: t("overview.growth.step4Desc", "We're now a full-service technology company trusted by businesses worldwide. Our journey is just beginning  -  with plans to scale further, innovate boldly, and create lasting impact."), color: "#f59e0b" },
            ].map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <div key={step.date} className="relative mb-12 last:mb-0">
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 top-4">
                    <motion.div whileInView={{ scale: [0.5, 1.2, 1] }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center border-[3px] bg-white dark:bg-[#0a0a0a] shadow-lg"
                      style={{ borderColor: step.color, boxShadow: `0 0 20px ${step.color}20` }}>
                      <Icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <motion.div initial={{ opacity: 0, x: isLeft ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3.5rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="group rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
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
                <Rocket className="w-6 h-6 text-[#4EB3E8]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t("overview.cta.title", "Ready to Innovate?")}
                <br />
                <span className="text-[#4EB3E8]">{t("overview.cta.titleHighlight", "Let's Build Together")}</span>
              </h2>

              <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">
                {t("overview.cta.description", "Join 500+ companies who trust CloudNexus to deliver technology solutions that drive real business outcomes.")}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
                >
                  {t("overview.cta.bookConsultation", "Book Free Consultation")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
                >
                  {t("overview.cta.viewWork", "View Our Work")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
