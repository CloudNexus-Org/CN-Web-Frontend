import { FC } from 'react';
import Link from 'next/link';
import { Coffee, Bot, Sparkles, Leaf, Wrench, Network, Rocket, GitMerge, ArrowRight, Code2, Activity, Boxes, Settings } from 'lucide-react';

const services = [
  {
    title: 'Java Migration',
    description: 'Modernize legacy Java applications with scalable cloud-ready architectures.',
    icon: Coffee,
    Visual: () => (
      <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden pointer-events-none flex items-center justify-end pr-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
        <div className="flex items-center gap-4 translate-x-4 group-hover:translate-x-0 transition-transform duration-700 ease-out">
          <div className="w-16 h-24 bg-[#1a1a1a] border border-[#333] rounded-lg flex items-center justify-center relative z-10">
            <Coffee className="w-6 h-6 text-[#555] group-hover:text-[#3b82f6] transition-colors duration-500" />
            <div className="absolute inset-0 bg-transparent group-hover:bg-[#3b82f6]/5 transition-colors duration-500 rounded-lg" />
          </div>
          <div className="flex flex-col gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#3b82f6]" />
                <ArrowRight className="w-3 h-3 text-[#3b82f6]" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-12 h-8 bg-[#1a1a1a] border border-[#333] group-hover:border-[#3b82f6]/50 rounded flex items-center justify-center transition-all duration-500 opacity-50 group-hover:opacity-100" style={{ transitionDelay: `${i * 150}ms` }}>
                <Boxes className="w-4 h-4 text-[#555] group-hover:text-[#3b82f6]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'AI Integration',
    description: 'Embed advanced AI capabilities directly into your existing business workflows.',
    icon: Bot,
    Visual: () => (
      <div className="absolute -right-4 -bottom-4 w-64 h-64 pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-700">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-16 h-16 bg-[#1a1a1a] border border-[#333] group-hover:border-[#3b82f6]/50 rounded-full flex items-center justify-center z-10 group-hover:shadow-[0_0_30px_rgba(62,207,142,0.15)] transition-all duration-500">
            <Bot className="w-6 h-6 text-[#555] group-hover:text-[#3b82f6] group-hover:scale-110 transition-all duration-500" />
          </div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="absolute border border-[#333] group-hover:border-[#3b82f6]/20 rounded-full transition-colors duration-700" style={{ width: `${8 + i * 4}rem`, height: `${8 + i * 4}rem` }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#444] group-hover:bg-[#3b82f6] rounded-full group-hover:shadow-[0_0_10px_#3b82f6] opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: `${i * 200}ms` }} />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: 'Generative AI',
    description: 'Harness the power of large language models to automate and create.',
    icon: Sparkles,
    Visual: () => (
      <div className="absolute right-4 bottom-4 pointer-events-none flex items-center justify-center w-32 h-32 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
        <div className="relative w-full h-full border border-[#333] group-hover:border-[#3b82f6]/30 bg-[#1a1a1a] group-hover:bg-[#3b82f6]/5 rounded-xl transition-colors duration-500 flex flex-col items-center justify-center overflow-hidden">
          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-[#444] group-hover:text-[#3b82f6] group-hover:scale-110 transition-all duration-500" />
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#444] group-hover:bg-[#3b82f6] transition-colors" />
          <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-[#444] group-hover:bg-[#3b82f6] transition-colors" />
        </div>
      </div>
    )
  },
  {
    title: 'Spring Boot Development',
    description: 'Build robust, production-grade microservices with Spring ecosystem.',
    icon: Leaf,
    Visual: () => (
      <div className="absolute right-6 bottom-4 pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-end gap-[2px] h-16">
          {[2, 4, 3, 7, 5, 8].map((h, i) => (
            <div key={i} className="w-4 bg-[#333] group-hover:bg-[#3b82f6] transition-all duration-500 ease-out rounded-t-[2px]" style={{ height: `${h * 0.4}rem`, transitionDelay: `${i * 75}ms` }} />
          ))}
        </div>
      </div>
    )
  },
  {
    title: 'DevOps Engineering',
    description: 'Streamline your operations with modern infrastructure as code.',
    icon: Wrench,
    Visual: () => (
      <div className="absolute -right-4 -bottom-4 w-32 h-32 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <Settings className="absolute top-4 left-4 w-12 h-12 text-[#666] group-hover:text-[#3b82f6] group-hover:animate-[spin_4s_linear_infinite] transition-colors" />
        <Settings className="absolute bottom-2 right-2 w-16 h-16 text-[#444] group-hover:text-[#3b82f6]/60 group-hover:animate-[spin_6s_linear_infinite_reverse] transition-colors" />
      </div>
    )
  },
  {
    title: 'TensorFlow Solutions',
    description: 'Develop custom machine learning models tailored to your data.',
    icon: Network,
    Visual: () => (
      <div className="absolute -right-2 -bottom-2 w-36 h-36 pointer-events-none flex items-center justify-center overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-500">
        <div className="relative w-20 h-20 rotate-12 group-hover:rotate-0 transition-transform duration-700 ease-out">
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-full h-full border border-[#333] group-hover:border-[#3b82f6]/40 rounded-sm bg-[#1a1a1a] group-hover:bg-[#3b82f6]/10 transition-colors duration-500" style={{ transitionDelay: `${(i % 3 + Math.floor(i / 3)) * 75}ms` }} />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'CI/CD Pipelines',
    description: 'Accelerate your delivery with automated testing and deployment.',
    icon: Rocket,
    Visual: () => (
      <div className="absolute right-0 bottom-0 top-0 w-2/3 md:w-1/2 pointer-events-none overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center pr-8">
        <div className="relative w-full h-full flex flex-col items-center justify-center max-w-[200px]">
          <div className="absolute left-0 w-full h-[1px] bg-[#333] top-1/2" />
          <div className="flex items-center justify-between w-full z-10">
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#444] group-hover:border-[#3b82f6]/60 transition-all duration-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-[#666] group-hover:text-[#3b82f6]" />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#444] group-hover:border-[#3b82f6]/60 transition-all duration-500 delay-150 flex items-center justify-center">
              <Activity className="w-4 h-4 text-[#666] group-hover:text-[#3b82f6]" />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#444] group-hover:border-[#3b82f6]/60 transition-all duration-500 delay-300 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(62,207,142,0.2)]">
              <Rocket className="w-4 h-4 text-[#666] group-hover:text-[#3b82f6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'GitHub Actions Automation',
    description: 'Automate your entire software lifecycle right from your repository.',
    icon: GitMerge,
    Visual: () => (
      <div className="absolute right-12 bottom-0 top-0 pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-500 flex items-center">
        <div className="flex flex-col items-center gap-0 relative h-32 w-24">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#333] group-hover:bg-[#3b82f6]/40 transition-colors duration-500" />
          <div className="absolute left-4 top-10 w-12 h-12 border-b-2 border-r-2 border-[#333] group-hover:border-[#3b82f6] rounded-br-xl transition-colors duration-500 delay-100" />

          <div className="absolute left-[11px] top-6 w-[10px] h-[10px] rounded-full bg-[#444] group-hover:bg-[#3b82f6] group-hover:shadow-[0_0_10px_#3b82f6] z-10 transition-all duration-500 delay-200" />
          <div className="absolute left-[59px] top-[84px] w-[10px] h-[10px] rounded-full bg-[#444] group-hover:bg-[#3b82f6] group-hover:shadow-[0_0_10px_#3b82f6] z-10 transition-all duration-500 delay-300" />
        </div>
      </div>
    )
  },
];

export const KnownFor: FC = () => {
  return (
    <section className="w-full py-12 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isLarge = i === 0 || i === 1 || i === 6 || i === 7;

              return (
                <Link
                  key={i}
                  href={`/services/${service.title.toLowerCase().replace(/\//g, '-').replace(/ /g, '-')}`}
                  className={`group relative flex flex-col items-start bg-[#121212] border border-[#2e2e2e] hover:border-[#3b82f6]/50 hover:bg-[#161616] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] transition-all duration-500 rounded-2xl p-8 overflow-hidden cursor-pointer min-h-[20rem] md:min-h-[22rem] ${isLarge ? 'lg:col-span-2' : 'lg:col-span-1'}`}
                >
                  {service.Visual && <service.Visual />}

                  <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-[#2e2e2e] bg-[#1a1a1a] text-[#ededed] group-hover:text-[#3b82f6] group-hover:border-[#3b82f6]/30 transition-colors duration-500">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="relative z-10 text-xl font-medium text-[#ededed] mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="relative z-10 text-[15px] text-[#8b8b8b] leading-relaxed mb-6 flex-1 max-w-full lg:max-w-[80%]">
                    {service.description}
                  </p>

                  <div className="relative z-10 mt-auto flex items-center text-[#3b82f6] text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
            <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">Small Team. Massive Impact.</span>
          </div>
          <p className="text-[#8b8b8b] text-[15px]">
            Engineering robust, scalable infrastructure for the global stage.
          </p>
        </div>
      </div>
    </section>
  );
};
