"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import { useTranslation } from "@/lib/i18n/context";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  ShoppingCart,
  Truck,
  MessageCircle,
  Building2,
  GraduationCap,
  Landmark,
  Plane,
  Factory,
  Droplets,
  Film,
  Package,
  Home,
  Wallet,
  Smartphone,

} from "lucide-react";

interface Industry {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  tagline: string;
  description: string;
  href: string;
  highlights: string[];
  accentColor: string;
  image: string;
  services: string[];
}

const industries: Industry[] = [
  {
    icon: Stethoscope,
    title: "Healthcare & Lifesciences",
    tagline: "Building Healthier Futures with Technology",
    description:
      "We build highly advanced and custom healthcare software solutions for all sizes of healthcare organizations and biopharma companies. Our HIPAA-compliant digital health solutions cover telemedicine platforms, electronic health records, patient portals, clinical data management, and medical device integration  -  designed for security, scalability, and regulatory compliance.",
    href: "/industry/healthcare-lifesciences",
    highlights: [
      "Telemedicine & virtual care platforms",
      "EHR & EMR system integration",
      "HIPAA & HITRUST compliance",
      "Medical device IoT connectivity",
      "Clinical trial data management",
      "Patient engagement portals",
    ],
    accentColor: "#10b981",
    image: "/images/stock/stock-b7ee6b8c4f.jpg",
    services: ["Patient Portals", "Telemedicine", "EHR Systems", "Health Analytics"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    tagline: "Powering the Future of Online Commerce",
    description:
      "We offer end-to-end web and mobile app development services to take your eCommerce business on the road to success. Our experts build tech-advanced, SEO-optimized, user-friendly and business-oriented custom e-commerce solutions with AI-driven personalization, multi-vendor marketplace capabilities, and seamless payment gateway integration.",
    href: "/industry/ecommerce-solutions",
    highlights: [
      "AI-powered product recommendations",
      "Multi-vendor marketplace platforms",
      "Headless commerce architecture",
      "Seamless payment integration",
      "Real-time inventory management",
      "Conversion rate optimization",
    ],
    accentColor: "#8b5cf6",
    image: "/images/ecommerce-delivery.png",
    services: ["Online Stores", "Marketplaces", "Payment Gateways", "Inventory Systems"],
  },
  {
    icon: Truck,
    title: "Transport & Logistics",
    tagline: "Streamlining Supply Chains Digitally",
    description:
      "We deliver complete solutions for transport & logistics businesses right from on-demand logistics delivery and warehouse management to on-demand taxi booking and courier delivery solutions. Our platforms feature real-time GPS tracking, route optimization algorithms, fleet management dashboards, and automated dispatch systems.",
    href: "/industry/transport-logistics",
    highlights: [
      "Real-time fleet GPS tracking",
      "AI-powered route optimization",
      "Warehouse management systems",
      "Automated dispatch & scheduling",
      "Supply chain visibility dashboards",
      "Last-mile delivery solutions",
    ],
    accentColor: "#f59e0b",
    image: "/images/stock/stock-4d7fff1498.jpg",
    services: ["Fleet Management", "Route Planning", "Warehouse Systems", "Delivery Apps"],
  },
  {
    icon: MessageCircle,
    title: "Social Networking",
    tagline: "Connecting People at Scale",
    description:
      "We offer custom social networking platform development services and deliver solutions for multiple segments with attractive design and a wide range of features that boost business evolution and customer engagement. Our platforms handle real-time messaging, content feeds, community management, and user-generated content at scale.",
    href: "/industry/social-networking",
    highlights: [
      "Real-time chat & messaging",
      "Content feeds & algorithms",
      "Community management tools",
      "User-generated content moderation",
      "Social analytics & insights",
      "Dating & matching platforms",
    ],
    accentColor: "#3b82f6",
    image: "/images/stock/stock-904a8a0ca8.jpg",
    services: ["Social Platforms", "Messaging Apps", "Dating Apps", "Community Portals"],
  },
  {
    icon: Building2,
    title: "Real Estate",
    tagline: "Digitizing Property Experiences",
    description:
      "Disrupt the way you buy, rent, sell, design, construct, and manage residential and commercial properties. We develop personalized property buying & selling experiences with tech-smart tailored services including virtual tours, CRM integration, automated lead management, and property analytics dashboards.",
    href: "/industry/real-estate",
    highlights: [
      "Property listing platforms",
      "3D virtual tours & walkthroughs",
      "CRM & lead management",
      "Mortgage calculator integration",
      "Property valuation analytics",
      "Tenant management portals",
    ],
    accentColor: "#06b6d4",
    image: "/images/stock/stock-5ff1ee1b1e.jpg",
    services: ["Listing Portals", "Virtual Tours", "Property CRM", "Management Apps"],
  },
  {
    icon: GraduationCap,
    title: "Education & eLearning",
    tagline: "Transforming Learning Experiences",
    description:
      "Our Education & eLearning experts deploy highly interactive and engaging educational apps and software by integrating the latest industry trends and advanced technologies for adaptive learning paths, live virtual classrooms, gamification-based engagement, and comprehensive progress analytics.",
    href: "/industry/education-elearning",
    highlights: [
      "Learning management systems",
      "Live virtual classrooms",
      "Adaptive learning algorithms",
      "Gamification & engagement",
      "Progress analytics dashboards",
      "Content authoring tools",
    ],
    accentColor: "#ec4899",
    image: "/images/stock/stock-84e9ea17bf.jpg",
    services: ["LMS Platforms", "Virtual Classes", "EdTech Apps", "Assessment Tools"],
  },
  {
    icon: Landmark,
    title: "Banking, Finance & Insurance",
    tagline: "Securing Financial Operations Digitally",
    description:
      "We deliver world-class digital banking, finance and insurance services to streamline all financial operations and provide services at easy reach for customers. Our solutions include AI-powered fraud detection, automated claims processing, PCI-DSS compliant payment systems, and regulatory compliance engines.",
    href: "/industry/banking-finance-insurance",
    highlights: [
      "Digital banking platforms",
      "AI-powered fraud detection",
      "Automated claims processing",
      "PCI-DSS compliance",
      "Loan management systems",
      "Insurance underwriting engines",
    ],
    accentColor: "#4EB3E8",
    image: "/images/stock/stock-d488a75ddc.jpg",
    services: ["Digital Banking", "Insurance Tech", "Loan Systems", "Compliance Tools"],
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    tagline: "Redefining Travel with Smart Solutions",
    description:
      "Our developers revolutionize business processes by seamlessly incorporating cutting-edge technologies like AI & ML in Travel and Hospitality web and app development. We build booking engines, travel management platforms, and hospitality solutions with dynamic pricing, multi-channel distribution, and personalized travel recommendations.",
    href: "/industry/travel-hospitality",
    highlights: [
      "Online booking engines",
      "Dynamic pricing algorithms",
      "Hotel management systems",
      "Multi-channel distribution",
      "AI-powered recommendations",
      "Loyalty & rewards programs",
    ],
    accentColor: "#f97316",
    image: "/images/stock/stock-4eae8787e0.jpg",
    services: ["Booking Platforms", "Hotel Systems", "Travel Apps", "Loyalty Programs"],
  },
  {
    icon: Factory,
    title: "Enterprise Retail & Manufacturing",
    tagline: "Smart Solutions for Modern Industry",
    description:
      "Our development team possesses extensive experience in developing business-specific customized enterprise, retail & manufacturing solutions that help retailers, manufacturers, and distributors streamline their supply chain, optimize business operations, and leverage IoT-powered smart factory systems for maximum efficiency.",
    href: "/industry/enterprise-retail-manufacturing",
    highlights: [
      "IoT-powered smart factories",
      "Supply chain management",
      "Inventory optimization",
      "ERP system integration",
      "Quality control automation",
      "Predictive maintenance",
    ],
    accentColor: "#64748b",
    image: "/images/stock/stock-f83a058636.jpg",
    services: ["ERP Systems", "IoT Solutions", "Supply Chain", "Retail Platforms"],
  },
  {
    icon: Droplets,
    title: "Oil & Gas",
    tagline: "Digital Innovation for Energy Sector",
    description:
      "We offer advanced IT solutions for Oil & Gas services that help clients improve overall quality, efficiency & optimize reservoir management. Our solutions address emerging business challenges by aligning users & employees with digital asset monitoring, predictive maintenance systems, and safety compliance platforms.",
    href: "/industry/oil-gas",
    highlights: [
      "Digital asset monitoring",
      "Predictive maintenance systems",
      "SCADA integration",
      "Safety compliance platforms",
      "Reservoir management tools",
      "Environmental monitoring",
    ],
    accentColor: "#854d0e",
    image: "/images/stock/stock-026aa0dc9d.jpg",
    services: ["Asset Management", "Maintenance Systems", "Safety Platforms", "SCADA"],
  },
  {
    icon: Film,
    title: "Media & Entertainment",
    tagline: "Creating Engaging Digital Experiences",
    description:
      "Digitally transform your media & entertainment solution by adopting guided approaches & strategies to reinvent how users create and consume content. We build streaming platforms, content management systems, and digital media distribution solutions with DRM protection, analytics, and global content delivery.",
    href: "/industry/media-entertainment",
    highlights: [
      "Video streaming platforms",
      "Content management systems",
      "DRM & rights management",
      "Live event & ticketing",
      "Media analytics dashboards",
      "CDN & global distribution",
    ],
    accentColor: "#dc2626",
    image: "/images/stock/stock-fa7d8a7ee1.jpg",
    services: ["Streaming Platforms", "CMS Solutions", "Event Ticketing", "Media Analytics"],
  },
  {
    icon: Package,
    title: "On Demand Delivery",
    tagline: "Instant Delivery, Seamless Experience",
    description:
      "We build tech-friendly on-demand web & app solutions to initiate quick & well-coordinated communication between customers, sellers, & delivery companies. Our platforms are powered by the latest technologies including AI for demand prediction, IoT for real-time tracking, and chatbots for customer support.",
    href: "/industry/on-demand-delivery",
    highlights: [
      "Food & grocery delivery apps",
      "Real-time order tracking",
      "AI-powered demand prediction",
      "Dynamic dispatch & routing",
      "Multi-vendor management",
      "In-app payment & wallet",
    ],
    accentColor: "#16a34a",
    image: "/images/stock/stock-b13b3308c8.jpg",
    services: ["Food Delivery", "Grocery Apps", "Courier Services", "Delivery Logistics"],
  },
  {
    icon: Home,
    title: "Home Service",
    tagline: "On-Demand Services at Your Doorstep",
    description:
      "We develop on-demand home service platforms that seamlessly connect service providers with customers. Our solutions include intelligent booking engines, provider matching algorithms, scheduling systems, secure in-app payments, and real-time service tracking  -  all optimized for both web and mobile experiences.",
    href: "/industry/home-service",
    highlights: [
      "Service booking platforms",
      "Provider matching algorithms",
      "Real-time scheduling",
      "In-app secure payments",
      "Rating & review systems",
      "Service tracking dashboards",
    ],
    accentColor: "#0891b2",
    image: "/images/stock/stock-bbc14d0b55.jpg",
    services: ["Booking Apps", "Provider Platforms", "Scheduling Tools", "Payment Systems"],
  },
  {
    icon: Wallet,
    title: "Fintech",
    tagline: "Next-Gen Financial Technology",
    description:
      "We build scalable financial technology solutions including digital wallets, payment gateways, lending platforms, robo-advisory investment tools, and wealth management systems. Our fintech platforms feature PCI-DSS Level 1 compliance, smart transaction routing, AI-driven portfolio optimization, and multi-jurisdiction regulatory engines.",
    href: "/industry/fintech",
    highlights: [
      "Digital wallet platforms",
      "Payment gateway solutions",
      "Lending & credit platforms",
      "Robo-advisory systems",
      "Blockchain & crypto solutions",
      "Regulatory compliance engines",
    ],
    accentColor: "#6366f1",
    image: "/images/stock/stock-a1a452f828.jpg",
    services: ["Digital Wallets", "Payment Systems", "Lending Platforms", "Investment Tools"],
  },
  {
    icon: Smartphone,
    title: "mCommerce",
    tagline: "Mobile-First Shopping Experiences",
    description:
      "We craft mobile commerce platforms optimized for maximum conversions with one-tap checkout flows, personalized push notifications, loyalty & rewards programs, and seamless integration with existing e-commerce backends. Our mCommerce solutions deliver native-level performance with cross-platform reach.",
    href: "/industry/mcommerce",
    highlights: [
      "Mobile-first store design",
      "One-tap checkout flows",
      "Push notification campaigns",
      "Loyalty & rewards programs",
      "AR product visualization",
      "Cross-platform performance",
    ],
    accentColor: "#a855f7",
    image: "/images/stock/stock-be267acabb.jpg",
    services: ["Mobile Stores", "Checkout Systems", "Loyalty Apps", "AR Commerce"],
  },
];

const stats = [
  { value: "15+", label: "Industries Served", color: "#4EB3E8" },
  { value: "200+", label: "Projects Delivered", color: "#10b981" },
  { value: "10+", label: "Global Clients", color: "#8b5cf6" },
  { value: "98%", label: "Client Satisfaction", color: "#f59e0b" },
];

function IndustrySection({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = industry.icon;
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className="border-b border-black/[0.04] dark:border-white/[0.04] last:border-b-0"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isReversed ? "lg:direction-rtl" : ""
          }`}
          style={{ direction: isReversed ? "rtl" : "ltr" }}
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
            style={{ direction: "ltr" }}
          >
            <div
              className="absolute -inset-4 rounded-3xl opacity-[0.07] blur-2xl pointer-events-none"
              style={{ background: industry.accentColor }}
            />

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-black/[0.08] dark:border-white/[0.06] shadow-lg dark:shadow-2xl dark:shadow-black/40">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Light mode overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent dark:from-black/50 dark:via-black/10 dark:to-black/5" />
              {/* Accent tint */}
              <div
                className="absolute inset-0 mix-blend-soft-light opacity-30 dark:opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${industry.accentColor}, transparent 70%)`,
                }}
              />
              {/* Bottom info bar on image */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20"
                    style={{ background: `${industry.accentColor}90` }}
                  >
                    <Icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-white drop-shadow-sm">
                      {industry.title}
                    </p>
                    <p className="text-[11px] font-medium text-white/70">
                      {industry.services.length} {t("industry.solutions", "solutions")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            style={{ direction: "ltr" }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
              style={{
                borderColor: `${industry.accentColor}25`,
                background: `${industry.accentColor}08`,
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: industry.accentColor }}
              />
              <span
                className="text-[12px] font-bold uppercase tracking-wider"
                style={{ color: industry.accentColor }}
              >
                {industry.tagline}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5">
              {industry.title}
            </h2>

            <p className="text-[15px] font-medium text-black/50 dark:text-white/45 leading-[1.8] mb-8">
              {industry.description}
            </p>

            {/* Key Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {industry.highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: industry.accentColor }}
                  />
                  <span className="text-[13.5px] font-medium text-black/55 dark:text-white/50">
                    {h}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {industry.services.map((s) => (
                <span
                  key={s}
                  className="px-3.5 py-1.5 rounded-lg text-[12px] font-semibold border border-black/[0.06] dark:border-white/[0.06] text-black/50 dark:text-white/40 bg-black/[0.02] dark:bg-white/[0.02]"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTA Link */}
            <Link
              href={industry.href}
              className="group inline-flex items-center gap-2 text-[14px] font-bold transition-all duration-300"
              style={{ color: industry.accentColor }}
            >
              {t("industry.explore", "Explore")} {industry.title.split("&")[0].trim()}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function IndustryPage() {
  const { t } = useTranslation();
  const translatedIndustries = useTranslatedData(industries);
  const translatedStats = useTranslatedData(stats);
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4EB3E8]/8 via-transparent to-transparent dark:from-[#4EB3E8]/5" />
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-[#4EB3E8]/[0.04]"
              style={{
                width: `${500 + i * 300}px`,
                height: `${500 + i * 300}px`,
                left: "50%",
                top: "40%",
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                {t("industry.hero.title1", "Tailored Solutions for")}
                <br />
                <span className="bg-gradient-to-r from-[#4EB3E8] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                  {t("industry.hero.title2", "Every Industry")}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg font-medium text-black/45 dark:text-white/45 max-w-lg leading-relaxed"
              >
                {t("industry.hero.description", "Explore our hands-on expertise in creating tailor-made digital solutions packed with strategy, operations and technologies across 15+ industry verticals.")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
                >
                  {t("industry.hero.cta1", "Let's Talk")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
                >
                  {t("industry.hero.cta2", "View Our Work")}
                </Link>
              </motion.div>
            </div>

            {/* Right - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-[#4EB3E8]/[0.06] blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-black/[0.08] dark:border-white/[0.06] shadow-2xl">
                <Image
                  src="/images/stock/stock-ec34cb9b56.jpg"
                  alt={t("industry.hero.altImage", "Digital solutions across industries")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/20 via-transparent to-[#8b5cf6]/10 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-y border-black/[0.04] dark:border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {translatedStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-3xl md:text-5xl font-bold tracking-tight"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-black/35 dark:text-white/35">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Sections - One by one on scroll */}
      <div>
        {translatedIndustries.map((industry, i) => (
          <IndustrySection key={industry.title} industry={industry} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-black/[0.04] dark:border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="relative rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02] p-6 sm:p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4EB3E8]/5 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                {t("industry.cta.title", "We Serve Every Industry")}
              </h2>
              <p className="mt-5 text-base font-medium text-black/45 dark:text-white/45 max-w-xl mx-auto leading-relaxed">
                {t("industry.cta.description", "From startups to enterprises, we build tailored digital solutions for your domain. Let's create something impactful together.")}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
                >
                  {t("industry.cta.btn1", "Get a Free Consultation")}{" "}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
                >
                  {t("industry.cta.btn2", "View Our Work")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
