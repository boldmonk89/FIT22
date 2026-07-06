"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Phone, Clock, Navigation } from "lucide-react";

const BRANCHES = [
  {
    id: "01",
    name: "SECTOR 4 ARENA",
    subtitle: "Laxman Vihar Phase 2",
    rating: "4.4",
    reviews: "100",
    description: "Gurugram's largest strength & conditioning arena featuring Olympic lifting zones, functional turf, and professional coaching.",
    mapUrl: "https://maps.google.com/?q=Fit22+The+Gym+Sector+4+Gurugram",
    address: "No.1277, Opposite CCA School, Laxman Vihar Phase 2, Sector 4, Gurugram, Haryana 122006",
    phone: "+91 99628 70777",
    phoneTel: "tel:+919962870777",
    hours: "Open Daily • 5:00 AM – 10:00 PM",
    tag: "FLAGSHIP CLUB",
  },
  {
    id: "02",
    name: "SECTOR 52 ARENA",
    subtitle: "Saraswati Kunj II / Wazirabad",
    rating: "4.8",
    reviews: "258",
    description: "Modern cardio & cross-training facility overlooking Sector 52, equipped with premium resistance machines and recovery tools.",
    mapUrl: "https://maps.google.com/?q=Fit22+The+Gym+Sector+52+Wazirabad+Gurugram",
    address: "4th Floor, Plot No.48, near Devi Lal Park, Sarswati Kunj II, Wazirabad, Sector 52, Gurugram, Haryana 122003",
    phone: "+91 95558 29555",
    phoneTel: "tel:+919555829555",
    hours: "Open Daily • 5:00 AM – 10:00 PM",
    tag: "ROOFTOP ARENA",
  },
  {
    id: "03",
    name: "PALAM VIHAR ARENA",
    subtitle: "Dharam Colony Extension",
    rating: "4.6",
    reviews: "341",
    description: "High-energy community club built for heavy lifting, high-intensity interval training, and personalized athletic transformation.",
    mapUrl: "https://maps.google.com/?q=Fit22+The+Gym+Palam+Vihar+Gurugram",
    address: "C10, opposite to B Block Road, Dharam Colony, Palam Vihar Extension, Gurugram, Haryana 122017",
    phone: "+91 99628 70777",
    phoneTel: "tel:+919962870777",
    hours: "Open Daily • 5:00 AM – 10:00 PM",
    tag: "STRENGTH & CARDIO",
  },
];

export default function BranchesSection() {
  return (
    <section id="branches" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden border-t border-white/10">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFED29]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Human, Authentic Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-[#FFED29] uppercase block mb-3">
            // OUR GURUGRAM LOCATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tight uppercase text-white leading-none drop-shadow-md">
            OUR <span className="text-[#FFED29]">LOCATIONS</span>
          </h2>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto">
            Explore our three high-performance training clubs across Gurugram. Built with official Eleiko lifting platforms, cardio decks, and certified coaching.
          </p>
        </motion.div>

        {/* 3 Column Grid with Refined Architectural Card UI */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BRANCHES.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#FFED29]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFED29]/0 to-transparent group-hover:via-[#FFED29] transition-all duration-500" />

              <div>
                {/* Branch Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#FFED29]">
                    // CLUB {branch.id}
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-black/40 border border-white/15 text-zinc-300 group-hover:border-[#FFED29]/50 group-hover:text-[#FFED29] transition-colors uppercase">
                    {branch.tag}
                  </span>
                </div>

                {/* Branch Title */}
                <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-white group-hover:text-[#FFED29] transition-colors tracking-tight">
                  {branch.name}
                </h3>
                <span className="text-xs font-mono text-zinc-400 block mt-1 uppercase">
                  {branch.subtitle}
                </span>

                {/* Description */}
                <p className="mt-4 text-sm text-zinc-300 font-light leading-relaxed">
                  {branch.description}
                </p>

                {/* Clickable Rating Badge pointing to Real Google Maps */}
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click to view real Google Reviews on Maps"
                  className="mt-5 inline-flex items-center gap-2 bg-black/40 border border-white/10 hover:border-[#FFED29] px-3.5 py-1.5 rounded-xl transition-all duration-300 group/rating"
                >
                  <div className="flex items-center gap-1 text-[#FFED29]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFED29]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white ml-1 group-hover/rating:text-[#FFED29] transition-colors">
                    {branch.rating}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    ({branch.reviews} Reviews)
                  </span>
                </a>

                {/* Address */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FFED29] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {branch.address}
                  </p>
                </div>

                {/* Hours */}
                <div className="mt-3 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#FFED29] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-mono">
                    {branch.hours}
                  </span>
                </div>
              </div>

              {/* Dual Action Buttons: Get Directions & Call Branch */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/15 hover:border-white hover:bg-white/10 text-white font-bold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center uppercase"
                  title="Open in Google Maps"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#FFED29]" />
                  <span>Directions</span>
                </a>

                <a
                  href={branch.phoneTel}
                  className="relative overflow-hidden bg-gradient-to-r from-[#FFED29] via-[#fff88f] to-[#FFED29] text-black font-black italic uppercase py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs tracking-wider shadow-[0_0_20px_rgba(255,237,41,0.4)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,237,41,0.7)] transition-all group/btn text-center"
                  title="Call Branch"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 -translate-x-full group-hover/btn:translate-x-[300%] transition-transform duration-1000 ease-out" />
                  <Phone className="w-3.5 h-3.5 fill-black shrink-0 relative z-10" />
                  <span className="relative z-10">Call Branch</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
