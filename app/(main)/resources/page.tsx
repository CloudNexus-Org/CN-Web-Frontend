"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  LifeBuoy, Mail, BookOpen, Briefcase, CalendarCheck,
  ArrowRight, Headphones, Phone, Clock, Shield,
  Zap, CheckCircle2, Globe, Users, Star, MessageSquare,
  Code2, Cloud, Cpu, Layers, Rocket, Target,
  TrendingUp, Award, Heart,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";

const resources = [
  {
    title: "Support",
    description: "Our dedicated support team is available to help you resolve any technical issues, answer questions, and provide guidance on Cloud Nexus products and services.",
    href: "/resources/support",
    icon: LifeBuoy,
    accent: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/15 dark:to-cyan-500/15",
    iconColor: "text-blue-500",
    borderAccent: "group-hover:border-blue-500/30",
    image: "/assets/images/card-support.jpg",
    features: ["24/7 Technical Support", "Priority SLA Response", "Knowledge Base Access"],
  },
  {
    title: "Contact Us",
    description: "Have a question or want to discuss a project? Our team responds within 4 business hours. Reach us by email, phone, or through the contact form.",
    href: "/resources/contact",
    icon: Mail,
    accent: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/15 dark:to-teal-500/15",
    iconColor: "text-emerald-500",
    borderAccent: "group-hover:border-emerald-500/30",
    image: "/assets/images/card-contact.jpg",
    features: ["4-Hour Response Time", "Dedicated Project Manager", "Global Reach"],
  },
  {
    title: "Blogs",
    description: "Stay updated with the latest in cloud computing, AI/ML, DevOps, and web development. Our engineers share real-world insights, tutorials, and case studies.",
    href: "/resources/blog",
    icon: BookOpen,
    accent: "from-purple-500/10 to-violet-500/10 dark:from-purple-500/15 dark:to-violet-500/15",
    iconColor: "text-purple-500",
    borderAccent: "group-hover:border-purple-500/30",
    image: "/assets/images/card-blog.jpg",
    features: ["Tech Deep Dives", "Case Studies", "Industry Trends"],
  },
  {
    title: "Careers",
    description: "Join a team of passionate engineers, designers, and innovators building cutting-edge technology solutions. We offer competitive compensation, flexible work, and growth opportunities.",
    href: "/resources/career",
    icon: Briefcase,
    accent: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/15 dark:to-orange-500/15",
    iconColor: "text-amber-500",
    borderAccent: "group-hover:border-amber-500/30",
    image: "/assets/images/card-careers.jpg",
    features: ["Remote-Friendly", "Learning Culture", "Open Positions"],
  },
  {
    title: "Free Consultation",
    description: "Book a free 30-minute strategy session with our experts. Discuss your project requirements, get tailored architecture recommendations, and receive a custom proposal.",
    href: "/resources/free-consultation",
    icon: CalendarCheck,
    accent: "from-[#4EB3E8]/10 to-blue-400/10 dark:from-[#4EB3E8]/15 dark:to-blue-400/15",
    iconColor: "text-[#4EB3E8]",
    borderAccent: "group-hover:border-[#4EB3E8]/30",
    image: "/assets/images/card-consultation.jpg",
    features: ["No Commitment", "Expert Architects", "Custom Proposal"],
  },
];

const stats = [
  { value: "100+", label: "Projects Delivered", icon: CheckCircle2 },
  { value: "24/7", label: "Support Available", icon: Clock },
  { value: "99.9%", label: "Client Satisfaction", icon: Star },
  { value: "15+", label: "Services Offered", icon: Zap },
];

const services = [
  { name: "Mobile App Development", icon: Layers },
  { name: "Web Development", icon: Globe },
  { name: "Cloud Services", icon: Cloud },
  { name: "AI/ML Solutions", icon: Cpu },
  { name: "DevOps & CI/CD", icon: Code2 },
  { name: "UI/UX Design", icon: Target },
  { name: "SaaS Development", icon: Rocket },
  { name: "E-Commerce", icon: TrendingUp },
  { name: "Digital Transformation", icon: Zap },
];

