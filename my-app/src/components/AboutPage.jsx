import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import TickerBanner from './TickerBanner';

// Import local images from src/assets/
import biaImg from '../assets/BIA.jpeg';
import tlsImg from '../assets/TLS.jpeg';
import bibImg from '../assets/BIB.jpeg';
import rlaImg from '../assets/RLA.jpeg';

const AWARDS = [
  {
    id: 1,
    title: 'Business Icon Award 2024',
    recipient: 'MR. ALOK KUMAR',
    role: 'DIRECTOR',
    imgPlaceholder: 'Business Icon Award 2024 — Mr. Alok Kumar, Director',
    image: biaImg ,
  },
  {
    id: 2,
    title: 'Tamas Talent Spree Pvt. Ltd. Award',
    recipient: 'MR. ALOK KUMAR',
    role: 'DIRECTOR',
    imgPlaceholder: 'Tamas Talent Spree Pvt. Ltd. Award — Mr. Alok Kumar, Director',
    image: tlsImg,
  },
  {
    id: 3,
    title: 'Bihar Hero Award 2024',
    recipient: 'MR. NARENDAR GAUR',
    role: 'FOUNDER, PURVANCHAL COLLECTION PVT. LTD.',
    imgPlaceholder: 'Bihar Hero Award 2024 — Mr. Narendar Gaur, Founder, Purvanchal Collection Pvt. Ltd.',
    image: bibImg,
  },
  {
    id: 4,
    title: 'Runway Legends Award',
    recipient: 'MR. MOHIT KUMAR',
    role: 'DIRECTOR',
    imgPlaceholder: 'Runway Legends Award — Mr. Mohit Kumar, Director',
    image: rlaImg,
  },
];

const PRINCIPLES = [
  {
    num: '01',
    title: 'Craft Over Commerce',
    desc: 'Every silhouette begins with the artisan — handloom weaves, hand embroidery, honest fabric.',
  },
  {
    num: '02',
    title: 'Celebration First',
    desc: 'We design for the moments families remember: weddings, festivals and milestones.',
  },
  {
    num: '03',
    title: 'Heritage, Reimagined',
    desc: "Classic Indian craftsmanship interpreted for today's generation and wardrobe.",
  },
];

