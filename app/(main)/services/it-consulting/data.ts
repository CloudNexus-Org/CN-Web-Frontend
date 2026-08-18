import { BarChart3, Briefcase, Building2, Clock, Cloud, CreditCard, Factory, GraduationCap, Headphones, HeartHandshake, Layers, Monitor, Network, Rocket, Server, Settings, ShieldCheck, ShoppingCart, Stethoscope, TrendingUp, Truck, Users } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "IT",
  titleBottom: "Consulting",
  description: "Apply our specialized technology depth across digital transformation to craft near- and long-range plans that future-proof your organization and maximize return on investment.",
  heroImage: "/images/stock/stock-e1f7697fb3.jpg",
  heroImageAlt: "IT consulting services",
  topBadge: { icon: null as any, title: "IT Strategy", subtitle: "End-to-end", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "ROI Driven", subtitle: "Measurable results", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "End-to-end capabilities shaped around the outcomes your business requires." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A proven operating model that safeguards quality, preserves transparency, and honors committed timelines." };
export const techHeading: ServicePageSectionProps = { headingGray: "Engineered with", headingWhite: "Contemporary Tooling", subtitle: "Best-in-class platforms and frameworks underpinning every engagement we deliver." };
export const ctaProps: CTAProps = { headingTop: "Fortify Your Business for What Comes Next with", headingBottom: "IT Consulting Expertise", description: "Scaling fast yet uncertain which technology route to take? Our complimentary IT consultation clarifies digital transformation and surfaces the solutions that align with your objectives." };

export const services: ServiceOffering[] = [
  { icon: Server, title: "IT Assessments", description: "A thorough review of your IT landscape, operational workflows, and underlying infrastructure to surface opportunities for improvement while strengthening security posture and operational efficiency.", features: ["Infrastructure audit", "Security evaluation", "Performance analysis"], href: "/services/it-consulting/it-assessments" , logos: ["python/python-original.svg", "linux/linux-original.svg", "nodejs/nodejs-original.svg"], accent: "#4299E1"},
  { icon: Network, title: "IT Strategy & Planning", description: "Forward-looking IT roadmapping and capital allocation counsel anchored to your objectives—so every technology decision is timed, scoped, and prioritized for maximum impact.", features: ["Technology roadmaps", "Investment planning", "Resource allocation"], href: "/services/it-consulting/it-strategy-planning" , logos: ["react/react-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg", "docker/docker-original.svg"], accent: "#4EB3E8"},
  { icon: Layers, title: "Digital Transformation Consulting", description: "Rigorous examination of how work gets done—paired with a practical modernization path—so transformation programs produce tangible, measurable business value.", features: ["Process analysis", "Digital roadmap", "Change management"], href: "/services/it-consulting/digital-transformation-consulting" , logos: ["kubernetes/kubernetes-original.svg", "docker/docker-original.svg", "terraform/terraform-original.svg"], accent: "#326CE5"},
  { icon: ShieldCheck, title: "Security Risk Assessments", description: "Surface security gaps, quantify exposure, and put proactive controls in place to safeguard the systems and data your operations depend on.", features: ["Vulnerability scanning", "Risk analysis", "Preventive measures"], href: "/services/it-consulting/security-risk-assessments" , logos: ["linux/linux-original.svg", "python/python-original.svg", "bash/bash-original.svg"], accent: "#E53E3E"},
  { icon: Cloud, title: "Cloud & Data Migration Services", description: "Define an optimal cloud and migration approach with seasoned guidance on platform fit, total-cost insight, and disciplined execution for a smooth transition.", features: ["Cloud strategy", "Data migration", "Platform selection"], href: "/services/it-consulting/cloud-data-migration" , logos: ["amazonwebservices/amazonwebservices-plain-wordmark.svg", "azure/azure-original.svg", "googlecloud/googlecloud-original.svg"], accent: "#FF9900"},
  { icon: Monitor, title: "Custom Web & Mobile App Development", description: "Mission-critical web and mobile solutions engineered by senior practitioners—built to scale, differentiate, and compete in demanding markets.", features: ["Web applications", "Mobile applications", "Enterprise solutions"], href: "/services/it-consulting/custom-app-development" , logos: ["react/react-original.svg", "swift/swift-original.svg", "flutter/flutter-original.svg"], accent: "#61DAFB"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Analyze", description: "Our analysts diagnose root causes, frame the challenge clearly, and recommend an approach that simplifies automation and improves day-to-day usability for your teams.", icon: Settings },
  { step: "02", title: "Strategies", description: "Teams architect the roadmap for web and application delivery and craft marketing strategies that put modern technology to work for your brand.", icon: Rocket },
  { step: "03", title: "Perform", description: "To uphold quality, specialists scrutinize workflows, maintain visibility into delivery, and address risks early—before they affect outcomes.", icon: BarChart3 },
  { step: "04", title: "Implement", description: "Roll out capabilities in measured phases with rigorous testing and integration validation so adoption proceeds smoothly company-wide.", icon: Layers },
  { step: "05", title: "Monitor", description: "Ongoing observability and performance oversight keep environments running efficiently and interruptions rare.", icon: Network },
  { step: "06", title: "Optimize", description: "Periodic assessments, tuning, and strategic recalibration ensure infrastructure and investments continue to match shifting priorities.", icon: Server },];

export const techCategories: TechCategory[] = [
  { label: "Cloud Platforms", items: [
    { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
    { name: "Google Cloud", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
  ] },
  { label: "Infrastructure", items: [
    { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
    { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
    { name: "Linux", logo: `${DEVICON}/linux/linux-original.svg` },
  ] },
  { label: "Development", items: [
    { name: "React", logo: `${DEVICON}/react/react-original.svg` },
    { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
    { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
  ] },
  { label: "Data & Analytics", items: [
    { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
    { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` },
  ] },
  { label: "Security", items: [
    { name: "Git", logo: `${DEVICON}/git/git-original.svg` },
    { name: "Jira", logo: `${DEVICON}/jira/jira-original.svg` },
    { name: "Confluence", logo: `${DEVICON}/confluence/confluence-original.svg` },
    { name: "GitHub", logo: `${DEVICON}/github/github-original.svg` },
  ] },
];


export const whyNeedProps: WhyNeedProps = {
  heading: "IT Consulting Can",
  headingHighlight: "Drive Efficiency",
  subtitle: "Optimize your IT infrastructure, reduce operational costs, and build systems that support your business growth strategy.",
  image: "/images/stock/stock-32f19b7b62.jpg",
  imageAlt: "IT infrastructure consulting",
  items: [
    { title: "Infrastructure Cost Optimization", description: "Audit your current IT spend and eliminate waste. Right-size servers, consolidate licenses, and negotiate vendor contracts to cut costs by 30-50%." },
    { title: "System Integration", description: "Connect disconnected tools and platforms into a unified ecosystem. Eliminate manual data transfers, reduce errors, and give teams a single source of truth." },
    { title: "Cloud Migration Strategy", description: "Plan and execute migrations from on-premise to cloud with zero downtime. Choose the right cloud strategy — lift-and-shift, re-platform, or cloud-native rebuild." },
    { title: "IT Governance & Standards", description: "Establish frameworks for technology decisions, vendor management, and change control. Prevent shadow IT and ensure consistent practices across the organization." },
    { title: "Scalable IT Architecture", description: "Design infrastructure that grows with your business. Avoid the cycle of outgrowing systems and expensive emergency upgrades every 2-3 years." },
    { title: "Managed IT Services", description: "Offload day-to-day IT operations — monitoring, patching, support, and maintenance — so your internal team focuses on strategic initiatives that drive growth." },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Quick Project Delivery", description: "Expert consultants distill requirements, deploy the right tools and technologies, and execute efficiently—accelerating delivery without compromising rigor." },
  { icon: Clock, title: "Potential Cost Savings", description: "Veteran practitioners deliver faster with lean staffing—often surpassing in-house outcomes while furnishing greater hands-on expert support." },
  { icon: ShieldCheck, title: "Reduced Security Risks", description: "Experts find and remediate bugs and security weaknesses across systems and networks, backed by deep skill in governing external technical resources." },
  { icon: HeartHandshake, title: "Boost Productivity", description: "We absorb operational technical load so leadership can concentrate on revenue-generating work and longer-range strategy." },];

export const caseStudyProjects: Project[] = [
  {
    id: "factoryiq-it",
    tag: "IT Modernization",
    tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    company: "FactoryIQ",
    industry: "Manufacturing",
    headline: "IT infrastructure modernization enabling IoT deployment across 12 production lines.",
    challenge: "Legacy IT infrastructure unable to support IoT data volumes. Siloed systems.",
    solution: "IT assessment, cloud migration strategy, network upgrade, and infrastructure redesign supporting 1000+ IoT sensors.",
    duration: "45 days",
    metrics: [
      {
        value: 12,
        suffix: " lines",
        label: "Modernized"
      },
      {
        value: 60,
        suffix: "%",
        label: "Infra cost savings"
      },
      {
        value: 1000,
        suffix: "+",
        label: "IoT devices supported"
      }
    ],
    timeline: [
      {
        phase: "Infrastructure Audit",
        detail: "Current state assessment"
      },
      {
        phase: "Cloud Strategy",
        detail: "Migration planning, cost analysis"
      },
      {
        phase: "Network Design",
        detail: "IoT-ready network architecture"
      },
      {
        phase: "Implementation",
        detail: "Phased rollout with monitoring"
      }
    ],
    accentColor: "#f97316"
  }
];
