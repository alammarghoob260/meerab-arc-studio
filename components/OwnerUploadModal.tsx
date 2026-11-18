'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { X, Upload, CheckCircle2, ImagePlus, Trash2, Sparkles } from 'lucide-react';
import { useOwner } from '@/components/OwnerProvider';

export default function OwnerUploadModal() {
  const { isUploadModalOpen, setUploadModalOpen, addProject } = useOwner();

  const [title, setTitle] = useState('');
  const [categorySlug, setCategorySlug] = useState<'living' | 'kitchen' | 'bedroom' | 'kids' | 'entrance'>('living');
  const [locality, setLocality] = useState('New Town, Kolkata');
  const [description, setDescription] = useState('');
  const [highlightsInput, setHighlightsInput] = useState('BWP Marine Ply, Soft-Close Hardware, Ambient Lighting');
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isUploadModalOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageDataUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCategoryName = (slug: string) => {
    switch (slug) {
      case 'living': return 'Living Room';
      case 'kitchen': return 'Kitchen & Dining';
      case 'bedroom': return 'Master Bedroom';
      case 'kids': return 'Kids Bedroom';
      case 'entrance': return 'Entrance & Foyer';
      default: return 'Interior Detailing';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageDataUrl) {
      alert('Please upload a project photo first.');
      return;
    }
    if (!title.trim()) {
      alert('Please enter a project title.');
      return;
    }

    setIsSubmitting(true);

    const highlights = highlightsInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    addProject({
      title: title.trim(),
      category: getCategoryName(categorySlug),
      categorySlug: categorySlug,
      image: imageDataUrl,
      width: 1200,
      height: 900,
      description: description.trim() || `Bespoke interior execution in ${locality} crafted with precision carpentry and timeless aesthetics.`,
      highlights: highlights.length > 0 ? highlights : ['BWP Marine Ply', 'Custom Woodwork', 'Turnkey Execution'],
    });

    setIsSubmitting(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setUploadModalOpen(false);
      // Reset form
      setTitle('');
      setImageDataUrl(null);
      setDescription('');
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={() => setUploadModalOpen(false)}
    >
      <div
        className="bg-white dark:bg-zinc-950 rounded-2xl sm:rounded-3xl max-w-xl w-full border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-studio-gold animate-pulse" />
            <h3 className="font-serif text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
              Upload New Project • <span className="text-studio-gold">Owner Studio</span>
            </h3>
          </div>
          <button
            onClick={() => setUploadModalOpen(false)}
            className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-4">
          
          {/* Photo Uploader */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
              1. Project Photo (Camera / Gallery)
            </label>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {imageDataUrl ? (
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black group">
                <Image
                  src={imageDataUrl}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 rounded-full bg-studio-gold text-black text-xs font-bold"
                  >
                    Change Photo
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageDataUrl(null)}
                    className="px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer border-2 border-dashed border-zinc-300 dark:border-zinc-700 hover:border-studio-gold dark:hover:border-studio-gold rounded-xl p-6 text-center transition-colors bg-zinc-50 dark:bg-zinc-900/30 flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-studio-gold/15 text-studio-gold flex items-center justify-center mb-2">
                  <ImagePlus className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  Tap to upload project photo
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Supports JPG, PNG, WebP from phone camera or gallery
                </span>
              </div>
            )}
          </div>

          {/* Project Title */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
              2. Space Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Master Bedroom Fluted Panelling & Wardrobe"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-studio-gold"
            />
          </div>

          {/* Category & Locality Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                3. Category
              </label>
              <select
                value={categorySlug}
                onChange={(e) => setCategorySlug(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-studio-gold"
              >
                <option value="living">Living Room</option>
                <option value="kitchen">Kitchen & Dining</option>
                <option value="bedroom">Master Bedroom</option>
                <option value="kids">Kids Bedroom</option>
                <option value="entrance">Main Door & Foyer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                4. Kolkata Locality
              </label>
              <input
                type="text"
                placeholder="e.g. Uniworld City, New Town"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-studio-gold"
              />
            </div>
          </div>

          {/* Technical Highlights / Tags */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
              5. Key Specifications (Comma-separated)
            </label>
            <input
              type="text"
              placeholder="e.g. BWP Marine Ply, Hettich Soft-Close, Fluted Panels"
              value={highlightsInput}
              onChange={(e) => setHighlightsInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-studio-gold"
            />
          </div>

          {/* Detailed Description */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
              6. Project Description & Notes
            </label>
            <textarea
              rows={3}
              placeholder="Describe the carpentry details, materials, lighting, or specific homeowner requirements..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-studio-gold"
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting || success}
              className="w-full py-3.5 rounded-full bg-studio-gold text-black hover:bg-studio-gold-light font-bold text-xs sm:text-sm tracking-wide shadow-gold-glow flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {success ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Published to Live Portfolio!</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 text-black" />
                  <span>Publish Project to Website</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
