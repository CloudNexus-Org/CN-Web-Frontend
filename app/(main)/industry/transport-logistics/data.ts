import { Truck, MapPin, Package, Clock, BarChart3, Smartphone, Award, Zap, ShieldCheck, HeartHandshake, Brain, Cpu, Database, Activity, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "Transport & Logistics Software",
  subtitle: "Streamlining Supply Chains",
  description: "Complete solutions for transport & logistics businesses from on-demand delivery and warehouse management to fleet tracking and courier solutions.",
  heroImage: "/images/stock/stock-4d7fff1498.jpg",
  accentColor: "#f59e0b",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#f59e0b",
  heading: "Revolutionizing Transport & Logistics",
  descriptionLeft: "We build intelligent fleet management and supply chain platforms that give businesses complete visibility over their operations. Using IoT sensors, AI-powered route optimization, and predictive maintenance, we help reduce costs and improve delivery performance.",
  descriptionRight: "Our logistics solutions integrate GPS tracking, real-time geofencing, automated documentation (OCR), and vendor management into unified platforms. We help companies track thousands of vehicles, optimize routes in real-time, and predict equipment failures before they happen.",
  highlights: [
      {
          "value": "2000+",
          "label": "Vehicles tracked"
      },
      {
          "value": "25%",
          "label": "Fuel cost savings"
      },
      {
          "value": "35%",
          "label": "Delay reduction"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Transport & Logistics Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: Truck, title: "Fleet Management Systems", description: "Real-time GPS fleet tracking with route optimization and driver performance monitoring." },
    { icon: MapPin, title: "Route Optimization", description: "AI-powered route planning algorithms reducing fuel costs and delivery times." },
    { icon: Package, title: "Warehouse Management", description: "End-to-end warehouse automation with inventory tracking and order fulfillment." },
    { icon: Clock, title: "Dispatch & Scheduling", description: "Automated dispatch systems with intelligent job assignment and real-time updates." },
    { icon: BarChart3, title: "Supply Chain Analytics", description: "Comprehensive dashboards providing visibility across the entire supply chain." },
    { icon: Smartphone, title: "Last-Mile Delivery Apps", description: "Customer-facing delivery apps with real-time tracking and delivery notifications." },
  ],
  accentColor: "#f59e0b",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Fleet & Vehicle Tracking",
      description: "Real-time GPS tracking and fleet management for optimized operations.",
      features: ["Live GPS tracking", "Driver behavior monitoring", "Fuel consumption analytics", "Maintenance scheduling", "Geofencing alerts"],
    },
    {
      title: "Warehouse Automation",
      description: "Smart warehouse solutions with automated inventory management and order processing.",
      features: ["Barcode/RFID scanning", "Pick-pack-ship automation", "Inventory forecasting", "Multi-location management", "Returns processing"],
    },
    {
      title: "Last-Mile Delivery",
      description: "Efficient last-mile delivery solutions with dynamic routing and proof of delivery.",
      features: ["Dynamic route optimization", "Proof of delivery (POD)", "Customer notifications", "Driver mobile apps", "Delivery analytics"],
    },
    {
      title: "Freight Management",
      description: "End-to-end freight management covering booking, tracking, and documentation.",
      features: ["Freight booking platform", "Container tracking", "Document management", "Customs compliance", "Rate management"],
    },
  ],
  accentColor: "#f59e0b",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Logistics Assessment",
      description: "Mapping logistics workflows, identifying bottlenecks, and defining optimization goals.",
      icon: Search,
      highlights: [
        "Supply chain workflow & bottleneck analysis",
        "Fleet management system evaluation",
        "IoT sensor & telematics scoping",
        "Regulatory & compliance mapping",
      ],
    },
    {
      step: "02",
      title: "Dashboard Design",
      description: "Designing scalable systems with real-time tracking and integration capabilities.",
      icon: Palette,
      highlights: [
        "Fleet tracking map interface design",
        "Route optimization visualization",
        "Warehouse management UI prototyping",
        "Driver & dispatcher dashboard UX",
      ],
    },
    {
      step: "03",
      title: "System Architecture",
      description: "Building robust platforms with GPS, IoT, and AI-powered optimization features.",
      icon: Settings,
      highlights: [
        "Real-time GPS tracking infrastructure",
        "IoT data ingestion pipeline design",
        "Route optimization algorithm framework",
        "ERP & TMS integration architecture",
      ],
    },
    {
      step: "04",
      title: "Modular Development",
      description: "Connecting with ERP, WMS, TMS, and third-party logistics provider systems.",
      icon: Code2,
      highlights: [
        "Fleet, route & warehouse module sprints",
        "IoT device integration & testing",
        "Automated dispatch algorithm builds",
        "API gateway for partner integrations",
      ],
    },
    {
      step: "05",
      title: "Field Testing & Launch",
      description: "Load testing, GPS accuracy validation, and end-to-end workflow verification.",
      icon: ShieldCheck,
      highlights: [
        "Real-route GPS accuracy validation",
        "Load & stress testing for fleet scale",
        "Compliance audit for transport regulations",
        "Regional phased deployment",
      ],
    },
    {
      step: "06",
      title: "Operational Intelligence",
      description: "Phased rollout with driver training, fleet onboarding, and 24/7 support.",
      icon: Rocket,
      highlights: [
        "Fuel efficiency & cost analytics",
        "Delivery performance dashboards",
        "Predictive maintenance alerts",
        "Route optimization continuous learning",
      ],
    },
  ],
  accentColor: "#f59e0b",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Logistics Expertise", description: "Deep domain knowledge in transport, warehousing, and supply chain operations." },
    { icon: Zap, title: "Real-Time Tracking", description: "Sub-second GPS updates with intelligent alerts and predictive ETAs." },
    { icon: ShieldCheck, title: "Scalable Systems", description: "Platforms handling thousands of simultaneous deliveries and fleet operations." },
    { icon: HeartHandshake, title: "Integration Ready", description: "Seamless connectivity with major ERP, WMS, and TMS platforms." },
  ],
  accentColor: "#f59e0b",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI Route Optimization", description: "Machine learning algorithms for optimal route planning and demand forecasting." },
    { icon: Cpu, title: "IoT & Telematics", description: "Connected sensors for vehicle diagnostics, temperature monitoring, and asset tracking." },
    { icon: MapPin, title: "Geospatial Technology", description: "Advanced mapping with real-time traffic, weather, and road condition data." },
    { icon: Database, title: "Big Data Analytics", description: "Processing millions of data points for supply chain insights and predictions." },
    { icon: Activity, title: "Predictive Maintenance", description: "AI-driven vehicle maintenance predictions reducing downtime and repair costs." },
  ],
  accentColor: "#f59e0b",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Logistics Technology Expertise",
  subtitle: "We engineer intelligent supply chain platforms that optimize routing, automate warehousing, and provide real-time visibility across every transportation mode.",
  items: [
    {
      title: "Fleet Telematics & Connected Vehicle Platforms",
      description: "We integrate GPS trackers, OBD-II diagnostics, dashcams, and fuel sensors into unified fleet dashboards. Our telematics platforms provide real-time vehicle health, driver behavior scoring, and predictive maintenance alerts."
    },
    {
      title: "Warehouse Automation & Intelligent Slotting Systems",
      description: "We build WMS solutions with AI-powered slotting algorithms, wave planning optimization, and pick-path routing. Our automation integrates with conveyor systems, AS/RS, and robotic picking for maximum throughput."
    },
    {
      title: "Multi-Modal Transportation Management Systems",
      description: "Our TMS platforms orchestrate shipments across road, rail, ocean, and air with multi-carrier rate comparison, load optimization, and automated documentation. We build visibility dashboards that track shipments across mode transitions."
    },
    {
      title: "Last-Mile Delivery Optimization & Proof of Delivery",
      description: "We engineer last-mile platforms with dynamic route optimization, delivery window management, and digital proof-of-delivery capture. Our solutions support same-day, next-day, and scheduled delivery models with real-time customer tracking."
    },
    {
      title: "Supply Chain Analytics & Demand Forecasting",
      description: "Our analytics platforms process logistics data to identify cost reduction opportunities, carrier performance trends, and demand patterns. We build forecasting models that optimize inventory positioning and transportation capacity planning."
    },
    {
      title: "Customs, Compliance & Trade Documentation Automation",
      description: "We automate customs declarations, trade compliance screening, and shipping documentation workflows. Our platforms handle HS code classification, restricted party screening, and duty calculation for international shipments."
    }
  ],
  accentColor: "#f59e0b"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#f59e0b",
  heading: "Logistics Products We Build for Every Supply Chain",
  subtitle: "From fleet management and warehouse automation to last-mile delivery and freight brokerage — we power every link in the logistics chain.",
  products: [
    {
      title: "Fleet Management & Telematics",
      description: "We build comprehensive fleet management platforms with real-time GPS tracking, driver behavior scoring, and predictive maintenance. Our solutions integrate OBD-II, dashcams, and fuel sensors for complete fleet visibility and cost optimization.",
      highlights: [
        "Real-time GPS fleet tracking",
        "Driver behavior & safety scoring",
        "Fuel consumption analytics",
        "Predictive maintenance alerts",
        "Compliance & HOS logging"
      ],
      timelineLabel: "Fleet Intelligence",
      timeline: [
        {
          title: "Vehicle Tracking",
          detail: "Live GPS, geofencing alerts, and historical route playback"
        },
        {
          title: "Driver Analytics",
          detail: "Harsh braking, speeding detection, and safety scorecard generation"
        },
        {
          title: "Maintenance Engine",
          detail: "Odometer-based scheduling, diagnostic code alerts, and repair history"
        },
        {
          title: "Cost Optimization",
          detail: "Fuel analytics, idle time reduction, and TCO reporting per vehicle"
        }
      ]
    },
    {
      title: "Warehouse Management Systems (WMS)",
      description: "Our WMS solutions automate receiving, putaway, picking, packing, and shipping with barcode/RFID integration. Built for multi-warehouse operations with wave planning, zone optimization, and real-time inventory accuracy.",
      highlights: [
        "Barcode & RFID scanning workflows",
        "Wave planning & pick optimization",
        "Multi-warehouse management",
        "Put-away & slotting algorithms",
        "Shipping label & carrier integration"
      ],
      timelineLabel: "WMS Modules",
      timeline: [
        {
          title: "Inbound Operations",
          detail: "Receiving, quality inspection, putaway assignment, and cross-docking"
        },
        {
          title: "Inventory Control",
          detail: "Cycle counting, lot tracking, expiry management, and ABC analysis"
        },
        {
          title: "Order Fulfillment",
          detail: "Wave planning, zone picking, pack verification, and shipping execution"
        },
        {
          title: "Analytics Suite",
          detail: "Warehouse KPIs, picker productivity, and space utilization heatmaps"
        }
      ]
    },
    {
      title: "Freight Brokerage & TMS",
      description: "We develop transportation management systems that connect shippers with carriers, automate load matching, and optimize freight costs. Our platforms support multi-modal shipping with rate comparison and document automation.",
      highlights: [
        "Load board & carrier matching",
        "Multi-modal rate comparison",
        "Automated BOL & document management",
        "Shipment tracking & visibility",
        "Invoice audit & freight payment"
      ],
      timelineLabel: "TMS Platform",
      timeline: [
        {
          title: "Load Matching",
          detail: "AI-based carrier selection, capacity matching, and lane optimization"
        },
        {
          title: "Rate Management",
          detail: "Tariff databases, spot quotes, and contract rate negotiation tools"
        },
        {
          title: "Shipment Execution",
          detail: "Booking confirmation, tracking updates, and exception management"
        },
        {
          title: "Financial Settlement",
          detail: "Freight audit, invoice matching, and automated carrier payments"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Transport & Logistics",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your transport & logistics needs.",
  accentColor: "#f59e0b",
};

export const projects: Project[] = [
  {
    id: "fleettrack",
    tag: "Fleet Management",
    tagColor: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30",
    company: "FleetTrack",
    industry: "Transport & Logistics",
    headline: "IoT-powered fleet management system reducing fuel costs by 25% across 2000+ vehicles.",
    challenge:
      "No real-time visibility into vehicle locations. Manual route planning causing inefficiency. High fuel costs due to unoptimized routes.",
    solution:
      "GPS + IoT sensor integration for real-time fleet tracking. AI-based route optimization engine. Predictive maintenance alerts reducing breakdowns by 40%.",
    duration: "90 days",
    accentColor: "#f59e0b",
    metrics: [
      { value: 25, suffix: "%", label: "Fuel cost reduction" },
      { value: 2000, suffix: "+", label: "Vehicles tracked" },
      { value: 40, suffix: "%", label: "Fewer breakdowns" },
    ],
    timeline: [
      { phase: "IoT Integration", detail: "GPS trackers, fuel sensors, OBD-II device setup" },
      { phase: "Tracking Platform", detail: "Real-time dashboard with geofencing and alerts" },
      { phase: "Route Optimization", detail: "AI-based routing engine with traffic data" },
      { phase: "Predictive Maintenance", detail: "ML models for breakdown prediction" },
    ],
  },
  {
    id: "shipwise",
    tag: "Supply Chain",
    tagColor: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30",
    company: "ShipWise",
    industry: "Transport & Logistics",
    headline: "End-to-end supply chain visibility platform cutting delivery delays by 35%.",
    challenge:
      "Fragmented supply chain with no unified tracking. Manual documentation causing delays. Poor vendor communication.",
    solution:
      "Unified platform connecting warehouses, carriers, and vendors. Automated documentation with OCR. Real-time shipment tracking with ETA predictions.",
    duration: "60 days",
    accentColor: "#f59e0b",
    metrics: [
      { value: 35, suffix: "%", label: "Delay reduction" },
      { value: 90, suffix: "%", label: "Doc automation" },
      { value: 50, suffix: "+", label: "Vendor integrations" },
    ],
    timeline: [
      { phase: "Platform Design", detail: "Unified tracking architecture, API gateway" },
      { phase: "Vendor Integration", detail: "50+ carrier and warehouse API connections" },
      { phase: "Automation Layer", detail: "OCR for documents, automated status updates" },
      { phase: "Analytics Dashboard", detail: "Real-time KPIs, delay prediction models" },
    ],
  },
];

