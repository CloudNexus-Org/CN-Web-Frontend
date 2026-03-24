"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const teams = [
  {
    name: "Leadership",
    description: "The visionary founders and strategic leads driving the Cloud Nexus mission.",
    members: [
      {
        name: "Kaustubh Singh",
        role: "Co-founder & CEO",
        image: "/team/kaustubh-singh.jpeg",
        bio: "Strategic leader and co-founder dedicated to architecting the next generation of cloud-native infrastructure. Kaustubh leads Cloud Nexus with a vision to simplify complex digital systems for businesses worldwide."
      },
      {
        name: "Yash Singh",
        role: "Co-founder & CTO",
        image: "/assets/images/yashsir.png",
        bio: "Yash is a co-founder and CTO who believes in pushing the boundaries of digital transformation. He oversees our technical roadmap, focusing on delivering cutting-edge solutions that solve real-world complexities."
      },
      {
        name: "Shoaib Akhtar",
        role: "Tech Head",
        image: "/team/shoaib.jpeg",
        bio: "A seasoned technology lead with a focus on delivering high-impact digital products. Shoaib oversees the technical execution at Cloud Nexus, ensuring every project meets our rigorous standards for excellence."
      },
      {
        name: "Aryan Patel",
        role: "CMO",
        image: "/assets/images/ariyansir.jpeg",
        bio: "A strategic marketing leader focused on building the Cloud Nexus brand and driving global growth. Aryan excels at translating complex technical value propositions into compelling stories for our users."
      }
    ]
  },
  {
    name: "Team Beyonders",
    description: "Our core development unit focused on pushing technical limits and building innovative products.",
    members: [
      {
        name: "Saurabh Patle",
        role: "Development Lead",
        image: "/team/saurabh-patle.jpeg",
        bio: "A technical leader with a deep commitment to delivering innovative and high-quality software solutions. Saurabh leads the Beyonders development team, focusing on technical excellence and mentorship."
      }
    ]
  },
  {
    name: "Team Ariba (DevOps)",
    description: "Our specialized DevOps unit dedicated to cloud automation and infrastructure resilience.",
    members: [
      {
        name: "Gaurav Tiwari",
        role: "Team Lead",
        image: "/team/gaurav-tiwari.jpeg",
        bio: "A DevOps visionary leading Team Ariba at Cloud Nexus. Gaurav specializes in building resilient automation pipelines and optimizing cloud infrastructure for maximum performance and stability."
      }
    ]
  },
  {
    name: "Team Eternals",
    description: "Dedicated to data architecture, real-time analytics, and futuristic data solutions.",
    members: [
      {
        name: "Arhan Mansoori",
        role: "Data Team Lead",
        image: "/team/arhan-mansoori.jpeg",
        bio: "Data architect focused on building powerful analytics pipelines and real-time data processing systems for the Eternals unit, turning big data into actionable insights."
      }
    ]
  },
  {
    name: "Team Sentinels",
    description: "Our security-first data unit, ensuring everything we build is robust and private.",
    members: [
      {
        name: "Harshit Vanya",
        role: "Data Team Lead",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Placeholder
        bio: "Security-focused data lead who ensures our Sentinels infrastructure is not just fast, but also impenetrable and privacy-first."
      }
    ]
  }
];

const values = [
  {
    title: "Developer First",
    description: "We build tools for developers, by developers. Every decision is made with the developer experience in mind."
  },
  {
    title: "Simplicity",
    description: "Complex infrastructure should be simple to manage. We believe in removing unnecessary complexity."
  },
  {
    title: "Reliability",
    description: "Your infrastructure is critical. We're committed to 99.99% uptime and fast, responsive support."
  },
  {
    title: "Transparency",
    description: "No hidden fees, no surprises. We're open about our pricing, our roadmap, and our decisions."
  }
];

