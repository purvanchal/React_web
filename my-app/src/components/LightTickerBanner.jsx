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
    <div className="w-full bg-[#54151C] overflow-hidden select-none border-t border-b border-[#D8B467]/20 py-3.5 flex items-center">
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