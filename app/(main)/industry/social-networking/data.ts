import { MessageCircle, Users, Heart, Video, Share2, ShieldCheck, Award, Zap, HeartHandshake, Brain, Database, Cpu, Activity, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "Social Networking Platform Development",
  subtitle: "Connecting People at Scale",
  description: "Custom social networking platform development with attractive design and features that boost business evolution and customer engagement.",
  heroImage: "/images/stock/stock-904a8a0ca8.jpg",
  accentColor: "#3b82f6",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#3b82f6",
  heading: "Building Communities at Scale",
  descriptionLeft: "We create social and community platforms that support real-time messaging, content feeds, and video collaboration for millions of users. Our architectures are designed for low-latency communication, viral content handling, and end-to-end security.",
  descriptionRight: "From WebSocket-based messaging to WebRTC video conferencing, AI content moderation, and cross-platform apps (Web, Desktop, iOS, Android), we build the infrastructure that powers modern social experiences. Our platforms scale from startup to millions of concurrent users.",
  highlights: [
      {
          "value": "500K+",
          "label": "Users supported"
      },
      {
          "value": "15ms",
          "label": "Message latency"
      },
      {
          "value": "4",
          "label": "Platforms built"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Social Networking Platform Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: MessageCircle, title: "Real-Time Messaging", description: "Scalable chat systems with group messaging, media sharing, and end-to-end encryption." },
    { icon: Users, title: "Community Platforms", description: "Feature-rich community platforms with groups, forums, and content moderation tools." },
    { icon: Heart, title: "Dating & Matching", description: "AI-powered matching algorithms with profile verification and safety features." },
    { icon: Video, title: "Live Streaming", description: "Low-latency live streaming with interactive features like reactions and comments." },
    { icon: Share2, title: "Content Feed Systems", description: "Algorithmic content feeds with personalization and engagement optimization." },
    { icon: ShieldCheck, title: "Content Moderation", description: "AI-powered content moderation with automated flagging and review workflows." },
  ],
  accentColor: "#3b82f6",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Social Media Platform",
      description: "Full-featured social media platforms with feeds, stories, and engagement features.",
      features: ["News feed algorithm", "Stories & reels", "Reactions & comments", "Share & repost", "Hashtag discovery"],
    },
    {
      title: "Professional Networking",
      description: "LinkedIn-style professional platforms connecting talent with opportunities.",
      features: ["Professional profiles", "Job board & recruiting", "Company pages", "Skill endorsements", "Professional groups"],
    },
    {
      title: "Community Forums",
      description: "Niche community platforms with discussion threads, events, and resource sharing.",
      features: ["Discussion threads", "Event management", "Resource library", "Moderation tools", "Member analytics"],
    },
    {
      title: "Dating Applications",
      description: "Modern dating platforms with matching algorithms and safety-first approach.",
      features: ["AI-powered matching", "Profile verification", "Video dating", "Location-based discovery", "Safety & reporting"],
    },
  ],
  accentColor: "#3b82f6",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Community Research",
      description: "Analyzing target audience, competitor platforms, and unique value proposition.",
      icon: Search,
      highlights: [
        "User behavior & engagement pattern analysis",
        "Content moderation requirement mapping",
        "Social graph & connection modeling",
        "Privacy regulation compliance review",
      ],
    },
    {
      step: "02",
      title: "Social UX Design",
      description: "Designing addictive user experiences with engagement-focused interaction patterns.",
      icon: Palette,
      highlights: [
        "Feed algorithm visualization prototypes",
        "Chat & messaging interface design",
        "Profile & community page wireframing",
        "Notification & engagement UX flows",
      ],
    },
    {
      step: "03",
      title: "Scalable Architecture",
      description: "Building scalable backend with real-time messaging, feeds, and user management.",
      icon: Settings,
      highlights: [
        "Real-time messaging infrastructure (WebSocket)",
        "Graph database for social connections",
        "Content delivery & caching strategy",
        "Moderation & safety tooling framework",
      ],
    },
    {
      step: "04",
      title: "Rapid Development",
      description: "Implementing matching algorithms, content systems, and social features.",
      icon: Code2,
      highlights: [
        "Feature-driven sprint cycles",
        "Real-time feed & notification systems",
        "Media upload & processing pipelines",
        "API integration for third-party sharing",
      ],
    },
    {
      step: "05",
      title: "Safety & Launch",
      description: "Integrating AI moderation, reporting systems, and privacy controls.",
      icon: ShieldCheck,
      highlights: [
        "Content moderation AI testing",
        "Privacy & data protection audit",
        "Performance testing at viral scale",
        "Staged rollout with community feedback",
      ],
    },
    {
      step: "06",
      title: "Engagement Scaling",
      description: "Beta testing, influencer onboarding, and growth hacking strategies.",
      icon: Rocket,
      highlights: [
        "DAU/MAU growth tracking dashboards",
        "Algorithm tuning for engagement",
        "Creator tools & monetization features",
        "Community health metric monitoring",
      ],
    },
  ],
  accentColor: "#3b82f6",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Platform Expertise", description: "Built social platforms handling millions of concurrent users and interactions." },
    { icon: Zap, title: "Real-Time Systems", description: "Sub-millisecond messaging and notification delivery at massive scale." },
    { icon: ShieldCheck, title: "Safety First", description: "Advanced moderation, verification, and privacy protection systems." },
    { icon: HeartHandshake, title: "Growth Focus", description: "Built-in virality features, referral systems, and engagement optimization." },
  ],
  accentColor: "#3b82f6",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI & Recommendation", description: "Machine learning for content personalization, matching, and feed algorithms." },
    { icon: Database, title: "Real-Time Infrastructure", description: "WebSocket and event-driven architecture for instant messaging and updates." },
    { icon: Cpu, title: "Media Processing", description: "High-performance image, video, and audio processing with CDN delivery." },
    { icon: ShieldCheck, title: "Privacy & Security", description: "End-to-end encryption, data protection, and GDPR/CCPA compliance." },
    { icon: Activity, title: "Analytics & Insights", description: "User engagement analytics, retention metrics, and growth dashboards." },
  ],
  accentColor: "#3b82f6",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Social Platform Engineering Expertise",
  subtitle: "We build scalable, engagement-driven social platforms with sophisticated algorithms, content moderation, and community management tools.",
  items: [
    {
      title: "Real-Time Feed Algorithm & Content Ranking",
      description: "We engineer ML-powered feed algorithms that balance engagement, freshness, and diversity. Our ranking models use behavioral signals, content quality scores, and social graph proximity to deliver personalized, relevant feeds at scale."
    },
    {
      title: "Content Moderation & Trust & Safety Systems",
      description: "Our moderation pipelines combine NLP toxicity detection, image recognition, and human-in-the-loop review workflows. We build configurable policy engines that adapt to community guidelines and regulatory requirements across regions."
    },
    {
      title: "Real-Time Messaging & Communication Infrastructure",
      description: "We build scalable messaging systems supporting 1:1 chats, group conversations, voice/video calls, and ephemeral stories. Our infrastructure handles millions of concurrent connections with end-to-end encryption and delivery guarantees."
    },
    {
      title: "Social Graph & Recommendation Engine Development",
      description: "We design graph database architectures that power friend suggestions, content recommendations, and community discovery. Our algorithms analyze connection patterns, interest overlap, and behavioral similarity for high-quality recommendations."
    },
    {
      title: "Creator Economy & Monetization Platform Development",
      description: "We build creator tools with subscription tiers, tipping, pay-per-view content, and brand collaboration marketplaces. Our revenue share engines handle transparent payouts, tax reporting, and multi-currency settlements."
    },
    {
      title: "Platform Scalability & Performance Optimization",
      description: "We architect social platforms for viral growth with CDN optimization, database sharding, caching strategies, and auto-scaling infrastructure. Our performance engineering ensures sub-200ms response times even during traffic spikes."
    }
  ],
  accentColor: "#3b82f6"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#3b82f6",
  heading: "Social Platform Products We Build for Every Community",
  subtitle: "From content-driven networks and professional communities to niche interest groups — we engineer engaging, scalable social experiences.",
  products: [
    {
      title: "Community & Forum Platforms",
      description: "We build vibrant community platforms with threaded discussions, interest-based groups, and content moderation tools. Our solutions support millions of concurrent users with real-time feeds, push notifications, and ML-powered content ranking.",
      highlights: [
        "Threaded discussions & nested replies",
        "Interest-based groups & channels",
        "AI-powered content moderation",
        "Real-time activity feeds & notifications",
        "User reputation & badge systems"
      ],
      timelineLabel: "Community Architecture",
      timeline: [
        {
          title: "Feed Algorithm",
          detail: "ML-ranked content feeds with engagement scoring and freshness decay"
        },
        {
          title: "Moderation Engine",
          detail: "NLP toxicity detection, flagging workflows, and admin review tools"
        },
        {
          title: "Notification System",
          detail: "Multi-channel delivery with batching, preferences, and quiet hours"
        },
        {
          title: "Growth Tools",
          detail: "Invite systems, onboarding flows, and community health dashboards"
        }
      ]
    },
    {
      title: "Content Creator & Influencer Platforms",
      description: "We engineer creator economy platforms with monetization tools, audience analytics, and brand collaboration features. Our solutions support subscriptions, tipping, digital goods, and transparent revenue sharing.",
      highlights: [
        "Creator monetization & paywall tools",
        "Audience analytics & engagement insights",
        "Brand collaboration marketplace",
        "Live streaming & virtual events",
        "Digital goods & NFT marketplace"
      ],
      timelineLabel: "Creator Economy Stack",
      timeline: [
        {
          title: "Monetization Engine",
          detail: "Subscriptions, tips, pay-per-view, and revenue share calculations"
        },
        {
          title: "Creator Dashboard",
          detail: "Audience demographics, content performance, and earnings reports"
        },
        {
          title: "Brand Connect",
          detail: "Campaign marketplace, brief matching, and performance tracking"
        },
        {
          title: "Content Distribution",
          detail: "Cross-platform publishing, scheduling, and SEO optimization tools"
        }
      ]
    },
    {
      title: "Professional & Dating Networks",
      description: "We create specialized networking platforms with intelligent matching algorithms, verified profiles, and contextual messaging. Whether for professional connections or personal relationships, our platforms prioritize safety and meaningful interactions.",
      highlights: [
        "AI-powered matching algorithms",
        "Profile verification & trust scoring",
        "Contextual smart messaging",
        "Event discovery & meetup features",
        "Privacy controls & blocking tools"
      ],
      timelineLabel: "Matching Platform",
      timeline: [
        {
          title: "Matching Algorithm",
          detail: "Multi-factor compatibility scoring with behavioral learning signals"
        },
        {
          title: "Trust & Safety",
          detail: "ID verification, photo validation, and real-time abuse detection"
        },
        {
          title: "Messaging Layer",
          detail: "Encrypted DMs, ice-breaker prompts, and read receipt controls"
        },
        {
          title: "Discovery Engine",
          detail: "Location-based suggestions, event integration, and interest mapping"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Social Networking",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your social networking needs.",
  accentColor: "#3b82f6",
};

export const projects: Project[] = [
  {
    id: "connecthub",
    tag: "Community Platform",
    tagColor: "bg-[#3b82f6]/15 text-[#3b82f6] border-[#3b82f6]/30",
    company: "ConnectHub",
    industry: "Social Networking",
    headline: "Community platform scaling to 500K users with real-time messaging and content feeds.",
    challenge:
      "Building a low-latency real-time messaging system. Content moderation at scale. Handling viral content spikes.",
    solution:
      "WebSocket-based real-time messaging with Redis pub/sub. AI content moderation pipeline. Auto-scaling infrastructure on AWS with CDN distribution.",
    duration: "75 days",
    accentColor: "#3b82f6",
    metrics: [
      { value: 500, suffix: "K", label: "Active users" },
      { value: 15, suffix: "ms", label: "Message latency" },
      { value: 99.8, suffix: "%", label: "Content accuracy" },
    ],
    timeline: [
      { phase: "Core Social Engine", detail: "User profiles, connections, activity feeds" },
      { phase: "Real-Time Messaging", detail: "WebSocket infrastructure, Redis pub/sub" },
      { phase: "AI Moderation", detail: "Content filtering, toxicity detection pipeline" },
      { phase: "Scale & CDN", detail: "Auto-scaling, CDN distribution, load testing" },
    ],
  },
  {
    id: "teamspace",
    tag: "Collaboration Tool",
    tagColor: "bg-[#3b82f6]/15 text-[#3b82f6] border-[#3b82f6]/30",
    company: "TeamSpace",
    industry: "Social Networking",
    headline: "Enterprise collaboration platform with video calls, channels, and file sharing for 50K+ teams.",
    challenge:
      "Integrating video conferencing with chat. End-to-end encryption for enterprise security. Cross-platform desktop and mobile apps.",
    solution:
      "WebRTC-based video with selective forwarding unit. E2E encrypted messaging. Electron desktop app + React Native mobile apps.",
    duration: "100 days",
    accentColor: "#3b82f6",
    metrics: [
      { value: 50, suffix: "K+", label: "Teams onboarded" },
      { value: 100, suffix: "%", label: "E2E encrypted" },
      { value: 4, suffix: " platforms", label: "Web, Desktop, iOS, Android" },
    ],
    timeline: [
      { phase: "Chat Infrastructure", detail: "E2E encrypted channels, threads, reactions" },
      { phase: "Video Integration", detail: "WebRTC with SFU for group calls" },
      { phase: "File & Search", detail: "Cloud storage integration, full-text search" },
      { phase: "Cross-Platform Launch", detail: "Electron, React Native, progressive web app" },
    ],
  },
];

