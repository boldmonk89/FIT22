"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] text-white border-t border-white/10 pt-20 pb-12 relative overflow-hidden bg-grain">
      {/* Subtle Glow in background */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E2FA00]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative h-24 w-auto max-w-[450px] flex items-center">
                  <Image
                    src="/images/GYM_LOGO.png"
                    alt="FIT22 GYM"
                    width={450}
                    height={140}
                    className="h-20 sm:h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(226,250,0,0.3)]"
                  />
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-white/10 border border-white/15 text-[#E2FA00] uppercase font-bold">
                  ELITE GYM
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-light">
                Gurugram&apos;s premier high-performance athletic facility. Combining Olympic-grade equipment, biometric recovery suites, and world-class human engineering under one roof.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-2.5 text-xs font-mono text-zinc-400">
              <div className="flex items-baseline gap-2">
                <span className="text-[#E2FA00] select-none font-bold">LOC //</span>
                <span>No.1277, Laxman Vihar Phase 2, Sector 4, Gurugram, HR 122006 (Opposite CCA School)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#E2FA00] select-none font-bold">TEL //</span>
                <span>+91 99628 70777 (Reception)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#E2FA00] select-none font-bold">HRS //</span>
                <span>Open Daily: 5:00 AM – 10:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-2">
            <span className="text-xs font-mono tracking-widest text-[#E2FA00] uppercase mb-2 col-span-2 lg:col-span-1">
              // PROGRAMS
            </span>
            {[
              { name: "Hypertrophy & Strength", href: "#programs" },
              { name: "Olympic Weightlifting", href: "#programs" },
              { name: "Combat & Martial Arts", href: "#programs" },
              { name: "Biometric Recovery", href: "#programs" },
              { name: "Private 1-on-1 Elite", href: "#programs" },
              { name: "VO2 Max Testing", href: "#facility" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-2">
            <span className="text-xs font-mono tracking-widest text-[#E2FA00] uppercase mb-2 col-span-2 lg:col-span-1">
              // EXPLORE
            </span>
            {[
              { name: "About FIT22", href: "#about" },
              { name: "25,000+ Sq Ft Facility", href: "#facility" },
              { name: "Master Trainers", href: "#trainers" },
              { name: "Elite Memberships", href: "#membership" },
              { name: "Verified Stories", href: "#transformations" },
              { name: "Member Reviews", href: "#testimonials" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Newsletter / VIP Access */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between backdrop-blur-xl">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#E2FA00] uppercase">
                // VIP DISPATCH
              </span>
              <h3 className="text-xl font-bold mt-2 text-white">
                Join the Gurugram Elite Fitness Circle
              </h3>
              <p className="text-xs text-zinc-400 mt-2">
                Receive weekly athletic science breakdowns, nutritional protocols, and exclusive workshop invitations.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your VIP email..."
                  required
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#E2FA00] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="luxury-btn w-full py-3.5 text-xs tracking-wider uppercase justify-center"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>SUBSCRIBED TO DISPATCH</span>
                  </>
                ) : (
                  <>
                    <span>SUBSCRIBE TO DISPATCH</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Massive Editorial Typography */}
        <div className="py-12 md:py-16 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="cursor-pointer group flex flex-col items-start" onClick={scrollToTop} data-cursor="SCROLL TOP">
            <div className="relative h-28 sm:h-36 md:h-44 w-auto max-w-[600px] flex items-center group-hover:scale-105 transition-transform duration-300 mb-2">
              <Image
                src="/images/GYM_LOGO.png"
                alt="FIT22 GYM"
                width={600}
                height={180}
                className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(226,250,0,0.15)]"
              />
            </div>
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mt-2 group-hover:text-white transition-colors">
              ↑ CLICK TO RETURN TO SUMMIT
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {[
              { name: "INSTAGRAM", href: "https://instagram.com" },
              { name: "YOUTUBE", href: "https://youtube.com" },
              { name: "TWITTER", href: "https://twitter.com" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 hover:text-[#E2FA00] hover:border-[#E2FA00]/50 hover:bg-white/10 transition-all shadow-md"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} FIT22 GYM INDIA PVT LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#terms" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="#cookies" className="hover:text-white transition-colors">BIOMETRIC DATA</a>
            <span className="text-[#E2FA00]">MADE IN GURUGRAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