const processSteps = [
  { step: "01", title: "Discovery Call", desc: "We learn about your business, goals, and technical requirements in a free 30-minute consultation.", icon: Phone },
  { step: "02", title: "Strategy & Planning", desc: "Our architects create a detailed project roadmap, tech stack recommendation, and timeline.", icon: Target },
  { step: "03", title: "Design & Development", desc: "Dedicated teams build your product using agile sprints with regular demos and feedback loops.", icon: Code2 },
  { step: "04", title: "Launch & Support", desc: "We deploy to production, monitor performance, and provide ongoing maintenance and support.", icon: Rocket },
];

const testimonials = [
  { quote: "Cloud Nexus transformed our legacy monolith into a modern microservices platform running on Kubernetes. The migration was seamless  -  zero downtime, 3x faster performance, and our infrastructure costs dropped by 35%. Their engineering team felt like an extension of ours.", author: "Rahul Mehta", role: "Founder & CEO", company: "MedSync Health", initials: "RM", color: "bg-emerald-500", metric: "35% cost reduction" },
  { quote: "We needed a mobile app delivered in 8 weeks. Cloud Nexus not only met the deadline but delivered 2 weeks early with features we hadn't even thought of. The UI/UX quality was on par with products from much larger companies. They've been our go-to partner since.", author: "Priya Sharma", role: "Product Manager", company: "ShopEase Retail", initials: "PS", color: "bg-purple-500", metric: "2 weeks early delivery" },
  { quote: "Their DevOps team set up our entire CI/CD pipeline, container orchestration, and monitoring stack. We went from manual deployments to 50+ automated deploys per week with 99.99% uptime. The ROI was visible within the first month.", author: "Arjun Patel", role: "Chief Technology Officer", company: "PayWise Fintech", initials: "AP", color: "bg-[#4EB3E8]", metric: "99.99% uptime achieved" },
];

