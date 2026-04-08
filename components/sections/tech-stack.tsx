import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield } from 'lucide-react';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const technologies = [
  { name: 'React', logo: `${DEVICON}/react/react-original.svg` },
  { name: 'Next.js', logo: `${DEVICON}/nextjs/nextjs-original.svg` },
  { name: 'Node.js', logo: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: 'TypeScript', logo: `${DEVICON}/typescript/typescript-original.svg` },
  { name: 'Python', logo: `${DEVICON}/python/python-original.svg` },
  { name: 'Java', logo: `${DEVICON}/java/java-original.svg` },
  { name: 'Spring', logo: `${DEVICON}/spring/spring-original.svg` },
  { name: 'Flutter', logo: `${DEVICON}/flutter/flutter-original.svg` },
  { name: 'React Native', logo: `${DEVICON}/react/react-original.svg` },
  { name: 'TensorFlow', logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
  { name: 'PyTorch', logo: `${DEVICON}/pytorch/pytorch-original.svg` },
  { name: 'Docker', logo: `${DEVICON}/docker/docker-original.svg` },
  { name: 'Kubernetes', logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
  { name: 'AWS', logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
  { name: 'Azure', logo: `${DEVICON}/azure/azure-original.svg` },
  { name: 'GCP', logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
  { name: 'PostgreSQL', logo: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: 'MongoDB', logo: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: 'Redis', logo: `${DEVICON}/redis/redis-original.svg` },
  { name: 'GraphQL', logo: `${DEVICON}/graphql/graphql-plain.svg` },
  { name: 'GitHub Actions', logo: `${DEVICON}/githubactions/githubactions-original.svg` },
  { name: 'Jenkins', logo: `${DEVICON}/jenkins/jenkins-original.svg` },
  { name: 'Git', logo: `${DEVICON}/git/git-original.svg` },
  { name: 'Terraform', logo: `${DEVICON}/terraform/terraform-original.svg` },
  { name: 'Kibana', logo: `${DEVICON}/kibana/kibana-original.svg` },
];

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
                  {technologies.map((tech, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default whitespace-nowrap"
                      title={tech.name}
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 object-contain"
                        unoptimized
                      />
                      <span className="text-xs md:text-sm font-medium text-black/60 dark:text-white/50">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note & CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#215B97]/10 border border-[#215B97]/20 w-fit shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#215B97] shadow-[0_0_8px_#215B97] animate-pulse" />
              <span className="text-[13px] font-medium text-[#215B97] tracking-wide uppercase">Small Team. Massive Impact.</span>
            </div>
            <p className="text-[#8b8b8b] text-[15px] font-medium">
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
