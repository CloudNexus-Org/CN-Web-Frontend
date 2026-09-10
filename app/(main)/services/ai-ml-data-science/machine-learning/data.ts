import { Cpu, Layers, Share2, AlertTriangle, Activity, Rocket, Target, Database, SlidersHorizontal, Brain, Gauge, Award, ShieldCheck, Puzzle, RefreshCw } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ai-ml-data-science",
  backLabel: "Back to AI, ML & Data Science",
  titleTop: "Machine",
  titleBottom: "Learning Solutions",
  description: "From classical models to deep learning, we design, train, and ship ML systems that stay accurate in production—not just in notebooks.",
  heroImage: "/images/stock/stock-bec6bc3726.jpg",
  heroImageAlt: "Deep Learning",
  topBadge: { icon: null as any, title: "Deep Learning", subtitle: "Neural networks", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "95%+ Accuracy", subtitle: "Production models", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 80, suffix: "+", label: "AI Projects" },
    { value: 95, suffix: "%", label: "Model Accuracy" },
    { value: 30, suffix: "+", label: "Data Scientists" },
    { value: 50, suffix: "+", label: "Clients Served" },
  ],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Service", headingWhite: "Offerings", subtitle: "Six focused capabilities covering modeling, optimization, and reliable deployment." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Process", subtitle: "Six phases on an alternating vertical timeline." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Representative tools by category." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Intelligent", headingBottom: "ML Models?", description: "Partner with us to move from prototypes to governed, monitored ML that teams can trust in production." };

export const services: ServiceOffering[] = [
  { icon: Cpu, title: "Custom ML Model Development", description: "End-to-end model design from baseline experiments to validated architectures aligned with your KPIs and constraints.", features: ["Problem framing", "Experiment tracking", "Model packaging"] },
  { icon: Layers, title: "Deep Learning Solutions", description: "Neural architectures for vision, language, and structured data with careful regularization, monitoring, and inference optimization.", features: ["Architecture search", "GPU training", "ONNX export"] },
  { icon: Share2, title: "Recommendation Systems", description: "Collaborative, content-based, and hybrid recommenders with cold-start handling, diversity controls, and online evaluation.", features: ["Ranking metrics", "A/B hooks", "Personalization"] },
  { icon: AlertTriangle, title: "Anomaly Detection", description: "Unsupervised and semi-supervised detectors for fraud, equipment faults, and operational drift with explainable signals.", features: ["Threshold tuning", "Alert routing", "Root-cause tags"] },
  { icon: Activity, title: "Time Series Forecasting", description: "Seasonal models, probabilistic forecasts, and scenario planning for demand, capacity, and financial planning.", features: ["Backtesting", "Confidence bands", "Holiday effects"] },
  { icon: Rocket, title: "Model Optimization & Deployment", description: "Latency-aware serving, autoscaling, canary releases, and continuous performance reviews across environments.", features: ["Batch + realtime", "Observability", "Retrain triggers"] },
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Problem Definition", description: "Translate business outcomes into measurable targets, guardrails, and data requirements before writing code.", icon: Target },
  { step: "02", title: "Data Preparation", description: "Ingest, clean, label, and version datasets with lineage so experiments stay reproducible.", icon: Database },
  { step: "03", title: "Feature Engineering", description: "Build stable signals, handle leakage, and document assumptions for transparent model behavior.", icon: SlidersHorizontal },
  { step: "04", title: "Model Training", description: "Train candidates with cross-validation, hyperparameter search, and fairness checks where applicable.", icon: Brain },
  { step: "05", title: "Evaluation & Tuning", description: "Stress-test on holdouts, compare baselines, and align metrics with product and compliance needs.", icon: Gauge },
  { step: "06", title: "Deployment & Monitoring", description: "Ship with CI/CD, drift detection, and rollback paths so production models stay trustworthy.", icon: Rocket },
];

export const techCategories: TechCategory[] = [
  { label: "ML Frameworks", items: [{ name: "TensorFlow", logo: `${DEVICON}/tensorflow/tensorflow-original.svg` }, { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg` }, { name: "scikit-learn", logo: `${DEVICON}/scikitlearn/scikitlearn-original.svg` }, { name: "XGBoost", logo: `${DEVICON}/xgboost/xgboost-original.svg` }, { name: "LightGBM", logo: `${DEVICON}/lightgbm/lightgbm-original.svg` }] },
  { label: "Deep Learning", items: [{ name: "Keras", logo: `${DEVICON}/keras/keras-original.svg` }, { name: "FastAI", logo: `${DEVICON}/fastai/fastai-original.svg` }, { name: "JAX", logo: `${DEVICON}/jax/jax-original.svg` }, { name: "ONNX", logo: `${DEVICON}/python/python-original.svg` }] },
  { label: "MLOps", items: [{ name: "MLflow", logo: `${DEVICON}/python/python-original.svg` }, { name: "Kubeflow", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` }, { name: "SageMaker", logo: `${DEVICON}/sagemaker/sagemaker-original.svg` }, { name: "Vertex AI", logo: `${DEVICON}/vertexai/vertexai-original.svg` }] },
  { label: "Cloud", items: [{ name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` }, { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` }, { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` }, { name: "Databricks", logo: `${DEVICON}/python/python-original.svg` }] },
];

export const whyChoose: WhyChooseItem[] = [
  { icon: Award, title: "Research-Grade Expertise", description: "Rigorous experimentation, literature-informed choices, and honest reporting on what the data can and cannot support." },
  { icon: ShieldCheck, title: "Production-Ready Models", description: "Serving patterns, SLAs, and operational dashboards designed for teams who own models after launch day." },
  { icon: Puzzle, title: "Custom Solutions", description: "No cookie-cutter templates—architectures shaped to your domain, data volume, and integration surface area." },
  { icon: RefreshCw, title: "Continuous Improvement", description: "Retraining cadences, champion/challenger workflows, and feedback loops that keep accuracy aligned with reality." },
];
