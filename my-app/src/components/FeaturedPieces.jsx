import React from 'react';

const PRODUCTS = [
  {
    id: 1,
    tag: 'FEATURED',
    category: 'SAREES',
    title: 'Banarasi Crimson Silk Saree',
    price: '₹18,500',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    tag: 'FEATURED',
    category: 'LEHENGAS',
    title: 'Sangeet Shimmer Lehenga',
    price: '₹32,000',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    tag: 'FEATURED',
    category: 'BRIDAL LEHENGAS',
    title: 'Crimson Bridal Lehenga',
    price: '₹68,000',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    tag: 'FEATURED',
    category: 'SUITS',
    title: 'Anarkali Regal Suit',
    price: '₹16,500',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    tag: 'FEATURED',
    category: 'KURTIS',
    title: 'Chikankari Hand Kurti',
    price: '₹3,200',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    tag: 'FEATURED',
    category: 'FESTIVE WEAR',
    title: 'Bandhani Celebration Set',
    price: '₹14,500',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
    {
    id: 7,
    tag: 'FEATURED',
    category: 'FESTIVE WEAR',
    title: 'Bandhani Celebration Set',
    price: '₹14,500',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
];

export default function FeaturedPieces() {
  return (
    <section className="bg-[#FAF7F2] py-24 px-6 md:px-12 lg:px-16 border-t border-[#EFE8DC]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#B08D46] font-medium">
            FEATURED PIECES
          </p>
          <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#1E090C] font-normal tracking-tight mt-3">
            The Atelier's Finest
          </h2>
          <p className="text-xs md:text-sm text-stone-500 font-normal leading-relaxed mt-4 max-w-xl mx-auto">
            A hand-picked edit from our current collection. Sample catalogue shown — new pieces arrive every season.
          </p>
          
          {/* Subtle separator */}
          <div className="flex items-center justify-center mt-6 space-x-3 text-[#C5A869]">
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
            <span className="text-[8px]">◆</span>
            <div className="h-[1px] w-12 bg-[#D8B467]/50" />
          </div>
        </div>

        {/* 4-column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col cursor-pointer">
              
              {/* Product Image Card with Ribbon */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
                {product.tag && (
                  <span className="absolute top-3 left-3 z-10 bg-[#641824] text-white text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 shadow-sm">
                    {product.tag}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Product Details */}
              <div className="mt-4 flex flex-col text-left">
                <span className="text-[10px] tracking-[0.25em] text-[#B08D46] uppercase font-semibold">
                  {product.category}
                </span>
                <h3 className="font-serif-luxury text-lg text-stone-900 font-medium mt-1 leading-snug group-hover:text-[#641824] transition-colors">
                  {product.title}
                </h3>
                <span className="text-xs text-stone-600 font-medium mt-1.5 tracking-wide">
                  {product.price}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}