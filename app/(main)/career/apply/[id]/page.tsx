"use client";

import { useState, useRef, use, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, Check, Loader2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { getJobById, Job } from "@/services/jobService";
import { uploadFileToSupabase } from "@/lib/uploadService";
import { applyForJob } from "@/services/applicantService";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ApplicationPage({ params }: PageProps) {
  const { id } = use(params);
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
// ... (formData remains same)
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
// ...
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-normal mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The position you're looking for doesn't exist.
          </p>
          <Link
            href="/career"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let resumeUrl = "";
      if (formData.resume) {
        const uploadedUrl = await uploadFileToSupabase(formData.resume, "blog_images");
        if (uploadedUrl) {
          resumeUrl = uploadedUrl;
        }
      }

      // Split fullName into firstName and lastName
      const nameParts = formData.fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || "Applicant";
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Candidate";

      await applyForJob({
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        linkedinProfile: formData.linkedin,
        portfolioUrl: formData.portfolio,
        coverLetter: formData.coverLetter,
        resumeUrl,
        jobId: parseInt(id)
      });

      setIsSubmitted(true);
      // Redirect after 2.5 seconds
      setTimeout(() => {
        router.push("/career");
      }, 2500);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/50">
          <div className="max-w-2xl mx-auto px-6 py-5">
             <div className="font-bold text-lg uppercase tracking-tighter">Cloud Nexus</div>
          </div>
        </header>

        {/* Success Message */}
        <main className="max-w-2xl mx-auto px-6 py-24">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-normal mb-4 tracking-tight">
              Application submitted
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Thank you for applying to the {job.title} position. We'll review your application and get back to you soon.
            </p>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-2xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
             <div className="font-bold text-lg uppercase tracking-tighter">Cloud Nexus</div>
            <Link
              href={`/career/job/${id}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-normal mb-3 tracking-tight">
              Apply for {job.title}
            </h1>
            <p className="text-muted-foreground">
              {job.category} · {job.location} · {job.employmentType}
            </p>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <AnimatedSection>
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all text-base"
                  placeholder="Jane Smith"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all text-base"
                  placeholder="jane@example.com"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all text-base"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-2">
                <label htmlFor="linkedin" className="block text-sm font-medium">
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all text-base"
                  placeholder="https://linkedin.com/in/janesmith"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-2">
                <label htmlFor="portfolio" className="block text-sm font-medium">
                  Portfolio / Website
                </label>
                <input
                  type="url"
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all text-base"
                  placeholder="https://janesmith.com"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="space-y-2">
                <label htmlFor="resume" className="block text-sm font-medium">
                  Resume / CV
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    required
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-secondary/50 border border-border rounded-md cursor-pointer hover:border-foreground/30 transition-all text-base"
                  >
                    <Upload className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {formData.resume ? formData.resume.name : "Choose file"}
                    </span>
                  </label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Accepted formats: PDF, DOC, DOCX (max 10MB)
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="space-y-2">
                <label htmlFor="coverLetter" className="block text-sm font-medium">
                  Cover letter
                </label>
                <textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  rows={8}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none text-base"
                  placeholder="Tell us why you're a great fit for this role..."
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-foreground text-background px-6 py-3 rounded-md text-sm font-medium hover:bg-foreground/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit application"}
                </button>
              </div>
            </AnimatedSection>
          </form>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-24">
        <div className="max-w-2xl mx-auto px-6 py-12">
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
