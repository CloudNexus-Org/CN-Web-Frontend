import { Job } from "@/services/jobService";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface JobListItemProps {
  job: Job;
}

export function JobListItem({ job }: JobListItemProps) {
  return (
    <Link href={`/career/job/${job.id}`} className="group block mb-4">
      <div className="brand-glass rounded-2xl p-6 md:p-8 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] border-white/[0.05] group-hover:border-white/10 relative overflow-hidden">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-500" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-serif font-normal text-white mb-4 group-hover:text-accent transition-colors duration-300">
              {job.title}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 bg-white/[0.03] rounded-full text-accent/70 border border-white/[0.05]">
                {job.category}
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 bg-white/[0.03] rounded-full text-muted-foreground/80 border border-white/[0.05]">
                {job.location}
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 bg-white/[0.03] rounded-full text-muted-foreground/80 border border-white/[0.05]">
                {job.employmentType}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-accent/0 group-hover:text-accent transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
            <span className="text-sm font-mono tracking-widest uppercase hidden md:block">Apply Now</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
              <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
