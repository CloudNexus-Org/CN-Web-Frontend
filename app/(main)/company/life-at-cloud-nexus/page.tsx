"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Cake,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
  Gift,
  Globe,
  GraduationCap,
  Handshake,
  HeartPulse,
  Music,
  PartyPopper,
  Plane,
  Rocket,
  Scale,
  ShieldCheck,
  Smile,
  Sparkles,
  Trophy,
  UserPlus,
} from "lucide-react";

import { Marquee } from "@/components/ui/marquee";

/* ═══════ TYPES & DATA ═══════
 * Drop real photos into `public/assets/life/<year>/<slug>.jpg`
 * and set each string in `collageSrcs` (5 slots, Codiant-style mosaics) when ready. Empty strings
 * keep gradient placeholders.
 * Hero running strip (codiant.com/life-at-codiant): left column = 2 stacked;
 * middle & right = full-height portraits  -  URLs in `cultureHeroGallery`.
 * ═══════ */

type CultureEvent = {
  id: string;
  title: string;
  excerpt: string;
  collageSrcs: [string, string, string, string, string];
};

const MOMENTS_PAGE_SIZE = 3;

const emptyCollage = (): [string, string, string, string, string] => ["", "", "", "", ""];

const cultureEvents: CultureEvent[] = [
//pool party images
          {
      id: "26-poolParty",
      title: "Pool Party",
      excerpt:
        "Dive into fun and make unforgettable memories at our Pool Party. Enjoy a refreshing atmosphere, great music, delicious food, and exciting moments with friends and family. Whether you're relaxing by the pool or joining the celebrations, it's the perfect way to unwind and have a splash of joy.",
      collageSrcs: [
        "/images/poolParty/poolparty1.png",
        "/images/poolParty/poolparty2.png",
        "/images/poolParty/poolparty3.png",
        "/images/poolParty/poolparty4.png",
        "/images/poolParty/poolparty5.png",
      ],
    },

        {
      id: "26-plantation-drive",
      title: "Plantation Drive",
      excerpt:
        "We believe in nurturing nature alongside our community. Our plantation initiatives are dedicated to creating a greener and healthier environment through sustainable practices and responsible stewardship. Every tree we plant represents our commitment to environmental conservation, biodiversity, and a better future for generations to come.",
      collageSrcs: [
        "/images/plantationDrive/planataion2.png",
        "/images/plantationDrive/plantation1.png",
        "/images/plantationDrive/plantation3.png",
        "/images/plantationDrive/planatation4.png",
        "/images/plantationDrive/planataion5.png",
      ],
    },
    {
      id: "26-cricket",
      title: "Cricket League CCL",
      excerpt:
        "Season two of Cloud Nexus cricket  -  bigger teams, louder cheers, and sixes that echoed across the ground. When the stumps fell, the only thing standing was team spirit.",
      collageSrcs: [
        "/images/cricket-photos/image-22.jpeg",
        "/images/cricket-photos/image-23.jpeg",
        "/images/cricket-photos/image-24.jpeg",
        "/images/cricket-photos/image-25.jpeg",
        "/images/cricket-photos/image-26.jpeg",
      ],
    },
    {
      id: "26-fun-friday",
      title: "Fun Friday  -  Team Edition",
      excerpt:
        "Keyboards down, vibes up. Our team's Fun Friday  -  games, laughs, team challenges, and the energy that reminds everyone why Cloud Nexus feels more like a crew than a company.",
      collageSrcs: [
        "/images/fun-friday-dev-team/team-photo.png",
        "/images/fun-friday-dev-team/image-13.jpeg",
        "/images/fun-friday-dev-team/image-14.jpeg",
        "/images/fun-friday-dev-team/image-15.jpeg",
        "/images/fun-friday-dev-team/image-16.jpeg",
      ],
    },
    {
      id: "26-hyderabad",
      title: "Hyderabad Team Trip",
      excerpt:
        "The whole crew hit Hyderabad  -  biryani runs, late-night talks, sightseeing adventures, and the kind of bonding that no Zoom call can replicate. Work hard, travel harder.",
      collageSrcs: [
        "/images/hydrabad-/image-6.jpeg",
        "/images/hydrabad-/image-7.jpeg",
        "/images/hydrabad-/image-8.jpeg",
        "/images/hydrabad-/image-9.jpeg",
        "/images/hydrabad-/image-10.jpeg",
      ],
    },
    {
      id: "26-independence-day",
      title: "Independence Day",
      excerpt:
        "Tricolour pride, patriotic vibes, and the Cloud Nexus team coming together to celebrate the spirit of freedom. A day of unity, gratitude, and national pride.",
      collageSrcs: [
        "/images/indipendent-day2026/image-33.jpeg",
        "/images/indipendent-day2026/image-34.jpeg",
        "/images/indipendent-day2026/image-33.jpeg",
        "/images/indipendent-day2026/image-34.jpeg",
        "/images/indipendent-day2026/image-33.jpeg",
      ],
    },
];

