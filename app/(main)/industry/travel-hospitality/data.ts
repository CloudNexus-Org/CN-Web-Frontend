import { Plane, BarChart3, Building2, Globe, Brain, Gift, Award, Zap, ShieldCheck, HeartHandshake, Database, Cpu, MapPin, Activity, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "Travel & Hospitality Software",
  subtitle: "Redefining Travel Experiences",
  description: "Booking engines, travel management platforms, and hospitality solutions with dynamic pricing, multi-channel distribution, and personalized recommendations.",
  heroImage: "/images/stock/stock-4eae8787e0.jpg",
  accentColor: "#f97316",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#f97316",
  heading: "Elevating Travel Experiences",
  descriptionLeft: "We build travel booking platforms and hotel management systems that handle millions of bookings with AI-powered dynamic pricing, multi-supplier inventory aggregation, and seamless guest experiences from search to checkout.",
  descriptionRight: "Our hospitality solutions include property management systems, digital check-in with mobile keys, revenue management across OTA channels, and staff coordination tools. We help hotels and travel companies maximize revenue while delivering exceptional guest experiences.",
  highlights: [
      {
          "value": "1M+",
          "label": "Annual bookings"
      },
      {
          "value": "150+",
          "label": "Properties managed"
      },
      {
          "value": "20%",
          "label": "Revenue increase"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Travel & Hospitality Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: Plane, title: "Online Booking Engines", description: "Comprehensive booking platforms for flights, hotels, and travel packages." },
    { icon: BarChart3, title: "Dynamic Pricing", description: "AI-driven pricing algorithms that maximize revenue based on demand patterns." },
    { icon: Building2, title: "Hotel Management Systems", description: "Property management systems with reservation, housekeeping, and guest services." },
    { icon: Globe, title: "Multi-Channel Distribution", description: "Channel management connecting with OTAs, GDS, and direct booking platforms." },
    { icon: Brain, title: "AI Recommendations", description: "Personalized travel recommendations based on preferences and booking history." },
    { icon: Gift, title: "Loyalty & Rewards", description: "Points-based loyalty programs with tier management and reward redemption." },
  ],
  accentColor: "#f97316",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Hotel & Resort Management",
      description: "Comprehensive property management solutions for hotels and resorts.",
      features: ["Reservation management", "Housekeeping automation", "Guest experience apps", "Revenue management", "Multi-property dashboard"],
    },
    {
      title: "Travel Marketplace",
      description: "Online travel agencies and marketplace platforms connecting travelers with providers.",
      features: ["Flight & hotel search", "Package deals", "User reviews", "Price comparison", "Itinerary builder"],
    },
    {
      title: "Restaurant & Food Service",
      description: "Digital solutions for restaurant management and food service operations.",
      features: ["Table reservation", "Online ordering", "Kitchen display system", "Inventory management", "POS integration"],
    },
    {
      title: "Tour & Activity",
      description: "Booking and management platforms for tours, activities, and experiences.",
      features: ["Activity marketplace", "Guide scheduling", "Ticket management", "Group booking", "Seasonal pricing"],
    },
  ],
  accentColor: "#f97316",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Travel Domain Analysis",
      description: "Understanding travel workflows, booking funnels, and guest journey mapping.",
      icon: Search,
      highlights: [
        "Booking funnel & conversion audit",
        "GDS/OTA integration requirement mapping",
        "Seasonal demand pattern analysis",
        "Competitor experience benchmarking",
      ],
    },
    {
      step: "02",
      title: "Experience Design",
      description: "Designing frictionless booking experiences optimized for conversion.",
      icon: Palette,
      highlights: [
        "Visual-first booking flow prototyping",
        "Map-based search interface design",
        "Multi-currency & language UX planning",
        "Mobile booking optimization layouts",
      ],
    },
    {
      step: "03",
      title: "System Architecture",
      description: "Developing scalable platforms with search, booking, and payment processing.",
      icon: Settings,
      highlights: [
        "Real-time inventory & pricing engine",
        "Multi-supplier aggregation framework",
        "High-concurrency booking infrastructure",
        "CDN & edge caching strategy",
      ],
    },
    {
      step: "04",
      title: "Agile Development",
      description: "Connecting with GDS, OTAs, payment gateways, and mapping services.",
      icon: Code2,
      highlights: [
        "Sprint delivery with travel domain experts",
        "API integration with booking engines",
        "Dynamic pricing algorithm development",
        "Feature-flagged seasonal releases",
      ],
    },
    {
      step: "05",
      title: "QA & Go-Live",
      description: "Load testing for peak season traffic and booking system reliability.",
      icon: ShieldCheck,
      highlights: [
        "Payment gateway security testing",
        "Load testing for peak season traffic",
        "Cross-timezone booking validation",
        "Phased rollout across markets",
      ],
    },
    {
      step: "06",
      title: "Revenue Optimization",
      description: "Deployment with revenue management, A/B testing, and conversion optimization.",
      icon: Rocket,
      highlights: [
        "Booking conversion funnel analytics",
        "Dynamic pricing A/B experiments",
        "Customer review & rating systems",
        "Personalized upsell engine tuning",
      ],
    },
  ],
  accentColor: "#f97316",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Travel Tech Experts", description: "Built booking platforms processing millions of transactions annually." },
    { icon: Zap, title: "Speed & Performance", description: "Sub-second search results and instant booking confirmation." },
    { icon: ShieldCheck, title: "Secure Payments", description: "PCI-compliant payment processing with multi-currency support." },
    { icon: HeartHandshake, title: "24/7 Support", description: "Round-the-clock support for mission-critical booking operations." },
  ],
  accentColor: "#f97316",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI & Personalization", description: "Machine learning for personalized recommendations and dynamic pricing optimization." },
    { icon: Database, title: "Search Technology", description: "High-performance search engines handling complex travel queries in real-time." },
    { icon: Cpu, title: "Cloud & Scalability", description: "Auto-scaling infrastructure handling traffic spikes during peak booking seasons." },
    { icon: MapPin, title: "Location Services", description: "Geospatial technology for map-based search and proximity-based recommendations." },
    { icon: Activity, title: "Revenue Analytics", description: "Real-time revenue dashboards, occupancy analytics, and demand forecasting." },
  ],
  accentColor: "#f97316",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Travel & Hospitality Tech Expertise",
  subtitle: "We build intelligent travel platforms that optimize bookings, enhance guest experiences, and drive operational efficiency across the hospitality value chain.",
  items: [
    {
      title: "GDS & OTA Integration & Channel Management",
      description: "We integrate with Amadeus, Sabre, Travelport, and major OTAs to aggregate real-time inventory. Our channel managers synchronize rates and availability across booking.com, Expedia, Airbnb, and direct channels instantly."
    },
    {
      title: "Dynamic Pricing & Revenue Management Systems",
      description: "Our ML-powered pricing engines analyze demand patterns, competitor rates, seasonality, and local events to optimize room rates and yields. We build configurable rule engines with manual override capabilities for revenue managers."
    },
    {
      title: "Guest Experience & Digital Concierge Platforms",
      description: "We create personalized guest journeys from pre-arrival preferences to post-checkout reviews. Our digital concierge apps handle mobile check-in, room service orders, spa bookings, and local activity recommendations."
    },
    {
      title: "Multi-Property & Chain Management Solutions",
      description: "We build centralized management dashboards for hotel chains and property groups. Our platforms handle brand standard enforcement, cross-property rate management, loyalty program consolidation, and consolidated financial reporting."
    },
    {
      title: "Travel Marketplace & Aggregator Platform Development",
      description: "We engineer high-performance travel search engines with multi-supplier aggregation, complex filtering, and instant price comparison. Our platforms handle millions of search queries with sub-second response times."
    },
    {
      title: "Hospitality Operations Automation & Analytics",
      description: "We automate housekeeping schedules, maintenance workflows, and inventory management. Our analytics dashboards track RevPAR, ADR, occupancy trends, and guest satisfaction scores to drive data-informed operational decisions."
    }
  ],
  accentColor: "#f97316"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#f97316",
  heading: "Travel & Hospitality Products for Every Segment",
  subtitle: "From airlines and hotels to tour operators and travel agencies — we build booking engines, property management systems, and guest experience platforms.",
  products: [
    {
      title: "Booking & Reservation Engines",
      description: "We build high-performance booking engines with real-time availability, dynamic pricing, and multi-supplier aggregation. Our platforms handle peak-season traffic spikes while delivering sub-second search results across flights, hotels, and activities.",
      highlights: [
        "Real-time inventory & availability search",
        "Dynamic pricing & revenue management",
        "Multi-supplier GDS/OTA aggregation",
        "Mobile-optimized checkout flows",
        "Calendar sync & itinerary management"
      ],
      timelineLabel: "Booking Engine Modules",
      timeline: [
        {
          title: "Search & Discovery",
          detail: "Elastic search with filters, geo-proximity, and price comparison"
        },
        {
          title: "Pricing Engine",
          detail: "Yield management, seasonal rules, and competitor-aware dynamic rates"
        },
        {
          title: "Reservation Management",
          detail: "Multi-property booking, modifications, cancellations, and refunds"
        },
        {
          title: "Payment & Confirmation",
          detail: "Multi-currency checkout, split payments, and instant confirmation"
        }
      ]
    },
    {
      title: "Property Management Systems (PMS)",
      description: "Our PMS solutions unify front desk operations, housekeeping, channel management, and guest communication into a single cloud platform. Built for hotels, resorts, and vacation rentals with multi-property support.",
      highlights: [
        "Front desk & check-in/out automation",
        "Housekeeping task management",
        "Channel manager with OTA sync",
        "Guest CRM & communication hub",
        "Revenue analytics & occupancy forecasting"
      ],
      timelineLabel: "PMS Architecture",
      timeline: [
        {
          title: "Operations Hub",
          detail: "Room assignments, maintenance requests, and staff coordination tools"
        },
        {
          title: "Channel Manager",
          detail: "Real-time rate/inventory sync across Booking.com, Airbnb, and Expedia"
        },
        {
          title: "Guest Experience",
          detail: "Pre-arrival preferences, digital concierge, and review management"
        },
        {
          title: "Business Intelligence",
          detail: "RevPAR tracking, demand forecasting, and competitive rate analysis"
        }
      ]
    },
    {
      title: "Tour & Activity Marketplaces",
      description: "We create tour operator platforms with supplier onboarding, real-time scheduling, and mobile ticketing. Our solutions connect travelers with local experiences through intelligent recommendations and seamless group booking.",
      highlights: [
        "Supplier onboarding & activity catalog",
        "Real-time scheduling & availability",
        "Mobile ticketing & QR check-in",
        "Group booking & private tour requests",
        "Review aggregation & rating systems"
      ],
      timelineLabel: "Activity Platform",
      timeline: [
        {
          title: "Catalog Management",
          detail: "Multi-language listings, media galleries, and dynamic pricing tiers"
        },
        {
          title: "Booking Flow",
          detail: "Calendar-based availability, instant confirmation, and waitlisting"
        },
        {
          title: "Mobile Delivery",
          detail: "QR-code tickets, GPS-guided tours, and offline access support"
        },
        {
          title: "Supplier Dashboard",
          detail: "Earnings reports, calendar management, and guest communication tools"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Travel & Hospitality",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your travel & hospitality needs.",
  accentColor: "#f97316",
};

export const projects: Project[] = [
  {
    id: "bookwise",
    tag: "Booking Platform",
    tagColor: "bg-[#f97316]/15 text-[#f97316] border-[#f97316]/30",
    company: "BookWise",
    industry: "Travel & Hospitality",
    headline: "AI-powered travel booking platform with dynamic pricing serving 1M+ bookings annually.",
    challenge: "Aggregating inventory from 200+ suppliers. Dynamic pricing in real-time. Handling peak load during holiday seasons.",
    solution: "Multi-source inventory aggregation with smart caching. ML-based dynamic pricing engine. Auto-scaling infrastructure handling 10x traffic spikes.",
    duration: "90 days",
    accentColor: "#f97316",
    metrics: [
      { value: 1, suffix: "M+", label: "Annual bookings" },
      { value: 200, suffix: "+", label: "Supplier integrations" },
      { value: 15, suffix: "%", label: "Revenue uplift" },
    ],
    timeline: [
      { phase: "Supplier Integration", detail: "200+ API connections, rate normalization" },
      { phase: "Dynamic Pricing", detail: "ML-based demand forecasting, price optimization" },
      { phase: "Search & UX", detail: "Sub-second search, filters, comparison views" },
      { phase: "Scale & Resilience", detail: "Auto-scaling, circuit breakers, CDN" },
    ],
  },
  {
    id: "hotelops",
    tag: "Hotel Management",
    tagColor: "bg-[#f97316]/15 text-[#f97316] border-[#f97316]/30",
    company: "HotelOps",
    industry: "Travel & Hospitality",
    headline: "Smart hotel management system automating operations across 150+ properties.",
    challenge: "Manual check-in/check-out processes. Revenue management across multiple channels. Staff coordination across shifts.",
    solution: "Digital check-in with mobile keys. AI revenue management optimizing room pricing. Staff management with shift scheduling and task tracking.",
    duration: "70 days",
    accentColor: "#f97316",
    metrics: [
      { value: 150, suffix: "+", label: "Properties managed" },
      { value: 20, suffix: "%", label: "Revenue increase" },
      { value: 50, suffix: "%", label: "Faster check-in" },
    ],
    timeline: [
      { phase: "PMS Core", detail: "Reservation management, room inventory" },
      { phase: "Digital Guest Journey", detail: "Mobile check-in, digital keys, requests" },
      { phase: "Revenue Management", detail: "Dynamic pricing across OTA channels" },
      { phase: "Staff Operations", detail: "Shift scheduling, task management, reporting" },
    ],
  },
];

