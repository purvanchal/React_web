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
import ShowcaseGallery from './components/ShowcaseGallery';
import BrandStory from './components/BrandStory';
import LightTickerBanner from './components/LightTickerBanner';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#2D0D12]">
      {/* 1. Top Bar */}
      <TopAnnouncement />

      {/* 2. Primary Navigation */}
      <Navbar />

      <main>
        {/* 3. Hero Section (Bride background + main text) */}
        <HeroSection />

        {/* 4. Dark Marquee Strip */}
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

        {/* 10. The Showcase: Moments in Purvanchal (8-photo mosaic) */}
        <ShowcaseGallery />

        {/* 11. Brand Story / Our Heritage */}
        <BrandStory />

        {/* 12. Light Marquee Strip */}
        <LightTickerBanner />
      </main>

      {/* 13. Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}