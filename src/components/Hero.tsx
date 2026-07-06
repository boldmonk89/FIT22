"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 pb-12"
    >
      {/* Background Image with Athletic Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gym-1.jpg"
          alt="FIT22 GYM WORKOUT"
          fill
          className="object-cover object-center opacity-45 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-black/80" />
      </div>

      {/* Main Content Overlay - Refined text sizes matching reference image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-20 flex flex-col items-center text-center py-16">
        
        {/* Reference-Matched Headline: BE YOUR BEST (Refined Size) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mt-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tighter leading-none uppercase text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            BE YOUR <span className="text-[#FFED29]">BEST</span>
          </h1>
        </motion.div>

        {/* Subtitle / Location Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-zinc-300 font-mono italic max-w-xl tracking-wide drop-shadow-md"
        >
          FIT22 THE GYM • GURUGRAM&apos;S PREMIER ATHLETIC ARENAS
        </motion.p>

        {/* Reference-Matched Vibrant Yellow Button: JOIN TODAY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="tel:+919962870777"
            className="relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-[#FFED29] via-[#fff88f] to-[#FFED29] text-black font-black italic uppercase px-9 py-4 text-sm sm:text-base tracking-wider rounded-full shadow-[0_0_35px_rgba(255,237,41,0.6)] border border-white/60 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,237,41,0.9)] transition-all duration-300 group"
            data-cursor="JOIN NOW"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
            <span className="relative z-10">JOIN TODAY</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Key Info Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-6 border-t border-white/15"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-mono">
          
          {/* 01: 3 Arenas */}
          <div className="flex items-center gap-2.5">
            <div className="text-xs font-bold text-[#FFED29] shrink-0">
              01 //
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-none uppercase italic">
                3 GURUGRAM ARENAS
              </h4>
              <span className="text-[11px] text-zinc-400 block mt-0.5">
                Sec 4 • Sec 52 • Palam Vihar
              </span>
            </div>
          </div>

          {/* 02: Top Rated with Google Icon instead of text */}
          <div className="flex items-center gap-2.5">
            <div className="text-xs font-bold text-[#FFED29] shrink-0">
              02 //
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-none uppercase italic">
                  4.8★ TOP RATED
                </h4>
              </div>
              <span className="text-[11px] text-zinc-400 block mt-0.5">
                699+ Verified Reviews
              </span>
            </div>
          </div>

          {/* 03: Direct Call */}
          <div className="flex items-center gap-2.5">
            <div className="text-xs font-bold text-[#FFED29] shrink-0">
              03 //
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-none uppercase italic">
                DIRECT CALL
              </h4>
              <div className="text-[11px] text-zinc-400 mt-0.5 flex items-center gap-1.5">
                <a href="tel:+919962870777" className="hover:text-[#FFED29] hover:underline transition-colors">Sec 4 & Palam</a>
                <span>•</span>
                <a href="tel:+919555829555" className="hover:text-[#FFED29] hover:underline transition-colors">Sec 52 Arena</a>
              </div>
            </div>
          </div>

          {/* 04: Open 365 Days */}
          <div className="flex items-center gap-2.5">
            <div className="text-xs font-bold text-[#FFED29] shrink-0">
              04 //
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-none uppercase italic">
                5AM – 10PM DAILY
              </h4>
              <span className="text-[11px] text-zinc-400 block mt-0.5">
                Open 365 Days A Year
              </span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
