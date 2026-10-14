import React from 'react';

const products = [
  { id: 1, name: "Royal Banarasi Silk", price: "₹24,999", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Kanjivaram Festive Drape", price: "₹32,500", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Embroidered Organza", price: "₹18,200", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Designer Party Saree", price: "₹21,000", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600" },
];

export default function collections() {
  return (
    <section className="py-20 px-6 bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-serif text-amber-100 mb-3">Curated Masterpieces</h2>
          <p className="text-xs text-amber-200/70 tracking-widest uppercase">Handcrafted perfection for every occasion</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4 bg-emerald-900">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="font-serif text-amber-100 text-base">{item.name}</h3>
              <p className="text-amber-400 font-semibold text-sm mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}