const purposeValues = [
  {
    Icon: Globe,
    title: "Diversity",
    description:
      "We wholeheartedly welcome people at Cloud Nexus from diverse cultures, without discriminating on the basis of gender, race, religion, colour, age, ability, region, or orientation. Different experiences sharpen our products and our empathy  -  we hire for craft and character, and we protect psychological safety so every voice can speak without performing.",
  },
  {
    Icon: Scale,
    title: "Equity",
    description:
      "Our purpose is to be unbiased, impartial, and equitable toward clients and teammates alike. We aim for transparent expectations, fair processes, and outcomes people can trust  -  from how we scope work to how we review performance. Equity is not a slogan here; it is how we allocate attention, opportunity, and credit.",
  },
  {
    Icon: ShieldCheck,
    title: "Integrity",
    description:
      "We work with honesty, clarity, and accountability. Trust is built in small moments  -  timelines kept, credit shared, hard truths spoken kindly, and ownership taken when things miss. At Cloud Nexus, integrity is the default setting for how we ship, how we negotiate, and how we treat one another.",
  },
  {
    Icon: Handshake,
    title: "Inclusion",
    description:
      "Being inclusive is our operating principle: every view matters. We involve people in decisions that affect them, listen actively, and design rituals so nobody feels like a spectator in their own workplace. Inclusion is how we turn diversity from a metric into momentum.",
  },
  {
    Icon: Trophy,
    title: "Meritocracy",
    description:
      "We foster a meritocratic culture  -  recruiting, rewarding, promoting, and training in ways that let ideas win on merit, not noise. We sponsor growth paths that are visible and fair, because innovation needs a runway where effort and outcomes are recognised, not politics.",
  },
];

const diversityAtCloudNexus = [
  "Cloud Nexus is a company that appreciates diversity. We believe that besides employing the best talent, the range of perspectives, ideas, and cultures leads to better outcomes for clients and teams alike.",
  "We are dedicated to connecting the right person with the right opportunity at the right time  -  in an inclusive climate for candidates, clients, and employees.",
  "Our objective is to attract and retain the best qualified people without discrimination on the basis of place of birth, race, colour, religion, gender, sexual orientation, age, or ability.",
  "Recognising diversity as a business advantage, we maintain workplace policies and programmes that foster inclusion, access to opportunity, and sustainable work-life balance.",
  "This non-discrimination policy applies to applicants and employees and covers recruiting, hiring, transfer, performance review, and compensation. Harassment or discrimination based on any of the above factors is not tolerated.",
];

const joinPerks = [
  { Icon: CalendarDays, title: "5 Days a Week", text: "Healthy work-life balance with a 5-day work week policy  -  no Saturday sprints.", color: "#4EB3E8" },
  { Icon: Cake, title: "Birthday Celebration", text: "Celebrate your special day with the team  -  cake, gifts, and good vibes on us.", color: "#ef4444" },
  { Icon: PartyPopper, title: "Fun Connect", text: "Regular fun activities, games, and team bonding events to recharge and reconnect.", color: "#8b5cf6" },
  { Icon: Gift, title: "Rewards & Recognition", text: "Monthly and quarterly awards to recognize outstanding contributions and effort.", color: "#f59e0b" },
  { Icon: Plane, title: "Business Trips", text: "Opportunities to travel for client meetings, conferences, and global tech summits.", color: "#10b981" },
  { Icon: HeartPulse, title: "Medical Insurance", text: "Comprehensive health coverage including accidental and air accident cover up to ₹2 Cr.", color: "#06b6d4" },
  { Icon: Award, title: "Certifications", text: "Sponsored certifications and courses to boost your skills and accelerate career growth.", color: "#8b5cf6" },
  { Icon: GraduationCap, title: "Complimentary Meals", text: "Breakfast, lunch, dinner, and chai  -  all provided so you stay fuelled and focused.", color: "#22c55e" },
  { Icon: Smile, title: "Chill Room", text: "PS5, chess, UNO, bunk beds  -  a dedicated relaxation zone for when you need a break.", color: "#a855f7" },
  { Icon: UserPlus, title: "Team Outings", text: "Monthly team outings (up to 2x/month)  -  fun activities that build real friendships.", color: "#f59e0b" },
  { Icon: Music, title: "Cultural Programs", text: "Festivals, traditions, and team rituals that celebrate the diversity of who we are.", color: "#ec4899" },
  { Icon: Sparkles, title: "Positive Environment", text: "A collaborative, respectful culture where teamwork, growth, and wellbeing come first.", color: "#4EB3E8" },
];

const everydayPerks = [
  {
    num: "01",
    title: "Work Life Balance",
    text: "We protect focus time, respect boundaries, and celebrate output over performative hours.",
    Icon: CalendarDays,
  },
  {
    num: "02",
    title: "Healthy Environment",
    text: "Psychological safety, open dialogue, and managers who listen  -  not just allocate tasks.",
    Icon: HeartPulse,
  },
  {
    num: "03",
    title: "Fun Activities",
    text: "Weekly and monthly touchpoints that remind us we are humans first, engineers second.",
    Icon: PartyPopper,
  },
  {
    num: "04",
    title: "Scope of Growth",
    text: "Stretch projects, internal mobility, and leaders who sponsor your next leap  -  not gatekeep it.",
    Icon: Rocket,
  },
  {
    num: "05",
    title: "Innovative & Interactive Workplace",
    text: "Modern tooling, async-friendly rituals, and a culture where asking why is always welcome.",
    Icon: Sparkles,
  },
];

