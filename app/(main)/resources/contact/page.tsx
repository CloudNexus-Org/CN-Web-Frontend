"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-24 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto"
          >
            Have a question or want to work together? Reach out to us.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 text-center">
                <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
                <p className="text-black/50 dark:text-white/50">
                  We&apos;ve received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-black/[0.1] bg-black/[0.02] px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors dark:border-white/[0.1] dark:bg-white/[0.02]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-black/[0.1] bg-black/[0.02] px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors dark:border-white/[0.1] dark:bg-white/[0.02]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-black/[0.1] bg-black/[0.02] px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors dark:border-white/[0.1] dark:bg-white/[0.02]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-black/[0.1] bg-black/[0.02] px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors dark:border-white/[0.1] dark:bg-white/[0.02]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full rounded-lg border border-black/[0.1] bg-black/[0.02] px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors resize-none dark:border-white/[0.1] dark:bg-white/[0.02]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-blue-600 text-foreground hover:bg-blue-700 rounded-lg">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-black/[0.08] bg-black/[0.02] p-8 dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-black/50 dark:text-white/50">contact@cloudnexus.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/[0.08] bg-black/[0.02] p-8 dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-black/50 dark:text-white/50">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/[0.08] bg-black/[0.02] p-8 dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-sm text-black/50 dark:text-white/50">India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
