"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Navbar ───────────────────────────────────────────────────────
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape key closes mobile menu
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown, { passive: true } as AddEventListenerOptions);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const navLinkClass = (href: string) =>
    `rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
      href === "/" ? pathname === "/" : pathname.startsWith(href)
        ? "text-white"
        : "text-white/60 hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.10] bg-black/98 shadow-lg shadow-black/40 backdrop-blur-2xl"
          : "border-b border-white/[0.06] bg-black/95 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[58px] max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-white"
        >
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 transition-all">
            <Image src="/asset/cn-icon.png" alt="Cloud Nexus Logo" className="object-contain" fill sizes="40px" />
          </div>
          <span className="hidden sm:inline-block text-white">CloudNexus</span>
        </Link>

        {/* ── Center nav (desktop) ── */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1" role="list">
            <li>
              <Link href="/" className={navLinkClass("/")}>
                Home
              </Link>
            </li>
          </ul>
        </nav>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3">
          {/* CTA button (desktop) */}
          <div className="hidden md:block">
            <Link href="#contact">
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
          <button
            className="flex md:hidden items-center justify-center h-9 w-9 rounded-lg text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#080808]">
          <nav className="flex flex-col gap-0.5 px-3 py-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "bg-white/[0.07] text-white"
                  : "text-white/60 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              Home
            </Link>
          </nav>
          <div className="px-5 pt-2 pb-6 border-t border-white/[0.06]">
            <Link href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full rounded-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-900/30">
                Get Started
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
