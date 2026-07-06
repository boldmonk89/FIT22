"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 1200; // 1.2s smooth premium load

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out curve for realistic high-end counter acceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * 100);
      
      setCounter(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCounter(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col justify-between p-8 md:p-12 bg-[#080808] text-white"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center w-full border-b border-white/10 pb-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="w-2.5 h-2.5 bg-[#E2FA00] rounded-full animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase text-zinc-400">
                GURUGRAM • INDIA • EST. 2026
              </span>
            </motion.div>
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-400 hidden sm:inline">
              [ HUMAN PERFORMANCE ENGINEERING ]
            </span>
          </div>

          {/* Center Brand */}
          <div className="my-auto flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex flex-col items-center"
            >
              <div className="relative h-32 sm:h-44 md:h-52 w-auto max-w-[550px] flex items-center justify-center mb-6">
                <Image
                  src="/images/GYM_LOGO.png"
                  alt="FIT22 GYM"
                  width={550}
                  height={200}
                  className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(226,250,0,0.15)]"
                  priority
                />
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-lg">
                <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-[#E2FA00] font-bold">
                  ELITE BIOMETRIC SANCTUARY • GURUGRAM
                </span>
              </div>
            </motion.div>
            <p className="mt-6 text-sm sm:text-base text-zinc-400 max-w-md tracking-wide font-light">
              Preparing biometric environment &amp; 3D athletic simulations...
            </p>
          </div>

          {/* Bottom Bar with Counter */}
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 w-full border-t border-white/10 pt-6">
            <div className="w-full sm:w-64">
              <div className="flex justify-between text-xs font-mono text-zinc-500 mb-2">
                <span>SYSTEM INITIALIZATION</span>
                <span>{counter}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#E2FA00]"
                  initial={{ width: 0 }}
                  animate={{ width: `${counter}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>
            </div>

            <div className="text-right">
              <span className="font-mono text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-none text-white/90">
                {counter}
                <span className="text-2xl text-[#E2FA00]">%</span>
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
