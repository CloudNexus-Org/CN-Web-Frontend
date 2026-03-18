import { FC } from 'react';
import { Coffee, Bot, Sparkles, Leaf, Wrench, Network, Rocket, GitMerge, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Java Migration',
    description: 'Modernize legacy Java applications with scalable cloud-ready architectures.',
    icon: Coffee,
  },
  {
    title: 'AI Integration',
    description: 'Embed advanced AI capabilities directly into your existing business workflows.',
    icon: Bot,
  },
  {
    title: 'Generative AI',
    description: 'Harness the power of large language models to automate and create.',
    icon: Sparkles,
  },
  {
    title: 'Spring Boot Development',
    description: 'Build robust, production-grade microservices with Spring ecosystem.',
    icon: Leaf,
  },
  {
    title: 'DevOps Engineering',
    description: 'Streamline your operations with modern infrastructure as code.',
    icon: Wrench,
  },
  {
    title: 'TensorFlow Solutions',
    description: 'Develop custom machine learning models tailored to your data.',
    icon: Network,
  },
  {
    title: 'CI/CD Pipelines',
    description: 'Accelerate your delivery with automated testing and deployment.',
    icon: Rocket,
  },
  {
    title: 'GitHub Actions Automation',
    description: 'Automate your entire software lifecycle right from your repository.',
    icon: GitMerge,
  },
];

export const KnownFor: FC = () => {
  return (
    <section className="w-full py-12 bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-12">

          {/* <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              What We Are Known For
            </h2>
            <p className="text-[#8b8b8b] max-w-2xl text-lg">
              Delivering high-performance backend, intelligent automation, and robust cloud infrastructure to elevate your business.
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              // Supabase Bento Grid Pattern: 2 large cards, 4 small cards, 2 large cards
              const isLarge = i === 0 || i === 1 || i === 6 || i === 7;

              return (
                <div
                  key={i}
                  className={`group relative flex flex-col items-start bg-[#1c1c1c] border border-[#2e2e2e] hover:border-[#3ecf8e] hover:bg-[#232323] transition-all duration-300 rounded-2xl p-8 overflow-hidden cursor-pointer ${isLarge ? 'lg:col-span-2' : 'lg:col-span-1'
                    }`}
                >
                  {/* Subtle inner glow matching Supabase style */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="mb-6 text-[#ededed] group-hover:text-[#3ecf8e] transition-colors duration-300">
                    <Icon className="w-7 h-7 stroke-[1.5]" />
                  </div>

                  <h3 className="text-xl font-medium text-[#ededed] mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-[15px] text-[#8b8b8b] leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  <div className="flex items-center text-[#3ecf8e] text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
