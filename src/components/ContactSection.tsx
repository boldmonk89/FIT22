"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#080808] relative overflow-hidden border-t border-white/10">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#FFED29]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Half: Refined Compact GET IN TOUCH TODAY */}
      <div className="py-12 sm:py-16 relative z-10 flex items-center justify-start border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tight text-[#FFED29] leading-[0.9] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              GET IN TOUCH <br /> TODAY
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Bottom Half: Compact Solid Normal Yellow Footer Bar with FIT22 LOGO */}
      <div className="bg-[#FFED29] text-black w-full py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Prominent Large Transparent FIT22 LOGO in Footer */}
          <div className="mb-8 flex items-center justify-start">
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/GYM_LOGO.png"
                alt="FIT22 GYM LOGO"
                width={800}
                height={250}
                className="h-24 sm:h-32 md:h-40 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Column 1: BRANCH ADDRESSES (Clickable Google Maps Links!) */}
            <div className="flex flex-col items-start bg-black/[0.04] sm:bg-transparent p-5 sm:p-0 rounded-2xl sm:rounded-none border border-black/10 sm:border-0">
              <h3 className="text-sm sm:text-lg font-black italic uppercase tracking-tight mb-3 border-b-2 border-black pb-0.5 w-full sm:w-auto">
                BRANCH ADDRESSES
              </h3>
              <div className="text-xs sm:text-sm font-bold italic leading-relaxed flex flex-col gap-3.5 w-full">
                <a
                  href="https://maps.google.com/?q=Fit22+The+Gym+Sector+4+Gurugram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-start gap-2 text-black group"
                  title="Click to view Sector 4 Arena on Google Maps"
                >
                  <svg className="w-4 h-4 shrink-0 mt-0.5 fill-current text-black group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Sec 4: Opp. CCA School, Laxman Vihar Ph 2, 122006</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Fit22+The+Gym+Sector+52+Wazirabad+Gurugram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-start gap-2 text-black group"
                  title="Click to view Sector 52 Arena on Google Maps"
                >
                  <svg className="w-4 h-4 shrink-0 mt-0.5 fill-current text-black group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Sec 52: 4th Flr, Plot 48, near Devi Lal Park, 122003</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Fit22+The+Gym+Palam+Vihar+Gurugram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-start gap-2 text-black group"
                  title="Click to view Palam Vihar Arena on Google Maps"
                >
                  <svg className="w-4 h-4 shrink-0 mt-0.5 fill-current text-black group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Palam Vihar: C10, opp. B Block Rd, Ext, 122017</span>
                </a>
              </div>
            </div>

            {/* Column 2: DIRECT CALL BY BRANCH (Icon + Branch Name only!) */}
            <div className="flex flex-col items-start bg-black/[0.04] sm:bg-transparent p-5 sm:p-0 rounded-2xl sm:rounded-none border border-black/10 sm:border-0">
              <h3 className="text-sm sm:text-lg font-black italic uppercase tracking-tight mb-3 border-b-2 border-black pb-0.5 w-full sm:w-auto">
                DIRECT CALL BY BRANCH
              </h3>
              <div className="text-xs sm:text-sm font-bold italic leading-relaxed w-full flex flex-col gap-3.5">
                <a href="tel:+919962870777" className="inline-flex items-center gap-3 hover:underline text-black group bg-white/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none" title="Click to call Sector 4 & Palam Vihar Arena">
                  <span className="w-7 h-7 sm:w-6 sm:h-6 rounded-full bg-black text-[#FFED29] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </span>
                  <span>SECTOR 4 & PALAM VIHAR</span>
                </a>
                <a href="tel:+919555829555" className="inline-flex items-center gap-3 hover:underline text-black group bg-white/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none" title="Click to call Sector 52 Arena">
                  <span className="w-7 h-7 sm:w-6 sm:h-6 rounded-full bg-black text-[#FFED29] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </span>
                  <span>SECTOR 52 ARENA</span>
                </a>
                <span className="text-[11px] block text-black/80 font-mono mt-1 pt-1 border-t border-black/10 sm:border-0">
                  Open Daily • 5:00 AM – 10:00 PM
                </span>
              </div>
            </div>

            {/* Column 3: INSTAGRAM SOCIALS */}
            <div className="flex flex-col items-start bg-black/[0.04] sm:bg-transparent p-5 sm:p-0 rounded-2xl sm:rounded-none border border-black/10 sm:border-0">
              <h3 className="text-sm sm:text-lg font-black italic uppercase tracking-tight mb-3 border-b-2 border-black pb-0.5 w-full sm:w-auto">
                INSTAGRAM SOCIALS
              </h3>
              <div className="text-xs sm:text-sm font-bold italic leading-relaxed w-full flex flex-col gap-3">
                <a href="https://instagram.com/fit22_thegym" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:underline text-black group bg-white/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none">
                  <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </span>
                  <span>@fit22_thegym</span>
                </a>
                <a href="https://instagram.com/fit22thegym_sector4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:underline text-black group bg-white/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none">
                  <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </span>
                  <span>@fit22thegym_sector4</span>
                </a>
                <span className="text-[11px] block text-black/80 font-mono mt-1 pt-1 border-t border-black/10 sm:border-0">
                  Follow for daily motivation
                </span>
              </div>
            </div>

            {/* Column 4: WHATSAPP BY BRANCH */}
            <div className="flex flex-col items-start bg-black/[0.04] sm:bg-transparent p-5 sm:p-0 rounded-2xl sm:rounded-none border border-black/10 sm:border-0">
              <h3 className="text-sm sm:text-lg font-black italic uppercase tracking-tight mb-3 border-b-2 border-black pb-0.5 w-full sm:w-auto">
                WHATSAPP BY BRANCH
              </h3>
              <div className="flex flex-col gap-3 w-full">
                {/* Sector 4 WhatsApp Button */}
                <a
                  href="https://wa.me/919962870777?text=Hi%20FIT22%20Sector%204%20Team%2C%20I%20want%20to%20inquire%20about%20membership%20and%20free%20trial%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-black uppercase text-xs sm:text-xs py-3 px-4 rounded-xl sm:rounded-full shadow-md transition-all group/wa w-full justify-start"
                >
                  <span className="w-6 h-6 rounded-full bg-white text-[#25D366] flex items-center justify-center shrink-0 shadow-sm group-hover/wa:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
                    </svg>
                  </span>
                  <span>SECTOR 4 CLUB</span>
                </a>

                {/* Sector 52 WhatsApp Button */}
                <a
                  href="https://wa.me/919555829555?text=Hi%20FIT22%20Sector%2052%20Team%2C%20I%20want%20to%20inquire%20about%20membership%20and%20free%20trial%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-black uppercase text-xs sm:text-xs py-3 px-4 rounded-xl sm:rounded-full shadow-md transition-all group/wa w-full justify-start"
                >
                  <span className="w-6 h-6 rounded-full bg-white text-[#25D366] flex items-center justify-center shrink-0 shadow-sm group-hover/wa:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
                    </svg>
                  </span>
                  <span>SECTOR 52 CLUB</span>
                </a>

                {/* Palam Vihar WhatsApp Button */}
                <a
                  href="https://wa.me/919962870777?text=Hi%20FIT22%20Palam%20Vihar%20Team%2C%20I%20want%20to%20inquire%20about%20membership%20and%20free%20trial%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-black uppercase text-xs sm:text-xs py-3 px-4 rounded-xl sm:rounded-full shadow-md transition-all group/wa w-full justify-start"
                >
                  <span className="w-6 h-6 rounded-full bg-white text-[#25D366] flex items-center justify-center shrink-0 shadow-sm group-hover/wa:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
                    </svg>
                  </span>
                  <span>PALAM VIHAR CLUB</span>
                </a>

                <div className="inline-flex items-center gap-2 text-xs font-bold italic mt-1 text-black pt-2 border-t border-black/10 sm:border-0">
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>info@fit22gym.in</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright line */}
          <div className="mt-8 pt-6 border-t border-black/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs font-black italic uppercase tracking-wider">
            <span>© {new Date().getFullYear()} FIT22 THE GYM. ALL RIGHTS RESERVED.</span>
            <span>GURUGRAM&apos;S PREMIER ATHLETIC CLUBS</span>
          </div>/div>

        </div>
      </div>

    </section>
  );
}
