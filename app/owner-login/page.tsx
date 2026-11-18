'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Lock, KeyRound, ArrowRight, Eye, EyeOff, CheckCircle, LogOut, PlusCircle, Trash2, Home, Sparkles } from 'lucide-react';
import { useOwner } from '@/components/OwnerProvider';
import BrandLogo from '@/components/BrandLogo';
import OwnerUploadModal from '@/components/OwnerUploadModal';

export default function OwnerLoginPage() {
  const { isOwner, login, logout, customProjects, allProjects, deleteProject, setUploadModalOpen } = useOwner();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (!success) {
      setError(true);
    } else {
      setError(false);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 flex flex-col justify-between p-4 sm:p-8 font-sans selection:bg-studio-gold selection:text-black">
      
      {/* Global In-page Upload Modal */}
      <OwnerUploadModal />

      {/* Top Header */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between pb-6 border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-3 group">
          <BrandLogo size="md" withAura={true} />
          <div>
            <span className="font-serif text-sm sm:text-base font-bold tracking-wider text-white uppercase block">
              MEERAB ARC <span className="text-studio-gold font-normal">STUDIO</span>
            </span>
            <span className="text-[9px] tracking-widest text-studio-gold font-bold uppercase">
              KOLKATA • OWNER PORTAL
            </span>
          </div>
        </Link>

        <Link
          href="/"
          className="text-xs text-zinc-400 hover:text-studio-gold flex items-center gap-1.5 transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Back to Live Website</span>
        </Link>
      </div>

      {/* Main Body */}
      <div className="max-w-4xl mx-auto w-full my-auto py-8">
        {!isOwner ? (
          /* ==================== LOGIN FORM ==================== */
          <div className="max-w-md mx-auto bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-luxury backdrop-blur-xl">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-studio-gold/15 text-studio-gold mx-auto flex items-center justify-center mb-3 border border-studio-gold/30">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Studio Vault Access
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Private owner control for <strong className="text-studio-gold">Kamran Ali</strong>. Upload new projects, manage portfolio, and update finishes.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Master Password / PIN
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter Owner PIN / Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-black/60 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-studio-gold pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-zinc-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {error && (
                  <p className="text-xs text-red-400 mt-1.5">
                    Incorrect password. Please verify and try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-studio-gold text-black hover:bg-studio-gold-light font-bold text-xs sm:text-sm tracking-wide shadow-gold-glow flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <KeyRound className="w-4 h-4 text-black" />
                <span>Unlock Owner Workspace</span>
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
              <span className="text-[11px] text-zinc-500 block">
                Forgot password? Contact system administrator or check studio master credentials: <code className="text-studio-gold">meerab@2026</code>
              </span>
            </div>
          </div>
        ) : (
          /* ==================== OWNER DASHBOARD ==================== */
          <div className="space-y-8">
            
            {/* Owner Welcome Banner */}
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-black p-6 sm:p-8 rounded-3xl border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-luxury">
              <div className="flex items-center gap-4">
                <BrandLogo size="lg" withAura={true} />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-studio-gold uppercase tracking-wider">
                      Principal Designer Workspace
                    </span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-bold">
                      Authenticated
                    </span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-0.5">
                    Welcome back, Kamran Ali
                  </h1>
                  <p className="text-xs text-zinc-400 mt-1">
                    Manage portfolio photos, add new Kolkata apartment executions, and sync live.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setUploadModalOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-studio-gold text-black hover:bg-studio-gold-light font-bold text-xs flex items-center gap-2 shadow-gold-glow transition-all cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>+ Upload New Project</span>
                </button>

                <button
                  onClick={logout}
                  className="px-4 py-2.5 rounded-full border border-zinc-700 hover:border-red-500 hover:text-red-400 text-xs font-medium text-zinc-300 transition-colors flex items-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-xs text-zinc-400 block">Total Portfolio Spaces</span>
                <span className="font-serif text-2xl font-bold text-white mt-1 block">
                  {allProjects.length}
                </span>
                <span className="text-[10px] text-zinc-500">Live on website</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-xs text-zinc-400 block">Custom Uploads</span>
                <span className="font-serif text-2xl font-bold text-studio-gold mt-1 block">
                  {customProjects.length}
                </span>
                <span className="text-[10px] text-zinc-500">Added by owner</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-xs text-zinc-400 block">Client Phone Leads</span>
                <span className="font-serif text-2xl font-bold text-white mt-1 block">
                  Active
                </span>
                <span className="text-[10px] text-zinc-500">+91 9062835130</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-xs text-zinc-400 block">Instagram Sync</span>
                <span className="font-serif text-2xl font-bold text-white mt-1 block">
                  Connected
                </span>
                <span className="text-[10px] text-zinc-500">@meerab_arc_studio</span>
              </div>
            </div>

            {/* Custom Uploads Management Section */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Your Newly Uploaded Projects ({customProjects.length})
                  </h3>
                  <p className="text-xs text-zinc-400">
                    These projects appear at the very top of the live portfolio gallery.
                  </p>
                </div>

                <button
                  onClick={() => setUploadModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-full bg-studio-gold text-black text-xs font-bold flex items-center gap-1.5"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Add Photo</span>
                </button>
              </div>

              {customProjects.length === 0 ? (
                <div className="border border-dashed border-zinc-800 rounded-2xl p-8 text-center">
                  <p className="text-xs text-zinc-400">
                    You haven't uploaded any custom projects yet.
                  </p>
                  <button
                    onClick={() => setUploadModalOpen(true)}
                    className="mt-3 text-xs text-studio-gold font-bold hover:underline"
                  >
                    Tap here to upload your first project photo →
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {customProjects.map((p) => (
                    <div
                      key={p.id}
                      className="rounded-2xl overflow-hidden bg-black border border-zinc-800 flex flex-col justify-between group"
                    >
                      <div className="relative aspect-[4/3] bg-zinc-900">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute top-2 left-2 text-[10px] font-bold bg-studio-gold text-black px-2 py-0.5 rounded-full">
                          {p.category}
                        </span>
                      </div>
                      <div className="p-3.5 flex items-center justify-between">
                        <div>
                          <h4 className="font-serif text-xs font-bold text-white line-clamp-1">
                            {p.title}
                          </h4>
                          <span className="text-[10px] text-zinc-400 line-clamp-1">
                            {p.description}
                          </span>
                        </div>
                        <button
                          onClick={() => deleteProject(p.id)}
                          className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-zinc-900 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Link to View Live Website */}
            <div className="text-center pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900 hover:border-studio-gold text-xs font-bold text-studio-gold transition-all"
              >
                <span>Preview Changes on Live Website</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        )}
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto w-full pt-6 border-t border-zinc-900 text-center text-[11px] text-zinc-600">
        Meerab | Arc Studio Kolkata • Private Administration Console
      </div>

    </div>
  );
}
