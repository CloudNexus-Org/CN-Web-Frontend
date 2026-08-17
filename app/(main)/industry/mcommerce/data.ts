import { Smartphone, CreditCard, Bell, Gift, Eye, Zap, Award, ShieldCheck, HeartHandshake, Brain, Activity, Cpu, Search, Palette, Settings, Code2, Rocket } from "lucide-react";
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
  title: "mCommerce App Development",
  subtitle: "Mobile-First Shopping",
  description: "Mobile commerce platforms optimized for conversions with one-tap checkout, personalized notifications, and seamless integration with e-commerce backends.",
  heroImage: "/images/stock/stock-be267acabb.jpg",
  accentColor: "#a855f7",
};

export const introProps: IndustryIntroProps = {
  accentColor: "#a855f7",
  heading: "Mobile Commerce Revolution",
  descriptionLeft: "We build mobile-first commerce apps and QR-based payment solutions that make buying and selling seamless on smartphones. Our mCommerce platforms feature AR try-on experiences, one-tap checkout, and universal QR payment systems serving millions of users and merchants.",
  descriptionRight: "From camera-integrated AR product visualization and biometric-authenticated express payments to merchant self-onboarding in under 5 minutes and offline transaction support for rural areas, we help businesses capture the mobile commerce opportunity.",
  highlights: [
      {
          "value": "2M+",
          "label": "Active users"
      },
      {
          "value": "100K+",
          "label": "Merchants"
      },
      {
          "value": "55%",
          "label": "Less abandonment"
      }
  ],
};

export const servicesProps: IndustryServicesProps = {
  heading: "Our mCommerce App Services",
  subtitle: "Comprehensive solutions tailored to your industry-specific needs.",
  services: [
    { icon: Smartphone, title: "Mobile Store Development", description: "Native and cross-platform mobile storefronts optimized for conversion." },
    { icon: CreditCard, title: "One-Tap Checkout", description: "Frictionless checkout flows with saved payments and express purchasing." },
    { icon: Bell, title: "Push Notifications", description: "Personalized push notification campaigns driving engagement and re-purchases." },
    { icon: Gift, title: "Loyalty & Rewards", description: "Points-based loyalty programs with tier management and exclusive offers." },
    { icon: Eye, title: "AR Product Preview", description: "Augmented reality features for virtual product try-on and visualization." },
    { icon: Zap, title: "Performance Optimization", description: "App performance tuning for fast loading, smooth scrolling, and instant search." },
  ],
  accentColor: "#a855f7",
};

export const solutionsProps: IndustrySolutionsProps = {
  heading: "Customizable Solutions We Offer",
  solutions: [
    {
      title: "Mobile Storefront",
      description: "Full-featured mobile shopping apps with native-level performance.",
      features: ["Product catalog", "Visual search", "Wishlist & favorites", "Size guides", "Price alerts"],
    },
    {
      title: "Mobile Marketplace",
      description: "Multi-vendor mobile marketplace apps connecting buyers and sellers.",
      features: ["Vendor management", "Commission system", "In-app messaging", "Order tracking", "Seller analytics"],
    },
    {
      title: "Social Commerce",
      description: "Shopping experiences integrated with social media platforms.",
      features: ["Shoppable posts", "Influencer storefronts", "Live shopping", "Social sharing", "User reviews"],
    },
    {
      title: "Subscription Commerce",
      description: "Recurring purchase and subscription box mobile applications.",
      features: ["Subscription management", "Delivery scheduling", "Preference customization", "Gift subscriptions", "Pause & resume"],
    },
  ],
  accentColor: "#a855f7",
};

