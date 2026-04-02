"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  LifeBuoy,
  Mail,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { ServicesDropdown } from "./services-dropdown";
import { CompanyDropdown } from "./company-dropdown";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Smartphone,
  Globe,
  BarChart3,
  Cloud,
  Cpu,
  Layers,
  Database,
  Palette,
  ShieldCheck,
  Info,
  BookOpen,
  Briefcase,
  Lightbulb,
} from "lucide-react";

// ─── Help items ────────────────────────────────────────────────────
const helpLinks = [
  {
    icon: LifeBuoy,
    label: "Support",
    description: "Get help with anything",
    href: "/help/support",
  },
  {
    icon: Mail,
    label: "Contact",
    description: "Reach our team directly",
    href: "/contact",
  },
];

// ─── Mobile nav data ───────────────────────────────────────────────
const mobileServices = [
  { icon: Smartphone, label: "App Development", href: "/services#app-development" },
  { icon: Globe, label: "Web Development", href: "/services#web-development" },
  { icon: BarChart3, label: "Data Science", href: "/services#data-science" },
  { icon: Cloud, label: "Cloud & DevOps", href: "/services#cloud-devops" },
  { icon: Cpu, label: "IoT & Automation", href: "/services#iot-automation" },
  { icon: Layers, label: "System Design", href: "/services#system-design" },
  { icon: Database, label: "Big Data", href: "/services#big-data" },
  { icon: Palette, label: "UI / UX", href: "/services#ui-ux" },
  { icon: ShieldCheck, label: "Cybersecurity", href: "/services#cybersecurity" },
];

const mobileCompany = [
  { icon: Info, label: "About", href: "/company#about" },
  { icon: BookOpen, label: "Blog", href: "/company#blog" },
  { icon: Briefcase, label: "Careers", href: "/company#careers" },
  { icon: Lightbulb, label: "Philosophy", href: "/company#philosophy" },
];

// ─── Dropdown hook with leave-delay & Escape ──────────────────────
function useDropdown(id: string, setActive: (id: string | null) => void, activeId: string | null) {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const open = activeId === id;

  const handleEnter = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(id);
  }, [id, setActive]);

  const handleLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActive(null), 100);
  }, [setActive]);

  const close = useCallback(() => setActive(null), [setActive]);

  return { open, handleEnter, handleLeave, close };
}

