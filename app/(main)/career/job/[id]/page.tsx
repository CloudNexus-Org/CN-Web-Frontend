"use client";

import { use, useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { getJobById, Job } from "@/services/jobService";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function JobDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobById(Number(id));
        setJob(data);
      } catch (error) {
        console.error("Failed to fetch job:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The position you're looking for doesn't exist.
          </p>
          <Link
            href="/career"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="border-b border-border/50">
        <div className="max-w-3xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
             <div className="font-bold text-lg uppercase tracking-tighter">Cloud Nexus</div>
            <Link
              href="/career"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Job Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight leading-tight">{job.title}</h1>
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-10">
              <span className="text-sm">{job.category}</span>
              <span className="text-sm">·</span>
              <span className="text-sm">{job.location}</span>
              <span className="text-sm">·</span>
              <span className="text-sm">{job.employmentType}</span>
            </div>
            <Link href={`/career/apply/${id}`}>
              <motion.button
                className="bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-medium hover:bg-foreground/90 transition-all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply for this position
              </motion.button>
            </Link>
          </div>

          {/* Job Details */}
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <AnimatedSection>
              <section>
                <h2 className="text-xl font-normal text-foreground mb-4">About the role</h2>
                <p className="text-base">
                  {job.description}
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-xl font-normal text-foreground mb-4">What you'll do</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-3 text-base">
                      <span className="text-foreground/40 mt-1.5 text-xs">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section>
                <h2 className="text-xl font-normal text-foreground mb-4">What we're looking for</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex gap-3 text-base">
                      <span className="text-foreground/40 mt-1.5 text-xs">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <section className="pt-6">
                <div className="border border-border/50 rounded-lg p-8">
                  <h3 className="text-lg font-normal text-foreground mb-3">Interested?</h3>
                  <p className="text-muted-foreground mb-6 text-base">
                    We'd love to hear from you. Apply now and we'll be in touch soon.
                  </p>
                  <Link href={`/career/apply/${id}`}>
                    <motion.button
                      className="bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-medium hover:bg-foreground/90 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply now
                    </motion.button>
                  </Link>
                </div>
              </section>
            </AnimatedSection>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-24">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
             <div className="font-bold text-lg uppercase tracking-tighter opacity-50">Cloud Nexus</div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 text-sm text-muted-foreground/70">
            © 2026 Cloud Nexus
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
