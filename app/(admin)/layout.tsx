"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Users,
  Mail,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { AdminAuthProvider, useAdminAuth } from "@/lib/admin-auth-context"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/blogs", label: "Blogs", icon: FileText },
  { href: "/admin/jobs", label: "Job Postings", icon: Briefcase },
  { href: "/admin/applications", label: "Applications", icon: Users },
  { href: "/admin/contacts", label: "Contacts", icon: Mail },
]

function AdminShell({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAdminAuth()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (pathname === "/admin/login" || pathname === "/admin/signup")
    return <>{children}</>

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5] dark:bg-[#0a0a0a]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#4EB3E8] border-t-transparent" />
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] dark:bg-[#0a0a0a]">
      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-black/[0.06] bg-white transition-transform duration-300 lg:static dark:border-white/[0.06] dark:bg-[#111] ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex h-16 items-center gap-3 border-b border-black/[0.06] px-5 dark:border-white/[0.06]">
          <Link
            href="/admin"
            className="relative h-[34px] w-[120px] flex-shrink-0"
          >
            <Image
              src="/asset/cn-logo.png"
              alt="Cloud Nexus"
              fill
              className="object-contain [filter:saturate(1.6)_hue-rotate(-12deg)_brightness(0.7)_contrast(1.15)] dark:[filter:invert(1)_hue-rotate(180deg)_saturate(1.2)_brightness(1.15)]"
              sizes="120px"
            />
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <span className="hidden text-[9px] font-semibold tracking-wider text-black/30 uppercase sm:block dark:text-white/25">
              Admin
            </span>
            <button
              className="p-1 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const active =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#4EB3E8]/10 text-[#4EB3E8]"
                    : "text-black/60 hover:bg-black/[0.04] hover:text-black dark:text-white/50 dark:hover:bg-white/[0.04] dark:hover:text-white"
                }`}
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                {item.label}
                {active && <ChevronRight className="ml-auto h-3.5 w-3.5" />}
              </Link>
            )
          })}
        </nav>

        <div className="sticky bottom-0 border-t border-black/[0.06] bg-white p-3 dark:border-white/[0.06] dark:bg-[#111]">
          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500/70 transition-all duration-200 hover:bg-red-500/[0.06] hover:text-red-500"
          >
            <LogOut className="h-4.5 w-4.5" strokeWidth={1.5} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-16 items-center gap-4 border-b border-black/[0.06] bg-white px-6 dark:border-white/[0.06] dark:bg-[#111]">
          <button
            className="rounded-lg p-1.5 hover:bg-black/[0.04] lg:hidden dark:hover:bg-white/[0.04]"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.06] bg-black/[0.02] text-black/50 transition-all duration-300 hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/5 hover:text-black dark:border-white/[0.06] dark:bg-white/[0.04] dark:text-white/50 dark:hover:text-white"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Moon className="h-4 w-4" strokeWidth={1.5} />
                )}
              </button>
            )}
            <div className="hidden text-right sm:block">
              <div className="text-xs font-semibold">{user.name}</div>
              <div className="text-[10px] text-black/40 dark:text-white/35">
                {user.email}
              </div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#4EB3E8]/20 bg-[#4EB3E8]/10">
              <span className="text-xs font-bold text-[#4EB3E8]">
                {user.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminAuthProvider>
      <AdminShell>{children}</AdminShell>
    </AdminAuthProvider>
  )
}