// ─── Navbar ───────────────────────────────────────────────────────
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape key closes any open dropdown
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    document.addEventListener("keydown", onKeyDown, { passive: true } as AddEventListenerOptions);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const services = useDropdown("services", setActiveDropdown, activeDropdown);
  const company = useDropdown("company", setActiveDropdown, activeDropdown);
  const help = useDropdown("help", setActiveDropdown, activeDropdown);

  const isActive = useCallback((href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)
    , [pathname]);

  const navLinkClass = useCallback((href: string) =>
    `rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${isActive(href) ? "text-white" : "text-white/60 hover:text-white"
    }`
    , [isActive]);

  const dropdownBtnClass = useCallback((key: string) =>
    `flex items-center gap-[3px] rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${activeDropdown === key || isActive(`/${key}`)
      ? "text-white"
      : "text-white/60 hover:text-white"
    }`
    , [activeDropdown, isActive]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "border-b border-white/[0.10] bg-black/98 shadow-lg shadow-black/40 backdrop-blur-2xl"
        : "border-b border-white/[0.06] bg-black/95 backdrop-blur-xl"
        }`}
    >
      <div className="mx-auto flex h-[58px] max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-white"
          onClick={() => setActiveDropdown(null)}
        >
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 transition-all">
            <Image src="/asset/cn-icon.png" alt="Cloud Nexus Logo" className="object-contain" fill sizes="40px" />
          </div>
          <span className="hidden sm:inline-block text-white">CloudNexus</span>
        </Link>

        {/* ── Center nav (desktop) ── */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1" role="list">

            {/* Home */}
            <li>
              <Link href="/" className={navLinkClass("/")}>
                Home
              </Link>
            </li>

            {/* Services */}
            <li
              className="relative"
              onMouseEnter={services.handleEnter}
              onMouseLeave={services.handleLeave}
            >
              <button
                aria-expanded={services.open}
                aria-haspopup="true"
                className={dropdownBtnClass("services")}
              >
                Services
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className={`mt-px transition-transform duration-200 ${services.open ? "rotate-180" : ""}`}
                />
              </button>
              {services.open && <ServicesDropdown onClose={services.close} />}
            </li>

            {/* Company */}
            <li
              className="relative"
              onMouseEnter={company.handleEnter}
              onMouseLeave={company.handleLeave}
            >
              <button
                aria-expanded={company.open}
                aria-haspopup="true"
                className={dropdownBtnClass("company")}
              >
                Company
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className={`mt-px transition-transform duration-200 ${company.open ? "rotate-180" : ""}`}
                />
              </button>
              {company.open && <CompanyDropdown onClose={company.close} />}
            </li>

            {/* Help */}
            <li
              className="relative"
              onMouseEnter={help.handleEnter}
              onMouseLeave={help.handleLeave}
            >
              <button
                aria-expanded={help.open}
                aria-haspopup="true"
                className={dropdownBtnClass("help")}
              >
                Help
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className={`mt-px transition-transform duration-200 ${help.open ? "rotate-180" : ""}`}
                />
              </button>

              {help.open && (
                <div
                  className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2"
                  onMouseLeave={help.handleLeave}
                >
                  <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-white/[0.08] bg-[#111]" />
                    <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-3 shadow-2xl shadow-black/60 backdrop-blur-xl">
                      <ul className="flex flex-col gap-0.5" role="list">
                        {helpLinks.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={help.close}
                                className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.05]"
                              >
                                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-white/60 transition-colors group-hover:bg-white/10 group-hover:text-white">
                                  <Icon size={13} strokeWidth={1.5} />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-white/90 group-hover:text-white">
                                    {item.label}
                                  </p>
                                  <p className="text-xs text-white/40">{item.description}</p>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>

          </ul>
        </nav>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3">
          {/* CTA button (desktop) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-white text-black rounded-sm"
              >
                Get Started
                <ArrowRight
                  size={14}
                  className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="flex md:hidden items-center justify-center h-9 w-9 rounded-lg text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
                aria-label="Open menu"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-l border-white/[0.08] bg-[#080808] p-0 text-white"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-base font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="relative h-8 w-8">
                    <Image src="/asset/cn-icon.png" alt="Cloud Nexus Logo" className="object-contain" fill sizes="32px" />
                  </div>
                  <span>Cloud Nexus</span>
                </Link>
                <SheetClose asChild>
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white">
                    <X size={16} strokeWidth={1.5} />
                  </button>
                </SheetClose>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto flex flex-col gap-0.5 px-3 py-4">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${pathname === "/" ? "bg-white/[0.07] text-white" : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                    }`}
                >
                  Home
                </Link>

                {/* Services collapsible */}
                <MobileCollapsible label="Services" isActive={pathname.startsWith("/services")}>
                  {mobileServices.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white"
                      >
                        <Icon size={13} strokeWidth={1.5} className="shrink-0 text-white/30 group-hover:text-white/60" />
                        {item.label}
                      </Link>
                    );
                  })}
                </MobileCollapsible>

                {/* Company collapsible */}
                <MobileCollapsible label="Company" isActive={pathname.startsWith("/company")}>
                  {mobileCompany.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white"
                      >
                        <Icon size={13} strokeWidth={1.5} className="shrink-0 text-white/30 group-hover:text-white/60" />
                        {item.label}
                      </Link>
                    );
                  })}
                </MobileCollapsible>

                {/* Help collapsible */}
                <MobileCollapsible label="Help" isActive={pathname.startsWith("/help")}>
                  {helpLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white"
                      >
                        <Icon size={13} strokeWidth={1.5} className="shrink-0 text-white/30 group-hover:text-white/60" />
                        {item.label}
                      </Link>
                    );
                  })}
                </MobileCollapsible>
              </nav>

              {/* Mobile CTA */}
              <div className="px-5 pt-2 pb-6 border-t border-white/[0.06] mt-auto">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full rounded-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-900/30">
                    Get Started
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}

// ─── Mobile collapsible section ───────────────────────────────────
function MobileCollapsible({
  label,
  isActive,
  children,
}: {
  label: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button
          className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? "bg-white/[0.07] text-white" : "text-white/60 hover:bg-white/[0.04] hover:text-white"
            }`}
        >
          {label}
          <ChevronDown
            size={14}
            strokeWidth={2}
            className={`text-white/30 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-2 pt-0.5 flex flex-col gap-0.5 overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1 duration-150">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
