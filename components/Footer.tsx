'use client';

import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Lock } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import InstagramIcon from '@/components/InstagramIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-zinc-950 dark:bg-black text-white pt-16 pb-12 border-t border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-850">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5">
              {/* Highlighted Radiant Logo Emblem */}
              <BrandLogo size="lg" withAura={true} className="shrink-0" />

              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-white uppercase block">
                  MEERAB <span className="text-studio-gold font-normal">| ARC STUDIO</span>
                </span>
                <span className="text-xs text-studio-gold tracking-widest uppercase font-semibold">
                  INTERIOR ARCHITECTURE • KOLKATA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              We design thoughtful, functional and timeless spaces that reflect your lifestyle, personality and purpose. Turnkey execution across Kolkata.
            </p>

            <div className="pt-2 text-xs text-zinc-300">
              Founded and led by <strong className="text-studio-gold font-semibold">Kamran Ali</strong>
            </div>

            {/* Social Icons Row */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/meerab_arc_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-pink-400 hover:text-white hover:border-pink-500 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 transition-all shadow-sm"
                title="Follow on Instagram @meerab_arc_studio"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919062835130?text=Hi%20Kamran,%20I'm%20looking%20for%20home%20interior%20design%20in%20Kolkata."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all shadow-sm"
                title="Chat on WhatsApp"
                aria-label="WhatsApp Contact"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href="tel:+919062835130"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-studio-gold hover:bg-studio-gold hover:text-black hover:border-studio-gold transition-all shadow-sm"
                title="Call Studio Directly"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-studio-gold">
              Explore Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#projects" className="hover:text-studio-gold transition-colors">Living Room Detailing</a></li>
              <li><a href="#projects" className="hover:text-studio-gold transition-colors">Modern Modular Kitchens</a></li>
              <li><a href="#projects" className="hover:text-studio-gold transition-colors">Main Entrance & Foyer</a></li>
              <li><a href="#projects" className="hover:text-studio-gold transition-colors">Kids Bedroom Design</a></li>
              <li><a href="#projects" className="hover:text-studio-gold transition-colors">Master Suite & Wardrobes</a></li>
              <li><a href="#calculator" className="text-studio-gold hover:underline">Instant Cost Calculator</a></li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-studio-gold">
              Get in Touch
            </h4>
            
            <div className="space-y-2.5 text-xs text-zinc-300">
              <a 
                href="https://wa.me/919062835130?text=Hi%20Kamran,%20I%20want%20to%20consult%20about%20interior%20design%20in%20Kolkata."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: +91 9062835130</span>
              </a>

              <a 
                href="tel:+919062835130"
                className="flex items-center gap-2.5 hover:text-studio-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-studio-gold shrink-0" />
                <span>+91 9062835130 (Direct Calling)</span>
              </a>

              <a 
                href="https://www.instagram.com/meerab_arc_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-pink-400 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Instagram: @meerab_arc_studio</span>
              </a>

              <a 
                href="mailto:kmd1290@gmail.com"
                className="flex items-center gap-2.5 hover:text-studio-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-studio-gold shrink-0" />
                <span>kmd1290@gmail.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-zinc-400 pt-1">
                <MapPin className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                <span>Kolkata, West Bengal, India • Serving all residential zones</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-studio-gold hover:text-studio-gold-light transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright Text IS THE CLICKABLE SECRET LINK TO OWNER LOGIN */}
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div className="flex items-center">
            {/* The entire copyright text is a prominent, clickable touch target */}
            <a
              href="/owner-login"
              className="group inline-flex items-center gap-2 py-3 px-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-studio-gold text-zinc-300 hover:text-studio-gold transition-all cursor-pointer active:scale-95 shadow-sm"
              title="Studio Owner Portal (Kamran Ali)"
            >
              <Lock className="w-3.5 h-3.5 text-studio-gold/70 group-hover:text-studio-gold transition-colors shrink-0" />
              <span className="font-medium text-xs">
                © {new Date().getFullYear()} <strong className="text-white group-hover:text-studio-gold transition-colors font-semibold">Meerab | Arc Studio</strong>. All rights reserved.
              </span>
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] text-zinc-500">
            <span>New Town • Rajarhat • Salt Lake • EM Bypass • South Kolkata</span>
          </div>
        </div>

        {/* Mobile Safe Bottom Spacing to ensure sticky thumb bar NEVER covers the copyright link */}
        <div className="h-28 md:hidden" aria-hidden="true" />

      </div>
    </footer>
  );
}
