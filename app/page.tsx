'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CostCalculator from '@/components/CostCalculator';
import PortfolioGallery from '@/components/PortfolioGallery';
import ServicesSection from '@/components/ServicesSection';
import AboutFounder from '@/components/AboutFounder';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import OwnerStatusBar from '@/components/OwnerStatusBar';
import OwnerUploadModal from '@/components/OwnerUploadModal';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] dark:bg-[#0A0A0A] text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      {/* 0. Secret Owner Live Status Bar (Visible only when logged in) */}
      <OwnerStatusBar />

      {/* Global In-Page Project Upload Modal (Accessible by Owner) */}
      <OwnerUploadModal />

      {/* 1. Fixed Header Navigation */}
      <Navbar />

      {/* 2. Editorial Hero Section */}
      <Hero />

      {/* 3. High-Converting Kolkata Cost Estimator */}
      <CostCalculator />

      {/* 4. Filterable Portfolio Gallery (20 Spaces + Owner Custom Uploads) */}
      <PortfolioGallery />

      {/* 5. Turnkey Services & Guarantees */}
      <ServicesSection />

      {/* 6. Founder & Kolkata Architectural Engineering */}
      <AboutFounder />

      {/* 7. Homeowner Testimonials */}
      <Testimonials />

      {/* 8. Comprehensive Footer with Discreet Owner Access */}
      <Footer />

      {/* 9. Mobile Sticky Bottom Thumb Bar */}
      <MobileBottomBar />
    </main>
  );
}
