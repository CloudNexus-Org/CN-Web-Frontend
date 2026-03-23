"use client";

import { useState, useEffect } from "react";
import { X, Plus, Trash2, Loader2 } from "lucide-react";
import { Job, createJob, updateJob } from "../../../../services/jobService";

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  job?: Job | null;
}

export default function JobModal({ isOpen, onClose, onSuccess, job }: JobModalProps) {
  const [formData, setFormData] = useState<Partial<Job>>({
    title: "",
    category: "",
    location: "",
    employmentType: "Full-time",
    salaryRange: "",
    description: "",
    responsibilities: [""],
    requirements: [""],
    status: "Active"
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (job) {
      setFormData({
        ...job,
        responsibilities: job.responsibilities.length > 0 ? job.responsibilities : [""],
        requirements: job.requirements.length > 0 ? job.requirements : [""]
      });
    } else {
      setFormData({
        title: "",
        category: "",
        location: "",
        employmentType: "Full-time",
        salaryRange: "",
        description: "",
        responsibilities: [""],
        requirements: [""],
        status: "Active"
      });
    }
  }, [job, isOpen]);

  if (!isOpen) return null;

  const handleListChange = (index: number, value: string, field: 'responsibilities' | 'requirements') => {
    const newList = [...(formData[field] || [])];
    newList[index] = value;
    setFormData({ ...formData, [field]: newList });
  };

  const addListItem = (field: 'responsibilities' | 'requirements') => {
    setFormData({ ...formData, [field]: [...(formData[field] || []), ""] });
  };

  const removeListItem = (index: number, field: 'responsibilities' | 'requirements') => {
    const newList = [...(formData[field] || [])];
    newList.splice(index, 1);
    setFormData({ ...formData, [field]: newList.length > 0 ? newList : [""] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        responsibilities: (formData.responsibilities || []).filter(r => r.trim() !== ""),
        requirements: (formData.requirements || []).filter(r => r.trim() !== "")
      } as Job;

      if (job?.id) {
        await updateJob(job.id, payload);
      } else {
        await createJob(payload);
      }
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Failed to save job. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#1a1a1a]">
          <h2 className="text-xl text-white font-medium">{job ? "Edit Job" : "Post New Job"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-gray-500 uppercase tracking-wider">Job Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-[#161616] border border-[#262626] rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#22a8e7] transition-colors"
                placeholder="e.g. Senior Backend Engineer"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-gray-500 uppercase tracking-wider">Category</label>
              <input
                type="text"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#161616] border border-[#262626] rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#22a8e7] transition-colors"
                placeholder="e.g. Engineering"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-gray-500 uppercase tracking-wider">Location</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-[#161616] border border-[#262626] rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#22a8e7] transition-colors"
                placeholder="e.g. Remote, SF"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-gray-500 uppercase tracking-wider">Employment Type</label>
              <select
                value={formData.employmentType}
                onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                className="w-full bg-[#161616] border border-[#262626] rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#22a8e7] transition-colors"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-gray-500 uppercase tracking-wider">Salary Range (Optional)</label>
            <input
              type="text"
              value={formData.salaryRange}
              onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
              className="w-full bg-[#161616] border border-[#262626] rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#22a8e7] transition-colors"
              placeholder="e.g. $120k - $160k"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-gray-500 uppercase tracking-wider">Description</label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#161616] border border-[#262626] rounded-md px-4 py-2 text-white h-24 focus:outline-none focus:border-[#22a8e7] transition-colors resize-none"
              placeholder="Briefly describe the role..."
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs text-gray-500 uppercase tracking-wider">Responsibilities</label>
              <button
                type="button"
                onClick={() => addListItem('responsibilities')}
                className="text-[#22a8e7] hover:text-[#1a9fd4] text-xs flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add item
              </button>
            </div>
            <div className="space-y-2">
              {formData.responsibilities?.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleListChange(index, e.target.value, 'responsibilities')}
                    className="flex-1 bg-[#161616] border border-[#262626] rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:border-[#22a8e7]"
                    placeholder="e.g. Design and develop scalable microservices"
                  />
                  {formData.responsibilities!.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeListItem(index, 'responsibilities')}
                      className="text-red-500/50 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs text-gray-500 uppercase tracking-wider">Requirements</label>
              <button
                type="button"
                onClick={() => addListItem('requirements')}
                className="text-[#22a8e7] hover:text-[#1a9fd4] text-xs flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add item
              </button>
            </div>
            <div className="space-y-2">
              {formData.requirements?.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleListChange(index, e.target.value, 'requirements')}
                    className="flex-1 bg-[#161616] border border-[#262626] rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:border-[#22a8e7]"
                    placeholder="e.g. 5+ years experience with Java/Spring Boot"
                  />
                  {formData.requirements!.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeListItem(index, 'requirements')}
                      className="text-red-500/50 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="p-6 border-t border-[#1a1a1a] flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-md bg-[#161616] hover:bg-[#202020] text-gray-400 hover:text-white transition-colors text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-2 bg-[#22a8e7] hover:bg-[#1a9fd4] text-white px-8 py-2 rounded-md transition-colors text-sm flex items-center justify-center min-w-[120px]"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (job ? "Update Job" : "Post Job")}
          </button>
        </div>
      </div>
    </div>
  );
}
