import React from 'react';

const TAGS = [
  "BESPOKE GROOM'S ATELIER",
  "HANDCRAFTED ZARDOZI",
  "BANARASI SILKS",
  "ROYAL HERITAGE",
  "TIMELESS BRIDALWEAR",
  "PURVANCHAL COLLECTION",
];

export default function TickerBanner() {
  return (
    <div className="w-full bg-[#3B0C13] border-y border-[#52151F] py-3.5 overflow-hidden select-none">
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
  );
}