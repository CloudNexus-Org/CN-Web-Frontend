import apiClient from "../axios";
import { ENDPOINTS } from "../endpoints";

/* ═══════ AUTH ═══════ */

// 2FA response types — commented out (SMTP/2FA disabled)
// export interface AdminLoginResponse {
//   challengeId: string;
//   expiresAt: string;
//   message: string;
//   delivery: "email" | "dev";
//   devCode?: string;
// }

// Direct login response (no 2FA)
export interface AdminLoginResponse {
  token: string;
  user: { id: string; email: string; name: string; role: string };
}

// export interface AdminVerify2FAResponse {
//   token: string;
//   user: { id: string; email: string; name: string; role: string };
// }
export type AdminVerify2FAResponse = AdminLoginResponse; // alias kept for type compat

export async function adminLogin(email: string, password: string): Promise<AdminLoginResponse> {
  const res = await apiClient.post(ENDPOINTS.AUTH.ADMIN_LOGIN, { email, password });
  return res.data;
}

// 2FA verify — commented out (SMTP/2FA disabled)
// export async function adminVerify2FA(challengeId: string, code: string): Promise<AdminVerify2FAResponse> {
//   const res = await apiClient.post(ENDPOINTS.AUTH.ADMIN_VERIFY_2FA, { challengeId, code });
//   if (res.data.token && typeof window !== "undefined") {
//     localStorage.setItem("admin_token", res.data.token);
//   }
//   return res.data;
// }

export async function getAdminProfile() {
  const res = await apiClient.get(ENDPOINTS.AUTH.ADMIN_ME);
  return res.data;
}

/* ═══════ BLOGS ═══════ */

export interface AdminBlog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string | null;
  coverImage: string | null;
  authorName: string | null;
  authorImage: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author?: { id: string; name: string; email: string } | null;
}

export interface BlogFormData {
  title: string;
  excerpt: string;
  content: string;
  slug?: string;
  category?: string;
  coverImage?: string | null;
  authorName?: string | null;
  authorImage?: string | null;
  published?: boolean;
}

export async function getAdminBlogs(): Promise<AdminBlog[]> {
  const res = await apiClient.get(ENDPOINTS.ADMIN.BLOGS);
  return res.data;
}

export async function createBlog(data: BlogFormData): Promise<AdminBlog> {
  const res = await apiClient.post(ENDPOINTS.ADMIN.BLOGS, data);
  return res.data;
}

export async function updateBlog(id: string, data: Partial<BlogFormData>): Promise<AdminBlog> {
  const res = await apiClient.put(ENDPOINTS.ADMIN.BLOG_BY_ID(id), data);
  return res.data;
}

export async function deleteBlog(id: string): Promise<void> {
  await apiClient.delete(ENDPOINTS.ADMIN.BLOG_BY_ID(id));
}

export async function uploadBlogImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  const res = await apiClient.post(ENDPOINTS.ADMIN.UPLOAD_BLOG_IMAGE, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.path;
}

/* ═══════ JOB POSTINGS ═══════ */

export interface AdminJob {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employmentType: string;
  tagline: string;
  experience: string;
  description: string[];
  profileSections: { heading: string; items: string[] }[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface JobFormData {
  title: string;
  department: string;
  slug?: string;
  location?: string;
  employmentType?: string;
  tagline?: string;
  experience?: string;
  description?: string[];
  profileSections?: { heading: string; items: string[] }[];
  published?: boolean;
}

export async function getAdminJobs(): Promise<AdminJob[]> {
  const res = await apiClient.get(ENDPOINTS.ADMIN.JOB_POSTINGS);
  return res.data;
}

export async function createJob(data: JobFormData): Promise<AdminJob> {
  const res = await apiClient.post(ENDPOINTS.ADMIN.JOB_POSTINGS, data);
  return res.data;
}

export async function updateJob(id: string, data: Partial<JobFormData>): Promise<AdminJob> {
  const res = await apiClient.put(ENDPOINTS.ADMIN.JOB_POSTING_BY_ID(id), data);
  return res.data;
}

export async function deleteJob(id: string): Promise<void> {
  await apiClient.delete(ENDPOINTS.ADMIN.JOB_POSTING_BY_ID(id));
}

/* ═══════ APPLICATIONS ═══════ */

export interface AdminApplication {
  id: string;
  jobSlug: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  currentCompany: string | null;
  ctc: string | null;
  experience: string | null;
  resumeFileName: string | null;
  resumePath: string | null;
  status: "PENDING" | "APPROVED";
  createdAt: string;
  user?: { id: string; name: string; email: string } | null;
}

export async function getApplications(): Promise<AdminApplication[]> {
  const res = await apiClient.get(ENDPOINTS.ADMIN.APPLICATIONS);
  return res.data;
}

export async function approveApplication(id: string): Promise<AdminApplication> {
  const res = await apiClient.patch(ENDPOINTS.ADMIN.APPLICATION_APPROVE(id));
  return res.data;
}

export async function deleteApplication(id: string): Promise<void> {
  await apiClient.delete(ENDPOINTS.ADMIN.APPLICATION_DELETE(id));
}

/* ═══════ CONTACTS ═══════ */

export interface AdminContact {
  id: string;
  fullName: string;
  companyName: string | null;
  email: string;
  phone: string | null;
  interestedIn: string;
  estimatedBudget: string | null;
  heardFrom: string | null;
  projectDetails: string;
  createdAt: string;
}

export async function getContacts(): Promise<AdminContact[]> {
  const res = await apiClient.get(ENDPOINTS.ADMIN.CONTACTS);
  return res.data;
}
