"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Eye, Shield, Cpu, Zap, Globe, Users } from "lucide-react";

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const ValueCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <AnimatedSection delay={delay}>
    <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
      <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-6 h-6 text-white/70" />
      </div>
      <h3 className="text-xl font-serif mb-3 text-white/90">{title}</h3>
      <p className="text-white/50 leading-relaxed font-light">
        {description}
      </p>
    </div>
  </AnimatedSection>
);

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-medium text-white/50 mb-8">
              <Lightbulb className="w-3 h-3" />
              <span>Our Core Philosophy</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-serif font-normal tracking-tight mb-8 leading-[0.9]">
              Built on <span className="text-white/40 italic">principles</span>, driven by <span className="text-white/40 italic">innovation</span>.
            </h1>
            <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl">
              At Cloud Nexus, we believe that technology should be an invisible force that empowers human potential. Our philosophy is rooted in simplicity, security, and sustainable scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.05] flex items-center justify-center">
                  <Target className="w-8 h-8 text-white/80" />
                </div>
                <h2 className="text-4xl font-serif font-normal">The Mission</h2>
                <p className="text-lg text-white/50 font-light leading-relaxed">
                  To democratize enterprise-grade cloud infrastructure. We bridge the gap between complex engineering and seamless business operations, ensuring every organization has the foundation to scale without limits.
                </p>
                <div className="pt-4 flex gap-8">
                  <div>
                    <p className="text-3xl font-serif mb-1">99.9%</p>
                    <p className="text-xs text-white/30 uppercase tracking-widest">Uptime Target</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif mb-1">24/7</p>
                    <p className="text-xs text-white/30 uppercase tracking-widest">Expert Care</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.05] flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white/80" />
                </div>
                <h2 className="text-4xl font-serif font-normal">The Vision</h2>
                <p className="text-lg text-white/50 font-light leading-relaxed">
                  A future where digital infrastructure is self-healing, globally distributed, and infinitely scalable. We strive to be the standard-bearer for the next era of cloud computing, defined by ethics and efficiency.
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    "Zero-Trust Architecture",
                    "Carbon-Neutral Computing",
                    "AI-Enhanced Orchestration",
                    "Global Edge Distribution"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <Zap className="w-3 h-3 text-white/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-5xl font-serif font-normal mb-6 text-center">Our Values</h2>
            <p className="text-white/40 text-center max-w-xl mx-auto font-light">
              The fundamental beliefs that guide our decisions, define our culture, and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon={Shield}
              title="radical integrity"
              description="We do the right thing, even when no one is watching. Our commitments to security and privacy are non-negotiable."
              delay={0.1}
            />
            <ValueCard 
              icon={Cpu}
              title="technical excellence"
              description="We sweat the details. From code cleanliness to network latency, we pursue perfection in every byte we deploy."
              delay={0.2}
            />
            <ValueCard 
              icon={Globe}
              title="global perspective"
              description="Infrastructure should know no borders. We build for a global community, ensuring resilience across every continent."
              delay={0.3}
            />
            <ValueCard 
              icon={Users}
              title="human centric"
              description="Behind every server is a person. We prioritize the developer experience and the ultimate end-user satisfaction."
              delay={0.4}
            />
            <ValueCard 
              icon={Zap}
              title="velocity & rigor"
              description="We move fast, but we move with care. Speed is our advantage, but quality is our reputation."
              delay={0.5}
            />
            <ValueCard 
              icon={Lightbulb}
              title="ever-evolving"
              description="Learning is continuous. We embrace new technologies and challenge our own assumptions daily."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <blockquote className="text-4xl md:text-5xl font-serif font-normal leading-tight italic text-white/80 mb-12">
              "Technology is at its best when it connects people, and at its most powerful when it empowers them to reach further than ever before."
            </blockquote>
            <div className="h-px w-20 bg-white/20 mx-auto mb-8" />
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">The Cloud Nexus Standard</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
