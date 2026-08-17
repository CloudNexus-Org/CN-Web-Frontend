import { ShoppingCart, Smartphone, Layers, CreditCard, Globe, ShieldCheck, Award, Zap, HeartHandshake, Brain, Database, Cpu, Activity, Eye, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "E-Commerce Software Development",
  subtitle: "Powering Online Commerce",
  description: "We offer end-to-end web and mobile app development services to take your eCommerce business to success with AI-driven personalization and seamless payment integration.",
  heroImage: "/images/ecommerce-delivery.png",
  accentColor: "#8b5cf6",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#8b5cf6",
  heading: "Powering E-Commerce at Scale",
  descriptionLeft: "We design and build high-performance e-commerce platforms that drive conversions and revenue growth. From headless commerce architectures to AI-powered product recommendations, our solutions handle millions of transactions with sub-second response times.",
  descriptionRight: "Our e-commerce expertise spans multi-vendor marketplaces, payment gateway integrations, inventory management systems, and personalization engines. We leverage technologies like Next.js, Node.js, Redis, and TensorFlow to deliver seamless shopping experiences across all channels.",
  highlights: [
      {
          "value": "10K+",
          "label": "Sellers onboarded"
      },
      {
          "value": "38%",
          "label": "Avg AOV increase"
      },
      {
          "value": "18ms",
          "label": "Inference latency"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our E-Commerce Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: ShoppingCart, title: "eCommerce Platform Development", description: "High-performance B2B and B2C storefronts built for rich catalogues, custom workflows, and growth at scale." },
    { icon: Smartphone, title: "eCommerce Mobile App", description: "Omnichannel mobile shopping experiences driving conversions and deepening brand loyalty on every device." },
    { icon: Layers, title: "Multi-Vendor Marketplace", description: "Robust marketplace platforms with frictionless buyer and seller journeys and built-in vendor management." },
    { icon: CreditCard, title: "Payment & Checkout", description: "Intelligent payment gateways with real-time fraud scoring and mobile-optimized one-tap checkout flows." },
    { icon: Globe, title: "Headless Commerce", description: "API-first composable architecture letting you swap or evolve any frontend independently." },
    { icon: ShieldCheck, title: "Enterprise eCommerce", description: "SEO-optimized enterprise portals that simplify complex operations and deliver conversion-focused experiences." },
  ],
  accentColor: "#8b5cf6",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "B2B Commerce",
      description: "Enterprise-grade B2B commerce platforms with custom pricing, bulk ordering, and account management.",
      features: ["Custom pricing & quotes", "Bulk order management", "Account hierarchy", "ERP/CRM integration", "Self-service portals"],
    },
    {
      title: "D2C Brands",
      description: "Direct-to-consumer storefronts with subscription models, loyalty programs, and personalized experiences.",
      features: ["Subscription commerce", "Loyalty & rewards", "Personalized recommendations", "Social commerce integration", "Customer analytics"],
    },
    {
      title: "Marketplace",
      description: "Multi-vendor marketplace solutions connecting buyers and sellers with seamless transaction management.",
      features: ["Vendor onboarding & management", "Commission & payout systems", "Rating & review engine", "Dispute resolution", "Multi-gateway payments"],
    },
    {
      title: "Omnichannel Retail",
      description: "Unified commerce experiences bridging online and offline channels for consistent customer journeys.",
      features: ["POS integration", "Inventory sync across channels", "Click & collect / BOPIS", "Unified customer profiles", "Cross-channel analytics"],
    },
  ],
  accentColor: "#8b5cf6",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Analysis & Discovery",
      description: "Deep-dive into your business model, catalogue structure, and customer journeys to define a winning strategy.",
      icon: Search,
      highlights: [
        "Stakeholder interviews & market benchmarking",
        "User persona mapping & journey analysis",
        "Competitor feature audit & gap identification",
        "Revenue model & KPI definition",
      ],
    },
    {
      step: "02",
      title: "UX/UI Design",
      description: "Conversion-focused wireframes and mobile-first layouts guiding shoppers from discovery to purchase.",
      icon: Palette,
      highlights: [
        "Interactive prototypes & click-through demos",
        "Mobile-first responsive layouts",
        "Accessibility & WCAG compliance checks",
        "Brand-aligned design system creation",
      ],
    },
    {
      step: "03",
      title: "Tech-Stack Selection",
      description: "Platform and stack recommendations matched to your scale, integration needs, and growth targets.",
      icon: Settings,
      highlights: [
        "Headless vs monolithic architecture evaluation",
        "Third-party integration compatibility review",
        "Performance & scalability benchmarking",
        "Security & compliance framework selection",
      ],
    },
    {
      step: "04",
      title: "Agile Development",
      description: "Sprint-based builds with modular releases — every feature tested, reviewed, and approved before merging.",
      icon: Code2,
      highlights: [
        "2-week sprint cycles with daily standups",
        "CI/CD pipelines for continuous delivery",
        "Code reviews & automated test coverage",
        "Feature-flag based progressive rollouts",
      ],
    },
    {
      step: "05",
      title: "QA & Launch",
      description: "Comprehensive testing, security audits, and phased production deployment with zero-downtime releases.",
      icon: ShieldCheck,
      highlights: [
        "Cross-browser & cross-device testing",
        "Load testing up to 10x projected traffic",
        "PCI-DSS & OWASP security audit",
        "Staged rollout with instant rollback support",
      ],
    },
    {
      step: "06",
      title: "Growth & Optimization",
      description: "Continuous A/B testing, conversion optimization, and data-driven feature enhancements post-launch.",
      icon: Rocket,
      highlights: [
        "Conversion funnel analysis & optimization",
        "A/B & multivariate experiment frameworks",
        "Performance monitoring & alerting",
        "Monthly growth reports & roadmap reviews",
      ],
    },
  ],
  accentColor: "#8b5cf6",
};

