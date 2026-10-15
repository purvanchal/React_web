import React from 'react';

const CATEGORIES = [
  {
    id: 1,
    title: 'Sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Suits',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Lehenga',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Bridal Lehenga',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Kurtis',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Festive Wear',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
];

export default function WomensCollection() {
  return (
    <section className="bg-[#FAF7F2] py-24 px-6 md:px-12 lg:px-16 border-t border-[#EFE8DC]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium">
            WOMEN'S COLLECTION
          </p>
          <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#1E090C] font-normal tracking-tight mt-3">
            Elegance Woven Into Every Occasion
          </h2>
          <p className="text-xs md:text-sm text-stone-500 font-normal leading-relaxed mt-4 max-w-xl mx-auto">
            From heirloom Banarasi silks to contemporary cocktail gowns — a wardrobe for every celebration.
          </p>
          
          {/* Subtle separator */}
          <div className="flex items-center justify-center mt-6 space-x-3 text-[#C5A869]">
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
            <span className="text-[8px]">◆</span>
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
          </div>
        </div>

        {/* 3-Column Uniform Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((item) => (
            <div
              key={item.id}
              className="group relative h-[480px] overflow-hidden bg-stone-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Bottom Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Title Overlay in Bottom Left */}
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="font-serif-luxury text-2xl md:text-3xl text-white font-normal tracking-wide group-hover:translate-x-1.5 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}