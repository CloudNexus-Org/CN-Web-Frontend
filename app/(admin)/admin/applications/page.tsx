"use client";

import { useEffect, useState } from "react";
import { Loader2, CheckCircle2, Trash2, Download, Clock } from "lucide-react";
import { getApplications, approveApplication, deleteApplication, type AdminApplication } from "@/lib/api/services/admin.service";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AdminApplicationsPage() {
  const [apps, setApps] = useState<AdminApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [acting, setActing] = useState<string | null>(null);

  useEffect(() => {
    getApplications().then(setApps).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const handleApprove = async (id: string) => {
    setActing(id);
    try {
      const updated = await approveApplication(id);
      setApps((prev) => prev.map((a) => (a.id === id ? updated : a)));
    } catch { /* ignore */ }
    setActing(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this application? This cannot be undone.")) return;
    setActing(id);
    try {
      await deleteApplication(id);
      setApps((prev) => prev.filter((a) => a.id !== id));
    } catch { /* ignore */ }
    setActing(null);
  };

  if (loading) {
    return <div className="flex items-center justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-[#4EB3E8]" /></div>;
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">Applications</h1>
        <p className="text-sm text-black/45 dark:text-white/40 mt-0.5">{apps.length} applications received</p>
      </div>

      <div className="space-y-4">
        {apps.map((app) => (
          <div key={app.id} className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111] p-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-black dark:text-white truncate">{app.fullName}</h3>
                  {app.status === "APPROVED" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-500/10 text-green-600 dark:text-green-400">
                      <CheckCircle2 className="w-3 h-3" /> Approved
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Clock className="w-3 h-3" /> Pending
                    </span>
                  )}
                </div>
                <div className="text-xs text-black/50 dark:text-white/40 space-y-0.5">
                  <div>Applied for: <span className="font-semibold text-black/70 dark:text-white/60">{app.jobTitle}</span></div>
                  <div>{app.email} &middot; {app.phone}</div>
                  {app.currentCompany && <div>Company: {app.currentCompany}</div>}
                  {app.experience && <div>Experience: {app.experience}</div>}
                  {app.ctc && <div>CTC: {app.ctc}</div>}
                  <div className="text-black/30 dark:text-white/25">{new Date(app.createdAt).toLocaleDateString()} {new Date(app.createdAt).toLocaleTimeString()}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {app.resumePath && (
                  <a href={`${API_URL}/uploads/${app.resumePath}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-[#4EB3E8]/10 text-black/40 dark:text-white/40 hover:text-[#4EB3E8] transition-colors" title="Download Resume">
                    <Download className="w-4 h-4" />
                  </a>
                )}
                {app.status === "PENDING" && (
                  <button onClick={() => handleApprove(app.id)} disabled={acting === app.id} className="p-2 rounded-lg hover:bg-green-500/10 text-black/40 dark:text-white/40 hover:text-green-500 transition-colors disabled:opacity-40" title="Approve">
                    {acting === app.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                  </button>
                )}
                <button onClick={() => handleDelete(app.id)} disabled={acting === app.id} className="p-2 rounded-lg hover:bg-red-500/10 text-black/40 dark:text-white/40 hover:text-red-500 transition-colors disabled:opacity-40" title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {apps.length === 0 && (
          <div className="text-center py-16 text-sm text-black/30 dark:text-white/25">No applications received yet.</div>
        )}
      </div>
    </div>
  );
}
