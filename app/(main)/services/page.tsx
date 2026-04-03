"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: "💻",
    title: "Custom Software Development",
    description: "End-to-end development of scalable and high-performance software tailored to business needs.",
    href: "/services/custom-software-development",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "iOS & Android applications with seamless UI/UX and advanced functionality.",
    href: "/services/mobile-app-development",
  },
  {
    icon: "🌐",
    title: "Web Development",
    description: "Responsive, secure, and fast web applications from startup websites to enterprise platforms.",
    href: "/services/web-development",
  },
  {
    icon: "☁️",
    title: "Cloud & SaaS Solutions",
    description: "Cloud migration, cloud-native apps, and scalable SaaS platform development.",
    href: "/services/cloud-saas-solutions",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "User-centric design solutions focused on usability, engagement, and modern aesthetics.",
    href: "/services/ui-ux-design",
  },
  {
    icon: "⚙️",
    title: "Digital Transformation",
    description: "Modernizing legacy systems, automating workflows, and integrating advanced technologies.",
    href: "/services/digital-transformation",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description: "SEO, social media, and paid campaigns to boost brand visibility and growth.",
    href: "/services/digital-marketing",
  },
  {
    icon: "🤖",
    title: "AI, ML & Data Science",
    description: "Data-driven solutions including predictive analytics and intelligent automation.",
    href: "/services/ai-ml-data-science",
  },
  {
    icon: "🔒",
    title: "Cybersecurity & Compliance",
    description: "Protecting systems with advanced security practices and compliance frameworks.",
    href: "/services/cybersecurity-compliance",
  },
  {
    icon: "⚡",
    title: "DevOps & Cloud Automation",
    description: "CI/CD pipelines, containerization, and automated infrastructure for faster delivery.",
    href: "/services/devops-cloud-automation",
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto"
        >
          We deliver end-to-end technology solutions to help businesses innovate, scale, and succeed.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link href={service.href}>
                <div className="group h-full rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 transition-all duration-300 hover:border-black/[0.15] hover:bg-black/[0.05] dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.15] dark:hover:bg-white/[0.05]">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-black group-hover:text-black/90 dark:text-white dark:group-hover:text-white/90">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-black/45 leading-relaxed group-hover:text-black/60 dark:text-white/45 dark:group-hover:text-white/60">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
