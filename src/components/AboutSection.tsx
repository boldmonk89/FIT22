"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Reference-Matched Heading & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tight text-[#FFED29] leading-[0.95] drop-shadow-lg">
              ABOUT OUR FIT FAMILY
            </h2>
            
            <p className="mt-6 text-zinc-300 text-base sm:text-lg md:text-xl font-light leading-relaxed font-sans">
              FIT22 started with a passion for real fitness and community in Gurugram. From our flagship location in Sector 4, Opposite CCA School, we have expanded into premier training clubs designed for serious workout enthusiasts. We provide official weightlifting gear, dedicated cardio decks, contrast recovery zones, and expert coaches who genuinely care about your progress.
            </p>

            <a
              href="tel:+919962870777"
              className="mt-8 relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-[#FFED29] via-[#fff88f] to-[#FFED29] text-black font-black italic uppercase px-9 py-4 text-base sm:text-lg tracking-wider rounded-full shadow-[0_0_30px_rgba(255,237,41,0.6)] border border-white/60 hover:scale-105 hover:shadow-[0_0_45px_rgba(255,237,41,0.9)] transition-all duration-300 group"
              data-cursor="LEARN MORE"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <span className="relative z-10">Learn More</span>
            </a>
          </motion.div>

          {/* Right Column: Two Overlapping Photos (DITTO Reference Match) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative h-[450px] sm:h-[550px] md:h-[600px] flex items-center justify-center"
          >
            {/* Top-Left Image */}
            <div className="absolute top-0 left-4 sm:left-10 w-[55%] sm:w-[50%] h-[60%] sm:h-[65%] z-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 overflow-hidden">
              <Image
                src="/images/gym-2.jpg"
                alt="FIT22 ATHLETE TRAINING"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom-Right Image */}
            <div className="absolute bottom-0 right-4 sm:right-10 w-[55%] sm:w-[50%] h-[65%] sm:h-[70%] z-20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 overflow-hidden">
              <Image
                src="/images/gym-3.jpg"
                alt="FIT22 RECOVERY & PLUNGES"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Decorative Neon Glow Behind Images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFED29]/10 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
