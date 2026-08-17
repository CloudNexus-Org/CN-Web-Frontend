import { Landmark, ShieldCheck, FileText, CreditCard, BarChart3, Lock, Award, Zap, HeartHandshake, Brain, Database, Activity, Cpu, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "Banking & Finance Software",
  subtitle: "Securing Financial Operations",
  description: "World-class digital banking, finance and insurance services with AI-powered fraud detection, automated claims processing, and PCI-DSS compliant systems.",
  heroImage: "/images/stock/stock-d488a75ddc.jpg",
  accentColor: "#4EB3E8",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#4EB3E8",
  heading: "Securing Financial Futures",
  descriptionLeft: "We develop fintech solutions with bank-grade security, AI-powered fraud detection, and automated claims processing. Our platforms handle sensitive financial data with PCI-DSS compliance, biometric authentication, and end-to-end encryption.",
  descriptionRight: "From AI-driven spending analysis and anomaly detection to OCR-powered document processing and automated insurance workflows, we help financial institutions modernize operations, reduce risk, and serve customers faster.",
  highlights: [
      {
          "value": "95%",
          "label": "Fraud detection rate"
      },
      {
          "value": "48hrs",
          "label": "Avg claim settlement"
      },
      {
          "value": "100%",
          "label": "PCI-DSS compliant"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Banking & Finance Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: Landmark, title: "Digital Banking Platforms", description: "Modern digital banking solutions with mobile-first design and seamless user experiences." },
    { icon: ShieldCheck, title: "Fraud Detection Systems", description: "AI-powered real-time fraud detection and prevention with behavioral analytics." },
    { icon: FileText, title: "Claims Processing", description: "Automated claims processing engines reducing turnaround time and operational costs." },
    { icon: CreditCard, title: "Payment Solutions", description: "Secure payment gateway integration with multi-currency support and PCI compliance." },
    { icon: BarChart3, title: "Risk Assessment", description: "Advanced risk modeling and credit scoring using machine learning algorithms." },
    { icon: Lock, title: "Compliance & RegTech", description: "Regulatory compliance engines for KYC/AML, GDPR, and financial reporting." },
  ],
  accentColor: "#4EB3E8",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Digital Banking",
      description: "Modern digital banking experiences across web and mobile platforms.",
      features: ["Account management", "Fund transfers", "Bill payments", "Card management", "Personal financial management"],
    },
    {
      title: "Insurance Technology",
      description: "End-to-end insurance solutions from quote to claim settlement.",
      features: ["Policy management", "Automated underwriting", "Claims automation", "Agent portals", "Customer self-service"],
    },
    {
      title: "Wealth Management",
      description: "Robo-advisory and portfolio management platforms for investment firms.",
      features: ["Portfolio analytics", "Automated rebalancing", "Risk profiling", "Investment recommendations", "Regulatory reporting"],
    },
    {
      title: "Lending Platforms",
      description: "Digital lending solutions with automated credit decisioning and loan management.",
      features: ["Loan origination", "Credit scoring models", "Document verification", "Loan servicing", "Collection management"],
    },
  ],
  accentColor: "#4EB3E8",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Mapping business requirements alongside regulatory compliance needs.",
      icon: Search,
      highlights: [
        "Regulatory compliance mapping (PCI-DSS, SOX)",
        "Core banking workflow assessment",
        "Risk tolerance & security baseline review",
        "Third-party API & gateway evaluation",
      ],
    },
    {
      step: "02",
      title: "UX/UI Design",
      description: "Designing secure architecture with encryption, tokenization, and access controls.",
      icon: Palette,
      highlights: [
        "Secure-by-design user flows",
        "Mobile banking interface prototyping",
        "Accessibility & multi-language support",
        "Brand-aligned design system",
      ],
    },
    {
      step: "03",
      title: "Architecture Design",
      description: "Building robust financial platforms with transaction processing and reporting.",
      icon: Settings,
      highlights: [
        "Microservices & event-driven architecture",
        "Multi-layer encryption strategy",
        "High-availability infrastructure planning",
        "Disaster recovery & failover design",
      ],
    },
    {
      step: "04",
      title: "Secure Development",
      description: "Connecting with core banking, payment networks, and credit bureaus.",
      icon: Code2,
      highlights: [
        "Sprint-based delivery with security gates",
        "Automated SAST/DAST scanning",
        "Code review with compliance checklists",
        "Feature-flag controlled releases",
      ],
    },
    {
      step: "05",
      title: "Audit & Launch",
      description: "Penetration testing, vulnerability assessment, and compliance certification.",
      icon: ShieldCheck,
      highlights: [
        "Penetration testing & threat modeling",
        "PCI-DSS compliance certification",
        "Load testing at 15x peak traffic",
        "Blue-green deployment strategy",
      ],
    },
    {
      step: "06",
      title: "Continuous Improvement",
      description: "Secure deployment with real-time monitoring and incident response.",
      icon: Rocket,
      highlights: [
        "Real-time fraud monitoring dashboards",
        "Regulatory update patching cycles",
        "Performance tuning & cost optimization",
        "Quarterly security reviews & audits",
      ],
    },
  ],
  accentColor: "#4EB3E8",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "FinTech Expertise", description: "Deep expertise in building secure, compliant financial technology solutions." },
    { icon: Zap, title: "Real-Time Processing", description: "High-throughput transaction processing with sub-second response times." },
    { icon: ShieldCheck, title: "Bank-Grade Security", description: "PCI-DSS, SOC 2, and ISO 27001 compliant security frameworks." },
    { icon: HeartHandshake, title: "Regulatory Ready", description: "Built-in compliance for KYC, AML, GDPR, and industry-specific regulations." },
  ],
  accentColor: "#4EB3E8",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI & Machine Learning", description: "Fraud detection, credit scoring, and personalized financial recommendations." },
    { icon: Database, title: "Blockchain", description: "Distributed ledger technology for secure transactions and smart contracts." },
    { icon: ShieldCheck, title: "Cybersecurity", description: "Advanced threat detection, encryption, and zero-trust security architecture." },
    { icon: Activity, title: "Real-Time Analytics", description: "Transaction monitoring, risk dashboards, and regulatory reporting." },
    { icon: Cpu, title: "Cloud Infrastructure", description: "Scalable cloud platforms with disaster recovery and high availability." },
  ],
  accentColor: "#4EB3E8",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Deep Financial Services Expertise",
  subtitle: "We combine regulatory knowledge with cutting-edge technology to build secure, compliant financial platforms that drive growth and customer trust.",
  items: [
    {
      title: "PCI-DSS & SOX Compliance Architecture",
      description: "We design financial systems with bank-grade encryption, tokenization, and segregation of duties. Our compliance-first approach ensures your platform meets PCI-DSS, SOX, and regional regulatory requirements from the ground up."
    },
    {
      title: "Core Banking & Payment System Integration",
      description: "We build integration layers connecting your platform with SWIFT, SEPA, ACH, and real-time payment networks. Our middleware handles message translation, retry logic, and reconciliation across multiple banking partners."
    },
    {
      title: "AI-Powered Risk Assessment & Fraud Detection",
      description: "Our ML models analyze transaction patterns, device fingerprints, and behavioral signals in real-time to score risk and flag anomalies — reducing fraud losses while minimizing false positives that frustrate legitimate customers."
    },
    {
      title: "Regulatory Reporting & KYC/AML Automation",
      description: "We automate KYC verification, sanctions screening, and suspicious activity reporting with configurable rule engines. Our solutions generate audit-ready regulatory reports for central banks and financial authorities."
    },
    {
      title: "Open Banking API Ecosystem Development",
      description: "We architect PSD2-compliant open banking APIs that enable third-party integrations while maintaining security and data sovereignty. Our API gateways handle authentication, rate limiting, and consent management."
    },
    {
      title: "Financial Platform Security Operations & Monitoring",
      description: "Our dedicated security operations cover real-time threat monitoring, penetration testing, incident response, and continuous compliance auditing to protect your financial platform and customer data 24/7."
    }
  ],
  accentColor: "#4EB3E8"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#4EB3E8",
  heading: "Financial Products We Build for Every Institution",
  subtitle: "From retail banks and insurance carriers to wealth managers and credit unions — we engineer secure, compliant financial platforms for every segment.",
  products: [
    {
      title: "Digital Banking Platforms",
      description: "We create next-generation digital banking experiences that combine core banking functionality with modern UX. Our platforms support multi-currency accounts, real-time payments, and advanced fraud detection — all built on PCI-DSS compliant infrastructure.",
      highlights: [
        "Real-time payment processing & settlement",
        "Multi-currency account management",
        "Advanced fraud detection & AML screening",
        "Open Banking API ecosystem",
        "Biometric authentication & 2FA security"
      ],
      timelineLabel: "Banking Architecture",
      timeline: [
        {
          title: "Core Banking Layer",
          detail: "Account ledger, transaction engine, and interest calculation modules"
        },
        {
          title: "Payment Gateway",
          detail: "SWIFT, SEPA, ACH, and real-time gross settlement integrations"
        },
        {
          title: "Risk & Compliance",
          detail: "KYC verification, AML screening, and regulatory reporting automation"
        },
        {
          title: "Customer Experience",
          detail: "Mobile-first dashboards, spend insights, and financial goal tracking"
        }
      ]
    },
    {
      title: "Insurance Technology (InsurTech)",
      description: "Our InsurTech solutions digitize the entire insurance lifecycle — from policy origination and underwriting to claims processing and renewal. We leverage AI for risk scoring, OCR for document processing, and telematics for usage-based insurance models.",
      highlights: [
        "AI-powered risk assessment & underwriting",
        "Automated claims processing with OCR",
        "Usage-based insurance via telematics",
        "Agent & broker portal management",
        "Policy lifecycle automation"
      ],
      timelineLabel: "InsurTech Modules",
      timeline: [
        {
          title: "Policy Administration",
          detail: "Product configuration, rating engine, and multi-channel distribution"
        },
        {
          title: "Claims Automation",
          detail: "FNOL intake, AI damage assessment, and straight-through processing"
        },
        {
          title: "Underwriting Intelligence",
          detail: "ML risk models, medical data parsing, and actuarial dashboards"
        },
        {
          title: "Customer Self-Service",
          detail: "Policy management, claims tracking, and renewal notifications"
        }
      ]
    },
    {
      title: "Wealth & Investment Management",
      description: "We build sophisticated wealth management platforms with robo-advisory capabilities, portfolio analytics, and multi-asset trading. Our solutions serve private banks, RIAs, and family offices with institutional-grade security and compliance.",
      highlights: [
        "Robo-advisory & goal-based planning",
        "Multi-asset portfolio management",
        "Real-time market data integration",
        "Regulatory compliance (MiFID II, SEC)",
        "Client relationship & reporting tools"
      ],
      timelineLabel: "WealthTech Stack",
      timeline: [
        {
          title: "Portfolio Engine",
          detail: "Asset allocation, rebalancing algorithms, and tax-loss harvesting"
        },
        {
          title: "Advisory Platform",
          detail: "Risk profiling, goal modeling, and automated investment proposals"
        },
        {
          title: "Trading Infrastructure",
          detail: "Multi-exchange connectivity, order management, and execution analytics"
        },
        {
          title: "Client Reporting",
          detail: "Performance attribution, fee transparency, and regulatory disclosures"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Banking, Finance & Insurance",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your banking, finance & insurance needs.",
  accentColor: "#4EB3E8",
};

export const projects: Project[] = [
  {
    id: "finsmart",
    tag: "AI-Powered Finance",
    tagColor: "bg-[#4EB3E8]/15 text-[#4EB3E8] border-[#4EB3E8]/30",
    company: "FinSmart",
    industry: "Banking & Finance",
    headline: "AI-powered financial management app with fraud detection and smart budgeting.",
    challenge: "Secure handling of sensitive financial data. Building accurate AI models for fraud detection.",
    solution: "Cross-platform app with bank-grade encryption, biometric auth. ML algorithms for spending analysis and anomaly detection. Seamless digital wallet integration.",
    duration: "80 days",
    accentColor: "#4EB3E8",
    metrics: [
      { value: 95, suffix: "%", label: "Fraud detection rate" },
      { value: 40, suffix: "%", label: "Better money mgmt" },
      { value: 100, suffix: "%", label: "Data encryption" },
    ],
    timeline: [
      { phase: "Security Architecture", detail: "Bank-grade encryption, biometric auth" },
      { phase: "AI Model Training", detail: "Spending analysis, anomaly detection" },
      { phase: "Payment Integration", detail: "Digital wallets, payment gateways" },
      { phase: "Launch & Monitor", detail: "Cross-platform release, fraud monitoring" },
    ],
  },
  {
    id: "claimfast",
    tag: "InsurTech",
    tagColor: "bg-[#4EB3E8]/15 text-[#4EB3E8] border-[#4EB3E8]/30",
    company: "ClaimFast",
    industry: "Insurance",
    headline: "Automated insurance claims processing reducing settlement time from 30 days to 48 hours.",
    challenge: "Manual claims processing causing month-long delays. Document verification bottlenecks. Fraudulent claims costing millions.",
    solution: "AI-powered document extraction with OCR. Automated fraud scoring with ML. Digital-first claims journey with real-time status tracking.",
    duration: "65 days",
    accentColor: "#4EB3E8",
    metrics: [
      { value: 97, suffix: "%", label: "Processing automated" },
      { value: 48, suffix: " hrs", label: "Avg settlement" },
      { value: 85, suffix: "%", label: "Fraud caught" },
    ],
    timeline: [
      { phase: "OCR Pipeline", detail: "Document extraction, classification, validation" },
      { phase: "Fraud Detection", detail: "ML scoring model, pattern recognition" },
      { phase: "Claims Workflow", detail: "Digital-first journey, automated approvals" },
      { phase: "Integration & Launch", detail: "Core insurance system connectors" },
    ],
  },
];

