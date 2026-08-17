import { GraduationCap, Video, Brain, Gamepad2, BarChart3, Smartphone, Award, Zap, ShieldCheck, HeartHandshake, Activity, Cpu, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "Education & eLearning Software",
  subtitle: "Transforming Learning Experiences",
  description: "Highly interactive and engaging educational apps and software with adaptive learning paths, live virtual classrooms, and comprehensive progress analytics.",
  heroImage: "/images/stock/stock-84e9ea17bf.jpg",
  accentColor: "#ec4899",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#ec4899",
  heading: "Reimagining Education with AI",
  descriptionLeft: "We build EdTech platforms that personalize learning experiences using AI, enable real-time collaboration through live classes, and make education accessible through offline-first PWA technology. Our solutions serve students, educators, and enterprise training programs.",
  descriptionRight: "From adaptive learning algorithms and WebRTC-powered live classrooms to SCORM-compliant LMS platforms with white-label capabilities, our education technology solutions are built for engagement, compliance, and scale.",
  highlights: [
      {
          "value": "10K+",
          "label": "Active learners"
      },
      {
          "value": "200+",
          "label": "Companies served"
      },
      {
          "value": "45%",
          "label": "Learning improvement"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Education & eLearning Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: GraduationCap, title: "Learning Management Systems", description: "Comprehensive LMS platforms with course management, assessments, and certification." },
    { icon: Video, title: "Virtual Classrooms", description: "Live virtual classroom solutions with video conferencing, whiteboards, and breakout rooms." },
    { icon: Brain, title: "Adaptive Learning", description: "AI-powered adaptive learning paths that personalize content based on student performance." },
    { icon: Gamepad2, title: "Gamification & Engagement", description: "Game mechanics like badges, leaderboards, and challenges to boost student motivation." },
    { icon: BarChart3, title: "Progress Analytics", description: "Detailed analytics dashboards tracking student progress, engagement, and outcomes." },
    { icon: Smartphone, title: "Mobile Learning Apps", description: "On-the-go learning apps with offline access, push notifications, and micro-learning modules." },
  ],
  accentColor: "#ec4899",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "K-12 Education",
      description: "Digital learning platforms tailored for schools with age-appropriate content delivery.",
      features: ["Curriculum management", "Parent-teacher communication", "Gradebook & report cards", "Attendance tracking", "Homework management"],
    },
    {
      title: "Higher Education",
      description: "University-level platforms with research collaboration and academic management.",
      features: ["Course registration", "Research portals", "Library management", "Alumni networking", "Academic advising"],
    },
    {
      title: "Corporate Training",
      description: "Enterprise learning solutions for employee onboarding, upskilling, and compliance.",
      features: ["Onboarding programs", "Compliance training", "Skill assessments", "Learning paths", "ROI analytics"],
    },
    {
      title: "Test Preparation",
      description: "Exam preparation platforms with practice tests, analytics, and personalized study plans.",
      features: ["Mock exams", "Question banks", "Performance analytics", "Study schedules", "Peer discussion"],
    },
  ],
  accentColor: "#ec4899",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Learning Needs Analysis",
      description: "Understanding learning objectives, target audience, and pedagogical requirements.",
      icon: Search,
      highlights: [
        "Curriculum mapping & content audit",
        "Learner persona & skill gap analysis",
        "LMS integration requirement review",
        "Accessibility & inclusivity assessment",
      ],
    },
    {
      step: "02",
      title: "Experience Design",
      description: "Designing learning experiences with multimedia content and assessment strategies.",
      icon: Palette,
      highlights: [
        "Gamified learning flow prototyping",
        "Interactive assessment UI design",
        "Mobile-responsive course layouts",
        "Instructor dashboard wireframing",
      ],
    },
    {
      step: "03",
      title: "Platform Architecture",
      description: "Building scalable EdTech platforms with content delivery and assessment engines.",
      icon: Settings,
      highlights: [
        "Scalable video streaming infrastructure",
        "SCORM/xAPI compliance integration",
        "Real-time collaboration engine design",
        "Content delivery network optimization",
      ],
    },
    {
      step: "04",
      title: "Iterative Development",
      description: "Integrating multimedia content, SCORM packages, and third-party learning tools.",
      icon: Code2,
      highlights: [
        "Agile sprints with educator feedback loops",
        "Automated accessibility testing",
        "Progressive feature rollouts",
        "API-based third-party tool integration",
      ],
    },
    {
      step: "05",
      title: "Testing & Deployment",
      description: "Beta testing with educators and students to validate learning effectiveness.",
      icon: ShieldCheck,
      highlights: [
        "Cross-device compatibility testing",
        "COPPA & FERPA compliance verification",
        "Load testing for concurrent learners",
        "Zero-downtime deployment strategy",
      ],
    },
    {
      step: "06",
      title: "Engagement Optimization",
      description: "Full deployment with analytics-driven continuous improvement and content updates.",
      icon: Rocket,
      highlights: [
        "Learning outcome analytics dashboards",
        "Engagement & retention metric tracking",
        "AI-powered content recommendations",
        "Quarterly curriculum update cycles",
      ],
    },
  ],
  accentColor: "#ec4899",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "EdTech Expertise", description: "Built learning platforms used by thousands of students and educators globally." },
    { icon: Zap, title: "Engagement Focused", description: "Gamification, interactive content, and social learning features that keep students engaged." },
    { icon: ShieldCheck, title: "Compliant & Accessible", description: "FERPA compliant, WCAG accessible, and built for inclusive learning experiences." },
    { icon: HeartHandshake, title: "Outcomes Driven", description: "Every feature is designed to improve learning outcomes and knowledge retention." },
  ],
  accentColor: "#ec4899",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI & Adaptive Learning", description: "Machine learning algorithms that personalize learning paths based on student behavior." },
    { icon: Video, title: "Video & Streaming", description: "Low-latency live streaming and interactive video for virtual classrooms." },
    { icon: Gamepad2, title: "Gamification Engine", description: "Points, badges, leaderboards, and challenges driving student motivation." },
    { icon: Activity, title: "Learning Analytics", description: "Comprehensive analytics tracking engagement, completion, and learning outcomes." },
    { icon: Cpu, title: "AR/VR Learning", description: "Immersive augmented and virtual reality experiences for hands-on learning." },
  ],
  accentColor: "#ec4899",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Comprehensive EdTech Development Expertise",
  subtitle: "We combine pedagogical understanding with modern technology to build learning experiences that engage, assess, and transform educational outcomes.",
  items: [
    {
      title: "Adaptive Learning Engine Development",
      description: "We build AI-powered adaptive learning systems that adjust content difficulty, pacing, and format based on individual learner performance. Our engines use spaced repetition, mastery scoring, and prerequisite mapping to optimize learning paths."
    },
    {
      title: "Interactive Content & Assessment Authoring Tools",
      description: "We create rich content authoring platforms supporting video lessons, interactive simulations, drag-and-drop activities, and auto-graded assessments. Our tools are SCORM and xAPI compliant for universal LMS compatibility."
    },
    {
      title: "Live Virtual Classroom & Webinar Infrastructure",
      description: "Our virtual classroom platforms support HD video, interactive whiteboards, breakout rooms, and real-time polling at scale. We handle WebRTC infrastructure, recording pipelines, and automatic transcription with chapter indexing."
    },
    {
      title: "Gamification & Student Engagement Systems",
      description: "We design gamification frameworks with XP systems, achievement badges, leaderboards, and learning streaks that boost completion rates. Our engagement analytics identify at-risk learners and trigger personalized intervention nudges."
    },
    {
      title: "Credential & Certification Management Platforms",
      description: "We build digital credentialing systems with blockchain-verified certificates, skill endorsements, and portfolio builders. Our platforms support industry-standard badge specifications and integrate with LinkedIn and job portals."
    },
    {
      title: "Learning Analytics & Institutional Reporting Dashboards",
      description: "We create analytics dashboards that track learner progress, content effectiveness, and institutional KPIs. Our reporting tools generate accreditation-ready reports, cohort comparisons, and predictive retention models."
    }
  ],
  accentColor: "#ec4899"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#ec4899",
  heading: "EdTech Products We Create for Every Learner",
  subtitle: "From K-12 schools and universities to corporate training and skill platforms — we build engaging digital learning experiences.",
  products: [
    {
      title: "Learning Management Systems (LMS)",
      description: "We design feature-rich LMS platforms that support blended learning, competency tracking, and adaptive content delivery. Our solutions serve institutions and enterprises with SCORM/xAPI compliance and multi-tenant architecture.",
      highlights: [
        "Course authoring & content library",
        "Adaptive learning pathways",
        "SCORM & xAPI content compliance",
        "Gamification & achievement badges",
        "Multi-tenant institutional support"
      ],
      timelineLabel: "LMS Core Modules",
      timeline: [
        {
          title: "Content Engine",
          detail: "Rich media authoring, video hosting, and interactive quiz builders"
        },
        {
          title: "Learning Paths",
          detail: "Prerequisite chains, adaptive branching, and competency mapping"
        },
        {
          title: "Assessment Suite",
          detail: "Proctored exams, auto-grading, and plagiarism detection"
        },
        {
          title: "Analytics Dashboard",
          detail: "Learner progress, completion rates, and engagement heatmaps"
        }
      ]
    },
    {
      title: "Virtual Classroom & Live Learning",
      description: "Our virtual classroom platforms combine real-time video, interactive whiteboards, and breakout rooms into immersive live learning environments. Built for low-latency at scale with recording, transcription, and attendance automation.",
      highlights: [
        "HD live video with screen sharing",
        "Interactive whiteboard & annotations",
        "Breakout rooms & group activities",
        "Automated attendance & participation tracking",
        "Session recording & searchable transcripts"
      ],
      timelineLabel: "Virtual Classroom Stack",
      timeline: [
        {
          title: "Live Streaming Engine",
          detail: "WebRTC infrastructure with adaptive bitrate and CDN distribution"
        },
        {
          title: "Collaboration Tools",
          detail: "Shared whiteboards, polls, hand-raising, and chat moderation"
        },
        {
          title: "Recording Pipeline",
          detail: "Cloud recording, auto-transcription, and chapter-based indexing"
        },
        {
          title: "Engagement Analytics",
          detail: "Attention tracking, participation scores, and session replay insights"
        }
      ]
    },
    {
      title: "Corporate Training & Upskilling",
      description: "We build enterprise training platforms that align workforce development with business goals. Our solutions include skill gap analysis, personalized learning paths, certification workflows, and compliance training automation.",
      highlights: [
        "Skill gap analysis & competency mapping",
        "Role-based learning path automation",
        "Certification & credential management",
        "Compliance training & deadline tracking",
        "Manager dashboards & team progress reports"
      ],
      timelineLabel: "Training Platform",
      timeline: [
        {
          title: "Skills Framework",
          detail: "Competency models, role mapping, and gap identification engine"
        },
        {
          title: "Personalized Paths",
          detail: "AI-curated content recommendations and adaptive difficulty levels"
        },
        {
          title: "Certification Engine",
          detail: "Exam scheduling, digital credentials, and renewal reminders"
        },
        {
          title: "ROI Reporting",
          detail: "Training impact on KPIs, completion analytics, and cost-per-learner"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Education & eLearning",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your education & elearning needs.",
  accentColor: "#ec4899",
};

export const projects: Project[] = [
  {
    id: "edtech-ai",
    tag: "AI-Driven Platform",
    tagColor: "bg-[#ec4899]/15 text-[#ec4899] border-[#ec4899]/30",
    company: "LearnAI",
    industry: "Education & eLearning",
    headline: "AI-driven e-learning platform with personalized learning paths and live classes.",
    challenge: "Creating scalable AI for personalized learning. Real-time performance for live classes. Balancing gamification with academic rigor.",
    solution: "Web and mobile platform with AI-driven course recommendations. Live class functionality using WebRTC. Gamification features for engagement.",
    duration: "90 days",
    accentColor: "#ec4899",
    metrics: [
      { value: 45, suffix: "%", label: "Learner improvement" },
      { value: 3, suffix: "x", label: "Engagement increase" },
      { value: 10, suffix: "K+", label: "Active students" },
    ],
    timeline: [
      { phase: "AI Model Design", detail: "Adaptive learning algorithm, recommendation engine" },
      { phase: "Live Class Engine", detail: "WebRTC for real-time video and collaboration" },
      { phase: "Gamification", detail: "Points, badges, leaderboards" },
      { phase: "Scale & Launch", detail: "Multi-tenant deployment, analytics" },
    ],
  },
  {
    id: "skillbridge",
    tag: "LMS Platform",
    tagColor: "bg-[#ec4899]/15 text-[#ec4899] border-[#ec4899]/30",
    company: "SkillBridge",
    industry: "Education & eLearning",
    headline: "Enterprise LMS serving 200+ companies with SCORM-compliant course delivery.",
    challenge: "SCORM compliance across diverse content. Multi-tenant white-label requirements. Offline learning support for remote areas.",
    solution: "SCORM 2004 compliant engine with offline-first PWA. White-label theming per organization. Advanced analytics for learning outcomes.",
    duration: "80 days",
    accentColor: "#ec4899",
    metrics: [
      { value: 200, suffix: "+", label: "Companies served" },
      { value: 100, suffix: "%", label: "SCORM compliant" },
      { value: 30, suffix: "%", label: "Completion rate up" },
    ],
    timeline: [
      { phase: "SCORM Engine", detail: "Content packaging, tracking, bookmarking" },
      { phase: "White-Label System", detail: "Per-org theming, branding, domain mapping" },
      { phase: "Offline PWA", detail: "Service workers, content caching, sync" },
      { phase: "Analytics Suite", detail: "Learning outcomes, engagement dashboards" },
    ],
  },
];

