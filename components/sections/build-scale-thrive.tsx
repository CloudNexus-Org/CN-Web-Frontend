"use client";

import { motion } from "framer-motion";

export function BuildScaleThrive() {
  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-black">
      <div className="w-full px-6 md:px-10 lg:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white whitespace-nowrap"
        >
          Build, Scale, and Thrive with CloudNexus
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto"
        >
          From hiring top talent to building innovative solutions, CloudNexus simplifies growth with tailored strategies that deliver measurable impact.
        </motion.p>
      </div>
    </section>
  );
}
