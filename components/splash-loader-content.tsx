"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SplashLoaderContentProps = {
  showIndicator?: boolean;
  active?: boolean;
  mode?: "video" | "spinner";
  onVideoEnd?: () => void;
  className?: string;
};

export function SplashLoaderContent({
  showIndicator = true,
  active = true,
  mode = "spinner",
  onVideoEnd,
  className,
}: SplashLoaderContentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [shouldShowVideo, setShouldShowVideo] = useState<boolean | null>(null);

  useEffect(() => {
    if (mode !== "video") return;

    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setShouldShowVideo(false);
      if (onVideoEnd) {
        onVideoEnd();
      }
    } else {
      sessionStorage.setItem("hasSeenSplash", "true");
      setShouldShowVideo(true);
    }
  }, [mode, onVideoEnd]);

  const handleVideoEnd = () => {
    sessionStorage.setItem("hasSeenSplash", "true");
    if (onVideoEnd) {
      onVideoEnd();
    }
  };

  useEffect(() => {
    const el = videoRef.current;
    if (!el || mode !== "video" || !shouldShowVideo) return;

    if (!active) {
      el.pause();
      return;
    }

    el.muted = true;
    el.playbackRate = 1.8;
    el.currentTime = 0;
    void el.play().catch(() => { });
  }, [active, mode, shouldShowVideo]);

  if (mode === "video") {
    if (shouldShowVideo === null || !shouldShowVideo) return null;

    return (
      <div
        className={cn(
          "flex min-h-0 w-full flex-1 flex-col items-center justify-center bg-black px-4 py-6 sm:px-8",
          className
        )}
      >
        <div className="relative flex min-h-0 w-full max-w-[min(1400px,100%)] flex-1 items-center justify-center animate-[fadeInScale_0.3s_ease-out_both]">
          <video
            ref={videoRef}
            className="h-auto w-full max-h-[min(85dvh,92vw)] object-contain"
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload noplaybackrate"
            aria-label="Cloud Nexus loading animation"
            onEnded={handleVideoEnd}
          >
            <source src="/loader/cloud-nexus-splash.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-4 bg-black px-4 py-6 sm:px-8",
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-[3px] border-white/10 border-t-[#4EB3E8] animate-spin" />
      </div>

      {showIndicator && active ? (
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="sr-only">Loading</span>
          <div className="h-1 w-1 rounded-full bg-[#4EB3E8] animate-[pulse_0.8s_ease-in-out_infinite]" />
          <div className="h-1 w-1 rounded-full bg-[#4EB3E8] animate-[pulse_0.8s_ease-in-out_0.15s_infinite]" />
          <div className="h-1 w-1 rounded-full bg-[#4EB3E8] animate-[pulse_0.8s_ease-in-out_0.3s_infinite]" />
        </div>
      ) : null}
    </div>
  );
}