'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/data/projectsData';
import { Sparkles, X, Maximize2, ArrowRight, PlusCircle, Trash2 } from 'lucide-react';
import { useOwner } from '@/components/OwnerProvider';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'living', label: 'Living Rooms' },
  { id: 'kitchen', label: 'Kitchen & Dining' },
  { id: 'entrance', label: 'Main Door & Foyer' },
  { id: 'kids', label: 'Kids Room' },
  { id: 'bedroom', label: 'Master Bedroom' },
] as const;

export default function PortfolioGallery() {
  const { allProjects, isOwner, setUploadModalOpen, deleteProject } = useOwner();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter((p) => p.categorySlug === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#FAF9F6] dark:bg-[#0A0A0A] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-studio-gold/15 text-studio-gold text-xs font-semibold uppercase tracking-wider mb-2.5 border border-studio-gold/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Kolkata Homes ({allProjects.length} Spaces)</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight transition-colors">
              Selected Works & <br className="hidden sm:inline" />
              <span className="text-studio-bronze dark:text-studio-gold italic">Interior Detailing</span>
            </h2>
          </div>
          <div className="mt-3 md:mt-0 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md transition-colors">
              Click on any space to view high-resolution detailing, material highlights, or inquire directly via WhatsApp.
            </p>
            {isOwner && (
              <button
                onClick={() => setUploadModalOpen(true)}
                className="px-4 py-2 rounded-full bg-studio-gold text-black font-bold text-xs flex items-center gap-1.5 shadow-gold-glow shrink-0 cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                <span>+ Upload New Space</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-studio-gold text-black font-bold shadow-gold-glow'
                  : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-studio-gold/60'
              }`}
            >
              {cat.label} {cat.id === 'all' && `(${allProjects.length})`}
            </button>
          ))}
        </div>

        {/* Project Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Owner Quick Upload Card (Visible only when owner is logged in) */}
          {isOwner && (
            <div
              onClick={() => setUploadModalOpen(true)}
              className="cursor-pointer rounded-2xl border-2 border-dashed border-studio-gold/50 bg-studio-gold/5 dark:bg-studio-gold/10 hover:border-studio-gold p-6 flex flex-col items-center justify-center text-center transition-all min-h-[300px] group"
            >
              <div className="w-14 h-14 rounded-full bg-studio-gold/20 text-studio-gold flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <PlusCircle className="w-7 h-7 text-studio-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-zinc-900 dark:text-white">
                Upload New Project
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-xs">
                Owner Mode: Take a photo or upload from gallery to instantly publish to this live portfolio.
              </p>
              <span className="mt-4 px-4 py-1.5 rounded-full bg-studio-gold text-black font-bold text-xs shadow-gold-glow">
                + Add Space Photo
              </span>
            </div>
          )}

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-studio-gold/70 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-zinc-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-studio-gold border border-studio-gold/30 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Owner Delete Trigger for Custom Projects */}
                {isOwner && project.id.startsWith('custom-') && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm('Delete this custom project?')) {
                        deleteProject(project.id);
                      }
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-red-600/90 text-white hover:bg-red-700 shadow-md transition-colors"
                    title="Delete project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Hover Quick Zoom Pill */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-studio-gold text-black text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-black" />
                    Inspect Details
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-studio-bronze dark:group-hover:text-studio-gold transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Highlights Tags */}
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.slice(0, 2).map((h, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-950 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-studio-gold font-medium flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal / Lightbox for Fullscreen Inspection */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-zinc-950 rounded-2xl sm:rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Area */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-black overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-white hover:bg-black border border-white/20 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Information & Direct Action */}
            <div className="p-5 sm:p-6 overflow-y-auto">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold text-studio-gold uppercase tracking-wider bg-studio-gold/15 px-2.5 py-0.5 rounded-full border border-studio-gold/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">• Kolkata Flat Project</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Design Highlights List */}
              <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-studio-gold block mb-2">
                  Key Technical Execution Details:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons with Official WhatsApp Logo */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919062835130?text=${encodeURIComponent(
                    `Hi Kamran, I saw this design on your website: "${selectedProject.title}" (${selectedProject.category}). I want something similar for my home in Kolkata. Can you tell me the estimated cost?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Discuss This Design on WhatsApp</span>
                </a>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="py-3 px-5 rounded-full border border-zinc-300 dark:border-zinc-800 text-xs sm:text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