const whyChooseItems = [
  { icon: Shield, title: "Enterprise Security", desc: "Zero-trust architecture, encrypted data, and continuous monitoring for all deployments." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile methodology with 2-week sprints. From concept to MVP in as little as 6 weeks." },
  { icon: Users, title: "Dedicated Teams", desc: "Experienced engineers assigned to your project  -  not shared across multiple clients." },
  { icon: Award, title: "Quality First", desc: "Automated testing, code reviews, and CI/CD pipelines ensure every release meets the highest standards." },
  { icon: Headphones, title: "24/7 Support", desc: "Post-launch maintenance, monitoring, and round-the-clock support to keep things running smoothly." },
  { icon: Heart, title: "Client-Centric", desc: "Your success is our success. We treat every project as if it were our own product." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Architectures designed to grow with you  -  from 100 users to 10 million." },
  { icon: Globe, title: "Global Reach", desc: "Working with clients across India, US, UK, and the Middle East on diverse technology challenges." },
];

const faqs = [
  { q: "What types of projects does Cloud Nexus work on?", a: "We work on a wide range of projects including web applications, mobile apps (iOS & Android), cloud infrastructure, AI/ML solutions, SaaS platforms, e-commerce stores, and enterprise software. Whether you're a startup building your MVP or an enterprise modernizing legacy systems, we have the expertise to help." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on scope and complexity. A simple MVP can be delivered in 6-8 weeks, while a full-featured enterprise platform may take 4-6 months. We provide detailed timelines during the planning phase and use agile sprints to ensure consistent progress and transparency." },
  { q: "What is your pricing model?", a: "We offer flexible pricing models including fixed-price projects, time & material engagements, and dedicated team hiring. During your free consultation, we'll discuss your requirements and recommend the model that best fits your budget and project needs." },
  { q: "Do you provide post-launch support?", a: "Absolutely. We offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, feature enhancements, and 24/7 emergency support. We believe our relationship doesn't end at launch  -  it's just the beginning." },
  { q: "Can I hire dedicated developers from Cloud Nexus?", a: "Yes. You can hire dedicated developers who work exclusively on your project as an extension of your team. They follow your processes, attend your standups, and are fully committed to your project goals. Available on monthly contracts with flexible scaling." },
  { q: "How do I get started?", a: "The easiest way is to book a free 30-minute consultation. We'll discuss your project idea, technical requirements, and business goals. After the call, you'll receive a detailed proposal with architecture recommendations, timeline, and cost estimate  -  all at no obligation." },
];

export default function ResourcesPage() {
  const { t } = useTranslation();
  const translatedResources = useTranslatedData(resources);
  const translatedStats = useTranslatedData(stats);
  const translatedServices = useTranslatedData(services);
  const translatedProcessSteps = useTranslatedData(processSteps);
  const translatedTestimonials = useTranslatedData(testimonials);
  const translatedWhyChooseItems = useTranslatedData(whyChooseItems);
  const translatedFaqs = useTranslatedData(faqs);
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Hero with Image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4EB3E8]/[0.04] blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-500/[0.03] blur-[80px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                {t("resourcesHub.hero.title", "How can we")}{" "}
                <span className="text-[#4EB3E8]">{t("resourcesHub.hero.titleHighlight", "help you")}</span> {t("resourcesHub.hero.titleEnd", "today?")}
              </h1>
              <p className="mt-5 text-base text-black/50 dark:text-white/45 max-w-lg leading-relaxed">
                {t("resourcesHub.hero.description", "From technical support to career opportunities, from expert consultations to in-depth tech insights  -  everything you need from Cloud Nexus is right here.")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/resources/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-semibold shadow-lg transition-all duration-300">
                  <Mail className="w-4 h-4" /> {t("resourcesHub.hero.cta.getInTouch", "Get in Touch")}
                </Link>
                <Link href="/resources/free-consultation" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:opacity-90 transition-all duration-300">
                  <CalendarCheck className="w-4 h-4" /> {t("resourcesHub.hero.cta.bookConsultation", "Book Free Consultation")}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-black/[0.06] dark:border-white/[0.06] shadow-2xl shadow-[#4EB3E8]/[0.08]">
                  <Image src="/assets/images/resources-hero.jpg" alt="Cloud Nexus Team at Work" fill className="object-cover" sizes="(max-width: 1024px) 0vw, 450px" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Shield className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Globe className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-y border-black/[0.05] dark:border-white/[0.05] bg-[#fafafa] dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {translatedStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#4EB3E8]/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#4EB3E8]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#4EB3E8]">{stat.value}</p>
                    <p className="text-[11px] text-black/40 dark:text-white/35 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{t("resourcesHub.mission.titlePrefix", "Our")} <span className="text-[#4EB3E8]">{t("resourcesHub.mission.titleHighlight", "mission")}</span></h2>
              <p className="text-sm text-black/55 dark:text-white/45 leading-relaxed mb-4">
                {t("resourcesHub.mission.paragraph1", "At Cloud Nexus, we believe that great technology should be accessible to every business  -  not just the ones with massive engineering teams and unlimited budgets. We exist to bridge that gap by providing world-class development, cloud, and AI services at a fraction of the cost of building in-house.")}
              </p>
              <p className="text-sm text-black/55 dark:text-white/45 leading-relaxed">
                {t("resourcesHub.mission.paragraph2", "Founded by engineers who have worked with Fortune 500 companies and high-growth startups alike, Cloud Nexus brings enterprise-level expertise with the agility and passion of a boutique studio. Every project we take on is treated as a partnership, not a transaction.")}
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{t("resourcesHub.approach.titlePrefix", "Our")} <span className="text-[#4EB3E8]">{t("resourcesHub.approach.titleHighlight", "approach")}</span></h2>
              <p className="text-sm text-black/55 dark:text-white/45 leading-relaxed mb-4">
                {t("resourcesHub.approach.paragraph1", "We don't just write code  -  we solve problems. Every engagement starts with understanding your business goals, your users, and the outcomes that matter most. Our architects then design solutions that are not only technically sound but also aligned with your growth trajectory.")}
              </p>
              <p className="text-sm text-black/55 dark:text-white/45 leading-relaxed">
                {t("resourcesHub.approach.paragraph2", "We follow agile methodologies with transparent communication, regular demos, and iterative feedback. You'll always know what's being built, why it's being built, and when it will be delivered. No surprises, no hidden costs, no black boxes.")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Resource Cards */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t("resourcesHub.cards.title", "Explore our resources")}</h2>
          <p className="mt-1.5 text-sm text-black/45 dark:text-white/40">{t("resourcesHub.cards.description", "Everything you need to get started, stay informed, and grow with Cloud Nexus.")}</p>
        </motion.div>
        {/* Top row  -  first 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {translatedResources.slice(0, 3).map((resource, i) => {
            const Icon = resource.icon;
            return (
              <motion.div key={resource.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Link href={resource.href}>
                  <div className={`group h-full rounded-2xl border border-black/[0.08] dark:border-white/[0.08] ${resource.borderAccent} bg-white dark:bg-white/[0.02] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.06] dark:hover:shadow-black/40 hover:-translate-y-1 flex flex-col`}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image src={resource.image} alt={resource.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className={`w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-lg font-bold text-white">{resource.title}</h3>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-sm text-black/55 dark:text-white/45 leading-relaxed mb-4 flex-1">{resource.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {resource.features.map((f) => (
                          <span key={f} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] text-black/50 dark:text-white/40">{f}</span>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4EB3E8] group-hover:gap-2.5 transition-all">{t("resourcesHub.cards.explore", "Explore")} <ArrowRight className="w-4 h-4" /></span>
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${resource.accent} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                          <ArrowRight className={`w-3.5 h-3.5 ${resource.iconColor}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row  -  last 2 cards, wider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {translatedResources.slice(3).map((resource, i) => {
            const Icon = resource.icon;
            return (
              <motion.div key={resource.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: (i + 3) * 0.06 }}>
                <Link href={resource.href}>
                  <div className={`group h-full rounded-2xl border border-black/[0.08] dark:border-white/[0.08] ${resource.borderAccent} bg-white dark:bg-white/[0.02] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.06] dark:hover:shadow-black/40 hover:-translate-y-1 flex flex-col md:flex-row`}>
                    <div className="relative aspect-[16/9] md:aspect-auto md:w-2/5 overflow-hidden flex-shrink-0">
                      <Image src={resource.image} alt={resource.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 40vw" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 hidden md:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent md:hidden" />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:p-7 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[#4EB3E8] transition-colors">{resource.title}</h3>
                      <p className="text-sm text-black/55 dark:text-white/45 leading-relaxed mb-4 flex-1">{resource.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {resource.features.map((f) => (
                          <span key={f} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] text-black/50 dark:text-white/40">{f}</span>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4EB3E8] group-hover:gap-2.5 transition-all">{t("resourcesHub.cards.explore", "Explore")} <ArrowRight className="w-4 h-4" /></span>
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${resource.accent} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                          <ArrowRight className={`w-3.5 h-3.5 ${resource.iconColor}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>

      {/* Industries We Serve */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05] bg-[#fafafa] dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t("resourcesHub.industries.title", "Industries we")} <span className="text-[#4EB3E8]">{t("resourcesHub.industries.titleHighlight", "serve")}</span></h2>
            <p className="mt-1.5 text-sm text-black/45 dark:text-white/40 max-w-xl mx-auto">{t("resourcesHub.industries.description", "We bring deep domain expertise across multiple industries, helping businesses solve their most complex technology challenges.")}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: t("resourcesHub.industries.healthcare.name", "Healthcare & Life Sciences"), desc: t("resourcesHub.industries.healthcare.desc", "HIPAA-compliant platforms, telemedicine, patient portals, and medical data analytics."), image: "/images/stock/stock-44bf6c19c5.jpg" },
              { name: t("resourcesHub.industries.fintech.name", "Fintech & Banking"), desc: t("resourcesHub.industries.fintech.desc", "Payment gateways, trading platforms, lending systems, and regulatory compliance tools."), image: "/images/stock/stock-1022c12e8b.jpg" },
              { name: t("resourcesHub.industries.ecommerce.name", "E-Commerce & Retail"), desc: t("resourcesHub.industries.ecommerce.desc", "Custom storefronts, inventory management, multi-vendor marketplaces, and omnichannel solutions."), image: "/images/stock/stock-e0277ff9ad.jpg" },
              { name: t("resourcesHub.industries.education.name", "Education & eLearning"), desc: t("resourcesHub.industries.education.desc", "LMS platforms, virtual classrooms, assessment engines, and student management systems."), image: "/images/stock/stock-16e7a4b253.jpg" },
              { name: t("resourcesHub.industries.logistics.name", "Logistics & Transport"), desc: t("resourcesHub.industries.logistics.desc", "Fleet management, route optimization, real-time tracking, and warehouse automation."), image: "/images/stock/stock-6135b63796.jpg" },
              { name: t("resourcesHub.industries.realestate.name", "Real Estate & PropTech"), desc: t("resourcesHub.industries.realestate.desc", "Property listings, virtual tours, CRM systems, and tenant management platforms."), image: "/images/stock/stock-e1459207a8.jpg" },
              { name: t("resourcesHub.industries.media.name", "Media & Entertainment"), desc: t("resourcesHub.industries.media.desc", "Streaming platforms, content management, social apps, and digital publishing tools."), image: "/images/stock/stock-48c4481991.jpg" },
              { name: t("resourcesHub.industries.saas.name", "SaaS & Enterprise"), desc: t("resourcesHub.industries.saas.desc", "Multi-tenant architectures, enterprise dashboards, workflow automation, and integration platforms."), image: "/images/stock/stock-7334f95cf8.jpg" },
            ].map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}>
                <div className="group rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] overflow-hidden h-full hover:shadow-lg hover:shadow-black/[0.04] dark:hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img src={ind.image} alt={ind.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-sm font-bold text-white leading-tight">{ind.name}</h4>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] text-black/50 dark:text-white/40 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t("resourcesHub.techStack.title", "Our technology stack")}</h2>
          <p className="mt-1.5 text-sm text-black/45 dark:text-white/40 max-w-xl mx-auto">{t("resourcesHub.techStack.description", "We use modern, battle-tested technologies to build fast, secure, and scalable applications.")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              category: t("resourcesHub.techStack.frontend.category", "Frontend"),
              techs: [
                { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
                { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
                { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
              ],
              desc: t("resourcesHub.techStack.frontend.desc", "Modern, responsive interfaces built with component-driven frameworks and optimized for performance across all devices."),
            },
            {
              category: t("resourcesHub.techStack.backend.category", "Backend & Cloud"),
              techs: [
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
                { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
                { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
              ],
              desc: t("resourcesHub.techStack.backend.desc", "Robust server architectures, microservices, and cloud-native deployments that scale seamlessly from prototype to production."),
            },
            {
              category: t("resourcesHub.techStack.aiml.category", "AI/ML & DevOps"),
              techs: [
                { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                { name: "OpenAI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg" },
                { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
                { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
                { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
                { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
              ],
              desc: t("resourcesHub.techStack.aiml.desc", "Intelligent automation, machine learning pipelines, and CI/CD workflows that accelerate delivery while maintaining quality."),
            },
          ].map((stack, i) => (
            <motion.div key={stack.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <div className="h-full rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-7">
                <h3 className="text-lg font-bold mb-2 text-[#4EB3E8]">{stack.category}</h3>
                <p className="text-xs text-black/50 dark:text-white/40 leading-relaxed mb-5">{stack.desc}</p>
                <div className="grid grid-cols-4 gap-3">
                  {stack.techs.map((t) => (
                    <div key={t.name} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04] hover:border-[#4EB3E8]/30 hover:-translate-y-0.5 transition-all duration-300 group">
                      <img src={t.logo} alt={t.name} className="w-8 h-8 object-contain dark:brightness-90 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[9px] font-semibold text-black/50 dark:text-white/40 text-center leading-tight">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              {t("resourcesHub.services.title", "What we")} <span className="text-[#4EB3E8]">{t("resourcesHub.services.titleHighlight", "build")}</span> {t("resourcesHub.services.titleEnd", "for you")}
            </h2>
            <p className="text-sm text-black/50 dark:text-white/40 leading-relaxed mb-6 max-w-lg">
              {t("resourcesHub.services.description", "Cloud Nexus specializes in designing and building scalable digital solutions  -  from mobile apps and cloud infrastructure to AI-powered platforms and modern web applications. Our team brings expertise across the full technology spectrum.")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {translatedServices.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.name} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
                    <Icon className="w-4 h-4 text-[#4EB3E8] flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-black/60 dark:text-white/50 truncate">{s.name}</span>
                  </div>
                );
              })}
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4EB3E8] hover:gap-3 transition-all">
              {t("resourcesHub.services.viewAll", "View all services")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "6", unit: t("resourcesHub.metrics.weeks", "weeks"), label: t("resourcesHub.metrics.mvpDelivery", "Average MVP delivery time") },
                { num: "98%", unit: "", label: t("resourcesHub.metrics.onTime", "On-time project delivery rate") },
                { num: "40%", unit: "", label: t("resourcesHub.metrics.costSavings", "Average cost savings vs in-house") },
                { num: "4.9", unit: "/5", label: t("resourcesHub.metrics.satisfaction", "Client satisfaction rating") },
              ].map((m, i) => (
                <div key={i} className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5 text-center">
                  <p className="text-2xl font-bold text-[#4EB3E8]">{m.num}<span className="text-sm text-black/30 dark:text-white/25">{m.unit}</span></p>
                  <p className="text-[10px] text-black/45 dark:text-white/40 font-medium mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Process */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05] bg-[#fafafa] dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t("resourcesHub.process.title", "How we work")}</h2>
            <p className="mt-1.5 text-sm text-black/45 dark:text-white/40 max-w-xl mx-auto">{t("resourcesHub.process.description", "From first call to launch day  -  our proven 4-step process delivers results every time.")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {translatedProcessSteps.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <div className="relative rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-6 h-full">
                    <span className="text-5xl font-black text-[#4EB3E8]/10 absolute top-4 right-5">{item.step}</span>
                    <div className="w-11 h-11 rounded-xl bg-[#4EB3E8]/8 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#4EB3E8]" />
                    </div>
                    <h4 className="text-sm font-bold mb-2">{item.title}</h4>
                    <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#4EB3E8]/[0.03] blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/[0.02] blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 relative">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4EB3E8]/8 text-[#4EB3E8] text-xs font-semibold mb-4 border border-[#4EB3E8]/15">
              <MessageSquare className="w-3.5 h-3.5" /> {t("resourcesHub.testimonials.badge", "Client Testimonials")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("resourcesHub.testimonials.title", "Trusted by teams building the future")}</h2>
            <p className="mt-2 text-sm text-black/45 dark:text-white/40 max-w-lg mx-auto">{t("resourcesHub.testimonials.description", "Real feedback from founders, CTOs, and product leaders we've partnered with.")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {translatedTestimonials.map((tm, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="group h-full rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-7 flex flex-col relative overflow-hidden hover:border-[#4EB3E8]/15 hover:shadow-xl hover:shadow-[#4EB3E8]/[0.03] transition-all duration-300">
                  <div className="absolute top-5 right-5 text-6xl font-serif text-[#4EB3E8]/[0.07] leading-none select-none">&ldquo;</div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-full ${tm.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-sm font-bold text-white">{tm.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">{tm.author}</p>
                      <p className="text-[11px] text-black/45 dark:text-white/35">{tm.role}, {tm.company}</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-[13px] text-black/60 dark:text-white/50 leading-[1.8] flex-1">&ldquo;{tm.quote}&rdquo;</p>

                  <div className="mt-5 pt-4 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-emerald-500/8 text-emerald-600 dark:text-emerald-400 border border-emerald-500/15">
                      <TrendingUp className="w-3 h-3" /> {tm.metric}
                    </span>
                    <span className="text-[10px] text-black/25 dark:text-white/20 font-medium">{tm.company}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05] bg-[#fafafa] dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t("resourcesHub.apart.title", "What sets us")} <span className="text-[#4EB3E8]">{t("resourcesHub.apart.titleHighlight", "apart")}</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
              <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-7 h-full">
                <h3 className="text-lg font-bold mb-3">{t("resourcesHub.apart.noFreelancers.title", "No Freelancers, No Outsourcing")}</h3>
                <p className="text-sm text-black/55 dark:text-white/45 leading-relaxed">
                  {t("resourcesHub.apart.noFreelancers.desc", "Every member of the Cloud Nexus team is a full-time, in-house engineer. We don't outsource your project to random freelancers or third-party vendors. When you work with us, you get dedicated professionals who understand your codebase, your goals, and your timelines inside out. This means higher code quality, faster iteration, and zero communication gaps.")}
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
              <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-7 h-full">
                <h3 className="text-lg font-bold mb-3">{t("resourcesHub.apart.transparentPricing.title", "Transparent Pricing, No Surprises")}</h3>
                <p className="text-sm text-black/55 dark:text-white/45 leading-relaxed">
                  {t("resourcesHub.apart.transparentPricing.desc", "We believe in complete pricing transparency. Before writing a single line of code, you'll receive a detailed breakdown of costs, timelines, and deliverables. We don't pad estimates or add hidden charges. If scope changes during the project, we discuss it openly and adjust the plan together. Our clients always know exactly what they're paying for.")}
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}>
              <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-7 h-full">
                <h3 className="text-lg font-bold mb-3">{t("resourcesHub.apart.longTerm.title", "Long-Term Partnership Mindset")}</h3>
                <p className="text-sm text-black/55 dark:text-white/45 leading-relaxed">
                  {t("resourcesHub.apart.longTerm.desc", "We don't think of projects as one-off transactions. Our best client relationships span years, with Cloud Nexus evolving alongside their business. From the initial MVP to scaling to millions of users, we're here for the long haul. Over 80% of our revenue comes from repeat clients and referrals  -  a testament to the trust we build.")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#4EB3E8]/5 to-purple-500/5 dark:from-[#4EB3E8]/8 dark:to-purple-500/8 p-6 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold mb-2">{t("resourcesHub.contact.title", "Reach out to us")}</h3>
                  <p className="text-sm text-black/50 dark:text-white/40 leading-relaxed">{t("resourcesHub.contact.description", "Our team is available Monday to Saturday, 9 AM to 7 PM IST. We typically respond within a few hours.")}</p>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4EB3E8]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#4EB3E8]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">{t("resourcesHub.contact.emailLabel", "Email")}</p>
                      <a href="mailto:work@cloudnexus.in" className="text-sm font-semibold hover:text-[#4EB3E8] transition-colors">work@cloudnexus.in</a>
                      <br />
                      <a href="mailto:hr@cloudnexus.in" className="text-xs text-black/40 dark:text-white/35 hover:text-[#4EB3E8] transition-colors">hr@cloudnexus.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">{t("resourcesHub.contact.phoneLabel", "Phone")}</p>
                      <a href="tel:+919201004208" className="text-sm font-semibold hover:text-[#4EB3E8] transition-colors">+91 9201004208</a>
                      <p className="text-xs text-black/40 dark:text-white/35 mt-0.5">{t("resourcesHub.contact.phoneHours", "Mon–Sat, 9AM–7PM IST")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">{t("resourcesHub.contact.quickConnectLabel", "Quick Connect")}</p>
                      <Link href="/resources/contact" className="text-sm font-semibold hover:text-[#4EB3E8] transition-colors">{t("resourcesHub.contact.contactForm", "Contact Form")}</Link>
                      <br />
                      <Link href="/resources/free-consultation" className="text-xs text-black/40 dark:text-white/35 hover:text-[#4EB3E8] transition-colors">{t("resourcesHub.contact.bookACall", "Book a Call")}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Cloud Nexus */}
      <div className="bg-[#fafafa] dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t("resourcesHub.whyChoose.title", "Why choose Cloud Nexus?")}</h2>
            <p className="mt-1.5 text-sm text-black/45 dark:text-white/40 max-w-xl mx-auto">{t("resourcesHub.whyChoose.subtitle", "We combine technical excellence with a client-first approach to deliver solutions that drive real results.")}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {translatedWhyChooseItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#4EB3E8]/8 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-5 h-5 text-[#4EB3E8]" />
                    </div>
                    <h4 className="text-sm font-bold mb-1.5">{item.title}</h4>
                    <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t("resourcesHub.faqs.title", "Frequently asked questions")}</h2>
            <p className="mt-1.5 text-sm text-black/45 dark:text-white/40">{t("resourcesHub.faqs.subtitle", "Quick answers to common questions about working with Cloud Nexus.")}</p>
          </motion.div>

          <div className="space-y-4">
            {translatedFaqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}>
                <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-6">
                  <h4 className="text-sm font-bold mb-2">{faq.q}</h4>
                  <p className="text-xs text-black/55 dark:text-white/45 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t("resourcesHub.cta.title", "Ready to start your next project?")}</h2>
            <p className="text-sm text-black/45 dark:text-white/40 mb-6 max-w-lg mx-auto leading-relaxed">
              {t("resourcesHub.cta.body", "Whether you're a startup looking to build your MVP or an enterprise modernizing your stack  -  we're here to help you build something great.")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/resources/free-consultation" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-bold shadow-lg transition-all duration-300">
                {t("resourcesHub.cta.bookConsultation", "Book Free Consultation")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/resources/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] text-sm font-bold hover:border-[#4EB3E8]/30 transition-all duration-300">
                {t("resourcesHub.cta.sendMessage", "Send a Message")}
              </Link>
            </div>
            <p className="mt-4 text-xs text-black/30 dark:text-white/25">{t("resourcesHub.cta.footer", "work@cloudnexus.in · +91 9201004208")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