export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "350+ Stores Built", description: "Proven track record across B2B, B2C, marketplace, and D2C commerce models." },
    { icon: Zap, title: "Conversion Focused", description: "Every design decision is optimized for maximum conversion and revenue growth." },
    { icon: ShieldCheck, title: "Secure & Scalable", description: "PCI-DSS compliant platforms built to handle traffic spikes and global scale." },
    { icon: HeartHandshake, title: "End-to-End Support", description: "From strategy through launch and ongoing optimization, we're your commerce partner." },
  ],
  accentColor: "#8b5cf6",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI-Powered Personalization", description: "Smart product recommendations, dynamic pricing, and personalized shopping experiences." },
    { icon: Database, title: "Headless & Composable", description: "API-first architecture with microservices for maximum flexibility and performance." },
    { icon: Cpu, title: "Search & Discovery", description: "Intelligent search with faceted filtering, autocomplete, and visual search capabilities." },
    { icon: Activity, title: "Analytics & Insights", description: "Real-time dashboards tracking revenue, conversion funnels, and customer behavior." },
    { icon: Eye, title: "AR Product Visualization", description: "Augmented reality features letting customers try products virtually before purchasing." },
  ],
  accentColor: "#8b5cf6",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Multi-Dimensional E-Commerce Expertise",
  subtitle: "We have developed a multitude of eCommerce websites and apps that are easy to navigate, load instantly, and deliver seamless checkout experiences.",
  items: [
    { title: "UX Research & Storefront Design", description: "Give your online store a competitive edge with our data-driven UX research and conversion-focused design services. We analyze user behavior, run A/B tests, and craft interfaces that guide shoppers from discovery to purchase with minimal friction." },
    { title: "Custom eCommerce Platform Engineering", description: "Our bespoke platform solutions are architected to match your specific business model — whether B2B, B2C, or marketplace. We build from the ground up with scalable microservices, headless APIs, and modular front-ends that evolve with your growth." },
    { title: "Responsive & Progressive Web Applications", description: "Boost sales and conversion rates by delivering a flawless shopping experience on every screen size. Our PWA-first approach ensures app-like speed, offline browsing, and push notifications without the friction of app store downloads." },
    { title: "Mobile Commerce Application Development", description: "Move your retail operations online with high-performance native iOS and Android mCommerce apps. We integrate biometric payments, AR try-on features, and real-time inventory sync for a mobile shopping experience that converts." },
    { title: "Custom Plugin, Extension & Module Development", description: "Extend your platform's capabilities with bespoke plugins and modules for Shopify, WooCommerce, Magento, and custom stacks. From payment gateways to loyalty engines, we build production-grade extensions that integrate seamlessly." },
    { title: "Ongoing Maintenance & Growth Optimization", description: "Our dedicated support team ensures your eCommerce platform runs at peak performance 24/7. We provide proactive monitoring, security patching, performance tuning, and continuous feature enhancements to keep you ahead of the competition." },
  ],
  accentColor: "#8b5cf6",
};