export const processProps: IndustryProcessProps = {
  heading: "Our Development Process",
  subtitle: "We adopt Agile development to build feature-packed, robust solutions.",
  steps: [
    {
      step: "01",
      title: "Mobile Strategy Analysis",
      description: "Understanding mobile commerce goals, target audience, and competitor apps.",
      icon: Search,
      highlights: [
        "Mobile user behavior & funnel analysis",
        "Device & OS distribution assessment",
        "Competitor mobile experience audit",
        "Feature priority & MVP scoping",
      ],
    },
    {
      step: "02",
      title: "Mobile UX Design",
      description: "Mobile-first design with thumb-friendly navigation and conversion optimization.",
      icon: Palette,
      highlights: [
        "Thumb-zone optimized interface design",
        "Gesture-based navigation prototyping",
        "Biometric checkout flow design",
        "Offline-first shopping experience UX",
      ],
    },
    {
      step: "03",
      title: "Mobile Architecture",
      description: "Building performant native or cross-platform mobile commerce apps.",
      icon: Settings,
      highlights: [
        "Native vs cross-platform evaluation",
        "Offline storage & sync architecture",
        "Push notification delivery framework",
        "Mobile payment SDK integration planning",
      ],
    },
    {
      step: "04",
      title: "App Development",
      description: "Connecting with existing e-commerce platforms, ERPs, and payment systems.",
      icon: Code2,
      highlights: [
        "Sprint cycles for iOS & Android",
        "Real-time inventory sync modules",
        "In-app analytics & event tracking",
        "Automated UI & regression testing",
      ],
    },
    {
      step: "05",
      title: "Store Launch",
      description: "Speed optimization, device testing, and crash-free experience validation.",
      icon: ShieldCheck,
      highlights: [
        "App Store & Play Store compliance review",
        "Device compatibility matrix testing",
        "Security penetration testing",
        "Soft launch with beta user feedback",
      ],
    },
    {
      step: "06",
      title: "Growth & Retention",
      description: "App store optimization, launch strategy, and post-launch analytics setup.",
      icon: Rocket,
      highlights: [
        "Push notification engagement optimization",
        "In-app conversion funnel analysis",
        "App rating & review management",
        "Feature iteration based on user data",
      ],
    },
  ],
  accentColor: "#a855f7",
};
export const whyChooseProps: IndustryWhyChooseProps = {
  heading: "Why Choose Us",
  subtitle: "End-to-end development services from prototyping to deployment and maintenance.",
  items: [
    { icon: Award, title: "Mobile Experts", description: "Built commerce apps with millions of downloads and high ratings." },
    { icon: Zap, title: "Conversion Focused", description: "Every screen optimized for maximum add-to-cart and checkout rates." },
    { icon: ShieldCheck, title: "Secure Payments", description: "PCI-compliant mobile payments with biometric authentication." },
    { icon: HeartHandshake, title: "Ongoing Growth", description: "Continuous A/B testing, feature updates, and ASO optimization." },
  ],
  accentColor: "#a855f7",
};

export const techProps: IndustryTechProps = {
  heading: "Technologies We Leverage",
  subtitle: "Our experts leverage cutting-edge technologies to deliver custom solutions.",
  technologies: [
    { icon: Brain, title: "AI Personalization", description: "Machine learning for product recommendations and personalized shopping." },
    { icon: Eye, title: "AR & Visual Search", description: "Augmented reality try-on and visual product search capabilities." },
    { icon: Zap, title: "Performance Tech", description: "Advanced caching, lazy loading, and CDN optimization for instant loading." },
    { icon: Activity, title: "Mobile Analytics", description: "Detailed app analytics with funnel analysis and user behavior tracking." },
    { icon: Cpu, title: "Cross-Platform", description: "React Native and Flutter for native performance across iOS and Android." },
  ],
  accentColor: "#a855f7",
};

