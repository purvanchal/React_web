import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    quote: "“The craftsmanship and attention to detail made the outfit feel truly special on the big day.”",
    role: "CUSTOMER STORY",
    location: "DELHI NCR",
  },
  {
    quote: "“Exquisite bridal lehenga collection with unmatched quality of zardozi work and fine fabrics.”",
    role: "BRIDAL CLIENT",
    location: "FARIDABAD",
  },
  {
    quote: "“From styling suggestions to the final drape, the team made finding our wedding attire an effortless experience.”",
    role: "WEDDING TROUSSEAU",
    location: "GURUGRAM",
  },
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevReview = () => {
    setCurrentIdx((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIdx((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#FAF7F2] py-24 px-6 md:px-12 lg:px-16 border-t border-[#EFE8DC]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium">
          KIND WORDS
        </p>
        <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#1E090C] font-normal tracking-tight mt-3">
          What Our Customers Say
        </h2>

        <div className="flex items-center justify-center my-6 space-x-3 text-[#C5A869]">
          <div className="h-[1px] w-12 bg-[#D8B467]/50" />
          <span className="text-[8px]">◆</span>
          <div className="h-[1px] w-12 bg-[#D8B467]/50" />
        </div>

        {/* Big Stylized Quote Icon */}
        <div className="font-serif-luxury text-[#B08D46] text-6xl leading-none mt-8 mb-4 select-none opacity-80">
          ““
        </div>

        {/* Dynamic Testimonial Quote */}
        <p className="font-serif-luxury italic text-stone-800 text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-2xl mx-auto min-h-[90px] flex items-center justify-center">
          {REVIEWS[currentIdx].quote}
        </p>

        {/* Customer Information */}
        <div className="mt-8">
          <p className="text-[11px] tracking-[0.25em] text-[#641824] uppercase font-bold">
            {REVIEWS[currentIdx].role}
          </p>
          <p className="text-[10px] tracking-[0.25em] text-stone-500 uppercase mt-1">
            {REVIEWS[currentIdx].location}
          </p>
        </div>

        {/* Sample disclaimer chip */}
        <div className="mt-6">
          <span className="inline-block border border-stone-300 text-stone-400 text-[9px] tracking-[0.2em] uppercase px-4 py-1.5">
            SAMPLE — REAL STORIES COMING SOON
          </span>
        </div>

        {/* Carousel Prev / Next Controls */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <button
            onClick={prevReview}
            className="w-9 h-9 border border-stone-300 hover:border-stone-500 flex items-center justify-center text-stone-600 hover:text-stone-900 transition"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`transition-all duration-300 ${
                  currentIdx === i ? 'w-5 h-1.5 bg-[#641824]' : 'w-1.5 h-1.5 bg-stone-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextReview}
            className="w-9 h-9 border border-stone-300 hover:border-stone-500 flex items-center justify-center text-stone-600 hover:text-stone-900 transition"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}