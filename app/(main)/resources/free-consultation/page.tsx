"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, Clock, Users, Lightbulb } from "lucide-react";

const benefits = [
  { icon: Lightbulb, text: "Expert advice on your project requirements" },
  { icon: Clock, text: "30-minute focused strategy session" },
  { icon: Users, text: "Direct access to our senior consultants" },
  { icon: Sparkles, text: "Custom recommendations and roadmap" },
];

export default function FreeConsultationPage() {
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
            Free Consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto"
          >
            Book a free strategy session with our experts and get personalized guidance for your project.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">What you&apos;ll get</h2>
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-black/[0.08] bg-black/[0.02] p-5 dark:border-white/[0.08] dark:bg-white/[0.02]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#215B97]/10 shrink-0">
                    <Icon className="w-5 h-5 text-[#215B97]" />
                  </div>
                  <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed pt-2">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Booking Confirmed!</h3>
                <p className="text-black/50 dark:text-white/50">
                  We&apos;ll reach out to you shortly to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-black/[0.1] bg-black/[0.02] px-4 py-3 text-sm outline-none focus:border-[#215B97] transition-colors dark:border-white/[0.1] dark:bg-white/[0.02]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-black/[0.1] bg-black/[0.02] px-4 py-3 text-sm outline-none focus:border-[#215B97] transition-colors dark:border-white/[0.1] dark:bg-white/[0.02]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-black/[0.1] bg-black/[0.02] px-4 py-3 text-sm outline-none focus:border-[#215B97] transition-colors dark:border-white/[0.1] dark:bg-white/[0.02]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-black/[0.1] bg-black/[0.02] px-4 py-3 text-sm outline-none focus:border-[#215B97] transition-colors dark:border-white/[0.1] dark:bg-white/[0.02]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">What do you need help with?</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full rounded-lg border border-black/[0.1] bg-black/[0.02] px-4 py-3 text-sm outline-none focus:border-[#215B97] transition-colors resize-none dark:border-white/[0.1] dark:bg-white/[0.02]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#1a4a7a] text-white hover:bg-[#163d66] rounded-lg">
                  Book Free Consultation
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
