"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Zap } from "lucide-react";

// Inline SVG components for social icons
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const TRAINERS = [
  {
    name: "VIKRAMADITYA RATHORE",
    role: "HEAD OF HUMAN PERFORMANCE",
    experience: "14+ YEARS EXP",
    certifications: "NSCA CSCS • Ex-Olympic Weightlifting Coach",
    achievements: "Coached 18 National Champions & Commonwealth Athletes",
    image: "/images/gym-2.jpg",
    bio: "Specializing in kinetic chain biomechanics and explosive neuromuscular adaptation for professional sports athletes.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "DR. ANANYA SHARMA",
    role: "DIRECTOR OF BIOMETRIC LONGEVITY",
    experience: "11+ YEARS EXP",
    certifications: "Ph.D. Exercise Physiology • Precision Nutrition L2",
    achievements: "Pioneered FIT22 Cryotherapy & Contrast Protocol",
    image: "/images/gym-3.jpg",
    bio: "Focusing on mitochondrial optimization, hormonal regulation, and cellular recovery for high-performing executives.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "KABIR SINGHANIA",
    role: "MASTER COMBAT & AGILITY COACH",
    experience: "9+ YEARS EXP",
    certifications: "Pro Muay Thai Champion • Functional Movement Specialist",
    achievements: "Undefeated National Striking Titleist (2018-2022)",
    image: "/images/gym-4.jpg",
    bio: "Integrating tactical striking agility with metabolic conditioning to build unshakable cardiovascular endurance and mental fortitude.",
    social: { instagram: "#", linkedin: "#" },
  },
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="py-28 bg-[#050505] relative overflow-hidden bg-grain border-t border-white/10">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E2FA00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#E2FA00] uppercase block mb-3">
              // THE MASTER ARCHITECTS
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase text-white">
              ELITE <span className="text-gradient-yellow">COACHING.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light">
            Every coach at FIT22 holds top-tier international credentials (NSCA, CSCS, ASCA) or Olympic competition background. Zero fitness influencers.
          </p>
        </div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl overflow-hidden border border-white/15 bg-[#111] flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.8)]"
              data-cursor="COACH BIO"
            >
              {/* Image Banner */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-black">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top filter brightness-[0.8] contrast-110 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest text-[#E2FA00] uppercase font-bold">
                    {trainer.experience}
                  </span>
                </div>

                {/* Social Icons Hover */}
                <div className="absolute top-5 right-5 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={trainer.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#E2FA00] hover:text-black transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={trainer.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#E2FA00] hover:text-black transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bio & Certifications Bottom Panel */}
              <div className="p-8 flex flex-col justify-between flex-1 bg-gradient-to-b from-[#111] to-[#161616]">
                <div>
                  <span className="text-xs font-mono text-[#E2FA00] uppercase tracking-wider block">
                    // {trainer.role}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight leading-tight mt-1 group-hover:text-[#E2FA00] transition-colors">
                    {trainer.name}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {trainer.bio}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#E2FA00] shrink-0 mt-0.5" />
                      <span className="text-xs font-mono text-zinc-300 leading-tight">
                        {trainer.certifications}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-[#E2FA00] shrink-0 mt-0.5" />
                      <span className="text-xs font-mono text-zinc-400 leading-tight">
                        {trainer.achievements}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="#book-trial"
                  className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono tracking-widest text-[#E2FA00] uppercase group-hover:translate-x-1 transition-transform"
                >
                  <span>REQUEST 1-ON-1 CONSULTATION</span>
                  <Zap className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
