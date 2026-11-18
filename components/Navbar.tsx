'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import InstagramIcon from '@/components/InstagramIcon';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/95 dark:bg-[#0A0A0A]/95 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name (With Glowing Highlighted Architectural Logo) */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            {/* Highlighted Radiant Gold Architectural Logo Mark */}
            <BrandLogo size="md" withAura={true} className="shrink-0" />

            <div className="flex flex-col justify-center leading-none">
              <span className="font-serif text-sm sm:text-lg font-bold tracking-wider text-zinc-900 dark:text-white uppercase transition-colors">
                MEERAB <span className="text-studio-bronze dark:text-studio-gold font-normal">ARC</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-studio-bronze dark:text-studio-gold font-bold uppercase font-sans mt-0.5">
                STUDIO • KOLKATA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-7 text-sm font-medium tracking-wide">
            <a href="#projects" className="text-zinc-700 hover:text-studio-gold dark:text-zinc-300 dark:hover:text-studio-gold transition-colors">
              Portfolio
            </a>
            <a href="#calculator" className="text-zinc-700 hover:text-studio-gold dark:text-zinc-300 dark:hover:text-studio-gold transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-studio-gold animate-ping" />
              Cost Estimator
            </a>
            <a href="#services" className="text-zinc-700 hover:text-studio-gold dark:text-zinc-300 dark:hover:text-studio-gold transition-colors">
              Services
            </a>
            <a href="#about" className="text-zinc-700 hover:text-studio-gold dark:text-zinc-300 dark:hover:text-studio-gold transition-colors">
              About Kamran Ali
            </a>
          </div>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Desktop Instagram Link */}
            <a
              href="https://www.instagram.com/meerab_arc_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex p-2 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-studio-gold hover:text-studio-gold transition-colors"
              title="Follow on Instagram @meerab_arc_studio"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* Desktop-only phone number */}
            <a 
              href="tel:+919062835130"
              className="hidden lg:flex px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-studio-gold hover:text-studio-gold transition-all text-xs font-medium items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-studio-gold" />
              <span>+91 9062835130</span>
            </a>

            {/* Quick WhatsApp Button with Official WhatsApp Logo */}
            <a
              href="https://wa.me/919062835130?text=Hi%20Kamran,%20I'm%20looking%20for%20home%20interior%20design%20in%20Kolkata."
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3.5 sm:px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide flex items-center gap-1.5 transition-all shadow-md active:scale-95 shrink-0"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 active:scale-95 transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF9F6] dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-5 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 text-sm font-medium">
            <a 
              href="#projects" 
              onClick={() => setMobileOpen(false)}
              className="py-3 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between"
            >
              <span>Featured Portfolio Spaces</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileOpen(false)}
              className="py-3 text-studio-gold font-semibold border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between"
            >
              <span>Instant Kolkata Cost Calculator</span>
              <span className="text-[10px] bg-studio-gold/20 text-studio-gold px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Free</span>
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileOpen(false)}
              className="py-3 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between"
            >
              <span>Turnkey Services & Timeline</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileOpen(false)}
              className="py-3 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between"
            >
              <span>About Studio & Kamran Ali</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </a>
            <a 
              href="https://www.instagram.com/meerab_arc_studio"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-zinc-800 dark:text-zinc-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                <span>Instagram: @meerab_arc_studio</span>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/919062835130?text=Hi%20Kamran,%20I'm%20looking%20for%20home%20interior%20design%20in%20Kolkata."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#25D366] text-white text-center font-bold text-xs flex items-center justify-center gap-2 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp with Kamran</span>
            </a>
            <a
              href="tel:+919062835130"
              className="w-full py-3 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-center font-medium text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-studio-gold" />
              <span>Call Directly: +91 9062835130</span>
            </a>

            {/* Secret Owner Portal Access in Mobile Drawer */}
            <div className="pt-2 text-center">
              <a
                href="/owner-login"
                onClick={() => setMobileOpen(false)}
                className="text-[10px] text-zinc-400 dark:text-zinc-600 hover:text-studio-gold transition-colors inline-flex items-center gap-1"
              >
                <span>🔒 Studio Portal Access</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
