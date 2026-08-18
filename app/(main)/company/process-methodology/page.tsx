"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search, PenTool, Code2, TestTube, Rocket,
  ArrowRight, Shield, FileCheck, MessageSquare,
  CheckCircle2, Lock, Eye, Cctv, FileText, Layers,
  Clock, Target, BarChart3, GitBranch, RefreshCcw,
  DollarSign, CalendarCheck, Users, Mail,
} from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import { useTranslation } from "@/lib/i18n/context";

const executionPhases = [
  {
    phase: "01",
    title: "Discovery & Requirements",
    color: "#4EB3E8",
    icon: Search,
    steps: [
      "Business development engages business analysts for requirement analysis",
      "BA proposes clarifying questions & prepares feature specification document",
      "Client reviews, provides answers, and approves the features document",
      "Confirmation of project scope sent to all team leads",
    ],
  },
  {
    phase: "02",
    title: "Consolidation & Planning",
    color: "#10b981",
    icon: FileCheck,
    steps: [
      "Requirements consolidation by business analysts",
      "BA prepares user stories, user flows & information architecture",
      "Client approves all requirement consolidation documents",
      "UX designer prepares wireframes & BA gets client approval",
    ],
  },
  {
    phase: "03",
    title: "UI/UX Design",
    color: "#8b5cf6",
    icon: PenTool,
    steps: [
      "Designers create high-fidelity mockups from approved wireframes",
      "Interactive prototypes built for user testing and feedback",
      "QA assures that all design requirements are met",
      "Client approval on final designs, assets, and style guide",
    ],
  },
  {
    phase: "04",
    title: "Development Sprints",
    color: "#f59e0b",
    icon: Code2,
    steps: [
      "Developers prepare sprint plan with BA & set up backend infrastructure",
      "Short agile sprints  -  maximum 2 weeks each for rapid delivery",
      "Design, develop, deploy, and QA for each individual sprint",
      "UAT on individual sprints to assure delivery stays on schedule",
    ],
  },
  {
    phase: "05",
    title: "Testing & QA",
    color: "#ef4444",
    icon: TestTube,
    steps: [
      "Comprehensive testing  -  unit, integration, performance, and security",
      "Cross-browser and cross-device compatibility testing",
      "User acceptance testing (UAT) with client feedback loop",
      "Bug fixes, regression testing, and final quality sign-off",
    ],
  },
  {
    phase: "06",
    title: "Launch & Support",
    color: "#06b6d4",
    icon: Rocket,
    steps: [
      "BA prepares project summary, case study & handover documentation",
      "CI/CD pipelines ensure smooth, zero-downtime production deployment",
      "Post-launch monitoring, performance optimization & bug fixes",
      "Ongoing maintenance, feature updates, and 24/7 technical support",
    ],
  },
];

