import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="bg-[#FAF7F2] py-24 px-6 md:px-12 lg:px-20 border-t border-[#EFE8DC]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Editorial Runway Model Photo */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[440px] aspect-[3/4] overflow-hidden shadow-2xl bg-stone-200">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
              alt="Purvanchal Collection Runway Model"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Side: Editorial Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium mb-3">
            BRAND STORY
          </p>

          <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#1E090C] font-normal tracking-tight leading-tight">
            Our Heritage
          </h2>

          {/* Golden Diamond Divider */}
          <div className="flex items-center space-x-3 my-6 text-[#C5A869]">
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
            <span className="text-[8px]">◆</span>
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
          </div>

          <p className="text-sm md:text-base text-stone-700 font-light leading-relaxed mb-6">
            Rooted in the richness of Indian culture, Purvanchal Collection Pvt. Ltd. is built around a simple belief — traditional fashion should feel timeless, personal and relevant to today's generation.
          </p>

          <p className="text-xs md:text-sm text-stone-500 font-light leading-relaxed mb-10">
            From the looms of Banaras to the embroidery karkhanas of the north, every piece in our collection honours the hands that made it. We dress families for weddings, festivals and milestones — carrying forward traditions of craftsmanship while designing for the modern wardrobe.
          </p>

          <div>
            <a
              href="#story"
              className="inline-flex items-center space-x-3 border border-[#641824] hover:bg-[#641824] text-[#641824] hover:text-white px-8 py-3.5 text-[11px] font-semibold tracking-[0.25em] uppercase transition duration-300 group"
            >
              <span>READ OUR STORY</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}