import React from 'react';
import TopAnnouncement from './components/TopAnnouncement';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TickerBanner from './components/TickerBanner';
import AboutSection from './components/AboutSection';
import WomensCollection from './components/WomensCollection';
import EditorialBanner from './components/EditorialBanner';
import FeaturedPieces from './components/FeaturedPieces';
import WhyUsSection from './components/WhyUsSection';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#2D0D12]">
      {/* 1. Announcement Strip */}
      <TopAnnouncement />

      {/* 2. Top Header Navigation */}
      <Navbar />

      <main>
        {/* 3. Hero Section (Bride background + main text) */}
        <HeroSection />

        {/* 4. Marquee Strip */}
        <TickerBanner />

        {/* 5. "Who We Are" Section */}
        <AboutSection />

        {/* 6. Women's Collection (Sarees, Suits, Lehengas...) */}
        <WomensCollection />

        {/* 7. Split Editorial Banner (Made for Moments That Matter) */}
        <EditorialBanner />

        {/* 8. Featured Pieces Catalog with Prices */}
        <FeaturedPieces />

        {/* 9. Why Purvanchal Collection (01 - 05 Columns) */}
        <WhyUsSection />
      </main>

      {/* 10. Floating WhatsApp and Phone Buttons */}
      <FloatingButtons />
    </div>
  );
}