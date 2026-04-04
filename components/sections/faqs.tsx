"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does CloudNexus offer?",
    answer:
      "Custom Software, Mobile Apps, Web Development, Cloud & SaaS, UI/UX Design, Digital Transformation, AI/ML, Cybersecurity, and DevOps.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "4-8 weeks for simple apps, 3-6 months for enterprise solutions. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "Both — from early-stage startups to Fortune 500s. We've partnered with YC, Tiger Global, and Accel-backed ventures.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "15+ industries: Healthcare, E-Commerce, Fintech, Education, Real Estate, Logistics, Media, and more.",
  },
  {
    question: "How do you ensure quality and security?",
    answer:
      "Agile methodology, CI/CD, comprehensive testing, code reviews, security audits. Compliant with HIPAA, SOC 2, GDPR.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Fixed-price, time & material, or dedicated teams — flexible to your scope and budget.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes — bug fixes, monitoring, security updates, feature enhancements, and 24/7 support based on your SLA.",
  },
  {
    question: "Can I see examples of your past work?",
    answer:
      "Visit our 'Our Work' section for 30+ projects with challenges, approach, tech used, and outcomes.",
  },
];

const leftFaqs = faqs.slice(0, 4);
const rightFaqs = faqs.slice(4);

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 py-3.5 text-left group"
      >
        <span className="text-[13px] font-medium text-black dark:text-white/90 leading-snug pr-2">
          {faq.question}
        </span>
        <div className="flex-shrink-0 w-5 h-5 rounded-md border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center">
          {open ? (
            <Minus size={11} strokeWidth={2} className="text-black/40 dark:text-white/40" />
          ) : (
            <Plus size={11} strokeWidth={2} className="text-black/40 dark:text-white/40" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-3" : "max-h-0"
        }`}
      >
        <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed pr-8">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  );
}

export function FAQs() {
  return (
    <section className="w-full py-14 md:py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:w-[280px] flex-shrink-0 mb-8 md:mb-0 md:sticky md:top-24"
          >
            <span className="inline-block text-[10px] font-semibold text-black/35 dark:text-white/30 uppercase tracking-[0.2em] mb-2">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white leading-tight">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="mt-3 text-xs text-black/45 dark:text-white/35 leading-relaxed max-w-[240px]">
              Everything you need to know about working with CloudNexus.
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
            <div className="divide-y divide-black/[0.05] dark:divide-white/[0.05]">
              {leftFaqs.map((faq, i) => (
                <FAQItem key={faq.question} faq={faq} index={i} />
              ))}
            </div>
            <div className="divide-y divide-black/[0.05] dark:divide-white/[0.05]">
              {rightFaqs.map((faq, i) => (
                <FAQItem key={faq.question} faq={faq} index={i + 4} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
