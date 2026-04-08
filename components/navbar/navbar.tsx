"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Custom Software Development", href: "/services/custom-software-development", description: "End-to-end scalable software" },
      { label: "Mobile App Development", href: "/services/mobile-app-development", description: "iOS & Android applications" },
      { label: "Web Development", href: "/services/web-development", description: "Responsive & fast web apps" },
      { label: "Cloud & SaaS Solutions", href: "/services/cloud-saas-solutions", description: "Cloud migration & SaaS platforms" },
      { label: "UI/UX Design", href: "/services/ui-ux-design", description: "User-centric design solutions" },
      { label: "Digital Transformation", href: "/services/digital-transformation", description: "Modernizing legacy systems" },
      { label: "Digital Marketing", href: "/services/digital-marketing", description: "SEO, social media & campaigns" },
      { label: "AI, ML & Data Science", href: "/services/ai-ml-data-science", description: "Predictive analytics & automation" },
      { label: "Cybersecurity & Compliance", href: "/services/cybersecurity-compliance", description: "Advanced security practices" },
      { label: "DevOps & Cloud Automation", href: "/services/devops-cloud-automation", description: "CI/CD & containerization" },
    ],
  },
  {
    label: "Industry",
    href: "/industry",
    children: [
      { label: "Healthcare & Lifesciences", href: "/industry/healthcare-lifesciences", description: "HIPAA-compliant digital health solutions" },
      { label: "E-Commerce Solutions", href: "/industry/ecommerce-solutions", description: "Scalable online retail platforms" },
      { label: "Transport & Logistics", href: "/industry/transport-logistics", description: "Fleet & supply chain management" },
      { label: "Social Networking", href: "/industry/social-networking", description: "Community & social platforms" },
      { label: "Real Estate", href: "/industry/real-estate", description: "Property tech & listing platforms" },
      { label: "Education & eLearning", href: "/industry/education-elearning", description: "EdTech & LMS solutions" },
      { label: "Banking, Finance & Insurance", href: "/industry/banking-finance-insurance", description: "Secure fintech solutions" },
      { label: "Travel & Hospitality", href: "/industry/travel-hospitality", description: "Booking & travel platforms" },
      { label: "Enterprise Retail & Manufacturing", href: "/industry/enterprise-retail-manufacturing", description: "IoT & smart factory systems" },
      { label: "Oil & Gas", href: "/industry/oil-gas", description: "Energy sector digital solutions" },
      { label: "Media & Entertainment", href: "/industry/media-entertainment", description: "Streaming & content platforms" },
      { label: "On Demand Delivery", href: "/industry/on-demand-delivery", description: "Delivery & logistics apps" },
      { label: "Home Service", href: "/industry/home-service", description: "On-demand home service platforms" },
      { label: "Fintech", href: "/industry/fintech", description: "Financial technology solutions" },
      { label: "mCommerce", href: "/industry/mcommerce", description: "Mobile commerce platforms" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Support", href: "/resources/support", description: "Help center & technical support" },
      { label: "Contact Us", href: "/resources/contact", description: "Get in touch with our team" },
      { label: "Blogs", href: "/resources/blog", description: "Insights, tutorials & updates" },
      { label: "Careers", href: "/resources/career", description: "Join the CloudNexus team" },
      { label: "Free Consultation", href: "/resources/free-consultation", description: "Book a free strategy session" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "Overview", href: "/company/overview", description: "Who we are & what we do" },
      { label: "Life @ Cloud Nexus", href: "/company/life-at-cloud-nexus", description: "Our culture & work life" },
      { label: "Team", href: "/company/team", description: "Meet the people behind CN" },
      { label: "Events", href: "/company/events", description: "Meetups, webinars & conferences" },
      { label: "About Us", href: "/company/about-us", description: "Our mission, vision & story" },
      { label: "Process Methodology", href: "/company/process-methodology", description: "How we deliver projects" },
      { label: "Infrastructure", href: "/company/infrastructure", description: "Our tech & systems setup" },
      { label: "Career Benefits", href: "/company/career-benefits", description: "Perks of working with us" },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", onKeyDown, {
      passive: true,
    } as AddEventListenerOptions);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/[0.08] bg-white shadow-lg shadow-black/5 backdrop-blur-2xl dark:border-white/[0.10] dark:bg-black/98 dark:shadow-black/40"
          : "border-b border-black/[0.04] bg-white backdrop-blur-xl dark:border-white/[0.06] dark:bg-black/95"
      }`}
    >
      <div className="mx-auto flex h-[58px] max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* ── Logo ── */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-black dark:text-white"
        >
          <div className="relative h-10 w-48 sm:h-11 sm:w-52 transition-all">
            <Image
              src="/asset/cn-logo.png"
              alt="Cloud Nexus Logo"
              className="object-contain dark:invert dark:hue-rotate-180"
              fill
              sizes="176px"
              priority
            />
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1" role="list">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    openDropdown === item.label
                      ? "text-black dark:text-white"
                      : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  }`}
                  aria-expanded={openDropdown === item.label}
                >
                  {item.href ? (
                    <Link href={item.href} className="hover:text-black dark:hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <button onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}>
                      {item.label}
                    </button>
                  )}
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="p-0.5"
                    aria-label={`Toggle ${item.label} menu`}
                  >
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown panel */}
                {openDropdown === item.label && item.children && (
                  <div className="absolute left-1/2 top-full pt-2 -translate-x-1/2">
                    <div
                      className={`rounded-xl border border-black/[0.08] bg-white shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/[0.08] dark:bg-[#0a0a0a] dark:shadow-black/60 overflow-hidden ${
                        item.children.length > 10 ? "w-[720px]" : item.children.length > 6 ? "w-[520px]" : "w-[280px]"
                      }`}
                    >
                      {item.label === "Industry" && (
                        <>
                          <Link
                            href="/our-work"
                            className="group flex items-center gap-3 mx-2 mt-2 px-4 py-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] border border-black/[0.06] dark:border-white/[0.06] transition-all"
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black dark:bg-white text-white dark:text-black flex-shrink-0">
                              <ArrowRight size={16} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-black dark:text-white">
                                Our Work
                              </span>
                              <span className="text-[11px] text-black/45 dark:text-white/45">
                                View all projects & case studies
                              </span>
                            </div>
                          </Link>
                          <div className="mx-4 my-2 h-px bg-black/[0.06] dark:bg-white/[0.06]" />
                        </>
                      )}
                      <div
                        className={`p-2 ${
                          item.children.length > 10 ? "grid grid-cols-3 gap-0.5" : item.children.length > 6 ? "grid grid-cols-2 gap-0.5" : ""
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                          >
                            <span className="text-sm font-medium text-black/90 group-hover:text-black dark:text-white/90 dark:group-hover:text-white">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="text-xs text-black/40 group-hover:text-black/55 dark:text-white/40 dark:group-hover:text-white/55">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center h-9 w-9 rounded-lg text-black/60 hover:bg-black/[0.06] hover:text-black dark:text-white/60 dark:hover:bg-white/[0.06] dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={18} strokeWidth={1.5} />
              ) : (
                <Moon size={18} strokeWidth={1.5} />
              )}
            </button>
          )}

          <div className="hidden lg:block">
            <Link href="/resources/free-consultation">
              <Button size="sm" className="bg-black text-white dark:bg-white dark:text-black rounded-sm hover:bg-black/80 dark:hover:bg-white/80">
              Join Now
                <ArrowRight
                  size={14}
                  className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Button>
            </Link>
          </div>

          <button
            className="flex lg:hidden items-center justify-center h-9 w-9 rounded-lg text-black/60 transition-colors hover:bg-black/[0.06] hover:text-black dark:text-white/60 dark:hover:bg-white/[0.06] dark:hover:text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-black/[0.06] bg-white max-h-[calc(100dvh-58px)] overflow-y-auto dark:border-white/[0.06] dark:bg-[#080808]">
          <nav className="flex flex-col gap-0.5 px-3 py-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-black/60 transition-colors hover:bg-black/[0.04] hover:text-black dark:text-white/60 dark:hover:bg-white/[0.04] dark:hover:text-white"
                  aria-expanded={mobileExpanded === item.label}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === item.label && item.children && (
                  <div className="ml-3 flex flex-col gap-0.5 border-l border-black/[0.06] pl-3 py-1 dark:border-white/[0.06]">
                    {item.label === "Industry" && (
                      <>
                        <Link
                          href="/our-work"
                          onClick={() => setMobileOpen(false)}
                          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors"
                        >
                          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black dark:bg-white text-white dark:text-black flex-shrink-0">
                            <ArrowRight size={14} strokeWidth={2} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-black dark:text-white">Our Work</span>
                            <span className="text-[10px] text-black/45 dark:text-white/45">All projects & case studies</span>
                          </div>
                        </Link>
                        <div className="mx-2 my-1.5 h-px bg-black/[0.06] dark:bg-white/[0.06]" />
                      </>
                    )}
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex flex-col gap-0.5 rounded-lg px-3 py-2 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                      >
                        <span className="text-sm text-black/70 group-hover:text-black dark:text-white/70 dark:group-hover:text-white">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="text-xs text-black/35 group-hover:text-black/50 dark:text-white/35 dark:group-hover:text-white/50">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="px-5 pt-2 pb-6 border-t border-black/[0.06] dark:border-white/[0.06]">
            <Link href="/resources/free-consultation" onClick={() => setMobileOpen(false)}>
              <Button className="w-full rounded-sm bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80">
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