const deliverables = [
  { icon: FileText, title: "SRS Draft & Approval", desc: "A formal functional specification drafted based on your requirements. We proceed only after your approval on the documented scope." },
  { icon: FileCheck, title: "Final SRS Document", desc: "Complete functional specification incorporating your feedback  -  freezing requirements and drawing a clear project roadmap." },
  { icon: CheckCircle2, title: "Scope Confirmation", desc: "Formally approved specification confirming project scope including features, tech-stack, timeline, and development plan." },
  { icon: Layers, title: "Wireframing & Prototyping", desc: "Non-working prototypes giving you an accurate preview of user interface layout, navigation flow, and interaction patterns." },
  { icon: Code2, title: "Agile Development", desc: "Design-to-code execution with unit testing and peer reviews. We infuse innovative features to bring your vision to life." },
  { icon: TestTube, title: "Quality Assurance", desc: "Expert QA analysts test the software rigorously. We study your feedback on UAT results before proceeding to deployment." },
  { icon: RefreshCcw, title: "Final Version & Approval", desc: "Quick turnaround to fix any issues identified during UAT. We seek your formal approval before releasing the final version." },
  { icon: Rocket, title: "Launch & Deployment", desc: "Full assistance in deploying the product online. Post-launch, we optimize for performance, visibility, and user engagement." },
];

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techStack = [
  { category: "Design", color: "#8b5cf6", tools: [
    { name: "Figma", logo: `${DI}/figma/figma-original.svg` },
    { name: "Adobe XD", logo: `${DI}/xd/xd-original.svg` },
    { name: "Photoshop", logo: `${DI}/photoshop/photoshop-original.svg` },
    { name: "Illustrator", logo: `${DI}/illustrator/illustrator-plain.svg` },
    { name: "After Effects", logo: `${DI}/aftereffects/aftereffects-original.svg` },
    { name: "Sketch", logo: `${DI}/sketch/sketch-original.svg` },
  ] },
  { category: "Mobile", color: "#4EB3E8", tools: [
    { name: "React Native", logo: `${DI}/react/react-original.svg` },
    { name: "Flutter", logo: `${DI}/flutter/flutter-original.svg` },
    { name: "Swift", logo: `${DI}/swift/swift-original.svg` },
    { name: "Kotlin", logo: `${DI}/kotlin/kotlin-original.svg` },
    { name: "Java", logo: `${DI}/java/java-original.svg` },
    { name: "Dart", logo: `${DI}/dart/dart-original.svg` },
  ] },
  { category: "Frontend", color: "#10b981", tools: [
    { name: "React", logo: `${DI}/react/react-original.svg` },
    { name: "Next.js", logo: `${DI}/nextjs/nextjs-original.svg` },
    { name: "Angular", logo: `${DI}/angular/angular-original.svg` },
    { name: "Vue.js", logo: `${DI}/vuejs/vuejs-original.svg` },
    { name: "TypeScript", logo: `${DI}/typescript/typescript-original.svg` },
    { name: "Tailwind CSS", logo: `${DI}/tailwindcss/tailwindcss-original.svg` },
  ] },
  { category: "Backend", color: "#f59e0b", tools: [
    { name: "Node.js", logo: `${DI}/nodejs/nodejs-original.svg` },
    { name: "Python", logo: `${DI}/python/python-original.svg` },
    { name: "Go", logo: `${DI}/go/go-original.svg` },
    { name: "PHP", logo: `${DI}/php/php-original.svg` },
    { name: "Java Spring", logo: `${DI}/spring/spring-original.svg` },
    { name: "Django", logo: `${DI}/django/django-plain.svg` },
  ] },
  { category: "Cloud & DevOps", color: "#ef4444", tools: [
    { name: "AWS", logo: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Azure", logo: `${DI}/azure/azure-original.svg` },
    { name: "Google Cloud", logo: `${DI}/googlecloud/googlecloud-original.svg` },
    { name: "Docker", logo: `${DI}/docker/docker-original.svg` },
    { name: "Kubernetes", logo: `${DI}/kubernetes/kubernetes-original.svg` },
    { name: "Terraform", logo: `${DI}/terraform/terraform-original.svg` },
  ] },
  { category: "Database", color: "#06b6d4", tools: [
    { name: "PostgreSQL", logo: `${DI}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DI}/mongodb/mongodb-original.svg` },
    { name: "Redis", logo: `${DI}/redis/redis-original.svg` },
    { name: "MySQL", logo: `${DI}/mysql/mysql-original.svg` },
    { name: "Firebase", logo: `${DI}/firebase/firebase-original.svg` },
    { name: "Elasticsearch", logo: `${DI}/elasticsearch/elasticsearch-original.svg` },
  ] },
];

const workingModels = [
  { icon: DollarSign, title: "Fixed Price Model", desc: "Best for short-term projects with clear, well-documented requirements. You know the exact cost upfront  -  no surprises. Ideal for MVPs, landing pages, and well-scoped features.", features: ["Defined scope & budget", "Milestone-based payments", "Ideal for MVPs"] },
  { icon: Clock, title: "Time & Material Model", desc: "Cost-effective for long-term projects with evolving requirements. Enables flexible resource allocation, workload management, and adapting to market needs as the project grows.", features: ["Flexible scope", "Pay for actual hours", "Best for evolving projects"] },
  { icon: Users, title: "Dedicated Development Team", desc: "Preferred when projects require committed tech staff working exclusively on your product. Get a full team  -  developers, designers, QA  -  as an extension of your organization.", features: ["Full-time dedicated team", "Direct communication", "Monthly engagement"] },
];

const securityMeasures = [
  { icon: Lock, title: "Non-Disclosure Agreements", desc: "We sign mutual and confidential NDAs to legally protect your ideas. Our agreements are rigorously drafted to protect your projects, IP, and trade secrets." },
  { icon: Shield, title: "Stringent Security Procedures", desc: "Password-protected systems, encrypted repositories, and advanced security protocols safeguard your source code and project data at every stage." },
  { icon: Eye, title: "Employee Confidentiality", desc: "Every team member signs a confidentiality agreement ensuring no information about your business, processes, or plans is shared with unauthorized parties." },
  { icon: Cctv, title: "24/7 Monitored Infrastructure", desc: "Our delivery centers are secured with CCTV surveillance, biometric access, and round-the-clock monitoring for complete peace of mind." },
];

export default function ProcessMethodologyPage() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTech, setActiveTech] = useState(0);
  const translatedPhases = useTranslatedData(executionPhases);
  const translatedDeliverables = useTranslatedData(deliverables);
  const translatedTechStack = useTranslatedData(techStack);
  const translatedWorkingModels = useTranslatedData(workingModels);
  const translatedSecurityMeasures = useTranslatedData(securityMeasures);
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white">

      {/* ═══════ HERO ═══════ */}
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
                {t("processMethodology.hero.title", "Our Process &")}<br /><span className="text-[#4EB3E8]">{t("processMethodology.hero.titleHighlight", "Development Methodology")}</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-black/55 dark:text-white/50 leading-relaxed max-w-xl">
                {t("processMethodology.hero.description", "A walkthrough to our simple, smart, and agile approach to software development. From discovery to deployment  -  every step is transparent, collaborative, and results-driven.")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/resources/free-consultation" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-semibold transition-all shadow-lg">
                  {t("processMethodology.hero.startProject", "Start Your Project")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all">
                  {t("processMethodology.hero.contactUs", "Contact Us")}
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#4EB3E8]/10">
                <img src="/images/stock/stock-ac85f836ff.jpg" alt="Team collaboration" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-2 flex-wrap">
                    {translatedPhases.map((p, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.06 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/10">
                        <span className="text-xs font-black" style={{ color: p.color }}>{p.phase}</span>
                        <span className="text-[10px] font-semibold text-white/80">{p.title}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════ AGILE METHODOLOGY ═══════ */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("processMethodology.agile.title", "From Agility to")} <span className="text-[#4EB3E8]">{t("processMethodology.agile.titleHighlight", "Action")}</span></h2>
              <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
                {t("processMethodology.agile.description", "We embrace Agile Methodology to encourage transparent communication, foster collaboration, combat uncertainty, cope with change, and continuously deliver new value.")}
              </p>
              <p className="mt-3 text-sm text-black/45 dark:text-white/40 leading-relaxed">
                {t("processMethodology.agile.subDescription", "Everything  -  the development work, the information, and the investment  -  moves in an integrated fashion with measurable returns at every iteration.")}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/stock/stock-21347b443f.jpg" alt="Agile sprint planning" className="w-full h-[300px] object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: MessageSquare, title: t("processMethodology.agile.transparentComm.title", "Transparent Communication"), desc: t("processMethodology.agile.transparentComm.desc", "Daily standups, sprint reviews, and open Slack channels. You always know what's happening with your project."), color: "#4EB3E8" },
              { icon: GitBranch, title: t("processMethodology.agile.iterativeDev.title", "Iterative Development"), desc: t("processMethodology.agile.iterativeDev.desc", "2-week sprints with regular demos. You see progress, provide feedback, and steer the direction continuously."), color: "#10b981" },
              { icon: Target, title: t("processMethodology.agile.goalDriven.title", "Goal-Driven Execution"), desc: t("processMethodology.agile.goalDriven.desc", "Every sprint has clear objectives tied to business outcomes. We don't just build features  -  we deliver results."), color: "#8b5cf6" },
              { icon: BarChart3, title: t("processMethodology.agile.measurableProgress.title", "Measurable Progress"), desc: t("processMethodology.agile.measurableProgress.desc", "Velocity tracking, burndown charts, and regular reports. Data-driven insights into project health and timeline."), color: "#f59e0b" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 dark:hover:border-[#4EB3E8]/25 hover:shadow-xl hover:shadow-[#4EB3E8]/[0.04] transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center border-2 transition-all duration-300"
                    style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}20` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold mb-1.5 group-hover:text-[#4EB3E8] transition-colors">{item.title}</h3>
                  <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ PROJECT EXECUTION - INTERACTIVE ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("processMethodology.execution.title", "Project")} <span className="text-[#4EB3E8]">{t("processMethodology.execution.titleHighlight", "Execution")}</span> {t("processMethodology.execution.titleSuffix", "Structure")}</h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
              {t("processMethodology.execution.description", "Our high-performance cross-functional team takes care of you at every step. We adjust as per your requirements and deliver incremented value that embraces your vision.")}
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/stock/stock-88b3ac0e43.jpg" alt="Team discussing project execution" className="w-full h-[260px] object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-2">
            {translatedPhases.map((p, i) => {
              const Icon = p.icon;
              const isActive = activePhase === i;
              return (
                <motion.button key={p.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 * i }}
                  onClick={() => setActivePhase(i)}
                  className={`w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    isActive ? "bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] shadow-lg shadow-black/[0.03] dark:shadow-black/30"
                      : "bg-transparent hover:bg-white/60 dark:hover:bg-white/[0.02] border border-transparent"
                  }`}>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 flex-shrink-0 ${isActive ? "border-2" : "bg-black/[0.04] dark:bg-white/[0.04]"}`}
                    style={isActive ? { backgroundColor: `${p.color}12`, borderColor: `${p.color}35` } : {}}>
                    <Icon className="w-5 h-5 transition-colors duration-300" style={{ color: isActive ? p.color : undefined }} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black" style={{ color: isActive ? p.color : undefined }}>{p.phase}</span>
                      <h3 className={`text-sm font-bold truncate transition-colors duration-300 ${isActive ? "" : "text-black/50 dark:text-white/45"}`}
                        style={isActive ? { color: p.color } : {}}>{p.title}</h3>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div key={activePhase} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
                className="rounded-2xl p-8 md:p-10 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden shadow-sm dark:shadow-none">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ backgroundColor: translatedPhases[activePhase].color }} />

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2"
                    style={{ backgroundColor: `${translatedPhases[activePhase].color}10`, borderColor: `${translatedPhases[activePhase].color}20` }}>
                    {(() => { const Icon = translatedPhases[activePhase].icon; return <Icon className="w-7 h-7" style={{ color: translatedPhases[activePhase].color }} strokeWidth={1.5} />; })()}
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest" style={{ color: translatedPhases[activePhase].color }}>{t("processMethodology.execution.phase", "Phase")} {translatedPhases[activePhase].phase}</span>
                    <h3 className="text-xl font-bold tracking-tight">{translatedPhases[activePhase].title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {translatedPhases[activePhase].steps.map((step, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.08 }}
                      className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${translatedPhases[activePhase].color}15` }}>
                        <CheckCircle2 className="w-3.5 h-3.5" style={{ color: translatedPhases[activePhase].color }} />
                      </div>
                      <p className="text-sm text-black/60 dark:text-white/55 leading-relaxed">{step}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-8">
                  {translatedPhases.map((_, idx) => (
                    <button key={idx} onClick={() => setActivePhase(idx)} className="h-1.5 rounded-full transition-all duration-300"
                      style={{ width: idx === activePhase ? 32 : 6, backgroundColor: idx === activePhase ? translatedPhases[activePhase].color : "rgba(128,128,128,0.2)" }} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ═══════ DELIVERABLES ═══════ */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-5 gap-10 items-center mb-14">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("processMethodology.deliverables.title", "Our")} <span className="text-[#4EB3E8]">{t("processMethodology.deliverables.titleHighlight", "Deliverables")}</span></h2>
              <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
                {t("processMethodology.deliverables.description", "From the moment we take up your project, our duty begins. We keep you informed about every aspect of the development stage  -  transparent, systemized, and standardized.")}
              </p>
            </motion.div>
            <motion.div className="lg:col-span-2 hidden lg:block" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/stock/stock-d892facb6a.jpg" alt="Project deliverables and documentation" className="w-full h-[250px] object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {translatedDeliverables.map((d, i) => {
              const Icon = d.icon;
          return (
                <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 dark:hover:border-[#4EB3E8]/25 hover:shadow-lg hover:shadow-[#4EB3E8]/[0.04] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#4EB3E8] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#4EB3E8]/8 dark:bg-[#4EB3E8]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#4EB3E8]" strokeWidth={1.5} />
                    </div>
                    <span className="text-2xl font-black text-[#4EB3E8]/15">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="text-sm font-bold mb-1.5 group-hover:text-[#4EB3E8] transition-colors">{d.title}</h4>
                  <p className="text-[11px] text-black/50 dark:text-white/45 leading-relaxed">{d.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ TOOLS & TECHNOLOGIES ═══════ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.03] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.02] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#4EB3E8]/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-[#4EB3E8]">{t("processMethodology.tech.titleHighlight", "Tools & Technologies")}</span>{" "}
              <span className="text-black dark:text-white">{t("processMethodology.tech.title", "We Use")}</span>
            </h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
              {t("processMethodology.tech.description", "We use trending technologies backed by a robust suite of tools, frameworks, and platforms to deliver highly scalable, interactive, and innovative solutions.")}
            </p>
          </motion.div>

          <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
              {translatedTechStack.map((stack, i) => (
                <button key={stack.category} type="button" onClick={() => setActiveTech(i)}
                  className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                    activeTech === i
                      ? "bg-[#4EB3E8] text-white shadow-lg shadow-[#4EB3E8]/20"
                      : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                  }`}>
                  {stack.category}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTech} initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-wrap justify-center gap-4 md:gap-5">
              {translatedTechStack[activeTech].tools.map((tool, i) => (
                <motion.div key={tool.name} initial={{ opacity: 0, y: 16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  className="group relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.03] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-[#4EB3E8]/[0.05] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-300 cursor-default w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.9375rem)] lg:w-[calc(16.666%-1rem)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <img src={tool.logo} alt={tool.name} width={48} height={48}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = "none"; (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex"; }} />
                    <span style={{ display: "none" }}
                      className="w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-xl text-lg md:text-xl font-bold group-hover:scale-110 transition-transform duration-300"
                      role="img" aria-label={tool.name}
                      >{tool.name.charAt(0)}</span>
                  </div>
                  <span className="relative text-sm md:text-base font-semibold text-black/70 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-300 text-center">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Marquee strip */}
          <div className="mt-16 pt-12 border-t border-black/[0.06] dark:border-white/[0.06]">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
              <div className="group flex overflow-hidden w-full [--gap:3.5rem] md:[--gap:4.5rem] [--duration:40s] gap-[var(--gap)]">
                {Array(3).fill(0).map((_, ri) => (
                  <div key={ri} className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
                    {translatedTechStack.flatMap(s => s.tools).map((tool, j) => (
                      <div key={`${ri}-${j}-${tool.name}`} className="flex items-center gap-3.5 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default whitespace-nowrap" title={tool.name}>
                        <img src={tool.logo} alt={tool.name} width={32} height={32} className="w-8 h-8 md:w-9 md:h-9 object-contain flex-shrink-0"
                          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = "none"; (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex"; }} />
                        <span style={{ display: "none" }} className="w-8 h-8 md:w-9 md:h-9 items-center justify-center rounded-lg bg-[#4EB3E8]/10 text-[#4EB3E8] text-sm font-bold flex-shrink-0">{tool.name.charAt(0)}</span>
                        <span className="text-sm md:text-base font-medium text-black/50 dark:text-white/40">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ WORKING MODELS ═══════ */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("processMethodology.models.title", "Flexible")} <span className="text-[#4EB3E8]">{t("processMethodology.models.titleHighlight", "Working Models")}</span></h2>
              <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
                {t("processMethodology.models.description", "Our engineering team delivers services in different engagement models that best fit your needs to launch the desired product in the most efficient way.")}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/stock/stock-9fe5cd9db7.jpg" alt="Flexible team working together" className="w-full h-[300px] object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {translatedWorkingModels.map((model, i) => {
              const Icon = model.icon;
              return (
                <motion.div key={model.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 dark:hover:border-[#4EB3E8]/25 hover:shadow-xl hover:shadow-[#4EB3E8]/[0.04] transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="h-1 bg-gradient-to-r from-[#4EB3E8] to-[#4EB3E8]/50" />
                  <div className="p-7">
                    <div className="w-12 h-12 rounded-xl bg-[#4EB3E8]/8 dark:bg-[#4EB3E8]/10 flex items-center justify-center mb-4 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8] group-hover:border-[#4EB3E8] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#4EB3E8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#4EB3E8] transition-colors">{model.title}</h3>
                    <p className="text-xs text-black/55 dark:text-white/50 leading-relaxed mb-5">{model.desc}</p>
                    <div className="space-y-2">
                      {model.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4EB3E8] flex-shrink-0" />
                          <span className="text-xs font-medium text-black/50 dark:text-white/45">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ SECURITY ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-10 items-center mb-14">
          <motion.div className="lg:col-span-2 hidden lg:block" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/stock/stock-1bd4a15ed8.jpg" alt="Data security and protection" className="w-full h-[300px] object-cover" />
            </div>
          </motion.div>
          <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("processMethodology.security.title", "Your Ideas Are")} <span className="text-[#4EB3E8]">{t("processMethodology.security.titleHighlight", "Always Safe")}</span> {t("processMethodology.security.titleSuffix", "With Us")}</h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
              {t("processMethodology.security.description", "Protecting your ideas, intellectual property, and trade secrets is our top priority. We ensure that your information never reaches unauthorized parties.")}
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {translatedSecurityMeasures.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-emerald-500/20 dark:hover:border-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/[0.04] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/8 dark:bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/12">
                  <Icon className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold mb-1.5 group-hover:text-emerald-500 transition-colors">{item.title}</h4>
                <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
        </div>
      </div>

      {/* ═══════ CTA ═══════ */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#4EB3E8]/[0.03] to-purple-500/[0.03] dark:from-[#4EB3E8]/[0.05] dark:to-purple-500/[0.05] p-10 sm:p-14 text-center">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(78,179,232,0.04) 0%, transparent 70%)" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("processMethodology.cta.title", "Have a Project in Mind?")}<br />
                <span className="text-[#4EB3E8]">{t("processMethodology.cta.titleHighlight", "Let's Build It Together")}</span>
              </h2>
              <p className="text-base text-black/55 dark:text-white/50 max-w-lg mx-auto leading-relaxed mb-8">
                {t("processMethodology.cta.description", "Tell us about your idea and we'll provide a detailed proposal with architecture recommendations, timeline, and cost estimate  -  completely free.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 font-semibold text-sm transition-all shadow-lg">
                  <CalendarCheck className="w-4 h-4" /> {t("processMethodology.cta.bookConsultation", "Book Free Consultation")}
                </Link>
                <Link href="/resources/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors">
                  <Mail className="w-4 h-4" /> {t("processMethodology.cta.contactUs", "Contact Us")}
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
