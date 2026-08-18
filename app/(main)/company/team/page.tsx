"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import {
  Crown, Code2, Server, Brain, BarChart3,
  Users, Shield, Rocket, ChevronRight, Sparkles, ChevronLeft,
  Cpu, Database, MonitorSmartphone, Target, Quote, Layers,
} from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import { useTranslation } from "@/lib/i18n/context";

/* ═══════ DATA ═══════ */

const leadership = [
  {
    name: "Kaustubh Singh",
    role: "Founder & CEO",
    photo: "/assets/teams/kaustubh-singh.jpeg",
    photoPos: "center 15%",
    thought: "Building CloudNexus isn't just about technology  -  it's about empowering businesses to unlock their full potential through innovation and trust.",
    highlights: ["Strategic Vision", "Business Growth", "Innovation"],
  },
  {
    name: "Yash Singh",
    role: "Chief Technology Officer",
    photo: "/assets/teams/yash.png",
    photoPos: "center 40%",
    thought: "Great technology is invisible  -  it just works. Our job is to architect systems that scale effortlessly and adapt to tomorrow's challenges.",
    highlights: ["Tech Strategy", "Architecture", "R&D"],
  },
  // {
  //   name: "",
  //   role: "Technical Head",
  //   // photo: "/assets/teams/shoaib-akhtar.jpeg",
  //   photoPos: "center 35%",
  //   thought: "Code quality isn't a luxury  -  it's the foundation. Every line we write should be something the next developer can understand and trust.",
  //   highlights: ["Code Quality", "Tech Standards", "Mentorship"],
  // },
  {
    name: "Aryan Patel",
    role: "Chief Marketing Officer",
    photo: "/assets/teams/ariyan-patel.jpeg",
    photoPos: "center 35%",
    thought: "A great product deserves a great story. We make sure CloudNexus reaches the right people with the right message at the right time.",
    highlights: ["Brand Strategy", "Growth Marketing", "Client Acquisition"],
  },
];

const teams = [
  {
    name: "Beyonders",
    department: "Development",
    icon: MonitorSmartphone,
    accentColor: "#8b5cf6",
    leader: "Saurabh Patle",
    leaderRole: "Team Leader",
    photo: "/assets/teams/saurabh-patle.jpeg",
    photoPos: "center 70%",
    desc: "Building end-to-end web and mobile applications with modern tech stacks, delivering pixel-perfect frontends and robust backends.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Java", "Spring Boot", "Selenium", "Cucumber", "Azure", "PostgreSQL"],
  },
  {
    name: "Eternals",
    department: "Data",
    icon: Database,
    accentColor: "#f59e0b",
    leader: "Arhan Mansoori",
    leaderRole: "Team Leader",
    photo: "/assets/teams/arhan-mansoori.png",
    photoPos: "center 40%",
    desc: "Transforming raw data into actionable insights through analytics, machine learning models, and intelligent data pipelines.",
    skills: ["Python", "TensorFlow", "SQL", "Power BI", "Apache Spark", "ETL"],
  },
  // {
  //   name: "Sentinels",
  //   department: "Data",
  //   icon: Brain,
  //   accentColor: "#ef4444",
  //   leader: "Harshit Vanya",
  //   leaderRole: "Team Leader",
  //   photo: "/assets/teams/harshit-vanya.png",
  //   photoPos: "center 40%",
  //   desc: "Specializing in AI/ML model development, NLP solutions, and advanced data engineering for enterprise-grade intelligence.",
  //   skills: ["PyTorch", "NLP", "Computer Vision", "MLOps", "Data Engineering", "AWS SageMaker"],
  // },
  {
    name: "Ariba",
    department: "DevOps",
    icon: Server,
    accentColor: "#22c55e",
    leader: "Tabasum Khan",
    leaderRole: "Team Leader",
    photo: "/assets/teams/tabasum-khan.jpeg",
    photoPos: "center 6%",
    desc: "Managing cloud infrastructure, CI/CD pipelines, and deployment automation to ensure maximum uptime and scalable delivery.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"],
  },
];

const cultureValues = [
  { icon: Rocket, title: "Innovation First", desc: "We push boundaries and embrace new technologies to solve complex problems.", num: "50+", numLabel: "Tech Stacks" },
  { icon: Users, title: "Team Collaboration", desc: "Cross-functional teams working together to deliver exceptional results.", num: "4", numLabel: "Squads" },
  { icon: Target, title: "Growth Mindset", desc: "Continuous learning, mentorship, and career development for every team member.", num: "100+", numLabel: "Certifications" },
  { icon: Shield, title: "Quality Driven", desc: "Code reviews, testing, and best practices are non-negotiable standards.", num: "99%", numLabel: "Uptime" },
];

