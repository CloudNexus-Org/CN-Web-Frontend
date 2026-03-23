import apiClient from "@/lib/api/axios";
import { BlogPost } from './blogService';
import { Job } from './jobService';
import { Applicant } from './applicantService';

export interface DashboardStats {
  totalJobs: number;
  totalApplicants: number;
  totalLeads: number;
  totalBlogPosts: number;
  applicationsPerMonth: Record<string, number>;
  recentApplications: Applicant[];
}

export const getDashboardStats = async () => (await apiClient.get<DashboardStats>('/dashboard/stats')).data;
