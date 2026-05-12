"use client";

import { useEffect, useRef, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const prevPathname = useRef(pathname);
  const [navigating, setNavigating] = useState(false);

  useEffect(() => {  
    
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const lenis = new Lenis({
      duration: isTouchDevice ? 1.2 : 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 5),
      smoothWheel: true,
      wheelMultiplier: 0.78,
      touchMultiplier: isTouchDevice ? 1.0 : 1.1,
      infinite: false,
    });

    lenisRef.current = lenis;
    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      window.scrollTo(0, 0);
      return;
    }

    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    setNavigating(true);

    const lenis = lenisRef.current;
    if (lenis) {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true, force: true });
    }

    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceTop();
    requestAnimationFrame(() => {
      forceTop();
      requestAnimationFrame(() => {
        forceTop();
        if (lenis) lenis.start();
        setNavigating(false);
      });
    });
  }, [pathname]);

  return (
    <div
      style={{
        visibility: navigating ? "hidden" : "visible",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
