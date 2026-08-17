import { Activity, Wrench, Settings, ShieldCheck, Database, Leaf, Award, Zap, HeartHandshake, Brain, Cpu, Eye, Search, Palette, Code2, Rocket } from "lucide-react";
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
  title: "Oil & Gas Software Solutions",
  subtitle: "Digital Innovation for Energy",
  description: "Advanced IT solutions for Oil & Gas that improve quality, efficiency & optimize reservoir management with digital asset monitoring and safety compliance.",
  heroImage: "/images/stock/stock-026aa0dc9d.jpg",
  accentColor: "#854d0e",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#854d0e",
  heading: "Digital Solutions for Energy",
  descriptionLeft: "We build IoT monitoring platforms and AI-optimized operations systems for the oil and gas industry. Our solutions provide real-time pipeline monitoring, predictive maintenance, and automated compliance reporting for energy companies operating across harsh environments.",
  descriptionRight: "From edge computing with low-latency alerts to ML models that optimize drilling parameters and predict equipment failures, we help energy companies reduce costs, ensure safety, and meet regulatory requirements across all operations.",
  highlights: [
      {
          "value": "500km",
          "label": "Pipeline monitored"
      },
      {
          "value": "30%",
          "label": "Cost reduction"
      },
      {
          "value": "100%",
          "label": "Compliance met"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Oil & Gas Solutions Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: Activity, title: "Digital Asset Monitoring", description: "Real-time monitoring of drilling, production, and refinery operations." },
    { icon: Wrench, title: "Predictive Maintenance", description: "AI-driven maintenance predictions for critical equipment reducing downtime." },
    { icon: Settings, title: "SCADA Integration", description: "Supervisory control and data acquisition system integration for operational control." },
    { icon: ShieldCheck, title: "Safety Compliance", description: "Automated safety compliance tracking and incident management systems." },
    { icon: Database, title: "Reservoir Management", description: "Advanced reservoir modeling and simulation for optimized extraction." },
    { icon: Leaf, title: "Environmental Monitoring", description: "Environmental impact monitoring and sustainability reporting platforms." },
  ],
  accentColor: "#854d0e",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Upstream Operations",
      description: "Digital solutions for exploration, drilling, and production optimization.",
      features: ["Drilling optimization", "Production monitoring", "Reservoir simulation", "Well management", "Geological analysis"],
    },
    {
      title: "Midstream & Pipeline",
      description: "Pipeline monitoring and transportation management solutions.",
      features: ["Pipeline integrity", "SCADA monitoring", "Flow optimization", "Leak detection", "Regulatory compliance"],
    },
    {
      title: "Downstream & Refinery",
      description: "Refinery operations management and product distribution solutions.",
      features: ["Process optimization", "Quality control", "Distribution planning", "Inventory management", "Yield optimization"],
    },
    {
      title: "HSE Management",
      description: "Health, safety, and environmental management platforms.",
      features: ["Incident reporting", "Safety audits", "Environmental monitoring", "Permit management", "Training compliance"],
    },
  ],
  accentColor: "#854d0e",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Field Assessment",
      description: "Understanding operational requirements, safety standards, and integration needs.",
      icon: Search,
      highlights: [
        "Operational workflow & safety analysis",
        "SCADA & IoT sensor system audit",
        "Regulatory compliance mapping (HSE)",
        "Data infrastructure evaluation",
      ],
    },
    {
      step: "02",
      title: "Interface Design",
      description: "Designing ruggedized systems for harsh environments with high reliability.",
      icon: Palette,
      highlights: [
        "Control room dashboard prototyping",
        "Field worker mobile app UX design",
        "Hazard monitoring visualization",
        "Reporting & analytics interface design",
      ],
    },
    {
      step: "03",
      title: "Industrial Architecture",
      description: "Building robust platforms with SCADA integration and real-time data processing.",
      icon: Settings,
      highlights: [
        "Real-time sensor data pipeline design",
        "Edge computing & SCADA integration",
        "Redundant high-availability infrastructure",
        "Cybersecurity framework for OT/IT",
      ],
    },
    {
      step: "04",
      title: "Phased Development",
      description: "On-site installation, sensor deployment, and system commissioning.",
      icon: Code2,
      highlights: [
        "Sprint delivery with field engineers",
        "IoT telemetry processing modules",
        "Safety & compliance automation tools",
        "Offline-capable mobile app development",
      ],
    },
    {
      step: "05",
      title: "Safety Validation & Launch",
      description: "Rigorous safety testing, compliance verification, and operational certification.",
      icon: ShieldCheck,
      highlights: [
        "Hazardous environment testing protocols",
        "Cybersecurity penetration testing",
        "Failover & disaster recovery drills",
        "Site-by-site phased deployment",
      ],
    },
    {
      step: "06",
      title: "Predictive Operations",
      description: "24/7 monitoring, incident response, and continuous system optimization.",
      icon: Rocket,
      highlights: [
        "Predictive maintenance analytics",
        "Production optimization dashboards",
        "Environmental compliance monitoring",
        "Equipment lifecycle cost tracking",
      ],
    },
  ],
  accentColor: "#854d0e",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Energy Expertise", description: "Deep domain knowledge in upstream, midstream, and downstream operations." },
    { icon: Zap, title: "Operational Efficiency", description: "Solutions that reduce operational costs by up to 30% through digital optimization." },
    { icon: ShieldCheck, title: "Safety First", description: "Industry-leading safety compliance and incident prevention systems." },
    { icon: HeartHandshake, title: "24/7 Operations", description: "Round-the-clock monitoring and support for critical energy infrastructure." },
  ],
  accentColor: "#854d0e",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Cpu, title: "IoT & Sensor Networks", description: "Industrial IoT sensors for real-time monitoring of drilling and production operations." },
    { icon: Brain, title: "AI & Predictive Analytics", description: "Machine learning for equipment failure prediction and production optimization." },
    { icon: Database, title: "Digital Twin Technology", description: "Virtual replicas of physical assets for simulation and planning." },
    { icon: Eye, title: "Computer Vision", description: "AI-powered visual inspection for pipeline integrity and safety monitoring." },
    { icon: Activity, title: "Big Data Analytics", description: "Processing petabytes of operational data for actionable insights." },
  ],
  accentColor: "#854d0e",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Oil & Gas Digital Transformation Expertise",
  subtitle: "We deliver industrial-grade digital solutions that improve operational efficiency, ensure safety compliance, and optimize resource utilization across upstream, midstream, and downstream operations.",
  items: [
    {
      title: "IoT Sensor Networks & Edge Computing Architecture",
      description: "We design ruggedized IoT sensor deployments for harsh field environments with edge computing gateways that process data locally before transmitting to cloud. Our architectures handle intermittent connectivity and extreme conditions."
    },
    {
      title: "Predictive Maintenance & Equipment Health Monitoring",
      description: "Our ML models analyze vibration patterns, temperature trends, and pressure anomalies to predict equipment failures before they occur. We build maintenance optimization engines that balance risk, cost, and production impact."
    },
    {
      title: "SCADA Integration & Unified Control Room Dashboards",
      description: "We integrate disparate SCADA, DCS, and historian systems into unified operational dashboards. Our middleware handles protocol translation (OPC-UA, Modbus, MQTT) and provides real-time visibility across remote facilities."
    },
    {
      title: "HSE Compliance & Safety Management Systems",
      description: "We build comprehensive health, safety, and environment management platforms with digital permit-to-work workflows, incident reporting, root cause analysis, and regulatory compliance tracking across jurisdictions."
    },
    {
      title: "Production Optimization & Reservoir Analytics",
      description: "Our analytics platforms model reservoir behavior, optimize well placement, and forecast production curves. We build digital twin simulations that help engineers evaluate operational scenarios before committing resources."
    },
    {
      title: "Field Mobility & Offline-Capable Workforce Tools",
      description: "We develop mobile-first field applications that work in low-connectivity remote sites. Our offline-capable apps sync data when connectivity returns, ensuring field crews always have access to procedures, forms, and job documentation."
    }
  ],
  accentColor: "#854d0e"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#854d0e",
  heading: "Oil & Gas Digital Solutions for Every Operation",
  subtitle: "From upstream exploration and midstream pipeline monitoring to downstream refining and distribution — we deliver industrial-grade digital platforms.",
  products: [
    {
      title: "Asset Monitoring & Predictive Maintenance",
      description: "We build IoT-powered asset monitoring platforms that track equipment health, predict failures, and optimize maintenance schedules. Our solutions reduce unplanned downtime by analyzing vibration, temperature, and pressure sensor data in real-time.",
      highlights: [
        "Real-time IoT sensor data ingestion",
        "ML-based failure prediction models",
        "Maintenance schedule optimization",
        "Equipment lifecycle tracking",
        "Alert escalation & work order generation"
      ],
      timelineLabel: "Asset Intelligence",
      timeline: [
        {
          title: "Sensor Network",
          detail: "Edge gateway integration, protocol translation, and data normalization"
        },
        {
          title: "Predictive Models",
          detail: "Vibration analysis, thermal imaging, and anomaly detection algorithms"
        },
        {
          title: "Maintenance Planner",
          detail: "Condition-based scheduling, spare parts forecasting, and crew allocation"
        },
        {
          title: "Operations Dashboard",
          detail: "Asset health scores, downtime analytics, and compliance reporting"
        }
      ]
    },
    {
      title: "Pipeline & SCADA Systems",
      description: "Our pipeline monitoring solutions provide real-time visibility into flow rates, pressure differentials, and leak detection. We integrate with SCADA systems to deliver unified control room dashboards with automated safety protocols.",
      highlights: [
        "Real-time flow & pressure monitoring",
        "Acoustic leak detection systems",
        "SCADA integration & control interfaces",
        "Automated safety shutdown protocols",
        "Regulatory compliance documentation"
      ],
      timelineLabel: "Pipeline Intelligence",
      timeline: [
        {
          title: "Monitoring Layer",
          detail: "Multi-sensor fusion for flow, pressure, temperature, and vibration data"
        },
        {
          title: "Leak Detection",
          detail: "Acoustic sensors, mass balance algorithms, and satellite imagery analysis"
        },
        {
          title: "Control Integration",
          detail: "SCADA/DCS connectivity, alarm management, and remote valve actuation"
        },
        {
          title: "Compliance Reporting",
          detail: "Pipeline integrity records, inspection logs, and regulatory submissions"
        }
      ]
    },
    {
      title: "Field Operations & Workforce Management",
      description: "We develop mobile-first field operations platforms that coordinate drilling crews, manage permits, and track safety compliance. Our solutions work in remote, low-connectivity environments with offline-capable mobile apps.",
      highlights: [
        "Crew scheduling & shift management",
        "Digital permit-to-work systems",
        "Safety incident reporting & tracking",
        "Offline-capable mobile field apps",
        "GPS-based personnel tracking"
      ],
      timelineLabel: "Field Operations",
      timeline: [
        {
          title: "Workforce Planner",
          detail: "Competency-based crew assignment, rotation scheduling, and fatigue management"
        },
        {
          title: "Permit Management",
          detail: "Digital PTW workflows, risk assessments, and authority-to-proceed chains"
        },
        {
          title: "HSE Module",
          detail: "Incident capture, root cause analysis, and safety observation tracking"
        },
        {
          title: "Field Mobile App",
          detail: "Offline forms, GPS check-in, and multimedia job documentation"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Oil & Gas",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your oil & gas needs.",
  accentColor: "#854d0e",
};

export const projects: Project[] = [
  {
    id: "energymon",
    tag: "Energy Monitoring",
    tagColor: "bg-[#854d0e]/15 text-[#854d0e] border-[#854d0e]/30",
    company: "EnergyMon",
    industry: "Oil & Gas",
    headline: "Real-time pipeline monitoring system preventing leaks across 500km of infrastructure.",
    challenge: "Manual pipeline inspections causing delayed leak detection. Harsh environment sensor challenges. Regulatory compliance reporting.",
    solution: "IoT sensor network along pipeline routes. AI-based anomaly detection for pressure and flow. Automated compliance reporting dashboards.",
    duration: "120 days",
    accentColor: "#854d0e",
    metrics: [
      { value: 500, suffix: "km", label: "Pipeline monitored" },
      { value: 90, suffix: "%", label: "Faster leak detection" },
      { value: 100, suffix: "%", label: "Compliance met" },
    ],
    timeline: [
      { phase: "Sensor Deployment", detail: "Pressure, flow, temperature sensors along pipeline" },
      { phase: "Edge Computing", detail: "On-site data processing, low-latency alerts" },
      { phase: "AI Anomaly Detection", detail: "Pattern recognition for leak prediction" },
      { phase: "Compliance Dashboard", detail: "Automated regulatory reporting" },
    ],
  },
  {
    id: "drillsmart",
    tag: "Drilling Operations",
    tagColor: "bg-[#854d0e]/15 text-[#854d0e] border-[#854d0e]/30",
    company: "DrillSmart",
    industry: "Oil & Gas",
    headline: "AI-optimized drilling operations platform reducing costs by 30% per well.",
    challenge: "Suboptimal drilling parameters causing cost overruns. Equipment failures during operations. Data silos across drilling sites.",
    solution: "ML models optimizing drilling speed, weight-on-bit, and mud properties. Predictive equipment maintenance. Unified operations dashboard across all sites.",
    duration: "90 days",
    accentColor: "#854d0e",
    metrics: [
      { value: 30, suffix: "%", label: "Cost per well reduced" },
      { value: 25, suffix: "%", label: "Faster drilling" },
      { value: 50, suffix: "+", label: "Wells optimized" },
    ],
    timeline: [
      { phase: "Data Unification", detail: "Cross-site data pipeline, standardization" },
      { phase: "Drilling ML Models", detail: "Parameter optimization, ROP prediction" },
      { phase: "Equipment Analytics", detail: "Failure prediction, maintenance scheduling" },
      { phase: "Operations Dashboard", detail: "Real-time KPIs, cross-site comparison" },
    ],
  },
];

