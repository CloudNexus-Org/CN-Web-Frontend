"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ServicePageLayoutProps {
  children: ReactNode;
  serviceName: string;
  accentColor: string;
}

export function ServicePageLayout({ children, serviceName, accentColor }: ServicePageLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      {/* Background ambient glow - specific to each service */}
      <div 
        className="absolute top-0 right-0 pointer-events-none transition-all duration-1000 blur-[120px] opacity-10 w-[800px] h-[800px] rounded-full translate-x-1/3 -translate-y-1/3"
        style={{
          background: `radial-gradient(circle, ${accentColor}, transparent 70%)`,
        }}
      />
      


      <div className="relative z-10 flex-1 flex flex-col">
        {children}
      </div>
    </main>
  );
}
