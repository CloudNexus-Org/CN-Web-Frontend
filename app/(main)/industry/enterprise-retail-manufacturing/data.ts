import { Factory, Package, Settings, BarChart3, Wrench, Truck, Award, Zap, ShieldCheck, HeartHandshake, Cpu, Brain, Database, Activity, Eye, Search, Palette, Code2, Rocket } from "lucide-react";
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
  title: "Enterprise & Manufacturing Software",
  subtitle: "Smart Solutions for Industry",
  description: "Customized enterprise, retail & manufacturing solutions that streamline supply chain, optimize operations, and leverage IoT-powered smart factory systems.",
  heroImage: "/images/stock/stock-f83a058636.jpg",
  accentColor: "#64748b",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#64748b",
  heading: "Smart Manufacturing & Retail",
  descriptionLeft: "We build IoT-powered smart factory platforms and omnichannel retail solutions that give enterprises complete visibility over production lines, inventory, and customer touchpoints. Our solutions reduce downtime, optimize operations, and unify sales channels.",
  descriptionRight: "From 1000+ IoT sensor deployments with predictive maintenance to unified POS systems connecting 500+ retail stores, we help manufacturers and retailers leverage technology for operational excellence and competitive advantage.",
  highlights: [
      {
          "value": "1000+",
          "label": "IoT sensors deployed"
      },
      {
          "value": "500+",
          "label": "Stores unified"
      },
      {
          "value": "45%",
          "label": "Downtime reduced"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Enterprise & Manufacturing Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: Factory, title: "Smart Factory Systems", description: "IoT-powered manufacturing execution systems with real-time production monitoring." },
    { icon: Package, title: "Supply Chain Management", description: "End-to-end supply chain visibility with demand forecasting and inventory optimization." },
    { icon: Settings, title: "ERP Integration", description: "Seamless integration with major ERP systems for unified business operations." },
    { icon: BarChart3, title: "Quality Control", description: "Automated quality inspection systems with AI-powered defect detection." },
    { icon: Wrench, title: "Predictive Maintenance", description: "IoT sensor-based predictive maintenance reducing downtime and repair costs." },
    { icon: Truck, title: "Logistics Optimization", description: "Smart logistics with route optimization, warehouse management, and fleet tracking." },
  ],
  accentColor: "#64748b",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Manufacturing Execution",
      description: "Real-time manufacturing monitoring and control for optimized production.",
      features: ["Production scheduling", "Work order management", "Machine monitoring", "Yield optimization", "Compliance tracking"],
    },
    {
      title: "Inventory Management",
      description: "Smart inventory solutions with demand forecasting and automated replenishment.",
      features: ["Demand forecasting", "Auto-replenishment", "Multi-warehouse management", "Barcode/RFID tracking", "Waste reduction"],
    },
    {
      title: "Retail Operations",
      description: "Digital solutions for retail store management and customer engagement.",
      features: ["POS systems", "Customer loyalty", "Store analytics", "Employee scheduling", "Omnichannel integration"],
    },
    {
      title: "Supply Chain Visibility",
      description: "End-to-end supply chain transparency from supplier to customer.",
      features: ["Supplier management", "Order tracking", "Logistics coordination", "Risk management", "Sustainability tracking"],
    },
  ],
  accentColor: "#64748b",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Enterprise Discovery",
      description: "Evaluating current operations, identifying inefficiencies, and defining digital goals.",
      icon: Search,
      highlights: [
        "Business process & workflow mapping",
        "Legacy system audit & migration planning",
        "ERP/CRM integration scoping",
        "Stakeholder requirements gathering",
      ],
    },
    {
      step: "02",
      title: "UX/UI Design",
      description: "Architecting scalable solutions with IoT, AI, and cloud integration.",
      icon: Palette,
      highlights: [
        "Enterprise dashboard prototyping",
        "POS & inventory management UI design",
        "Role-based access interface planning",
        "Multi-location management wireframes",
      ],
    },
    {
      step: "03",
      title: "Enterprise Architecture",
      description: "Building robust platforms with real-time monitoring and analytics capabilities.",
      icon: Settings,
      highlights: [
        "Microservices & API gateway design",
        "Multi-tenant SaaS infrastructure",
        "Data warehouse & BI pipeline planning",
        "Disaster recovery & redundancy strategy",
      ],
    },
    {
      step: "04",
      title: "Agile Delivery",
      description: "Connecting with ERP, MES, SCADA, and existing manufacturing systems.",
      icon: Code2,
      highlights: [
        "Module-based sprint delivery",
        "ERP & supply chain integrations",
        "Automated regression testing suites",
        "Incremental feature flag deployments",
      ],
    },
    {
      step: "05",
      title: "UAT & Deployment",
      description: "On-site testing, calibration, and validation in production environments.",
      icon: ShieldCheck,
      highlights: [
        "User acceptance testing with stakeholders",
        "Data migration validation & rollback plans",
        "Enterprise security & SSO audit",
        "Multi-site phased go-live strategy",
      ],
    },
    {
      step: "06",
      title: "Continuous Innovation",
      description: "Phased deployment with operator training and ongoing technical support.",
      icon: Rocket,
      highlights: [
        "Operational efficiency KPI tracking",
        "AI-driven demand forecasting",
        "Process automation opportunities",
        "Quarterly roadmap & ROI reviews",
      ],
    },
  ],
  accentColor: "#64748b",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Industry 4.0 Ready", description: "Built smart factory solutions for leading manufacturers globally." },
    { icon: Zap, title: "Real-Time Monitoring", description: "Sub-second data processing from thousands of IoT sensors simultaneously." },
    { icon: ShieldCheck, title: "Reliable Systems", description: "99.99% uptime for mission-critical manufacturing operations." },
    { icon: HeartHandshake, title: "Integration Experts", description: "Seamless connectivity with ERP, MES, and legacy manufacturing systems." },
  ],
  accentColor: "#64748b",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Cpu, title: "IoT & Edge Computing", description: "Connected sensors and edge processing for real-time factory floor insights." },
    { icon: Brain, title: "AI & Computer Vision", description: "Machine learning for quality inspection, demand forecasting, and process optimization." },
    { icon: Database, title: "Digital Twin", description: "Virtual replicas of physical assets for simulation and predictive analysis." },
    { icon: Activity, title: "Industrial Analytics", description: "Big data analytics for production optimization and supply chain intelligence." },
    { icon: Wrench, title: "Robotics & Automation", description: "Integration with robotic systems and automated material handling." },
  ],
  accentColor: "#64748b",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Enterprise & Manufacturing Expertise",
  subtitle: "We digitize complex industrial and retail operations with modular, scalable platforms that unify data, automate workflows, and drive operational excellence.",
  items: [
    {
      title: "ERP Customization & Enterprise System Integration",
      description: "We extend and customize ERP platforms with industry-specific modules, automated workflows, and third-party integrations. Our middleware connects SAP, Oracle, Dynamics 365, and custom systems into a unified data ecosystem."
    },
    {
      title: "Manufacturing Execution & Shop Floor Digitization",
      description: "We build MES platforms that provide real-time production visibility with work order tracking, quality checkpoints, and OEE monitoring. Our solutions integrate with PLCs and SCADA for complete shop floor digitization."
    },
    {
      title: "Supply Chain Visibility & Demand Planning Solutions",
      description: "Our supply chain platforms provide end-to-end visibility from raw materials to final delivery. We build demand sensing models, inventory optimization engines, and supplier collaboration portals that reduce stockouts and excess inventory."
    },
    {
      title: "Quality Management & Compliance Automation",
      description: "We implement digital QMS platforms with inspection plans, non-conformance tracking, CAPA workflows, and statistical process control. Our compliance automation handles ISO, FDA, and industry-specific regulatory requirements."
    },
    {
      title: "Omnichannel Retail & Unified Commerce Platforms",
      description: "We build unified commerce solutions that bridge online and offline channels with real-time inventory sync, click-and-collect, endless aisle, and consistent customer experiences across all touchpoints."
    },
    {
      title: "Industrial IoT & Predictive Operations Analytics",
      description: "We deploy IIoT sensor networks with edge analytics for condition monitoring, energy optimization, and predictive maintenance. Our dashboards correlate machine data with production metrics to identify optimization opportunities."
    }
  ],
  accentColor: "#64748b"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#64748b",
  heading: "Enterprise & Manufacturing Products for Every Operation",
  subtitle: "From ERP and supply chain platforms to factory automation and quality management — we digitize industrial and retail operations at scale.",
  products: [
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "We build modular ERP solutions that unify finance, HR, procurement, and operations into a single cloud platform. Our systems support multi-entity, multi-currency operations with real-time dashboards and automated workflows.",
      highlights: [
        "Modular finance & accounting",
        "HR & payroll management",
        "Procurement & vendor management",
        "Multi-entity consolidation",
        "Custom workflow automation"
      ],
      timelineLabel: "ERP Modules",
      timeline: [
        {
          title: "Financial Core",
          detail: "GL, AP/AR, fixed assets, and multi-currency consolidation engine"
        },
        {
          title: "Supply Chain Module",
          detail: "Purchase orders, goods receipt, and vendor performance scoring"
        },
        {
          title: "HR & Workforce",
          detail: "Employee lifecycle, payroll processing, and time/attendance tracking"
        },
        {
          title: "Business Intelligence",
          detail: "Cross-module dashboards, variance analysis, and forecast modeling"
        }
      ]
    },
    {
      title: "Manufacturing Execution Systems (MES)",
      description: "Our MES platforms provide real-time production visibility with work order management, quality checkpoints, and machine OEE tracking. We integrate with PLCs and SCADA systems for complete shop floor digitization.",
      highlights: [
        "Real-time production monitoring",
        "Work order management & scheduling",
        "Quality checkpoint automation",
        "OEE & machine performance tracking",
        "PLC & SCADA system integration"
      ],
      timelineLabel: "MES Architecture",
      timeline: [
        {
          title: "Production Control",
          detail: "Work order routing, batch tracking, and real-time status updates"
        },
        {
          title: "Quality Management",
          detail: "Inspection plans, SPC charts, and non-conformance handling workflows"
        },
        {
          title: "Machine Connectivity",
          detail: "OPC-UA/MQTT integration, downtime logging, and cycle time analysis"
        },
        {
          title: "Performance Analytics",
          detail: "OEE dashboards, bottleneck identification, and shift comparison reports"
        }
      ]
    },
    {
      title: "Retail Operations & POS Systems",
      description: "We develop unified retail platforms with cloud POS, inventory management, and customer loyalty programs. Our solutions bridge online and offline channels for true omnichannel experiences with real-time stock visibility.",
      highlights: [
        "Cloud-based POS terminals",
        "Unified inventory management",
        "Customer loyalty & CRM",
        "Omnichannel order management",
        "Employee scheduling & performance"
      ],
      timelineLabel: "Retail Platform",
      timeline: [
        {
          title: "POS System",
          detail: "Touch-optimized checkout, barcode scanning, and payment processing"
        },
        {
          title: "Inventory Hub",
          detail: "Multi-location stock, auto-replenishment, and transfer management"
        },
        {
          title: "Customer Engine",
          detail: "Loyalty points, purchase history, and personalized promotions"
        },
        {
          title: "Operations Center",
          detail: "Store performance, labor scheduling, and shrinkage monitoring"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Enterprise Retail & Manufacturing",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your enterprise retail & manufacturing needs.",
  accentColor: "#64748b",
};

export const projects: Project[] = [
  {
    id: "factoryiq",
    tag: "Smart Factory",
    tagColor: "bg-[#64748b]/15 text-[#64748b] border-[#64748b]/30",
    company: "FactoryIQ",
    industry: "Manufacturing",
    headline: "IoT-powered smart factory platform reducing downtime by 45% across 12 production lines.",
    challenge: "Unplanned equipment downtime costing millions. No predictive maintenance capability. Siloed production data.",
    solution: "1000+ IoT sensors for real-time machine monitoring. ML-based predictive maintenance models. Unified production dashboard with OEE tracking.",
    duration: "100 days",
    accentColor: "#64748b",
    metrics: [
      { value: 45, suffix: "%", label: "Downtime reduced" },
      { value: 1000, suffix: "+", label: "IoT sensors" },
      { value: 30, suffix: "%", label: "OEE improvement" },
    ],
    timeline: [
      { phase: "IoT Infrastructure", detail: "Sensor deployment, edge computing setup" },
      { phase: "Data Platform", detail: "Time-series DB, real-time streaming pipeline" },
      { phase: "Predictive Models", detail: "Equipment failure prediction, anomaly detection" },
      { phase: "Dashboard & Alerts", detail: "OEE tracking, automated maintenance alerts" },
    ],
  },
  {
    id: "retailedge",
    tag: "Retail POS",
    tagColor: "bg-[#64748b]/15 text-[#64748b] border-[#64748b]/30",
    company: "RetailEdge",
    industry: "Retail",
    headline: "Omnichannel POS system unifying 500+ retail stores with real-time inventory.",
    challenge: "Disconnected online and offline sales channels. Inventory discrepancies across stores. Slow checkout experience.",
    solution: "Unified omnichannel POS with offline-first architecture. Real-time inventory sync across all channels. Mobile POS for queue-busting during peak hours.",
    duration: "75 days",
    accentColor: "#64748b",
    metrics: [
      { value: 500, suffix: "+", label: "Stores unified" },
      { value: 99, suffix: "%", label: "Inventory accuracy" },
      { value: 40, suffix: "%", label: "Faster checkout" },
    ],
    timeline: [
      { phase: "POS Architecture", detail: "Offline-first, multi-store, cloud sync" },
      { phase: "Inventory Engine", detail: "Real-time stock across all channels" },
      { phase: "Omnichannel Integration", detail: "Online, in-store, mobile unification" },
      { phase: "Store Rollout", detail: "Phased deployment, staff training, support" },
    ],
  },
];

