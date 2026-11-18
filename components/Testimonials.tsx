import React from 'react';
import { Star, MapPin } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Anirban & Debarati Mukherjee',
    location: 'Uniworld City, New Town (Action Area 3)',
    flat: '3 BHK Flat (1,450 sq.ft)',
    text: 'Kamran and his team delivered our flat within 43 days without a single compromise on finish. The ambient cove lighting and the fluted wall panelling in our living room receive compliments from everyone who visits.',
    highlight: 'Completed in 43 Days'
  },
  {
    name: 'Rahul & Sneha Agarwal',
    location: 'Hiland Park, EM Bypass',
    flat: '2 BHK Flat (980 sq.ft)',
    text: 'Our biggest worry was kitchen dampness and moisture during Kolkata monsoons. Meerab Arc Studio used genuine BWP Marine ply and soft-close Hettich channels. Two monsoons later, zero issues. Truly professional.',
    highlight: '100% Moisture Proof'
  },
  {
    name: 'Dr. S. Chatterjee',
    location: 'South City Residency, Prince Anwar Shah Rd',
    flat: '3 BHK Luxury Apartment',
    text: 'What sets Kamran apart is that he doesn’t disappear after taking an advance. He was on-site almost every alternate day supervising the carpentry and electrical points. Transparent billing with zero unexpected surprises.',
    highlight: 'Direct Founder Supervision'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-studio-gold uppercase bg-studio-gold/15 px-3 py-1 rounded-full border border-studio-gold/30">
            Client Voices
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mt-3 transition-colors">
            Trusted by Homeowners <br className="hidden sm:inline" />
            <span className="text-studio-bronze dark:text-studio-gold italic">Across Kolkata</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 transition-colors">
            Read real experiences from families who trusted Meerab Arc Studio with their dream homes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-studio-gold/60 transition-all duration-300"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-studio-gold" />
                  ))}
                  <span className="text-xs font-bold text-zinc-900 dark:text-white ml-1.5 transition-colors">5.0</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic font-serif transition-colors">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-zinc-900 dark:text-white transition-colors">
                      {rev.name}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 transition-colors">
                      <MapPin className="w-3 h-3 text-studio-gold shrink-0" />
                      <span>{rev.location}</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800/40">
                    {rev.highlight}
                  </span>
                </div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 font-medium transition-colors">
                  {rev.flat}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
