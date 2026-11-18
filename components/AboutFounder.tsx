import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle, Sparkles, Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function AboutFounder() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF9F6] dark:bg-[#0A0A0A] border-b border-zinc-200 dark:border-zinc-800 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Portrait Frame with Gold Border & Glow */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-studio-gold shadow-gold-glow bg-zinc-900">
                <Image
                  src="/images/about-us/about-us_01_720x735.jpg"
                  alt="Kamran Ali, Founder and Principal Designer of Meerab Arc Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-studio-gold block">
                    Founder & Principal Designer
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Kamran Ali
                  </h3>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    Meerab Arc Studio • Kolkata
                  </p>
                </div>
              </div>

              {/* Floating Guarantee Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white dark:bg-zinc-900 p-3.5 sm:p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-luxury max-w-[210px] backdrop-blur-md transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-studio-gold/20 flex items-center justify-center text-studio-gold shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif text-xs font-bold text-zinc-900 dark:text-white">Direct Oversight</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Every site supervised personally</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Story & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-gold/15 text-studio-gold text-xs font-semibold uppercase tracking-wider border border-studio-gold/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Behind the Studio</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight transition-colors">
              Spaces Tailored to Your Lifestyle, <br />
              <span className="text-studio-bronze dark:text-studio-gold italic">Personality & Purpose.</span>
            </h2>

            <blockquote className="border-l-2 border-studio-gold pl-4 py-1 text-sm sm:text-base italic text-zinc-800 dark:text-zinc-300 font-serif transition-colors">
              "We believe a home should be designed thoughtfully. Great design isn&apos;t just about how a space looks, but how it makes you feel every single day."
              <span className="block text-xs font-sans not-italic text-studio-bronze dark:text-studio-gold mt-1 font-semibold">
                — Kamran Ali, Founder
              </span>
            </blockquote>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">
              Based in Kolkata, <strong className="text-zinc-900 dark:text-white">Meerab | Arc Studio</strong> was founded to bridge the gap between expensive architectural firms and unorganized local contractors. We specialize in contemporary, functional, and clutter-free interiors for modern apartments, balancing aesthetic luxury with everyday durability.
            </p>

            {/* Kolkata Real-Estate & Climate Specifics */}
            <div className="bg-white dark:bg-zinc-900/70 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-3 shadow-sm transition-colors">
              <h4 className="font-serif text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2 transition-colors">
                <span className="text-studio-bronze dark:text-studio-gold">Specially Engineered for Kolkata Homes:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900 dark:text-white">BWP Marine Ply (IS:710):</strong> 100% moisture & water-resistant to withstand heavy Kolkata humidity & monsoon seepage.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900 dark:text-white">Anti-Termite Treatment:</strong> Multi-layer chemical protection on all core woodwork frames and wall partitions.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900 dark:text-white">Heavy Spice Kitchens:</strong> Heat-resistant quartz/granite surfaces and high-suction chimney ducting for Indian cooking.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900 dark:text-white">Space Optimization:</strong> Concealed storage solutions designed for 2BHK and 3BHK flats in New Town, Rajarhat & EM Bypass.</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919062835130?text=Hi%20Kamran,%20I'd%20like%20to%20discuss%20an%20interior%20project%20in%20Kolkata."
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Message Kamran on WhatsApp</span>
              </a>
              <a
                href="tel:+919062835130"
                className="h-11 px-5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-xs flex items-center gap-2 hover:border-studio-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-studio-gold" />
                <span>Call: +91 9062835130</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
