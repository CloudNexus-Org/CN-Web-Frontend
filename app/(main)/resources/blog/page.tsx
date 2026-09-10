"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Loader2, ArrowRight, BookOpen, Search } from "lucide-react";
import { getBlogs, type BlogPost } from "@/lib/api/services/blog.service";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function resolveImage(path?: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${API_URL}/uploads/${path}`;
}

export default function BlogPage() {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = [t("blog.filter.all", "All"), ...Array.from(new Set(blogs.map((b) => b.category).filter(Boolean)))];

  const stats = useTranslatedData([
    { value: `${blogs.length}+`, label: t("blog.stat.articles", "Articles") },
    { value: `${Array.from(new Set(blogs.map(b => b.category).filter(Boolean))).length}`, label: t("blog.stat.topics", "Topics") },
    { value: `${Array.from(new Set(blogs.map(b => b.authorName).filter(Boolean))).length}`, label: t("blog.stat.authors", "Authors") },
  ]);

  const filteredBlogs = blogs.filter((blog) => {
    const matchSearch = !search || blog.title.toLowerCase().includes(search.toLowerCase()) || blog.excerpt?.toLowerCase().includes(search.toLowerCase());
    const allLabel = t("blog.filter.all", "All");
    const matchCategory = !selectedCategory || selectedCategory === allLabel || blog.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const featuredBlog = filteredBlogs[0];
  const restBlogs = filteredBlogs.slice(1);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4EB3E8]/[0.04] blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-500/[0.03] blur-[80px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                {t("blog.hero.title1", "Insights &")}{" "}
                <span className="text-[#4EB3E8]">{t("blog.hero.title2", "Stories")}</span>
              </h1>
              <p className="mt-5 text-base text-black/50 dark:text-white/45 max-w-lg leading-relaxed">
                {t("blog.hero.description", "Tutorials, case studies, and tech insights from the Cloud Nexus engineering team. Stay ahead with the latest in cloud, AI, and modern development.")}
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-[#4EB3E8]">{stat.value}</p>
                    <p className="text-xs text-black/40 dark:text-white/35 font-medium">{stat.label}</p>
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
                    src="/assets/images/blog-hero.jpg"
                    alt={t("blog.hero.imageAlt", "Blog & Insights")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0vw, 450px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      {["Cloud", "DevOps", "AI/ML", "Web Dev"].map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-semibold text-white border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="border-t border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30 dark:text-white/30" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("blog.search.placeholder", "Search articles...")}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-sm font-medium focus:outline-none focus:border-[#4EB3E8]/40 focus:ring-2 focus:ring-[#4EB3E8]/10 transition-all duration-300"
              />
            </div>
            {categories.length > 2 && (
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as string)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                      selectedCategory === cat
                        ? "border-[#4EB3E8] bg-[#4EB3E8]/10 text-[#4EB3E8]"
                        : "border-black/[0.06] dark:border-white/[0.06] text-black/50 dark:text-white/40 hover:border-[#4EB3E8]/30 hover:text-[#4EB3E8]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-7 h-7 animate-spin text-[#4EB3E8]" />
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-14 h-14 mx-auto text-black/10 dark:text-white/10 mb-4" />
            <h3 className="text-lg font-bold mb-2">{t("blog.noResults", "No articles found")}</h3>
            <p className="text-sm text-black/40 dark:text-white/35">
              {blogs.length === 0 ? t("blog.noResultsEmpty", "No blog posts yet. Check back soon!") : t("blog.noResultsFilter", "Try adjusting your search or filter.")}
            </p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredBlog && (
              <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <Link href={`/resources/blog/${featuredBlog.slug}`}>
                  <div className="group grid md:grid-cols-2 gap-0 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden bg-[#fafafa] dark:bg-white/[0.02] transition-all duration-300 hover:border-[#4EB3E8]/20 hover:shadow-xl hover:shadow-[#4EB3E8]/[0.04]">
                    <div className="aspect-[16/10] md:aspect-auto overflow-hidden bg-black/[0.03] dark:bg-white/[0.03]">
                      {resolveImage(featuredBlog.coverImage) ? (
                        <img
                          src={resolveImage(featuredBlog.coverImage)!}
                          alt={featuredBlog.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full min-h-[250px] flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-black/10 dark:text-white/10" />
                        </div>
                      )}
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        {featuredBlog.category && (
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#4EB3E8]/10 text-[#4EB3E8] border border-[#4EB3E8]/20">
                            {featuredBlog.category}
                          </span>
                        )}
                        <span className="text-xs text-black/35 dark:text-white/30">
                          {new Date(featuredBlog.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3 group-hover:text-[#4EB3E8] transition-colors">
                        {featuredBlog.title}
                      </h2>
                      {featuredBlog.excerpt && (
                        <p className="text-sm text-black/50 dark:text-white/45 leading-relaxed mb-5 line-clamp-3">
                          {featuredBlog.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        {featuredBlog.authorName && (
                          <div className="flex items-center gap-2.5">
                            {resolveImage(featuredBlog.authorImage) ? (
                              <img src={resolveImage(featuredBlog.authorImage)!} alt={featuredBlog.authorName} className="w-8 h-8 rounded-full object-cover" />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-[#4EB3E8]/10 flex items-center justify-center">
                                <span className="text-xs font-bold text-[#4EB3E8]">{featuredBlog.authorName.charAt(0).toUpperCase()}</span>
                              </div>
                            )}
                            <span className="text-sm font-medium text-black/60 dark:text-white/50">{featuredBlog.authorName}</span>
                          </div>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4EB3E8] group-hover:gap-2.5 transition-all">
                          {t("blog.readMore", "Read Article")} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
      </div>
                </Link>
              </motion.div>
            )}

            {/* Rest of posts */}
            {restBlogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restBlogs.map((blog, i) => (
            <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Link href={`/resources/blog/${blog.slug}`}>
                      <div className="group h-full rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-white/[0.02] transition-all duration-300 hover:border-[#4EB3E8]/20 hover:shadow-lg hover:shadow-[#4EB3E8]/[0.03] hover:-translate-y-1 flex flex-col overflow-hidden">
                        <div className="aspect-[16/9] w-full overflow-hidden bg-black/[0.03] dark:bg-white/[0.03]">
                          {resolveImage(blog.coverImage) ? (
                            <img
                              src={resolveImage(blog.coverImage)!}
                              alt={blog.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <BookOpen className="w-10 h-10 text-black/10 dark:text-white/10" />
                            </div>
                          )}
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-2.5 mb-3">
                            {blog.category && (
                              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#4EB3E8]/10 text-[#4EB3E8] border border-[#4EB3E8]/20">
                      {blog.category}
                    </span>
                            )}
                            <span className="text-[11px] text-black/35 dark:text-white/30">
                              {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                            </span>
                  </div>
                          <h3 className="text-base font-bold leading-snug mb-2 group-hover:text-[#4EB3E8] transition-colors">
                    {blog.title}
                  </h3>
                          {blog.excerpt && (
                            <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed flex-1 line-clamp-2">
                    {blog.excerpt}
                  </p>
                          )}
                          <div className="mt-4 pt-4 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between">
                            {blog.authorName && (
                              <div className="flex items-center gap-2">
                                {resolveImage(blog.authorImage) ? (
                                  <img src={resolveImage(blog.authorImage)!} alt={blog.authorName} className="w-6 h-6 rounded-full object-cover" />
                                ) : (
                                  <div className="w-6 h-6 rounded-full bg-[#4EB3E8]/10 flex items-center justify-center">
                                    <span className="text-[9px] font-bold text-[#4EB3E8]">{blog.authorName.charAt(0).toUpperCase()}</span>
                                  </div>
                                )}
                                <span className="text-xs text-black/40 dark:text-white/35">{blog.authorName}</span>
                              </div>
                            )}
                            <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/15 group-hover:text-[#4EB3E8] transition-colors" />
                          </div>
                        </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
