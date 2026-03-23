import apiClient from "@/lib/api/axios";
import { Job } from './jobService';

export interface Applicant {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl?: string;
  linkedinProfile?: string;
  portfolioUrl?: string;
  coverLetter?: string;
  status?: string;
  jobId: number;
  job?: Job;
  appliedAt?: string;
  updatedAt?: string;
}

export const getApplicants = async () => (await apiClient.get<Applicant[]>('/applicants')).data;
export const getApplicantsByJob = async (jobId: number) => (await apiClient.get<Applicant[]>(`/applicants/job/${jobId}`)).data;
export const getApplicantById = async (id: number) => (await apiClient.get<Applicant>(`/applicants/${id}`)).data;
export const applyForJob = async (data: Applicant) => (await apiClient.post<Applicant>('/applicants', data)).data;
export const updateApplicantStatus = async (id: number, status: string) => 
  (await apiClient.patch<Applicant>(`/applicants/${id}/status`, { status })).data;
export const deleteApplicant = async (id: number) => 
  (await apiClient.delete(`/applicants/${id}`)).data;
