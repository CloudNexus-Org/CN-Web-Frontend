"use client";

import { useEffect, useState } from "react";
import { Briefcase, Plus, MapPin, Clock, Users, Loader2, Edit2, Trash2, Eye } from "lucide-react";
import { getJobs, Job, deleteJob } from "../../../../services/jobService";
import JobModal from "./JobModal";
import Link from "next/link";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const fetchJobs = () => {
    setLoading(true);
    getJobs()
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleCreate = () => {
    setSelectedJob(null);
    setIsModalOpen(true);
  };

  const handleEdit = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await deleteJob(id);
        fetchJobs();
      } catch (error) {
        console.error("Error deleting job:", error);
        alert("Failed to delete job.");
      }
    }
  };

  return (
    <div className="space-y-4 md:space-y-6 max-w-[1400px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl text-white mb-1 font-medium">Jobs</h1>
          <p className="text-gray-500 text-xs md:text-sm">Manage all job postings and openings</p>
        </div>
        <button 
          onClick={handleCreate}
          className="flex items-center justify-center gap-2 bg-[#22a8e7] hover:bg-[#1a9fd4] text-white px-4 py-2 rounded-md transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Post New Job
        </button>
      </div>

      {/* Jobs Grid */}
      {loading ? (
        <div className="flex items-center text-gray-400 text-sm py-12">
          <Loader2 className="w-6 h-6 mr-3 animate-spin text-[#22a8e7]" />
          Loading jobs...
        </div>
      ) : jobs.length === 0 ? (
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-12 text-center">
          <Briefcase className="w-12 h-12 text-gray-700 mx-auto mb-4" />
          <p className="text-gray-400 text-sm">No jobs found. Post your first job to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 md:p-5 hover:border-[#2a2a2a] transition-colors"
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex items-start gap-2 md:gap-3 flex-1">
                  <div className="bg-[#1a1a1a] p-1.5 md:p-2 rounded-md group-hover:bg-[#22a8e7]/10 group-hover:text-[#22a8e7] transition-colors">
                    <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm md:text-base text-white mb-0.5 md:mb-1">{job.title}</h3>
                    <p className="text-gray-500 text-xs">{job.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleEdit(job)}
                    className="p-1.5 text-gray-500 hover:text-white hover:bg-[#1a1a1a] rounded-md transition-all"
                    title="Edit Job"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(job.id!)}
                    className="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-md transition-all"
                    title="Delete Job"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <span
                    className={`px-2 md:px-2.5 py-0.5 md:py-1 rounded-full text-xs ${
                      job.status === "Active"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-gray-500/10 text-gray-400"
                    }`}
                  >
                    {job.status || "Active"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3 md:mb-4 px-1">
                <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  {job.employmentType}
                </div>
                {job.salaryRange && (
                  <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                    <span className="text-xs">💰</span> {job.salaryRange}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Link 
                  href={`/career/job/${job.id}`} 
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-3 py-2 rounded-md transition-colors text-sm"
                >
                  <Eye className="w-4 h-4" />
                  View on Site
                </Link>
                <Link 
                  href={`/admin/applicants?jobId=${job.id}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#22a8e7] hover:bg-[#1a9fd4] text-white px-3 py-2 rounded-md transition-colors text-sm"
                >
                  <Users className="w-4 h-4" />
                  View Applicants
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <JobModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchJobs}
        job={selectedJob}
      />
    </div>
  );
}

