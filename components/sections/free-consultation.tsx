"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, Clock, Shield } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const highlightIcons = [MessageSquare, Clock, Shield];

export function FreeConsultation() {
  const { t } = useTranslation();
  const consultationHighlights = [
    t("consultation.expertAdviceDesc", "1-on-1 Expert Session"),
    t("consultation.freeCallDesc", "30 Min Free Call"),
    t("consultation.noStringsDesc", "No Commitment Required"),
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-12 md:py-16 bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div
          ref={sectionRef}
          className={`relative overflow-hidden rounded-2xl border border-[#4EB3E8]/10 dark:border-white/[0.08] bg-[#D9EAFD] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-zinc-900 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <motion.div
            style={{ y: orbY1 }}
            className={`absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3 transition-opacity duration-1000 delay-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />
          <motion.div
            style={{ y: orbY2 }}
            className={`absolute bottom-0 left-0 w-60 h-60 bg-[#4EB3E8]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3 transition-opacity duration-1000 delay-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="relative px-5 py-10 sm:px-8 sm:py-12 md:px-14 md:py-16 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
            <div className="flex-1 text-center md:text-left">
              <div
                 className={`mb-8 transition-all duration-600 delay-200 ${
                 visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                   }`}
                       >
               {/* Light Theme Logo */}
                  <Image
               src="/asset/cn-logo.png"
                     alt="Cloud Nexus"
                     width={260}
                    height={65}
                     priority
                    className="block dark:hidden mx-auto md:mx-0"
                     style={{
                    width: "260px",
                    height: "auto",
                     }}
                      />

                {/* Dark Theme Logo */}
                     <Image
                    src="/assets/admin-logo.png"
                    alt="Cloud Nexus"
                    width={260}
                     height={65}
                    priority
                    className="hidden dark:block mx-auto md:mx-0"
                       style={{
                     width: "260px",
                     height: "auto",
                            }}
                            />
                        </div>
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#4EB3E8] leading-tight mb-4 transition-all duration-600 delay-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {t("consultation.titleBlue", "Let's Build Something")}
                <br className="hidden sm:block" />
                <span className="text-black dark:text-white">{t("consultation.titleWhite", "Great Together")}</span>
              </h2>
              <p
                className={`text-sm md:text-base text-black/50 dark:text-white/50 leading-relaxed max-w-md mb-8 transition-all duration-600 delay-[400ms] ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {t("consultation.subtitle")}
              </p>

              <div
                className={`flex flex-wrap justify-center md:justify-start gap-4 mb-8 transition-all duration-500 delay-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                {highlightIcons.map((Icon, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-black/50 dark:text-white/60"
                  >
                    <Icon size={15} strokeWidth={1.8} />
                    <span className="text-xs font-medium">{consultationHighlights[i]}</span>
                  </div>
                ))}
              </div>

              <div
                className={`transition-all duration-500 delay-[600ms] ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <Link
                  href="/resources/contact"
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black px-7 py-3 text-sm font-semibold hover:bg-black/80 dark:hover:bg-white/90 transition-all duration-300 shadow-lg shadow-black/10 dark:shadow-white/10"
                >
                  {t("consultation.cta")}
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div
              className={`hidden md:flex flex-col items-center gap-4 flex-shrink-0 transition-all duration-700 delay-500 ${
                visible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-6 scale-95"
              }`}
            >
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: MessageSquare, label: t("consultation.card.expertAdvice", "Expert Advice"), sub: t("consultation.card.expertAdviceSub", "1-on-1 sessions"), color: "#4EB3E8" },
                  { icon: Clock, label: t("consultation.card.quickResponse", "Quick Response"), sub: t("consultation.card.quickResponseSub", "Within 24 hours"), color: "#8b5cf6" },
                  { icon: Shield, label: t("consultation.card.noStrings", "No Strings"), sub: t("consultation.card.noStringsSub", "Zero commitment"), color: "#10b981" },
                  { icon: ArrowRight, label: t("consultation.card.freeCall", "Free Call"), sub: t("consultation.card.freeCallSub", "30 min session"), color: "#f59e0b" },
                ].map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.label} className="w-[100px] h-[100px] rounded-xl border border-black/[0.04] dark:border-white/[0.06] bg-white dark:bg-white/[0.04] backdrop-blur-sm flex flex-col items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300" style={{ boxShadow: `0 2px 12px ${card.color}10` }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${card.color}15` }}>
                        <Icon size={18} strokeWidth={1.5} style={{ color: card.color }} />
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-black/80 dark:text-white/80 leading-tight">{card.label}</p>
                        <p className="text-[8px] text-black/35 dark:text-white/30 mt-0.5">{card.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
