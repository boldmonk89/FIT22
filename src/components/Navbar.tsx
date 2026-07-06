"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "ABOUT", href: "#about" },
  { name: "PROGRAMS", href: "#programs" },
  { name: "REVIEWS", href: "#testimonials" },
  { name: "BRANCHES", href: "#branches" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const contactEl = document.getElementById("contact") || document.querySelector("footer");
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isFooterVisible
            ? "-translate-y-full opacity-0 pointer-events-none"
            : isScrolled
            ? "bg-white/[0.05] backdrop-blur-2xl py-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border-b border-white/15 translate-y-0 opacity-100"
            : "bg-transparent py-6 translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "#")}
            className="flex items-center gap-3 group"
            data-cursor="HOME"
          >
            <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/GYM_LOGO.png"
                alt="FIT22 GYM LOGO"
                width={400}
                height={120}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,237,41,0.4)]"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links Glassy Pill */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-6 py-2 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[11px] font-mono font-bold text-zinc-300 hover:text-[#FFED29] px-3.5 py-1.5 rounded-full transition-colors duration-200 tracking-wider uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Liquid Glass Button (Calling tel:+919962870777) & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919962870777"
              className="relative overflow-hidden bg-gradient-to-r from-[#FFED29] via-[#fff88f] to-[#FFED29] text-black font-black italic uppercase px-7 py-3 rounded-full text-xs sm:text-sm tracking-wider shadow-[0_0_30px_rgba(255,237,41,0.6)] border border-white/60 hover:scale-105 hover:shadow-[0_0_45px_rgba(255,237,41,0.9)] transition-all duration-300 hidden sm:inline-flex items-center justify-center group"
              data-cursor="CALL NOW"
            >
              {/* Liquid Sheen Animation */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <span className="relative z-10">BOOK FREE TRIAL</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-white hover:text-[#FFED29] hover:border-[#FFED29]/50 transition-all uppercase backdrop-blur-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-3xl xl:hidden pt-28 pb-12 px-6 flex flex-col justify-between overflow-y-auto border-b border-white/10"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono tracking-widest text-[#FFED29] uppercase mb-2">
                // NAVIGATION MENU
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFED29]/50 hover:bg-white/10 transition-all flex flex-col justify-between group backdrop-blur-md"
                  >
                    <span className="text-xs font-mono text-zinc-500 group-hover:text-[#FFED29] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#FFED29] transition-colors uppercase mt-4">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                <span>LOCATION: GURUGRAM, INDIA</span>
                <span className="text-[#FFED29]">OPEN DAILY 5AM-10:00PM</span>
              </div>
              <a
                href="tel:+919962870777"
                className="relative overflow-hidden bg-gradient-to-r from-[#FFED29] via-[#fff88f] to-[#FFED29] text-black font-black italic uppercase w-full py-4 rounded-full text-center justify-center text-base shadow-[0_0_30px_rgba(255,237,41,0.6)] border border-white/60 hover:scale-[1.02] transition-all block group"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <span className="relative z-10">BOOK FREE TRIAL SESSION</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
