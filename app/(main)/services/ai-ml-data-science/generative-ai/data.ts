import { BookOpen, Layers, MessageSquare, FileText, Bot, Sparkles, Compass, Database, Brain, Plug, Rocket, Award, Shield, Network, LineChart } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ai-ml-data-science",
  backLabel: "Back to AI, ML & Data Science",
  titleTop: "Generative AI",
  titleBottom: "& LLMs",
  description: "We build retrieval-grounded assistants, fine-tuned models, and agentic workflows that stay on-brand, observable, and ready for enterprise scale.",
  heroImage: "/images/stock/stock-b7269deaf9.jpg",
  heroImageAlt: "LLM Powered",
  topBadge: { icon: null as any, title: "LLM Powered", subtitle: "GPT & beyond", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Custom Models", subtitle: "Fine-tuned AI", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 80, suffix: "+", label: "AI Projects" },
    { value: 95, suffix: "%", label: "Model Accuracy" },
    { value: 30, suffix: "+", label: "Data Scientists" },
    { value: 50, suffix: "+", label: "Clients Served" },
  ],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Service", headingWhite: "Offerings", subtitle: "Six focused capabilities covering LLMs, retrieval, agents, and production hardening." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Process", subtitle: "Six phases on an alternating vertical timeline." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Representative tools by category." };
export const ctaProps: CTAProps = { headingTop: "Ready to Harness", headingBottom: "Generative AI?", description: "Bring us your workflows—we will design grounded, governable AI that your teams can adopt with confidence." };

export const services: ServiceOffering[] = [
  { icon: BookOpen, title: "LLM Fine-Tuning & Training", description: "Instruction tuning, preference optimization, and evaluation harnesses that align models with your tone, policies, and domain vocabulary.", features: ["Data curation", "Safety filters", "Benchmark suites"] },
  { icon: Layers, title: "RAG Pipeline Development", description: "Chunking, embeddings, hybrid retrieval, and rerankers wired to authoritative sources with citation-ready responses.", features: ["Vector indexes", "ACL-aware search", "Observability"] },
  { icon: MessageSquare, title: "AI-Powered Chatbots & Assistants", description: "Role-based copilots with tool use, human handoff, and analytics so support and sales teams stay in control.", features: ["Tool routing", "Session memory", "Quality metrics"] },
  { icon: FileText, title: "Content Generation Platforms", description: "Template-driven generation, brand controls, and moderation workflows for marketing, documentation, and operations.", features: ["Guardrails", "Versioning", "Human review"] },
  { icon: Bot, title: "AI Agent Development", description: "Multi-step agents with planning, retries, and structured outputs integrated into your APIs and internal tools.", features: ["Orchestration", "Tracing", "Fallbacks"] },
  { icon: Sparkles, title: "Prompt Engineering & Optimization", description: "System prompts, few-shot libraries, and automated prompt testing to lift quality while cutting token spend.", features: ["Regression tests", "Latency tuning", "Cost dashboards"] },
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Use Case Discovery", description: "Map workflows, risk appetite, and success metrics so generative AI solves a sharp problem—not a vague demo.", icon: Compass },
  { step: "02", title: "Data & Knowledge Curation", description: "Prepare documents, FAQs, and structured data with rights, freshness, and PII handling baked in.", icon: Database },
  { step: "03", title: "Architecture Design", description: "Select retrieval patterns, tool boundaries, and latency budgets before committing to a model stack.", icon: Layers },
  { step: "04", title: "Model Selection & Fine-Tuning", description: "Compare providers, fine-tune where ROI is clear, and validate with domain-specific eval sets.", icon: Brain },
  { step: "05", title: "Integration & Testing", description: "Wire APIs, UIs, and logging; run red-team scenarios and load tests representative of real traffic.", icon: Plug },
  { step: "06", title: "Deployment & Monitoring", description: "Ship with feature flags, feedback capture, drift checks on embeddings, and incident-ready dashboards.", icon: Rocket },
];

export const techCategories: TechCategory[] = [
  { label: "LLM Platforms", items: [{ name: "OpenAI", logo: `${DEVICON}/openai/openai-original.svg` }, { name: "Anthropic", logo: `${DEVICON}/anthropic/anthropic-original.svg` }, { name: "Google Gemini", logo: `${DEVICON}/google/google-original.svg` }, { name: "Meta Llama", logo: `${DEVICON}/metallama/metallama-original.svg` }, { name: "Mistral", logo: `${DEVICON}/mistral/mistral-original.svg` }] },
  { label: "Frameworks", items: [{ name: "LangChain", logo: `${DEVICON}/python/python-original.svg` }, { name: "LlamaIndex", logo: `${DEVICON}/llamaindex/llamaindex-original.svg` }, { name: "Semantic Kernel", logo: `${DEVICON}/semantickernel/semantickernel-original.svg` }, { name: "AutoGen", logo: `${DEVICON}/autogen/autogen-original.svg` }] },
  { label: "Vector DBs", items: [{ name: "Pinecone", logo: `${DEVICON}/pinecone/pinecone-original.svg` }, { name: "Weaviate", logo: `${DEVICON}/weaviate/weaviate-original.svg` }, { name: "Chromadb", logo: `${DEVICON}/chromadb/chromadb-original.svg` }, { name: "Qdrant", logo: `${DEVICON}/qdrant/qdrant-original.svg` }] },
  { label: "Infrastructure", items: [{ name: "AWS Bedrock", logo: `${DEVICON}/awsbedrock/awsbedrock-original.svg` }, { name: "Azure OpenAI", logo: `${DEVICON}/azure/azure-original.svg` }, { name: "Vertex AI", logo: `${DEVICON}/vertexai/vertexai-original.svg` }, { name: "HuggingFace", logo: `${DEVICON}/huggingface/huggingface-original.svg` }] },
];

export const whyChoose: WhyChooseItem[] = [
  { icon: Award, title: "Cutting-Edge AI Expertise", description: "Hands-on experience shipping RAG, agents, and fine-tuned models with pragmatic tradeoffs—not slide-deck hype." },
  { icon: Shield, title: "Enterprise-Grade Security", description: "Tenant isolation, secrets hygiene, audit logs, and data residency patterns aligned to regulated environments." },
  { icon: Network, title: "Scalable Architecture", description: "Async pipelines, caching, and autoscaling inference paths designed for bursty chat and batch workloads alike." },
  { icon: LineChart, title: "Measurable Business Impact", description: "Instrumented quality, cost, and conversion metrics so leadership sees ROI, not anecdotal wins." },
];
