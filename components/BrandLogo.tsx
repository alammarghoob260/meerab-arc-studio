'use client';

import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withAura?: boolean;
}

export default function BrandLogo({ size = 'md', className = '', withAura = true }: BrandLogoProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 group ${sizeMap[size]} ${className}`}
      title="Meerab Arc Studio - Authentic MA Monogram"
    >
      {/* Outer Radiant Gold Glow Layer */}
      {withAura && (
        <span
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 via-studio-gold to-yellow-300 opacity-60 blur-[6px] group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Circular Badge Housing the Authentic Original MA Monogram */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-studio-gold shadow-md bg-white dark:bg-[#0A0A0A] flex items-center justify-center p-1.5 transition-colors">
        <div className="relative w-full h-full">
          {/* Dark Mode Version (Radiant Gold Monogram on Dark Background) */}
          <Image
            src="/images/original_ma_logo_gold.png"
            alt="Meerab Arc Studio Official MA Monogram"
            fill
            className="object-contain hidden dark:block p-0.5"
            priority
          />
          {/* Light Mode Version (Original Charcoal Monogram on Crisp White Background) */}
          <Image
            src="/images/original_ma_logo_charcoal.png"
            alt="Meerab Arc Studio Official MA Monogram"
            fill
            className="object-contain block dark:hidden p-0.5"
            priority
          />
        </div>
      </div>
    </div>
  );
}
