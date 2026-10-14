import React from 'react';

const heroPanels = [
  { id: 1, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800" },
  { id: 2, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800" },
  { id: 3, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800" },
  { id: 4, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800" },
];

export default function hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex overflow-hidden bg-emerald-950">
      {/* 4 Split Background Panels */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-4 z-0">
        {heroPanels.map((panel) => (
          <div key={panel.id} className="relative h-full w-full overflow-hidden group border-r border-emerald-900/30">
            <img 
              src={panel.image} 
              alt="Saree Collection" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Central Brand Manifesto Card */}
      <div className="relative z-10 m-auto max-w-2xl px-6 text-center">
        <div className="bg-emerald-950/70 backdrop-blur-md border border-amber-500/30 p-8 md:p-12 rounded-lg shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-serif text-amber-100 leading-snug mb-6">
            Carrying forward a rich legacy of craftsmanship, tradition, and style for generations.
          </h1>
          <button className="border border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 px-6 py-3 text-xs tracking-widest font-semibold transition rounded">
            EXPLORE THE COLLECTIONS
          </button>
        </div>
      </div>
    </section>
  );
}