export const expertiseProps: ExpertiseAccordionProps = {
  heading: "Leverage Our Mobile Commerce Development Expertise",
  subtitle: "We craft conversion-optimized mobile shopping experiences that combine native performance with seamless payment integration and personalized engagement.",
  items: [
    {
      title: "Native iOS & Android Commerce App Development",
      description: "We build platform-native shopping apps with fluid animations, gesture-based browsing, and hardware-optimized performance. Our apps leverage device capabilities like haptic feedback, Face ID, and ARKit for immersive shopping experiences."
    },
    {
      title: "Mobile Payment Integration & Biometric Checkout",
      description: "We integrate Apple Pay, Google Pay, Samsung Pay, and UPI with biometric authentication for frictionless one-tap checkout. Our payment layer supports tokenization, 3DS2, and multi-currency processing with PCI-DSS compliance."
    },
    {
      title: "Push Notification & In-App Engagement Strategy",
      description: "We design intelligent notification systems with behavioral triggers, personalized content, and optimal send-time optimization. Our in-app engagement tools include stories, shoppable feeds, and interactive product showcases."
    },
    {
      title: "Offline-First Architecture & Performance Engineering",
      description: "We build offline-capable mobile commerce apps with smart caching, background sync, and progressive data loading. Our performance engineering ensures sub-3s cold starts and 60fps scroll performance on mid-range devices."
    },
    {
      title: "Mobile Analytics & Conversion Funnel Optimization",
      description: "We instrument comprehensive mobile analytics tracking user journeys, screen engagement, and conversion funnels. Our A/B testing frameworks optimize everything from onboarding flows to checkout button placement for maximum revenue."
    },
    {
      title: "Cross-Platform & Wearable Commerce Solutions",
      description: "We develop cross-platform mobile commerce using React Native and Flutter for code efficiency. Our wearable commerce integrations extend shopping to Apple Watch and Wear OS with glanceable product updates and quick-order actions."
    }
  ],
  accentColor: "#a855f7"
};

export const productShowcaseProps: ProductShowcaseProps = {
  accentColor: "#a855f7",
  heading: "Mobile Commerce Products for Every Shopping Channel",
  subtitle: "From native shopping apps and mobile wallets to social commerce and wearable shopping — we build conversion-optimized mobile commerce experiences.",
  products: [
    {
      title: "Native Shopping Applications",
      description: "We design high-performance native shopping apps for iOS and Android with gesture-based navigation, offline catalogs, and biometric checkout. Our apps deliver app-store-optimized experiences that drive 3x higher conversion than mobile web.",
      highlights: [
        "Gesture-based product browsing",
        "Offline catalog & wishlist access",
        "Biometric payment authentication",
        "Push notification & deep linking",
        "App store optimization (ASO) ready"
      ],
      timelineLabel: "Native App Stack",
      timeline: [
        {
          title: "UI/UX Layer",
          detail: "Platform-native components, haptic feedback, and fluid animations"
        },
        {
          title: "Catalog Engine",
          detail: "Offline-first architecture, smart caching, and incremental sync"
        },
        {
          title: "Checkout Module",
          detail: "Apple Pay, Google Pay, biometric auth, and one-tap ordering"
        },
        {
          title: "Engagement Layer",
          detail: "Rich push notifications, in-app messaging, and loyalty integration"
        }
      ]
    },
    {
      title: "Mobile Wallet & Payment Apps",
      description: "We build secure mobile wallet applications with NFC tap-to-pay, peer-to-peer transfers, and bill management. Our solutions support tokenization, biometric security, and multi-card management for frictionless mobile payments.",
      highlights: [
        "NFC tap-to-pay functionality",
        "P2P money transfers",
        "Multi-card & account management",
        "Tokenized payment security",
        "Transaction history & spend insights"
      ],
      timelineLabel: "Wallet Architecture",
      timeline: [
        {
          title: "Payment Core",
          detail: "Card tokenization, NFC provisioning, and PCI-compliant data storage"
        },
        {
          title: "Transfer Engine",
          detail: "P2P payments, QR code scanning, and scheduled auto-transfers"
        },
        {
          title: "Security Framework",
          detail: "Biometric gate, device binding, and real-time fraud monitoring"
        },
        {
          title: "Financial Insights",
          detail: "Spending categories, budget alerts, and transaction export tools"
        }
      ]
    },
    {
      title: "Social & Conversational Commerce",
      description: "We create shopping experiences embedded within social media and messaging platforms. Our solutions power shoppable posts, chatbot-driven product discovery, and in-chat checkout for platforms like WhatsApp, Instagram, and WeChat.",
      highlights: [
        "Shoppable social media posts",
        "Chatbot product discovery",
        "In-chat checkout & payments",
        "Influencer storefront management",
        "Social proof & UGC integration"
      ],
      timelineLabel: "Social Commerce",
      timeline: [
        {
          title: "Social Integration",
          detail: "Instagram Shopping, TikTok Shop, and Facebook catalog sync"
        },
        {
          title: "Conversational AI",
          detail: "Product recommendation bots, size guides, and order status queries"
        },
        {
          title: "In-Chat Payments",
          detail: "WhatsApp Pay, in-messenger checkout, and payment link generation"
        },
        {
          title: "Creator Tools",
          detail: "Influencer storefronts, commission tracking, and performance analytics"
        }
      ]
    }
  ]
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a mCommerce",
  headingBottom: "Project in Mind?",
  description: "Let's discuss how we can build the right solution for your mcommerce needs.",
  accentColor: "#a855f7",
};

