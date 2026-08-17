import { Video, FileText, Lock, Calendar, BarChart3, Globe, Award, Zap, ShieldCheck, HeartHandshake, Brain, Database, Cpu, Activity, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "Media & Entertainment Software",
  subtitle: "Creating Digital Experiences",
  description: "Streaming platforms, content management systems, and digital media distribution solutions with DRM protection, analytics, and global content delivery.",
  heroImage: "/images/stock/stock-fa7d8a7ee1.jpg",
  accentColor: "#E50914",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#E50914",
  heading: "Streaming & Content Innovation",
  descriptionLeft: "We build OTT streaming platforms, podcast hosting solutions, and content management systems that deliver media to millions of users worldwide. Our architectures handle adaptive bitrate streaming, DRM protection, and real-time viewer analytics at scale.",
  descriptionRight: "From multi-CDN delivery strategies and Widevine/FairPlay DRM integration to AI-powered content recommendations and sponsorship marketplaces, we help media companies monetize content and engage audiences across every screen.",
  highlights: [
    {
      "value": "2M+",
      "label": "Concurrent viewers"
    },
    {
      "value": "5000+",
      "label": "Content creators"
    },
    {
      "value": "99.5%",
      "label": "Stream uptime"
    }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our Media & Entertainment Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: Video, title: "Video Streaming Platforms", description: "Scalable streaming solutions with adaptive bitrate and global CDN delivery." },
    { icon: FileText, title: "Content Management", description: "Enterprise CMS for multi-format content creation, curation, and distribution." },
    { icon: Lock, title: "DRM & Rights Management", description: "Digital rights management with licensing, royalty tracking, and piracy prevention." },
    { icon: Calendar, title: "Live Event & Ticketing", description: "Event management platforms with ticketing, streaming, and audience engagement." },
    { icon: BarChart3, title: "Media Analytics", description: "Audience analytics dashboards with viewership metrics and engagement insights." },
    { icon: Globe, title: "Global Distribution", description: "Multi-region content delivery with CDN optimization and localization support." },
  ],
  accentColor: "#dc2626",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "OTT Streaming",
      description: "Over-the-top streaming platforms competing with major entertainment providers.",
      features: ["Video on demand (VOD)", "Live streaming", "Subscription management", "Content recommendations", "Multi-device support"],
    },
    {
      title: "Music & Audio",
      description: "Music streaming and podcast platforms with discovery and social features.",
      features: ["Audio streaming", "Playlist curation", "Artist profiles", "Podcast hosting", "Social sharing"],
    },
    {
      title: "Gaming Platforms",
      description: "Gaming ecosystems with multiplayer, leaderboards, and in-game economies.",
      features: ["Multiplayer infrastructure", "Leaderboards & rankings", "In-game purchases", "Tournament management", "Social features"],
    },
    {
      title: "News & Publishing",
      description: "Digital publishing platforms for news organizations and content creators.",
      features: ["Editorial workflow", "Multi-channel publishing", "Paywall & subscriptions", "Comment moderation", "SEO optimization"],
    },
  ],
  accentColor: "#dc2626",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Content Strategy Analysis",
      description: "Understanding content types, audience segments, and monetization models.",
      icon: Search,
      highlights: [
        "Content delivery workflow mapping",
        "Audience segmentation & behavior analysis",
        "DRM & licensing requirement review",
        "Monetization model evaluation",
      ],
    },
    {
      step: "02",
      title: "Creative UX Design",
      description: "Designing engaging media consumption experiences across devices.",
      icon: Palette,
      highlights: [
        "Immersive content player prototyping",
        "Personalized feed & discovery UX",
        "Creator dashboard wireframing",
        "Responsive multi-screen layouts",
      ],
    },
    {
      step: "03",
      title: "Streaming Architecture",
      description: "Building scalable platforms with streaming, CMS, and payment infrastructure.",
      icon: Settings,
      highlights: [
        "Adaptive bitrate streaming pipeline",
        "Global CDN & edge caching strategy",
        "Content management system design",
        "Real-time analytics infrastructure",
      ],
    },
    {
      step: "04",
      title: "Agile Development",
      description: "Setting up global content delivery networks for optimal performance.",
      icon: Code2,
      highlights: [
        "Sprint cycles with content team feedback",
        "Video transcoding & processing pipelines",
        "Social features & engagement tools",
        "API-first microservices development",
      ],
    },
    {
      step: "05",
      title: "QA & Release",
      description: "Implementing digital rights management and content protection.",
      icon: ShieldCheck,
      highlights: [
        "Cross-platform playback testing",
        "DRM & content protection validation",
        "Concurrent stream load testing",
        "Geo-restricted content compliance",
      ],
    },
    {
      step: "06",
      title: "Audience Growth",
      description: "Global rollout with performance monitoring and audience growth optimization.",
      icon: Rocket,
      highlights: [
        "Watch time & retention analytics",
        "AI-powered content recommendations",
        "Creator monetization optimization",
        "Engagement campaign A/B testing",
      ],
    },
  ],
  accentColor: "#dc2626",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Media Tech Leaders", description: "Built streaming platforms serving millions of concurrent viewers." },
    { icon: Zap, title: "Ultra-Low Latency", description: "Sub-second streaming latency for live events and interactive content." },
    { icon: ShieldCheck, title: "Content Protection", description: "Multi-layer DRM and anti-piracy technology protecting your content." },
    { icon: HeartHandshake, title: "Global Reach", description: "CDN partnerships delivering content to 190+ countries with 99.9% uptime." },
  ],
  accentColor: "#dc2626",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI Content Intelligence", description: "Machine learning for content recommendations, auto-tagging, and personalization." },
    { icon: Video, title: "Adaptive Streaming", description: "HLS/DASH adaptive bitrate streaming for optimal viewing across network conditions." },
    { icon: Database, title: "Cloud Transcoding", description: "Scalable media processing pipelines for encoding, transcoding, and packaging." },
    { icon: Cpu, title: "Edge Computing", description: "Edge nodes for reduced latency and localized content caching." },
    { icon: Activity, title: "Audience Analytics", description: "Real-time viewership analytics with engagement scoring and churn prediction." },
  ],
  accentColor: "#dc2626",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Media & Entertainment Tech Expertise",
  subtitle: "We build content-rich, high-performance digital platforms that captivate audiences, optimize distribution, and maximize monetization across every channel.",
  items: [
    {
      title: "Adaptive Streaming & Content Delivery Architecture",
      description: "We engineer multi-CDN video delivery with adaptive bitrate streaming (HLS/DASH), edge caching, and origin shielding. Our infrastructure handles millions of concurrent viewers with 99.99% uptime and sub-2s startup times."
    },
    {
      title: "AI-Powered Content Recommendation & Discovery",
      description: "Our recommendation engines use collaborative filtering, content-based analysis, and contextual signals to surface relevant content. We build personalized home screens, auto-play queues, and trending feeds that increase watch time."
    },
    {
      title: "Digital Rights Management & Content Protection",
      description: "We implement multi-DRM solutions (Widevine, FairPlay, PlayReady) with forensic watermarking and geo-blocking. Our access control systems manage content windows, device limits, and concurrent stream policies."
    },
    {
      title: "Monetization Strategy & Ad Tech Integration",
      description: "We build hybrid monetization platforms supporting SVOD subscriptions, AVOD ad-supported tiers, and TVOD pay-per-view events. Our SSAI integration delivers seamless, personalized ad experiences without buffering interruptions."
    },
    {
      title: "Content Management & Editorial Workflow Systems",
      description: "We create DAM and CMS platforms that streamline content ingestion, metadata tagging, transcoding, and multi-platform publishing. Our editorial workflows support collaborative review, approval chains, and scheduled releases."
    },
    {
      title: "Audience Analytics & Engagement Intelligence",
      description: "We build real-time analytics dashboards tracking viewership patterns, content performance, churn signals, and audience demographics. Our engagement intelligence tools help content teams make data-driven programming decisions."
    }
  ],
  accentColor: "#dc2626"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#dc2626",
  heading: "Media & Entertainment Products for Every Audience",
  subtitle: "From OTT streaming and music platforms to gaming studios and news publishers — we build content-rich, high-performance digital experiences.",
  products: [
    {
      title: "OTT & Video Streaming Platforms",
      description: "We engineer scalable OTT platforms with adaptive bitrate streaming, content recommendation engines, and multi-device playback. Our solutions support live streaming, VOD catalogs, and hybrid monetization models (SVOD, AVOD, TVOD).",
      highlights: [
        "Adaptive bitrate HLS/DASH streaming",
        "AI-driven content recommendations",
        "Multi-device & offline playback",
        "DRM protection & geo-blocking",
        "Hybrid monetization (SVOD/AVOD/TVOD)"
      ],
      timelineLabel: "Streaming Architecture",
      timeline: [
        {
          title: "Content Delivery",
          detail: "Multi-CDN orchestration, transcoding pipeline, and edge caching"
        },
        {
          title: "Recommendation Engine",
          detail: "Collaborative filtering, watch history analysis, and trending feeds"
        },
        {
          title: "Monetization Layer",
          detail: "Subscription tiers, ad insertion (SSAI), and pay-per-view events"
        },
        {
          title: "Player SDK",
          detail: "Cross-platform player with Widevine/FairPlay DRM and analytics hooks"
        }
      ]
    },
    {
      title: "Digital Publishing & News Platforms",
      description: "Our digital publishing solutions power newsrooms and content creators with CMS, audience engagement tools, and subscription management. Built for real-time publishing, SEO optimization, and multi-format content delivery.",
      highlights: [
        "Headless CMS with real-time publishing",
        "Audience segmentation & personalization",
        "Paywall & subscription management",
        "SEO-optimized content delivery",
        "Newsletter & push notification campaigns"
      ],
      timelineLabel: "Publishing Stack",
      timeline: [
        {
          title: "Editorial CMS",
          detail: "Collaborative editing, workflow approvals, and scheduled publishing"
        },
        {
          title: "Audience Engine",
          detail: "Reader profiles, engagement scoring, and segment-based content feeds"
        },
        {
          title: "Revenue Modules",
          detail: "Metered paywall, membership tiers, and programmatic ad management"
        },
        {
          title: "Distribution Network",
          detail: "AMP pages, Apple News integration, and social auto-posting"
        }
      ]
    },
    {
      title: "Music & Podcast Platforms",
      description: "We build audio streaming platforms with personalized playlists, podcast hosting, and artist analytics. Our solutions support high-fidelity audio, offline caching, and royalty tracking for fair creator compensation.",
      highlights: [
        "Personalized playlist generation",
        "Podcast hosting & RSS distribution",
        "Offline caching & background playback",
        "Artist dashboard & royalty tracking",
        "Social sharing & collaborative playlists"
      ],
      timelineLabel: "Audio Platform",
      timeline: [
        {
          title: "Audio Engine",
          detail: "Lossless streaming, gapless playback, and loudness normalization"
        },
        {
          title: "Discovery Algorithm",
          detail: "Taste profiles, mood-based mixes, and new release radar"
        },
        {
          title: "Creator Tools",
          detail: "Upload pipeline, analytics dashboard, and royalty split management"
        },
        {
          title: "Social Features",
          detail: "Collaborative playlists, listening activity, and artist messaging"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Media & Entertainment",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your media & entertainment needs.",
  accentColor: "#dc2626",
};

export const projects: Project[] = [
  {
    id: "streamvault",
    tag: "OTT Platform",
    tagColor: "bg-[#dc2626]/15 text-[#dc2626] border-[#dc2626]/30",
    company: "StreamVault",
    industry: "Media & Entertainment",
    headline: "OTT streaming platform with adaptive bitrate serving 2M+ concurrent viewers.",
    challenge: "Buffering issues during peak viewership. Content delivery across geographies. DRM protection for premium content.",
    solution: "ABR streaming with multi-CDN strategy. AI-driven content recommendations. Widevine/FairPlay DRM integration. Real-time viewer analytics.",
    duration: "100 days",
    accentColor: "#dc2626",
    metrics: [
      { value: 2, suffix: "M+", label: "Concurrent viewers" },
      { value: 99.5, suffix: "%", label: "Stream uptime" },
      { value: 0, suffix: " piracy", label: "DRM protected" },
    ],
    timeline: [
      { phase: "Streaming Infrastructure", detail: "ABR encoding, multi-CDN delivery" },
      { phase: "DRM & Security", detail: "Widevine, FairPlay, content encryption" },
      { phase: "Recommendation Engine", detail: "Watch history, collaborative filtering" },
      { phase: "Analytics & Scale", detail: "Real-time viewer metrics, auto-scaling" },
    ],
  },
  {
    id: "podcastpro",
    tag: "Audio Platform",
    tagColor: "bg-[#dc2626]/15 text-[#dc2626] border-[#dc2626]/30",
    company: "PodcastPro",
    industry: "Media & Entertainment",
    headline: "Podcast hosting and analytics platform used by 5000+ creators with AI transcription.",
    challenge: "No affordable hosting with detailed analytics. Manual transcription processes. Monetization tools for independent creators.",
    solution: "Scalable audio hosting with per-episode analytics. AI-powered transcription and chapter markers. Built-in sponsorship marketplace for creators.",
    duration: "60 days",
    accentColor: "#dc2626",
    metrics: [
      { value: 5000, suffix: "+", label: "Creators" },
      { value: 98, suffix: "%", label: "Transcription accuracy" },
      { value: 3, suffix: "x", label: "Creator revenue" },
    ],
    timeline: [
      { phase: "Hosting Infrastructure", detail: "S3-based storage, RSS feed generation" },
      { phase: "AI Transcription", detail: "Speech-to-text, chapter detection, search" },
      { phase: "Analytics Dashboard", detail: "Downloads, retention, listener demographics" },
      { phase: "Monetization", detail: "Sponsorship marketplace, premium subscriptions" },
    ],
  },
];

