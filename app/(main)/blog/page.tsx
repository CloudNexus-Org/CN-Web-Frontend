"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Search, Loader2 } from "lucide-react";
import { BlogPost } from "@/services/blogService";
import { fetchPosts } from "@/store/slices/blogSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { RootState } from "@/store/store";

export default function BlogPage() {
  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector((state: RootState) => state.blog);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  const dynamicCategories = ["All", ...Array.from(new Set(posts.map(p => p.category)))];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.summary?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Title and Search */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 -z-10 opacity-10">
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl md:text-8xl font-serif font-normal tracking-tight"
            >
              Blog
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              {/* Search Bar */}
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-72 pl-10 pr-20 py-2 bg-muted border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground">
                  <kbd className="px-1.5 py-0.5 bg-background/50 border border-border/50 rounded text-[10px]">
                    Ctrl
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-background/50 border border-border/50 rounded text-[10px]">
                    K
                  </kbd>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-hide"
          >
            {dynamicCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Results Count */}
          {(searchQuery || selectedCategory !== "All") && (
            <div className="mb-8">
              <p className="text-sm text-muted-foreground">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>
          )}

          {loading ? (
             <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <Loader2 className="w-8 h-8 animate-spin mb-4" />
                <p>Loading the latest insights...</p>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-2">
                No articles found.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-sm text-accent hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/blog/${post.id}`} className="group block">
        {/* Image with Text Overlay */}
        <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4">
          <Image
            src={post.coverImageUrl || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"}
            alt={post.title}
            fill
            className="w-full h-full object-cover brightness-[0.7] group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 
              className="text-3xl md:text-4xl font-serif text-white leading-tight group-hover:text-white/90 transition-colors"
            >
              {post.title}
            </h2>
          </div>
        </div>

        {/* Author & Date */}
        <div className="flex items-center gap-3 px-1">
          <Image
            src={post.authorImageUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"}
            alt={post.author}
            width={24}
            height={24}
            className="w-6 h-6 rounded-full object-cover"
          />
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{post.author}</span>
            <span>·</span>
            <span>
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }) : "Just now"}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
