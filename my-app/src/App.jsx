import React from 'react';
import TopAnnouncement from './components/TopAnnouncement';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TickerBanner from './components/TickerBanner';
import AboutSection from './components/AboutSection';
import WomensCollection from './components/WomensCollection';
import EditorialBanner from './components/EditorialBanner';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#2D0D12]">
      {/* 1. Top Bar */}
      <TopAnnouncement />

      {/* 2. Sticky Navigation */}
      <Navbar />

      <main>
        {/* 3. Hero Lehenga Section */}
        <HeroSection />

        {/* 4. Marquee Strip */}
        <TickerBanner />

        {/* 5. "Who We Are" Section */}
        <AboutSection />

        {/* 6. Women's Collection (Sarees, Suits, Lehengas...) */}
        <WomensCollection />

        {/* 7. Editorial Split Section (Made for Moments That Matter) */}
        <EditorialBanner />
      </main>

      {/* 8. Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}