/** Light placeholder / image cell for Codiant-style moment mosaics (white section). */
function MomentCollageCell({ src, alt }: { src: string; alt: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover/mosaic:scale-[1.03]"
      />
    );
  }
  return (
    <div className="relative flex h-full min-h-[44px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-200/90 via-neutral-100 to-neutral-200/80 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(78,179,232,0.12),transparent_55%)]" />
      <Camera className="relative z-10 h-5 w-5 text-neutral-400 dark:text-zinc-500" strokeWidth={1.25} aria-hidden />
    </div>
  );
}

type MomentCollagePattern = "a" | "b";

const mosaicCell =
  "group/mosaic relative min-h-0 overflow-hidden bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] dark:bg-zinc-900 dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]";

/**
 * codiant.com/life-at-codiant moment cards: 5 photos, thin gutters, alternating mosaics.
 * Pattern A: three tiles top row, two wide bottom. Pattern B: two wide top, three tiles bottom.
 */
function CodiantMomentCollage({
  srcs,
  title,
  pattern,
}: {
  srcs: [string, string, string, string, string];
  title: string;
  pattern: MomentCollagePattern;
}) {
  const [s0, s1, s2, s3, s4] = srcs;

  if (pattern === "a") {
    return (
      <div className="grid aspect-[5/3] w-full grid-cols-6 grid-rows-2 gap-1 bg-white p-[3px] sm:aspect-[16/10] dark:bg-zinc-950">
        <div className={`col-span-2 ${mosaicCell}`}>
          <MomentCollageCell src={s0} alt={`${title}  -  photo 1`} />
        </div>
        <div className={`col-span-2 ${mosaicCell}`}>
          <MomentCollageCell src={s1} alt={`${title}  -  photo 2`} />
        </div>
        <div className={`col-span-2 ${mosaicCell}`}>
          <MomentCollageCell src={s2} alt={`${title}  -  photo 3`} />
        </div>
        <div className={`col-span-3 row-start-2 ${mosaicCell}`}>
          <MomentCollageCell src={s3} alt={`${title}  -  photo 4`} />
        </div>
        <div className={`col-span-3 row-start-2 ${mosaicCell}`}>
          <MomentCollageCell src={s4} alt={`${title}  -  photo 5`} />
        </div>
      </div>
    );
  }

  return (
    <div className="grid aspect-[5/3] w-full grid-cols-6 grid-rows-2 gap-1 bg-white p-[3px] sm:aspect-[16/10] dark:bg-zinc-950">
      <div className={`col-span-3 ${mosaicCell}`}>
        <MomentCollageCell src={s0} alt={`${title}  -  photo 1`} />
      </div>
      <div className={`col-span-3 ${mosaicCell}`}>
        <MomentCollageCell src={s1} alt={`${title}  -  photo 2`} />
      </div>
      <div className={`col-span-2 row-start-2 ${mosaicCell}`}>
        <MomentCollageCell src={s2} alt={`${title}  -  photo 3`} />
      </div>
      <div className={`col-span-2 row-start-2 ${mosaicCell}`}>
        <MomentCollageCell src={s3} alt={`${title}  -  photo 4`} />
      </div>
      <div className={`col-span-2 row-start-2 ${mosaicCell}`}>
        <MomentCollageCell src={s4} alt={`${title}  -  photo 5`} />
      </div>
    </div>
  );
}

/**
 * codiant.com/life-at-codiant strip: col1 = two stacked landscapes, col2–3 = tall portraits.
 * All gutters use the same spacing as the page (`gap-5` = 20px).
 */
const cultureHeroGallery = {
  leftStack: [
    "/images/fun-friday-dev-team/team-photo.png",
    "/images/cricket-photos/image-22.jpeg",
  ] as [string, string],
   pillarMid: "/images/diwali-2025/IMG-20251018-WA0160.jpg",
  pillarRight: "/images/inauguration-2025/image.jpeg",
};

function CultureHeroGalleryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative min-h-0 overflow-hidden rounded-xl bg-gradient-to-br from-[#f4f4f5] via-[#ececef] to-[#e4e4e7] shadow-sm ring-1 ring-black/[0.04] transition duration-500 hover:shadow-xl hover:shadow-[#4EB3E8]/12 hover:ring-[#4EB3E8]/25 dark:from-[#18181b] dark:via-[#27272a] dark:to-[#18181b] dark:ring-white/[0.06] dark:hover:shadow-[#4EB3E8]/20 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(78,179,232,0.14),transparent_55%)] opacity-80 transition duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] opacity-0 transition duration-700 group-hover:opacity-100 dark:bg-[linear-gradient(110deg,transparent_40%,rgba(78,179,232,0.08)_50%,transparent_60%)]" />
          <div className="flex h-full min-h-[120px] w-full items-center justify-center">
            <Camera
              className="h-8 w-8 text-[#4EB3E8]/35 transition duration-500 group-hover:scale-110 group-hover:text-[#4EB3E8]/55"
              strokeWidth={1.25}
              aria-hidden
            />
          </div>
        </>
      )}
    </div>
  );
}

