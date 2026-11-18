'use client';

import React from 'react';
import Link from 'next/link';
import { PlusCircle, ShieldCheck, LogOut, Settings } from 'lucide-react';
import { useOwner } from '@/components/OwnerProvider';

export default function OwnerStatusBar() {
  const { isOwner, logout, setUploadModalOpen } = useOwner();

  if (!isOwner) return null;

  return (
    <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-zinc-950/95 border-b border-studio-gold/40 text-white backdrop-blur-md py-1.5 px-4 animate-in slide-in-from-top-2 duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-studio-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-studio-gold"></span>
          </span>
          <span className="font-semibold text-studio-gold">Owner Mode Active:</span>
          <span className="hidden sm:inline text-zinc-300">Kamran Ali (Principal Designer)</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setUploadModalOpen(true)}
            className="px-3 py-1 rounded-full bg-studio-gold text-black font-bold text-[11px] flex items-center gap-1.5 hover:bg-studio-gold-light transition-all shadow-gold-glow cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>+ Upload Photo</span>
          </button>

          <Link
            href="/owner-login"
            className="hidden sm:flex px-2.5 py-1 rounded-full border border-zinc-700 text-zinc-300 hover:text-white text-[11px] items-center gap-1 transition-colors"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Vault</span>
          </Link>

          <button
            onClick={logout}
            className="text-[11px] text-zinc-400 hover:text-red-400 flex items-center gap-1 transition-colors ml-1 cursor-pointer"
            title="Exit Owner Mode"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
