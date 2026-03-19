import apiClient from './apiClient';

export interface BlogPost {
  id?: number;
  title: string;
  slug?: string;
  content: string;
  summary?: string;
  author: string;
  category: string;
  status?: string; // Draft, Published, Archived
  coverImageUrl?: string;
  authorImageUrl?: string;
  views?: number;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const getPosts = async () => (await apiClient.get<BlogPost[]>('/blog')).data;
export const getPublishedPosts = async () => (await apiClient.get<BlogPost[]>('/blog/published')).data;
export const getPostById = async (id: number) => (await apiClient.get<BlogPost>(`/blog/${id}`)).data;
export const getPostBySlug = async (slug: string) => (await apiClient.get<BlogPost>(`/blog/slug/${slug}`)).data;
export const createPost = async (data: BlogPost) => (await apiClient.post<BlogPost>('/blog', data)).data;
export const updatePost = async (id: number, data: BlogPost) => (await apiClient.put<BlogPost>(`/blog/${id}`, data)).data;
export const incrementViews = async (id: number) => (await apiClient.post<BlogPost>(`/blog/${id}/view`)).data;
export const deletePost = async (id: number) => (await apiClient.delete(`/blog/${id}`)).data;
