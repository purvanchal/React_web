import React from 'react';
import { Gem, Scissors, Sparkles, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    icon: Gem,
    title: 'Premium Quality',
    description: 'Carefully selected fabrics and thoughtfully crafted designs.',
  },
  {
    icon: Scissors,
    title: 'Traditional Craftsmanship',
    description: 'Celebrating traditional Indian techniques and artistry.',
  },
  {
    icon: Sparkles,
    title: 'Contemporary Designs',
    description: "Distinctive styles created for today's special occasions.",
  },
];

export default function AboutSection({ setActivePage }) {
  const handleDiscoverStory = () => {
    if (setActivePage) {
      setActivePage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium">
          WHO WE ARE
        </p>

        <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#1E090C] font-normal tracking-tight mt-4 leading-tight">
          Celebrating the Art of Indian Fashion
        </h2>

        <div className="flex items-center justify-center my-6 space-x-3 text-[#C5A869]">
          <div className="h-[1px] w-12 bg-[#D8B467]/50" />
          <span className="text-[9px]">◆</span>
          <div className="h-[1px] w-12 bg-[#D8B467]/50" />
        </div>

        <p className="font-serif-luxury italic text-stone-700 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
          At Purvanchal Collection Pvt. Ltd., we bring together the richness of Indian tradition and
          the elegance of contemporary fashion. Our collections are created for people who believe
          that every celebration deserves an outfit as memorable as the occasion itself.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 text-center">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-12 h-12 flex items-center justify-center text-[#B08D46] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 stroke-[1.25]" />
                </div>
                <h3 className="font-serif-luxury text-xl text-[#1E090C] font-medium mt-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 font-normal leading-relaxed mt-2 max-w-[240px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={handleDiscoverStory}
            className="inline-flex items-center space-x-3 border border-[#641824] hover:bg-[#641824] text-[#641824] hover:text-white px-8 py-3.5 text-[11px] font-semibold tracking-[0.25em] uppercase transition duration-300 group cursor-pointer"
          >
            <span>DISCOVER OUR STORY</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}