import React from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group">
  {/* The Circular Golden Border (keeping exact texture and border) */}
  <div className="w-12 h-12 rounded-full border border-[#B38738] p-0.5 flex items-center justify-center bg-white/50 shadow-[0_2px_8px_rgba(179,135,56,0.15)] group-hover:scale-105 transition-transform duration-300">
    {/* Replacing PC placeholder text with the assets/logo.png file */}
<div className="w-full h-full rounded-full bg-[#3B1117] flex items-center justify-center overflow-hidden">
      <img 
        src={logo} 
        alt="Purvanchal Collection Logo" 
        className="w-[125%] h-[125%] max-w-[230%] object-contain scale-200"
        onError={(e) => {
          // Fallback just in case the file gets misplaced during deployment
          e.target.style.display = 'none';
          if (e.target.nextSibling) {
            e.target.nextSibling.style.display = 'flex';
          }
        }}
      />
      {/* Visual fallback */}
      <span className="hidden text-[#D4AF37] font-serif font-bold text-xs tracking-tighter">PC</span>
    </div>
  </div>

  {/* Typography */}
  <div className="flex flex-col">
    <span className="font-serif-luxury text-xl md:text-2xl font-bold tracking-wide text-[#3B1117] leading-tight">
      Purvanchal
    </span>
    <span className="text-[9px] tracking-[0.28em] text-stone-500 uppercase font-medium">
      Collection · Pvt. Ltd.
    </span>
  </div>
</div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-[12px] font-semibold tracking-[0.16em] uppercase text-stone-700">
          <a href="#home" className="hover:text-[#641824] transition text-[#641824]">
            Home
          </a>
          <a href="#about" className="hover:text-[#641824] transition">
            About Us
          </a>
          <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-[#641824] transition">
            <span>Women</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
          </div>
          <a href="#collections" className="hover:text-[#641824] transition">
            Collections
          </a>
          <a href="#contact" className="hover:text-[#641824] transition">
            Contact Us
          </a>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-6">
          <a 
            href="tel:7291912200" 
            className="hidden sm:flex items-center space-x-2 text-[12px] font-medium text-stone-700 hover:text-[#641824] transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#B38738]" />
            <span>7291912200</span>
          </a>

          <button className="bg-[#641824] hover:bg-[#4E121B] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-2.5 transition duration-200 shadow-sm">
            Enquire Now
          </button>
        </div>
      </div>
    </nav>
  );
}