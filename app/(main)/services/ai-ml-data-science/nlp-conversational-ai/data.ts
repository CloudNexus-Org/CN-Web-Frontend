import { MessageCircle, Brain, FileText, Languages, Target, BookOpen, Cpu, GitBranch, Plug, Rocket, Shield, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ai-ml-data-science",
  backLabel: "Back to AI, ML & Data Science",
  titleTop: "NLP &",
  titleBottom: "Conversational AI",
  description: "Language-aware products — chatbots, search, summarization, and voice — built for accuracy, safety, and measurable business outcomes.",
  heroImage: "/images/stock/stock-b7269deaf9.jpg",
  heroImageAlt: "NLP Engine",
  topBadge: { icon: null as any, title: "NLP Engine", subtitle: "Multi-language", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Smart Bots", subtitle: "24/7 automation", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 80, suffix: "+", label: "AI Projects" },
    { value: 95, suffix: "%", label: "Model Accuracy" },
    { value: 30, suffix: "+", label: "Data Scientists" },
    { value: 50, suffix: "+", label: "Clients Served" },
  ],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "NLP & Conversational AI", headingWhite: "Services", subtitle: "From classical NLP to modern LLMs — we design systems that understand your customers, employees, and documents at scale." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our NLP & Conversational AI", headingWhite: "Process", subtitle: "Discovery through optimization — with evaluation harnesses and governance checkpoints baked in from the start." };
export const techHeading: ServicePageSectionProps = { headingGray: "NLP & Conversational AI", headingWhite: "Technologies", subtitle: "Libraries, foundation-model providers, dialog frameworks, and speech services we integrate into cohesive platforms." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Intelligent", headingBottom: "Conversations?", description: "Share your channels, languages, and compliance context — we'll map a pragmatic path from pilot to production." };

export const services: ServiceOffering[] = [
  { icon: MessageCircle, title: "Intelligent Chatbots & Virtual Assistants", description: "Goal-oriented dialog systems with memory, tool use, and escalation paths — integrated into CRM, support desks, and custom web or mobile apps.", features: ["Tool calling", "Handoff to agents", "Omnichannel UX"] },
  { icon: Brain, title: "Sentiment Analysis & Opinion Mining", description: "Aspect-based sentiment, emotion detection, and trend surfacing across reviews, surveys, and social streams for product and CX teams.", features: ["Aspect extraction", "Emotion labels", "Trend dashboards"] },
  { icon: FileText, title: "Text Classification & Categorization", description: "Multi-label and hierarchical classifiers for routing tickets, moderating content, and prioritizing workflows with explainable predictions.", features: ["Multi-label", "Hierarchical tags", "Explainability"] },
  { icon: FileText, title: "Document Intelligence & Extraction", description: "Structured data from contracts, invoices, and forms — combining layout models, rules, and LLM reasoning with full audit trails.", features: ["Layout models", "Hybrid rules + LLM", "Audit trails"] },
  { icon: Languages, title: "Language Translation & Localization", description: "Adaptive MT, glossary enforcement, and in-context review workflows so global teams ship consistent messaging in every market.", features: ["Adaptive MT", "Glossaries", "Review workflows"] },
  { icon: MessageCircle, title: "Voice-Enabled Interfaces", description: "Speech-to-text, NLU, and text-to-speech pipelines for IVR modernization, hands-free apps, and accessibility-first experiences.", features: ["Streaming STT", "Barge-in support", "Accessibility"] },
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Use Case Analysis", description: "Define intents, languages, compliance needs, and success metrics — mapping user journeys before model or vendor selection.", icon: Target },
  { step: "02", title: "Data & Corpus Preparation", description: "Clean, tokenize, de-identify, and augment text — with train/dev/test splits that reflect real traffic, not lab conditions.", icon: BookOpen },
  { step: "03", title: "Model Selection & Training", description: "Choose classical, fine-tuned, or retrieval-augmented LLM stacks — benchmarked on your data with latency and cost constraints.", icon: Cpu },
  { step: "04", title: "Intent & Entity Design", description: "Ontology design, slot filling, and disambiguation policies — so assistants stay on-brand and recover gracefully from confusion.", icon: GitBranch },
  { step: "05", title: "Integration & Testing", description: "APIs, webhooks, and channel adapters with contract tests, red-team prompts, and load testing before any public launch.", icon: Plug },
  { step: "06", title: "Launch & Optimization", description: "Canary releases, analytics on resolution and containment, and continuous prompt and model updates based on live feedback.", icon: Rocket },
];

export const techCategories: TechCategory[] = [
  { label: "NLP Libraries", items: [{ name: "spaCy", logo: `${DEVICON}/python/python-original.svg` }, { name: "NLTK", logo: `${DEVICON}/python/python-original.svg` }, { name: "Hugging Face", logo: `${DEVICON}/python/python-original.svg` }, { name: "Flair", logo: `${DEVICON}/flair/flair-original.svg` }, { name: "Stanza", logo: `${DEVICON}/stanza/stanza-original.svg` }] },
  { label: "LLM Platforms", items: [{ name: "OpenAI", logo: `${DEVICON}/openai/openai-original.svg` }, { name: "Anthropic", logo: `${DEVICON}/anthropic/anthropic-original.svg` }, { name: "Google PaLM", logo: `${DEVICON}/google/google-original.svg` }, { name: "Cohere", logo: `${DEVICON}/cohere/cohere-original.svg` }] },
  { label: "Chatbot Frameworks", items: [{ name: "Rasa", logo: `${DEVICON}/python/python-original.svg` }, { name: "Dialogflow", logo: `${DEVICON}/google/google-original.svg` }, { name: "Botpress", logo: `${DEVICON}/python/python-original.svg` }, { name: "Microsoft Bot", logo: `${DEVICON}/microsoftbot/microsoftbot-original.svg` }] },
  { label: "Speech", items: [{ name: "Whisper", logo: `${DEVICON}/whisper/whisper-original.svg` }, { name: "Azure Speech", logo: `${DEVICON}/azure/azure-original.svg` }, { name: "Google STT", logo: `${DEVICON}/google/google-original.svg` }, { name: "AWS Transcribe", logo: `${DEVICON}/awstranscribe/awstranscribe-original.svg` }] },
];

export const whyChoose: WhyChooseItem[] = [
  { icon: Languages, title: "Multilingual Expertise", description: "Low-resource language support, RTL layouts, and locale-aware evaluation — not English-only shortcuts." },
  { icon: Brain, title: "Context-Aware AI", description: "Retrieval, memory, and business grounding so answers reflect your policies, catalogs, and knowledge bases." },
  { icon: Shield, title: "Production-Grade NLP", description: "Guardrails, logging, PII handling, and SLAs designed for regulated and customer-facing deployments." },
  { icon: HeartHandshake, title: "Human-Like Interactions", description: "Natural tone, empathy cues, and graceful fallbacks — assistants that feel helpful rather than robotic." },
];
