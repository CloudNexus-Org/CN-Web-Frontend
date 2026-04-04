import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="inline-block text-[11px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.2em] mb-4">
          404
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Page Not Found
        </h1>
        <p className="text-base md:text-lg text-black/50 dark:text-white/45 leading-relaxed max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:border-black/15 dark:hover:border-white/15 transition-all duration-300"
        >
          <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
