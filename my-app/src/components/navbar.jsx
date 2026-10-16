import React from 'react';
import { ChevronDown, Phone, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-full border border-[#B38738] p-0.5 flex items-center justify-center bg-white/50 shadow-[0_2px_8px_rgba(179,135,56,0.15)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[#3B1117] flex items-center justify-center overflow-hidden">
              <img 
                src={logo} 
                alt="Purvanchal Collection Logo" 
                className="w-[125%] h-[125%] max-w-[125%] object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span className="hidden text-[#D4AF37] font-serif font-bold text-xs">PC</span>
            </div>
          </div>

          <div className="flex flex-col text-left">
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
          <button
            onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`transition uppercase ${activePage === 'home' ? 'text-[#641824]' : 'hover:text-[#641824]'}`}
          >
            Home
          </button>
          
          <a href="#about" onClick={() => setActivePage('home')} className="hover:text-[#641824] transition">
            About Us
          </a>

          <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-[#641824] transition">
            <span>Women</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
          </div>

          <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-[#641824] transition">
            <span>Men</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
          </div>

          <a href="#collections" onClick={() => setActivePage('home')} className="hover:text-[#641824] transition">
            Collections
          </a>

          <button
            onClick={() => { setActivePage('enquiry'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`transition uppercase ${activePage === 'enquiry' ? 'text-[#641824]' : 'hover:text-[#641824]'}`}
          >
            Contact Us
          </button>
        </div>

        {/* Right Actions: Phone & Enquire Now button */}
        <div className="flex items-center space-x-6">
          <a 
            href="tel:7291912200" 
            className="hidden sm:flex items-center space-x-2 text-[12px] font-medium text-stone-700 hover:text-[#641824] transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#B38738]" />
            <span>7291912200</span>
          </a>

          {/* Clicking opens the Enquiry Page */}
          <button 
            onClick={() => {
              setActivePage('enquiry');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#641824] hover:bg-[#4E121B] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-2.5 transition duration-200 shadow-sm"
          >
            Enquire Now
          </button>
        </div>

      </div>
    </nav>
  );
}