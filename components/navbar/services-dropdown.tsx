"use client";

import Link from "next/link";
import {
  Coffee,
  Bot,
  Sparkles,
  Leaf,
  Settings,
  Network,
  Rocket,
  GitMerge,
} from "lucide-react";

const services = [
  {
    icon: Coffee,
    label: "Java Migration",
    description: "Modernize legacy Java applications",
    href: "/services/java-migration",
  },
  {
    icon: Bot,
    label: "AI Integration",
    description: "Embed advanced AI capabilities",
    href: "/services/ai-integration",
  },
  {
    icon: Sparkles,
    label: "Generative AI",
    description: "Harness the power of LLMs",
    href: "/services/generative-ai",
  },
  {
    icon: Leaf,
    label: "Spring Boot",
    description: "Build scalable microservices",
    href: "/services/spring-boot-development",
  },
  {
    icon: Settings,
    label: "DevOps Engineering",
    description: "Streamline with code operations",
    href: "/services/devops-engineering",
  },
  {
    icon: Network,
    label: "TensorFlow Solutions",
    description: "Develop custom ml models",
    href: "/services/tensorflow-solutions",
  },
  {
    icon: Rocket,
    label: "CI/CD Pipelines",
    description: "Accelerate delivery & testing",
    href: "/services/ci-cd-pipelines",
  },
  {
    icon: GitMerge,
    label: "GitHub Actions",
    description: "Automate software lifecycles",
    href: "/services/github-actions-automation",
  },
];

interface ServicesDropdownProps {
  onClose: () => void;
}

export function ServicesDropdown({ onClose }: ServicesDropdownProps) {
  return (
    <div
      className="absolute left-1/2 top-full mt-3 w-[640px] -translate-x-1/2 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200 ease-out"
      onMouseLeave={onClose}
    >
      {/* Arrow */}
      <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-white/[0.08] bg-[#111]" />

      <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-5 shadow-2xl shadow-black/60 backdrop-blur-xl">
        <ul className="grid grid-cols-3 gap-1" role="list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.href}>
                <Link
                  href={service.href}
                  onClick={onClose}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.05]"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-white/60 transition-colors group-hover:bg-white/10 group-hover:text-white">
                    <Icon size={15} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white/90 group-hover:text-white">
                      {service.label}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/40">
                      {service.description}
                    </p>
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