/** One repeating panel: Codiant 3-column strip (2-stack + portrait + portrait). */
function CodiantRunningGalleryBlock({ blockId }: { blockId: string }) {
  const { leftStack, pillarMid, pillarRight } = cultureHeroGallery;
  const [top, bottom] = leftStack;
  return (
    <div className="grid h-[clamp(300px,50vh,580px)] w-[min(92vw,1040px)] shrink-0 grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-3 sm:gap-3 md:gap-5 md:h-[clamp(320px,46vh,580px)]">
      <CultureHeroGalleryImage
        src={top}
        alt={`Cloud Nexus culture  -  ${blockId} left top`}
        className="col-start-1 row-start-1 h-full"
      />
      <CultureHeroGalleryImage
        src={bottom}
        alt={`Cloud Nexus culture  -  ${blockId} left bottom`}
        className="col-start-1 row-start-2 h-full"
      />
      <CultureHeroGalleryImage
        src={pillarMid}
        alt={`Cloud Nexus culture  -  ${blockId} center`}
        className="col-start-2 row-span-2 row-start-1 h-full"
      />
      <CultureHeroGalleryImage
        src={pillarRight}
        alt={`Cloud Nexus culture  -  ${blockId} right`}
        className="hidden sm:block col-start-3 row-span-2 row-start-1 h-full"
      />
    </div>
  );
}

function CultureHeroGallery() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden border-y border-black/[0.06] bg-gradient-to-b from-white via-zinc-50/80 to-white dark:border-[#1e1e1e] dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950"
      aria-label={t("life.gallery.ariaLabel", "Culture highlights")}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(78,179,232,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(78,179,232,0.08),transparent)]"
      />

      {/* Desktop+: infinite horizontal band (Codiant-style). */}
      <div className="relative hidden py-8 md:block md:py-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent dark:from-zinc-950 md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent dark:from-zinc-950 md:w-20" />
        {prefersReducedMotion ? (
          <div className="flex gap-5 overflow-x-auto px-4 pb-1 sm:px-6 md:px-10">
            <CodiantRunningGalleryBlock blockId="static-a" />
            <CodiantRunningGalleryBlock blockId="static-b" />
          </div>
        ) : (
          <div className="overflow-hidden">
            <Marquee className="box-border !p-0 [--duration:52s] [--gap:1.25rem]" pauseOnHover repeat={4}>
              <CodiantRunningGalleryBlock blockId="run" />
            </Marquee>
          </div>
        )}
      </div>

      {/* Small screens: same panel repeated, swipe to explore (marquee motion reduced on tiny viewports). */}
      <div className="relative py-6 md:hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent dark:from-zinc-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent dark:from-zinc-950" />
        {prefersReducedMotion ? (
          <div className="flex gap-5 overflow-x-auto px-4 pb-1">
            <CodiantRunningGalleryBlock blockId="m-a" />
            <CodiantRunningGalleryBlock blockId="m-b" />
          </div>
        ) : (
          <div className="overflow-hidden">
            <Marquee className="box-border !p-0 [--duration:42s] [--gap:1.25rem]" pauseOnHover repeat={3}>
              <CodiantRunningGalleryBlock blockId="mob" />
            </Marquee>
          </div>
        )}
      </div>
    </section>
  );
}

