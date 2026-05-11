"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown, Sun, Moon, Smartphone, Globe, Code2, Users, Boxes, Palette, Zap, ShoppingBag, Cloud, Megaphone, Settings, Rocket, ServerCog, Layout, Monitor, HeartPulse, Truck, Share2, Building2, GraduationCap, Landmark, Plane, Factory, Droplets, Film, PackageCheck, Wrench, Wallet, ShoppingCart, LifeBuoy, Mail, BookOpen, Briefcase, CalendarCheck, Eye, Heart, UserCircle, Calendar, Info, GitBranch, Server, Gift } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/navbar/language-switcher";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";

interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

interface NavItem {
  id?: string;
  label: string;
  href?: string;
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "services",
    label: "Services",
    href: "/services",
    children: [
      { label: "Mobile App Development", href: "/services/mobile-app-development", description: "iOS & Android applications", icon: Smartphone },
      { label: "Web Development", href: "/services/web-development", description: "Responsive & fast web apps", icon: Globe },
      { label: "Software Development", href: "/services/software-development", description: "Full-cycle software solutions", icon: Code2 },
      { label: "Hire Dedicated Developers", href: "/services/hire-dedicated-developers", description: "Scale your team on demand", icon: Users },
      { label: "Product Engineering", href: "/services/product-engineering", description: "Idea to market-ready product", icon: Boxes },
      { label: "WordPress Development", href: "/services/wordpress-development", description: "Custom themes & plugins", icon: Layout },
      { label: "UI/UX Design", href: "/services/ui-ux-design", description: "User-centric design solutions", icon: Palette },
      { label: "Digital Transformation", href: "/services/digital-transformation", description: "Modernizing legacy systems", icon: Zap },
      { label: "E-Commerce Development", href: "/services/ecommerce-development", description: "Online store platforms", icon: ShoppingBag },
      { label: "SaaS Development", href: "/services/saas-development", description: "Multi-tenant SaaS products", icon: Cloud },
      { label: "Digital Marketing", href: "/services/digital-marketing", description: "SEO, social media & campaigns", icon: Megaphone },
      { label: "Technology Consulting", href: "/services/technology-consulting", description: "Strategic tech advisory", icon: Settings },
      { label: "MVP Development", href: "/services/mvp-development", description: "Rapid prototype & launch", icon: Rocket },
      { label: "Cloud Services", href: "/services/cloud-services", description: "AWS, Azure & GCP solutions", icon: ServerCog },
      { label: "IT Consulting", href: "/services/it-consulting", description: "Infrastructure & IT strategy", icon: Monitor },
    ],
  },
  {
    id: "industry",
    label: "Industry",
    href: "/industry",
    children: [
      { label: "Healthcare & Lifesciences", href: "/industry/healthcare-lifesciences", description: "HIPAA-compliant digital health solutions", icon: HeartPulse },
      { label: "E-Commerce Solutions", href: "/industry/ecommerce-solutions", description: "Scalable online retail platforms", icon: ShoppingCart },
      { label: "Transport & Logistics", href: "/industry/transport-logistics", description: "Fleet & supply chain management", icon: Truck },
      { label: "Social Networking", href: "/industry/social-networking", description: "Community & social platforms", icon: Share2 },
      { label: "Real Estate", href: "/industry/real-estate", description: "Property tech & listing platforms", icon: Building2 },
      { label: "Education & eLearning", href: "/industry/education-elearning", description: "EdTech & LMS solutions", icon: GraduationCap },
      { label: "Banking, Finance & Insurance", href: "/industry/banking-finance-insurance", description: "Secure fintech solutions", icon: Landmark },
      { label: "Travel & Hospitality", href: "/industry/travel-hospitality", description: "Booking & travel platforms", icon: Plane },
      { label: "Enterprise Retail & Manufacturing", href: "/industry/enterprise-retail-manufacturing", description: "IoT & smart factory systems", icon: Factory },
      { label: "Oil & Gas", href: "/industry/oil-gas", description: "Energy sector digital solutions", icon: Droplets },
      { label: "Media & Entertainment", href: "/industry/media-entertainment", description: "Streaming & content platforms", icon: Film },
      { label: "On Demand Delivery", href: "/industry/on-demand-delivery", description: "Delivery & logistics apps", icon: PackageCheck },
      { label: "Home Service", href: "/industry/home-service", description: "On-demand home service platforms", icon: Wrench },
      { label: "Fintech", href: "/industry/fintech", description: "Financial technology solutions", icon: Wallet },
      { label: "mCommerce", href: "/industry/mcommerce", description: "Mobile commerce platforms", icon: Smartphone },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Support", href: "/resources/support", description: "Help center & technical support", icon: LifeBuoy },
      { label: "Contact Us", href: "/resources/contact", description: "Get in touch with our team", icon: Mail },
      { label: "Blogs", href: "/resources/blog", description: "Insights, tutorials & updates", icon: BookOpen },
      { label: "Careers", href: "/resources/career", description: "Join the CloudNexus team", icon: Briefcase },
      { label: "Free Consultation", href: "/resources/free-consultation", description: "Book a free strategy session", icon: CalendarCheck },
    ],
  },
  {
    id: "company",
    label: "Company",
    href: "/company",
    children: [
      { label: "Overview", href: "/company/overview", description: "Who we are & what we do", icon: Eye },
      { label: "Life @ Cloud Nexus", href: "/company/life-at-cloud-nexus", description: "Our culture & work life", icon: Heart },
      { label: "Team", href: "/company/team", description: "Meet the people behind CN", icon: Users },
      { label: "Events", href: "/company/events", description: "Meetups, webinars & conferences", icon: Calendar },
      { label: "About Us", href: "/company/about-us", description: "Our mission, vision & story", icon: Info },
      { label: "Process Methodology", href: "/company/process-methodology", description: "How we deliver projects", icon: GitBranch },
      { label: "Infrastructure", href: "/company/infrastructure", description: "Our office & workspace", icon: Server },
      { label: "Career Benefits", href: "/company/career-benefits", description: "Perks of working with us", icon: Gift },
    ],
  },
];

