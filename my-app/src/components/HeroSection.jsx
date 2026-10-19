import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ setActivePage }) {
  const navigateTo = (page) => {
    if (setActivePage) {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-112px)] flex items-center justify-start overflow-hidden bg-[#54151C]">
      
      {/* Background Image with Rich Maroon Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bridal.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#54151C]/90 via-[#54151C]/70 to-[#54151C]/40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 py-20 w-full">
        <div className="max-w-2xl text-white">
          
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#D8B467] font-semibold mb-4">
            Purvanchal Collection
          </p>

          <h1 className="font-serif-luxury text-5xl md:text-7xl lg:text-[76px] leading-[1.08] font-normal tracking-tight text-[#FAF7F2]">
            Where Tradition <br />
            Meets Timeless <br />
            <span className="italic font-light text-[#EED8AC]">Elegance</span>
          </h1>

          <p className="mt-6 text-sm md:text-base text-stone-300 font-light max-w-lg leading-relaxed">
            Discover exquisite Indian ethnic wear crafted for celebrations, weddings and unforgettable moments.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button 
              onClick={() => navigateTo('collections')}
              className="bg-[#C5A869] hover:bg-[#b89a5b] text-[#290B10] text-[11px] tracking-[0.2em] font-bold uppercase px-7 py-3.5 flex items-center space-x-3 transition group cursor-pointer shadow-md"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button 
              onClick={() => navigateTo('enquiry')}
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white text-[11px] tracking-[0.2em] font-medium uppercase px-7 py-3.5 transition cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none text-white/50 text-[10px] tracking-[0.25em] uppercase">
        <span>Scroll</span>
      </div>
    </section>
  );
}