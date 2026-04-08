"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const startLoading = useCallback(() => {
    setLoading(true);
    setVisible(true);
  }, []);

  const stopLoading = useCallback(() => {
    setLoading(false);
    const timer = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    stopLoading();
  }, [pathname, stopLoading]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.target === "_blank"
      ) return;

      if (href !== pathname) {
        startLoading();
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname, startLoading]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black transition-opacity duration-300 ${
        loading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="animate-[fadeInScale_0.4s_ease-out_both]">
          <div className="relative h-12 w-48 sm:h-14 sm:w-56">
            <Image
              src="/asset/cn-logo.png"
              alt="Cloud Nexus"
              className="object-contain dark:invert dark:hue-rotate-180"
              fill
              sizes="224px"
              priority
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#215B97] animate-[pulse_1.2s_ease-in-out_infinite]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#215B97] animate-[pulse_1.2s_ease-in-out_0.2s_infinite]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#215B97] animate-[pulse_1.2s_ease-in-out_0.4s_infinite]" />
        </div>
      </div>
    </div>
  );
}
