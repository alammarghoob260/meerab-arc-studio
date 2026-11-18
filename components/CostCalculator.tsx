'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function CostCalculator() {
  const [bhk, setBhk] = useState<'1bhk' | '2bhk' | '3bhk' | '4bhk'>('2bhk');
  const [scope, setScope] = useState<'full' | 'kitchen_wardrobe' | 'renovation'>('full');
  const [tier, setTier] = useState<'essential' | 'premium' | 'luxury'>('premium');
  const [locality, setLocality] = useState('New Town / Rajarhat');

  // Cost calculation matrix (in Lakhs INR)
  const basePrices: Record<string, Record<string, [number, number]>> = {
    '1bhk': {
      full: [2.8, 3.8],
      kitchen_wardrobe: [1.8, 2.4],
      renovation: [1.5, 2.2],
    },
    '2bhk': {
      full: [4.5, 6.2],
      kitchen_wardrobe: [2.8, 3.8],
      renovation: [2.4, 3.5],
    },
    '3bhk': {
      full: [6.8, 9.5],
      kitchen_wardrobe: [4.2, 5.8],
      renovation: [3.8, 5.2],
    },
    '4bhk': {
      full: [10.5, 15.0],
      kitchen_wardrobe: [6.5, 8.8],
      renovation: [5.5, 7.8],
    },
  };

  const multiplier: Record<string, number> = {
    essential: 0.9,
    premium: 1.15,
    luxury: 1.5,
  };

  const [minRaw, maxRaw] = basePrices[bhk][scope];
  const mult = multiplier[tier];
  const estimatedMin = (minRaw * mult).toFixed(1);
  const estimatedMax = (maxRaw * mult).toFixed(1);

  const bhkLabels = {
    '1bhk': '1 BHK (Compact)',
    '2bhk': '2 BHK (Standard)',
    '3bhk': '3 BHK (Spacious)',
    '4bhk': '4 BHK / Villa',
  };

  const tierLabels = {
    essential: 'Classic Essential',
    premium: 'Premium Architectural',
    luxury: 'Ultra Luxury Bespoke',
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Kamran, I used your website Cost Calculator for my flat in Kolkata:\n` +
    `• Configuration: ${bhkLabels[bhk]}\n` +
    `• Scope: ${scope.replace('_', ' ').toUpperCase()}\n` +
    `• Finish Tier: ${tierLabels[tier]}\n` +
    `• Locality: ${locality}\n` +
    `• Estimated Range: ₹${estimatedMin}L - ₹${estimatedMax}L\n\n` +
    `Could you share an itemized breakdown or schedule a free site measurement visit?`
  );

  const whatsappUrl = `https://wa.me/919062835130?text=${whatsappMessage}`;

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white dark:bg-zinc-950/70 border-y border-zinc-200 dark:border-zinc-800 relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-studio-gold/15 text-studio-gold text-xs font-semibold uppercase tracking-wider mb-3 border border-studio-gold/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight transition-colors">
            Kolkata Home Interior <br className="hidden sm:inline" />
            <span className="text-studio-bronze dark:text-studio-gold italic">Cost Estimator</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 transition-colors">
            Instant estimate tailored to Kolkata real-estate standard sizes, marine ply woodwork, and modern modular hardware.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: BHK Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400 block mb-2.5">
                1. Select Flat / Home Configuration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['1bhk', '2bhk', '3bhk', '4bhk'] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setBhk(item)}
                    className={`py-3 px-2 rounded-xl text-center border font-medium text-xs sm:text-sm transition-all active:scale-95 ${
                      bhk === item
                        ? 'border-studio-gold bg-studio-gold text-black font-bold shadow-gold-glow'
                        : 'border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 hover:border-studio-gold/60'
                    }`}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope of Work */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400 block mb-2.5">
                2. Scope of Interior Work
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'full', label: 'Full Home Turnkey', desc: 'Living, Kitchen, Beds, Ceiling' },
                  { id: 'kitchen_wardrobe', label: 'Kitchen & Wardrobes', desc: 'Storage & Cabinetry Only' },
                  { id: 'renovation', label: 'Renovation & Styling', desc: 'Makeover & Civil Tweaks' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setScope(item.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all active:scale-98 ${
                      scope === item.id
                        ? 'border-studio-gold bg-studio-gold/15 text-zinc-900 dark:text-white font-semibold'
                        : 'border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 hover:border-studio-gold/50'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm">{item.label}</div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material Quality Tier */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400 block mb-2.5">
                3. Material & Hardware Quality Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'essential', label: 'Essential', spec: 'Commercial Ply + Laminates' },
                  { id: 'premium', label: 'Premium', spec: 'BWP Marine Ply + Hettich' },
                  { id: 'luxury', label: 'Ultra Luxury', spec: 'PU / Veneer + Hafele Profile' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTier(item.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all active:scale-98 ${
                      tier === item.id
                        ? 'border-studio-gold bg-studio-gold text-black font-bold shadow-gold-glow'
                        : 'border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 hover:border-studio-gold/50'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 ${tier === item.id ? 'text-black/80' : 'text-zinc-500 dark:text-zinc-400'}`}>
                      {item.spec}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Locality Dropdown */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400 block mb-2">
                4. Kolkata Locality
              </label>
              <select
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-studio-gold"
              >
                <option value="New Town / Rajarhat">New Town / Rajarhat (Action Area 1, 2, 3)</option>
                <option value="Salt Lake / Sector V">Salt Lake / Sector V / Kestopur</option>
                <option value="EM Bypass / Ruby / Garia">EM Bypass / Ruby / Mukundapur / Garia</option>
                <option value="South Kolkata (Ballygunge/Alipore)">South Kolkata (Ballygunge, Alipore, Lansdowne)</option>
                <option value="Behala / Tollygunge / Jadavpur">Behala / Tollygunge / Jadavpur</option>
                <option value="North Kolkata (Shyambazar/Dum Dum)">North Kolkata (Shyambazar, Dum Dum, Lake Town)</option>
                <option value="Howrah / Other Suburbs">Howrah / Other Suburbs</option>
              </select>
            </div>

          </div>

          {/* Results Summary Box Column */}
          <div className="lg:col-span-5 bg-zinc-100 dark:bg-zinc-900/90 p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-luxury flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-widest text-studio-bronze dark:text-studio-gold">
                  Indicative Cost Range
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/40 px-2.5 py-0.5 rounded-full font-medium">
                  Zero Hidden Costs
                </span>
              </div>

              {/* Price Range Display */}
              <div className="my-6 text-center py-5 bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium block">
                  Estimated Total Investment
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mt-1">
                  ₹{estimatedMin} - ₹{estimatedMax} <span className="text-lg font-sans font-medium text-studio-gold">Lakhs</span>
                </div>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">
                  Includes Materials, Carpentry, Finishing & Supervision
                </span>
              </div>

              {/* Summary Checklist */}
              <div className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-studio-gold shrink-0" />
                  <span>Standard execution: <strong>45 working days</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-studio-gold shrink-0" />
                  <span>Hardware: <strong>Hettich / Hafele soft-close</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-studio-gold shrink-0" />
                  <span>Woodwork: <strong>BWP / BWR Moisture-Proof Plywood</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-studio-gold shrink-0" />
                  <span><strong>10-Year Warranty</strong> on all bespoke woodwork</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call-to-Action */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-center text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-md transition-all group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Get Detailed PDF Quote on WhatsApp</span>
              </a>
              <span className="text-[10px] text-center text-zinc-500 dark:text-zinc-400 block mt-2">
                Instant reply from founder Kamran Ali • No spam guaranteed
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
