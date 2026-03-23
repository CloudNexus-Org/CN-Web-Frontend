

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceFeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
  accentColor: string;
}

export function ServiceFeatures({ title, subtitle, features, accentColor }: ServiceFeaturesProps) {
  return (
    <section className="w-full py-24 bg-[#050505] border-b border-white/[0.05] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-base text-[#8b8b8b] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={i}
                className="group relative bg-[#121212] border-[#2e2e2e] rounded-2xl p-8 overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:[border-color:var(--hover-border)] hover:[box-shadow:0_8px_30px_var(--hover-shadow)]"
                style={{
                  '--hover-border': `${accentColor}50`,
                  '--hover-shadow': `${accentColor}15`,
                } as React.CSSProperties}
              >
                <div 
                  className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#2e2e2e] bg-[#1a1a1a] text-[#ededed] transition-colors duration-500 group-hover:[color:var(--hover-icon)] group-hover:[background-color:var(--hover-bg)] group-hover:[border-color:var(--hover-icon-border)]"
                  style={{
                    '--hover-icon': accentColor,
                    '--hover-bg': `${accentColor}10`,
                    '--hover-icon-border': `${accentColor}30`,
                  } as React.CSSProperties}
                >
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="relative z-10 text-xl font-medium text-white mb-3">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-sm text-[#8b8b8b] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
