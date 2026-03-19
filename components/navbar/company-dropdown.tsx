"use client";

import Link from "next/link";
import {
  Info,
  BookOpen,
  Briefcase,
  Users,
  HeartHandshake,
  ScrollText,
  Lightbulb,
  Zap,
} from "lucide-react";

const companyLinks = [
  {
    icon: Info,
    label: "About",
    description: "Our story and mission",
    href: "/about",
  },
  {
    icon: BookOpen,
    label: "Blog",
    description: "Thoughts, guides & updates",
    href: "/blog",
  },
  {
    icon: Briefcase,
    label: "Careers",
    description: "Join our growing team",
    href: "/career",
  },
  {
    icon: Users,
    label: "Customers",
    description: "Companies that trust us",
    href: "/company#customers",
  },
  {
    icon: HeartHandshake,
    label: "Humans",
    description: "The people behind the work",
    href: "/company#humans",
  },
  {
    icon: ScrollText,
    label: "Handbook",
    description: "How we operate",
    href: "/company#handbook",
  },
  {
    icon: Lightbulb,
    label: "Philosophy",
    description: "Our values & principles",
    href: "/company/philosophy",
  },
  {
    icon: Zap,
    label: "Workflow",
    description: "How we deliver excellence",
    href: "/workflow",
  },
];

interface CompanyDropdownProps {
  onClose: () => void;
}

export function CompanyDropdown({ onClose }: CompanyDropdownProps) {
  return (
    <div
      className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-150"
      onMouseLeave={onClose}
    >
      {/* Arrow */}
      <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-white/[0.08] bg-[#111]" />

      <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-3 shadow-2xl shadow-black/60 backdrop-blur-xl">
        <ul className="flex flex-col gap-0.5" role="list">
          {companyLinks.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.05]"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-white/60 transition-colors group-hover:bg-white/10 group-hover:text-white">
                    <Icon size={13} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
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
  );
}
