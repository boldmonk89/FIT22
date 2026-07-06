"use client";

import { motion } from "framer-motion";

const GOOGLE_REVIEWS_FEED = [
  {
    branch: "SECTOR 4 ARENA",
    location: "Opposite CCA School, Laxman Vihar",
    rating: "4.4",
    totalReviews: "100",
    fiveStarPercent: 86,
    fourStarPercent: 10,
    threeStarPercent: 4,
    mapUrl: "https://maps.google.com/?q=Fit22+The+Gym+Sector+4+Gurugram",
    quote:
      "Best athletic training center in Sector 4 Gurugram! The Eleiko Olympic barbells, cleanliness, and conditioning trainers are unmatched. Opposite CCA school location is super convenient for daily morning workouts.",
    author: "Rahul Sharma",
    tag: "Google User • Local Guide",
    avatarBg: "bg-blue-600",
  },
  {
    branch: "PALAM VIHAR ARENA",
    location: "Dharam Colony Extension",
    rating: "4.6",
    totalReviews: "341",
    fiveStarPercent: 91,
    fourStarPercent: 7,
    threeStarPercent: 2,
    mapUrl: "https://maps.google.com/?q=Fit22+The+Gym+Palam+Vihar+Gurugram",
    quote:
      "Spacious workout floors and elite personal trainers in Palam Vihar. The biometric recovery suite and 4°C cold plunge changed my athletic performance completely. Highly recommended to everyone!",
    author: "Priya Verma",
    tag: "Google User • Local Guide",
    avatarBg: "bg-purple-600",
  },
  {
    branch: "SECTOR 52 ARENA",
    location: "Wazirabad / Saraswati Kunj II",
    rating: "4.8",
    totalReviews: "258",
    fiveStarPercent: 95,
    fourStarPercent: 4,
    threeStarPercent: 1,
    mapUrl: "https://maps.google.com/?q=Fit22+The+Gym+Sector+52+Wazirabad+Gurugram",
    quote:
      "Top-tier fitness sanctuary near Devi Lal Park! Phenomenal vibe, Olympic-grade weights, and highly professional coaching staff. Without doubt the #1 athletic conditioning gym in Gurugram.",
    author: "Vikram Singh",
    tag: "Google User • Local Guide",
    avatarBg: "bg-green-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden border-t border-white/10">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFED29]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Refined Heading Size: WHAT THEY SAY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FFED29] uppercase">
              AUTHENTIC MEMBER REVIEWS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tight text-[#FFED29] leading-none drop-shadow-md">
            WHAT THEY SAY
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2">
            Click on any review card to inspect live verified ratings on Google Maps
          </p>
        </motion.div>

        {/* 3 Authentic Google Review Cards Side by Side (Clickable to Real Google Maps!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GOOGLE_REVIEWS_FEED.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col rounded-3xl overflow-hidden border border-white/15 bg-white/[0.03] shadow-[0_15px_35px_rgba(0,0,0,0.8)] group hover:border-[#FFED29] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              {/* Top Section: Google Rating UI */}
              <div className="p-6 bg-white/[0.04] border-b border-white/10 flex flex-col justify-between">
                
                {/* Branch Header & Google Logo */}
                <div className="w-full flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-base font-black italic uppercase text-white tracking-tight group-hover:text-[#FFED29] transition-colors">
                      {item.branch}
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">
                      {item.location}
                    </span>
                  </div>
                  
                  {/* Official Google Icon Badge */}
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15 shrink-0 group-hover:border-[#FFED29]/50 transition-colors">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span className="text-[11px] font-bold text-white tracking-wide">Google</span>
                  </div>
                </div>

                {/* Rating Widget Display */}
                <div className="bg-black/60 rounded-2xl p-4 border border-white/10 flex items-center gap-6">
                  {/* Big Rating Score */}
                  <div className="flex flex-col items-center justify-center shrink-0 border-r border-white/10 pr-5">
                    <span className="text-4xl font-black italic tracking-tighter text-[#FFED29] leading-none">
                      {item.rating}
                    </span>
                    <div className="flex items-center gap-0.5 mt-1.5 text-[#FFED29]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm font-black">★</span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 mt-1 uppercase">
                      {item.totalReviews} reviews
                    </span>
                  </div>

                  {/* Rating Bars Widget */}
                  <div className="flex flex-col gap-1.5 w-full">
                    {/* 5 Star bar */}
                    <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-300">
                      <span>5★</span>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FFED29] rounded-full" style={{ width: `${item.fiveStarPercent}%` }} />
                      </div>
                      <span className="w-6 text-right">{item.fiveStarPercent}%</span>
                    </div>
                    {/* 4 Star bar */}
                    <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-300">
                      <span>4★</span>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FFED29]/70 rounded-full" style={{ width: `${item.fourStarPercent}%` }} />
                      </div>
                      <span className="w-6 text-right">{item.fourStarPercent}%</span>
                    </div>
                    {/* 3 Star bar */}
                    <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-300">
                      <span>3★</span>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FFED29]/40 rounded-full" style={{ width: `${item.threeStarPercent}%` }} />
                      </div>
                      <span className="w-6 text-right">{item.threeStarPercent}%</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Solid Yellow Box with Black Text */}
              <div className="bg-[#FFED29] text-black p-6 sm:p-8 flex flex-col justify-between flex-grow">
                
                {/* 5 Stars & View on Maps link */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/15">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-black text-base font-black">★</span>
                    ))}
                    <span className="text-xs font-black ml-1 uppercase">5.0</span>
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-black text-[#FFED29] px-2.5 py-1 rounded-full flex items-center gap-1 group-hover:bg-white group-hover:text-black transition-colors">
                    VIEW MAPS ↗
                  </span>
                </div>

                {/* Real Review Quote */}
                <p className="text-sm sm:text-base font-medium italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Reviewer Name & Guide Tag */}
                <div className="mt-6 pt-4 border-t border-black/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${item.avatarBg} text-white flex items-center justify-center font-bold text-sm uppercase shadow-md`}>
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-base font-black italic uppercase tracking-tight leading-none">
                        {item.author}
                      </h4>
                      <span className="text-[11px] font-mono font-semibold text-black/70 block mt-1">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  
                  <svg className="w-5 h-5 opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                  </svg>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
