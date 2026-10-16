import React from 'react';

// Lightweight brand icon SVGs
function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const FEED_IMAGES = [
  'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1583391733975-08147d3c01bf?auto=format&fit=crop&w=600&q=80',
];

export default function SocialShowcase() {
  return (
    <section className="bg-[#FAF7F2] py-24 px-6 md:px-12 lg:px-16 border-t border-[#EFE8DC]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium">
            STAY CONNECTED
          </p>
          <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#1E090C] font-normal tracking-tight mt-3">
            Follow Purvanchal Collection
          </h2>
          <p className="text-xs md:text-sm text-stone-500 font-normal leading-relaxed mt-4 max-w-xl mx-auto">
            New arrivals, styling inspiration and behind-the-scenes craftsmanship.
          </p>
          
          <div className="flex items-center justify-center mt-6 space-x-3 text-[#C5A869]">
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
            <span className="text-[8px]">◆</span>
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
          </div>
        </div>

        {/* Featured Big Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="relative aspect-[16/10] overflow-hidden bg-stone-900 group">
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85"
              alt="Purvanchal Instagram"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 flex flex-col items-center justify-center text-center p-6">
              <span className="font-serif-luxury text-2xl md:text-3xl text-white font-normal mb-6">
                @purvanchal_wholesale
              </span>
              <a
                href="https://instagram.com/purvanchal_wholesale"
                target="_blank"
                rel="noreferrer"
                className="border border-[#C5A869] text-[#E5C173] hover:bg-[#C5A869] hover:text-[#2E0B11] text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase px-6 py-3 transition duration-300"
              >
                FOLLOW US ON INSTAGRAM
              </a>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-stone-900 group">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
              alt="Purvanchal YouTube"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 flex flex-col items-center justify-center text-center p-6">
              <span className="font-serif-luxury text-2xl md:text-3xl text-white font-normal mb-6">
                Purvanchal Collection
              </span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="border border-[#C5A869] text-[#E5C173] hover:bg-[#C5A869] hover:text-[#2E0B11] text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase px-6 py-3 transition duration-300"
              >
                WATCH ON YOUTUBE
              </a>
            </div>
          </div>
        </div>

        {/* 6-Photo Thumbnail Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {FEED_IMAGES.map((imgUrl, i) => (
            <div key={i} className="relative aspect-square overflow-hidden bg-stone-200 group cursor-pointer shadow-sm">
              <img
                src={imgUrl}
                alt="Instagram feed item"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstagramIcon className="w-5 h-5 text-white stroke-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}