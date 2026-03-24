"use client";

import { use, useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Loader2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { getPostById, BlogPost } from "@/services/blogService";

export default function BlogPostPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (postId) {
      getPostById(Number(postId))
        .then((data) => setPost(data))
        .catch((err) => console.error("Error fetching post:", err))
        .finally(() => setLoading(false));
    }
  }, [postId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-accent mb-4" />
        <p className="text-muted-foreground animate-pulse font-serif">Refining the narrative...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-normal mb-4">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-12">
             <Link
                href="/blog"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
          </div>

          {/* Category */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight leading-tight font-serif">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-10 pb-10 border-b border-border/50">
            <Image
              src={post.authorImageUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"}
              alt={post.author}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{post.author}</p>
              <p className="text-sm text-muted-foreground">Author</p>
            </div>
            <div className="ml-auto flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }) : "Just now"}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{Math.ceil(post.content.split(/\s+/).length / 200)} min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <AnimatedSection>
            <div className="relative aspect-[21/9] bg-muted rounded-lg overflow-hidden mb-12">
              <Image
                src={post.coverImageUrl || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"}
                alt={post.title}
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.1}>
            <div className="prose prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Check if it's HTML content
                if (paragraph.includes('<') && paragraph.includes('>')) {
                  return (
                    <div 
                      key={index} 
                      className="mb-6 text-muted-foreground leading-relaxed text-lg prose prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  );
                }

                // Handle headings
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-normal mt-12 mb-4 tracking-tight">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-normal mt-8 mb-3 tracking-tight">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                
                // Handle lists
                if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
                  return (
                    <ul key={index} className="space-y-2 my-6 text-muted-foreground">
                      {items.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-foreground/40 mt-1.5 text-xs">—</span>
                          <span>{item.replace('- ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Regular paragraphs
                return (
                  <p key={index} className="text-base text-muted-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Author Bio */}
          <AnimatedSection delay={0.2}>
            <div className="mt-16 pt-8 border-t border-border/50">
              <div className="flex items-center gap-4">
                <Image
                  src={post.authorImageUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"}
                  alt={post.author}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-medium mb-1">{post.author}</p>
                  <p className="text-sm text-muted-foreground">Expert Contributor</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Related Posts */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 pt-8 border-t border-border/50 text-center">
               <p className="text-muted-foreground text-sm italic">You reached the end of the narrative.</p>
               <Link href="/blog" className="text-accent hover:underline text-sm mt-4 inline-block">Explore more insights</Link>
            </div>
          </AnimatedSection>
        </motion.div>
      </article>
    </div>
  );
}

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
