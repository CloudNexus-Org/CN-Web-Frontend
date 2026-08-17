import { Wallet, CreditCard, Landmark, BarChart3, Link2, ShieldCheck, Award, Zap, HeartHandshake, Brain, Database, Activity, Cpu, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
  IndustryServicesProps,
  IndustrySolutionsProps,
  IndustryProcessProps,
  IndustryWhyChooseProps,
  IndustryTechProps,
  ProductShowcaseProps,
  ExpertiseAccordionProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Fintech Software Development",
  subtitle: "Next-Gen Financial Technology",
  description: "Scalable financial technology solutions including digital wallets, payment gateways, lending platforms, and robo-advisory systems with PCI-DSS compliance.",
  heroImage: "/images/stock/stock-a1a452f828.jpg",
  accentColor: "#6366f1",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#6366f1",
  heading: "Financial Technology at Scale",
  descriptionLeft: "We build payment infrastructure and investment platforms that process billions in transactions with 99.99% uptime. From multi-acquirer payment gateways to robo-advisory platforms with AI portfolio optimization, our fintech solutions are built for security, compliance, and performance.",
  descriptionRight: "Our expertise includes PCI-DSS Level 1 certified payment systems, smart routing with fallback logic, AI-driven portfolio rebalancing, automated tax-loss harvesting, and multi-jurisdiction regulatory compliance engines that serve global financial markets.",
  highlights: [
      {
          "value": "$500M+",
          "label": "Annual volume"
      },
      {
          "value": "99.99%",
          "label": "Uptime"
      },
      {
          "value": "$200M+",
          "label": "AUM managed"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Fintech Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: Wallet, title: "Digital Wallets", description: "Secure digital wallet platforms with peer-to-peer transfers and multi-currency support." },
    { icon: CreditCard, title: "Payment Gateways", description: "Custom payment solutions with smart routing, fraud prevention, and global coverage." },
    { icon: Landmark, title: "Lending Platforms", description: "Digital lending solutions with automated credit scoring and loan management." },
    { icon: BarChart3, title: "Robo-Advisory", description: "AI-powered investment advisory platforms with automated portfolio management." },
    { icon: Link2, title: "Blockchain & Crypto", description: "Cryptocurrency exchange platforms, DeFi solutions, and blockchain integrations." },
    { icon: ShieldCheck, title: "RegTech Solutions", description: "Automated regulatory compliance, KYC/AML screening, and reporting engines." },
  ],
  accentColor: "#6366f1",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Digital Payments",
      description: "End-to-end payment processing solutions for businesses and consumers.",
      features: ["Payment processing", "QR code payments", "Recurring billing", "Multi-currency support", "Payment analytics"],
    },
    {
      title: "Neobanking",
      description: "Digital-first banking platforms with modern financial services.",
      features: ["Account management", "Card issuance", "Spending insights", "Savings tools", "Cashback rewards"],
    },
    {
      title: "Investment & Trading",
      description: "Trading platforms and investment apps for retail and institutional investors.",
      features: ["Stock trading", "Crypto exchange", "Portfolio management", "Market analytics", "Copy trading"],
    },
    {
      title: "Insurance Technology",
      description: "Digital insurance platforms streamlining policy management and claims.",
      features: ["Quote comparison", "Policy management", "Claims automation", "Risk assessment", "Agent portals"],
    },
  ],
  accentColor: "#6366f1",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Market & Compliance Research",
      description: "Identifying regulatory requirements across jurisdictions and product types.",
      icon: Search,
      highlights: [
        "Fintech regulatory landscape analysis",
        "Payment license & KYC requirement mapping",
        "Competitor product feature benchmarking",
        "User persona & transaction flow modeling",
      ],
    },
    {
      step: "02",
      title: "Product Design",
      description: "Architecting bank-grade security with encryption and multi-factor authentication.",
      icon: Palette,
      highlights: [
        "Trust-building UI pattern design",
        "One-tap payment flow prototyping",
        "Dark/light mode financial dashboards",
        "Micro-interaction & feedback design",
      ],
    },
    {
      step: "03",
      title: "Tech Architecture",
      description: "Building transaction engines, ledgers, and financial processing systems.",
      icon: Settings,
      highlights: [
        "Real-time ledger & transaction engine design",
        "Payment gateway & banking API integration",
        "Zero-trust security architecture",
        "Multi-region deployment planning",
      ],
    },
    {
      step: "04",
      title: "Sprint Development",
      description: "Connecting with banking APIs, payment networks, and financial data providers.",
      icon: Code2,
      highlights: [
        "2-week sprints with fintech domain experts",
        "Automated compliance rule testing",
        "API-first development with sandbox environments",
        "Continuous deployment with canary releases",
      ],
    },
    {
      step: "05",
      title: "Security & Launch",
      description: "PCI-DSS certification, penetration testing, and regulatory audit preparation.",
      icon: ShieldCheck,
      highlights: [
        "SOC 2 Type II audit preparation",
        "End-to-end encryption verification",
        "Stress testing at 20x expected volume",
        "Staged rollout with real-time monitoring",
      ],
    },
    {
      step: "06",
      title: "Scale & Optimize",
      description: "Controlled rollout with monitoring, incident response, and compliance reporting.",
      icon: Rocket,
      highlights: [
        "Transaction success rate optimization",
        "User acquisition funnel analytics",
        "AI-driven fraud pattern detection",
        "Monthly product iteration cycles",
      ],
    },
  ],
  accentColor: "#6366f1",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Fintech Specialists", description: "Built financial platforms processing billions in transaction volume." },
    { icon: Zap, title: "Lightning Fast", description: "Sub-100ms transaction processing with 99.99% uptime guarantee." },
    { icon: ShieldCheck, title: "Compliant & Secure", description: "PCI-DSS Level 1, SOC 2 Type II, and multi-jurisdiction compliance." },
    { icon: HeartHandshake, title: "Startup to Scale", description: "From MVP to enterprise-grade, we grow with your fintech vision." },
  ],
  accentColor: "#6366f1",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI & Risk Engine", description: "Machine learning for fraud detection, credit scoring, and risk assessment." },
    { icon: Database, title: "Blockchain & DLT", description: "Distributed ledger technology for transparent and immutable transactions." },
    { icon: ShieldCheck, title: "Security Stack", description: "HSM, tokenization, and zero-knowledge proofs for maximum data protection." },
    { icon: Activity, title: "Real-Time Processing", description: "Event-driven architecture processing thousands of transactions per second." },
    { icon: Cpu, title: "Open Banking APIs", description: "PSD2 compliant APIs enabling seamless banking and payment integrations." },
  ],
  accentColor: "#6366f1",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Specialized FinTech Engineering Expertise",
  subtitle: "We architect compliant, scalable financial technology platforms that combine speed-to-market with institutional-grade security and reliability.",
  items: [
    {
      title: "Regulatory Sandbox & Licensing Strategy",
      description: "We help fintech startups navigate regulatory landscapes — from sandbox applications and e-money licensing to compliance roadmaps. Our legal-tech partnerships ensure you launch with the right regulatory framework."
    },
    {
      title: "Banking-as-a-Service Integration & Orchestration",
      description: "We integrate BaaS providers like Galileo, Synapse, and Marqeta into your stack — handling KYC flows, ledger management, card issuance, and settlement while you focus on the customer experience."
    },
    {
      title: "Real-Time Payment Processing Infrastructure",
      description: "Our payment infrastructure handles millions of transactions with sub-100ms latency. We build multi-gateway orchestration, smart routing, and automated reconciliation for domestic and cross-border payments."
    },
    {
      title: "Alternative Credit Scoring & ML Underwriting",
      description: "We develop proprietary scoring models using alternative data — utility payments, social signals, transaction history — to assess creditworthiness for underbanked populations with higher accuracy than traditional bureau scores."
    },
    {
      title: "Crypto & Digital Asset Platform Development",
      description: "We build custodial and non-custodial crypto platforms with hot/cold wallet management, exchange integrations, and DeFi protocol connectivity. Our solutions support multi-chain operations with institutional security standards."
    },
    {
      title: "FinTech Compliance Automation & RegTech Solutions",
      description: "Our RegTech modules automate transaction monitoring, suspicious activity detection, and regulatory filing. We build configurable compliance engines that adapt to evolving regulations across jurisdictions."
    }
  ],
  accentColor: "#6366f1"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#6366f1",
  heading: "FinTech Products We Engineer for Every Use Case",
  subtitle: "From neobanks and lending platforms to payment processors and crypto exchanges — we deliver compliant, scalable fintech solutions.",
  products: [
    {
      title: "Neobank & Digital Wallet",
      description: "We architect cloud-native neobanking platforms with virtual card issuance, peer-to-peer transfers, and embedded financial services. Our solutions are built for rapid launch with BaaS integrations and full regulatory compliance.",
      highlights: [
        "Virtual & physical card issuance",
        "P2P transfers & bill splitting",
        "Embedded savings & micro-investing",
        "BaaS partner integration framework",
        "Real-time transaction notifications"
      ],
      timelineLabel: "Neobank Architecture",
      timeline: [
        {
          title: "Account Engine",
          detail: "KYC onboarding, multi-currency wallets, and ledger management"
        },
        {
          title: "Card Issuance",
          detail: "Virtual/physical cards with spending controls and instant freeze"
        },
        {
          title: "Payments Hub",
          detail: "P2P transfers, bill pay, and merchant payment processing"
        },
        {
          title: "Financial Wellness",
          detail: "Spend analytics, savings goals, and round-up micro-investing"
        }
      ]
    },
    {
      title: "Lending & Credit Platforms",
      description: "Our lending platforms automate the entire loan lifecycle — from application and underwriting to disbursement and collections. We integrate alternative data scoring, e-signatures, and automated compliance checks for faster, smarter lending decisions.",
      highlights: [
        "AI-powered credit scoring models",
        "Automated loan origination workflows",
        "Alternative data underwriting",
        "Digital document signing & verification",
        "Collections & recovery automation"
      ],
      timelineLabel: "Lending Engine",
      timeline: [
        {
          title: "Application Portal",
          detail: "Multi-channel intake, document upload, and pre-qualification checks"
        },
        {
          title: "Decisioning Engine",
          detail: "ML credit models, fraud signals, and automated approval workflows"
        },
        {
          title: "Disbursement & Servicing",
          detail: "Multi-rail payouts, repayment scheduling, and account management"
        },
        {
          title: "Collections Suite",
          detail: "Delinquency tracking, payment plans, and regulatory-compliant recovery"
        }
      ]
    },
    {
      title: "Payment Processing Solutions",
      description: "We build PCI-DSS compliant payment infrastructure supporting multi-gateway orchestration, cross-border settlements, and real-time fraud screening. Our platforms handle high-volume transactions with sub-second processing latency.",
      highlights: [
        "Multi-gateway payment orchestration",
        "Cross-border settlement & FX management",
        "Real-time fraud scoring & 3DS2",
        "Recurring billing & subscription management",
        "Merchant onboarding & payout splits"
      ],
      timelineLabel: "Payments Infrastructure",
      timeline: [
        {
          title: "Gateway Orchestration",
          detail: "Smart routing across Stripe, Adyen, and local processors"
        },
        {
          title: "Fraud Prevention",
          detail: "ML-based transaction scoring, velocity checks, and device fingerprinting"
        },
        {
          title: "Settlement Engine",
          detail: "Multi-currency netting, FX conversion, and automated reconciliation"
        },
        {
          title: "Merchant Dashboard",
          detail: "Transaction analytics, payout tracking, and dispute management"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Fintech",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your fintech needs.",
  accentColor: "#6366f1",
};

export const projects: Project[] = [
  {
    id: "paybridge",
    tag: "Payment Gateway",
    tagColor: "bg-[#6366f1]/15 text-[#6366f1] border-[#6366f1]/30",
    company: "PayBridge",
    industry: "Fintech",
    headline: "Unified payment gateway processing $500M+ annually with 99.99% uptime.",
    challenge: "Supporting 50+ payment methods across regions. PCI-DSS Level 1 compliance. Sub-200ms transaction processing.",
    solution: "Multi-acquirer routing for optimal success rates. PCI-DSS Level 1 certified infrastructure. Smart retry logic with fallback routing.",
    duration: "100 days",
    accentColor: "#6366f1",
    metrics: [
      { value: 500, suffix: "M+", label: "Annual volume ($)" },
      { value: 99.99, suffix: "%", label: "Uptime" },
      { value: 150, suffix: "ms", label: "Avg latency" },
    ],
    timeline: [
      { phase: "Gateway Architecture", detail: "Multi-acquirer routing, tokenization" },
      { phase: "PCI Compliance", detail: "Level 1 certification, encryption, audits" },
      { phase: "Smart Routing", detail: "Success rate optimization, retry logic" },
      { phase: "Merchant Dashboard", detail: "Real-time analytics, settlement tracking" },
    ],
  },
  {
    id: "wealthwise",
    tag: "Investment Platform",
    tagColor: "bg-[#6366f1]/15 text-[#6366f1] border-[#6366f1]/30",
    company: "WealthWise",
    industry: "Fintech",
    headline: "Robo-advisory investment platform managing $200M+ AUM with AI portfolio optimization.",
    challenge: "Automated portfolio rebalancing at scale. Regulatory compliance across jurisdictions. Tax-loss harvesting complexity.",
    solution: "AI-driven portfolio allocation with risk profiling. Automated tax-loss harvesting. Multi-jurisdiction regulatory compliance engine.",
    duration: "90 days",
    accentColor: "#6366f1",
    metrics: [
      { value: 200, suffix: "M+", label: "AUM ($)" },
      { value: 12, suffix: "%", label: "Avg annual return" },
      { value: 100, suffix: "%", label: "Compliant" },
    ],
    timeline: [
      { phase: "Risk Profiling", detail: "User questionnaire, risk score algorithm" },
      { phase: "Portfolio Engine", detail: "AI allocation, automated rebalancing" },
      { phase: "Tax Optimization", detail: "Tax-loss harvesting, gain deferral" },
      { phase: "Compliance & Reporting", detail: "Regulatory engine, investor reports" },
    ],
  },
];

