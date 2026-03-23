import apiClient from "@/lib/api/axios";

export interface Lead {
  id?: number;
  companyName?: string;
  contactPerson: string;
  subject?: string;
  email: string;
  phone: string;
  status?: string; // New, Contacted, Qualified, Proposal, Won, Lost
  estimatedValue?: string;
  source: string; // Website, Referral, LinkedIn
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const getLeads = async () => (await apiClient.get<Lead[]>('/leads')).data;
export const getLeadById = async (id: number) => (await apiClient.get<Lead>(`/leads/${id}`)).data;
export const createLead = async (data: Lead) => (await apiClient.post<Lead>('/leads', data)).data;
export const updateLead = async (id: number, data: Lead) => (await apiClient.put<Lead>(`/leads/${id}`, data)).data;
export const updateLeadStatus = async (id: number, status: string) => 
  (await apiClient.patch<Lead>(`/leads/${id}/status`, { status })).data;
export const deleteLead = async (id: number) => (await apiClient.delete(`/leads/${id}`)).data;
