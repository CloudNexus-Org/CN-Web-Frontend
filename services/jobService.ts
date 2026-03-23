import apiClient from "@/lib/api/axios";

export interface Job {
  id?: number;
  title: string;
  category: string;
  location: string;
  employmentType: string;
  salaryRange?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const getJobs = async () => (await apiClient.get<Job[]>('/jobs')).data;
export const getActiveJobs = async () => (await apiClient.get<Job[]>('/jobs/active')).data;
export const getJobById = async (id: number) => (await apiClient.get<Job>(`/jobs/${id}`)).data;
export const createJob = async (data: Job) => (await apiClient.post<Job>('/jobs', data)).data;
export const updateJob = async (id: number, data: Job) => (await apiClient.put<Job>(`/jobs/${id}`, data)).data;
export const deleteJob = async (id: number) => (await apiClient.delete(`/jobs/${id}`)).data;
