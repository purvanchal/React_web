import React from 'react';

const TAGS = [
  "BANARASI SILKS",
  "ROYAL HERITAGE",
  "TIMELESS BRIDALWEAR",
  "PURVANCHAL COLLECTION",
  "BESPOKE GROOM'S ATELIER",
  "HANDCRAFTED ZARDOZI",
];

export default function LightTickerBanner() {
  return (
    /* Outer Maroon wrapper with top spacing only (pb-0) */
    <div className="w-full bg-[#1E090C] pt-10 md:pt-16 pb-0 flex flex-col justify-end">
      
      {/* Banner docked completely at the bottom edge */}
      <div className="w-full bg-[#3B0C13] border-t border-b border-[#52151F] py-3.5 overflow-hidden select-none flex items-center">
        <div className="flex w-max animate-marquee space-x-8 items-center text-[#E5C173] text-[11px] md:text-[12px] font-semibold tracking-[0.25em] uppercase">
          {/* Render twice for continuous loop */}
          {[...TAGS, ...TAGS].map((tag, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="whitespace-nowrap">{tag}</span>
              <span className="text-[10px] text-[#C5A869]">◆</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}