export default function LifeAtCloudNexusPage() {
  const { t } = useTranslation();
  const translatedCultureEvents = useTranslatedData(cultureEvents);
  const translatedPurposeValues = useTranslatedData(purposeValues);
  const translatedDiversityAtCloudNexus = useTranslatedData(diversityAtCloudNexus);
  const translatedJoinPerks = useTranslatedData(joinPerks);
  const translatedEverydayPerks = useTranslatedData(everydayPerks);

  const [momentPage, setMomentPage] = useState(0);
  const [purposeIndex, setPurposeIndex] = useState(0);
  const [gallery, setGallery] = useState<{ title: string; photos: string[] } | null>(null);
  const [galleryIdx, setGalleryIdx] = useState(0);

  const openGallery = useCallback((title: string, photos: string[]) => {
    const valid = photos.filter(Boolean);
    if (valid.length === 0) return;
    setGallery({ title, photos: valid });
    setGalleryIdx(0);
  }, []);

  const closeGallery = useCallback(() => setGallery(null), []);

  useEffect(() => {
    if (!gallery) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") setGalleryIdx((p) => (p + 1) % gallery.photos.length);
      if (e.key === "ArrowLeft") setGalleryIdx((p) => (p - 1 + gallery.photos.length) % gallery.photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gallery, closeGallery]);

  const momentPageCount = Math.max(1, Math.ceil(translatedCultureEvents.length / MOMENTS_PAGE_SIZE));

  useEffect(() => {
    setMomentPage((p) => Math.min(p, momentPageCount - 1));
  }, [momentPageCount]);

  const momentPageSafe = Math.min(momentPage, momentPageCount - 1);
  const pagedEvents = translatedCultureEvents.slice(
    momentPageSafe * MOMENTS_PAGE_SIZE,
    momentPageSafe * MOMENTS_PAGE_SIZE + MOMENTS_PAGE_SIZE
  );

  return (
    <section className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-white">
      {/* Hero */}
      <div className="relative w-full overflow-hidden px-6 pt-28 pb-16 md:px-8 md:pt-36 md:pb-20">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(78,179,232,0.10) 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute inset-0 dark:opacity-30 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='%234EB3E8' opacity='0.08'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]"
          >
            <span className="text-black/90 dark:text-white">{t("life.hero.title", "Life at")} </span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-[#2d8ec4] via-[#4EB3E8] to-[#6bc9ef] bg-clip-text text-transparent dark:from-[#6bc9ef] dark:via-[#4EB3E8] dark:to-[#a8e6ff]">
              {t("life.hero.subtitle", "Cloud Nexus")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-base font-medium leading-relaxed text-black/50 md:text-lg dark:text-white/55"
          >
            {t("life.hero.description", "Where talent meets culture. We build products we're proud of  -  with people we genuinely care about.")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/resources/career"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-black dark:bg-white px-8 py-3.5 text-sm font-semibold text-white dark:text-black shadow-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("life.hero.exploreCareers", "Explore Careers")}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/resources/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-8 py-3.5 text-sm font-semibold text-black/70 dark:text-white/70 transition-all duration-300 hover:border-[#4EB3E8]/40 hover:text-[#4EB3E8]"
            >
              {t("life.hero.getInTouch", "Get in Touch")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-14 grid grid-cols-2 gap-6 sm:flex sm:items-center sm:gap-8 md:gap-12"
          >
            {[
              { value: "90+", label: t("life.stats.teamMembers", "Team Members") },
              { value: "5", label: t("life.stats.dayWorkWeek", "Day Work Week") },
              { value: "15+", label: t("life.stats.countriesServed", "Countries Served") },
              { value: "40%+", label: t("life.stats.womenInTech", "Women in Tech") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black tracking-tight text-[#4EB3E8]">{stat.value}</div>
                <div className="text-[10px] md:text-[11px] font-semibold text-black/30 dark:text-white/25 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <CultureHeroGallery />

      {/* Celebrating The Melody of Moments  -  Codiant-style */}
      <div className="relative w-full bg-white px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12 mb-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-3xl font-bold tracking-tight md:text-[40px] md:leading-tight"
              >
                {t("life.moments.title", "Celebrating The Melody of")}{" "}
                <span className="bg-gradient-to-r from-[#4EB3E8] to-[#6bc9ef] bg-clip-text text-transparent">{t("life.moments.titleHighlight", "Moments")}</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="max-w-md text-[15px] font-medium leading-relaxed text-black/50 dark:text-white/45"
            >
              {t("life.moments.description", "Laughter and joyful chatter echoed with the melody of music. See how we're building success together, one team, one dream at Cloud Nexus.")}
            </motion.p>
          </div>

          {/* Event cards with mosaic */}
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={momentPageSafe}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {pagedEvents.map((ev, index) => (
                  <motion.article
                    key={ev.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.04 + index * 0.05 }}
                    className="group flex flex-col rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Image collage  -  Airbnb style */}
                    {(() => {
                      const p = ev.collageSrcs.filter(Boolean);
                      if (p.length === 0) return null;
                      return (
                        <div className="relative rounded-t-2xl overflow-hidden h-[200px] sm:h-[240px]">
                          <div className="absolute inset-0 flex gap-[2px]">
                            {/* Left hero  -  50% width */}
                            <div className="relative w-1/2 h-full overflow-hidden">
                              <Image src={p[0]} alt={`${ev.title} 1`} fill className="object-cover" sizes="(max-width:640px) 50vw, 25vw" />
                            </div>
                            {/* Right grid  -  50% width, 2x2 */}
                            <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2 gap-[2px]">
                              {p.slice(1, 5).map((src, i) => (
                                <div key={i} className="relative overflow-hidden">
                                  <Image src={src} alt={`${ev.title} ${i + 2}`} fill className="object-cover" sizes="(max-width:640px) 25vw, 12vw" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <h3 className="text-base font-bold tracking-tight sm:text-lg mb-2">{ev.title}</h3>
                      <p className="line-clamp-4 flex-1 text-[13px] font-medium leading-relaxed text-black/50 dark:text-white/40 sm:text-[14px]">
                        {ev.excerpt}
                      </p>
                      <button
                        onClick={() => openGallery(ev.title, ev.collageSrcs)}
                        className="mt-5 self-start inline-flex items-center gap-2 rounded-lg border border-[#4EB3E8]/30 px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#4EB3E8] transition-all duration-300 hover:bg-[#4EB3E8] hover:text-white hover:shadow-md"
                      >
                        {t("life.moments.viewAllPhotos", "View All Photos")}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {momentPageCount > 1 && (
            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Previous page"
                disabled={momentPageSafe <= 0}
                onClick={() => setMomentPage((p) => Math.max(0, p - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-white/[0.03] transition-all hover:border-[#4EB3E8]/40 hover:text-[#4EB3E8] disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={2} />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: momentPageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to page ${i + 1}`}
                    onClick={() => setMomentPage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === momentPageSafe ? "w-8 bg-[#4EB3E8]" : "w-2 bg-black/10 dark:bg-white/10 hover:bg-[#4EB3E8]/40"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next page"
                disabled={momentPageSafe >= momentPageCount - 1}
                onClick={() => setMomentPage((p) => Math.min(momentPageCount - 1, p + 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4EB3E8] text-white shadow-md shadow-[#4EB3E8]/20 transition-all hover:bg-[#3a9fd4] disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Driven by Purpose  -  premium interactive cards */}
      <div className="relative w-full overflow-hidden bg-white text-black dark:bg-zinc-950 dark:text-white border-y border-black/[0.06] dark:border-white/[0.06]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(78,179,232,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(78,179,232,0.12),transparent_70%)]" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem]"
          >
            {t("life.purpose.title", "Driven by")}{" "}
            <span className="bg-gradient-to-r from-[#4EB3E8] via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">{t("life.purpose.titleHighlight", "Purpose")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mx-auto mt-4 max-w-xl text-center text-[15px] font-medium leading-relaxed text-black/50 dark:text-white/50"
          >
            {t("life.purpose.description", "The five pillars that guide everything we build, ship, and stand for.")}
          </motion.p>

          {/* Value selector cards */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
            {translatedPurposeValues.map((v, i) => {
              const active = purposeIndex === i;
              const ValIcon = v.Icon;
              const colors = ["#4EB3E8", "#a78bfa", "#f59e0b", "#10b981", "#ec4899"];
              const c = colors[i % colors.length];
              return (
                <motion.button
                  key={v.title}
                  type="button"
                  onClick={() => setPurposeIndex(i)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative flex flex-col items-center gap-3 rounded-2xl border p-5 sm:p-6 transition-all duration-300 backdrop-blur-sm ${
                    active
                      ? "border-black/10 dark:border-white/20 bg-white dark:bg-white/[0.08] shadow-lg dark:shadow-[0_0_40px_rgba(78,179,232,0.2)]"
                      : "border-black/[0.06] dark:border-white/[0.06] bg-[#f8f9fa] dark:bg-white/[0.03] hover:border-black/15 dark:hover:border-white/15 hover:bg-white dark:hover:bg-white/[0.06]"
                  }`}
                >
                  {active && <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${c}, transparent)` }} />}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${active ? "scale-110" : "bg-black/[0.04] dark:bg-white/[0.05]"}`}
                    style={{ backgroundColor: active ? `${c}20` : undefined }}
                  >
                    <ValIcon className="h-5 w-5 transition-colors duration-300 text-black/50 dark:text-white/50" style={{ color: active ? c : undefined }} strokeWidth={1.5} />
                  </div>
                  <span className={`text-xs font-bold tracking-wide transition-colors duration-300 ${active ? "text-black dark:text-white" : "text-black/50 dark:text-white/45"}`}>
                    {v.title}
                  </span>
                  {active && (
                    <motion.div layoutId="purpose-indicator" className="absolute -bottom-px left-[20%] right-[20%] h-[2px] rounded-full" style={{ backgroundColor: c }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Active value detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={purposeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-10 md:mt-14"
              role="region"
              aria-live="polite"
            >
              {(() => {
                const PurposeIcon = translatedPurposeValues[purposeIndex].Icon;
                const colors = ["#4EB3E8", "#a78bfa", "#f59e0b", "#10b981", "#ec4899"];
                const activeColor = colors[purposeIndex % colors.length];
                return (
                  <div className="mx-auto max-w-3xl rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-[#f8f9fa] dark:bg-white/[0.04] p-8 sm:p-10 md:p-12 backdrop-blur-sm shadow-sm dark:shadow-none">
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                      <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 380, damping: 22 }}
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-black/10 dark:border-white/10 sm:h-20 sm:w-20"
                        style={{ backgroundColor: `${activeColor}15`, boxShadow: `0 0 50px ${activeColor}25` }}
                      >
                        <PurposeIcon className="h-8 w-8 sm:h-9 sm:w-9" style={{ color: activeColor }} strokeWidth={1.2} />
                      </motion.div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{translatedPurposeValues[purposeIndex].title}</h3>
                        <p className="mt-3 text-[14px] font-normal leading-[1.75] text-black/70 dark:text-white/70 sm:text-[15px]">
                          {translatedPurposeValues[purposeIndex].description}
                        </p>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-8 flex items-center gap-2">
                      {translatedPurposeValues.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setPurposeIndex(i)}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            i === purposeIndex ? "flex-[3] opacity-100" : "flex-1 opacity-30 hover:opacity-60 bg-black/30 dark:bg-white/40"
                          }`}
                          style={{ backgroundColor: i === purposeIndex ? activeColor : undefined }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Why Should You Join  -  12 compact tiles */}
      <div className="w-full border-t border-black/[0.06] px-6 py-12 md:px-8 md:py-16 dark:border-[#1e1e1e] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            {t("life.join.title", "Why Should You Join Cloud Nexus?")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-black/50 dark:text-[#8b8b8b]"
          >
            {t("life.join.description", "Cloud Nexus is the place where you can learn, explore, and grow your craft and confidence. We weave a work culture with empathy, warmth, and care.")}
          </motion.p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {translatedJoinPerks.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 + index * 0.04 }}
                className="group relative flex flex-col gap-3 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl focus-within:ring-2 focus-within:ring-[#4EB3E8]/30"
                style={{ "--card-color": p.color } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${p.color}50`;
                  e.currentTarget.style.boxShadow = `0 20px 40px -12px ${p.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: p.color }} />
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${p.color}12`, border: `1px solid ${p.color}20` }}>
                  <p.Icon className="h-5 w-5 stroke-[1.5] transition-transform duration-500 group-hover:scale-110" style={{ color: p.color }} />
                </div>
                <h3 className="relative z-10 text-sm font-semibold leading-snug text-black/80 dark:text-white/85">
                  {p.title}
                </h3>
                <p className="relative z-10 text-xs font-medium leading-relaxed text-black/40 dark:text-white/35">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Empowering Women */}
      <div className="w-full border-t border-black/[0.06] px-6 py-12 md:px-8 md:py-16 dark:border-[#1e1e1e] dark:border-white/[0.06]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-black/[0.06] dark:border-white/[0.06] shadow-lg shadow-[#4EB3E8]/10 ring-1 ring-[#4EB3E8]/10">
              <img
                src="/images/stock/stock-78f503171c.jpg"
                alt={t("life.women.altImage", "Women empowerment at Cloud Nexus")}
                className="w-full h-[380px] md:h-[420px] object-cover"
              />
              <div className="absolute bottom-5 right-5 rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-center backdrop-blur-md">
                <div className="text-2xl font-black text-[#4EB3E8]">40%+</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  {t("life.women.badgeLabel", "Women in tech roles")}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t("life.women.title", "Empowering women is our major goal")}</h2>
            <p className="mt-5 text-[15px] font-medium leading-relaxed text-black/50 dark:text-[#8b8b8b]">
              {t("life.women.description1", "We invest in leadership visibility, psychological safety, and growth paths so women can thrive in engineering, product, and operations  -  not as an exception, but as the norm.")}
            </p>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-black/50 dark:text-[#8b8b8b]">
              {t("life.women.description2", "From mentorship circles to flexible policies and zero-tolerance for harassment, we design a workplace where everyone can bring their full selves to work.")}
            </p>
            <ul className="mt-8 space-y-3">
              {[
                t("life.women.point1", "Equal opportunity in hiring and promotions"),
                t("life.women.point2", "Leadership sponsorship and mentorship programs"),
                t("life.women.point3", "Safe reporting and supportive HR practices"),
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-[14px] font-medium text-black/80 dark:text-white/85"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4EB3E8]" strokeWidth={1.5} />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Recruit band */}
      <div className="w-full border-y border-black/[0.05] bg-gradient-to-b from-[#4EB3E8]/[0.07] via-white to-white px-6 py-16 md:px-8 dark:from-[#4EB3E8]/[0.08] dark:via-zinc-950 dark:to-zinc-950 dark:border-white/[0.05]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {t("life.recruit.title", "We are always in search of enthusiastic people to join us")}
          </h2>
          <p className="mt-5 text-[15px] font-medium leading-relaxed text-black/50 dark:text-[#8b8b8b]">
            {t("life.recruit.description", "At Cloud Nexus, we thrive on the energy of driven individuals. If you're eager to make a meaningful impact and grow alongside a vibrant community, we'd love to have you on board.")}
          </p>
          <Link
            href="/resources/career"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-black dark:bg-white px-7 py-3.5 text-sm font-semibold text-white dark:text-black shadow-lg transition-all hover:bg-black/90 dark:hover:bg-white/90 hover:shadow-xl"
          >
            {t("life.recruit.applyNow", "Apply now")}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* Numbered perks 01–05 */}
      <div className="w-full border-t border-black/[0.06] px-6 py-12 md:px-8 md:py-16 dark:border-[#1e1e1e] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            {t("life.perks.title", "Perks of Being at Cloud Nexus")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-black/50 dark:text-[#8b8b8b]"
          >
            {t("life.perks.description", "Comfort, safety, and flexibility are how we grow together  -  with a cheerful environment where people do their best work.")}
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {translatedEverydayPerks.map((p, index) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-5 sm:p-6 md:p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#4EB3E8]/45 hover:shadow-xl hover:shadow-[#4EB3E8]/12"
              >
                <span className="pointer-events-none absolute right-3 top-3 text-4xl sm:text-5xl md:text-6xl md:right-4 md:top-4 font-black text-[#4EB3E8]/[0.07] dark:text-[#4EB3E8]/10 transition-colors duration-500 group-hover:text-[#4EB3E8]/20 dark:group-hover:text-[#4EB3E8]/25">
                  {p.num}
                </span>
                <div className="relative z-10 mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.04] text-black/70 dark:text-white/80 transition-colors group-hover:border-[#4EB3E8]/30 group-hover:text-[#4EB3E8] group-hover:bg-[#4EB3E8]/10">
                    <p.Icon className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-black/85 dark:text-white/90">{p.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-black/45 dark:text-white/40">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Diversity at Cloud Nexus (Codiant-aligned block) */}
      <div className="w-full border-t border-black/[0.06] bg-gradient-to-b from-zinc-50/90 via-white to-white px-6 py-14 md:px-8 md:py-20 dark:border-[#1e1e1e] dark:from-zinc-950 dark:via-black dark:to-black">
        <div className="mx-auto max-w-3xl rounded-3xl border border-black/[0.06] bg-white/80 p-8 shadow-[0_20px_60px_-24px_rgba(78,179,232,0.15)] backdrop-blur-sm dark:border-white/[0.08] dark:bg-zinc-900/40 dark:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.5)] md:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl dark:text-white">
            {t("life.diversity.title", "Diversity at")}{" "}
            <span className="bg-gradient-to-r from-[#4EB3E8] to-[#6bc9ef] bg-clip-text text-transparent">{t("life.diversity.titleHighlight", "Cloud Nexus")}</span>
          </h2>
          <ul className="mt-8 space-y-5">
            {translatedDiversityAtCloudNexus.map((line, idx) => (
              <li
                key={`diversity-${idx}`}
                className="flex gap-3 text-[15px] font-medium leading-relaxed text-black/75 dark:text-[#b8b8b8]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4EB3E8]" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full border-t border-black/[0.06] dark:border-white/[0.06] px-6 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#4EB3E8]/[0.03] via-purple-500/[0.02] to-[#10b981]/[0.03] dark:from-[#4EB3E8]/[0.05] dark:via-purple-500/[0.04] dark:to-[#10b981]/[0.05] p-10 sm:p-14 text-center"
          >
            <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(78,179,232,0.04) 0%, transparent 70%)" }} />
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 -translate-y-1/2 translate-x-1/3 rounded-full bg-[#8b5cf6]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 -translate-x-1/3 translate-y-1/2 rounded-full bg-[#4EB3E8]/8 blur-3xl" />

            <div className="relative">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4EB3E8]/15 to-[#8b5cf6]/15 dark:from-[#4EB3E8]/20 dark:to-[#8b5cf6]/20 ring-1 ring-[#4EB3E8]/10">
                <Rocket className="h-7 w-7 text-[#4EB3E8]" strokeWidth={1.5} />
              </div>
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("life.cta.title", "Ready to be part of")}
                <br className="hidden sm:block" />
                <span className="text-[#4EB3E8]">{t("life.cta.titleHighlight", "the story")}</span>?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-sm font-medium leading-relaxed text-black/50 dark:text-white/50 md:text-base">
                {t("life.cta.description", "Bring your curiosity, your craft, and your kindness. We are building products and a culture worth showing up for  -  every single day.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/career"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 px-8 py-3.5 text-sm font-semibold shadow-lg transition-all duration-300"
                >
                  {t("life.cta.applyNow", "Apply now")}
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/resources/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                >
                  {t("life.cta.talkToUs", "Talk to us")}
                </Link>
              </div>
              <p className="mt-5 text-xs text-black/30 dark:text-white/25">
                work@cloudnexus.in &middot; +91 87938 30447
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeGallery}
          >
            <button
              onClick={closeGallery}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>

            <div className="absolute top-5 left-5 z-10">
              <h3 className="text-white font-bold text-lg">{gallery.title}</h3>
              <p className="text-white/50 text-sm mt-1">
                {galleryIdx + 1} / {gallery.photos.length}
              </p>
            </div>

            <motion.div
              key={galleryIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[70vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery.photos[galleryIdx]}
                alt={`${gallery.title} ${galleryIdx + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            {gallery.photos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryIdx((p) => (p - 1 + gallery.photos.length) % gallery.photos.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" strokeWidth={1.5} />
              </button>
            )}

            {gallery.photos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryIdx((p) => (p + 1) % gallery.photos.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" strokeWidth={1.5} />
              </button>
            )}

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {gallery.photos.map((src, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setGalleryIdx(i); }}
                  className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === galleryIdx ? "border-[#4EB3E8] scale-110" : "border-white/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
