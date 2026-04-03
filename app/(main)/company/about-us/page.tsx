"use client";

import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-4xl px-4 pt-24 pb-24 lg:px-8">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold tracking-tight sm:text-5xl text-center">
          About Us
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="mt-12 space-y-8 text-black/60 dark:text-white/60 leading-relaxed text-lg">
          <p>
            Cloud Nexus is a technology company dedicated to building scalable, high-performance digital solutions. We partner with startups and enterprises to design, develop, and deploy products that make a real impact.
          </p>
          <p>
            Founded with a vision to bridge the gap between innovation and execution, we bring together a team of engineers, designers, and strategists who are passionate about solving complex problems with elegant solutions.
          </p>
          <p>
            From custom software and mobile apps to cloud infrastructure and AI-powered systems — we deliver end-to-end solutions that help businesses grow, scale, and succeed in the digital age.
          </p>
          <p>
            Our values are simple: quality over quantity, transparency in everything we do, and a relentless commitment to our clients&apos; success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
