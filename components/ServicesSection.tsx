import React from 'react';
import { Compass, Palette, Hammer, ClipboardCheck, ArrowUpRight, Check } from 'lucide-react';

const SERVICES = [
  {
    icon: Compass,
    title: 'Space Planning & Layouts',
    tagline: 'Maximizing every square foot',
    description: 'Intelligent 2D & 3D space optimization designed for modern high-rises and apartments in Kolkata. Seamless traffic flow, optimal natural lighting, and Vastu-compliant orientations.',
    points: ['2D Floor Plans & Furniture Circulation', '3D Photorealistic Previews', 'Vastu Shastra Principles Compliance']
  },
  {
    icon: Palette,
    title: 'Interior Design & Styling',
    tagline: 'Curated aesthetics that feel like home',
    description: 'Harmonious color palettes, false ceiling designs with concealed ambient lighting, premium wall textures, and tailored soft furnishings that reflect your personal taste.',
    points: ['Designer False Ceiling & Cove Lighting', 'Wall Panelling, Fluting & Textures', 'Curated Wallpaper & Color Palettes']
  },
  {
    icon: Hammer,
    title: 'Custom Furniture & Joinery',
    tagline: 'Tailored built-in precision',
    description: 'Precision carpentry crafted from high-grade BWP Marine Plywood. Custom-dimensioned wardrobes, floating TV consoles, shoe cabinetry, and ergonomic modular kitchens.',
    points: ['Boiling Water Proof (BWP) Marine Ply', 'Soft-Close Hardware (Hettich / Hafele)', 'Anti-Termite & Moisture-Proof Finishes']
  },
  {
    icon: ClipboardCheck,
    title: 'Project Execution & Supervision',
    tagline: '100% turnkey peace of mind',
    description: 'Direct on-site management led by Kamran Ali. We supervise civil work, electricals, plumbing, carpentry, and final polishing so you never have to deal with multiple chaotic contractors.',
    points: ['Strict 45-Day Working Timeline', 'Daily Photo Updates on WhatsApp', 'Zero Hidden Cost Guarantee']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left sm:text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-studio-gold uppercase bg-studio-gold/15 px-3 py-1 rounded-full border border-studio-gold/30">
            End-To-End Solutions
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight mt-3 transition-colors">
            From Concept to Completion, <br className="hidden sm:inline" />
            <span className="italic text-studio-bronze dark:text-studio-gold font-normal">We Handle Every Detail.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">
            No juggling between different carpenters, electricians, and painters. Meerab Arc Studio delivers a unified, premium turnkey experience across Kolkata.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-studio-gold/60 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-5 text-studio-gold shadow-sm">
                    <Icon className="w-6 h-6 text-studio-gold" />
                  </div>
                  
                  <span className="text-[11px] font-bold tracking-wider text-studio-bronze dark:text-studio-gold uppercase block mb-1">
                    {srv.tagline}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
                  {srv.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-zinc-800 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-studio-gold shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Consultation Callout Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-luxury">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold text-studio-gold tracking-widest uppercase block mb-1">
              Have a floor plan ready?
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-white">
              Get a Free 2D Layout & Space Optimization Review
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Send us your builder brochure or flat floor plan on WhatsApp. Kamran Ali will personally review it and share layout suggestions.
            </p>
          </div>

          <a
            href="https://wa.me/919062835130?text=Hi%20Kamran,%20I%20have%20my%20flat%20floor%20plan.%20Can%20you%20review%20it%20and%20share%20space%20planning%20ideas?"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3.5 rounded-full bg-studio-gold text-black hover:bg-studio-gold-light font-bold text-xs sm:text-sm tracking-wide transition-all shadow-gold-glow flex items-center gap-2"
          >
            <span>Send Floor Plan on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </a>
        </div>

      </div>
    </section>
  );
}
