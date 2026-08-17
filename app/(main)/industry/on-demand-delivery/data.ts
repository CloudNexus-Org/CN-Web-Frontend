import { UtensilsCrossed, ShoppingBag, Package, MapPin, Brain, Wallet, Award, Zap, ShieldCheck, HeartHandshake, Cpu, Database, Activity, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "On Demand Delivery Software",
  subtitle: "Instant Delivery Solutions",
  description: "Tech-friendly on-demand web & app solutions for quick communication between customers, sellers, & delivery companies with AI and real-time tracking.",
  heroImage: "/images/stock/stock-b13b3308c8.jpg",
  accentColor: "#16a34a",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#16a34a",
  heading: "On-Demand Delivery Solutions",
  descriptionLeft: "We build last-mile delivery platforms and quick commerce apps that process tens of thousands of daily orders with AI-powered route optimization, real-time GPS tracking, and dynamic surge pricing. Our solutions are designed for speed, efficiency, and scale.",
  descriptionRight: "From rider allocation algorithms and dark store inventory management to demand prediction models and IoT-based quality monitoring for fresh produce, we help delivery companies achieve faster delivery times while maintaining operational profitability.",
  highlights: [
      {
          "value": "50K+",
          "label": "Daily orders"
      },
      {
          "value": "10min",
          "label": "Avg delivery time"
      },
      {
          "value": "4.8/5",
          "label": "Customer rating"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our On Demand Delivery Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: UtensilsCrossed, title: "Food Delivery Apps", description: "Feature-rich food delivery platforms with restaurant management and order tracking." },
    { icon: ShoppingBag, title: "Grocery Delivery", description: "On-demand grocery delivery apps with inventory sync and scheduled deliveries." },
    { icon: Package, title: "Courier & Package Delivery", description: "Same-day and next-day courier services with real-time tracking and POD." },
    { icon: MapPin, title: "Real-Time Tracking", description: "Live GPS tracking for customers, drivers, and operations management." },
    { icon: Brain, title: "AI Demand Prediction", description: "Machine learning algorithms predicting demand patterns and optimizing fleet allocation." },
    { icon: Wallet, title: "In-App Payments", description: "Secure multi-payment integration with digital wallets, cards, and COD options." },
  ],
  accentColor: "#16a34a",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Food Delivery",
      description: "Multi-restaurant food ordering and delivery platforms.",
      features: ["Restaurant onboarding", "Menu management", "Order management", "Driver dispatch", "Customer ratings"],
    },
    {
      title: "Grocery & Essentials",
      description: "On-demand grocery and daily essentials delivery platforms.",
      features: ["Product catalog", "Scheduled deliveries", "Subscription orders", "Inventory management", "Price optimization"],
    },
    {
      title: "Courier Services",
      description: "Package and document delivery services with tracking and proof of delivery.",
      features: ["Parcel booking", "Route optimization", "Proof of delivery", "Rate calculator", "Bulk shipments"],
    },
    {
      title: "Multi-Service Platform",
      description: "Super-app style platforms offering multiple delivery services in one app.",
      features: ["Service marketplace", "Unified wallet", "Cross-service promotions", "Driver multi-tasking", "Unified analytics"],
    },
  ],
  accentColor: "#16a34a",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Operations Discovery",
      description: "Studying target market, delivery zones, and competitor landscape.",
      icon: Search,
      highlights: [
        "Delivery workflow & fleet analysis",
        "Demand forecasting model assessment",
        "Partner onboarding process mapping",
        "Geo-coverage & zone planning",
      ],
    },
    {
      step: "02",
      title: "Multi-App Design",
      description: "Designing intuitive customer, driver, and admin interfaces.",
      icon: Palette,
      highlights: [
        "Customer ordering flow prototyping",
        "Driver app navigation UX design",
        "Merchant dashboard wireframing",
        "Real-time tracking interface design",
      ],
    },
    {
      step: "03",
      title: "Platform Architecture",
      description: "Building scalable platforms with ordering, dispatch, and tracking systems.",
      icon: Settings,
      highlights: [
        "Real-time dispatch & routing engine",
        "Dynamic pricing algorithm framework",
        "Multi-tenant backend architecture",
        "Payment splitting infrastructure",
      ],
    },
    {
      step: "04",
      title: "Parallel Development",
      description: "Integrating multiple payment methods and wallet systems.",
      icon: Code2,
      highlights: [
        "Customer, driver & merchant app sprints",
        "GPS tracking & ETA prediction systems",
        "Push notification & alert pipelines",
        "Automated testing across all apps",
      ],
    },
    {
      step: "05",
      title: "Testing & Go-Live",
      description: "Driver app development, onboarding tools, and training systems.",
      icon: ShieldCheck,
      highlights: [
        "Real-world delivery simulation testing",
        "Payment gateway security validation",
        "Peak load & surge scenario testing",
        "City-by-city phased launch strategy",
      ],
    },
    {
      step: "06",
      title: "Operations Optimization",
      description: "City-by-city rollout with marketing tools and operational analytics.",
      icon: Rocket,
      highlights: [
        "Delivery time & efficiency analytics",
        "Driver utilization optimization",
        "Customer satisfaction score tracking",
        "Demand prediction model refinement",
      ],
    },
  ],
  accentColor: "#16a34a",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "On-Demand Expertise", description: "Built delivery platforms serving millions of orders monthly." },
    { icon: Zap, title: "Real-Time Systems", description: "Live tracking, instant dispatch, and sub-minute order processing." },
    { icon: ShieldCheck, title: "Reliable & Scalable", description: "Infrastructure handling peak loads and scaling across new markets." },
    { icon: HeartHandshake, title: "Growth Partner", description: "From MVP to city-wide operations, we support your growth journey." },
  ],
  accentColor: "#16a34a",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI & Optimization", description: "Machine learning for demand prediction, route optimization, and pricing." },
    { icon: MapPin, title: "Real-Time Tracking", description: "GPS tracking with ETA predictions and live driver location updates." },
    { icon: Cpu, title: "Dispatch Engine", description: "Intelligent automated dispatch matching orders with nearest available drivers." },
    { icon: Database, title: "Cloud Infrastructure", description: "Auto-scaling cloud platforms handling millions of concurrent orders." },
    { icon: Activity, title: "Operations Analytics", description: "Real-time dashboards tracking deliveries, driver performance, and revenue." },
  ],
  accentColor: "#16a34a",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our On-Demand Delivery Platform Expertise",
  subtitle: "We build real-time logistics platforms that optimize routing, automate dispatch, and deliver exceptional last-mile experiences at scale.",
  items: [
    {
      title: "Real-Time Dispatch & Driver Assignment Algorithms",
      description: "Our dispatch engine uses AI to assign drivers based on proximity, capacity, traffic conditions, and delivery priority. We optimize batch dispatch for multi-order efficiency while maintaining individual delivery SLAs."
    },
    {
      title: "Route Optimization & Dynamic ETA Calculation",
      description: "We build routing engines that factor in real-time traffic, road closures, weather, and delivery windows to generate optimal multi-stop routes. Our ETA models learn from historical patterns to deliver increasingly accurate arrival predictions."
    },
    {
      title: "Vendor & Restaurant Onboarding & Management",
      description: "Our self-service vendor portals handle registration, menu management, operating hours, and commission configuration. We build admin tools for vendor quality monitoring, performance analytics, and compliance verification."
    },
    {
      title: "Real-Time Order Tracking & Push Notification Systems",
      description: "We engineer live order tracking with GPS breadcrumbs, delivery stage updates, and proactive push notifications. Our systems handle millions of concurrent tracking sessions with sub-second location updates."
    },
    {
      title: "Surge Pricing & Demand Forecasting Models",
      description: "Our ML models predict demand spikes based on weather, events, time patterns, and historical data. We build dynamic pricing engines that balance supply-demand equilibrium while maintaining customer price sensitivity thresholds."
    },
    {
      title: "Delivery Analytics & Operational Intelligence",
      description: "We build dashboards tracking delivery success rates, average times, driver utilization, and customer satisfaction. Our operational intelligence tools identify bottlenecks, optimize zones, and forecast resource requirements."
    }
  ],
  accentColor: "#16a34a"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#16a34a",
  heading: "On-Demand Delivery Products for Every Vertical",
  subtitle: "From food and grocery delivery to courier services and dark store operations — we build real-time logistics platforms that scale.",
  products: [
    {
      title: "Food & Grocery Delivery Platforms",
      description: "We build end-to-end food and grocery delivery platforms with restaurant/store onboarding, real-time order tracking, and intelligent delivery assignment. Our solutions support multi-vendor catalogs, dynamic ETA calculation, and automated surge pricing.",
      highlights: [
        "Multi-vendor restaurant/store catalogs",
        "Real-time order & delivery tracking",
        "AI-powered delivery ETA calculation",
        "Dynamic surge pricing engine",
        "Driver assignment & route optimization"
      ],
      timelineLabel: "Delivery Platform",
      timeline: [
        {
          title: "Vendor Management",
          detail: "Self-service onboarding, menu management, and commission configuration"
        },
        {
          title: "Order Engine",
          detail: "Cart management, promo codes, and multi-vendor basket consolidation"
        },
        {
          title: "Logistics Layer",
          detail: "Driver matching, batch dispatch, and real-time GPS tracking"
        },
        {
          title: "Customer App",
          detail: "Live tracking, push notifications, and rating/tipping workflows"
        }
      ]
    },
    {
      title: "Courier & Parcel Delivery",
      description: "Our courier platforms handle same-day and scheduled deliveries with proof-of-delivery capture, route optimization, and automated pricing. Built for last-mile logistics companies, e-commerce fulfillment, and corporate mail rooms.",
      highlights: [
        "Same-day & scheduled delivery slots",
        "Photo proof-of-delivery capture",
        "Automated pricing & weight-based rates",
        "Multi-stop route optimization",
        "Corporate account & billing management"
      ],
      timelineLabel: "Courier Operations",
      timeline: [
        {
          title: "Booking Portal",
          detail: "Pickup scheduling, package dimensions, and real-time price quotes"
        },
        {
          title: "Route Engine",
          detail: "Multi-stop optimization, traffic-aware ETAs, and driver load balancing"
        },
        {
          title: "Proof & Tracking",
          detail: "Photo capture, e-signatures, GPS breadcrumbs, and delivery confirmation"
        },
        {
          title: "Business Tools",
          detail: "Bulk shipments, recurring pickups, and consolidated billing for corporates"
        }
      ]
    },
    {
      title: "Dark Store & Quick Commerce",
      description: "We engineer quick commerce platforms with micro-fulfillment center management, sub-30-minute delivery, and real-time inventory synchronization. Our solutions optimize picking routes, manage dark store operations, and predict demand patterns.",
      highlights: [
        "Micro-fulfillment center management",
        "Sub-30-minute delivery operations",
        "Real-time inventory synchronization",
        "Demand prediction & auto-replenishment",
        "Pick-pack workflow optimization"
      ],
      timelineLabel: "Quick Commerce Stack",
      timeline: [
        {
          title: "Inventory Management",
          detail: "Real-time stock sync, expiry tracking, and automated reorder triggers"
        },
        {
          title: "Fulfillment Engine",
          detail: "Optimized picking routes, batch processing, and packing station management"
        },
        {
          title: "Rapid Delivery",
          detail: "Hyper-local driver network, 15-min promise tracking, and SLA monitoring"
        },
        {
          title: "Demand Intelligence",
          detail: "Basket analysis, seasonal forecasting, and promotional demand modeling"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a On Demand Delivery",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your on demand delivery needs.",
  accentColor: "#16a34a",
};

export const projects: Project[] = [
  {
    id: "quickdrop",
    tag: "Last-Mile Delivery",
    tagColor: "bg-[#16a34a]/15 text-[#16a34a] border-[#16a34a]/30",
    company: "QuickDrop",
    industry: "On Demand Delivery",
    headline: "Last-mile delivery platform processing 50K+ daily orders with AI route optimization.",
    challenge: "Inefficient last-mile delivery routes. Real-time tracking for customers and drivers. Peak hour demand management.",
    solution: "AI-powered route optimization cutting delivery time by 30%. Real-time GPS tracking with ETA predictions. Dynamic pricing and surge management.",
    duration: "70 days",
    accentColor: "#16a34a",
    metrics: [
      { value: 50, suffix: "K+", label: "Daily orders" },
      { value: 30, suffix: "%", label: "Faster deliveries" },
      { value: 4.8, suffix: "/5", label: "Customer rating" },
    ],
    timeline: [
      { phase: "Order Management", detail: "Multi-vendor order aggregation, dispatch" },
      { phase: "Route Optimization", detail: "AI routing with traffic and demand data" },
      { phase: "Real-Time Tracking", detail: "GPS tracking, ETA prediction, notifications" },
      { phase: "Surge Management", detail: "Dynamic pricing, demand forecasting" },
    ],
  },
  {
    id: "grocerynow",
    tag: "Grocery Delivery",
    tagColor: "bg-[#16a34a]/15 text-[#16a34a] border-[#16a34a]/30",
    company: "GroceryNow",
    industry: "On Demand Delivery",
    headline: "10-minute grocery delivery app with dark store management and inventory prediction.",
    challenge: "Ultra-fast delivery promise requiring precise inventory. Dark store operations management. Fresh produce quality control.",
    solution: "AI inventory prediction for dark stores. Batched picking optimization. Quality scoring system for fresh produce with IoT temperature monitoring.",
    duration: "85 days",
    accentColor: "#16a34a",
    metrics: [
      { value: 10, suffix: " min", label: "Avg delivery time" },
      { value: 95, suffix: "%", label: "Inventory accuracy" },
      { value: 20, suffix: "+", label: "Dark stores" },
    ],
    timeline: [
      { phase: "Dark Store Platform", detail: "Inventory management, picking optimization" },
      { phase: "Demand Prediction", detail: "ML-based stock forecasting per location" },
      { phase: "Delivery Engine", detail: "Rider allocation, route optimization" },
      { phase: "Quality Systems", detail: "IoT temp monitoring, freshness scoring" },
    ],
  },
];

