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
    <div className="w-full bg-[#FAF7F2] border-y border-[#E8DEC9] py-4 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-8 items-center text-[#7A2834] text-[11px] md:text-[12px] font-semibold tracking-[0.28em] uppercase">
        {[...TAGS, ...TAGS].map((tag, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="whitespace-nowrap">{tag}</span>
            <span className="text-[9px] text-[#B08D46]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}