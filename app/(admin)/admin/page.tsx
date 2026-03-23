"use client";

import { Briefcase, UserCheck, TrendingUp, FileText, TrendingDown, Clock, Loader2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getDashboardStats, DashboardStats } from "@/services/dashboardService";

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-500/10 text-blue-400";
      case "Under Review":
        return "bg-yellow-500/10 text-yellow-400";
      case "Interview Scheduled":
        return "bg-green-500/10 text-green-400";
      default:
        return "bg-gray-500/10 text-gray-400";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loader2 className="w-8 h-8 text-[#22a8e7] animate-spin" />
      </div>
    );
  }

  const summaryCards = [
    {
      title: "Total Jobs",
      value: stats?.totalJobs.toString() || "0",
      change: "+0%",
      trend: "up",
      icon: Briefcase,
      href: "/admin/jobs",
    },
    {
      title: "Total Applicants",
      value: stats?.totalApplicants.toString() || "0",
      change: "+0%",
      trend: "up",
      icon: UserCheck,
      href: "/admin/applicants",
    },
    {
      title: "Active Leads",
      value: stats?.totalLeads.toString() || "0",
      change: "+0%",
      trend: "up",
      icon: TrendingUp,
      href: "/admin/leads",
    },
    {
      title: "Blog Posts",
      value: stats?.totalBlogPosts.toString() || "0",
      change: "+0%",
      trend: "up",
      icon: FileText,
      href: "/admin/blog",
    },
  ];

  const chartData = stats 
    ? Object.entries(stats.applicationsPerMonth).map(([month, count]) => ({
        month,
        applications: count,
      }))
    : [];

  return (
    <div className="space-y-4 md:space-y-6 max-w-[1400px]">
      {/* Page Header */}
      <div>
        <h1 className="text-xl md:text-2xl text-white mb-1 font-medium">Dashboard</h1>
        <p className="text-gray-500 text-xs md:text-sm">
          Welcome back! Here&apos;s what&apos;s happening with your recruitment.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {summaryCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 md:p-5 hover:border-[#22a8e7]/40 transition-all group"
          >
            <div className="flex items-start justify-between mb-2 md:mb-3">
              <div className="p-1.5 md:p-2 bg-[#1a1a1a] rounded-md group-hover:bg-[#22a8e7]/10 transition-colors">
                <card.icon className="w-3 h-3 md:w-4 md:h-4 text-gray-400 group-hover:text-[#22a8e7] transition-colors" />
              </div>
              <div className={`flex items-center gap-1 text-xs ${
                card.trend === "up" ? "text-green-500" : "text-red-500"
              }`}>
                {card.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                <span className="hidden sm:inline">{card.change}</span>
              </div>
            </div>
            <h3 className="text-gray-500 text-xs mb-1">{card.title}</h3>
            <p className="text-xl md:text-2xl text-white">{card.value}</p>
          </Link>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 md:p-6">
        <h2 className="text-base md:text-lg text-white mb-4 md:mb-6 font-medium">Applications Per Month</h2>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
              <XAxis dataKey="month" stroke="#666" tick={{ fontSize: 11 }} />
              <YAxis stroke="#666" tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0a0a",
                  border: "1px solid #22a8e7",
                  borderRadius: "6px",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="applications"
                stroke="#22a8e7"
                strokeWidth={2}
                dot={{ fill: "#22a8e7", r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Applications Table */}
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden">
        <div className="p-4 md:p-5 border-b border-[#1a1a1a] flex items-center justify-between">
          <h2 className="text-base md:text-lg text-white font-medium">Recent Applications</h2>
          <Link
            href="/admin/applicants"
            className="text-[#22a8e7] text-xs hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1a1a1a]">
                <th className="text-left text-xs text-gray-500 font-normal px-4 md:px-5 py-3">ID</th>
                <th className="text-left text-xs text-gray-500 font-normal px-4 md:px-5 py-3">Applicant</th>
                <th className="text-left text-xs text-gray-500 font-normal px-4 md:px-5 py-3 hidden md:table-cell">Position</th>
                <th className="text-left text-xs text-gray-500 font-normal px-4 md:px-5 py-3 hidden lg:table-cell">Date</th>
                <th className="text-left text-xs text-gray-500 font-normal px-4 md:px-5 py-3">Status</th>
                <th className="text-left text-xs text-gray-500 font-normal px-4 md:px-5 py-3 hidden sm:table-cell">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stats?.recentApplications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b border-[#1a1a1a] hover:bg-[#0d0d0d] transition-colors"
                >
                  <td className="px-4 md:px-5 py-3 md:py-4">
                    <span className="text-gray-400 font-mono text-xs">{app.id}</span>
                  </td>
                  <td className="px-4 md:px-5 py-3 md:py-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-7 h-7 md:w-8 md:h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white text-xs uppercase">
                        {app.firstName[0]}{app.lastName[0]}
                      </div>
                      <span className="text-white text-xs md:text-sm">{app.firstName} {app.lastName}</span>
                    </div>
                  </td>
                  <td className="px-4 md:px-5 py-3 md:py-4 hidden md:table-cell">
                    <span className="text-gray-400 text-xs md:text-sm">{app.job?.title || "N/A"}</span>
                  </td>
                  <td className="px-4 md:px-5 py-3 md:py-4 hidden lg:table-cell">
                    <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                      <Clock className="w-3 h-3" />
                      {app.appliedAt ? new Date(app.appliedAt).toLocaleDateString() : "N/A"}
                    </div>
                  </td>
                  <td className="px-4 md:px-5 py-3 md:py-4">
                    <span
                      className={`inline-flex px-2 md:px-2.5 py-0.5 md:py-1 rounded-full text-xs ${getStatusColor(
                        app.status || "New"
                      )}`}
                    >
                      <span className="hidden sm:inline">{app.status}</span>
                      <span className="sm:hidden">
                        {app.status === "Interview Scheduled"
                          ? "Interview"
                          : app.status === "Under Review"
                          ? "Review"
                          : app.status}
                      </span>
                    </span>
                  </td>
                  <td className="px-4 md:px-5 py-3 md:py-4 hidden sm:table-cell">
                    <Link
                      href="/admin/applicants"
                      className="text-gray-400 hover:text-[#22a8e7] text-xs md:text-sm transition-colors"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
              {stats?.recentApplications.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-500 text-sm">
                    No recent applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
