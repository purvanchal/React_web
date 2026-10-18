import React, { useState } from 'react';
import TopAnnouncement from './components/TopAnnouncement';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TickerBanner from './components/TickerBanner';
import AboutSection from './components/AboutSection';
import WomensCollection from './components/WomensCollection';
import EditorialBanner from './components/EditorialBanner';
import FeaturedPieces from './components/FeaturedPieces';
import ShowcaseGallery from './components/ShowcaseGallery';
import LightTickerBanner from './components/LightTickerBanner';
import SocialShowcase from './components/SocialShowcase';
import Testimonials from './components/Testimonials';
import AboutPage from './components/AboutPage';
import EnquiryPage from './components/EnquiryPage';
import CategoryPage from './components/CategoryPage';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('Sarees');

  return (
    <div className="relative min-h-screen bg-[#2D0D12]">
      {/* 1. Header & Announcement Strip */}
      <TopAnnouncement />
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        setSelectedCategory={setSelectedCategory}
      />

      <main>
        {activePage === 'about' ? (
          /* Dedicated About Us Page */
          <AboutPage setActivePage={setActivePage} />
        ) : activePage === 'enquiry' ? (
          /* Dedicated Contact / Enquiry Page */
          <EnquiryPage />
        ) : activePage === 'category' ? (
          /* Dedicated Category Page (Sarees, Lehenga, etc.) */
          <CategoryPage 
            categoryName={selectedCategory} 
            setActivePage={setActivePage} 
          />
        ) : (
          /* Main Landing Page */
          <>
            {/* 2. Hero Section */}
            <HeroSection />

            {/* 3. Dark Marquee Strip */}
            <TickerBanner />

            {/* 4. "Who We Are" Section */}
            <AboutSection />

            {/* 5. Women's Collection */}
            <WomensCollection />

            {/* 6. Split Editorial Banner */}
            <EditorialBanner />

            {/* 7. Featured Pieces Catalog with Prices */}
            <FeaturedPieces />

            {/* 8. The Showcase: Moments in Purvanchal */}
            <ShowcaseGallery />

            {/* 9. Light Cream Marquee Strip */}
            <LightTickerBanner />

            {/* 10. Social Showcase */}
            <SocialShowcase />

            {/* 11. Customer Reviews Carousel */}
            <Testimonials />
          </>
        )}
      </main>

      {/* 12. Footer with Final CTA */}
      <Footer setActivePage={setActivePage} />

      {/* 13. Floating Action Buttons (WhatsApp & Call) */}
      <FloatingButtons />
    </div>
  );
}