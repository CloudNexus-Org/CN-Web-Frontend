import {
  Eye,
  ScanLine,
  Layers,
  ClipboardList,
  Images,
  Cpu,
  BarChart3,
  Cloud,
  RefreshCw,
  Zap,
  Building2,
  FileText,
  Video,
} from "lucide-react";
import type {
  ServiceOffering,
  ProcessStep,
  TechCategory,
  WhyChooseItem,
  ServicePageHeroProps,
  ServicePageSectionProps,
  CTAProps,
} from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ai-ml-data-science",
  backLabel: "Back to AI, ML & Data Science",
  titleTop: "Computer",
  titleBottom: "Vision",
  description: "Production-grade models that interpret images and video — from quality control to intelligent customer experiences.",
  heroImage: "/images/stock/stock-c0082bf1e9.jpg",
  heroImageAlt: "95% Accuracy",
  topBadge: { icon: null as any, title: "95% Accuracy", subtitle: "Object detection", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Real-Time", subtitle: "Video processing", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 80, suffix: "+", label: "AI Projects" },
    { value: 95, suffix: "%", label: "Model Accuracy" },
    { value: 30, suffix: "+", label: "Data Scientists" },
    { value: 50, suffix: "+", label: "Clients Served" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Computer Vision",
  headingWhite: "Services",
  subtitle: "End-to-end vision systems — data, modeling, deployment, and monitoring — aligned to safety, latency, and regulatory expectations.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Computer Vision",
  headingWhite: "Process",
  subtitle: "From pixels to production — a transparent methodology with measurable milestones at every phase.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Computer Vision",
  headingWhite: "Technologies",
  subtitle: "Open-source frameworks, managed vision APIs, edge runtimes, and labeling platforms we combine for robust solutions.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Give Your Business",
  headingBottom: "Eyes That See?",
  description: "Share your imagery goals and constraints — we'll propose a vision roadmap you can ship with confidence.",
};

export const services: ServiceOffering[] = [
  { icon: Eye, title: "Image Recognition & Classification", description: "Fine-tuned CNNs and vision transformers for tagging, sorting, and routing visual content — with calibrated confidence and human-in-the-loop where needed.", features: ["Custom taxonomies", "Confidence calibration", "Human review hooks"] },
  { icon: Layers, title: "Object Detection & Tracking", description: "Bounding boxes, instance segmentation, and multi-object tracking for retail, logistics, safety, and robotics use cases at the edge or in the cloud.", features: ["Real-time tracking", "Multi-camera fusion", "Edge deployment"] },
  { icon: FileText, title: "OCR & Document Processing", description: "Layout-aware OCR, table extraction, and key-value parsing from scans and PDFs — integrated into workflows and ERP systems.", features: ["Layout LM", "Table extraction", "Workflow APIs"] },
  { icon: Video, title: "Video Analytics & Surveillance", description: "Temporal models for alerts, counting, dwell time, and anomaly detection — with privacy-preserving options and retention policies.", features: ["Event alerts", "Privacy controls", "Retention policies"] },
  { icon: ScanLine, title: "Visual Quality Inspection", description: "Defect detection, measurement, and pass/fail automation on production lines — reducing scrap while improving traceability.", features: ["Defect localization", "SPC integration", "Audit trails"] },
  { icon: Cpu, title: "Medical Image Analysis", description: "Segmentation, registration, and screening-assist models developed with clinical validation protocols and explainability in mind.", features: ["DICOM pipelines", "Validation protocols", "Explainability"] },
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Problem Scoping", description: "Define accuracy targets, latency budgets, camera placement, and regulatory context so the solution fits operations, not the other way around.", icon: ClipboardList },
  { step: "02", title: "Data Collection & Annotation", description: "Capture strategy, labeling guidelines, and active learning loops — maximizing label efficiency while covering edge cases.", icon: Images },
  { step: "03", title: "Model Architecture Design", description: "Select backbones, heads, and training recipes matched to data volume — balancing precision, recall, and inference cost.", icon: Cpu },
  { step: "04", title: "Training & Validation", description: "Rigorous splits, cross-validation, and bias checks — with reproducible experiments and clear promotion criteria to production.", icon: BarChart3 },
  { step: "05", title: "Edge/Cloud Deployment", description: "Optimized exports (ONNX, TensorRT), autoscaling APIs, and firmware integration so models run where your product needs them.", icon: Cloud },
  { step: "06", title: "Monitoring & Retraining", description: "Drift detection, shadow deployments, and scheduled retrains — keeping vision systems accurate as scenes and SKUs evolve.", icon: RefreshCw },
];

export const techCategories: TechCategory[] = [
  { label: "Frameworks", items: [{ name: "OpenCV", logo: `${DEVICON}/opencv/opencv-original.svg` }, { name: "TensorFlow", logo: `${DEVICON}/tensorflow/tensorflow-original.svg` }, { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg` }, { name: "YOLO", logo: `${DEVICON}/python/python-original.svg` }, { name: "Detectron2", logo: `${DEVICON}/detectron2/detectron2-original.svg` }] },
  { label: "Cloud Vision", items: [{ name: "AWS Rekognition", logo: `${DEVICON}/awsrekognition/awsrekognition-original.svg` }, { name: "Azure Vision", logo: `${DEVICON}/azure/azure-original.svg` }, { name: "Google Vision", logo: `${DEVICON}/google/google-original.svg` }, { name: "Vertex AI", logo: `${DEVICON}/vertexai/vertexai-original.svg` }] },
  { label: "Edge", items: [{ name: "TensorRT", logo: `${DEVICON}/tensorrt/tensorrt-original.svg` }, { name: "ONNX Runtime", logo: `${DEVICON}/onnxruntime/onnxruntime-original.svg` }, { name: "CoreML", logo: `${DEVICON}/apple/apple-original.svg` }, { name: "TFLite", logo: `${DEVICON}/tflite/tflite-original.svg` }] },
  { label: "Annotation", items: [{ name: "Labelbox", logo: `${DEVICON}/labelbox/labelbox-original.svg` }, { name: "V7", logo: `${DEVICON}/v7/v7-original.svg` }, { name: "CVAT", logo: `${DEVICON}/cvat/cvat-original.svg` }, { name: "Roboflow", logo: `${DEVICON}/roboflow/roboflow-original.svg` }] },
];

export const whyChoose: WhyChooseItem[] = [
  { icon: Eye, title: "Deep CV Expertise", description: "From classical vision to modern transformers — we pick the right approach for your data, hardware, and accuracy bar." },
  { icon: Zap, title: "Real-Time Performance", description: "Profiling, quantization, and kernel fusion so inference keeps up with production line speeds and interactive experiences." },
  { icon: Cloud, title: "Edge & Cloud Ready", description: "One model lineage with deployment targets from GPUs in the cloud to NPUs on devices — consistent metrics everywhere." },
  { icon: Building2, title: "Industry-Specific Solutions", description: "Retail, manufacturing, healthcare, and logistics patterns — not generic demos — tailored to your operational constraints." },
];
