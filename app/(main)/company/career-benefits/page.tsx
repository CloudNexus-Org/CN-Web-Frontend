"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Banknote, HeartPulse, GraduationCap, Home, Trophy, Plane,
  CreditCard, Landmark, Bell, Lock, Wallet, Building2,
  ShieldCheck, BadgeDollarSign, UtensilsCrossed, PartyPopper,
  Gamepad2, Users, ArrowRight, CalendarCheck, Mail,
  CheckCircle2, ChevronDown, Briefcase, Heart,
  CalendarDays, Smile, Award, Globe2, Stethoscope,
  BookOpen, Sparkles as SparklesIcon, Theater,
} from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import { useTranslation } from "@/lib/i18n/context";

const heroStats = [
  { value: "12+", label: "Unique Perks" },
  { value: "100%", label: "Meal Coverage" },
  { value: "₹2Cr", label: "Insurance Cover" },
  { value: "2x/mo", label: "Team Outings" },
];

const overviewCards = [
  { icon: Banknote, title: "Competitive Salary", desc: "Industry-standard compensation with regular appraisals and performance bonuses.", color: "#4EB3E8" },
  { icon: HeartPulse, title: "Health & Wellness", desc: "Comprehensive health insurance, mental health support, and wellness programs.", color: "#ef4444" },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual budget for courses, certifications, books, and conference tickets.", color: "#8b5cf6" },
  { icon: Home, title: "Remote Flexibility", desc: "Work from anywhere  -  office, home, or a beach. We trust our team.", color: "#10b981" },
  { icon: Plane, title: "Paid Time Off", desc: "Generous leave policy including vacation, sick days, and personal time.", color: "#f59e0b" },
  { icon: Trophy, title: "Recognition & Rewards", desc: "Spot bonuses, shoutouts, and awards for outstanding contributions.", color: "#06b6d4" },
];

const bankingBenefits = [
  {
    icon: Landmark, title: "Zero Minimum Balance", color: "#4EB3E8",
    points: ["No minimum balance requirement for hassle-free account maintenance"],
  },
  {
    icon: CreditCard, title: "Free Passbook & Cheque Book", color: "#8b5cf6",
    points: ["First passbook issued free", "Up to 25 cheque leaves per quarter (basic)", "Unlimited cheque leaves for premium accounts"],
  },
  {
    icon: Bell, title: "Free Alerts & Notifications", color: "#10b981",
    points: ["SMS and WhatsApp alerts", "Free for higher account categories"],
  },
  {
    icon: Lock, title: "Locker Rent Concession", color: "#f59e0b",
    points: ["50% concession for mid-tier accounts", "Up to 100% concession for premium account holders"],
  },
  {
    icon: Wallet, title: "Free Debit Card Benefits", color: "#ef4444",
    points: ["100% waiver on first issuance", "Access to premium debit cards (Visa / RuPay variants)"],
  },
  {
    icon: Building2, title: "ATM Transaction Benefits", color: "#06b6d4",
    points: ["10 free transactions/month at bank ATMs", "5 free transactions/month at other bank ATMs"],
  },
  {
    icon: ShieldCheck, title: "Insurance Coverage", color: "#4EB3E8",
    points: [
      "Accidental Death Cover: Up to ₹50 Lakhs",
      "Permanent Disability: Up to ₹50 Lakhs",
      "Partial Disability: Up to ₹25 Lakhs",
      "Air Accident Cover: Up to ₹2 Crores",
      "Child Education Cover: Up to ₹10 Lakhs",
    ],
  },
  {
    icon: BadgeDollarSign, title: "Loan & Advance Facilities", color: "#8b5cf6",
    points: ["Salary Advance: Up to 1 month salary or ₹1 Lakh", "Instant Personal Loan: Up to ₹5 Lakhs (based on eligibility)"],
  },
];

