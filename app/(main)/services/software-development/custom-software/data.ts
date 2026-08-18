import { Code2, Workflow, BarChart3, Shield, Globe, Smartphone, Link2, Terminal, ClipboardList, Settings, Palette, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/software-development",
  backLabel: "Back to Software Development",
  titleTop: "Custom",
  titleBottom: "Software",
  description: "We offer tailored software solutions that automate processes, scale products, deliver real-time\r\n                analytics, and drive agile innovation — built specifically for your unique business requirements.",
  heroImage: "/images/stock/stock-1e05b0d347.jpg",
  heroImageAlt: "Bespoke",
  topBadge: { icon: null as any, title: "Bespoke", subtitle: "Custom-built", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "100+ Projects", subtitle: "Delivered on time", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Custom projects shipped" },
  { value: 10, suffix: "+", label: "Years of delivery experience" },
  { value: 99, suffix: "%", label: "On-time milestone rate" },
  { value: 50, suffix: "+", label: "Integration endpoints built" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Custom", headingWhite: "Software", subtitle: "Tailored applications, integrations, and platforms — engineered for your workflows, data, and growth targets." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Custom Software", subtitle: "From discovery to deployment — structured delivery with transparency, quality gates, and ongoing support." };
export const techHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "Technologies", subtitle: "Modern stacks across frontend, backend, data, cloud, and delivery tooling for reliable custom software products." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "Custom Software?", description: "Tell us about your business challenges and we&apos;ll design a tailored software solution that drives real results." };

export const services: ServiceOffering[] = [{
    icon: Workflow,
    title: "Business Process Automation",
    titleEmphasis: "Automation",
    titleRest: "Business Process",
    description:
      "Automate repetitive workflows, approvals, and data processing with intelligent software that reduces manual effort and errors.",
    features: ["Workflow engines", "Rule-based logic", "API integration"],
  },
  {
    icon: Globe,
    title: "Custom Web Applications",
    titleEmphasis: "Applications",
    titleRest: "Custom Web",
    description:
      "Full-stack web applications with modern frameworks, responsive design, and cloud-native infrastructure for reliability at scale.",
    features: ["React/Next.js", "Node.js backend", "Cloud-native"],
  },
  {
    icon: Smartphone,
    title: "Custom Mobile Applications",
    titleEmphasis: "Applications",
    titleRest: "Custom Mobile",
    description:
      "Native and cross-platform mobile apps tailored to your business workflows with offline support and push notifications.",
    features: ["iOS & Android", "Offline-first", "Push notifications"],
  },
  {
    icon: Link2,
    title: "Integration Solutions",
    titleEmphasis: "Solutions",
    titleRest: "Integration",
    description:
      "Connect disparate systems with custom APIs, middleware, and integration platforms for seamless data flow across your organization.",
    features: ["REST & GraphQL", "Middleware", "ETL pipelines"],
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Platforms",
    titleEmphasis: "Platforms",
    titleRest: "Real-Time Analytics",
    description:
      "Custom dashboards, reporting engines, and data visualization tools that deliver actionable insights from your business data.",
    features: ["Live dashboards", "Custom reports", "Data visualization"],
  },
  {
    icon: Terminal,
    title: "Custom API Development",
    titleEmphasis: "Development",
    titleRest: "Custom API",
    description:
      "Versioned REST and GraphQL APIs with documentation, mocking, and consumer-driven tests to prevent breaking changes.",
    features: ["API versioning", "Auto-docs", "Rate limiting"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Requirement Analysis",
    description:
      "Deep-dive workshops to understand your business processes, pain points, and define clear success metrics.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Solution Architecture",
    description:
      "Technical blueprints with data models, API contracts, security considerations, and infrastructure planning.",
    icon: Settings,
  },
  {
    step: "03",
    title: "UI/UX Design",
    description:
      "User-centric wireframes, prototypes, and visual designs that prioritize usability and brand consistency.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Agile Development",
    description:
      "Iterative development sprints with continuous integration, code reviews, and demo sessions every two weeks.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Quality Assurance",
    description:
      "Comprehensive testing — functional, performance, security, and user acceptance — before every release.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Deployment & Support",
    description:
      "Production deployment with monitoring, documentation, training, and ongoing maintenance and feature evolution.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: ".NET", logo: `${DEVICON}/dot-net/dot-net-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "CI/CD", logo: `${DEVICON}/githubactions/githubactions-original.svg` },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", logo: `${DEVICON}/git/git-original.svg` },
      { name: "Jira", logo: `${DEVICON}/jira/jira-original.svg` },
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Postman", logo: `${DEVICON}/postman/postman-original.svg` },
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "Sentry", logo: `${DEVICON}/sentry/sentry-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Domain Expertise",
    description:
      "Deep industry knowledge across healthcare, fintech, logistics, and e-commerce to build solutions that truly fit.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Software designed to grow with your business — from startup MVP to enterprise-grade platform.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Agile methodology with 2-week sprints, continuous delivery, and transparent progress tracking.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Partnership",
    description:
      "From initial concept through development, launch, and long-term maintenance — we're with you at every step.",
  },];
