"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "THE COLD PLUNGE PARADOX: WHEN ICE BATHS BLUNT HYPERTROPHY",
    slug: "cold-plunge-hypertrophy-timing",
    category: "RECOVERY & LONGEVITY",
    readTime: "7 MIN READ",
    date: "JULY 04, 2026",
    author: "DR. ANANYA SHARMA",
    excerpt:
      "Empirical analysis on why immersing in 4°C water immediately post-strength training blunts mTOR signaling and macrophage activity—and the precise time window to maximize cardiovascular recovery without sacrificing muscle mass.",
    image: "/images/gym-5.jpg",
  },
  {
    id: 2,
    title: "WHY ELEIKO CALIBRATED STEEL BEATS COMMERCIAL LEVERAGE MACHINES",
    slug: "eleiko-barbells-vs-leverage-machines",
    category: "BIOMECHANICS",
    readTime: "5 MIN READ",
    date: "JUNE 28, 2026",
    author: "VIKRAMADITYA RATHORE",
    excerpt:
      "An electromyography breakdown of stabilizer muscle recruitment during free Olympic barbell back squats versus fixed-plane Smith machines. Why free weights build denser bone mineral density.",
    image: "/images/gym-1.jpg",
  },
  {
    id: 3,
    title: "HRV READY SCORES: PROGRAMMING YOUR PRs BY AUTONOMIC NERVOUS SYSTEM",
    slug: "hrv-guided-training-protocol",
    category: "SPORTS SCIENCE",
    readTime: "6 MIN READ",
    date: "JUNE 19, 2026",
    author: "KABIR SINGHANIA",
    excerpt:
      "How daily heart rate variability monitoring allows FIT22 coaches to adjust volume and neurological intensity in real-time, preventing central nervous system overtraining syndrome.",
    image: "/images/gym-3.jpg",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-28 bg-[#050505] relative overflow-hidden bg-grain border-t border-white/10">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E2FA00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#E2FA00] uppercase block mb-3">
              // ATHLETIC INTELLIGENCE DISPATCH
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase text-white">
              SCIENCE <br />
              <span className="text-gradient-yellow">&amp; PROTOCOLS.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light">
            Empirical sports science breakdowns written directly by our PhD exercise physiologists and Olympic master coaches. No fitness clickbait.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group rounded-3xl bg-[#111] border border-white/10 hover:border-[#E2FA00]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.8)]"
              data-cursor="READ ARTICLE"
            >
              {/* Top Image */}
              <div className="relative w-full aspect-[16/10] bg-black overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover filter brightness-[0.75] contrast-110 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />

                <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#E2FA00] text-black font-mono text-[10px] font-extrabold tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-mono text-[10px]">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="text-zinc-400">BY {post.author}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-snug group-hover:text-[#E2FA00] transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#E2FA00] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  <span>READ FULL RESEARCH BULLETIN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
