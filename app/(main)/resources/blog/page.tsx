"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogs = [
  {
    title: "How Cloud-Native Architecture Transforms Business Operations",
    excerpt: "Explore how migrating to cloud-native solutions can improve scalability, reduce costs, and accelerate innovation.",
    date: "Mar 28, 2026",
    category: "Cloud",
    readTime: "5 min read",
  },
  {
    title: "The Future of AI in Software Development",
    excerpt: "AI is reshaping how we build software — from code generation to automated testing and deployment.",
    date: "Mar 20, 2026",
    category: "AI & ML",
    readTime: "7 min read",
  },
  {
    title: "DevOps Best Practices for Startups in 2026",
    excerpt: "A practical guide to setting up CI/CD pipelines, containerization, and infrastructure automation from day one.",
    date: "Mar 12, 2026",
    category: "DevOps",
    readTime: "6 min read",
  },
  {
    title: "Why UI/UX Design is Critical for Product Success",
    excerpt: "Great design isn't just about aesthetics — it directly impacts user retention, engagement, and revenue.",
    date: "Mar 5, 2026",
    category: "Design",
    readTime: "4 min read",
  },
  {
    title: "Cybersecurity Threats Every Business Should Know in 2026",
    excerpt: "From ransomware to supply chain attacks — understanding the threat landscape and how to stay protected.",
    date: "Feb 25, 2026",
    category: "Security",
    readTime: "8 min read",
  },
  {
    title: "Building Scalable SaaS Platforms: Lessons Learned",
    excerpt: "Key architectural decisions, tech stack choices, and growth strategies from real SaaS projects.",
    date: "Feb 15, 2026",
    category: "SaaS",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto"
        >
          Insights, tutorials, and updates from the CloudNexus team.
        </motion.p>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link href="#">
                <div className="group h-full rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 transition-all duration-300 hover:border-black/[0.15] hover:bg-black/[0.05] dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.15] dark:hover:bg-white/[0.05] flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      {blog.category}
                    </span>
                    <span className="text-xs text-black/40 dark:text-white/40">{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug mb-3 group-hover:text-blue-500 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-black/45 dark:text-white/45 leading-relaxed flex-1">
                    {blog.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-black/35 dark:text-white/35">{blog.date}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
