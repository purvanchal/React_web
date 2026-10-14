import React, { useState } from 'react';

// Brand icon SVG badge at the top left of each reel
const BrandBadge = () => (
  <div className="absolute top-3 left-3 z-20 w-7 h-7 rounded-lg bg-emerald-950/70 border border-amber-400/50 flex items-center justify-center p-1 backdrop-blur-sm shadow-md">
    <svg viewBox="0 0 100 85" className="w-full h-full fill-[#98c916]">
      <path d="M 50 4 L 96 82 L 72 82 L 50 44 L 28 82 L 4 82 Z" />
    </svg>
  </div>
);

const reelCards = [
  {
    id: 1,
    type: 'video_or_image',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
    caption: 'Don’t miss the surprise at the end of the VIDEO!',
    badge: true,
  },
  {
    id: 2,
    type: 'video_or_image',
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=600',
    caption: 'Don’t miss the surprise at the end of the VIDEO!',
    badge: true,
  },
  {
    id: 3,
    type: 'promo_card', // The middle voucher card
    heading: 'for a chance to',
    title: 'WIN BIG!',
    desc: 'Be our LUCKY CUSTOMER of the week and grab a SHOPPING VOUCHER worth',
    footer: "Don't miss out - follow now!",
    badge: false,
  },
  {
    id: 4,
    type: 'video_or_image',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
    caption: 'Don’t miss the surprise at the end of the VIDEO!',
    badge: true,
  },
];

export default function ReelShowcase() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="w-full py-16 px-4 bg-[#fbf9f6] flex flex-col items-center select-none">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-serif text-neutral-800 tracking-tight text-center mb-10">
        See it. Want it. Own it.
      </h2>

      {/* 4 Cards Grid / Carousel */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-center">
        {reelCards.map((card, index) => (
          <div
            key={card.id}
            className="group relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl bg-neutral-900 cursor-pointer"
          >
            {card.badge && <BrandBadge />}

            {card.type === 'video_or_image' ? (
              <>
                {/* Visual */}
                <img
                  src={card.image}
                  alt="Ethnic wear reel"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

                {/* Bottom Caption */}
                <div className="absolute bottom-4 inset-x-3 text-center z-10">
                  <p className="text-[11px] md:text-xs text-white/90 font-serif leading-tight tracking-wide drop-shadow">
                    {card.caption}
                  </p>
                </div>
              </>
            ) : (
              /* Emerald & Gold Contest / Voucher Card */
              <div className="w-full h-full bg-gradient-to-b from-[#062c20] via-[#031d15] to-[#01140e] p-3 flex flex-col justify-between items-center text-center relative border border-amber-300/40">
                {/* Decorative Double Gold Border */}
                <div className="absolute inset-2 border-2 border-amber-400/60 rounded-md pointer-events-none flex flex-col justify-between p-2">
                  <div className="border border-amber-300/30 w-full h-full rounded" />
                </div>

                {/* Golden Ribbon Bow Accent (Top Left) */}
                <div className="absolute top-2 left-2 z-20 text-amber-300 text-2xl drop-shadow">
                  🎀
                </div>

                {/* Card Content */}
                <div className="relative z-10 mt-16 flex flex-col items-center px-2">
                  <span className="text-[11px] uppercase tracking-wider text-amber-200/90 font-medium">
                    {card.heading}
                  </span>
                  <span className="text-xl md:text-2xl font-black text-amber-400 tracking-wider mt-1 drop-shadow-md">
                    {card.title}
                  </span>
                  <p className="text-[10px] text-amber-100/80 leading-relaxed mt-4 max-w-[160px]">
                    {card.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 mb-4 px-2">
                  <p className="text-[10px] tracking-wide text-amber-300 font-serif italic">
                    {card.footer}
                  </p>
                  <span className="text-[7px] text-amber-200/50 block mt-1 tracking-widest uppercase">
                    *T&amp;C APPLY
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center gap-2 mt-8">
        {[0, 1, 2, 3].map((dot) => (
          <button
            key={dot}
            onClick={() => setActiveDot(dot)}
            aria-label={`Go to slide ${dot + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeDot === dot
                ? 'bg-amber-700 w-4'
                : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}