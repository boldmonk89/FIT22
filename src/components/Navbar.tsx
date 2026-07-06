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
            ? "bg-white/[0.05] backdrop-blur-2xl py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border-b border-white/15 translate-y-0 opacity-100"
            : "bg-transparent py-4 sm:py-6 translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Side: Mobile Hamburger Button + Brand Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Mobile Left Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#FFED29] hover:border-[#FFED29]/50 transition-all backdrop-blur-md flex items-center justify-center shrink-0"
              aria-label="Toggle Left Navigation Menu"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            </button>

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
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,237,41,0.4)]"
                  priority
                />
              </div>
            </a>
          </div>

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

          {/* CTA Liquid Glass Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919962870777"
              className="relative overflow-hidden bg-gradient-to-r from-[#FFED29] via-[#fff88f] to-[#FFED29] text-black font-black italic uppercase px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm tracking-wider shadow-[0_0_25px_rgba(255,237,41,0.5)] border border-white/60 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,237,41,0.8)] transition-all duration-300 inline-flex items-center justify-center group"
              data-cursor="CALL NOW"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <span className="relative z-10 hidden sm:inline">BOOK FREE TRIAL</span>
              <span className="relative z-10 sm:hidden">FREE TRIAL</span>
            </a>
          </div>

        </div>
      </header>

      {/* Mobile Left-Side Off-Canvas Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm xl:hidden"
            />

            {/* Left Drawer Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-80 max-w-[85vw] bg-[#080808] border-r border-white/15 p-6 flex flex-col justify-between shadow-[20px_0_50px_rgba(0,0,0,0.9)] xl:hidden overflow-y-auto"
            >
              <div>
                {/* Drawer Header: Logo + Close X */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                  <Image
                    src="/images/GYM_LOGO.png"
                    alt="FIT22"
                    width={150}
                    height={45}
                    className="h-9 w-auto object-contain"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                    aria-label="Close Navigation Menu"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Menu Heading */}
                <span className="text-xs font-mono tracking-widest text-[#FFED29] uppercase block mb-4">
                  // NAVIGATION MENU
                </span>

                {/* Vertical Links */}
                <div className="flex flex-col gap-2.5">
                  {NAV_LINKS.map((link, idx) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FFED29]/60 hover:bg-white/10 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-500 group-hover:text-[#FFED29] transition-colors">
                          0{idx + 1}
                        </span>
                        <span className="text-sm font-bold text-white group-hover:text-[#FFED29] transition-colors uppercase">
                          {link.name}
                        </span>
                      </div>
                      <svg className="w-4 h-4 text-zinc-600 group-hover:text-[#FFED29] transition-colors" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom Info */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
                <div className="flex flex-col gap-1 text-xs font-mono text-zinc-400">
                  <span>📍 GURUGRAM, HARYANA</span>
                  <span className="text-[#FFED29]">🕒 OPEN DAILY: 5AM – 10PM</span>
                </div>
                <a
                  href="tel:+919962870777"
                  className="relative overflow-hidden bg-gradient-to-r from-[#FFED29] via-[#fff88f] to-[#FFED29] text-black font-black italic uppercase w-full py-3.5 rounded-xl text-center justify-center text-sm tracking-wider shadow-[0_0_25px_rgba(255,237,41,0.5)] block group"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                  <span className="relative z-10">CALL FLAGSHIP CLUB</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
