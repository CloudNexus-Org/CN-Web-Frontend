import { Calendar, Users, Clock, CreditCard, Star, BarChart3, Award, Zap, ShieldCheck, HeartHandshake, Brain, MapPin, Cpu, Database, Activity, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "Home Service Platform Development",
  subtitle: "On-Demand Services at Your Doorstep",
  description: "On-demand home service platforms connecting service providers with customers through intelligent booking, scheduling, and real-time tracking.",
  heroImage: "/images/stock/stock-bbc14d0b55.jpg",
  accentColor: "#0891b2",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#0891b2",
  heading: "Connecting Professionals & Homeowners",
  descriptionLeft: "We build on-demand home service platforms that intelligently match professionals with homeowners based on skills, ratings, and proximity. Our solutions include real-time scheduling, verified review systems, and subscription-based recurring service management.",
  descriptionRight: "From AI-powered matching engines and calendar integrations to escrow-based payments, automated quality checklists with photo verification, and smart cleaner rotation systems, we help home service businesses scale operations while maintaining service quality.",
  highlights: [
      {
          "value": "10K+",
          "label": "Professionals"
      },
      {
          "value": "5000+",
          "label": "Monthly bookings"
      },
      {
          "value": "4.7/5",
          "label": "Average rating"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Home Service Platform Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: Calendar, title: "Service Booking Platforms", description: "Intuitive booking engines with service selection, scheduling, and provider matching." },
    { icon: Users, title: "Provider Matching", description: "AI-powered algorithms matching customers with the best available service providers." },
    { icon: Clock, title: "Real-Time Scheduling", description: "Dynamic scheduling systems with availability management and conflict resolution." },
    { icon: CreditCard, title: "Secure Payments", description: "In-app payment processing with multiple payment methods and invoicing." },
    { icon: Star, title: "Rating & Reviews", description: "Comprehensive rating systems with verified reviews and quality scoring." },
    { icon: BarChart3, title: "Service Analytics", description: "Dashboards tracking bookings, provider performance, and customer satisfaction." },
  ],
  accentColor: "#0891b2",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Home Maintenance",
      description: "Platforms for plumbing, electrical, HVAC, and general home repair services.",
      features: ["Service catalog", "Provider profiles", "Instant booking", "Price estimation", "Service history"],
    },
    {
      title: "Beauty & Wellness",
      description: "On-demand beauty, spa, and wellness service booking platforms.",
      features: ["Stylist profiles", "Portfolio showcase", "Package deals", "Recurring appointments", "Product recommendations"],
    },
    {
      title: "Cleaning Services",
      description: "House cleaning and maintenance service platforms with scheduling.",
      features: ["Service packages", "Recurring schedules", "Checklist management", "Quality inspection", "Supply management"],
    },
    {
      title: "Healthcare at Home",
      description: "Home healthcare service platforms for nursing, therapy, and elderly care.",
      features: ["Care provider matching", "Medical record access", "Medication reminders", "Video consultations", "Family dashboards"],
    },
  ],
  accentColor: "#0891b2",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Service Model Analysis",
      description: "Understanding service categories, provider workflows, and customer expectations.",
      icon: Search,
      highlights: [
        "Service category & workflow mapping",
        "Provider onboarding process design",
        "Pricing model & commission evaluation",
        "Customer booking funnel analysis",
      ],
    },
    {
      step: "02",
      title: "Multi-App Design",
      description: "Designing seamless booking experiences for customers and providers.",
      icon: Palette,
      highlights: [
        "Customer booking flow prototyping",
        "Provider scheduling dashboard UX",
        "Admin management panel wireframing",
        "Real-time tracking interface design",
      ],
    },
    {
      step: "03",
      title: "Platform Architecture",
      description: "Developing matching algorithms, scheduling engines, and payment systems.",
      icon: Settings,
      highlights: [
        "Matching & dispatch algorithm design",
        "Real-time availability engine",
        "Payment & escrow infrastructure",
        "Review & rating system framework",
      ],
    },
    {
      step: "04",
      title: "Parallel Development",
      description: "Building verification, training, and management tools for service providers.",
      icon: Code2,
      highlights: [
        "Customer, provider & admin app sprints",
        "Geolocation & scheduling modules",
        "In-app messaging & notification systems",
        "Automated testing across platforms",
      ],
    },
    {
      step: "05",
      title: "Quality Assurance & Launch",
      description: "End-to-end testing of booking flows, payments, and notification systems.",
      icon: ShieldCheck,
      highlights: [
        "End-to-end booking flow testing",
        "Payment processing security validation",
        "Provider background check integration",
        "Neighborhood-level soft launch strategy",
      ],
    },
    {
      step: "06",
      title: "Marketplace Growth",
      description: "Market launch with provider recruitment and customer acquisition strategies.",
      icon: Rocket,
      highlights: [
        "Provider utilization & earnings analytics",
        "Customer satisfaction metric tracking",
        "Dynamic pricing optimization",
        "Service category expansion planning",
      ],
    },
  ],
  accentColor: "#0891b2",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Platform Expertise", description: "Built home service platforms connecting thousands of providers with customers." },
    { icon: Zap, title: "Instant Matching", description: "AI-powered provider matching within seconds of booking request." },
    { icon: ShieldCheck, title: "Trust & Safety", description: "Background verification, insurance integration, and dispute resolution." },
    { icon: HeartHandshake, title: "Scalable Growth", description: "Architecture designed to scale from single city to nationwide operations." },
  ],
  accentColor: "#0891b2",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI Matching", description: "Machine learning algorithms for optimal provider-customer matching." },
    { icon: MapPin, title: "Location Services", description: "Geofencing, proximity search, and real-time provider location tracking." },
    { icon: Cpu, title: "Scheduling Engine", description: "Smart scheduling with availability sync, conflict resolution, and optimization." },
    { icon: Database, title: "Cloud Platform", description: "Scalable cloud infrastructure with real-time notifications and updates." },
    { icon: Activity, title: "Business Intelligence", description: "Analytics dashboards for service trends, revenue, and quality metrics." },
  ],
  accentColor: "#0891b2",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Home Service Platform Expertise",
  subtitle: "We build reliable, scalable platforms that connect homeowners with service professionals through intelligent matching, real-time tracking, and quality assurance.",
  items: [
    {
      title: "Intelligent Provider Matching & Dispatch Algorithms",
      description: "Our matching engine considers provider proximity, skill sets, availability, ratings, and workload to assign the best professional for every job. We optimize dispatch routes and minimize travel time for maximum efficiency."
    },
    {
      title: "Real-Time Job Tracking & GPS Fleet Management",
      description: "We build live tracking systems that show customers exactly where their service provider is, with accurate ETAs and automated arrival notifications. Our GPS fleet management provides supervisors with complete field visibility."
    },
    {
      title: "Dynamic Pricing & Service Estimation Engines",
      description: "Our pricing engines calculate accurate job estimates based on service type, complexity, materials, location, and time-of-day factors. We support flat-rate, hourly, and subscription-based pricing models with transparent breakdowns."
    },
    {
      title: "Provider Onboarding & Background Verification",
      description: "We build comprehensive onboarding workflows with identity verification, background checks, license validation, and skill assessments. Our systems ensure only qualified, vetted professionals join your platform."
    },
    {
      title: "Review, Rating & Quality Assurance Systems",
      description: "Our quality assurance platforms include post-job surveys, photo documentation, provider scorecards, and automated complaint resolution workflows. We build reputation systems that reward consistency and penalize poor service."
    },
    {
      title: "Subscription & Recurring Service Management",
      description: "We create subscription platforms for recurring home maintenance with automated scheduling, service reminders, and membership management. Our retention analytics predict churn and trigger proactive engagement campaigns."
    }
  ],
  accentColor: "#0891b2"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#0891b2",
  heading: "Home Service Products for Every Provider & Customer",
  subtitle: "From on-demand handyman and cleaning services to home maintenance subscriptions and vendor marketplaces — we build platforms that connect service professionals with homeowners.",
  products: [
    {
      title: "On-Demand Service Marketplace",
      description: "We create Uber-like home service marketplaces with real-time provider matching, dynamic pricing, and GPS-based job tracking. Our platforms support multi-category services with automated dispatching and quality assurance workflows.",
      highlights: [
        "Real-time provider matching & dispatch",
        "GPS-based job tracking & ETAs",
        "Dynamic pricing & surge management",
        "Multi-category service catalogs",
        "Rating & review moderation"
      ],
      timelineLabel: "Marketplace Architecture",
      timeline: [
        {
          title: "Matching Engine",
          detail: "Proximity-based assignment, skill matching, and availability optimization"
        },
        {
          title: "Job Management",
          detail: "Real-time status tracking, photo documentation, and completion verification"
        },
        {
          title: "Pricing Module",
          detail: "Base rates, distance surcharges, and time-of-day adjustments"
        },
        {
          title: "Quality Assurance",
          detail: "Post-job surveys, provider scorecards, and complaint resolution workflows"
        }
      ]
    },
    {
      title: "Subscription & Maintenance Plans",
      description: "Our subscription platforms enable recurring home maintenance services with automated scheduling, service reminders, and membership management. Built for HVAC companies, pest control, lawn care, and general maintenance providers.",
      highlights: [
        "Flexible subscription plan builder",
        "Automated service scheduling",
        "Membership tier management",
        "Preventive maintenance reminders",
        "Customer retention analytics"
      ],
      timelineLabel: "Subscription Platform",
      timeline: [
        {
          title: "Plan Builder",
          detail: "Configurable frequencies, add-on services, and seasonal adjustments"
        },
        {
          title: "Scheduling Engine",
          detail: "Route optimization, technician assignment, and customer time preferences"
        },
        {
          title: "Billing Automation",
          detail: "Recurring invoicing, proration, and auto-renewal management"
        },
        {
          title: "Retention Tools",
          detail: "Usage analytics, satisfaction surveys, and churn prediction alerts"
        }
      ]
    },
    {
      title: "Field Service Management",
      description: "We build field service platforms that optimize technician dispatch, inventory management, and job completion workflows. Our solutions include mobile-first technician apps with offline capability and real-time supervisor dashboards.",
      highlights: [
        "Intelligent technician dispatching",
        "Mobile app with offline mode",
        "Parts inventory & van stock tracking",
        "Customer signature & photo capture",
        "SLA monitoring & escalation rules"
      ],
      timelineLabel: "Field Service Stack",
      timeline: [
        {
          title: "Dispatch Optimization",
          detail: "AI-based scheduling considering skills, proximity, and workload balance"
        },
        {
          title: "Mobile Technician App",
          detail: "Job details, navigation, checklists, and offline data sync"
        },
        {
          title: "Inventory Tracking",
          detail: "Parts usage, van stock levels, and warehouse replenishment triggers"
        },
        {
          title: "Supervisor Console",
          detail: "Live field view, SLA dashboards, and exception management"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Home Service",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your home service needs.",
  accentColor: "#0891b2",
};

export const projects: Project[] = [
  {
    id: "fixitpro",
    tag: "Home Service App",
    tagColor: "bg-[#0891b2]/15 text-[#0891b2] border-[#0891b2]/30",
    company: "FixItPro",
    industry: "Home Service",
    headline: "On-demand home service platform connecting 10K+ professionals with homeowners.",
    challenge: "Matching right professionals to service requests. Real-time scheduling and availability. Trust and quality assurance.",
    solution: "AI-powered matching based on skills, ratings, and proximity. Real-time scheduling with calendar integration. Review system with verified service completion.",
    duration: "60 days",
    accentColor: "#0891b2",
    metrics: [
      { value: 10, suffix: "K+", label: "Professionals" },
      { value: 4.7, suffix: "/5", label: "Avg rating" },
      { value: 15, suffix: " min", label: "Avg response time" },
    ],
    timeline: [
      { phase: "Matching Engine", detail: "Skill, rating, and proximity-based matching" },
      { phase: "Scheduling System", detail: "Real-time availability, calendar sync" },
      { phase: "Trust & Safety", detail: "Background checks, verified reviews" },
      { phase: "Payment & Support", detail: "Escrow payments, dispute resolution" },
    ],
  },
  {
    id: "cleanswift",
    tag: "Cleaning Service",
    tagColor: "bg-[#0891b2]/15 text-[#0891b2] border-[#0891b2]/30",
    company: "CleanSwift",
    industry: "Home Service",
    headline: "Subscription-based cleaning service platform managing 5000+ recurring bookings monthly.",
    challenge: "Managing recurring bookings and cleaner assignments. Quality consistency across services. Last-minute cancellation handling.",
    solution: "Automated recurring scheduling with smart cleaner rotation. Post-service quality checklist with photo verification. Auto-reassignment for cancellations.",
    duration: "45 days",
    accentColor: "#0891b2",
    metrics: [
      { value: 5000, suffix: "+", label: "Monthly bookings" },
      { value: 98, suffix: "%", label: "Service completion" },
      { value: 92, suffix: "%", label: "Retention rate" },
    ],
    timeline: [
      { phase: "Subscription Engine", detail: "Recurring plans, flexible scheduling" },
      { phase: "Cleaner Management", detail: "Smart rotation, availability tracking" },
      { phase: "Quality Assurance", detail: "Photo checklists, customer feedback loops" },
      { phase: "Auto-Reassignment", detail: "Cancellation handling, backup matching" },
    ],
  },
];

