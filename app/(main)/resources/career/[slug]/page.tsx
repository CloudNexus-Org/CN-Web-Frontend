"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Building2,
  Calendar,
  Loader2,
  Upload,
  X,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react"
import { getJobBySlug, submitApplication } from "@/lib/api/services/job.service"
import type {
  JobListing,
  ApplicationData,
} from "@/lib/api/services/job.service"
import { useTranslation } from "@/lib/i18n/context"

interface ApplyForm {
  fullName: string
  email: string
  phone: string
  currentCompany: string
  experience: string
  ctc: string
  resume: File | null
}

const emptyForm: ApplyForm = {
  fullName: "",
  email: "",
  phone: "",
  currentCompany: "",
  experience: "",
  ctc: "",
  resume: null,
}

function formatDate(dateStr: string) {
  if (!dateStr) return ""
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export default function JobDetailPage() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const [job, setJob] = useState<JobListing | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [copied, setCopied] = useState(false)

  const [showApply, setShowApply] = useState(false)
  const [applyForm, setApplyForm] = useState<ApplyForm>(emptyForm)
  const [applyLoading, setApplyLoading] = useState(false)
  const [applyError, setApplyError] = useState("")
  const [applySuccess, setApplySuccess] = useState(false)

  useEffect(() => {
    if (!slug) return
    getJobBySlug(slug)
      .then(setJob)
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [slug])

  const copyJobId = () => {
    if (!job) return
    navigator.clipboard.writeText(job.id)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleApplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApplyForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setApplyError(
          t("careerPost.fileSizeError", "File size must be less than 2MB.")
        )
        setApplyForm((prev) => ({ ...prev, resume: null }))
        e.target.value = ""
        return
      }
      setApplyError("")
      setApplyForm((prev) => ({ ...prev, resume: file }))
    }
  }

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!job) return
    setApplyLoading(true)
    setApplyError("")
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
      })
      setApplySuccess(true)
      setApplyForm(emptyForm)
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { message?: string } } }).response
              ?.data?.message
          : undefined
      setApplyError(
        msg ||
          t(
            "careerPost.submitError",
            "Failed to submit application. Please try again."
          )
      )
    } finally {
      setApplyLoading(false)
    }
  }

  const closeModal = () => {
    setShowApply(false)
    setApplyForm(emptyForm)
    setApplyError("")
    setApplySuccess(false)
  }

  const inputCls =
    "w-full rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-[#4EB3E8] focus:ring-1 focus:ring-[#4EB3E8]/20 transition-all duration-200 placeholder:text-black/30 dark:placeholder:text-white/25"

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
        <Loader2 className="h-7 w-7 animate-spin text-[#4EB3E8]" />
      </div>
    )
  }

  if (notFound || !job) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white text-black dark:bg-black dark:text-white">
        <Briefcase className="h-14 w-14 text-black/15 dark:text-white/15" />
        <h1 className="text-2xl font-bold">
          {t("careerPost.notFound", "Job not found")}
        </h1>
        <Link
          href="/resources/career"
          className="flex items-center gap-1.5 text-sm text-[#4EB3E8] hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />{" "}
          {t("careerPost.backToCareers", "Back to careers")}
        </Link>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back link */}
          <Link
            href="/resources/career"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-black/40 transition-colors hover:text-[#4EB3E8] dark:text-white/35"
          >
            <ArrowLeft className="h-4 w-4" />{" "}
            {t("careerPost.backToCareers", "Back to careers")}
          </Link>

          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-3 text-xs text-black/40 dark:text-white/35">
              <button
                onClick={copyJobId}
                className="inline-flex items-center gap-1.5 rounded-lg border border-black/[0.06] bg-black/[0.03] px-3 py-1.5 font-mono transition-colors hover:border-[#4EB3E8]/30 dark:border-white/[0.06] dark:bg-white/[0.04]"
              >
                {t("careerPost.jobIdLabel", "JOB ID:")}{" "}
                {job.id.slice(0, 10).toUpperCase()}
                {copied ? (
                  <Check className="h-3 w-3 text-emerald-500" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-black/40 dark:text-white/35">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(job.createdAt)}
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {job.title}
          </h1>

          {/* Badges */}
          <div className="mb-8 flex flex-wrap items-center gap-2.5">
            {job.experience && (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/15 bg-emerald-500/8 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Briefcase className="h-3.5 w-3.5" />
                {job.experience}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/15 bg-blue-500/8 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <Clock className="h-3.5 w-3.5" />
              {job.employmentType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-purple-500/15 bg-purple-500/8 px-3 py-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400">
              <Building2 className="h-3.5 w-3.5" />
              {job.department}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/15 bg-amber-500/8 px-3 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
          </div>

          {/* Apply CTA */}
          <div className="mb-10">
            <button
              onClick={() => setShowApply(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              {t("careerPost.applyForPosition", "Apply for this position")}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Job Description */}
          {job.description && job.description.length > 0 && (
            <div className="mb-10 rounded-2xl border border-black/[0.06] bg-[#fafafa] p-6 sm:p-8 dark:border-white/[0.06] dark:bg-white/[0.02]">
              <h2 className="mb-5 text-lg font-bold">
                {t("careerPost.jobDescription", "Job Description")}
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-black/70 dark:text-white/65">
                {job.description.map((block, i) => {
                  const lines = block.split(/(?:\.\s+|\n)/).filter(Boolean)
                  return (
                    <div key={i} className="space-y-3">
                      {lines.map((line, j) => {
                        const trimmed = line.trim()
                        if (!trimmed) return null
                        const isHeading =
                          /^(About|Key |Requirements|Preferred|What We|Job Opening|Job Description|Location|Company|Experience|Employment|Responsibilities|Qualifications|Skills|Benefits)/i.test(
                            trimmed
                          )
                        if (isHeading) {
                          const [label, ...rest] = trimmed.split(":")
                          return (
                            <div key={j} className="mt-4 first:mt-0">
                              <h4 className="mb-1 text-sm font-bold text-black dark:text-white">
                                {label.trim()}
                              </h4>
                              {rest.length > 0 && (
                                <p>{rest.join(":").trim()}</p>
                              )}
                            </div>
                          )
                        }
                        return (
                          <p key={j}>
                            {trimmed.endsWith(".") ? trimmed : `${trimmed}.`}
                          </p>
                        )
                      })}
                    </div>
                  )
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
                  className="rounded-2xl border border-black/[0.06] p-6 sm:p-8 dark:border-white/[0.06]"
                >
                  <h3 className="mb-4 text-base font-bold">
                    {section.heading}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-relaxed text-black/65 dark:text-white/60"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#4EB3E8]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom Apply CTA */}
          <div className="mt-12 border-t border-black/[0.06] pt-8 text-center dark:border-white/[0.06]">
            <h3 className="mb-2 text-xl font-bold">
              {t("careerPost.interestedInRole", "Interested in this role?")}
            </h3>
            <p className="mb-6 text-sm text-black/45 dark:text-white/40">
              {t(
                "careerPost.applyPrompt",
                "Apply now and our HR team will get back to you within 48 hours."
              )}
            </p>
            <button
              onClick={() => setShowApply(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              {t("careerPost.applyNow", "Apply Now")}
              <ArrowRight className="h-4 w-4" />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-black/[0.08] bg-white shadow-2xl dark:border-white/[0.08] dark:bg-[#0a0a0a]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-black/[0.06] p-6 dark:border-white/[0.06]">
                <div>
                  <h3 className="text-lg font-bold">
                    {t("careerPost.applyFor", "Apply for")} {job.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-black/40 dark:text-white/35">
                    {job.department} &middot; {job.location} &middot;{" "}
                    {job.employmentType}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="rounded-xl p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6">
                {applySuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
                      <CheckCircle2 className="h-7 w-7 text-green-500" />
                    </div>
                    <h4 className="mb-2 text-xl font-bold">
                      {t(
                        "careerPost.applicationSubmitted",
                        "Application Submitted!"
                      )}
                    </h4>
                    <p className="mx-auto mb-6 max-w-xs text-sm text-black/50 dark:text-white/45">
                      {t(
                        "careerPost.applicationReceived",
                        "We've received your application for"
                      )}{" "}
                      {job.title}.{" "}
                      {t(
                        "careerPost.hrReview",
                        "Our HR team will review and get back to you soon."
                      )}
                    </p>
                    <button
                      onClick={closeModal}
                      className="rounded-xl bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                    >
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
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        {applyError}
                      </motion.div>
                    )}

                    <form onSubmit={handleApplySubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-black/70 dark:text-white/60">
                            {t("careerPost.fullName", "Full Name")}{" "}
                            <span className="text-[#4EB3E8]">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={applyForm.fullName}
                            onChange={handleApplyChange}
                            required
                            placeholder={t(
                              "careerPost.fullNamePlaceholder",
                              "Your full name"
                            )}
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-black/70 dark:text-white/60">
                            {t("careerPost.email", "Email")}{" "}
                            <span className="text-[#4EB3E8]">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={applyForm.email}
                            onChange={handleApplyChange}
                            required
                            placeholder={t(
                              "careerPost.emailPlaceholder",
                              "you@email.com"
                            )}
                            className={inputCls}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-black/70 dark:text-white/60">
                            {t("careerPost.phone", "Phone")}{" "}
                            <span className="text-[#4EB3E8]">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={applyForm.phone}
                            onChange={handleApplyChange}
                            required
                            placeholder="+91 XXXXX XXXXX"
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-black/70 dark:text-white/60">
                            {t("careerPost.currentCompany", "Current Company")}
                          </label>
                          <input
                            type="text"
                            name="currentCompany"
                            value={applyForm.currentCompany}
                            onChange={handleApplyChange}
                            placeholder={t(
                              "careerPost.companyPlaceholder",
                              "Company name"
                            )}
                            className={inputCls}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-black/70 dark:text-white/60">
                            {t("careerPost.experience", "Experience")}
                          </label>
                          <input
                            type="text"
                            name="experience"
                            value={applyForm.experience}
                            onChange={handleApplyChange}
                            placeholder={t(
                              "careerPost.experiencePlaceholder",
                              "e.g. 3 years"
                            )}
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-black/70 dark:text-white/60">
                            {t("careerPost.currentCTC", "Current CTC")}
                          </label>
                          <input
                            type="text"
                            name="ctc"
                            value={applyForm.ctc}
                            onChange={handleApplyChange}
                            placeholder={t(
                              "careerPost.ctcPlaceholder",
                              "e.g. 8 LPA"
                            )}
                            className={inputCls}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-black/70 dark:text-white/60">
                          {t("careerPost.resume", "Resume")}{" "}
                          <span className="text-[#4EB3E8]">*</span>
                        </label>

                        <label
                          className={`${inputCls} flex cursor-pointer items-center gap-3`}
                        >
                          <Upload className="h-4 w-4 flex-shrink-0 text-black/30 dark:text-white/30" />

                          <span
                            className={`text-sm ${applyForm.resume ? "" : "text-black/30 dark:text-white/25"}`}
                          >
                            {applyForm.resume
                              ? applyForm.resume.name
                              : t(
                                  "careerPost.uploadResume",
                                  "Upload your resume (PDF, DOC)"
                                )}
                          </span>

                          <input
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            required
                          />
                        </label>

                        {!applyForm.resume && (
                          <p className="mt-1 text-xs text-red-500">
                            Resume is required
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={applyLoading}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-black/90 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-white/90"
                      >
                        {applyLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            {t("careerPost.submitting", "Submitting...")}
                          </>
                        ) : (
                          <>
                            {t(
                              "careerPost.submitApplication",
                              "Submit Application"
                            )}
                            <ArrowRight className="h-4 w-4" />
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
  )
}
