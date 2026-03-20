

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title?: string;
  steps: ProcessStep[];
  accentColor: string;
}

export function ServiceProcess({ title = "Implementation Process", steps, accentColor }: ServiceProcessProps) {
  return (
    <section className="w-full py-24 bg-black relative">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-base text-[#8b8b8b] leading-relaxed">
            Our systematic approach to delivering robust, scalable solutions from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[30px] right-[calc(25%+30px)] h-px bg-[#2e2e2e] z-0">
            <div 
              className="absolute top-0 left-0 h-full w-full opacity-50 origin-left"
              style={{
                background: `linear-gradient(to right, ${accentColor}, transparent)`,
              }}
            />
          </div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col group">
              {/* Connecting line (Mobile/Tablet) */}
              {i < steps.length - 1 && (
                <div className="lg:hidden absolute left-[28px] top-[56px] bottom-[-24px] w-px bg-[#2e2e2e] z-0" />
              )}

              <div className="flex flex-row lg:flex-col items-start gap-6 lg:gap-8">
                {/* Step Number Circle */}
                <div 
                  className="w-14 h-14 shrink-0 rounded-full border border-[#2e2e2e] bg-[#121212] flex items-center justify-center text-lg font-mono text-white/50 group-hover:text-white transition-all duration-500 shadow-xl group-hover:[border-color:var(--hover-border)] group-hover:[box-shadow:var(--hover-shadow)]"
                  style={{
                    '--hover-border': `${accentColor}60`,
                    '--hover-shadow': `0 0 20px -5px ${accentColor}`,
                  } as React.CSSProperties}
                >
                  0{i + 1}
                </div>

                <div className="flex flex-col pt-3 lg:pt-0 pb-8 lg:pb-0">
                  <h3 className="text-lg font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#8b8b8b] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