const welfareBenefits = [
  {
    icon: UtensilsCrossed, title: "Complimentary Meals", color: "#10b981",
    desc: "To support employee well-being and convenience, the organization provides:",
    points: ["Breakfast", "Lunch", "Dinner", "Tea/Chai at regular intervals"],
  },
  {
    icon: PartyPopper, title: "Team Outings & Engagement", color: "#f59e0b",
    desc: "Building strong bonds through shared experiences:",
    points: ["Monthly team outings (up to 2 times a month)", "Fun activities to promote team bonding and a positive work environment"],
  },
  {
    icon: Gamepad2, title: "Chill Room", color: "#8b5cf6",
    desc: "A dedicated relaxation area available for booking based on slot availability:",
    points: ["PS5 gaming console", "Indoor games  -  Chess, UNO, and more", "Bunk beds for rest and relaxation"],
  },
  {
    icon: Users, title: "Supportive Work Culture", color: "#4EB3E8",
    desc: "We believe great work happens when people feel valued:",
    points: ["Collaborative and friendly environment", "Encourages teamwork, growth, and employee satisfaction", "Open-door policy with leadership"],
  },
];

function AccordionItem({ item, index }: { item: typeof bankingBenefits[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const Icon = item.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}
      className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] overflow-hidden transition-all duration-300 hover:shadow-md">
      <button type="button" onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left transition-colors">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors"
          style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}18` }}>
          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold">{item.title}</h4>
          <p className="text-[11px] text-black/40 dark:text-white/35 mt-0.5">{item.points.length} {item.points.length > 1 ? t("careerBenefits.banking.benefits", "benefits") : t("careerBenefits.banking.benefit", "benefit")}</p>
        </div>
        <ChevronDown className={`w-4 h-4 text-black/30 dark:text-white/25 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }} className="overflow-hidden">
            <div className="px-5 pb-5 pt-0">
              <div className="pl-[3.75rem] space-y-2">
                {item.points.map((p) => (
                  <div key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: item.color }} strokeWidth={2} />
                    <span className="text-xs text-black/55 dark:text-white/45 leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CareerBenefitsPage() {
  const translatedHeroStats = useTranslatedData(heroStats);
  const translatedOverviewCards = useTranslatedData(overviewCards);
  const translatedBankingBenefits = useTranslatedData(bankingBenefits);
  const translatedWelfareBenefits = useTranslatedData(welfareBenefits);
  const { t } = useTranslation();

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
                {t("careerBenefits.hero.title", "Perks & ")}<span className="text-[#4EB3E8]">{t("careerBenefits.hero.titleHighlight", "Benefits")}</span><br />{t("careerBenefits.hero.titleEnd", "That Matter")}
              </h1>
              <p className="mt-6 text-base md:text-lg text-black/55 dark:text-white/50 leading-relaxed max-w-xl">
                {t("careerBenefits.hero.description", "We ensure a well-rounded employee experience  -  offering financial security, workplace convenience, and employee-friendly perks that support both professional and personal well-being.")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/resources/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-semibold transition-all shadow-lg">
                  {t("careerBenefits.hero.joinTeam", "Join Our Team")} <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#benefits" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all">
                  {t("careerBenefits.hero.exploreBenefits", "Explore Benefits")}
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#4EB3E8]/10">
                <img src="/images/stock/stock-0e99081fe7.jpg" alt="Happy team collaborating" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-4 gap-2">
                    {translatedHeroStats.map((s, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                        className="text-center px-2 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                        <span className="block text-sm font-black text-white">{s.value}</span>
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

      {/* ═══ QUICK OVERVIEW ═══ */}
      <div id="benefits" className="border-y border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("careerBenefits.overview.title", "What We ")}<span className="text-[#4EB3E8]">{t("careerBenefits.overview.titleHighlight", "Offer")}</span></h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
              {t("careerBenefits.overview.description", "A snapshot of the key benefits that make Cloud Nexus a great place to work.")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {translatedOverviewCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: c.color }} />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border" style={{ backgroundColor: `${c.color}10`, borderColor: `${c.color}18` }}>
                    <Icon className="w-5 h-5" style={{ color: c.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold mb-2">{c.title}</h3>
                  <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ BANKING & FINANCIAL BENEFITS ═══ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-28">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("careerBenefits.banking.title", "Banking & ")}<span className="text-[#4EB3E8]">{t("careerBenefits.banking.titleHighlight", "Financial")}</span>{t("careerBenefits.banking.titleEnd", " Benefits")}</h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
              {t("careerBenefits.banking.description", "Salary account benefits designed for financial security and convenience  -  from zero-balance accounts to comprehensive insurance coverage.")}
            </p>
            <div className="mt-8 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/stock/stock-98f9dc4751.jpg" alt="Financial benefits" className="w-full h-[300px] object-cover" />
              </div>
            </div>
          </motion.div>

          <div className="space-y-3">
            {translatedBankingBenefits.map((item, i) => (
              <AccordionItem key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ═══ EMPLOYEE WELFARE & LIFESTYLE ═══ */}
      <div className="bg-[#fafafa] dark:bg-white/[0.015] border-y border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("careerBenefits.welfare.title", "Employee Welfare & ")}<span className="text-[#4EB3E8]">{t("careerBenefits.welfare.titleHighlight", "Lifestyle")}</span></h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
              {t("careerBenefits.welfare.description", "Beyond compensation  -  we invest in creating a workplace where people genuinely enjoy coming to work.")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {translatedWelfareBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl p-7 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: item.color }} />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}18` }}>
                      <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>

                  <p className="text-xs text-black/50 dark:text-white/40 leading-relaxed mb-4">{item.desc}</p>

                  <div className="space-y-2.5">
                    {item.points.map((p) => (
                      <div key={p} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: item.color }} strokeWidth={2} />
                        <span className="text-sm text-black/60 dark:text-white/50 leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ WHY JOIN CLOUD NEXUS ═══ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("careerBenefits.whyJoin.title", "Why Should You Join ")}<span className="text-[#4EB3E8]">{t("careerBenefits.whyJoin.titleHighlight", "Cloud Nexus")}</span>{t("careerBenefits.whyJoin.titleEnd", "?")}</h2>
          <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t("careerBenefits.whyJoin.description", "Cloud Nexus is the place where you can learn, explore, and boost your overall demeanour. We weave a work culture with knots of empathy, warmth, and care.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: CalendarDays, title: t("careerBenefits.joinCards.fiveDays.title", "5 Days a Week"), desc: t("careerBenefits.joinCards.fiveDays.desc", "Healthy work-life balance with a 5-day work week policy."), color: "#4EB3E8" },
            { icon: Smile, title: t("careerBenefits.joinCards.birthday.title", "Birthday Celebration"), desc: t("careerBenefits.joinCards.birthday.desc", "Celebrate your special day with the team  -  cake, gifts, and good vibes."), color: "#ef4444" },
            { icon: PartyPopper, title: t("careerBenefits.joinCards.funConnect.title", "Fun Connect"), desc: t("careerBenefits.joinCards.funConnect.desc", "Regular fun activities, games, and team bonding events to recharge."), color: "#8b5cf6" },
            { icon: Award, title: t("careerBenefits.joinCards.rewards.title", "Rewards & Benefits"), desc: t("careerBenefits.joinCards.rewards.desc", "Performance bonuses, spot awards, and recognition for exceptional work."), color: "#f59e0b" },
            { icon: Globe2, title: t("careerBenefits.joinCards.businessTrips.title", "Business Trips"), desc: t("careerBenefits.joinCards.businessTrips.desc", "Opportunities to travel for client meetings, conferences, and summits."), color: "#10b981" },
            { icon: Stethoscope, title: t("careerBenefits.joinCards.medical.title", "Medical Insurance"), desc: t("careerBenefits.joinCards.medical.desc", "Comprehensive health coverage for you and your family."), color: "#06b6d4" },
            { icon: BookOpen, title: t("careerBenefits.joinCards.certifications.title", "Certifications"), desc: t("careerBenefits.joinCards.certifications.desc", "Sponsored certifications and courses to boost your skills and career."), color: "#8b5cf6" },
            { icon: SparklesIcon, title: t("careerBenefits.joinCards.positiveEnv.title", "Positive Environment"), desc: t("careerBenefits.joinCards.positiveEnv.desc", "A collaborative, inclusive, and empowering workplace culture."), color: "#4EB3E8" },
            { icon: Theater, title: t("careerBenefits.joinCards.cultural.title", "Cultural Programs"), desc: t("careerBenefits.joinCards.cultural.desc", "Festivals, cultural days, and celebrations that bring everyone together."), color: "#f59e0b" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group relative rounded-2xl p-6 bg-white dark:bg-white/[0.03] border-2 border-black/[0.05] dark:border-white/[0.05] hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-default"
                style={{ ["--card-color" as string]: item.color }}>
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ backgroundColor: item.color }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at 30% 30%, ${item.color}08 0%, transparent 70%)` }} />

                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}20`, boxShadow: `0 0 0 0 ${item.color}00` }}>
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-base font-bold mb-1.5 transition-colors duration-300 group-hover:text-[#4EB3E8]">{item.title}</h4>
                    <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══ WHY PEOPLE LOVE WORKING HERE ═══ */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("careerBenefits.whyLove.title", "Why People ")}<span className="text-[#4EB3E8]">{t("careerBenefits.whyLove.titleHighlight", "Love")}</span>{t("careerBenefits.whyLove.titleEnd", " Working Here")}</h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
              {t("careerBenefits.whyLove.description", "At Cloud Nexus, benefits aren\u2019t just policies  -  they\u2019re a reflection of how we value our people. We believe when you take care of your team, they build extraordinary things.")}
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Heart, title: t("careerBenefits.loveCards.peopleCulture.title", "People-First Culture"), desc: t("careerBenefits.loveCards.peopleCulture.desc", "Every policy is designed with employee well-being at the core."), color: "#ef4444" },
                { icon: Briefcase, title: t("careerBenefits.loveCards.growth.title", "Growth Opportunities"), desc: t("careerBenefits.loveCards.growth.desc", "Clear career paths, mentorship programs, and leadership development."), color: "#4EB3E8" },
                { icon: Trophy, title: t("careerBenefits.loveCards.merit.title", "Merit-Based Recognition"), desc: t("careerBenefits.loveCards.merit.desc", "Your hard work is seen, appreciated, and rewarded  -  always."), color: "#f59e0b" },
                { icon: Users, title: t("careerBenefits.loveCards.inclusive.title", "Inclusive Environment"), desc: t("careerBenefits.loveCards.inclusive.desc", "Diverse teams, equal opportunities, and a culture of belonging."), color: "#10b981" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-white dark:bg-white/[0.02]">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border" style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}18` }}>
                      <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-0.5">{item.title}</h4>
                      <p className="text-xs text-black/50 dark:text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#4EB3E8]/10">
              <img src="/images/stock/stock-4167ec0bd7.jpg" alt="Team collaboration" className="w-full h-[480px] object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
      </div>

      {/* ═══ CTA ═══ */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#4EB3E8]/[0.03] to-purple-500/[0.03] dark:from-[#4EB3E8]/[0.05] dark:to-purple-500/[0.05] p-10 sm:p-14 text-center">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(78,179,232,0.04) 0%, transparent 70%)" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("careerBenefits.cta.title", "Ready to Build Your ")}<span className="text-[#4EB3E8]">{t("careerBenefits.cta.titleHighlight", "Career")}</span>{t("careerBenefits.cta.titleEnd", " With Us?")}
              </h2>
              <p className="text-base text-black/55 dark:text-white/50 max-w-lg mx-auto leading-relaxed mb-8">
                {t("careerBenefits.cta.description", "Join a team that values your growth, supports your well-being, and rewards your contribution. Explore open positions today.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/company/careers"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 font-semibold text-sm transition-all shadow-lg">
                  <CalendarCheck className="w-4 h-4" /> {t("careerBenefits.cta.viewPositions", "View Open Positions")}
                </Link>
                <Link href="/resources/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors">
                  <Mail className="w-4 h-4" /> {t("careerBenefits.cta.contactHR", "Contact HR Team")}
                </Link>
              </div>
              <p className="mt-5 text-xs text-black/30 dark:text-white/25">hr@cloudnexus.in &middot; +91 9201004208</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
