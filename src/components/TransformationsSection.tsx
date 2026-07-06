"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, ShieldCheck, Zap, ArrowRight, Activity } from "lucide-react";

const TRANSFORMATIONS = [
  {
    id: 1,
    name: "ARJUN KAPOOR",
    role: "FINTECH FOUNDER, GURUGRAM",
    duration: "16 WEEKS PROTOCOL",
    image: "/images/gym-4.jpg",
    stats: [
      { label: "BODY FAT %", before: "24.2%", after: "11.8%", improve: "-12.4% FAT", icon: TrendingDown },
      { label: "LEAN MUSCLE", before: "68.5 KG", after: "76.2 KG", improve: "+7.7 KG MUSCLE", icon: TrendingUp },
      { label: "VO2 MAX", before: "38 ML/KG", after: "54 ML/KG", improve: "+42% ENDURANCE", icon: Activity },
    ],
    quote:
      "As a founder on Cyber City, my energy was crashing by 2 PM. FIT22's contrast therapy and precision hypertrophy didn't just transform my physique—it doubled my cognitive output and HRV score.",
    verified: true,
  },
  {
    id: 2,
    name: "RHEA MEHTA",
    role: "MARATHON RUNNER & ARCHITECT",
    duration: "12 WEEKS PROTOCOL",
    image: "/images/gym-1.jpg",
    stats: [
      { label: "5K SPRINT TIME", before: "28:40 MIN", after: "21:15 MIN", improve: "-7:25 MIN SPEED", icon: TrendingDown },
      { label: "SQUAT 1RM", before: "55 KG", after: "95 KG", improve: "+72% STRENGTH", icon: TrendingUp },
      { label: "RESTING HR", before: "74 BPM", after: "52 BPM", improve: "-22 BPM HEART", icon: Activity },
    ],
    quote:
      "Every other gym in Gurugram gave me cookie-cutter cardio plans. Coach Vikram at FIT22 engineered my Olympic lift mechanics. I ran my fastest half marathon with zero knee pain.",
    verified: true,
  },
  {
    id: 3,
    name: "SIDDHARTH MALHOTRA",
    role: "CORPORATE LAWYER, DLF PHASE 5",
    duration: "24 WEEKS PROTOCOL",
    image: "/images/gym-3.jpg",
    stats: [
      { label: "TOTAL WEIGHT", before: "98.4 KG", after: "81.0 KG", improve: "-17.4 KG WEIGHT", icon: TrendingDown },
      { label: "BENCH PRESS", before: "60 KG", after: "115 KG", improve: "+91% POWER", icon: TrendingUp },
      { label: "SLEEP SCORE", before: "62 / 100", after: "94 / 100", improve: "+32 PTS REM", icon: Activity },
    ],
    quote:
      "The cold plunge suite and dedicated locker valet make FIT22 feel like a 5-star resort that builds superhumans. It is the best investment I've made in my 30s.",
    verified: true,
  },
];

export default function TransformationsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="transformations" className="py-28 bg-[#050505] relative overflow-hidden bg-grain border-t border-white/10">
      {/* Glow */}
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] bg-[#E2FA00]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#E2FA00] uppercase block mb-3">
              // EMPIRICAL BIOMETRIC RESULTS
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase text-white">
              VERIFIED <br />
              <span className="text-gradient-yellow">TRANSFORMATIONS.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light">
            No stock models or fabricated promises. We track and verify every member&apos;s physiological adaptation using clinical DEXA and metabolic data.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="mt-16 bg-[#111] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Athlete Visual & Badge */}
          <div className="lg:col-span-5 relative min-h-[350px] sm:min-h-[450px] lg:min-h-full bg-black">
            <Image
              src={TRANSFORMATIONS[activeIdx].image}
              alt={TRANSFORMATIONS[activeIdx].name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover filter brightness-[0.85] contrast-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#111]" />

            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#E2FA00] text-black font-mono text-[10px] font-extrabold tracking-widest uppercase shadow-lg">
                {TRANSFORMATIONS[activeIdx].duration}
              </span>
              {TRANSFORMATIONS[activeIdx].verified && (
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] tracking-wider uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#E2FA00]" />
                  <span>DEXA VERIFIED</span>
                </span>
              )}
            </div>
          </div>

          {/* Right: Biometric Breakdown & Quote */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#E2FA00] uppercase tracking-wider block">
                    // {TRANSFORMATIONS[activeIdx].role}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
                    {TRANSFORMATIONS[activeIdx].name}
                  </h3>
                </div>
              </div>

              {/* 3 Grid Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {TRANSFORMATIONS[activeIdx].stats.map((st, sIdx) => {
                  const Icon = st.icon;
                  return (
                    <div key={sIdx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-zinc-500 text-[10px] font-mono uppercase">
                        <span>{st.label}</span>
                        <Icon className="w-3.5 h-3.5 text-[#E2FA00]" />
                      </div>
                      <div className="mt-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs text-zinc-500 line-through">{st.before}</span>
                          <span className="text-lg font-bold text-white">{st.after}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#E2FA00] block mt-1">
                          {st.improve}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quote */}
              <blockquote className="mt-8 pt-8 border-t border-white/10 text-base sm:text-lg text-zinc-300 font-light italic leading-relaxed">
                &ldquo;{TRANSFORMATIONS[activeIdx].quote}&rdquo;
              </blockquote>
            </div>

            {/* Selector Tabs */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {TRANSFORMATIONS.map((t, tIdx) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveIdx(tIdx)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all ${
                      activeIdx === tIdx
                        ? "bg-[#E2FA00] text-black font-bold shadow-[0_0_15px_rgba(226,250,0,0.3)]"
                        : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                    }`}
                  >
                    CASE 0{tIdx + 1}
                  </button>
                ))}
              </div>

              <a
                href="#book-trial"
                className="text-xs font-mono text-[#E2FA00] uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                <span>START YOUR BIO-ASSESSMENT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
