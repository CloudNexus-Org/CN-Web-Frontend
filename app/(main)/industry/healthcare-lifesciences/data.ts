import { Stethoscope, Heart, Pill, Shield, Monitor, Brain, Activity, Smartphone, Laptop, Watch, Users, Award, Zap, HeartHandshake, Database, Cpu, Link2, Eye, Search, Palette, Settings, Code2, ShieldCheck, Rocket } from "lucide-react";
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
  title: "Healthcare Software Development",
  subtitle: "Digitizing Healthcare",
  description: "We create secure, scalable, and medical compliant healthcare software services that simplify the interaction between patients & healthcare service providers.",
  heroImage: "/images/stock/stock-b7ee6b8c4f.jpg",
  accentColor: "#10b981",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#10b981",
  heading: "Transforming Healthcare with Technology",
  descriptionLeft: "We build HIPAA-compliant digital health solutions that connect patients, providers, and medical devices. From electronic health records to real-time patient monitoring, our healthcare technology solutions are designed for security, scalability, and regulatory compliance.",
  descriptionRight: "Our team has deep expertise in healthcare interoperability standards (HL7 FHIR, DICOM), medical device integration via BLE and IoT, and building secure architectures that meet the strictest compliance requirements including HIPAA, HITRUST, and SOC 2.",
  highlights: [
    { value: "500+", label: "Healthcare providers served" },
    { value: "100%", label: "HIPAA compliance rate" },
    { value: "99.9%", label: "System uptime" },
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Custom Healthcare Software Development Services",
  subtitle: "We deliver a complete range of web, mobile & medical device solutions from prototype to deployment & maintenance.",
  services: [
    { icon: Stethoscope, title: "Healthcare Software Consulting", description: "Strategic consulting to optimize workflows and accelerate healthcare digital transformation." },
    { icon: Monitor, title: "Custom Healthcare Software", description: "Tailored products addressing complex clinical, operational, and compliance needs." },
    { icon: Activity, title: "Healthcare Software Modernization", description: "Upgrade legacy systems ensuring regulatory compliance, scalability, and improved patient experience." },
    { icon: Link2, title: "Healthcare Software Integration", description: "Integrate EHRs, wearables, and third-party systems for unified, secure data flow." },
    { icon: Heart, title: "Telemedicine Solutions", description: "Virtual care at scale with secure telehealth and remote patient monitoring apps." },
    { icon: Pill, title: "Care Management Software", description: "Intelligent care management tools to improve chronic disease care and patient outcomes." },
  ],
  accentColor: "#10b981",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Our Customizable Healthcare Solutions",
  solutions: [
    {
      title: "Telemedicine & Virtual Diagnosis",
      description: "Utilizing advanced telemedicine technology to overcome geographical limitations and optimize clinical workflows.",
      features: ["Telemedicine and remote patient monitoring", "Enhanced data management & reporting", "Clinical support & workflow management", "EMR/EHR solutions", "Adherence to regulatory compliance"],
    },
    {
      title: "Pharmaceuticals & Biotechnology",
      description: "Advanced technology in production, inventory management, lab processes, and drug development for pharmaceutical companies.",
      features: ["Enhanced production process", "Clinical data management analysis", "Data mining & data warehousing", "eCommerce portals & web development", "Data analytics & insights"],
    },
    {
      title: "Insurance & Claims",
      description: "Futuristic solutions including accurate electronic medical records, health informatics, fraud detection & claim settlements.",
      features: ["Customer data analysis", "Expedite underwriting for custom plans", "Handle coverages and claims", "Fraud detection system", "Fast and efficient claims processing"],
    },
    {
      title: "Healthcare Administration",
      description: "Digital solutions empowering seamless operations and enhancing patient experiences with easy integration.",
      features: ["Inventory management", "Patient data management", "EMR & EHR management", "Regulatory compliance", "Data security & privacy"],
    },
    {
      title: "Clinical Trial Solutions",
      description: "Streamline conducting clinical trials with focus on data security, quality, and compliance.",
      features: ["Electronic Data Capture (EDC)", "Clinical Data Management", "Randomization & Trial Supply Management", "ePRO Solutions", "Data Analytics & Business Intelligence"],
    },
  ],
  accentColor: "#10b981",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Healthcare Software Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions for healthcare.",
  steps: [
    {
      step: "01",
      title: "Clinical Discovery",
      description: "Working closely with stakeholders to extract detailed requirements, study workflows and determine business goals.",
      icon: Search,
      highlights: [
        "Regulatory landscape & HIPAA mapping",
        "Patient journey & clinician workflow analysis",
        "EHR/EMR integration scoping",
        "Compliance risk assessment",
      ],
    },
    {
      step: "02",
      title: "UX/UI Design",
      description: "Finalize architecture, tech stack, and development milestones to ensure future-ready and scalable solutions.",
      icon: Palette,
      highlights: [
        "Patient-centric interface prototyping",
        "Accessible design for diverse user groups",
        "Clinical dashboard wireframes",
        "Usability testing with healthcare staff",
      ],
    },
    {
      step: "03",
      title: "Architecture Planning",
      description: "Creating secure, compliant platforms aligned with your objectives using proven healthcare development expertise.",
      icon: Settings,
      highlights: [
        "HL7/FHIR interoperability framework",
        "HIPAA-compliant cloud infrastructure",
        "Data encryption & PHI handling strategy",
        "Scalability planning for multi-facility use",
      ],
    },
    {
      step: "04",
      title: "Agile Development",
      description: "Building EHR, HIE, CRM, third-party API and device integrations for seamless data exchange.",
      icon: Code2,
      highlights: [
        "Bi-weekly sprints with clinical advisors",
        "Continuous integration with automated testing",
        "Feature-flagged module rollouts",
        "Real-time code review & compliance checks",
      ],
    },
    {
      step: "05",
      title: "Validation & Launch",
      description: "Quality assurance, performance testing, and regulatory compliance testing for HIPAA, GDPR readiness.",
      icon: ShieldCheck,
      highlights: [
        "FDA 21 CFR Part 11 validation",
        "Penetration testing & vulnerability scans",
        "HIPAA audit trail verification",
        "Phased deployment with failover readiness",
      ],
    },
    {
      step: "06",
      title: "Post-Launch Support",
      description: "Deploying to your IT environment, data migration, monitoring, and providing ongoing support & enhancements.",
      icon: Rocket,
      highlights: [
        "24/7 uptime monitoring & alerting",
        "Regulatory update compliance patches",
        "Performance optimization & scaling",
        "Quarterly feature roadmap reviews",
      ],
    },
  ],
  accentColor: "#10b981",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us for Healthcare Solutions",
  subtitle: "End-to-end healthcare software development services, from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Proven Experience", description: "Expertise with cutting-edge technologies to enhance user experience and streamline operations." },
    { icon: Zap, title: "Innovative Solutions", description: "We leverage the latest technologies and trends to build solutions that improve patient care." },
    { icon: Shield, title: "Superior Security", description: "Expert developers and QA ensure high-quality, secure code with strict compliance adherence." },
    { icon: HeartHandshake, title: "Flexible Engagement", description: "Flexible engagement models that support clients to design teams as per custom requirements." },
  ],
  accentColor: "#10b981",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage for Healthcare",
  subtitle: "Our healthcare experts leverage cutting-edge technologies to deliver custom and smart solutions.",
  technologies: [
    { icon: Brain, title: "AI & ML in Healthcare", description: "Smart algorithms for personalized assistance, predictive analytics, and intelligent diagnostics." },
    { icon: Cpu, title: "Internet of Things", description: "Remote patient monitoring with smart wearables tracking patients' vitals accurately." },
    { icon: Database, title: "Blockchain", description: "Highly reliable security for patient health records and clinical trials data." },
    { icon: Eye, title: "AR & VR in Healthcare", description: "Interactive education for medical practitioners and accurate diagnosis facilitation." },
    { icon: Activity, title: "Data Analytics", description: "Customized analytics tools to analyze healthcare data and predict future trends." },
  ],
  accentColor: "#10b981",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Full-Spectrum Healthcare Expertise",
  subtitle: "We bring deep domain knowledge across clinical, operational, and regulatory dimensions to deliver healthcare software that meets the highest standards.",
  items: [
    {
      title: "HIPAA-Compliant Architecture & Security Consulting",
      description: "We design healthcare systems with end-to-end encryption, role-based access controls, and comprehensive audit trails. Our security architecture ensures compliance with HIPAA, HITRUST, and SOC 2 requirements from day one."
    },
    {
      title: "EHR/EMR Integration & Interoperability Services",
      description: "We build HL7 FHIR and DICOM-compliant integration layers that connect electronic health records with labs, pharmacies, imaging centers, and insurance platforms for seamless clinical data exchange."
    },
    {
      title: "Telehealth & Remote Patient Monitoring Solutions",
      description: "Our telehealth platforms combine HD video consultations with BLE wearable integration, AI-powered triage, and e-prescriptions — extending quality care beyond hospital walls to patients everywhere."
    },
    {
      title: "Clinical Data Analytics & Decision Support Systems",
      description: "We build analytics dashboards that transform raw clinical data into actionable insights — from population health trends and readmission risk scores to treatment efficacy analysis and resource utilization."
    },
    {
      title: "Medical Device Software & IoT Integration",
      description: "Our FDA-ready medical device software connects bedside monitors, implantables, and portable diagnostics to cloud platforms. We handle BLE pairing, real-time data streaming, and regulatory documentation."
    },
    {
      title: "Healthcare Platform Maintenance & Compliance Updates",
      description: "We provide 24/7 monitoring, security patching, and proactive compliance updates to keep your healthcare platform running at peak performance while staying current with evolving regulations."
    }
  ],
  accentColor: "#10b981"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#10b981",
  heading: "Healthcare Solutions We Build for Every Stakeholder",
  subtitle: "From hospitals and clinics to pharma companies and insurance providers — we deliver tailored digital health products for every healthcare vertical.",
  products: [
    {
      title: "Hospital & Clinic Management",
      description: "We build unified hospital management platforms that digitize patient intake, scheduling, billing, and clinical documentation. Our solutions streamline operations across departments while maintaining strict HIPAA and HL7 compliance.",
      highlights: [
        "Automated patient scheduling & intake",
        "Department-wide clinical dashboards",
        "Integrated billing & insurance claims",
        "Staff rostering & resource allocation",
        "Compliance audit trail & reporting"
      ],
      timelineLabel: "Platform Modules",
      timeline: [
        {
          title: "Patient Portal",
          detail: "Self-service appointment booking, records access, and secure messaging"
        },
        {
          title: "Clinical Workflow Engine",
          detail: "Order sets, care plans, and automated task routing across departments"
        },
        {
          title: "Revenue Cycle Management",
          detail: "Claims processing, denial management, and payment reconciliation"
        },
        {
          title: "Compliance Dashboard",
          detail: "HIPAA audit logs, access controls, and regulatory reporting tools"
        }
      ]
    },
    {
      title: "Telemedicine & Remote Care",
      description: "Our telemedicine platforms enable virtual consultations, remote patient monitoring, and asynchronous care delivery. Built with HD video, BLE device integration, and AI-powered triage to extend care beyond hospital walls.",
      highlights: [
        "HD video consultations with screen sharing",
        "BLE wearable & IoT device integration",
        "AI-assisted symptom triage & routing",
        "E-prescriptions & digital pharmacy links",
        "Multi-provider scheduling & handoffs"
      ],
      timelineLabel: "Telehealth Stack",
      timeline: [
        {
          title: "Video Infrastructure",
          detail: "WebRTC-based calls with recording, transcription, and HIPAA encryption"
        },
        {
          title: "Device Integration",
          detail: "BLE pairing for oximeters, BP monitors, and glucose trackers"
        },
        {
          title: "AI Triage Engine",
          detail: "Symptom assessment chatbot routing patients to the right specialist"
        },
        {
          title: "Care Continuity",
          detail: "Post-visit summaries, follow-up scheduling, and medication reminders"
        }
      ]
    },
    {
      title: "Pharmaceutical & Biotech Platforms",
      description: "We develop digital solutions for pharmaceutical companies covering drug discovery workflows, clinical trial management, regulatory submissions, and supply chain visibility — all built for GxP compliance.",
      highlights: [
        "Clinical trial data management (EDC)",
        "Drug interaction & safety databases",
        "Regulatory submission automation",
        "Supply chain track & trace",
        "Lab information management (LIMS)"
      ],
      timelineLabel: "Pharma Digital Suite",
      timeline: [
        {
          title: "Trial Management",
          detail: "Protocol design, site selection, patient enrollment, and adverse event tracking"
        },
        {
          title: "Regulatory Engine",
          detail: "eCTD submissions, compliance checklists, and audit-ready documentation"
        },
        {
          title: "Supply Chain Visibility",
          detail: "Cold-chain monitoring, serialization, and distribution analytics"
        },
        {
          title: "Data Analytics Hub",
          detail: "Real-world evidence mining, safety signal detection, and market insights"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Healthcare",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your healthcare & lifesciences needs.",
  accentColor: "#10b981",
};

export const projects: Project[] = [
  {
    id: "chorus-health",
    tag: "Cross-Platform App",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    company: "CHORUS",
    industry: "Healthcare / Google",
    headline: "Cross-platform healthcare app for Google with real-time patient vitals monitoring.",
    challenge: "Inconsistent BLE performance across platforms. Real-time data synchronization. Maintaining healthcare-grade data security.",
    solution: "Built CHORUS, a scalable cross-platform application (Web, Android, iOS). Tracks live patient vitals such as heart rate and oxygen levels via BLE. Implements secure architecture with SAST, SCA, and rigorous testing.",
    duration: "120 days",
    accentColor: "#10b981",
    metrics: [
      { value: 99.9, suffix: "%", label: "Uptime achieved" },
      { value: 3, suffix: " platforms", label: "Web, Android, iOS" },
      { value: 0, suffix: " breaches", label: "Security incidents" },
    ],
    timeline: [
      { phase: "Platform Architecture", detail: "Cross-platform framework selection, BLE protocol design" },
      { phase: "Vitals Integration", detail: "Real-time heart rate, oxygen level tracking" },
      { phase: "Security Hardening", detail: "SAST, SCA scanning, healthcare-grade encryption" },
      { phase: "Multi-Platform Launch", detail: "Synchronized release across Web, Android, iOS" },
    ],
  },
  {
    id: "medicore-ehr",
    tag: "EHR System",
    tagColor: "bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30",
    company: "MediCore",
    industry: "Healthcare",
    headline: "HIPAA-compliant electronic health records system for 500+ healthcare providers.",
    challenge: "Legacy paper-based records causing delays. Strict HIPAA compliance requirements. Integration with existing hospital systems.",
    solution: "Cloud-native EHR with end-to-end encryption, audit logging, and role-based access. Seamless HL7 FHIR integration with lab systems and pharmacies.",
    duration: "90 days",
    accentColor: "#10b981",
    metrics: [
      { value: 500, suffix: "+", label: "Providers onboarded" },
      { value: 100, suffix: "%", label: "HIPAA compliance" },
      { value: 60, suffix: "%", label: "Record access time cut" },
    ],
    timeline: [
      { phase: "Compliance Framework", detail: "HIPAA controls, encryption, audit trail design" },
      { phase: "EHR Core Build", detail: "Patient records, prescriptions, lab results modules" },
      { phase: "Integration Layer", detail: "HL7 FHIR APIs, pharmacy & lab system connectors" },
      { phase: "Provider Rollout", detail: "Phased onboarding, training, and 24/7 support" },
    ],
  },
];
