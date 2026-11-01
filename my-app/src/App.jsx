import React, { useState } from 'react';
import TopAnnouncement from './components/TopAnnouncement.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import TickerBanner from './components/TickerBanner.jsx';
import AboutSection from './components/AboutSection.jsx';
import WomensCollection from './components/WomensCollection.jsx';
import EditorialBanner from './components/EditorialBanner.jsx';
import FeaturedPieces from './components/FeaturedPieces.jsx';
import ShowcaseGallery from './components/ShowcaseGallery.jsx';
import LightTickerBanner from './components/LightTickerBanner.jsx';
import SocialShowcase from './components/SocialShowcase.jsx';
import Testimonials from './components/Testimonials.jsx';
import AboutPage from './components/AboutPage.jsx';
import EnquiryPage from './components/EnquiryPage.jsx';
import CollectionsPage from './components/CollectionsPage.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import Footer from './components/Footer.jsx';
import FloatingButtons from './components/FloatingButtons.jsx';

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
        ) : activePage === 'collections' ? (
          /* Dedicated Collections Page */
          <CollectionsPage 
            setActivePage={setActivePage} 
            setSelectedCategory={setSelectedCategory} 
          />
        ) : activePage === 'category' ? (
          /* Sub-category Filter Page */
          <CategoryPage 
            categoryName={selectedCategory} 
            setActivePage={setActivePage} 
          />
        ) : (
          /* Main Landing Page */
          <>
            {/* 2. Hero Section with page navigation */}
            <HeroSection setActivePage={setActivePage} />

            {/* 3. Dark Marquee Strip */}
            <TickerBanner />

            {/* 4. "Who We Are" Section */}
            <AboutSection setActivePage={setActivePage} />

            {/* 5. Women's Collection */}
            <WomensCollection />

            {/* 6. Split Editorial Banner */}
            {/* In src/App.jsx */}
            <EditorialBanner setActivePage={setActivePage} />

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
      <Footer 
        setActivePage={setActivePage} 
        setSelectedCategory={setSelectedCategory} 
      />

      {/* 13. Floating Action Buttons (WhatsApp & Call) */}
      <FloatingButtons />
    </div>
  );
}