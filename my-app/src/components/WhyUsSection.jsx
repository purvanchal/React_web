import React from 'react';

const PILLARS = [
  {
    number: '01',
    title: 'Premium Quality',
    description: 'Carefully selected fabrics and thoughtfully crafted designs.',
  },
  {
    number: '02',
    title: 'Authentic Craftsmanship',
    description: 'Celebrating traditional Indian techniques and artistry.',
  },
  {
    number: '03',
    title: 'Exclusive Designs',
    description: 'Distinctive styles created for special occasions.',
  },
  {
    number: '04',
    title: 'Personalized Service',
    description: 'Helping every customer find the right style for their celebration.',
  },
  {
    number: '05',
    title: 'Value & Trust',
    description: 'Quality fashion with a commitment to customer satisfaction.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-[#3B0C13] text-white py-24 px-6 md:px-12 lg:px-16 border-t border-[#4E121C]">
      <div className="max-w-[1400px] mx-auto text-center">
        
        {/* Eyebrow Label */}
        <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#C5A869] font-medium">
          WHY PURVANCHAL COLLECTION
        </p>

        {/* Heading */}
        <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] font-normal tracking-tight mt-4 leading-tight">
          Crafted With Tradition. Designed For You.
        </h2>

        {/* Diamond Divider */}
        <div className="flex items-center justify-center my-8 space-x-3 text-[#C5A869]">
          <div className="h-[1px] w-12 bg-[#D8B467]/30" />
          <span className="text-[8px]">◆</span>
          <div className="h-[1px] w-12 bg-[#D8B467]/30" />
        </div>

        {/* 5-Column Grid with thin bordered separator boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border border-white/10 mt-12 bg-[#340A10]/50">
          {PILLARS.map((item, index) => (
            <div
              key={item.number}
              className={`p-8 lg:p-10 text-left flex flex-col justify-start border-b md:border-b-0 border-white/10 ${
                index !== PILLARS.length - 1 ? 'lg:border-r' : ''
              } hover:bg-white/[0.03] transition-colors duration-300`}
            >
              {/* Pillar Number */}
              <span className="font-serif-luxury text-2xl md:text-3xl text-stone-400 font-light block mb-6">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="font-serif-luxury text-xl md:text-[22px] text-white font-medium leading-snug mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-stone-300/80 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}