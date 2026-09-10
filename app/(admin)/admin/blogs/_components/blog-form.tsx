"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Upload, AlertCircle, ArrowLeft, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { createBlog, updateBlog, uploadBlogImage, type BlogFormData, type AdminBlog } from "@/lib/api/services/admin.service";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Props {
  blog?: AdminBlog;
}

export default function BlogForm({ blog }: Props) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const authorFileRef = useRef<HTMLInputElement>(null);
  const isEdit = !!blog;

  const [form, setForm] = useState<BlogFormData>({
    title: blog?.title ?? "",
    excerpt: blog?.excerpt ?? "",
    content: blog?.content ?? "",
    slug: blog?.slug ?? "",
    category: blog?.category ?? "",
    coverImage: blog?.coverImage ?? "",
    authorName: blog?.authorName ?? "",
    authorImage: blog?.authorImage ?? "",
    published: blog?.published ?? true,
  });

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingAuthor, setUploadingAuthor] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((p) => ({
      ...p,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const path = await uploadBlogImage(file);
      setForm((p) => ({ ...p, coverImage: path }));
    } catch {
      setError("Failed to upload image.");
    }
    setUploading(false);
  };

  const handleAuthorImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingAuthor(true);
    try {
      const path = await uploadBlogImage(file);
      setForm((p) => ({ ...p, authorImage: path }));
    } catch {
      setError("Failed to upload author image.");
    }
    setUploadingAuthor(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (isEdit) {
        await updateBlog(blog.id, form);
      } else {
        await createBlog(form);
      }
      router.push("/admin/blogs");
    } catch (err: unknown) {
      const msg = err && typeof err === "object" && "response" in err
        ? (err as { response?: { data?: { error?: string } } }).response?.data?.error
        : undefined;
      setError(msg || "Failed to save blog post.");
    }
    setLoading(false);
  };

  const inputCls = "w-full rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-[#4EB3E8] focus:ring-1 focus:ring-[#4EB3E8]/20 transition-all duration-200 placeholder:text-black/30 dark:placeholder:text-white/25";

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/blogs" className="p-2 rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
          {isEdit ? "Edit Blog Post" : "New Blog Post"}
        </h1>
      </div>

      {error && (
        <div className="mb-5 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />{error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl">
        <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111] p-6 space-y-5">
          <div>
            <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Title *</label>
            <input name="title" value={form.title} onChange={handleChange} required placeholder="Blog post title" className={inputCls} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Slug</label>
              <input name="slug" value={form.slug} onChange={handleChange} placeholder="auto-generated from title" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Category</label>
              <input name="category" value={form.category ?? ""} onChange={handleChange} placeholder="e.g. Technology" className={inputCls} />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Excerpt *</label>
            <textarea name="excerpt" value={form.excerpt} onChange={handleChange} required rows={2} placeholder="Short summary..." className={`${inputCls} resize-none`} />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Content *</label>
            <textarea name="content" value={form.content} onChange={handleChange} required rows={12} placeholder="Write your blog post content..." className={`${inputCls} resize-y`} />
          </div>
        </div>

        <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111] p-6 space-y-5">
          <h3 className="text-sm font-bold text-black dark:text-white">Media & Author</h3>

          <div>
            <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Cover Image</label>
            <div className="flex items-center gap-3">
              {form.coverImage ? (
                <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-black/[0.08] dark:border-white/[0.08]">
                  <img src={`${API_URL}/uploads/${form.coverImage}`} alt="cover" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-24 h-16 rounded-lg border border-dashed border-black/[0.12] dark:border-white/[0.12] flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-black/20 dark:text-white/20" />
                </div>
              )}
              <button type="button" onClick={() => fileRef.current?.click()} disabled={uploading} className="px-4 py-2 rounded-xl border border-black/[0.08] dark:border-white/[0.08] text-xs font-semibold hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors disabled:opacity-50">
                {uploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5 inline mr-1.5" />}
                {uploading ? "Uploading..." : "Upload"}
              </button>
              <input ref={fileRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Author Name</label>
              <input name="authorName" value={form.authorName ?? ""} onChange={handleChange} placeholder="Author display name" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Author Image</label>
              <div className="flex items-center gap-3">
                {form.authorImage ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black/[0.08] dark:border-white/[0.08] flex-shrink-0">
                    <img src={form.authorImage.startsWith("http") ? form.authorImage : `${API_URL}/uploads/${form.authorImage}`} alt="author" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full border border-dashed border-black/[0.12] dark:border-white/[0.12] flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="w-4 h-4 text-black/20 dark:text-white/20" />
                  </div>
                )}
                <button type="button" onClick={() => authorFileRef.current?.click()} disabled={uploadingAuthor} className="px-4 py-2 rounded-xl border border-black/[0.08] dark:border-white/[0.08] text-xs font-semibold hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors disabled:opacity-50">
                  {uploadingAuthor ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5 inline mr-1.5" />}
                  {uploadingAuthor ? "Uploading..." : form.authorImage ? "Change" : "Upload"}
                </button>
                {form.authorImage && (
                  <button type="button" onClick={() => setForm((p) => ({ ...p, authorImage: "" }))} className="text-xs text-red-500 hover:text-red-600 font-medium transition-colors">
                    Remove
                  </button>
                )}
                <input ref={authorFileRef} type="file" accept="image/*" onChange={handleAuthorImageUpload} className="hidden" />
              </div>
            </div>
          </div>

          <label className="flex items-center gap-2.5 cursor-pointer">
            <input type="checkbox" name="published" checked={form.published} onChange={handleChange} className="w-4 h-4 rounded accent-[#4EB3E8]" />
            <span className="text-sm font-medium text-black/70 dark:text-white/60">Published</span>
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" disabled={loading} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4EB3E8] hover:bg-[#3da0d5] text-white text-sm font-semibold transition-colors disabled:opacity-60">
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isEdit ? "Update Post" : "Create Post"}
          </button>
          <Link href="/admin/blogs" className="px-6 py-3 rounded-xl border border-black/[0.08] dark:border-white/[0.08] text-sm font-semibold hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
