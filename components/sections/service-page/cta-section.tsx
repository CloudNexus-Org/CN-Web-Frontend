"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { CTAProps } from "./types";

export function CTASection({
  headingTop: rawHeadingTop,
  headingBottom: rawHeadingBottom,
  description: rawDescription,
  primaryCtaLabel: rawPrimaryCtaLabel,
  tealAccent,
  tealProminent,
  headingBottomClassName,
  secondaryCtaHref,
  secondaryCtaLabel,
  cyanBoldBackdrop,
}: CTAProps) {
  const { ref, visible } = useInView(0.25);
  const { t } = useTranslation();
  const headingTop = useTranslatedData(rawHeadingTop);
  const headingBottom = useTranslatedData(rawHeadingBottom);
  const description = useTranslatedData(rawDescription);
  const primaryCtaLabel = useTranslatedData(rawPrimaryCtaLabel);

  const secondHref = secondaryCtaHref ?? "/our-work";
  const secondLabel = secondaryCtaLabel ?? t("common.viewAll", "View Our Work");

  const teal = !!tealAccent;
  const bottomClass =
    headingBottomClassName ?? (teal ? "text-[#006ea3]" : "text-[#4EB3E8]");

  return (
    <div ref={ref} className="relative overflow-hidden">
      {cyanBoldBackdrop ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/12 via-[#4EB3E8]/6 to-[#004d73]/10 dark:from-[#4EB3E8]/10 dark:via-[#4EB3E8]/5 dark:to-[#004d73]/15 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,720px)] h-[420px] bg-[#4EB3E8]/15 rounded-full blur-[100px] pointer-events-none" />
        </>
      ) : teal && tealProminent ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#006ea3]/15 via-[#006ea3]/5 to-transparent dark:from-[#006ea3]/12 dark:via-[#006ea3]/6 dark:to-[#006ea3]/4" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#006ea3]/10 blur-[120px] dark:bg-[#006ea3]/8" />
        </>
      ) : teal ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/8 via-transparent to-[#006ea3]/5 dark:from-[#006ea3]/5 dark:to-[#006ea3]/3 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006ea3]/5 rounded-full blur-[120px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/8 via-transparent to-[#4EB3E8]/5 dark:from-[#4EB3E8]/5 dark:to-[#4EB3E8]/3 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4EB3E8]/5 rounded-full blur-[120px] pointer-events-none" />
        </>
      )}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {headingTop}
          <br />
          <span className={bottomClass}>{headingBottom}</span>
        </h2>

        <p
          className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed text-pretty transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {description}
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Link
            href="/resources/free-consultation"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 font-semibold text-sm shadow-lg transition-colors"
          >
            {primaryCtaLabel ?? t("consultation.cta", "Get Free Consultation")} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={secondHref}
            className={
              cyanBoldBackdrop
                ? "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm bg-white/80 dark:bg-black/40 backdrop-blur-sm hover:bg-white dark:hover:bg-white/[0.06] transition-colors"
                : "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
            }
          >
            {secondLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
