'use client';

import React from 'react';
import { Phone, Calculator, Grid, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function MobileBottomBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* 1. Mobile Bottom Bar (Thumb Zone - Only theme switch on mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-2xl border-t border-zinc-200 dark:border-zinc-800 shadow-[0_-8px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.5)] px-2.5 py-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] transition-colors duration-300">
        <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
          
          {/* Portfolio */}
          <a
            href="#projects"
            className="flex flex-col items-center justify-center py-1 text-zinc-700 dark:text-zinc-300 hover:text-studio-gold dark:hover:text-studio-gold transition-colors active:scale-95"
          >
            <Grid className="w-4 h-4 mb-0.5 text-zinc-500 dark:text-zinc-400" />
            <span className="text-[9px] font-medium tracking-tight">Portfolio</span>
          </a>

          {/* Cost Calculator */}
          <a
            href="#calculator"
            className="flex flex-col items-center justify-center py-1 text-studio-bronze dark:text-studio-gold hover:opacity-80 transition-colors active:scale-95 relative"
          >
            <span className="absolute top-0 right-2 w-1.5 h-1.5 rounded-full bg-studio-gold animate-ping" />
            <Calculator className="w-4 h-4 mb-0.5 text-studio-bronze dark:text-studio-gold" />
            <span className="text-[9px] font-bold text-studio-bronze dark:text-studio-gold tracking-tight">Estimator</span>
          </a>

          {/* Direct Phone Call */}
          <a
            href="tel:+919062835130"
            className="flex flex-col items-center justify-center py-1 text-zinc-700 dark:text-zinc-300 hover:text-studio-gold dark:hover:text-studio-gold transition-colors active:scale-95"
          >
            <Phone className="w-4 h-4 mb-0.5 text-zinc-600 dark:text-zinc-400" />
            <span className="text-[9px] font-medium tracking-tight">Call</span>
          </a>

          {/* Direct Official WhatsApp with Original Logo */}
          <a
            href="https://wa.me/919062835130?text=Hi%20Kamran,%20I'm%20visiting%20your%20website%20and%20looking%20for%20home%20interior%20design%20in%20Kolkata."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 bg-[#25D366] text-white rounded-xl shadow-md active:scale-95 transition-all"
            aria-label="WhatsApp Chat"
          >
            <WhatsAppIcon className="w-4 h-4 mb-0.5 text-white" />
            <span className="text-[9px] font-black tracking-tight">WhatsApp</span>
          </a>

          {/* Sole Theme Switch Button on Mobile */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center py-1 text-zinc-700 dark:text-zinc-300 hover:text-studio-gold dark:hover:text-studio-gold transition-colors active:scale-95 cursor-pointer"
            aria-label="Toggle Dark / Light Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 mb-0.5 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 mb-0.5 text-zinc-800" />
            )}
            <span className="text-[9px] font-medium tracking-tight">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>

        </div>
      </div>

      {/* 2. Desktop Floating Theme Switch Button at Bottom Right */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-zinc-900/95 text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-800 shadow-luxury hover:border-studio-gold hover:shadow-gold-glow transition-all duration-300 backdrop-blur-xl cursor-pointer"
          aria-label="Toggle Theme Mode"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              <span className="text-xs font-semibold tracking-wide">Switch to Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-zinc-800 dark:text-zinc-200 group-hover:-rotate-12 transition-transform" />
              <span className="text-xs font-semibold tracking-wide">Switch to Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
