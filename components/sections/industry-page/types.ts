import type { ReactNode } from "react";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface Metric {
  value: number;
  suffix: string;
  label: string;
}

export interface TimelineStep {
  phase: string;
  detail: string;
}

export interface Project {
  id: string;
  tag: string;
  tagColor: string;
  company: string;
  industry: string;
  headline: string;
  challenge: string;
  solution: string;
  duration: string;
  metrics: Metric[];
  timeline: TimelineStep[];
  accentColor: string;
}

export interface IndustryHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  heroImage?: string;
  backHref?: string;
  backLabel?: string;
  accentColor?: string;
}

export interface IntroHighlight {
  value: string;
  label: string;
}

export interface IndustryIntroProps {
  heading: string;
  descriptionLeft: string;
  descriptionRight: string;
  highlights: IntroHighlight[];
  accentColor?: string;
}

export interface ServiceCardItem {
  icon: IconComponent;
  title: string;
  description: string;
}

export interface IndustryServicesProps {
  heading: string;
  subtitle?: string;
  services: ServiceCardItem[];
  accentColor?: string;
}

export interface SolutionItem {
  title: string;
  description: string;
  features: string[];
}

export interface IndustrySolutionsProps {
  heading: string;
  subtitle?: string;
  solutions: SolutionItem[];
  accentColor?: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  icon?: IconComponent;
  highlights?: string[];
}

export interface IndustryProcessProps {
  heading: string;
  subtitle?: string;
  steps: ProcessStepItem[];
  accentColor?: string;
}

export interface WhyChooseItem {
  icon: IconComponent;
  title: string;
  description: string;
}

export interface IndustryWhyChooseProps {
  heading?: string;
  subtitle?: string;
  items: WhyChooseItem[];
  accentColor?: string;
}

export interface TechItem {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface IndustryTechProps {
  heading?: string;
  subtitle?: string;
  technologies: TechItem[];
  accentColor?: string;
}

export interface IndustryCTAProps {
  headingTop: string;
  headingBottom: string;
  description: string;
  primaryLink?: string;
  primaryLabel?: string;
  secondaryLink?: string;
  secondaryLabel?: string;
  accentColor?: string;
}

export interface IndustryListItem {
  icon: IconComponent;
  title: string;
  description: string;
  href: string;
  highlights: string[];
}

export interface ExpertiseItem {
  title: string;
  description: string;
}

export interface ExpertiseAccordionProps {
  heading: string;
  subtitle?: string;
  items: ExpertiseItem[];
  accentColor?: string;
}

export interface ProductShowcaseStep {
  title: string;
  detail: string;
}

export interface ProductShowcaseItem {
  title: string;
  description: string;
  highlights: string[];
  timelineLabel?: string;
  timeline: ProductShowcaseStep[];
}

export interface ProductShowcaseProps {
  heading: string;
  subtitle?: string;
  products: ProductShowcaseItem[];
  accentColor?: string;
}
