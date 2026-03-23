"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { UserCheck, Mail, Phone, Download, Filter, Loader2, Linkedin, ExternalLink, X, Calendar, CheckCircle, XCircle, FileText, User } from "lucide-react";
import { getApplicants, getApplicantsByJob, Applicant, updateApplicantStatus, deleteApplicant } from "../../../../services/applicantService";

function ApplicantsContent() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchApplicants = async () => {
    setLoading(true);
    try {
      const data = jobId 
        ? await getApplicantsByJob(Number(jobId))
        : await getApplicants();
      setApplicants(data);
    } catch (err) {
      console.error("Error fetching applicants:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, [jobId]);

  const handleStatusUpdate = async (id: number, newStatus: string) => {
    setUpdating(true);
    try {
      await updateApplicantStatus(id, newStatus);
      await fetchApplicants(); // Refresh list
      setSelectedApplicant(null); // Close modal
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("Failed to update applicant status. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this applicant?")) {
      try {
        await deleteApplicant(id);
        fetchApplicants();
      } catch (error) {
        console.error("Error deleting applicant:", error);
        alert("Failed to delete applicant.");
      }
    }
  };

  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case "New":
        return "bg-blue-500/10 text-blue-400";
      case "Under Review":
        return "bg-yellow-500/10 text-yellow-400";
      case "Interview Scheduled":
        return "bg-green-500/10 text-green-400";
      case "Hired":
        return "bg-purple-500/10 text-purple-400";
      case "Rejected":
        return "bg-red-500/10 text-red-400";
      default:
        return "bg-gray-500/10 text-gray-400";
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Unknown date";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-4 md:space-y-6 max-w-[1400px] relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl text-white mb-1 font-medium">Applicants</h1>
          <p className="text-gray-500 text-xs md:text-sm">View and manage all job applicants</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-3 md:px-4 py-2 rounded-md transition-colors text-sm border border-[#2a2a2a]">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="flex items-center gap-2 bg-[#22a8e7] hover:bg-[#1a9fd4] text-white px-3 md:px-4 py-2 rounded-md transition-colors text-sm">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Applicants Grid */}
      {loading ? (
        <div className="flex items-center text-gray-400 text-sm py-10 justify-center">
          <Loader2 className="w-6 h-6 mr-2 animate-spin text-[#22a8e7]" />
          Loading applicants...
        </div>
      ) : applicants.length === 0 ? (
        <p className="text-gray-400 text-sm py-10 text-center bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg">No applicants found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {applicants.map((applicant) => (
            <div
              key={applicant.id}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 md:p-5 hover:border-[#2a2a2a] transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 md:gap-4 flex-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 uppercase font-bold border border-[#2a2a2a]">
                    {applicant.firstName[0]}
                    {applicant.lastName[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 md:mb-3 gap-2">
                      <div className="min-w-0">
                        <h3 className="text-sm md:text-base text-white mb-0.5 truncate font-medium">
                          {applicant.firstName} {applicant.lastName}
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm truncate">
                          Job ID: {applicant.job?.title || "Cloud Engineer"} 
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleDelete(applicant.id!)}
                          className="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-md transition-all"
                          title="Delete Applicant"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                        <span
                          className={`px-2 md:px-2.5 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs flex-shrink-0 font-medium ${getStatusColor(
                            applicant.status
                          )}`}
                        >
                          {applicant.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="flex items-center gap-2 text-gray-500 text-xs min-w-0">
                        <Mail className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{applicant.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Phone className="w-3 h-3 flex-shrink-0" />
                        <span>{applicant.phone}</span>
                      </div>
                      {applicant.linkedinProfile && (
                        <div className="flex items-center gap-2 text-[#22a8e7] hover:underline cursor-pointer text-xs">
                          <Linkedin className="w-3 h-3 flex-shrink-0" />
                          <a href={applicant.linkedinProfile} target="_blank" rel="noreferrer">
                            LinkedIn Profile
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#1a1a1a] pt-3">
                      <p className="text-gray-600 text-[10px]">
                        Applied on {formatDate(applicant.appliedAt)}
                      </p>
                      <div className="flex gap-2 w-full sm:w-auto">
                        {applicant.resumeUrl && (
                          <a
                            href={applicant.resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center flex-1 sm:flex-initial bg-[#1a1a1a] hover:bg-[#2a2a2a] text-gray-300 px-3 py-1.5 rounded-md transition-colors text-xs border border-[#2a2a2a]"
                          >
                            <ExternalLink className="w-3 h-3 mr-1.5" />
                            <span>View Resume</span>
                          </a>
                        )}
                        <button 
                          onClick={() => setSelectedApplicant(applicant)}
                          className="flex-1 justify-center sm:flex-initial bg-[#22a8e7] hover:bg-[#1a9fd4] text-white px-4 py-1.5 rounded-md transition-colors text-xs font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Applicant Detail Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-[#1a1a1a] flex items-center justify-between bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#22a8e7]/10 flex items-center justify-center rounded-xl text-[#22a8e7] border border-[#22a8e7]/20">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-lg">{selectedApplicant.firstName} {selectedApplicant.lastName}</h2>
                  <p className="text-gray-500 text-xs">Applying for <span className="text-gray-300 font-medium">{selectedApplicant.job?.title || "Cloud Engineer"}</span></p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedApplicant(null)}
                className="text-gray-500 hover:text-white p-2 hover:bg-[#1a1a1a] rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {/* Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0d0d0d] p-4 rounded-lg border border-[#1a1a1a]">
                 <div className="space-y-4">
                   <div className="flex items-center gap-3">
                     <div className="bg-[#1a1a1a] p-2 rounded-lg"><Mail className="w-4 h-4 text-gray-400"/></div>
                     <div>
                       <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Email Address</p>
                       <p className="text-white text-sm">{selectedApplicant.email}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="bg-[#1a1a1a] p-2 rounded-lg"><Phone className="w-4 h-4 text-gray-400"/></div>
                     <div>
                       <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Phone Number</p>
                       <p className="text-white text-sm">{selectedApplicant.phone}</p>
                     </div>
                   </div>
                 </div>
                 <div className="space-y-4">
                   <div className="flex items-center gap-3">
                     <div className="bg-[#1a1a1a] p-2 rounded-lg"><User className="w-4 h-4 text-gray-400"/></div>
                     <div>
                       <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Current Status</p>
                       <span className={`px-2 py-0.5 rounded-full text-[10px] ${getStatusColor(selectedApplicant.status)}`}>
                        {selectedApplicant.status}
                       </span>
                     </div>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="bg-[#1a1a1a] p-2 rounded-lg"><Calendar className="w-4 h-4 text-gray-400"/></div>
                     <div>
                       <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Applied On</p>
                       <p className="text-white text-sm">{formatDate(selectedApplicant.appliedAt)}</p>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {selectedApplicant.resumeUrl && (
                  <a href={selectedApplicant.resumeUrl} target="_blank" rel="noreferrer" 
                     className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-lg text-xs transition-all border border-[#2a2a2a]">
                    <FileText className="w-4 h-4 text-[#22a8e7]" />
                    View Portfolio/Resume
                  </a>
                )}
                {selectedApplicant.linkedinProfile && (
                  <a href={selectedApplicant.linkedinProfile} target="_blank" rel="noreferrer" 
                     className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-lg text-xs transition-all border border-[#2a2a2a]">
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    LinkedIn Profile
                  </a>
                )}
              </div>

              {/* Cover Letter */}
              <div className="space-y-2">
                <label className="text-xs text-gray-400 font-medium">Cover Letter / Message</label>
                <div className="bg-[#050505] border border-[#1a1a1a] p-4 rounded-lg text-gray-400 text-sm leading-relaxed whitespace-pre-wrap min-h-[100px]">
                  {selectedApplicant.coverLetter || "No cover letter provided."}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 md:p-6 border-t border-[#1a1a1a] bg-[#0d0d0d] flex flex-wrap gap-3">
              <button 
                disabled={updating || selectedApplicant.status === "Interview Scheduled"}
                onClick={() => handleStatusUpdate(selectedApplicant.id!, "Interview Scheduled")}
                className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white py-2.5 rounded-lg text-xs font-semibold transition-all border border-[#2a2a2a] disabled:opacity-50"
              >
                <Calendar className="w-4 h-4 text-yellow-500" />
                Schedule Interview
              </button>
              <button 
                disabled={updating || selectedApplicant.status === "Hired"}
                onClick={() => handleStatusUpdate(selectedApplicant.id!, "Hired")}
                className="flex-1 flex items-center justify-center gap-2 bg-[#1a9fd4]/20 hover:bg-[#1a9fd4]/30 text-[#22a8e7] py-2.5 rounded-lg text-xs font-semibold transition-all border border-[#22a8e7]/20 disabled:opacity-50"
              >
                <CheckCircle className="w-4 h-4" />
                Approve & Hire
              </button>
              <button 
                disabled={updating || selectedApplicant.status === "Rejected"}
                onClick={() => handleStatusUpdate(selectedApplicant.id!, "Rejected")}
                className="flex-1 flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 py-2.5 rounded-lg text-xs font-semibold transition-all border border-red-500/20 disabled:opacity-50"
              >
                <XCircle className="w-4 h-4" />
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ApplicantsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center text-gray-400 text-sm py-10 justify-center">
        <Loader2 className="w-6 h-6 mr-2 animate-spin text-[#22a8e7]" />
        Loading applicants view...
      </div>
    }>
      <ApplicantsContent />
    </Suspense>
  );
}
