import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CATEGORY_ITEMS = {
  sarees: {
    title: 'Banarasi & Handcrafted Sarees',
    subtitle: 'Woven with gold zari threads and timeless heritage silk motifs.',
    heroImg: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    items: [
      { id: 1, name: 'Royal Crimson Banarasi Katan Silk', price: '₹28,500', tag: 'Handloom Pure Silk', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80' },
      { id: 2, name: 'Gulabi Meenakari Silk Brocade', price: '₹34,000', tag: 'Bridal Heritage', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80' },
      { id: 3, name: 'Antique Gold Tissue Organza Saree', price: '₹22,000', tag: 'Occasion Wear', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80' },
      { id: 4, name: 'Midnight Plum Zardozi Silk Saree', price: '₹31,500', tag: 'Reception Edit', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80' },
    ]
  },
  lehenga: {
    title: 'Hand-Embroidered Lehengas',
    subtitle: 'Architectural flares, hand-cut gota patti, and intricate zardozi craftsmanship.',
    heroImg: 'https://images.unsplash.com/photo-1583391733975-08147d3c01bf?auto=format&fit=crop&w=1200&q=80',
    items: [
      { id: 1, name: 'Sindoori Red Raw Silk Bridal Lehenga', price: '₹88,000', tag: 'Masterpiece Atelier', img: 'https://images.unsplash.com/photo-1583391733975-08147d3c01bf?auto=format&fit=crop&w=600&q=80' },
      { id: 2, name: 'Kashmiri Tilla Embroidered Velvet Lehenga', price: '₹95,000', tag: 'Royal Winter Edit', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80' },
      { id: 3, name: 'Blush Rose Gold Mirror Work Lehenga', price: '₹54,000', tag: 'Sangeet Special', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80' },
      { id: 4, name: 'Ivory Floral Resham Threadwork Lehenga', price: '₹62,000', tag: 'Contemporary Bride', img: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80' },
    ]
  },
  default: {
    title: 'Handcrafted Festive & Bridal Couture',
    subtitle: 'Artisanal drapes tailored exclusively at our Purvanchal atelier.',
    heroImg: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    items: [
      { id: 1, name: 'Handcrafted Heritage Ensemble', price: '₹38,000', tag: 'Atelier Selection', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80' },
      { id: 2, name: 'Bespoke Zardozi Celebration Piece', price: '₹46,000', tag: 'Signature Edit', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80' },
      { id: 3, name: 'Handwoven Banarasi Drape', price: '₹29,000', tag: 'Festive Classic', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80' },
      { id: 4, name: 'Embroidered Celebration Suit Set', price: '₹24,500', tag: 'Exclusive', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80' },
    ]
  }
};

export default function CategoryPage({ categoryName = 'sarees', setActivePage }) {
  const normalizedKey = categoryName.toLowerCase().includes('lehenga') ? 'lehenga' : 
                        categoryName.toLowerCase().includes('saree') ? 'sarees' : 'default';
  
  const data = CATEGORY_ITEMS[normalizedKey] || CATEGORY_ITEMS.default;

  return (
    <div className="bg-[#FAF7F2] text-[#1E090C] min-h-screen">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-[#2D0D12] text-white py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#3F0E17]">
        <div className="absolute inset-0 z-0 opacity-25">
          <img src={data.heroImg} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#24060B] via-[#2D0D12]/90 to-[#24060B]/80" />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto text-left">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#C5A869] font-medium mb-3 flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COLLECTION EDIT — {categoryName.toUpperCase()}</span>
          </p>
          <h1 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] font-normal tracking-tight max-w-3xl leading-tight">
            {data.title}
          </h1>
          <p className="text-xs md:text-sm text-stone-300 font-light leading-relaxed mt-4 max-w-xl">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Product Gallery Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-[#EBE1D0] group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <span className="absolute top-3 left-3 bg-[#2D0D12]/90 text-[#D4AF37] text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                  {item.tag}
                </span>
              </div>

              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-lg text-[#1E090C] font-normal leading-snug group-hover:text-[#641824] transition">
                    {item.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#B08D46] mt-2">
                    {item.price}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActivePage('enquiry');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-5 w-full bg-[#FAF7F2] hover:bg-[#641824] text-stone-700 hover:text-white border border-[#E5DAC6] hover:border-[#641824] text-[10px] tracking-[0.2em] uppercase font-bold py-2.5 transition duration-300 flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>REQUEST IN ATELIER</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}