const NAV_LABEL_KEYS: Record<string, string> = {
  services: "nav.services",
  industry: "nav.industry",
  resources: "nav.resources",
  company: "nav.company",
};

export function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const translatedNavItems = useTranslatedData(NAV_ITEMS);
  const tNav = (item: NavItem) => t(NAV_LABEL_KEYS[item.id ?? ""] ?? item.label, item.label);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 12);

      if (currentY < 60) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 5) {
        setHidden(true);
        setOpenDropdown(null);
      } else if (currentY < lastScrollY.current - 5) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
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
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        hidden && !mobileOpen
          ? "-translate-y-full shadow-none"
          : "translate-y-0"
      } ${
        scrolled
          ? "border-b border-black/[0.08] bg-white/95 shadow-lg shadow-black/5 backdrop-blur-2xl dark:border-white/[0.10] dark:bg-black/95 dark:shadow-black/40"
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
              className="object-contain [filter:saturate(1.6)_hue-rotate(-12deg)_brightness(0.7)_contrast(1.15)] dark:[filter:invert(1)_hue-rotate(180deg)_saturate(1.2)_brightness(1.15)]"
              fill
              sizes="176px"
              priority
            />
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1" role="list">
            {translatedNavItems.map((item) => (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id!)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    openDropdown === item.id
                      ? "text-black dark:text-white"
                      : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  }`}
                  aria-expanded={openDropdown === item.id}
                >
                  {item.href ? (
                    <Link href={item.href} className="hover:text-black dark:hover:text-white transition-colors">
                      {tNav(item)}
                    </Link>
                  ) : (
                    <button onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id!)}>
                      {tNav(item)}
                    </button>
                  )}
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id!)}
                    className="p-0.5"
                    aria-label={`Toggle ${item.id} menu`}
                  >
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown panel */}
                {openDropdown === item.id && item.children && (
                  <div className="absolute left-1/2 top-full pt-2 -translate-x-1/2">
                    <div
                      className={`rounded-xl border border-black/[0.08] bg-white shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/[0.08] dark:bg-[#0a0a0a] dark:shadow-black/60 overflow-hidden ${
                        item.children.length > 10 ? "w-[720px]" : item.children.length > 6 ? "w-[520px]" : "w-[280px]"
                      }`}
                    >
                      {item.id === "industry" && (
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
                                {t("nav.ourWork", "Our Work")}
                              </span>
                              <span className="text-[11px] text-black/45 dark:text-white/45">
                                {t("nav.ourWorkDesc", "View all projects & case studies")}
                              </span>
                            </div>
                          </Link>
                          <div className="mx-4 my-2 h-px bg-black/[0.06] dark:bg-white/[0.06]" />
                        </>
                      )}
                      <div
                        className={`p-2.5 ${
                          item.children.length > 10
                            ? "grid grid-cols-3 gap-2"
                            : item.children.length > 6
                              ? "grid grid-cols-2 gap-2"
                              : "grid grid-cols-1 gap-1"
                        }`}
                      >
                        {item.children.map((child) => {
                          const ChildIcon = child.icon;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] border border-transparent hover:border-black/[0.06] dark:hover:border-white/[0.08]"
                            >
                              {ChildIcon && (
                                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-black/[0.04] dark:bg-white/[0.06] group-hover:bg-[#4EB3E8]/10 transition-colors duration-200">
                                  <ChildIcon className="w-4 h-4 text-black/50 dark:text-white/50 group-hover:text-[#4EB3E8] transition-colors duration-200" strokeWidth={1.8} />
                                </div>
                              )}
                              <div className="flex flex-col min-w-0">
                                <span className="text-[13px] font-semibold text-black/85 group-hover:text-black dark:text-white/85 dark:group-hover:text-white leading-tight">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-[11px] text-black/35 group-hover:text-black/50 dark:text-white/35 dark:group-hover:text-white/50 leading-tight mt-0.5">
                                    {child.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          );
                        })}
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
          <LanguageSwitcher />

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
              {t("nav.joinNow")}
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
            {translatedNavItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.id ? null : item.id!
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-black/60 transition-colors hover:bg-black/[0.04] hover:text-black dark:text-white/60 dark:hover:bg-white/[0.04] dark:hover:text-white"
                  aria-expanded={mobileExpanded === item.id}
                >
                  {tNav(item)}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === item.id && item.children && (
                  <div className="ml-3 flex flex-col gap-0.5 border-l border-black/[0.06] pl-3 py-1 dark:border-white/[0.06]">
                    {item.id === "industry" && (
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
                            <span className="text-sm font-semibold text-black dark:text-white">{t("nav.ourWork", "Our Work")}</span>
                            <span className="text-[10px] text-black/45 dark:text-white/45">{t("nav.allProjects", "All projects & case studies")}</span>
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
                {t("nav.getStarted", "Get Started")}
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
    <div className="h-[58px]" />
    </>
  );
}
