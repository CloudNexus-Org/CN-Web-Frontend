"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, MapPin, Clock, Briefcase, Building2,
  Calendar, Loader2, Upload, X, CheckCircle2, AlertCircle, Copy, Check,
} from "lucide-react";
import { getJobBySlug, submitApplication } from "@/lib/api/services/job.service";
import type { JobListing, ApplicationData } from "@/lib/api/services/job.service";
import { useTranslation } from "@/lib/i18n/context";

interface ApplyForm {
  fullName: string;
  email: string;
  phone: string;
  currentCompany: string;
  experience: string;
  ctc: string;
  resume: File | null;
}

const emptyForm: ApplyForm = {
  fullName: "",
  email: "",
  phone: "",
  currentCompany: "",
  experience: "",
  ctc: "",
  resume: null,
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { weekday: "long", day: "2-digit", month: "short", year: "numeric" });
}

export default function JobDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const [job, setJob] = useState<JobListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);

  const [showApply, setShowApply] = useState(false);
  const [applyForm, setApplyForm] = useState<ApplyForm>(emptyForm);
  const [applyLoading, setApplyLoading] = useState(false);
  const [applyError, setApplyError] = useState("");
  const [applySuccess, setApplySuccess] = useState(false);

  useEffect(() => {
    if (!slug) return;
    getJobBySlug(slug)
      .then(setJob)
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  const copyJobId = () => {
    if (!job) return;
    navigator.clipboard.writeText(job.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApplyForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setApplyError(t("careerPost.fileSizeError", "File size must be less than 2MB."));
        setApplyForm((prev) => ({ ...prev, resume: null }));
        e.target.value = "";
        return;
      }
      setApplyError("");
      setApplyForm((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job) return;
    setApplyLoading(true);
    setApplyError("");
    try {
      await submitApplication({
        jobTitle: job.title,
        jobSlug: job.slug,
        fullName: applyForm.fullName,
        email: applyForm.email,
        phone: applyForm.phone,
        currentCompany: applyForm.currentCompany || undefined,
        experience: applyForm.experience || undefined,
        ctc: applyForm.ctc || undefined,
        resume: applyForm.resume || undefined,
      });
      setApplySuccess(true);
      setApplyForm(emptyForm);
    } catch (err: unknown) {
      const msg = err && typeof err === "object" && "response" in err
        ? (err as { response?: { data?: { message?: string } } }).response?.data?.message
        : undefined;
      setApplyError(msg || t("careerPost.submitError", "Failed to submit application. Please try again."));
    } finally {
      setApplyLoading(false);
    }
  };

  const closeModal = () => {
    setShowApply(false);
    setApplyForm(emptyForm);
    setApplyError("");
    setApplySuccess(false);
  };

  const inputCls = "w-full rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-[#4EB3E8] focus:ring-1 focus:ring-[#4EB3E8]/20 transition-all duration-200 placeholder:text-black/30 dark:placeholder:text-white/25";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <Loader2 className="w-7 h-7 animate-spin text-[#4EB3E8]" />
      </div>
    );
  }

  if (notFound || !job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white gap-4">
        <Briefcase className="w-14 h-14 text-black/15 dark:text-white/15" />
        <h1 className="text-2xl font-bold">{t("careerPost.notFound", "Job not found")}</h1>
        <Link href="/resources/career" className="text-sm text-[#4EB3E8] hover:underline flex items-center gap-1.5">
          <ArrowLeft className="w-4 h-4" /> {t("careerPost.backToCareers", "Back to careers")}
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Back link */}
          <Link href="/resources/career" className="inline-flex items-center gap-1.5 text-sm text-black/40 dark:text-white/35 hover:text-[#4EB3E8] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> {t("careerPost.backToCareers", "Back to careers")}
          </Link>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3 text-xs text-black/40 dark:text-white/35">
              <button onClick={copyJobId} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/30 transition-colors font-mono">
                {t("careerPost.jobIdLabel", "JOB ID:")} {job.id.slice(0, 10).toUpperCase()}
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-black/40 dark:text-white/35">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(job.createdAt)}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{job.title}</h1>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            {job.experience && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/8 border border-emerald-500/15 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Briefcase className="w-3.5 h-3.5" />
                {job.experience}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/8 border border-blue-500/15 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <Clock className="w-3.5 h-3.5" />
              {job.employmentType}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/8 border border-purple-500/15 text-xs font-semibold text-purple-600 dark:text-purple-400">
              <Building2 className="w-3.5 h-3.5" />
              {job.department}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/8 border border-amber-500/15 text-xs font-semibold text-amber-600 dark:text-amber-400">
              <MapPin className="w-3.5 h-3.5" />
              {job.location}
            </span>
          </div>

          {/* Apply CTA */}
          <div className="mb-10">
            <button
              onClick={() => setShowApply(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-lg transition-all duration-300"
            >
              {t("careerPost.applyForPosition", "Apply for this position")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Job Description */}
          {job.description && job.description.length > 0 && (
            <div className="mb-10 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.02] p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-5">{t("careerPost.jobDescription", "Job Description")}</h2>
              <div className="space-y-4 text-sm text-black/70 dark:text-white/65 leading-relaxed">
                {job.description.map((block, i) => {
                  const lines = block.split(/(?:\.\s+|\n)/).filter(Boolean);
                  return (
                    <div key={i} className="space-y-3">
                      {lines.map((line, j) => {
                        const trimmed = line.trim();
                        if (!trimmed) return null;
                        const isHeading = /^(About|Key |Requirements|Preferred|What We|Job Opening|Job Description|Location|Company|Experience|Employment|Responsibilities|Qualifications|Skills|Benefits)/i.test(trimmed);
                        if (isHeading) {
                          const [label, ...rest] = trimmed.split(":");
                          return (
                            <div key={j} className="mt-4 first:mt-0">
                              <h4 className="text-sm font-bold text-black dark:text-white mb-1">{label.trim()}</h4>
                              {rest.length > 0 && <p>{rest.join(":").trim()}</p>}
                            </div>
                          );
                        }
                        return <p key={j}>{trimmed.endsWith(".") ? trimmed : `${trimmed}.`}</p>;
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Profile Sections */}
          {job.profileSections && job.profileSections.length > 0 && (
            <div className="space-y-8">
              {job.profileSections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] p-6 sm:p-8"
                >
                  <h3 className="text-base font-bold mb-4">{section.heading}</h3>
                  <ul className="space-y-2.5">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-black/65 dark:text-white/60 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#4EB3E8] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom Apply CTA */}
          <div className="mt-12 pt-8 border-t border-black/[0.06] dark:border-white/[0.06] text-center">
            <h3 className="text-xl font-bold mb-2">{t("careerPost.interestedInRole", "Interested in this role?")}</h3>
            <p className="text-sm text-black/45 dark:text-white/40 mb-6">{t("careerPost.applyPrompt", "Apply now and our HR team will get back to you within 48 hours.")}</p>
            <button
              onClick={() => setShowApply(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-lg transition-all duration-300"
            >
              {t("careerPost.applyNow", "Apply Now")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Apply Modal */}
      <AnimatePresence>
        {showApply && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0a0a0a] border border-black/[0.08] dark:border-white/[0.08] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">{t("careerPost.applyFor", "Apply for")} {job.title}</h3>
                  <p className="text-xs text-black/40 dark:text-white/35 mt-0.5">
                    {job.department} &middot; {job.location} &middot; {job.employmentType}
                  </p>
                </div>
                <button onClick={closeModal} className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {applySuccess ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                      <CheckCircle2 className="w-7 h-7 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{t("careerPost.applicationSubmitted", "Application Submitted!")}</h4>
                    <p className="text-sm text-black/50 dark:text-white/45 mb-6 max-w-xs mx-auto">
                      {t("careerPost.applicationReceived", "We've received your application for")} {job.title}. {t("careerPost.hrReview", "Our HR team will review and get back to you soon.")}
                    </p>
                    <button onClick={closeModal} className="px-6 py-2.5 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-semibold shadow-lg transition-colors">
                      {t("careerPost.close", "Close")}
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {applyError && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-5 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {applyError}
                      </motion.div>
                    )}

                    <form onSubmit={handleApplySubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                            {t("careerPost.fullName", "Full Name")} <span className="text-[#4EB3E8]">*</span>
                          </label>
                          <input type="text" name="fullName" value={applyForm.fullName} onChange={handleApplyChange} required placeholder={t("careerPost.fullNamePlaceholder", "Your full name")} className={inputCls} />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                            {t("careerPost.email", "Email")} <span className="text-[#4EB3E8]">*</span>
                          </label>
                          <input type="email" name="email" value={applyForm.email} onChange={handleApplyChange} required placeholder={t("careerPost.emailPlaceholder", "you@email.com")} className={inputCls} />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                            {t("careerPost.phone", "Phone")} <span className="text-[#4EB3E8]">*</span>
                          </label>
                          <input type="tel" name="phone" value={applyForm.phone} onChange={handleApplyChange} required placeholder="+91 XXXXX XXXXX" className={inputCls} />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">{t("careerPost.currentCompany", "Current Company")}</label>
                          <input type="text" name="currentCompany" value={applyForm.currentCompany} onChange={handleApplyChange} placeholder={t("careerPost.companyPlaceholder", "Company name")} className={inputCls} />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">{t("careerPost.experience", "Experience")}</label>
                          <input type="text" name="experience" value={applyForm.experience} onChange={handleApplyChange} placeholder={t("careerPost.experiencePlaceholder", "e.g. 3 years")} className={inputCls} />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">{t("careerPost.currentCTC", "Current CTC")}</label>
                          <input type="text" name="ctc" value={applyForm.ctc} onChange={handleApplyChange} placeholder={t("careerPost.ctcPlaceholder", "e.g. 8 LPA")} className={inputCls} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">{t("careerPost.resume", "Resume")}</label>
                        <label className={`${inputCls} flex items-center gap-3 cursor-pointer`}>
                          <Upload className="w-4 h-4 text-black/30 dark:text-white/30 flex-shrink-0" />
                          <span className={`text-sm ${applyForm.resume ? "" : "text-black/30 dark:text-white/25"}`}>
                            {applyForm.resume ? applyForm.resume.name : t("careerPost.uploadResume", "Upload your resume (PDF, DOC)")}
                          </span>
                          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={applyLoading}
                        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-semibold shadow-lg transition-all duration-300 disabled:opacity-60"
                      >
                        {applyLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            {t("careerPost.submitting", "Submitting...")}
                          </>
                        ) : (
                          <>
                            {t("careerPost.submitApplication", "Submit Application")}
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
