import type { LucideProps } from "lucide-react";

export interface ServiceOffering {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
  /** Link to the sub-service detail page */
  href?: string;
  /** Tech logos shown in the card illustration (devicon paths relative to DEVICON base) */
  logos?: string[];
  /** Accent color for the card illustration elements */
  accent?: string;
  /** When set with titleEmphasis, card title renders as gray prefix + emphasized word (software sub-pages). */
  titleRest?: string;
  titleEmphasis?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface TechItem {
  name: string;
  logo: string;
}

export interface TechCategory {
  label: string;
  items: TechItem[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface WhyChooseItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

/** Gray text before highlight, white highlight span, gray text after (matches original h2 splits). */
export interface WhyChooseHeading {
  before: string;
  highlight: string;
  after: string;
}

export interface HeroBadge {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  colorClass: string;
}

export interface ServicePageHeroProps {
  backHref: string;
  backLabel: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  topBadge: HeroBadge;
  bottomBadge: HeroBadge;
  stats: Stat[];
  /** When set, overrides the default hero primary CTA label */
  primaryCtaLabel?: string;
  /** Override default `text-[#4EB3E8]` on the second title line */
  titleHighlightClassName?: string;
  /** Override default top-left radial glow (Tailwind gradient stops) */
  topLeftGlowClassName?: string;
}

export interface ServicePageSectionProps {
  headingGray: string;
  headingWhite: string;
  subtitle: string;
  headingTail?: string;
}

export interface CTAProps {
  headingTop: string;
  headingBottom: string;
  description: string;
  /** When set, overrides the default CTA primary button label */
  primaryCtaLabel?: string;
  /** Use #006ea3 CTA surface, heading accent, and primary button (pages that used teal) */
  tealAccent?: boolean;
  /** Stronger teal backdrop (Flutter / MVP CTA style) */
  tealProminent?: boolean;
  /** When set, replaces default colored span for `headingBottom` (e.g. gradient text) */
  headingBottomClassName?: string;
  /** Secondary button (defaults: /our-work, "View Our Work") */
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  /** Stronger cyan backdrop (React Native page style) */
  cyanBoldBackdrop?: boolean;
}

export interface WhyNeedItem {
  title: string;
  description: string;
}

export interface WhyNeedProps {
  heading: string;
  headingHighlight: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  items: WhyNeedItem[];
}
