"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Loader2, Calendar, User, BookOpen, Clock, Share2 } from "lucide-react";
import { getBlogBySlug, type BlogPost } from "@/lib/api/services/blog.service";
import { useTranslation } from "@/lib/i18n/context";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function resolveImage(path?: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${API_URL}/uploads/${path}`;
}

function estimateReadTime(content?: string): number {
  if (!content) return 1;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function BlogDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    getBlogBySlug(slug)
      .then(setBlog)
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <Loader2 className="w-7 h-7 animate-spin text-[#4EB3E8]" />
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white gap-4">
        <BookOpen className="w-14 h-14 text-black/10 dark:text-white/10 mb-2" />
        <h1 className="text-2xl font-bold">{t("blogPost.notFound", "Blog post not found")}</h1>
        <p className="text-sm text-black/40 dark:text-white/35">{t("blogPost.notFoundDescription", "The article you're looking for doesn't exist or has been removed.")}</p>
        <Link href="/resources/blog" className="mt-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#4EB3E8] hover:bg-[#3da0d5] transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t("blogPost.backToBlog", "Back to blog")}
        </Link>
      </div>
    );
  }

  const readTime = estimateReadTime(blog.content);
  const coverUrl = resolveImage(blog.coverImage);
  const authorUrl = resolveImage(blog.authorImage);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Cover image hero */}
      {coverUrl && (
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
          <img src={coverUrl} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white dark:to-black" />
        </div>
      )}

      <div className={`mx-auto max-w-3xl px-6 ${coverUrl ? "-mt-16 relative z-10" : "pt-28"} pb-24`}>
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Back link */}
          <Link
            href="/resources/blog"
            className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors mb-6 ${
              coverUrl
                ? "text-white/70 hover:text-white"
                : "text-black/40 dark:text-white/35 hover:text-[#4EB3E8]"
            }`}
          >
            <ArrowLeft className="w-4 h-4" /> {t("blogPost.allArticles", "All articles")}
          </Link>

          {/* Article header card */}
          <div className="rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#0a0a0a] p-8 md:p-10 shadow-xl shadow-black/[0.04] dark:shadow-black/40">
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              {blog.category && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#4EB3E8]/10 text-[#4EB3E8] border border-[#4EB3E8]/20">
                  {blog.category}
                </span>
              )}
              <div className="flex items-center gap-1.5 text-xs text-black/35 dark:text-white/30">
                <Clock className="w-3 h-3" />
                {readTime} {t("blogPost.minRead", "min read")}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              {blog.title}
            </h1>

            {blog.excerpt && (
              <p className="text-base text-black/50 dark:text-white/45 leading-relaxed mb-6">
                {blog.excerpt}
              </p>
            )}

            <div className="flex items-center justify-between pt-5 border-t border-black/[0.05] dark:border-white/[0.05]">
              <div className="flex items-center gap-3">
                {blog.authorName && (
                  <>
                    {authorUrl ? (
                      <img src={authorUrl} alt={blog.authorName} className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-[#1a1a1a]" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#4EB3E8]/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-[#4EB3E8]" />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold">{blog.authorName}</p>
                      <div className="flex items-center gap-1.5 text-[11px] text-black/35 dark:text-white/30">
                        <Calendar className="w-3 h-3" />
                        {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={() => {
                  if (typeof navigator !== "undefined" && navigator.share) {
                    navigator.share({ title: blog.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="p-2.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06] text-black/40 dark:text-white/30 hover:border-[#4EB3E8]/30 hover:text-[#4EB3E8] transition-all"
                title={t("blogPost.share", "Share article")}
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Article content */}
          {blog.content && (
            <div className="mt-10 px-2 md:px-4">
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#4EB3E8] prose-img:rounded-xl whitespace-pre-wrap leading-[1.85] text-black/75 dark:text-white/70 prose-p:mb-5">
                {blog.content}
              </div>
            </div>
          )}

          {/* Bottom nav */}
          <div className="mt-12 pt-8 border-t border-black/[0.05] dark:border-white/[0.05]">
            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#4EB3E8] hover:bg-[#3da0d5] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {t("blogPost.backToAllArticles", "Back to all articles")}
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
