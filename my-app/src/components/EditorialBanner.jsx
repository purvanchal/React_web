import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EditorialBanner() {
  return (
    <section className="w-full bg-[#FAF7F2] pb-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-2xl">
        
        {/* Left Side: Boutique Model Photo */}
        <div className="relative min-h-[460px] lg:min-h-[580px] bg-stone-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1400&q=85"
            alt="Editorial Collection"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle warm wash */}
          <div className="absolute inset-0 bg-amber-950/10 mix-blend-multiply" />
        </div>

        {/* Right Side: Deep Maroon Block with Monogram Pattern */}
        <div className="relative bg-[#3F0A11] text-white p-10 md:p-16 lg:p-20 flex flex-col justify-center overflow-hidden">
          
          {/* Background Repeated Monogram Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none select-none flex flex-wrap gap-8 p-6 scale-125"
            aria-hidden="true"
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="font-serif-luxury text-7xl font-bold tracking-tighter text-[#E5C173]">
                PC
              </span>
            ))}
          </div>

          <div className="relative z-10 max-w-lg">
            {/* Tagline */}
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">
              THE EDITORIAL
            </p>

            {/* Heading */}
            <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-[52px] leading-[1.12] font-normal tracking-tight text-[#FAF7F2]">
              Made for Moments That Matter
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-sm text-stone-300 font-light leading-relaxed max-w-md">
              From intimate celebrations to grand weddings, discover silhouettes, fabrics and craftsmanship designed to make every moment unforgettable.
            </p>

            {/* Gold CTA Button */}
            <div className="mt-9">
              <a
                href="#collections"
                className="inline-flex items-center space-x-3 bg-[#B89758] hover:bg-[#a68648] text-[#290B10] px-8 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase transition duration-300 group shadow-md"
              >
                <span>VIEW COLLECTIONS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}