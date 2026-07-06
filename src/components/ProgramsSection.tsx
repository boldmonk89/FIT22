"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const OFFERINGS = [
  {
    title: "TOUR OUR GYM",
    image: "/images/gym-3.jpg",
    link: "#contact",
  },
  {
    title: "CHECK OUT OUR GROUP CLASSES",
    image: "/images/gym-4.jpg",
    link: "#contact",
  },
  {
    title: "ASK ABOUT PERSONAL TRAINING",
    image: "/images/gym-5.jpg",
    link: "#contact",
  },
];

export default function ProgramsSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Centered Yellow Italic Heading (DITTO Reference Match) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tight uppercase text-[#FFED29] leading-none drop-shadow-md">
            WHAT WE OFFER
          </h2>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg md:text-xl font-light">
            We&apos;re committed to bringing you the best workout experience.
          </p>
        </motion.div>

        {/* 3 Image Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16">
          {OFFERINGS.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              onClick={(e) => scrollToSection(e, item.link)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative h-80 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex items-center justify-center p-6 text-center"
              data-cursor="EXPLORE"
            >
              {/* Background Photo */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center filter brightness-[0.55] contrast-125 group-hover:scale-110 group-hover:brightness-[0.4] transition-all duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />

              {/* Centered White Italic Text */}
              <h3 className="relative z-10 text-2xl sm:text-3xl font-black italic uppercase tracking-tight text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] group-hover:text-[#FFED29] group-hover:scale-105 transition-all duration-300">
                {item.title}
              </h3>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
