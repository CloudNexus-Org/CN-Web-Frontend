"use client";

import { useEffect, useState } from "react";
import { FileText, Calendar, Eye, Edit, Plus, Loader2, ArrowLeft, Upload, Image as ImageIcon, Trash2 } from "lucide-react";
import { getPosts, createPost, deletePost, BlogPost } from "../../../../services/blogService";
import { uploadFileToSupabase } from "../../../../lib/uploadService";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Technology");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [authorFile, setAuthorFile] = useState<File | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setLoading(true);
    getPosts()
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err))
      .finally(() => setLoading(false));
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let coverImageUrl = "";
      let authorImageUrl = "";
      if (file) {
        const uploadedUrl = await uploadFileToSupabase(file, "blog_images"); 
        if (uploadedUrl) {
          coverImageUrl = uploadedUrl;
        }
      }
      if (authorFile) {
        const uploadedAuthorUrl = await uploadFileToSupabase(authorFile, "blog_images");
        if (uploadedAuthorUrl) {
          authorImageUrl = uploadedAuthorUrl;
        }
      }

      await createPost({
        title,
        author,
        authorImageUrl,
        category,
        content,
        summary,
        coverImageUrl,
        status: "Published",
      });

      setIsCreating(false);
      resetForm();
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      await deletePost(id);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post.");
    }
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setCategory("Technology");
    setContent("");
    setSummary("");
    setFile(null);
    setAuthorFile(null);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Draft";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (isCreating) {
    return (
      <div className="space-y-4 md:space-y-6 max-w-[1000px] mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCreating(false)}
            className="p-2 hover:bg-[#1a1a1a] rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl text-white mb-1 font-medium">Create New Post</h1>
            <p className="text-gray-500 text-xs md:text-sm">Write and publish a new blog article</p>
          </div>
        </div>

        <form onSubmit={handleCreateSubmit} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm text-gray-400">Title</label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#22a8e7]"
                placeholder="Post title"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-gray-400">Author</label>
              <input
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#22a8e7]"
                placeholder="Author name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm text-gray-400">Cover Image</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-md transition-colors text-sm cursor-pointer border border-[#2a2a2a]">
                  <Upload className="w-4 h-4" />
                  <span>Cover Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </label>
                <span className="text-xs text-gray-500 truncate max-w-[120px]">
                  {file ? file.name : "None"}
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-gray-400">Author Photo</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-md transition-colors text-sm cursor-pointer border border-[#2a2a2a]">
                  <Upload className="w-4 h-4" />
                  <span>Author Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setAuthorFile(e.target.files?.[0] || null)}
                  />
                </label>
                <span className="text-xs text-gray-500 truncate max-w-[120px]">
                  {authorFile ? authorFile.name : "None"}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 min-h-[100px]">
              <label className="text-sm text-gray-400">Summary (Optional)</label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full h-24 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#22a8e7]"
                placeholder="Short excerpt"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-gray-400">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#22a8e7]"
              >
                <option>Technology</option>
                <option>Company News</option>
                <option>Recruitment</option>
                <option>Trends</option>
                <option>HR</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-gray-400">Content</label>
            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[300px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#22a8e7]"
              placeholder="Write your blog post here..."
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-[#1a1a1a]">
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm"
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-2 bg-[#22a8e7] hover:bg-[#1a9fd4] text-white px-6 py-2 rounded-md transition-colors text-sm disabled:opacity-50"
            >
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
              Publish Post
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6 max-w-[1400px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl text-white mb-1 font-medium">Blog</h1>
          <p className="text-gray-500 text-xs md:text-sm">Manage blog posts and content</p>
        </div>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center gap-2 bg-[#22a8e7] hover:bg-[#1a9fd4] text-white px-4 py-2 rounded-md transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Create New Post
        </button>
      </div>

      {loading ? (
        <div className="flex items-center text-gray-400 text-sm">
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Loading posts...
        </div>
      ) : posts.length === 0 ? (
        <p className="text-gray-400 text-sm">No blog posts found.</p>
      ) : (
        <div className="grid gap-3 md:gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 md:p-5 hover:border-[#2a2a2a] transition-colors flex gap-4"
            >
              {post.coverImageUrl ? (
                <div className="hidden sm:block w-32 h-24 rounded-md overflow-hidden bg-[#1a1a1a] flex-shrink-0">
                  <img src={post.coverImageUrl} alt={post.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="hidden sm:flex w-32 h-24 rounded-md bg-[#1a1a1a] border border-[#2a2a2a] items-center justify-center text-gray-500 flex-shrink-0">
                  <ImageIcon className="w-6 h-6" />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="text-sm md:text-base text-white truncate">{post.title}</h3>
                  <span
                    className={`px-2 md:px-2.5 py-0.5 md:py-1 rounded-full text-xs flex-shrink-0 ${
                      post.status === "Published"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    {post.authorImageUrl ? (
                      <img src={post.authorImageUrl} alt={post.author} className="w-5 h-5 rounded-full object-cover" />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                        <ImageIcon className="w-3 h-3 text-gray-400" />
                      </div>
                    )}
                    <span className="text-white">By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-3 h-3" />
                    {post.views || 0} views
                  </div>
                  <span className="bg-[#1a1a1a] border border-[#2a2a2a] px-2 py-0.5 rounded text-xs">
                    {post.category}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a] text-white px-3 py-1.5 rounded-md transition-colors text-xs">
                    <Edit className="w-3 h-3" />
                    Edit
                  </button>
                  <button 
                    onClick={() => post.id && handleDelete(post.id)}
                    className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a] text-red-400 hover:text-red-300 px-3 py-1.5 rounded-md transition-colors text-xs"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

