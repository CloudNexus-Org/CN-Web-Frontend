import { Building2, Eye, Users, Calculator, BarChart3, Home, Award, Zap, ShieldCheck, HeartHandshake, Brain, MapPin, Database, Cpu, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "Real Estate Software Development",
  subtitle: "Digitizing Property Experiences",
  description: "Personalized property buying & selling experiences with tech-smart tailored services including virtual tours, CRM integration, and property analytics.",
  heroImage: "/images/stock/stock-5ff1ee1b1e.jpg",
  accentColor: "#10E760",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#10E760",
  heading: "Digitizing Real Estate",
  descriptionLeft: "We build property technology platforms that automate valuations, enable virtual tours, and streamline property management. Our AI-powered solutions help real estate companies list, manage, and transact properties faster and more efficiently.",
  descriptionRight: "Our PropTech solutions include AI-based property valuation engines, 360° virtual tour integrations, automated tenant screening, digital lease signing, and centralized maintenance management systems. We help property managers go fully digital with zero paperwork.",
  highlights: [
      {
          "value": "25K+",
          "label": "Listings managed"
      },
      {
          "value": "15K+",
          "label": "Units automated"
      },
      {
          "value": "45%",
          "label": "Faster valuations"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Real Estate Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: Building2, title: "Property Listing Platforms", description: "Feature-rich listing portals with advanced search, maps, and comparison tools." },
    { icon: Eye, title: "3D Virtual Tours", description: "Immersive virtual walkthroughs with 360° photography and interactive floor plans." },
    { icon: Users, title: "CRM & Lead Management", description: "Real estate CRM with automated lead scoring, follow-ups, and pipeline management." },
    { icon: Calculator, title: "Mortgage Calculators", description: "Interactive mortgage and loan calculators with real-time rate comparisons." },
    { icon: BarChart3, title: "Property Analytics", description: "Market analysis dashboards with pricing trends, neighborhood insights, and ROI projections." },
    { icon: Home, title: "Tenant Management", description: "Comprehensive tenant and lease management portals with payment automation." },
  ],
  accentColor: "#10E760",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Property Marketplace",
      description: "Comprehensive property listing platforms connecting buyers, sellers, and agents.",
      features: ["Advanced search & filters", "Map-based browsing", "Property comparisons", "Agent profiles", "Lead generation"],
    },
    {
      title: "Property Management",
      description: "End-to-end property management solutions for landlords and property managers.",
      features: ["Lease management", "Rent collection", "Maintenance requests", "Tenant screening", "Financial reporting"],
    },
    {
      title: "Construction & Development",
      description: "Project management tools for real estate developers and construction companies.",
      features: ["Project timeline tracking", "Budget management", "Vendor coordination", "Progress documentation", "Regulatory compliance"],
    },
    {
      title: "Commercial Real Estate",
      description: "Platforms tailored for commercial property transactions and management.",
      features: ["Space planning", "Lease negotiation tools", "Occupancy analytics", "Asset valuation", "Portfolio management"],
    },
  ],
  accentColor: "#10E760",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Market Analysis",
      description: "Understanding local market dynamics, competitor platforms, and target user segments.",
      icon: Search,
      highlights: [
        "Property listing workflow assessment",
        "MLS & CRM integration scoping",
        "Agent & buyer journey mapping",
        "Regional compliance review",
      ],
    },
    {
      step: "02",
      title: "UX/UI Design",
      description: "Designing intuitive property browsing experiences with visual-first interfaces.",
      icon: Palette,
      highlights: [
        "Map-based property search prototyping",
        "Virtual tour & 3D viewing interfaces",
        "Agent dashboard design",
        "Lead capture form optimization",
      ],
    },
    {
      step: "03",
      title: "Tech Planning",
      description: "Building scalable platforms with listing management, search, and CRM features.",
      icon: Settings,
      highlights: [
        "Geospatial search engine architecture",
        "Document management system design",
        "Payment escrow integration planning",
        "IDX/RETS feed integration framework",
      ],
    },
    {
      step: "04",
      title: "Development Sprints",
      description: "Connecting with MLS, payment gateways, mapping APIs, and third-party services.",
      icon: Code2,
      highlights: [
        "Bi-weekly sprints with real estate advisors",
        "Automated listing sync pipelines",
        "CRM & marketing tool integrations",
        "Mobile-first progressive web app builds",
      ],
    },
    {
      step: "05",
      title: "Testing & Launch",
      description: "Ensuring cross-device compatibility, search accuracy, and transaction security.",
      icon: ShieldCheck,
      highlights: [
        "Property data accuracy validation",
        "Cross-device listing display testing",
        "Security & privacy compliance audit",
        "Staged market-by-market rollout",
      ],
    },
    {
      step: "06",
      title: "Growth & Analytics",
      description: "Phased rollout with agent onboarding, training, and ongoing optimization.",
      icon: Rocket,
      highlights: [
        "Lead conversion tracking dashboards",
        "Market trend & pricing analytics",
        "SEO optimization for listings",
        "Agent performance reporting tools",
      ],
    },
  ],
  accentColor: "#10E760",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Industry Knowledge", description: "Deep understanding of real estate workflows, MLS standards, and market dynamics." },
    { icon: Zap, title: "Visual Excellence", description: "Stunning property presentations with virtual tours, galleries, and interactive maps." },
    { icon: ShieldCheck, title: "Transaction Security", description: "Secure payment processing and document management for property transactions." },
    { icon: HeartHandshake, title: "Full-Cycle Support", description: "From listing to closing, we support the entire real estate journey digitally." },
  ],
  accentColor: "#10E760",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI Valuation", description: "Machine learning models for accurate property valuation and price predictions." },
    { icon: Eye, title: "Virtual Reality", description: "3D tours and VR walkthroughs for immersive remote property viewing." },
    { icon: MapPin, title: "Geospatial Analytics", description: "Location intelligence with neighborhood scoring and proximity analysis." },
    { icon: Database, title: "Big Data Insights", description: "Market trend analysis with predictive analytics for investment decisions." },
    { icon: Cpu, title: "IoT Smart Buildings", description: "Connected building systems for energy management and smart home integration." },
  ],
  accentColor: "#10E760",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Real Estate Technology Expertise",
  subtitle: "We build intelligent property technology platforms that digitize transactions, automate management, and deliver immersive property experiences.",
  items: [
    {
      title: "Property Search & Geospatial Discovery Platforms",
      description: "We build map-first property search engines with polygon-based area selection, commute-time filters, and neighborhood scoring. Our geospatial infrastructure handles millions of listings with real-time availability updates."
    },
    {
      title: "Virtual Tours, 3D Walkthroughs & AR Visualization",
      description: "We create immersive property viewing experiences with 360° virtual tours, 3D floor plan walkthroughs, and AR furniture placement. Our solutions reduce physical viewings while increasing qualified buyer engagement."
    },
    {
      title: "Transaction Management & Digital Closing Platforms",
      description: "We digitize the entire property transaction lifecycle — from offer submission and document management to e-signatures and escrow coordination. Our platforms reduce closing times and eliminate paper-based bottlenecks."
    },
    {
      title: "Automated Valuation Models & Market Analytics",
      description: "Our AVM engines use comparable sales analysis, neighborhood trends, and property attributes to generate instant price estimates. We build market analytics dashboards tracking inventory levels, price trajectories, and demand indicators."
    },
    {
      title: "IoT-Powered Smart Building & Facility Management",
      description: "We integrate IoT sensors for occupancy detection, HVAC optimization, and energy management. Our facility management platforms handle maintenance scheduling, access control, and tenant communication for commercial properties."
    },
    {
      title: "Real Estate CRM & Lead Management Systems",
      description: "We build industry-specific CRM platforms with automated lead scoring, drip campaigns, and showing scheduling. Our systems integrate with MLS feeds, property portals, and marketing automation tools for end-to-end agent productivity."
    }
  ],
  accentColor: "#10E760"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#10E760",
  heading: "Real Estate Products for Every Market Participant",
  subtitle: "From property portals and brokerage platforms to facility management and smart building solutions — we digitize the entire real estate lifecycle.",
  products: [
    {
      title: "Property Listing & Search Portals",
      description: "We build intelligent property portals with map-based search, virtual tours, and AI-powered price estimation. Our platforms connect buyers, sellers, and agents with advanced matching and lead management.",
      highlights: [
        "Map-based property discovery",
        "AI-powered price estimation",
        "Virtual tour & 3D walkthroughs",
        "Agent matching & lead routing",
        "Mortgage calculator & pre-approval"
      ],
      timelineLabel: "Portal Features",
      timeline: [
        {
          title: "Search Engine",
          detail: "Geo-spatial queries, polygon drawing, and commute-time filters"
        },
        {
          title: "Valuation Model",
          detail: "Comparable analysis, market trends, and automated price estimates"
        },
        {
          title: "Lead Management",
          detail: "Inquiry routing, agent assignment, and follow-up automation"
        },
        {
          title: "Media Experience",
          detail: "360° tours, drone footage, and floor plan visualization"
        }
      ]
    },
    {
      title: "Property Management Platforms",
      description: "Our property management solutions handle tenant screening, lease management, rent collection, and maintenance coordination. Built for landlords, property managers, and HOAs with multi-property scalability.",
      highlights: [
        "Tenant screening & background checks",
        "Digital lease signing & management",
        "Automated rent collection & reminders",
        "Maintenance request tracking",
        "Financial reporting & owner statements"
      ],
      timelineLabel: "Management Modules",
      timeline: [
        {
          title: "Tenant Lifecycle",
          detail: "Application screening, lease generation, and move-in/out workflows"
        },
        {
          title: "Financial Engine",
          detail: "Rent invoicing, late fee calculation, and owner distribution splits"
        },
        {
          title: "Maintenance Hub",
          detail: "Work order tracking, vendor dispatch, and tenant communication"
        },
        {
          title: "Portfolio Analytics",
          detail: "Occupancy rates, rent roll analysis, and expense categorization"
        }
      ]
    },
    {
      title: "Construction & Smart Building Tech",
      description: "We develop construction project management and smart building solutions with IoT sensor integration, BIM visualization, and energy management. Our platforms serve developers, contractors, and facility managers.",
      highlights: [
        "Construction project scheduling & tracking",
        "BIM model visualization",
        "IoT sensor & energy management",
        "Safety compliance monitoring",
        "Vendor & subcontractor coordination"
      ],
      timelineLabel: "Construction Tech",
      timeline: [
        {
          title: "Project Tracker",
          detail: "Gantt scheduling, milestone tracking, and budget vs. actual analysis"
        },
        {
          title: "BIM Integration",
          detail: "3D model viewing, clash detection, and as-built documentation"
        },
        {
          title: "IoT & Energy",
          detail: "Smart HVAC, occupancy sensing, and energy consumption dashboards"
        },
        {
          title: "Compliance Engine",
          detail: "Safety checklists, inspection logs, and regulatory document storage"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Real Estate",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your real estate needs.",
  accentColor: "#10E760",
};

export const projects: Project[] = [
  {
    id: "propview",
    tag: "PropTech Platform",
    tagColor: "bg-[#10E760]/15 text-[#10E760] border-[#10E760]/30",
    company: "PropView",
    industry: "Real Estate",
    headline: "AI-powered property listing platform with virtual tours and smart valuation.",
    challenge:
      "Manual property valuation processes. No virtual viewing capability. Scattered listing data across multiple platforms.",
    solution:
      "Unified listing aggregation with AI-based property valuation. 360° virtual tour integration. Smart search with neighborhood analytics.",
    duration: "70 days",
    accentColor: "#10E760",
    metrics: [
      { value: 45, suffix: "%", label: "Faster valuations" },
      { value: 25, suffix: "K+", label: "Listings managed" },
      { value: 3, suffix: "x", label: "Lead conversion" },
    ],
    timeline: [
      { phase: "Data Aggregation", detail: "Multi-source listing ingestion, normalization" },
      { phase: "AI Valuation Engine", detail: "ML models for property price prediction" },
      { phase: "Virtual Tours", detail: "360° media upload, WebGL-based viewer" },
      { phase: "Smart Search", detail: "Neighborhood analytics, commute scoring" },
    ],
  },
  {
    id: "rentease",
    tag: "Property Management",
    tagColor: "bg-[#10E760]/15 text-[#10E760] border-[#10E760]/30",
    company: "RentEase",
    industry: "Real Estate",
    headline: "Automated property management platform handling 15K+ rental units with zero paperwork.",
    challenge:
      "Manual rent collection and lease management. Maintenance request tracking chaos. Tenant screening bottlenecks.",
    solution:
      "Automated rent collection with ACH/card payments. Digital lease signing. AI-based tenant screening and maintenance ticketing system.",
    duration: "55 days",
    accentColor: "#10E760",
    metrics: [
      { value: 15, suffix: "K+", label: "Units managed" },
      { value: 95, suffix: "%", label: "On-time rent" },
      { value: 0, suffix: " paper", label: "Fully digital" },
    ],
    timeline: [
      { phase: "Payment Automation", detail: "ACH, card processing, automated reminders" },
      { phase: "Lease Management", detail: "Digital signing, renewal workflows" },
      { phase: "Maintenance System", detail: "Ticketing, vendor dispatch, photo uploads" },
      { phase: "Tenant Screening", detail: "AI-based credit and background checks" },
    ],
  },
];

