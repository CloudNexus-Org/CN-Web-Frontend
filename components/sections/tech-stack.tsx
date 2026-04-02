import { FC } from 'react';
import { Database, Server, Cpu, Cloud, GitBranch, Layers, Zap, Box, Terminal, Code2, Settings } from 'lucide-react';

const technologies = [
  { name: 'Java', icon: CoffeeIcon },
  { name: 'Spring Boot', icon: Layers },
  { name: 'TensorFlow', icon: Cpu },
  { name: 'Docker', icon: Box },
  { name: 'Kubernetes', icon: Server },
  { name: 'AWS', icon: Cloud },
  { name: 'GitHub', icon: GitBranch },
  { name: 'GitHub Actions', icon: Settings },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Redis', icon: Zap },
  { name: 'Next.js', icon: Code2 },
  { name: 'Node.js', icon: Terminal },
];

function CoffeeIcon(props: any) {
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

export const TechStack: FC = () => {
  return (
    <section className="w-full py-8 md:py-10 bg-black overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Left Side: Title */}
        <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#8b8b8b]">
            Built with <span className="text-white block sm:inline">modern technology</span>
          </h2>
        </div>

        {/* Right Side: Seamless Marquee */}
        <div className="relative w-full flex items-center overflow-hidden flex-1">
          {/* Mask Gradients for fade out effect on edges */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="group flex overflow-hidden w-full [--gap:3rem] md:[--gap:4rem] [--duration:20s] gap-[var(--gap)]">
            {Array(2).fill(0).map((_, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
              >
                {technologies.map((tech, j) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={j}
                      className="flex items-center text-[#555] hover:text-[#ededed] transition-colors duration-300 cursor-default"
                      title={tech.name}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5]" />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
