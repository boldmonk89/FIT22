"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Sparkles, Zap, ArrowUpRight, ShieldCheck } from "lucide-react";

type BillingCycle = "monthly" | "quarterly" | "yearly";

const TIERS = [
  {
    name: "SILVER ATHLETE",
    badge: "ESSENTIAL ACCESS",
    description: "Built for self-directed athletes demanding world-class equipment and immaculate training environments.",
    prices: {
      monthly: "15,000",
      quarterly: "13,500",
      yearly: "11,500",
    },
    popular: false,
    features: [
      { name: "Unrestricted Strength & Cardio Suite Access", included: true },
      { name: "Eleiko Olympic Weightlifting Platforms", included: true },
      { name: "Luxury Locker & Shower Valet", included: true },
      { name: "1 Biometric & VO2 Max Assessment", included: true },
      { name: "Contrast Recovery Suite (Cold Plunge & Sauna)", included: false },
      { name: "Private 1-on-1 Coaching Sessions", included: false },
      { name: "Dedicated Hyperbaric Oxygen Therapy", included: false },
    ],
  },
  {
    name: "GOLD OLYMPIAN",
    badge: "MOST POPULAR",
    description: "Our core performance tier. Integrating heavy Olympic training with daily contrast cellular recovery protocols.",
    prices: {
      monthly: "25,000",
      quarterly: "22,000",
      yearly: "18,500",
    },
    popular: true,
    features: [
      { name: "Unrestricted Strength & Cardio Suite Access", included: true },
      { name: "Eleiko Olympic Weightlifting Platforms", included: true },
      { name: "Luxury Locker & Shower Valet", included: true },
      { name: "Quarterly Biometric & VO2 Max Assessments", included: true },
      { name: "Unlimited Contrast Recovery Suite Access", included: true },
      { name: "2 Monthly 1-on-1 PT Master Sessions", included: true },
      { name: "Dedicated Hyperbaric Oxygen Therapy", included: false },
    ],
  },
  {
    name: "TITANIUM VIP ELITE",
    badge: "ULTIMATE PERFORMANCE",
    description: "The pinnacle of high-performance human engineering. Unrestricted private studio reservations and full medical-grade recovery.",
    prices: {
      monthly: "45,000",
      quarterly: "39,000",
      yearly: "32,000",
    },
    popular: false,
    features: [
      { name: "Unrestricted Strength & Cardio Suite Access", included: true },
      { name: "Eleiko Olympic Weightlifting Platforms", included: true },
      { name: "Private Locker Valet & Custom Laundry", included: true },
      { name: "Monthly Biometric & VO2 Max Assessments", included: true },
      { name: "Unlimited Contrast Recovery Suite Access", included: true },
      { name: "Weekly 1-on-1 Master PT Coaching (4/mo)", included: true },
      { name: "Unlimited Hyperbaric Oxygen & IV Therapy", included: true },
    ],
  },
];

