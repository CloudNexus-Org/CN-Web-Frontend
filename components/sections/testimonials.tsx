"use client";

import { Marquee } from "@/components/ui/marquee";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";

const reviews = [
  {
    text: "CloudNexus delivered a complete healthcare platform for us in record time. Their team understood HIPAA compliance from day one and built a system that our doctors and patients love using daily.",
    name: "Dr. Meera Kapoor",
    title: "CTO at MedAssist Health",
    avatar: "https://i.pravatar.cc/150?u=cn-medassist-01",
    logo: "M",
    logoColor: "bg-emerald-500",
  },
  {
    text: "We needed a scalable e-commerce backend that could handle 50K+ concurrent users during flash sales. CloudNexus architected and deployed it on AWS with zero downtime. Truly exceptional engineering.",
    name: "Rahul Mehta",
    title: "Founder & CEO at ShopSwift",
    avatar: "https://i.pravatar.cc/150?u=cn-shopswift-02",
    logo: "S",
    logoColor: "bg-orange-500",
  },
  {
    text: "Their dedicated development team integrated seamlessly with ours. The code quality, communication, and delivery speed exceeded every expectation. CloudNexus feels like an extension of our own team.",
    name: "Ananya Sharma",
    title: "VP of Engineering at FinEdge",
    avatar: "https://i.pravatar.cc/150?u=cn-finedge-03",
    logo: "F",
    logoColor: "bg-indigo-600",
  },
  {
    text: "From AI-powered analytics to a real-time logistics dashboard, CloudNexus turned our vision into a production-ready product in just 4 months. Their technical depth is unmatched.",
    name: "James Mitchell",
    title: "CTO at NovaTrade Group, London",
    avatar: "https://i.pravatar.cc/150?u=cn-novatrade-04",
    logo: "N",
    logoColor: "bg-sky-600",
  },
  {
    text: "CloudNexus rebuilt our legacy ERP system into a modern cloud-native platform. The migration was smooth, the new system is 3x faster, and our team's productivity has skyrocketed.",
    name: "Priya Nair",
    title: "Director of IT at BuildCorp Industries",
    avatar: "https://i.pravatar.cc/150?u=cn-buildcorp-05",
    logo: "B",
    logoColor: "bg-[#4EB3E8]",
  },
  {
    text: "We evaluated five vendors before choosing CloudNexus for our mobile banking app. Their fintech expertise, security-first approach, and on-time delivery made them the clear winner.",
    name: "Sarah Chen",
    title: "Head of Digital at Apex Financial, Singapore",
    avatar: "https://i.pravatar.cc/150?u=cn-apexfin-06",
    logo: "A",
    logoColor: "bg-violet-600",
  },
];

const ReviewCard = ({
  text,
  name,
  title,
  avatar,
  logo,
  logoColor,
}: {
  text: string;
  name: string;
  title: string;
  avatar: string;
  logo: string;
  logoColor: string;
}) => {
  return (
    <Card className="w-[85vw] sm:w-[28rem] max-w-full shrink-0 rounded-2xl border-[#4EB3E8]/10 bg-[#D9EAFD] dark:border-white/10 dark:bg-black p-5 shadow-none transition-colors hover:border-[#4EB3E8]/25 dark:hover:border-white/20 sm:p-6">
      <div className="flex h-full flex-col justify-between gap-4">
        <p className="text-black/80 dark:text-zinc-300 font-medium leading-relaxed text-sm sm:text-base">
          &ldquo;{text}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="rounded-full transition-all"
            />
            <div
              className={cn(
                "absolute -left-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-black",
                logoColor
              )}
            >
              {logo}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-black dark:text-white">{name}</span>
            <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">{title}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export function Testimonials() {
  const { t } = useTranslation();
  const translatedReviews = useTranslatedData(reviews);
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-black py-12 sm:py-16">
      {/* Subtle top gradient line to separate sections if needed */}
      {/* <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#4EB3E8]">
            {t("testimonials.titleBlue", "Client")} <span className="text-black dark:text-white">{t("testimonials.titleWhite", "Testimonials")}</span>
          </h2>
        </div>

        <div className="relative w-full">
          <Marquee pauseOnHover className="[--duration:50s]">
            {translatedReviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>

          {/* Gradient overlays for the marquee to fade out edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 max-w-xs bg-gradient-to-r from-white dark:from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 max-w-xs bg-gradient-to-l from-white dark:from-black to-transparent" />
        </div>


      </div>
    </section>
  );
}
