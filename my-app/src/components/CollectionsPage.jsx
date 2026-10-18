import React from 'react';
import { ArrowRight } from 'lucide-react';
import TickerBanner from './TickerBanner';

const SIGNATURE_PIECES = [
  {
    id: 1,
    tag: 'FEATURED',
    category: 'SAREES',
    name: 'Designer Position Saree',
    price: '₹7,500',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    tag: 'FEATURED',
    category: 'BRIDAL LEHENGAS',
    name: 'Royal Rajwada Bridal Lehenga',
    price: '₹85,000',
    image: 'https://images.unsplash.com/photo-1583391733975-08147d3c01bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    tag: 'FEATURED',
    category: 'LEHENGAS',
    name: 'Sangeet Shimmer Lehenga',
    price: '₹32,000',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
  },
];

const GALLERY_PHOTOS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80', alt: 'Wedding Couple' },
  { id: 2, src: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80', alt: 'Bridal Jewelry Portrait' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80', alt: 'Golden Veil Detail' },
  { id: 4, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', alt: 'Crimson Lehenga Intricacy' },
  { id: 5, src: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80', alt: 'Earring Details' },
  { id: 6, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', alt: 'Festive Saree Sunset' },
  { id: 7, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', alt: 'Couple Nature Portrait' },
  { id: 8, src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', alt: 'Festive Lehenga Outdoors' },
];

export default function CollectionsPage({ setActivePage, setSelectedCategory }) {
  const handleShopWomen = () => {
    if (setSelectedCategory) setSelectedCategory('Lehenga');
    if (setActivePage) {
      setActivePage('category');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProductClick = (categoryName) => {
    if (setSelectedCategory) setSelectedCategory(categoryName);
    if (setActivePage) {
      setActivePage('category');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1E090C] min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="relative overflow-hidden bg-[#2D0D12] text-white py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#3F0E17]">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80"
            alt="Groom sherwani celebration background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#24060B] via-[#2D0D12]/90 to-[#24060B]/80" />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto text-left">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#C5A869] font-medium mb-3">
            COLLECTIONS
          </p>
          <h1 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] font-normal tracking-tight leading-tight max-w-2xl">
            Made for Moments That Matter
          </h1>
          <p className="text-xs md:text-sm text-stone-300 font-light leading-relaxed mt-4 max-w-xl">
            From intimate celebrations to grand weddings — silhouettes, fabrics and craftsmanship designed to make every moment unforgettable.
          </p>
        </div>
      </section>

      {/* 2. Marquee Divider Strip */}
      <TickerBanner />

      {/* 3. The Signature Edit Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAF7F2]">
        <div className="max-w-[1300px] mx-auto text-center">
          
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium">
            FEATURED
          </p>
          <h2 className="font-serif-luxury text-4xl md:text-5xl text-[#1E090C] font-normal tracking-tight mt-3">
            The Signature Edit
          </h2>
          <p className="text-xs md:text-sm text-stone-500 font-light mt-3">
            Our most loved pieces across bridal, festive and groom's wear. Sample catalogue shown.
          </p>

          <div className="flex items-center justify-center my-6 space-x-3 text-[#C5A869]">
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
            <span className="text-[8px]">◆</span>
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
          </div>

          {/* 3 Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            {SIGNATURE_PIECES.map((piece) => (
              <div 
                key={piece.id}
                onClick={() => handleProductClick(piece.category)}
                className="group cursor-pointer flex flex-col justify-between bg-white border border-[#EBE1D0] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-3 left-3 bg-[#641824] text-white text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                    {piece.tag}
                  </span>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="w-full bg-[#FAF7F2] text-[#1E090C] text-[10px] tracking-widest uppercase font-bold py-2 text-center shadow">
                      VIEW DETAILS
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[10px] tracking-[0.25em] text-stone-400 uppercase font-semibold">
                    {piece.category}
                  </p>
                  <h3 className="font-serif-luxury text-xl text-[#1E090C] font-normal mt-1 group-hover:text-[#641824] transition">
                    {piece.name}
                  </h3>
                  <p className="text-sm font-semibold text-stone-800 mt-2">
                    {piece.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered CTA Button */}
          <div className="mt-14 flex justify-center">
            <button
              onClick={handleShopWomen}
              className="inline-flex items-center space-x-2 bg-[#641824] hover:bg-[#4E121B] text-white text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-3.5 transition duration-300 shadow-sm cursor-pointer"
            >
              <span>SHOP WOMEN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. The Gallery / An Editorial Showcase */}
      <section className="py-20 px-6 md:px-12 lg:px-20 border-t border-[#EFE8DC] bg-[#FAF7F2]">
        <div className="max-w-[1300px] mx-auto text-center">
          
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium">
            THE GALLERY
          </p>
          <h2 className="font-serif-luxury text-4xl md:text-5xl text-[#1E090C] font-normal tracking-tight mt-3">
            An Editorial Showcase
          </h2>
          <p className="text-xs md:text-sm text-stone-500 font-light mt-3">
            Bridal fashion, sarees, lehengas, sherwanis and wedding looks from our lens.
          </p>

          <div className="flex items-center justify-center my-6 space-x-3 text-[#C5A869]">
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
            <span className="text-[8px]">◆</span>
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
          </div>

          {/* 3-Column Image Mosaic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12">
            {GALLERY_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                className="relative overflow-hidden aspect-[4/5] bg-stone-200 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}