/* ═══════ PAGE ═══════ */
export default function TeamPage() {
  const [activeTeam, setActiveTeam] = useState(0);
  const translatedLeadership = useTranslatedData(leadership);
  const translatedTeams = useTranslatedData(teams);
  const translatedCultureValues = useTranslatedData(cultureValues);
  const { t } = useTranslation();
  const current = translatedTeams[activeTeam];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 420;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* ═══════ HERO ═══════ */}
      <div className="relative overflow-hidden border-b border-black/[0.05] dark:border-white/[0.05]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#4EB3E8]/[0.04] blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#4EB3E8]/[0.03] blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t("team.hero.title", "The People Behind")}{" "}
              <span className="text-[#4EB3E8]">{t("team.hero.titleHighlight", "CloudNexus")}</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-black/50 dark:text-white/45 leading-relaxed max-w-2xl mx-auto">
              {t("team.hero.description", "A talented crew of engineers, designers, and strategists building the future of technology  -  one project at a time.")}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-10 mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { num: t("team.hero.stat1Num", "200+"), label: t("team.hero.stat1Label", "Team Members") },
              { num: t("team.hero.stat2Num", "4"), label: t("team.hero.stat2Label", "Specialized Squads") },
              { num: t("team.hero.stat3Num", "3"), label: t("team.hero.stat3Label", "Office Locations") },
              { num: t("team.hero.stat4Num", "10+"), label: t("team.hero.stat4Label", "Years of Delivery") },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#4EB3E8]">{s.num}</div>
                <div className="text-xs text-black/40 dark:text-white/35 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ═══════ LEADERSHIP ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">{t("team.leadership.titleHighlight", "Leadership")}</span>{" "}
            <span>{t("team.leadership.title", "Team")}</span>
          </h2>
          <p className="mt-4 text-sm text-black/45 dark:text-white/40 max-w-lg mx-auto">
            {t("team.leadership.description", "The driving force behind CloudNexus\u2019s vision, strategy, and execution.")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {translatedLeadership.map((person, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-400`}
              >
                {/* Photo - alternating sides */}
                <div className={`relative h-[300px] md:h-[360px] overflow-hidden ${!isEven ? "md:order-2" : ""}`}>
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: person.photoPos }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className={`p-8 md:p-10 flex flex-col justify-center ${!isEven ? "md:order-1" : ""}`}>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {person.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-[#4EB3E8]/6 text-[#4EB3E8] border border-[#4EB3E8]/10"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight mb-1">{person.name}</h3>
                  <p className="text-sm font-medium text-[#4EB3E8] mb-5">{person.role}</p>

                  <div className="flex gap-3 p-4 rounded-xl bg-white/60 dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04]">
                    <Quote className="w-5 h-5 text-[#4EB3E8]/40 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-sm text-black/55 dark:text-white/45 leading-relaxed italic">
                      {person.thought}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════ ENGINEERING TEAMS ═══════ */}
      <div className="border-y border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-[#4EB3E8]">{t("team.squads.titleHighlight", "Engineering")}</span>{" "}
              <span>{t("team.squads.title", "Squads")}</span>
            </h2>
            <p className="mt-4 text-sm text-black/45 dark:text-white/40 max-w-lg mx-auto">
              {t("team.squads.description", "Specialized teams delivering excellence across DevOps, Development, and Data.")}
            </p>
          </motion.div>

          <div className="space-y-8">
            {translatedTeams.map((team, i) => {
              const Icon = team.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
                  className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 hover:shadow-xl transition-all duration-400"
                >
                  {/* Photo side */}
                  {/* Photo side */}
                  <div className={`relative h-[350px] md:h-[420px] overflow-hidden ${!isEven ? "md:order-2" : ""}`}>
                    <img
                      src={team.photo}
                      alt={team.leader}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: team.photoPos }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span
                        className="inline-block px-3 py-1 rounded-lg text-[11px] font-bold text-white mb-3"
                        style={{ backgroundColor: team.accentColor }}
                      >
                        {team.department}
                      </span>
                      <h3 className="text-xl font-bold text-white">{team.leader}</h3>
                      <p className="text-sm text-white/60">{team.leaderRole}  -  {t("team.squads.teamLabel", "Team")} {team.name}</p>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`p-8 md:p-10 flex flex-col justify-center ${!isEven ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border"
                        style={{ backgroundColor: `${team.accentColor}12`, borderColor: `${team.accentColor}25` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: team.accentColor }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight">{t("team.squads.teamLabel", "Team")} {team.name}</h3>
                        <p className="text-xs text-black/40 dark:text-white/35">{team.department} {t("team.squads.division", "Division")}</p>
                      </div>
                    </div>

                    <p className="text-sm text-black/50 dark:text-white/45 leading-relaxed mb-6">{team.desc}</p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-[10px] font-semibold text-black/40 dark:text-white/30 uppercase tracking-wider mb-2.5">{t("team.squads.techStack", "Tech Stack")}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {team.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/60 dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.06]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6">
                      <div>
                        <div className="text-2xl font-bold" style={{ color: team.accentColor }}>
                          {i === 0 ? t("team.squads.stat1Num", "25+") : i === 1 ? t("team.squads.stat1Num", "25+") : i === 2 ? t("team.squads.stat1Num", "25+") : t("team.squads.stat1Num", "25+")}
                        </div>
                        <div className="text-[10px] text-black/35 dark:text-white/25 uppercase tracking-wider font-medium">{t("team.squads.stat1Label", "Members")}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold" style={{ color: team.accentColor }}>
                          {i === 0 ? t("team.squads.stat2Num", "50+") : i === 1 ? t("team.squads.stat2Num", "50+") : i === 2 ? t("team.squads.stat2Num", "50+") : t("team.squads.stat2Num", "50+")}
                        </div>
                        <div className="text-[10px] text-black/35 dark:text-white/25 uppercase tracking-wider font-medium">{t("team.squads.stat2Label", "Projects")}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ TECHNICAL STAFF ═══════ */}
      <div className="bg-[#0a0f1a] dark:bg-[#060a12]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              <span className="text-[#4EB3E8]">{t("team.techStaff.titleHighlight", "Technical Staff")}</span>{" "}
              <span>{t("team.techStaff.title", "Comprises")}</span>
            </h2>
            <p className="mt-4 text-sm text-white/40 max-w-2xl mx-auto">
              {t("team.techStaff.description", "At CloudNexus, our technical staff combines AI expertise, innovation, and diverse talent to deliver intelligent, future-ready solutions that exceed expectations.")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Brain, title: t("team.techStaff.aiMl", "AI & Machine Learning Engineers") },
              { icon: Layers, title: t("team.techStaff.softwareArchitects", "Software Architects") },
              { icon: Code2, title: t("team.techStaff.fullStack", "Full-Stack Developers") },
              { icon: MonitorSmartphone, title: t("team.techStaff.appWeb", "App & Web Developers") },
              { icon: Server, title: t("team.techStaff.networkCloud", "Network & Cloud Engineers") },
              { icon: Shield, title: t("team.techStaff.qa", "Quality Assurance Specialists") },
              { icon: Cpu, title: t("team.techStaff.devops", "DevOps Engineers") },
              { icon: Database, title: t("team.techStaff.dataEngineers", "Data Engineers & Analysts") },
              { icon: Target, title: t("team.techStaff.uiux", "UI/UX Designers") },
              { icon: BarChart3, title: t("team.techStaff.seoDigital", "SEO & Digital Marketing Specialists") },
              { icon: Users, title: t("team.techStaff.projectManagers", "Project Managers") },
              { icon: Rocket, title: t("team.techStaff.technicalWriters", "Technical Writers") },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.04 * i }}
                  className="group flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#4EB3E8]/25 hover:bg-[#4EB3E8]/5 transition-all duration-300"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/15 group-hover:bg-[#4EB3E8]/20 transition-all duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ CULTURE ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">{t("team.culture.titleHighlight", "Our")}</span>{" "}
            <span>{t("team.culture.title", "Culture")}</span>
          </h2>
          <p className="mt-4 text-sm text-black/45 dark:text-white/40 max-w-lg mx-auto">
            {t("team.culture.description", "What makes CloudNexus a great place to build your career and grow as a professional.")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {translatedCultureValues.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="group relative rounded-2xl p-6 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#4EB3E8]/10 group-hover:bg-[#4EB3E8] transition-colors duration-500" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8] group-hover:border-[#4EB3E8] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#4EB3E8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{val.title}</h3>
                </div>

                <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed mb-5">{val.desc}</p>

                <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
                  <span className="text-2xl font-bold text-[#4EB3E8]">{val.num}</span>
                  <span className="text-[10px] text-black/35 dark:text-white/25 uppercase tracking-wider font-medium ml-2">{val.numLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════ JOIN CTA ═══════ */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20">
              <Sparkles className="w-7 h-7 text-[#4EB3E8]" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              {t("team.cta.title", "Want to Join Our Team?")}
            </h2>
            <p className="text-sm text-black/45 dark:text-white/40 leading-relaxed mb-8 max-w-lg mx-auto">
              {t("team.cta.description", "We\u2019re always looking for talented engineers, designers, and strategists who are passionate about building the future.")}
            </p>
            <a
              href="mailto:hr@cloudnexus.in"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-semibold transition-all duration-300 shadow-lg"
            >
              {t("team.cta.getInTouch", "Get In Touch")}
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
