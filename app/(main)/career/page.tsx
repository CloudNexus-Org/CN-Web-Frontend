"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { JobListItem } from "@/components/career/JobListItem";
import { FilterBar } from "@/components/career/FilterBar";
import { Job } from "@/services/jobService";
import { fetchJobs } from "@/store/slices/jobSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";

const testimonials = [
  {
    quote: "Cloud Nexus has completely transformed how we manage our multi-cloud environment. Highly recommended!",
    name: "John Doe",
    title: "CTO, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    quote: "The infrastructure performance we've seen since switching is incredible. A game changer for us.",
    name: "Sarah Smith",
    title: "VP of Engineering, CloudScale",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "Incredible support and top-tier technical craft. They truly care about their customers.",
    name: "Michael Brown",
    title: "Senior Architect, DataBridge",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    quote: "Elegant solutions to complex problems. Cloud Nexus is the best in the business.",
    name: "Emily Davis",
    title: "Lead Developer, InnovateNow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

import { RootState } from "@/store/store";

export default function CareersPage() {
  const dispatch = useAppDispatch();
  const { jobs, loading } = useAppSelector((state: RootState) => state.jobs);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const jobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);


  // Derive filter options from data
  const departments = useMemo(() => ["All", ...Array.from(new Set(jobs.map((j: Job) => j.category)))], [jobs]);
  const locations = useMemo(() => ["All", ...Array.from(new Set(jobs.map((j: Job) => j.location)))], [jobs]);
  const types = useMemo(() => ["All", ...Array.from(new Set(jobs.map((j: Job) => j.employmentType)))], [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job: Job) => {
      const deptMatch = selectedDepartment === "All" || job.category === selectedDepartment;
      const locMatch = selectedLocation === "All" || job.location === selectedLocation;
      const typeMatch = selectedType === "All" || job.employmentType === selectedType;
      return deptMatch && locMatch && typeMatch;
    });
  }, [jobs, selectedDepartment, selectedLocation, selectedType]);


  const scrollToJobs = () => {
    jobsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background nexus-pattern">
      {/* Header/Nav */}
      <header className="border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl uppercase tracking-tighter">Cloud Nexus</div>
            <nav className="hidden sm:flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Product
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <Link href="/career" className="text-sm text-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] brand-glow -z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-7xl md:text-9xl font-serif font-normal mb-8 tracking-tight premium-gradient-text text-glow">
              Join Cloud Nexus
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed font-light">
              Help us build the next generation of cloud infrastructure. We're looking for talented humans who care about technical craft.
            </p>
            <motion.button
              onClick={scrollToJobs}
              className="px-10 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              See open positions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About & Philosophy Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection>
              <Link href="/about" className="block outline-none">
                <motion.div
                   className="group border border-border/50 rounded-xl p-8 hover:border-white/20 transition-all bg-background/50 cursor-pointer overflow-hidden relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-6 text-left relative z-10">
                    <h3 className="text-2xl font-normal mb-2 group-hover:text-white transition-colors">About</h3>
                    <p className="text-muted-foreground group-hover:text-white/60 transition-colors">What we believe</p>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted relative">
                    <Image 
                      src="/assets/images/about-premium.png" 
                      alt="About Cloud Nexus" 
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-[0.22, 1, 0.36, 1]" 
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Link href="/company/philosophy" className="block outline-none">
                <motion.div
                  className="group border border-border/50 rounded-xl p-8 hover:border-white/20 transition-all bg-background/50 cursor-pointer overflow-hidden relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-6 text-left relative z-10">
                    <h3 className="text-2xl font-normal mb-2 group-hover:text-white transition-colors">Philosophy</h3>
                    <p className="text-muted-foreground group-hover:text-white/60 transition-colors">How we work</p>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted relative">
                    <Image 
                      src="/assets/images/philosophy-premium.png" 
                      alt="Our Philosophy" 
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-[0.22, 1, 0.36, 1]" 
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits & Perks Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4 tracking-tight">Benefits & Perks</h2>
              <p className="text-muted-foreground text-lg font-light">
                We want to empower people to do the best work of their lives.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard
              title="Home Office Allowance"
              description="Spend $2,000 to get your home setup primed for optimal flow."
              badge="Global"
              delay={0.1}
            />
            <BenefitCard
              title="Unlimited Sick Days"
              description="Take the time you need to rest, recover, and get back on track."
              badge="Global"
              delay={0.15}
            />
            <BenefitCard
              title="Annual In-Person Retreat"
              description="Travel and meet up with the entire team around the world."
              badge="Global"
              delay={0.2}
            />
            <BenefitCard
              title="12 Week Family Leave"
              description="Bond with your new biological or adopted child."
              badge="Global"
              delay={0.25}
            />
            <BenefitCard
              title="20 PTO Days per Year"
              description="Take time off to recharge and come back refreshed."
              badge="Global"
              delay={0.3}
            />
            <BenefitCard
              title="10 Holidays per Year"
              description="Choose 10 holidays in the US or swap in local ones."
              badge="Global"
              delay={0.35}
            />
            <BenefitCard
              title="401K"
              description="401K account provided to invest in your future (no matching)."
              badge="US-only"
              delay={0.4}
            />
            <BenefitCard
              title="Health, Dental, Vision"
              description="100% Employee, 90% Family principle covered by Cloud Nexus."
              badge="US-only"
              delay={0.45}
            />
            <BenefitCard
              title="Life Insurance"
              description="Care for your family and loved ones, even after a life crisis."
              badge="US-only"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section ref={jobsRef} className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-normal mb-4">Open positions</h2>
              <p className="text-muted-foreground font-mono uppercase tracking-[0.25em] text-xs">
                {filteredJobs.length} {filteredJobs.length === 1 ? "opening" : "openings"} AVAILABLE
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <FilterBar
              selectedDepartment={selectedDepartment}
              selectedLocation={selectedLocation}
              selectedType={selectedType}
              departments={departments}
              locations={locations}
              types={types}
              onDepartmentChange={setSelectedDepartment}
              onLocationChange={setSelectedLocation}
              onTypeChange={setSelectedType}
            />
          </AnimatedSection>

          <div className="space-y-4">
            {loading ? (
              <div className="py-24 flex flex-col items-center justify-center text-muted-foreground">
                <Loader2 className="w-8 h-8 animate-spin mb-4" />
                <p className="font-mono text-xs uppercase tracking-widest">Scanning infrastructure...</p>
              </div>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <AnimatedSection key={job.id} delay={0.15 + index * 0.05}>
                  <JobListItem job={job} />
                </AnimatedSection>
              ))
            ) : (
              <AnimatedSection delay={0.2}>
                <div className="py-24 brand-glass rounded-2xl text-center border-dashed border-white/10">
                  <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                    No positions match your current filters.
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 tracking-tight">
                What people are saying
              </h2>
              <p className="text-muted-foreground text-xl font-light">
                Hear from our customers and partners
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div className="flex overflow-hidden group">
              <motion.div 
                className="flex gap-6 animate-marquee flex-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCardStatic
                    key={i}
                    quote={t.quote}
                    name={t.name}
                    title={t.title}
                    image={t.image}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-20 bg-background/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <div className="font-bold text-2xl uppercase tracking-tighter opacity-80 mb-4">Cloud Nexus</div>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Building the next generation of cloud infrastructure for teams that care about precision.
              </p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors duration-300">
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/[0.05] text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/50">
            © 2026 Cloud Nexus — ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}


// Reusable scroll animation component
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Reusable benefit card component
function BenefitCard({ title, description, badge, delay }: { title: string; description: string; badge: string; delay: number }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="border border-border/50 rounded-lg p-6 hover:border-border transition-colors">
        <div className="mb-4">
          <h3 className="text-lg font-normal mb-2.5">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <div>
          <span
            className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
              badge === "Global"
                ? "bg-green-500/10 text-green-400"
                : "bg-blue-500/10 text-blue-400"
            }`}
          >
            {badge}
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Reusable static testimonial card component
function TestimonialCardStatic({ quote, name, title, image }: { quote: string; name: string; title: string; image: string }) {
  return (
    <div className="border border-border/50 rounded-lg p-6 hover:border-border transition-colors w-80 flex-shrink-0 snap-center">
      <div className="mb-4 h-32 overflow-hidden">
        <p className="text-sm text-muted-foreground leading-relaxed">{quote}</p>
      </div>
      <div className="flex items-center">
        <Image src={image} alt={name} width={40} height={40} className="w-10 h-10 rounded-full mr-3 object-cover" />
        <div>
          <h3 className="text-sm font-medium">{name}</h3>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
}