const milestones = [
  { year: "2022", title: "Cloud Nexus Founded", description: "Started with a simple idea: make infrastructure management accessible to everyone." },
  { year: "2023", title: "Series A Funding", description: "Raised $15M to expand our platform and grow the team." },
  { year: "2024", title: "Reached 100K Users", description: "Developers around the world started trusting Cloud Nexus with their infrastructure." },
  { year: "2025", title: "Cloud Nexus 2.0", description: "Launched our biggest update with 15 new integrations and 3x performance improvements." },
  { year: "2026", title: "Global Expansion", description: "Opening offices in Europe and Asia to better serve our global community." }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background nexus-pattern">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] brand-glow -z-10" />
        
        {/* Background Video */}
        <div className="absolute inset-0 -z-20 opacity-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://resend.com/static/cube.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-9xl font-serif font-normal tracking-tight mb-6 premium-gradient-text text-glow"
          >
            About Cloud Nexus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
          >
            We're on a mission to make infrastructure management simple, reliable, and accessible to developers everywhere.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border/50" />
              <h2 className="text-sm font-mono tracking-widest uppercase text-accent/60">Our Mission</h2>
              <div className="h-px flex-1 bg-border/50" />
            </div>
            <p className="text-3xl md:text-4xl font-serif font-normal leading-snug mb-8 text-white">
              Infrastructure management shouldn't require a PhD. We believe in building powerful tools that let you focus on what matters.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cloud Nexus was born from this belief. We've taken years of experience building and scaling infrastructure 
              at some of the world's largest companies and distilled it into a platform that just works.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 border-y border-border/50 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-16">
              Our Values
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <FadeInSection key={value.title} delay={index * 0.1}>
                <div className="h-full border-l border-border/50 pl-6 py-2">
                  <h3 className="text-xl font-normal mb-3 text-white">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-16">
              Our Journey
            </h2>
          </FadeInSection>
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <FadeInSection key={milestone.year} delay={index * 0.1}>
                <div className="group flex gap-8 items-start">
                  <div className="flex-shrink-0 w-24">
                    <span className="text-2xl font-serif text-accent/80">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-normal mb-2 text-white group-hover:text-accent transition-colors">{milestone.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-24 border-t border-border/50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-serif font-normal mb-6 text-white text-glow">
                Our People
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                A diverse team of engineers and visionaries united by a passion for technical excellence.
              </p>
            </div>
          </FadeInSection>

          {teams.map((team, teamIndex) => (
            <div key={team.name} className="mb-24 last:mb-0">
              <FadeInSection delay={0.1}>
                <div className="mb-10 max-w-2xl mx-auto text-center">
                  <h3 className="text-4xl font-serif font-normal mb-4 text-white">{team.name}</h3>
                  <p className="text-lg text-muted-foreground border-t border-accent/30 pt-4 px-6">{team.description}</p>
                </div>
              </FadeInSection>

              <div className="relative">
                {/* Subtle Background Glow behind members */}
                <div className="absolute inset-0 bg-accent/5 blur-[120px] -z-10" />
                
                <div className="flex flex-col items-center gap-12">
                  {team.members.map((member, index) => (
                    <FadeInSection key={member.name} delay={index * 0.05}>
                      <div className="group relative w-full max-w-4xl">
                        <div className="brand-glass rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(255,255,255,0.05)] border-white/[0.05] group-hover:border-white/10 flex flex-col md:flex-row items-center">
                          <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-square overflow-hidden">
                            <motion.img
                              src={member.image}
                              alt={member.name}
                              initial={{ filter: "grayscale(100%) brightness(0.7)", scale: 1 }}
                              whileHover={{ filter: "grayscale(0%) brightness(1)", scale: 1.05 }}
                              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-8 md:p-12 flex-1 text-center md:text-left">
                            <h4 className="text-3xl md:text-4xl font-serif font-normal mb-2 text-white group-hover:text-accent transition-colors duration-300">
                              {member.name}
                            </h4>
                            <p className="text-xs font-mono tracking-[0.3em] uppercase text-accent/70 mb-6">{member.role}</p>
                            <p className="text-lg text-muted-foreground leading-relaxed font-light line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                              {member.bio}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-border/50">
        <div className="absolute inset-0 bg-white/[0.01] -z-10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeInSection>
            <h2 className="text-5xl md:text-7xl font-serif font-normal mb-8 premium-gradient-text text-glow">
              Join the nexus
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              We're always looking for talented people who share our vision for a simpler, faster cloud.
            </p>
            <Link
              href="/career"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              View Open Positions
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

// Reusable Fade In Section Component
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