export const productShowcaseProps: ProductShowcaseProps = {
  heading: "We Build eCommerce Products for Every Business",
  subtitle: "E-commerce solutions can be tailored for diverse business models — from grocery to electronics, fashion to healthcare. We build high-converting platforms for every business type.",
  products: [
    {
      title: "Enterprise B2B Commerce",
      description: "We engineer robust B2B procurement portals that handle complex buyer hierarchies, negotiated contracts, and high-volume wholesale workflows. Every platform is architected for deep back-office integration, giving procurement teams a frictionless digital buying experience.",
      highlights: [
        "Negotiated contract & tiered pricing engine",
        "Multi-level purchase approval chains",
        "Real-time ERP & inventory synchronization",
        "Self-service account dashboards",
        "Configurable reorder & quick-list workflows",
      ],
      timelineLabel: "B2B Platform Architecture",
      timeline: [
        { title: "Procurement Portal", detail: "Role-gated catalogs, quote requests, and contract-based ordering" },
        { title: "Approval Workflows", detail: "Configurable multi-tier approvals with budget threshold triggers" },
        { title: "Back-Office Sync", detail: "Bi-directional real-time sync with ERP, WMS, and accounting systems" },
        { title: "Reporting Suite", detail: "Spend analytics, purchase trends, and vendor performance dashboards" },
      ],
    },
    {
      title: "Consumer Storefront (B2C)",
      description: "Our consumer-facing storefronts are conversion-optimized from the first pixel. We combine intelligent merchandising, sub-second page loads, and seamless mobile checkout to turn casual browsers into repeat buyers at scale.",
      highlights: [
        "Intelligent merchandising & upsell engine",
        "Streamlined mobile-first checkout flow",
        "Tiered rewards & gamified loyalty",
        "Automated lifecycle marketing campaigns",
        "Live inventory visibility across channels",
      ],
      timelineLabel: "B2C Conversion Stack",
      timeline: [
        { title: "Personalization Layer", detail: "Behavioral triggers, dynamic banners, and segment-based product feeds" },
        { title: "Checkout Optimization", detail: "Express checkout, address autofill, and abandoned-session recovery" },
        { title: "Retention Engine", detail: "Tiered loyalty points, referral bonuses, and win-back sequences" },
        { title: "Growth Automation", detail: "Lifecycle emails, push campaigns, and cross-channel retargeting" },
      ],
    },
    {
      title: "Peer-to-Peer Marketplace (C2C)",
      description: "We build trust-first C2C marketplaces where individuals trade confidently. Our platforms include built-in escrow, reputation scoring, and moderation tools that keep the community safe while scaling to millions of listings.",
      highlights: [
        "Built-in escrow & payout management",
        "Verified profiles & trust scores",
        "Intelligent listing & search discovery",
        "Real-time in-app chat & offers",
        "Automated moderation & fraud shields",
      ],
      timelineLabel: "Marketplace Trust Layer",
      timeline: [
        { title: "Secure Transactions", detail: "Escrow holds, milestone-based releases, and chargeback protection" },
        { title: "Reputation System", detail: "Review aggregation, verified badges, and behavior-based trust scores" },
        { title: "Discovery Engine", detail: "Faceted search, geo-proximity sorting, and smart recommendations" },
        { title: "Safety & Moderation", detail: "ML-powered content screening, flagging workflows, and dispute mediation" },
      ],
    },
    {
      title: "Brand-Direct (D2C) Platform",
      description: "We help brands own the entire customer relationship — no middlemen. Our D2C platforms pair subscription flexibility with rich content experiences, giving brands full control over pricing, storytelling, and customer data.",
      highlights: [
        "Flexible subscription & box models",
        "Native social storefront integrations",
        "Lifetime value & cohort tracking",
        "Hyper-personalized product journeys",
        "Editorial-style content commerce pages",
      ],
      timelineLabel: "D2C Growth Framework",
      timeline: [
        { title: "Subscription Management", detail: "Flexible frequencies, skip/swap options, and smart renewal nudges" },
        { title: "Social Storefronts", detail: "Shoppable posts on Instagram, TikTok Shop, and Facebook Marketplace" },
        { title: "Customer Data Platform", detail: "Unified profiles, cohort segmentation, and predictive LTV models" },
        { title: "Brand Storytelling", detail: "Long-form content pages, ingredient deep-dives, and founder stories" },
      ],
    },
  ],
  accentColor: "#8b5cf6",
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a E-Commerce Solutions",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your e-commerce solutions needs.",
  accentColor: "#8b5cf6",
};

