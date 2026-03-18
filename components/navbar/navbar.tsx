"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDown, LifeBuoy, Mail } from "lucide-react";
import { ServicesDropdown } from "./services-dropdown";
import { CompanyDropdown } from "./company-dropdown";
import { Button } from "@/components/ui/button";

// ─── Help items inline ────────────────────────────────────────────
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
    href: "/help/contact",
  },
];

// ─── Dropdown hook with leave-delay ──────────────────────────────
function useDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 100);
  };

  const close = () => setOpen(false);

  return { open, handleEnter, handleLeave, close };
}

// ─── Navbar ───────────────────────────────────────────────────────
export function Navbar() {
  const services = useDropdown();
  const company = useDropdown();
  const help = useDropdown();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-black/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[58px] max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-white"
          onClick={() => { services.close(); company.close(); help.close(); }}
        >
          {/* Simple wordmark — replace with your SVG logo */}
          <span className="text-white">CN</span>
        </Link>

        {/* ── Center nav ── */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1" role="list">

            {/* Home */}
            <li>
              <Link
                href="/"
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
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
                className="flex items-center gap-[3px] rounded-md px-3 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
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
                className="flex items-center gap-[3px] rounded-md px-3 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
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
                className="flex items-center gap-[3px] rounded-md px-3 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                Help
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className={`mt-px transition-transform duration-200 ${help.open ? "rotate-180" : ""}`}
                />
              </button>

              {/* Help inline dropdown */}
              {help.open && (
                <div
                  className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={help.handleLeave}
                >
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
              )}
            </li>

          </ul>
        </nav>

        {/* ── CTA ── */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button
              variant="outline"
              size="sm"
              className="rounded-sm hover:bg-white hover:text-black"
            >
              Get Started
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}
