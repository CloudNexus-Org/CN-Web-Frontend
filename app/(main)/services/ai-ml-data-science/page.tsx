"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Brain, BarChart3, Bot, Database, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const offerings = [
  { icon: Brain, title: "Machine Learning", desc: "Custom ML models for prediction, classification, clustering, and recommendation systems." },
  { icon: Bot, title: "Generative AI", desc: "LLM integration, fine-tuning, RAG pipelines, and AI-powered content generation tools." },
  { icon: BarChart3, title: "Predictive Analytics", desc: "Forecasting models for sales, demand, churn prediction, and risk assessment." },
  { icon: Database, title: "Data Engineering", desc: "ETL pipelines, data lakes, warehouses, and real-time streaming architectures." },
  { icon: Cpu, title: "Computer Vision", desc: "Image recognition, object detection, OCR, and video analytics solutions." },
  { icon: Layers, title: "NLP Solutions", desc: "Chatbots, sentiment analysis, text classification, and document intelligence." },
];

const process = [
  { step: "01", title: "Data Assessment", desc: "Evaluating data quality, availability, and identifying high-impact use cases." },
  { step: "02", title: "Data Engineering", desc: "Building robust pipelines to clean, transform, and prepare data for modeling." },
  { step: "03", title: "Model Development", desc: "Training, validating, and iterating on ML models with rigorous evaluation." },
  { step: "04", title: "Integration", desc: "Deploying models as APIs, embedding into products, and building user interfaces." },
  { step: "05", title: "Monitoring", desc: "Model drift detection, performance tracking, and automated retraining pipelines." },
  { step: "06", title: "Scale", desc: "Scaling inference infrastructure, optimizing costs, and expanding use cases." },
];

const techStack = ["Python", "TensorFlow", "PyTorch", "scikit-learn", "LangChain", "OpenAI", "Hugging Face", "Apache Spark", "Databricks", "MLflow", "Pinecone", "Pandas"];

export default function AIMLDataSciencePage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80" alt="AI, ML & Data Science" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="mx-auto max-w-7xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors mb-6"><ArrowLeft size={16} /> Back to Services</Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">AI, ML & Data Science</motion.h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="py-16 max-w-4xl">
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">We build data-driven solutions that transform raw data into intelligent insights and automated decisions. From predictive analytics to generative AI, our team delivers production-ready ML systems.</p>
          <p className="mt-6 text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">Whether you need a recommendation engine, a chatbot powered by LLMs, or a complete data platform, we combine deep expertise in AI/ML with solid engineering practices to deliver real business value.</p>
        </motion.div>

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#215B97]/30 hover:bg-black/[0.04] transition-all dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#215B97]/30 dark:hover:bg-white/[0.04]">
                <item.icon size={24} className="text-[#215B97] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-12">Our Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <span className="text-4xl font-bold text-[#215B97]/20">{item.step}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (<span key={tech} className="px-4 py-2 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60">{tech}</span>))}
          </div>
        </div>

        <div className="py-20 border-t border-black/[0.06] dark:border-white/[0.06] text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock the Power of AI</h2>
          <p className="text-black/50 dark:text-white/50 mb-8 max-w-lg mx-auto">Let us help you leverage AI and data to make smarter decisions and build intelligent products.</p>
          <Link href="/resources/free-consultation"><Button size="lg" className="rounded-lg bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 px-8">Book a Free Consultation <ArrowRight size={16} className="ml-2" /></Button></Link>
        </div>
      </div>
    </section>
  );
}
