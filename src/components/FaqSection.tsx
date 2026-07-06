"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// No Lucide icons used to maintain ultra-premium typographic look

const FAQS = [
  {
    q: "WHAT MAKES FIT22 DIFFERENT FROM OTHER GYMS IN GURUGRAM?",
    a: "We operate as a high-performance human engineering laboratory rather than a commercial gym. We enforce a strict member cap to guarantee zero equipment wait times. Our facility features 100% Swedish Eleiko barbells, competition platforms, and an integrated biometric recovery lounge with 4°C magnesium cold plunges and full-spectrum infrared saunas.",
  },
  {
    q: "HOW DOES THE 3D BIOMETRIC & VO2 MAX ASSESSMENT WORK?",
    a: "Upon onboarding, every member undergoes a medical-grade DEXA scan and metabolic VO2 max protocol on our cycle/run ergometers. This data allows our PhD exercise physiologists to calculate your precise anaerobic threshold and daily calorie/macronutrient requirements.",
  },
  {
    q: "CAN I RESERVE A PRIVATE TRAINING STUDIO OR LOCKER VALET?",
    a: "Yes. Our Titanium VIP Elite members receive guaranteed unlimited reservations for our enclosed acoustic 1-on-1 coaching studios. Dedicated permanent locker valet and custom laundry services are included in Gold and Titanium tiers.",
  },
  {
    q: "WHERE IS FIT22 LOCATED IN GURUGRAM AND IS THERE PARKING?",
    a: "We are located at No.1277, opposite to CCA School, Laxman Vihar Phase 2, Sector 4, Gurugram, Haryana 122006. We provide dedicated parking spaces for all active members.",
  },
  {
    q: "WHAT ARE YOUR OPENING HOURS AND GUEST PASS POLICIES?",
    a: "Our facility is open daily from 5:00 AM to 10:00 PM IST without exception, including public holidays. Members on Quarterly and Yearly commitments receive 2 complimentary VIP guest passes per month.",
  },
  {
    q: "HOW CAN I BOOK A COMPLIMENTARY VIP TRIAL SESSION?",
    a: "You can book a free 1-on-1 trial session by submitting the inquiry form below or contacting our reception desk directly via Phone (+91 99628 70777). A master coach will conduct your initial posture and strength assessment during your visit.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 bg-[#080808] relative overflow-hidden bg-grain border-t border-white/10">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#E2FA00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center pb-16">
          <span className="text-xs font-mono tracking-widest text-[#E2FA00] uppercase block mb-3">
            // FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-none uppercase text-white">
            CLARITY &amp; <span className="text-gradient-yellow">PROTOCOLS.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 font-light">
            Everything you need to know about our memberships, biometric testing, and Gurugram sanctuary rules.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                className={`rounded-2xl transition-all duration-300 border cursor-pointer overflow-hidden ${
                  isOpen
                    ? "bg-[#111] border-[#E2FA00]/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
                data-cursor={isOpen ? "CLOSE" : "EXPAND"}
              >
                <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono shrink-0 ${isOpen ? "text-[#E2FA00] font-bold" : "text-zinc-500"}`}>
                      0{idx + 1} //
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold tracking-tight uppercase transition-colors ${isOpen ? "text-white" : "text-zinc-300"}`}>
                      {faq.q}
                    </h3>
                  </div>

                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${isOpen ? "bg-[#E2FA00] text-black shadow-[0_0_15px_rgba(226,250,0,0.4)]" : "bg-white/5 text-zinc-400"} font-mono text-base font-bold`}>
                    {isOpen ? "-" : "+"}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 pt-2 sm:px-8 sm:pb-8 sm:pt-2 border-t border-white/5 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom support box */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#E2FA00]/10 border border-[#E2FA00]/30 flex items-center justify-center text-[#E2FA00] font-mono text-lg font-bold shrink-0">
              ?
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase">HAVE A SPECIFIC CLINICAL QUESTION?</h4>
              <p className="text-xs text-zinc-400 mt-1">Speak directly with our Director of Biometric Performance via WhatsApp.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919962870777"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-btn shrink-0 text-xs py-3.5 px-6 uppercase"
          >
            <span>WHATSAPP RECEPTION</span>
          </a>
        </div>

      </div>
    </section>
  );
}
