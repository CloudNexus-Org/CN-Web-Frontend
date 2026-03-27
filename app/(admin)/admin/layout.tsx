"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Menu,
} from "lucide-react";
import Image from "next/image";

// Shadcn UI Imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const navigationItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Jobs", path: "/admin/jobs", icon: Briefcase },
  { name: "Applicants", path: "/admin/applicants", icon: UserCheck },
  { name: "Leads", path: "/admin/leads", icon: TrendingUp },
  { name: "Blog", path: "/admin/blog", icon: FileText },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];

// Move SidebarContent outside of component to avoid recreation on each render
const SidebarContent = ({ pathname, handleLogout }: { pathname: string; handleLogout: () => void }) => (
  <div className="flex flex-col h-full bg-[#0a0a0a]">
    {/* Logo */}
    <div className="px-6 py-6 border-b border-[#1a1a1a]">
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
    <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
      {navigationItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-all text-sm font-medium ${
              isActive
                ? "bg-[#22a8e7]/10 text-[#22a8e7] border-l-2 border-[#22a8e7]"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>

    {/* Logout */}
    <div className="p-4 border-t border-[#1a1a1a]">
      <Button
        variant="ghost"
        className="w-full justify-start text-neutral-400 hover:text-red-400 hover:bg-neutral-900"
        onClick={handleLogout}
      >
        <LogOut className="w-4 h-4 mr-3" />
        Logout
      </Button>
    </div>
  </div>
);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex h-screen bg-black text-white selection:bg-[#22a8e7]/30">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-[#1a1a1a]">
        <SidebarContent pathname={pathname} handleLogout={handleLogout} />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-black">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-md px-6">
          
          {/* Mobile Sidebar Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-neutral-400 hover:text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0 border-[#1a1a1a] bg-[#0a0a0a]">
              <SidebarContent pathname={pathname} handleLogout={handleLogout} />
            </SheetContent>
          </Sheet>

          {/* Search */}
          <div className="flex-1">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="w-full bg-[#111111] border-[#1a1a1a] pl-9 text-sm text-white placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-[#22a8e7] focus-visible:ring-offset-0 rounded-lg"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative text-neutral-400 hover:text-white rounded-full">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-[#0a0a0a]"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full select-none">
                  <Avatar className="h-9 w-9 border border-[#1a1a1a]">
                    <AvatarFallback className="bg-[#111] text-xs font-medium text-white">AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-[#0a0a0a] border-[#1a1a1a] text-white p-1 rounded-xl">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-0.5 leading-none">
                    <p className="font-medium text-sm">Admin User</p>
                    <p className="text-xs text-neutral-500">admin@cloudnexus.io</p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-[#1a1a1a]" />
                <DropdownMenuItem className="focus:bg-[#111] focus:text-white cursor-pointer rounded-lg text-sm">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#111] focus:text-white cursor-pointer rounded-lg text-sm">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#1a1a1a]" />
                <DropdownMenuItem 
                  className="focus:bg-red-500/10 focus:text-red-500 text-red-400 cursor-pointer rounded-lg text-sm"
                  onClick={handleLogout}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
