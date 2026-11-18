'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Calculator, ShieldCheck, Clock, Award, MapPin } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-24 overflow-hidden bg-[#FAF9F6] dark:bg-[#0A0A0A] transition-colors duration-300">
      {/* Background Subtle Radiant Blobs */}
      <div className="absolute top-0 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-studio-gold/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-60 sm:w-[400px] h-60 sm:h-[400px] bg-amber-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Meerab Crest Seal in Hero */}
        <div className="flex flex-col items-center justify-center mb-5 sm:mb-7">
          <div className="relative mb-3 group cursor-pointer">
            {/* Highlighted Radiant Gold Architectural Logo Mark */}
            <BrandLogo size="xl" withAura={true} className="hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Location / Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm text-[11px] sm:text-xs font-medium text-zinc-800 dark:text-zinc-200 transition-colors">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-studio-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-studio-gold"></span>
            </span>
            <MapPin className="w-3.5 h-3.5 text-studio-gold shrink-0" />
            <span className="truncate">Kolkata & Suburbs • Turnkey Luxury Interiors</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-14">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.18] sm:leading-[1.12] transition-colors [text-wrap:balance]">
            Designing Spaces That <br />
            <span className="italic font-normal text-studio-bronze dark:text-studio-gold">Feel Like Home.</span>
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-zinc-600 dark:text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed transition-colors [text-wrap:pretty]">
            Thoughtful, functional and timeless residential interiors crafted for modern apartments in Kolkata. Founded & led by <strong className="text-zinc-900 dark:text-studio-gold font-semibold">Kamran Ali</strong>.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="#calculator"
              className="w-full sm:w-auto h-12 px-7 rounded-full bg-studio-gold text-black hover:bg-studio-gold-light font-bold text-xs sm:text-sm tracking-wide shadow-gold-glow flex items-center justify-center gap-2 active:scale-98 transition-all group"
            >
              <Calculator className="w-4 h-4 text-black shrink-0" />
              <span>Calculate Your Interior Cost (60s)</span>
              <ArrowUpRight className="w-4 h-4 text-black shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto h-12 px-7 rounded-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-xs sm:text-sm tracking-wide hover:border-studio-gold hover:text-studio-gold transition-all flex items-center justify-center gap-2 active:scale-98 shadow-sm"
            >
              <span>Explore 20+ Finished Spaces</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Card Showcase */}
        <div className="relative mt-6 sm:mt-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-luxury bg-white dark:bg-zinc-950 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Primary Main Hero Photo */}
            <div className="md:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] md:min-h-[460px] overflow-hidden group">
              <Image
                src="/images/home/home_03_1206x907.jpg"
                alt="Luxury Modern Living Room in Kolkata by Meerab Arc Studio"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold px-2.5 py-0.5 sm:py-1 rounded-full bg-studio-gold/25 text-studio-gold border border-studio-gold/50 backdrop-blur-md mb-2 inline-block">
                  Featured Execution • Living Room
                </span>
                <h3 className="font-serif text-lg sm:text-2xl font-bold leading-tight text-white">
                  Bespoke Wall Detailing & Ambient Lighting
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-300 line-clamp-2 mt-1">
                  Custom fluted joinery, concealed LED channels, and ergonomic layout designed for urban Kolkata flats.
                </p>
              </div>
            </div>

            {/* Side Hero Highlights */}
            <div className="md:col-span-4 bg-zinc-50 dark:bg-zinc-950/80 p-5 sm:p-7 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 transition-colors">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-studio-bronze dark:text-studio-gold uppercase">
                  Studio Principles
                </span>
                <h4 className="font-serif text-base sm:text-xl font-bold text-zinc-900 dark:text-white mt-0.5 transition-colors">
                  Timeless & Personalized
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed transition-colors">
                  "Great design isn&apos;t just about how a space looks, but how it makes you feel when you return from Kolkata&apos;s bustling streets."
                </p>
              </div>

              {/* Quick Trust Highlights on Mobile */}
              <div className="space-y-2.5 pt-4 my-3 border-t border-zinc-200 dark:border-zinc-800 text-xs">
                <div className="flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200 font-medium transition-colors">
                  <Clock className="w-4 h-4 text-studio-gold shrink-0" />
                  <span>45-Day Move-In Guarantee</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200 font-medium transition-colors">
                  <ShieldCheck className="w-4 h-4 text-studio-gold shrink-0" />
                  <span>10-Year Marine Ply Warranty</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200 font-medium transition-colors">
                  <Award className="w-4 h-4 text-studio-gold shrink-0" />
                  <span>Personal Site Supervision by Kamran</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#projects"
                  className="text-xs font-bold text-studio-gold hover:underline flex items-center gap-1"
                >
                  <span>Explore 20 Kolkata projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
