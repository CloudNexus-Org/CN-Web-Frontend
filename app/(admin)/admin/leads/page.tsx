"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Mail, Phone, Building, Loader2, X, Clock, User, MessageSquare } from "lucide-react";
import { getLeads, Lead, deleteLead } from "../../../../services/leadService"; 

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const fetchLeads = () => {
    setLoading(true);
    getLeads()
      .then((data) => setLeads(data))
      .catch((err) => console.error("Error fetching leads:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      try {
        await deleteLead(id);
        fetchLeads();
      } catch (error) {
        console.error("Error deleting lead:", error);
        alert("Failed to delete lead.");
      }
    }
  };

  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case "Hot":
      case "Qualified":
        return "bg-red-500/10 text-red-400";
      case "Warm":
      case "Contacted":
        return "bg-yellow-500/10 text-yellow-400";
      default:
        return "bg-blue-500/10 text-blue-400";
    }
  };

  return (
    <div className="space-y-4 md:space-y-6 max-w-[1400px] relative">
      <div>
        <h1 className="text-xl md:text-2xl text-white mb-1 font-medium">Leads</h1>
        <p className="text-gray-500 text-xs md:text-sm">Track and manage business leads</p>
      </div>

      {loading ? (
        <div className="flex items-center text-gray-400 text-sm">
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Loading leads...
        </div>
      ) : leads.length === 0 ? (
        <p className="text-gray-400 text-sm">No leads found.</p>
      ) : (
        <div className="grid gap-3 md:gap-4">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 md:p-5 hover:border-[#2a2a2a] transition-colors"
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="bg-[#1a1a1a] p-1.5 md:p-2 rounded-md">
                    <Building className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base text-white mb-0.5">
                      {lead.companyName || "Individual"}
                    </h3>
                    <p className="text-gray-400 text-xs font-medium mb-0.5">{lead.subject}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{lead.contactPerson}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <button 
                    onClick={() => handleDelete(lead.id!)}
                    className="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-md transition-all"
                    title="Delete Lead"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <span className={`px-2 md:px-2.5 py-0.5 md:py-1 rounded-full text-xs ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                  <span className="text-green-400 text-xs md:text-sm font-medium">
                    {lead.estimatedValue || "N/A"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3 md:mb-4">
                <div className="flex items-center gap-2 text-gray-500 text-xs hover:text-[#22a8e7] transition-colors cursor-pointer" 
                     onClick={() => window.location.href = `mailto:${lead.email}`}>
                  <Mail className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{lead.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs hover:text-[#22a8e7] transition-colors cursor-pointer"
                     onClick={() => window.location.href = `tel:${lead.phone}`}>
                  <Phone className="w-3 h-3 flex-shrink-0" />
                  <span>{lead.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <TrendingUp className="w-3 h-3 flex-shrink-0" />
                  <span>Source: {lead.source}</span>
                </div>
              </div>

              {lead.notes && (
                <div className="mb-4 text-xs text-gray-400 bg-[#1a1a1a] p-3 rounded-md border border-[#2a2a2a]/50 line-clamp-1">
                  <strong className="text-gray-300">Notes:</strong> {lead.notes}
                </div>
              )}

              <div className="flex gap-2">
                <button 
                  onClick={() => window.location.href = `mailto:${lead.email}?subject=Regarding your inquiry: ${lead.subject}`}
                  className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-md transition-colors text-xs font-medium border border-[#2a2a2a]"
                >
                  Contact
                </button>
                <button 
                  onClick={() => setSelectedLead(lead)}
                  className="bg-[#22a8e7] hover:bg-[#1a9fd4] text-white px-4 py-2 rounded-md transition-colors text-xs font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-4 md:p-6 border-b border-[#1a1a1a] flex items-center justify-between bg-gradient-to-r from-[#0a0a0a] to-[#111]">
              <div className="flex items-center gap-3">
                <div className="bg-[#22a8e7]/10 p-2 rounded-lg text-[#22a8e7]">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-white font-medium text-lg">{selectedLead.companyName || "Lead Details"}</h2>
                  <p className="text-gray-500 text-xs">Created on {selectedLead.createdAt ? new Date(selectedLead.createdAt).toLocaleDateString() : 'N/A'}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="text-gray-500 hover:text-white p-1 hover:bg-[#1a1a1a] rounded-md transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 md:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Primary Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Contact Person</label>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    {selectedLead.contactPerson}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Status</label>
                  <div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${getStatusColor(selectedLead.status)}`}>
                      {selectedLead.status}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Email</label>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Mail className="w-3.5 h-3.5 text-gray-400" />
                    {selectedLead.email}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Phone</label>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                    {selectedLead.phone}
                  </div>
                </div>
              </div>

              {/* Secondary Info */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1a1a1a]">
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Estimated Value</label>
                  <div className="text-green-400 text-sm font-medium">{selectedLead.estimatedValue || 'N/A'}</div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Lead Source</label>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <TrendingUp className="w-3.5 h-3.5 text-gray-500" />
                    {selectedLead.source}
                  </div>
                </div>
              </div>

              {/* Subject & Notes */}
              <div className="space-y-4 pt-4 border-t border-[#1a1a1a]">
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Subject</label>
                  <div className="text-white text-sm bg-[#111] p-2 rounded border border-[#1a1a1a]">{selectedLead.subject}</div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold flex items-center gap-1">
                    <MessageSquare className="w-2.5 h-2.5" /> Notes
                  </label>
                  <div className="text-gray-400 text-sm bg-[#050505] p-3 rounded-md border border-[#1a1a1a] leading-relaxed whitespace-pre-wrap">
                    {selectedLead.notes || "No additional notes available."}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 md:p-6 bg-[#111] border-t border-[#1a1a1a] flex gap-3">
              <button 
                onClick={() => window.location.href = `mailto:${selectedLead.email}`}
                className="flex-1 bg-[#22a8e7] hover:bg-[#1a9fd4] text-white py-2 rounded-md transition-all text-xs font-semibold shadow-lg shadow-[#22a8e7]/10"
              >
                Send Email
              </button>
              <button 
                onClick={() => setSelectedLead(null)}
                className="flex-1 bg-transparent hover:bg-[#1a1a1a] text-gray-400 hover:text-white py-2 rounded-md transition-all text-xs font-semibold border border-[#2a2a2a]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
