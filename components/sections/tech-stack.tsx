import Link from 'next/link';
import {
  Database, Server, Cpu, Cloud, GitBranch, Layers, Zap, Box,
  Terminal, Code2, Settings, Globe, Smartphone, Shield, Braces,
  BarChart3, Workflow, HardDrive, MonitorSmartphone, Webhook,
  FileCode2, Container, Flame, CircuitBoard, Binary, ArrowRight
} from 'lucide-react';

const technologies = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Globe },
  { name: 'Node.js', icon: Terminal },
  { name: 'TypeScript', icon: Braces },
  { name: 'Python', icon: FileCode2 },
  { name: 'Java', icon: CoffeeIcon },
  { name: 'Spring Boot', icon: Layers },
  { name: 'Flutter', icon: Smartphone },
  { name: 'React Native', icon: MonitorSmartphone },
  { name: 'TensorFlow', icon: Cpu },
  { name: 'PyTorch', icon: Flame },
  { name: 'Docker', icon: Box },
  { name: 'Kubernetes', icon: Container },
  { name: 'AWS', icon: Cloud },
  { name: 'Azure', icon: Server },
  { name: 'GCP', icon: HardDrive },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: CircuitBoard },
  { name: 'Redis', icon: Zap },
  { name: 'GraphQL', icon: Webhook },
  { name: 'GitHub Actions', icon: Settings },
  { name: 'Jenkins', icon: Workflow },
  { name: 'Git', icon: GitBranch },
  { name: 'Terraform', icon: Binary },
  { name: 'Kibana', icon: BarChart3 },
  { name: 'Cyber Security', icon: Shield },
];

function CoffeeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="9" x2="9" y1="2" y2="4" />
      <line x1="15" x2="15" y1="2" y2="4" />
    </svg>
  );
}

export function TechStack() {
  return (
    <section className="w-full py-12 bg-white dark:bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col gap-8 md:gap-12">
        
        {/* Top: Title + Marquee */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
          <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
              Built with <span className="text-black dark:text-white block sm:inline">modern technology</span>
            </h2>
          </div>

          <div className="relative w-full flex items-center overflow-hidden flex-1">
            <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

            <div className="group flex overflow-hidden w-full [--gap:2rem] md:[--gap:2.5rem] [--duration:35s] gap-[var(--gap)]">
              {Array(2).fill(0).map((_, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center justify-around gap-[var(--gap)] min-w-full group-hover:[animation-play-state:paused] animate-[marquee_var(--duration)_linear_infinite]"
                >
                  {technologies.map((tech, j) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-[#999] hover:text-[#333] dark:text-[#555] dark:hover:text-[#ededed] transition-colors duration-300 cursor-default whitespace-nowrap"
                        title={tech.name}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5] flex-shrink-0" />
                        <span className="text-xs md:text-sm font-medium">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note & CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">Small Team. Massive Impact.</span>
            </div>
            <p className="text-[#8b8b8b] text-[15px]">
              Engineering robust, scalable infrastructure for the global stage.
            </p>
          </div>

          <Link
            href="/company/about-us"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:border-black/15 dark:hover:border-white/15 hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all duration-300 whitespace-nowrap w-fit lg:w-auto"
          >
            About Us
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
