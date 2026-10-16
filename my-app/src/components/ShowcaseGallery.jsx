import React from 'react';

const SHOWCASE_PHOTOS = [
  {
    id: 1,
    title: 'Bride and Groom Celebration',
    src: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 2,
    title: 'Heritage Couple Portrait',
    src: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Bridal Jewelry Portrait',
    src: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Golden Veil Detail',
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    title: 'Crimson Lehenga Intricacy',
    src: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    title: 'Mathapatti Close-up',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 7,
    title: 'Outdoor Festive Lehenga',
    src: 'https://images.unsplash.com/photo-1583391733975-08147d3c01bf?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 8,
    title: 'Sunset Editorial Portrait',
    src: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
  },
];

export default function ShowcaseGallery() {
  return (
    <section className="bg-[#1E090C] py-24 px-6 md:px-12 lg:px-16 border-t border-[#D8B467]/20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#D8B467] font-medium">
            THE SHOWCASE
          </p>
          <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#FFF8F0] font-normal tracking-tight mt-3">
            Moments in Purvanchal
          </h2>
          <p className="text-xs md:text-sm text-[#E5D7CA]/80 font-normal leading-relaxed mt-4 max-w-xl mx-auto">
            Bridal couture, festive drapes and groom's wear from our editorial lens.
          </p>

          <div className="flex items-center justify-center mt-6 space-x-3 text-[#D8B467]">
            <div className="h-[1px] w-12 bg-[#D8B467]/40" />
            <span className="text-[8px]">◆</span>
            <div className="h-[1px] w-12 bg-[#D8B467]/40" />
          </div>
        </div>

        {/* 4-column Responsive Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {SHOWCASE_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="relative overflow-hidden aspect-[4/5] bg-[#2A0D11] border border-[#D8B467]/15 group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#1E090C]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}