export default function MembershipSection() {
  const [cycle, setCycle] = useState<BillingCycle>("yearly");
  const [showTable, setShowTable] = useState(false);

  return (
    <section id="membership" className="py-28 bg-[#080808] relative overflow-hidden bg-grain border-t border-white/10">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E2FA00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title & Billing Cycle Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#E2FA00] uppercase block mb-3">
              // INVEST IN HUMAN PERFORMANCE
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase text-white">
              ELITE <span className="text-gradient-yellow">TIERS.</span>
            </h2>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-mono text-zinc-400">SELECT COMMITMENT:</span>
            <div className="bg-white/5 border border-white/10 p-1.5 rounded-full flex items-center gap-1 backdrop-blur-md">
              {(["monthly", "quarterly", "yearly"] as BillingCycle[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all uppercase relative ${
                    cycle === c
                      ? "bg-[#E2FA00] text-black font-bold shadow-[0_0_15px_rgba(226,250,0,0.4)]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {c}
                  {c === "yearly" && (
                    <span className="absolute -top-3 -right-2 bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">
                      SAVE 25%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-stretch">
          {TIERS.map((tier, idx) => {
            const isPop = tier.popular;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 border ${
                  isPop
                    ? "bg-gradient-to-b from-[#1c1c1c] to-[#111111] border-[#E2FA00] shadow-[0_20px_60px_rgba(226,250,0,0.15)] scale-[1.02] lg:-translate-y-4"
                    : "bg-[#111] border-white/10 hover:border-white/25"
                }`}
                data-cursor={isPop ? "TOP CHOICE" : "SELECT TIER"}
              >
                {/* Popular Badge */}
                {isPop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E2FA00] text-black font-mono text-[10px] font-extrabold tracking-widest px-4 py-1 rounded-full uppercase shadow-[0_0_15px_rgba(226,250,0,0.6)] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono tracking-widest uppercase ${isPop ? "text-[#E2FA00]" : "text-zinc-400"}`}>
                      // TIER 0{idx + 1}
                    </span>
                    {!isPop && (
                      <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded bg-white/5 text-zinc-400">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed min-h-[48px]">
                    {tier.description}
                  </p>

                  {/* Price Display */}
                  <div className="mt-8 pt-8 border-t border-white/10 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      ₹{tier.prices[cycle]}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      / MONTH + GST
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 block mt-1">
                    {cycle === "yearly" ? "Billed annually (Best Value)" : `Billed ${cycle}`}
                  </span>

                  {/* Features List */}
                  <div className="mt-8 space-y-3.5">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        {feat.included ? (
                          <div className="w-5 h-5 rounded-full bg-[#E2FA00]/10 border border-[#E2FA00]/30 flex items-center justify-center text-[#E2FA00] shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-600 shrink-0 mt-0.5">
                            <X className="w-3 h-3" />
                          </div>
                        )}
                        <span className={`text-xs sm:text-sm ${feat.included ? "text-zinc-200" : "text-zinc-600 line-through"}`}>
                          {feat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#book-trial"
                  className={`mt-10 w-full py-4 rounded-full text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all ${
                    isPop
                      ? "luxury-btn justify-center shadow-[0_0_25px_rgba(226,250,0,0.4)]"
                      : "luxury-btn-dark justify-center"
                  }`}
                >
                  <span>SELECT {tier.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Toggle Comparison Table */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowTable(!showTable)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest uppercase text-zinc-300 hover:text-[#E2FA00] hover:border-[#E2FA00]/40 transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-[#E2FA00]" />
            <span>{showTable ? "HIDE FULL BIOMETRIC COMPARISON TABLE" : "VIEW FULL BIOMETRIC COMPARISON TABLE"}</span>
          </button>

          <AnimatePresence>
            {showTable && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 overflow-x-auto rounded-3xl border border-white/15 bg-[#0a0a0a] text-left p-6 sm:p-8"
              >
                <table className="w-full border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-mono text-zinc-400 font-bold uppercase">
                      <th className="py-4 px-4 text-left">BIOMETRIC / FACILITY PROTOCOL</th>
                      <th className="py-4 px-4 text-center text-zinc-300">SILVER ATHLETE</th>
                      <th className="py-4 px-4 text-center text-[#E2FA00] font-black">GOLD OLYMPIAN</th>
                      <th className="py-4 px-4 text-center text-white font-black">TITANIUM VIP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      ["Eleiko Competition Barbells & Platforms", "Included", "Included", "Included + Priority"],
                      ["3D Body Composition & HRV Readiness Scans", "1x Upon Joining", "Quarterly (4x/yr)", "Monthly + Daily HRV"],
                      ["Magnesium Cold Plunge & Infrared Sauna", "₹1,500 / session", "Unlimited", "Unlimited + Guest"],
                      ["1-on-1 Master PT Sessions", "Available @ ₹3,000/hr", "2 Included / Month", "Weekly Included (4/mo)"],
                      ["Private Studio Suite Reservation", "Not Available", "1 hr / month", "Unlimited Guaranteed"],
                      ["Locker Valet & Custom Laundry Concierge", "Day Locker Only", "Reserved Locker", "VIP Permanent Valet"],
                      ["Hyperbaric Oxygen & IV Drip Therapy", "Not Available", "20% Member Discount", "Unlimited VIP Access"],
                    ].map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/[0.02]">
                        <td className="py-4 px-4 font-semibold text-zinc-200">{row[0]}</td>
                        <td className="py-4 px-4 text-center text-zinc-400">{row[1]}</td>
                        <td className="py-4 px-4 text-center text-[#E2FA00] font-bold bg-[#E2FA00]/[0.03]">{row[2]}</td>
                        <td className="py-4 px-4 text-center text-white font-bold">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
