"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  UserCheck,
  TrendingUp,
  FileText,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navigationItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Jobs", path: "/admin/jobs", icon: Briefcase },
  { name: "Applicants", path: "/admin/applicants", icon: UserCheck },
  { name: "Leads", path: "/admin/leads", icon: TrendingUp },
  { name: "Blog", path: "/admin/blog", icon: FileText },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    // router.push("/login");
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-56 bg-[#0a0a0a] border-r border-[#1a1a1a] flex-col">
        {/* Logo */}
        <div className="px-6 py-6">
          <Image 
            src="/assets/admin-logo.png" 
            alt="Cloud Nexus" 
            width={150} 
            height={40} 
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-0.5">
          {navigationItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-all text-sm ${
                  isActive
                    ? "bg-[#22a8e7]/10 text-[#22a8e7] border-l-2 border-[#22a8e7]"
                    : "text-gray-400 hover:text-white hover:bg-[#141414]"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-3">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:text-white hover:bg-[#141414] transition-all w-full text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setShowMobileMenu(false)}
          ></div>

          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-[#0a0a0a] border-r border-[#1a1a1a] flex flex-col">
            <div className="px-6 py-6 flex items-center justify-between">
              <Image 
                src="/assets/admin-logo.png" 
                alt="Cloud Nexus" 
                width={120} 
                height={32} 
                className="w-32 h-auto"
              />
              <button
                onClick={() => setShowMobileMenu(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 px-3 space-y-0.5">
              {navigationItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setShowMobileMenu(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-all text-sm ${
                      isActive
                      ? "bg-[#22a8e7]/10 text-[#22a8e7] border-l-2 border-[#22a8e7]"
                        : "text-gray-400 hover:text-white hover:bg-[#141414]"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-3">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:text-white hover:bg-[#141414] transition-all w-full text-sm"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-[#0a0a0a] border-b border-[#1a1a1a] px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <button
                onClick={() => setShowMobileMenu(true)}
                className="md:hidden text-gray-400 hover:text-white"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-[#141414] text-white text-sm pl-9 pr-4 py-2 rounded-md border border-[#1a1a1a] focus:outline-none focus:border-[#2a2a2a] placeholder:text-gray-600"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 ml-2 md:ml-8">
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 md:gap-3 hover:bg-[#141414] rounded-md px-1.5 md:px-2 py-1.5 transition-colors"
                >
                  <div className="w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white text-sm">
                    AD
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="text-sm text-white">Admin User</div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg shadow-lg py-1 z-50">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#141414]">
                      Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#141414]">
                      Settings
                    </button>
                    <hr className="my-1 border-[#1a1a1a]" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#141414]"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-black p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
