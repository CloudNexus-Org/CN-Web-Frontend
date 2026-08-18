"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Clock, ArrowRight, Briefcase, Search,
  Loader2, CheckCircle2, AlertCircle,
  Building2, Calendar, Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getJobListings } from "@/lib/api/services/job.service";
import type { JobListing } from "@/lib/api/services/job.service";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
}

export default function CareerPage() {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("");

  const stats = useTranslatedData([
    { value: "200+", label: "Team Members" },
    { value: "100+", label: "Projects Delivered" },
    { value: "4.8", label: "Glassdoor Rating", icon: Star },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getJobListings();
        setJobs(data);
      } catch {
        setError(t("career.error", "Unable to load job listings."));
      } finally {
        setLoading(false);
      }
    })();
  }, [t]);

  const departments = [t("career.filter.all", "All"), ...Array.from(new Set(jobs.map((j) => j.department)))];

  const filteredJobs = jobs.filter((job) => {
    const matchSearch = !search || job.title.toLowerCase().includes(search.toLowerCase()) || job.department.toLowerCase().includes(search.toLowerCase());
    const allLabel = t("career.filter.all", "All");
    const matchDept = !selectedDept || selectedDept === allLabel || job.department === selectedDept;
    return matchSearch && matchDept;
  });

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/3 w-[500px] h-[500px] rounded-full bg-[#4EB3E8]/[0.04] blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/[0.03] blur-[100px]" />
          <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-emerald-500/[0.02] blur-[80px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                {t("career.hero.title1", "Ready to do")}{" "}
                <span className="text-[#4EB3E8]">{t("career.hero.title2", "the best work")}</span>{" "}
                <span className="text-[#4EB3E8]">{t("career.hero.title3", "of your life")}</span>{" "}
                <span>:)</span>
              </h1>
              <p className="mt-5 text-base text-black/50 dark:text-white/45 max-w-lg leading-relaxed">
                {t("career.hero.description", "Join a team of passionate engineers, designers, and innovators building cutting-edge technology solutions for global clients.")}
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-2xl font-bold text-[#4EB3E8]">{stat.value}</span>
                      {stat.icon && <stat.icon className="w-4 h-4 text-amber-400 fill-amber-400" />}
                    </div>
                    <span className="text-xs text-black/40 dark:text-white/35">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-black/[0.06] dark:border-white/[0.06] shadow-2xl shadow-[#4EB3E8]/[0.08]">
                  <Image
                    src="/assets/images/career-hero.jpg"
                    alt={t("career.hero.imageAlt", "Team collaboration at Cloud Nexus")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0vw, 450px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      {["React", "Node.js", "AWS", "AI/ML"].map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-semibold text-white border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Floating accents */}
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Briefcase className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="border-y border-black/[0.05] dark:border-white/[0.05] bg-[#fafafa] dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-black/30 dark:text-white/30" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("career.search.placeholder", "Search by job role")}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-sm font-medium focus:outline-none focus:border-[#4EB3E8]/40 focus:ring-2 focus:ring-[#4EB3E8]/10 transition-all duration-300"
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider flex-shrink-0">
              <span>{t("career.search.active", "Active")}</span>
              <span className="text-lg font-bold text-black dark:text-white">{filteredJobs.length}</span>
              <span>{filteredJobs.length === 1 ? t("career.search.role", "Job Role") : t("career.search.roles", "Job Roles")}</span>
            </div>
          </div>

          {departments.length > 2 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                    selectedDept === dept
                      ? "border-[#4EB3E8] bg-[#4EB3E8]/10 text-[#4EB3E8]"
                      : "border-black/[0.06] dark:border-white/[0.06] text-black/50 dark:text-white/40 hover:border-[#4EB3E8]/30 hover:text-[#4EB3E8]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Job Listings - 2 Column Grid */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#4EB3E8]" />
          </div>
        ) : error && jobs.length === 0 ? (
          <div className="text-center py-20">
            <AlertCircle className="w-12 h-12 mx-auto text-black/15 dark:text-white/15 mb-4" />
            <p className="text-sm text-black/40 dark:text-white/35">{t("career.error", error)}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link href={`/resources/career/${job.slug}`} className="block">
                  <div className="group relative rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#4EB3E8]/25 hover:shadow-xl hover:shadow-[#4EB3E8]/[0.04] hover:-translate-y-1">
                    {/* Top row - Dept & Date */}
                    <div className="flex items-center justify-between mb-4 text-[11px] text-black/35 dark:text-white/30">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3 h-3" />
                        <span className="font-mono">{job.department}</span>
                      </div>
                      {job.createdAt && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(job.createdAt)}</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-1 group-hover:text-[#4EB3E8] transition-colors leading-snug">
                      {job.title}
                    </h3>

                    {(job.tagline || (job.description && job.description.length > 0)) && (
                      <p className="text-xs text-black/45 dark:text-white/40 mb-4 line-clamp-2 leading-relaxed">
                        {job.tagline || job.description.slice(0, 2).join(". ")}
                      </p>
                    )}

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      {job.experience && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/8 border border-emerald-500/15 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          <Briefcase className="w-3 h-3" />
                          {job.experience}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-500/8 border border-blue-500/15 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                        <Clock className="w-3 h-3" />
                        {job.employmentType}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-500/8 border border-purple-500/15 text-[11px] font-semibold text-purple-600 dark:text-purple-400">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>

                    {/* View & Apply */}
                    <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#4EB3E8] group-hover:bg-[#3da0d5] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#4EB3E8]/20">
                      {t("career.job.apply", "View & Apply")}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="col-span-2 text-center py-20">
                <Briefcase className="w-14 h-14 mx-auto text-black/10 dark:text-white/10 mb-4" />
                <h3 className="text-lg font-bold mb-2">{t("career.noResults.title", "No positions found")}</h3>
                <p className="text-sm text-black/40 dark:text-white/35">{t("career.noResults.description", "Try adjusting your search or filter criteria.")}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {t("career.cta.title", "Think you're the right fit?")}
            </h2>
            <p className="text-sm text-black/45 dark:text-white/40 mb-6 max-w-lg mx-auto leading-relaxed">
              {t("career.cta.description", "We're building something special at Cloud Nexus - a team of dreamers, doers, and disruptors. If you're passionate about technology and want to make a real impact, we'd love to hear from you.")}
            </p>
            <a
              href="mailto:hr@cloudnexus.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:opacity-90 transition-all duration-300"
            >
              {t("career.cta.resume", "Drop us your resume")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-3 text-xs text-black/30 dark:text-white/25">hr@cloudnexus.in</p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
