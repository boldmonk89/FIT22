"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Sparkles, Filter } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Eleiko Olympic Weightlifting Platform",
    category: "Strength Floor",
    image: "/images/gym-1.jpg",
    span: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-square",
    description: "Custom calibrated Swedish Eleiko steel barbells and shock-absorbing bumper platforms.",
  },
  {
    id: 2,
    title: "Biometric Cryotherapy & Cold Plunge Suite",
    category: "Recovery Lounge",
    image: "/images/gym-5.jpg",
    span: "md:col-span-1 md:row-span-1 aspect-[4/3]",
    description: "4°C magnesium cold plunges designed for rapid vasoconstriction and neuromuscular recovery.",
  },
  {
    id: 3,
    title: "High-Octane Cardio Conditioning Zone",
    category: "Cardio Suite",
    image: "/images/gym-3.jpg",
    span: "md:col-span-1 md:row-span-2 aspect-[3/4]",
    description: "Assault air bikes, Concept2 Rowers, and curved manual sprint treadmills.",
  },
  {
    id: 4,
    title: "Private 1-on-1 Coaching Studio",
    category: "Private Studios",
    image: "/images/gym-2.jpg",
    span: "md:col-span-1 md:row-span-1 aspect-[4/3]",
    description: "Enclosed acoustic training suites for elite athletes and VIP personal coaching.",
  },
  {
    id: 5,
    title: "Combat & Striking Arena",
    category: "Strength Floor",
    image: "/images/gym-4.jpg",
    span: "md:col-span-2 md:row-span-1 aspect-[16/9]",
    description: "Professional boxing ring and heavy bag circuit with shock-absorbent flooring.",
  },
];

const CATEGORIES = ["All", "Strength Floor", "Cardio Suite", "Recovery Lounge", "Private Studios"];

export default function FacilitySection() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filteredItems = selectedCat === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCat);

  return (
    <section id="facility" className="py-28 bg-[#080808] relative overflow-hidden bg-grain border-t border-white/10">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#E2FA00] uppercase block mb-3">
              // ARCHITECTURAL SANCTUARY
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase text-white">
              THE <span className="text-gradient-yellow">ARENA.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-[#E2FA00] mr-2 hidden sm:block" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all uppercase ${
                  selectedCat === cat
                    ? "bg-[#E2FA00] text-black font-bold shadow-[0_0_15px_rgba(226,250,0,0.4)]"
                    : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Pinterest Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxImg(item)}
                className={`relative rounded-3xl overflow-hidden border border-white/15 bg-black cursor-pointer group shadow-[0_15px_35px_rgba(0,0,0,0.8)] ${item.span}`}
                data-cursor="EXPAND"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center filter brightness-[0.75] contrast-110 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest text-[#E2FA00] uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#E2FA00]" />
                </div>

                {/* Bottom Title */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight leading-tight group-hover:text-[#E2FA00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-[#111] rounded-3xl overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-3/5 aspect-[4/3] md:aspect-auto min-h-[300px] md:min-h-[500px]">
                  <Image
                    src={lightboxImg.image}
                    alt={lightboxImg.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#E2FA00]/10 border border-[#E2FA00]/30 text-xs font-mono text-[#E2FA00] uppercase">
                        {lightboxImg.category}
                      </span>
                      <button
                        onClick={() => setLightboxImg(null)}
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#E2FA00] hover:text-black transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-tight mt-6">
                      {lightboxImg.title}
                    </h3>

                    <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                      {lightboxImg.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-[#E2FA00]" />
                      <span className="text-xs font-mono text-zinc-300">
                        AVAILABLE FOR ALL ELITE MEMBERS
                      </span>
                    </div>
                  </div>

                  <a
                    href="#book-trial"
                    onClick={() => setLightboxImg(null)}
                    className="luxury-btn w-full py-4 text-center justify-center text-xs uppercase mt-8"
                  >
                    <span>BOOK TRIAL IN THIS ZONE</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
