"use client";

import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';
import { useTranslatedData } from '@/lib/i18n/translate-data';

const FOOTER_LINKS = {
  services: [
    { href: "/services/mobile-app-development", label: "Mobile App Development" },
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/software-development", label: "Software Development" },
    { href: "/services/hire-dedicated-developers", label: "Hire Dedicated Developers" },
    { href: "/services/product-engineering", label: "Product Engineering" },
    { href: "/services/wordpress-development", label: "WordPress Development" },
    { href: "/services/ui-ux-design", label: "UI/UX Design" },
    { href: "/services/digital-transformation", label: "Digital Transformation" },
  ],
  moreServices: [
    { href: "/services/ecommerce-development", label: "E-Commerce Development" },
    { href: "/services/saas-development", label: "SaaS Development" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/technology-consulting", label: "Technology Consulting" },
    { href: "/services/mvp-development", label: "MVP Development" },
    { href: "/services/cloud-services", label: "Cloud Services" },
    { href: "/services/it-consulting", label: "IT Consulting" },
  ],
  industries: [
    { href: "/industry/healthcare-lifesciences", label: "Healthcare & Lifesciences" },
    { href: "/industry/ecommerce-solutions", label: "E-Commerce Solutions" },
    { href: "/industry/transport-logistics", label: "Transport & Logistics" },
    { href: "/industry/social-networking", label: "Social Networking" },
    { href: "/industry/real-estate", label: "Real Estate" },
    { href: "/industry/education-elearning", label: "Education & eLearning" },
    { href: "/industry/banking-finance-insurance", label: "Banking & Finance" },
    { href: "/industry/travel-hospitality", label: "Travel & Hospitality" },
  ],
  moreIndustries: [
    { href: "/industry/enterprise-retail-manufacturing", label: "Retail & Manufacturing" },
    { href: "/industry/oil-gas", label: "Oil & Gas" },
    { href: "/industry/media-entertainment", label: "Media & Entertainment" },
    { href: "/industry/on-demand-delivery", label: "On Demand Delivery" },
    { href: "/industry/home-service", label: "Home Service" },
    { href: "/industry/fintech", label: "Fintech" },
    { href: "/industry/mcommerce", label: "mCommerce" },
  ],
  resources: [
    { href: "/resources/support", label: "Support" },
    { href: "/resources/contact", label: "Contact Us" },
    { href: "/resources/blog", label: "Blogs" },
    { href: "/resources/career", label: "Careers" },
    { href: "/resources/free-consultation", label: "Free Consultation" },
  ],
  company: [
    { href: "/company/about-us", label: "About Us" },
    { href: "/company/life-at-cloud-nexus", label: "Life @ CloudNexus" },
    { href: "/company/team", label: "Team" },
    { href: "/company/events", label: "Events" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

function FooterLinkList({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="space-y-1.5 text-[13px] text-neutral-500 dark:text-neutral-400">
      {links.map((link) => (
        <li key={link.href + link.label}>
          <Link href={link.href} className="hover:text-black dark:hover:text-white transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const { t } = useTranslation();
  const links = useTranslatedData(FOOTER_LINKS);
  return (
    <footer className="relative mt-auto border-t border-black/10 bg-white dark:border-white/10 dark:bg-black overflow-hidden pt-10 sm:pt-14 pb-6 sm:pb-8">
      {/* Background Animation Removed */}

      {/* Large Background Text Effect */}
      <div className="absolute inset-x-0 top-0 z-0 flex justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black/[0.08] dark:from-white/[0.06] to-transparent leading-none whitespace-nowrap translate-y-[-15%]">
          Cloud Nexus
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Description */}
        {/* <p className="text-[13px] leading-relaxed text-neutral-400 dark:text-neutral-500 max-w-md mb-8">
          {t("footer.description")}
        </p> */}

        {/* Links Grid - 3 columns on mobile, 6 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 sm:gap-x-6 gap-y-6 lg:gap-x-8">
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">{t("footer.services")}</h3>
            <FooterLinkList links={links.services} />
          </div>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">{t("footer.moreServices")}</h3>
            <FooterLinkList links={links.moreServices} />
          </div>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">{t("footer.industries")}</h3>
            <FooterLinkList links={links.industries} />
          </div>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">{t("footer.moreIndustries")}</h3>
            <FooterLinkList links={links.moreIndustries} />
          </div>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">{t("footer.resources")}</h3>
            <FooterLinkList links={links.resources} />
          </div>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">{t("footer.company")}</h3>
            <FooterLinkList links={links.company} />
          </div>

        </div>

        {/* Office Locations */}
        <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex gap-2 text-[13px] text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-black dark:text-white">{t("footer.office.hyd", "Hyderabad")}</span>
              <p>{t("footer.office.hydAddr", "Hitech City, Hyderabad, Telangana, India")}</p>
              <p className="flex items-center gap-1 mt-1"><Phone className="w-3 h-3" />+91 9201004208</p>
            </div>
          </div>
          <div className="flex gap-2 text-[13px] text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-black dark:text-white">{t("footer.office.bpl", "Bhopal")}</span>
              <p>{t("footer.office.bplAddr", "Plot No 20, Kusturi Arched, Barrai, Bhopal, MP 462042, India")}</p>
              <p className="flex items-center gap-1 mt-1"><Phone className="w-3 h-3" />+91 9201004208</p>
            </div>
          </div>
          <div className="flex gap-2 text-[13px] text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-black dark:text-white">{t("footer.office.blr", "Bengaluru")}</span>
              <p>{t("footer.office.blrAddr", "2nd Stage, BTM Layout, Bengaluru, Karnataka 560076, India")}</p>
              <p className="flex items-center gap-1 mt-1"><Phone className="w-3 h-3" />+91 9201004208</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/admin/login" className="hover:opacity-80 transition-opacity">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Cloud Nexus. {t("footer.copyright")}
            </p>
          </Link>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/company/cloudnexusorg/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </Link>
            <Link
              href="https://www.instagram.com/cloudnexus.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white transition-colors" aria-label="GitHub">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
      </div> 
    </footer> 
  );
}