export const projects: Project[] = [
  {
    id: "mshop",
    tag: "Mobile Commerce",
    tagColor: "bg-[#a855f7]/15 text-[#a855f7] border-[#a855f7]/30",
    company: "mShop",
    industry: "mCommerce",
    headline: "Mobile-first commerce app with AR try-on and one-tap checkout serving 2M+ users.",
    challenge: "High cart abandonment on mobile. Lack of product visualization for fashion/beauty. Complex checkout flows on small screens.",
    solution: "AR-powered virtual try-on for products. One-tap checkout with saved payment methods. AI-personalized home feed with push notifications.",
    duration: "75 days",
    accentColor: "#a855f7",
    metrics: [
      { value: 2, suffix: "M+", label: "Active users" },
      { value: 55, suffix: "%", label: "Less abandonment" },
      { value: 3, suffix: "x", label: "Conversion lift" },
    ],
    timeline: [
      { phase: "Mobile UX Design", detail: "Thumb-friendly navigation, gesture controls" },
      { phase: "AR Try-On", detail: "Camera integration, 3D product rendering" },
      { phase: "One-Tap Checkout", detail: "Saved cards, biometric auth, express pay" },
      { phase: "Personalization", detail: "AI feed, push notifications, recommendations" },
    ],
  },
  {
    id: "scanpay",
    tag: "Scan & Pay",
    tagColor: "bg-[#a855f7]/15 text-[#a855f7] border-[#a855f7]/30",
    company: "ScanPay",
    industry: "mCommerce",
    headline: "QR-based mobile payment app enabling contactless commerce for 100K+ merchants.",
    challenge: "Fragmented payment ecosystem. Merchant onboarding complexity. Offline payment support in rural areas.",
    solution: "Universal QR code supporting all major wallets. 5-minute merchant self-onboarding. Offline transaction support with sync-when-connected.",
    duration: "55 days",
    accentColor: "#a855f7",
    metrics: [
      { value: 100, suffix: "K+", label: "Merchants" },
      { value: 5, suffix: " min", label: "Onboarding time" },
      { value: 10, suffix: "M+", label: "Monthly transactions" },
    ],
    timeline: [
      { phase: "QR Infrastructure", detail: "Dynamic QR generation, universal scanner" },
      { phase: "Merchant Platform", detail: "Self-onboarding, KYC automation" },
      { phase: "Offline Mode", detail: "Transaction queuing, sync-when-connected" },
      { phase: "Analytics & Lending", detail: "Merchant analytics, credit scoring" },
    ],
  },
];

