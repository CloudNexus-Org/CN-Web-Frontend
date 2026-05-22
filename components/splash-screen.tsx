"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = useCallback(() => {
    setFadeOut(true);
    setTimeout(() => setShowSplash(false), 800);
  }, []);

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      handleVideoEnd();
    }, 4000);

    if (!videoRef.current) {
      return () => clearTimeout(fallbackTimer);
    }
    
    videoRef.current.playbackRate = 2.5;
    videoRef.current.play().catch(() => {
      handleVideoEnd();
    });

    return () => clearTimeout(fallbackTimer);
  }, [handleVideoEnd]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <video
            ref={videoRef}
            src="/loader/cloud-nexus-splash.mp4"
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
