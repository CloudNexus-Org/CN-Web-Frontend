"use client";

import { Briefcase, UserCheck, TrendingUp, FileText, TrendingDown, Clock, Loader2, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
const LineChart = dynamic(() => import("recharts").then((mod) => mod.LineChart), { ssr: false });
const Line = dynamic(() => import("recharts").then((mod) => mod.Line), { ssr: false });
const XAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then((mod) => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((mod) => mod.ResponsiveContainer), { ssr: false });

import Link from "next/link";
import { useEffect, useState } from "react";
import { getDashboardStats, DashboardStats } from "@/services/dashboardService";

// Shadcn UI Imports
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "New":
        return "default"; // blue-ish styling via custom css or outline
      case "Under Review":
        return "secondary";
      case "Interview Scheduled":
        return "outline"; // customize with border
      default:
        return "outline";
    }
  };

  const getStatusStyles = (status: string) => {
     switch (status) {
      case "New": return "bg-blue-500/10 text-blue-400 border-none hover:bg-blue-500/20";
      case "Under Review": return "bg-amber-500/10 text-amber-400 border-none hover:bg-amber-500/20";
      case "Interview Scheduled": return "bg-emerald-500/10 text-emerald-400 border-none hover:bg-emerald-500/20";
      default: return "bg-neutral-500/10 text-neutral-400 border-none hover:bg-neutral-500/20";
     }
  }

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#22a8e7]" />
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
    <div className="mx-auto max-w-[1400px] space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Dashboard</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Welcome back! Here&apos;s a summary of your operations.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {summaryCards.map((card) => (
          <Link key={card.title} href={card.href} className="focus:outline-none focus:ring-2 focus:ring-[#22a8e7] rounded-xl outline-none">
            <Card className="h-full bg-[#0a0a0a] border-[#1a1a1a] transition-all duration-200 hover:border-[#22a8e7]/50 hover:bg-[#111] hover:shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-neutral-400">
                  {card.title}
                </CardTitle>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111] border border-[#1a1a1a]">
                   <card.icon className="h-4 w-4 text-neutral-300 transition-colors group-hover:text-[#22a8e7]" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold tracking-tight text-white mb-1.5">{card.value}</div>
                <div className="flex items-center text-xs">
                  <span className={`flex items-center ${card.trend === "up" ? "text-emerald-500" : "text-rose-500 font-medium"}`}>
                    {card.trend === "up" ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
                    {card.change}
                  </span>
                  <span className="ml-2 text-neutral-500 font-medium">from last month</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Chart and Activity Grid */}
      <div className="grid gap-6 lg:grid-cols-7 lg:gap-8">
        
        {/* Chart Card */}
        <Card className="col-span-1 lg:col-span-4 bg-[#0a0a0a] border-[#1a1a1a] shadow-sm rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg text-white font-medium">Applications Over Time</CardTitle>
            <CardDescription className="text-neutral-500">Monthly applicant volume for the current year</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="month" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0a0a0a",
                    border: "1px solid #1a1a1a",
                    borderRadius: "8px",
                    color: "#fff",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  }}
                  itemStyle={{ color: "#22a8e7" }}
                />
                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="#22a8e7"
                  strokeWidth={2}
                  dot={{ fill: "#0a0a0a", stroke: "#22a8e7", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "#22a8e7" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Applications Card using Shadcn Table */}
        <Card className="col-span-1 lg:col-span-3 bg-[#0a0a0a] border-[#1a1a1a] shadow-sm rounded-xl flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-lg text-white font-medium">Recent Applications</CardTitle>
              <CardDescription className="text-neutral-500 mt-1">Latest candidates.</CardDescription>
            </div>
            <Link
              href="/admin/applicants"
              className="group flex items-center text-sm font-medium text-[#22a8e7] transition-colors hover:text-[#2bc5ff]"
            >
              View all
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </CardHeader>
          <CardContent className="flex-1 px-0 pt-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#1a1a1a] hover:bg-transparent">
                    <TableHead className="text-neutral-500 font-medium px-6">Applicant</TableHead>
                    <TableHead className="text-neutral-500 font-medium">Status</TableHead>
                    <TableHead className="text-right text-neutral-500 font-medium px-6 whitespace-nowrap">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats?.recentApplications.map((app) => (
                    <TableRow key={app.id} className="border-[#1a1a1a]/50 hover:bg-[#111] transition-colors cursor-pointer group">
                      <TableCell className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8 border border-[#1a1a1a]">
                            <AvatarFallback className="bg-[#111] text-xs font-semibold text-neutral-300">
                              {app.firstName[0]}{app.lastName[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">{app.firstName} {app.lastName}</span>
                            <span className="text-xs text-neutral-500 truncate max-w-[150px]">{app.job?.title || "N/A"}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`font-medium select-none ${getStatusStyles(app.status || "New")}`}>
                          {app.status === "Interview Scheduled" ? "Interview" : app.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right px-6 text-sm text-neutral-500 whitespace-nowrap">
                        {app.appliedAt ? new Date(app.appliedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : "N/A"}
                      </TableCell>
                    </TableRow>
                  ))}
                  {stats?.recentApplications.length === 0 && (
                    <TableRow className="border-[#1a1a1a] hover:bg-transparent">
                      <TableCell colSpan={3} className="h-24 text-center text-sm text-neutral-500">
                        No recent applications found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