export default function AboutPage({ setActivePage }) {
  return (
    <div className="bg-[#FAF7F2] text-[#1E090C] min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="relative overflow-hidden bg-[#2D0D12] text-white py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#3F0E17]">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1600&q=80"
            alt="Atelier jewellery backdrop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#24060B] via-[#2D0D12]/90 to-[#24060B]/80" />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto text-left">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#C5A869] font-medium mb-3">
            ABOUT US
          </p>
          <h1 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] font-normal tracking-tight leading-tight max-w-2xl">
            A House of Indian Celebration Wear
          </h1>
        </div>
      </section>

      {/* 2. Our Heritage Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 text-left">
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium mb-3">
              OUR HERITAGE
            </p>
            <h2 className="font-serif-luxury text-4xl md:text-5xl text-[#1E090C] font-normal tracking-tight leading-tight">
              Rooted in Culture, Crafted for Today
            </h2>

            <div className="flex items-center space-x-3 my-6 text-[#C5A869]">
              <div className="h-[1px] w-12 bg-[#D8B467]/50" />
              <span className="text-[8px]">◆</span>
              <div className="h-[1px] w-12 bg-[#D8B467]/50" />
            </div>

            <p className="text-sm md:text-base text-stone-700 font-light leading-relaxed mb-6">
              Established in 2004 and rooted in the richness of Indian culture, Purvanchal Collection Pvt. Ltd. is built around a simple belief — traditional fashion should feel timeless, personal and relevant to today's generation.
            </p>

            <p className="text-xs md:text-sm text-stone-600 font-light leading-relaxed mb-6">
              Our collections travel from the silk looms of Banaras and Kanchipuram to the zardozi ateliers of the north, bringing together fabrics and techniques that have dressed Indian celebrations for generations. Each saree, lehenga and sherwani is chosen — and often finished — by hand.
            </p>

            <p className="text-xs md:text-sm text-stone-500 font-light leading-relaxed">
              From our workshop in Faridabad, we serve families across Delhi NCR and beyond, dressing weddings, festivals and every gathering in between with warmth, honesty and craft.
            </p>
          </div>

          {/* Right Runway Model Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[3/4] overflow-hidden shadow-2xl bg-[#EBE1D0]">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
                alt="Purvanchal Runway Heritage"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Awards & Recognition Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 border-t border-[#EFE8DC] bg-[#FAF7F2]">
        <div className="max-w-[1300px] mx-auto text-center">
          
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium">
            OUR PRIDE
          </p>
          <h2 className="font-serif-luxury text-4xl md:text-5xl text-[#1E090C] font-normal tracking-tight mt-3">
            Awards & Recognition
          </h2>

          <div className="flex items-center justify-center my-6 space-x-3 text-[#C5A869]">
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
            <span className="text-[8px]">◆</span>
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {AWARDS.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#F5EFE6] border border-[#E8DEC9] p-4 flex flex-col group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE3D5] flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center text-center p-6 text-stone-500">
                    <Trophy className="w-8 h-8 text-[#B08D46] mb-2 stroke-[1.5]" />
                    <span className="text-xs font-serif-luxury tracking-wide">{item.imgPlaceholder}</span>
                  </div>
                </div>

                <div className="pt-6 pb-4 text-center">
                  <h3 className="font-serif-luxury text-2xl text-[#1E090C] font-medium">
                    {item.title}
                  </h3>
                  <p className="text-[10px] tracking-[0.25em] text-[#B08D46] font-semibold uppercase mt-2">
                    {item.recipient}
                  </p>
                  <p className="text-[9px] tracking-[0.2em] text-stone-500 uppercase mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Marquee Divider */}
      <TickerBanner />

      {/* 5. What Guides Us / The Purvanchal Way */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAF7F2]">
        <div className="max-w-[1300px] mx-auto text-center">
          
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium">
            WHAT GUIDES US
          </p>
          <h2 className="font-serif-luxury text-4xl md:text-5xl text-[#1E090C] font-normal tracking-tight mt-3">
            The Purvanchal Way
          </h2>

          <div className="flex items-center justify-center my-6 space-x-3 text-[#C5A869]">
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
            <span className="text-[8px]">◆</span>
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-left">
            {PRINCIPLES.map((principle) => (
              <div key={principle.num} className="border-t border-[#B08D46]/40 pt-6">
                <span className="font-serif-luxury text-2xl md:text-3xl text-[#B08D46] font-normal block mb-2">
                  {principle.num}
                </span>
                <h3 className="font-serif-luxury text-2xl text-[#1E090C] font-normal mb-3">
                  {principle.title}
                </h3>
                <p className="text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Visit The Workshop Section */}
      <section className="bg-[#54151C] text-white py-20 px-6 md:px-12 lg:px-20 border-t border-[#5A141E]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & Actions */}
          <div className="lg:col-span-7 text-left">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#C5A869] font-medium mb-3">
              VISIT THE WORKSHOP
            </p>
            <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl text-[#FAF7F2] font-normal tracking-tight leading-tight">
              Experience the Collection in Person
            </h2>
            <p className="text-xs md:text-sm text-stone-300 font-light leading-relaxed mt-4 mb-8 max-w-lg">
              12/4 Sarai Faridabad, Faridabad, Haryana 121003. Open 7 days a week, 10:00 AM – 9:00 PM. Walk in for a styling consultation or browse at your leisure.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.google.com/maps/place/Purvanchal+Collection+Pvt.+Ltd+(+Sarai+Khwaja)/@28.4750259,77.3036621,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce7e8ef3ae515:0x95e665c2dd327136!8m2!3d28.4750212!4d77.306237!16s%2Fg%2F11w1qnrg6x?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-[#B89758] hover:bg-[#a68648] text-[#290B10] px-7 py-3 text-[11px] font-bold tracking-[0.2em] uppercase transition duration-300 shadow-md cursor-pointer"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  if (setActivePage) {
                    setActivePage('enquiry');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center border border-white/40 hover:border-white text-white px-7 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase transition duration-300 cursor-pointer"
              >
                CONTACT US
              </button>
            </div>
          </div>

          {/* Right Wedding Couple Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-[4/3] overflow-hidden shadow-2xl bg-black">
              <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80"
                alt="Wedding celebration in Purvanchal"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}