export const projects: Project[] = [
  {
    id: "cartflow-ecom",
    tag: "Headless Commerce",
    tagColor: "bg-[#8b5cf6]/15 text-[#8b5cf6] border-[#8b5cf6]/30",
    company: "CartFlow",
    industry: "E-Commerce",
    headline: "AI-powered headless commerce platform driving 38% increase in average order value.",
    challenge:
      "Generic product suggestions leading to 71% cart abandonment. No real-time ML infrastructure for personalization.",
    solution:
      "Built a headless commerce platform with real-time ML recommendation engine using TensorFlow Serving. Multi-currency support and dynamic pricing.",
    duration: "60 days",
    accentColor: "#8b5cf6",
    metrics: [
      { value: 38, suffix: "%", label: "AOV increase" },
      { value: 22, suffix: "%", label: "Abandonment drop" },
      { value: 18, suffix: "ms", label: "Inference latency" },
    ],
    timeline: [
      { phase: "Data Pipeline", detail: "Kafka streams for clickstream and purchase history" },
      { phase: "ML Model Training", detail: "Collaborative filtering + content-based hybrid" },
      { phase: "API & Caching Layer", detail: "Spring Boot serving TF models with Redis caching" },
      { phase: "Rollout & Tuning", detail: "Canary at 5% → 100% with feature-flag control" },
    ],
  },
  {
    id: "shopnest-marketplace",
    tag: "Multi-Vendor Marketplace",
    tagColor: "bg-[#8b5cf6]/15 text-[#8b5cf6] border-[#8b5cf6]/30",
    company: "ShopNest",
    industry: "E-Commerce",
    headline: "Scalable multi-vendor marketplace supporting 10K+ sellers with real-time inventory.",
    challenge:
      "Managing inventory across thousands of vendors. Payment splitting and commission tracking. Real-time order synchronization.",
    solution:
      "Microservices-based marketplace with event-driven inventory management. Automated payment splitting with Stripe Connect and real-time order tracking.",
    duration: "75 days",
    accentColor: "#8b5cf6",
    metrics: [
      { value: 10, suffix: "K+", label: "Active sellers" },
      { value: 99.5, suffix: "%", label: "Order accuracy" },
      { value: 2, suffix: "s", label: "Sync latency" },
    ],
    timeline: [
      { phase: "Marketplace Architecture", detail: "Multi-tenant design, vendor onboarding flow" },
      { phase: "Inventory Engine", detail: "Event-driven stock management across vendors" },
      { phase: "Payments & Splits", detail: "Stripe Connect integration, automated commissions" },
      { phase: "Launch & Scale", detail: "Load testing, CDN setup, monitoring dashboards" },
    ],
  },
];

