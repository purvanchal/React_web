import React from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar({ activePage, setActivePage }) {
  const navigateTo = (page) => {
    if (setActivePage) {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id) => {
    navigateTo('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => navigateTo('home')}
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
            onClick={() => navigateTo('home')}
            className={`transition uppercase cursor-pointer ${
              activePage === 'home' ? 'text-[#641824]' : 'hover:text-[#641824]'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => navigateTo('about')}
            className={`transition uppercase cursor-pointer ${
              activePage === 'about' ? 'text-[#641824]' : 'hover:text-[#641824]'
            }`}
          >
            About Us
          </button>

          {/* Women Dropdown */}
          <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-[#641824] transition py-6">
            <span>Women</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
            
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-xl border border-stone-200 py-3 w-52 z-50 text-left normal-case">
              <button 
                onClick={() => scrollToSection('women')}
                className="px-5 py-2 hover:bg-[#FAF7F2] text-xs font-medium text-stone-800 hover:text-[#641824] transition text-left cursor-pointer"
              >
                Bridal Lehengas
              </button>
              <button 
                onClick={() => scrollToSection('women')}
                className="px-5 py-2 hover:bg-[#FAF7F2] text-xs font-medium text-stone-800 hover:text-[#641824] transition text-left cursor-pointer"
              >
                Banarasi & Silk Sarees
              </button>
              <button 
                onClick={() => scrollToSection('women')}
                className="px-5 py-2 hover:bg-[#FAF7F2] text-xs font-medium text-stone-800 hover:text-[#641824] transition text-left cursor-pointer"
              >
                Festive Anarkalis & Suits
              </button>
              <button 
                onClick={() => scrollToSection('women')}
                className="px-5 py-2 hover:bg-[#FAF7F2] text-xs font-medium text-stone-800 hover:text-[#641824] transition text-left cursor-pointer"
              >
                Reception Gowns
              </button>
            </div>
          </div>

          {/* Men Dropdown */}
          <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-[#641824] transition py-6">
            <span>Men</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
            
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-xl border border-stone-200 py-3 w-52 z-50 text-left normal-case">
              <button 
                onClick={() => scrollToSection('featured')}
                className="px-5 py-2 hover:bg-[#FAF7F2] text-xs font-medium text-stone-800 hover:text-[#641824] transition text-left cursor-pointer"
              >
                Groom's Sherwanis
              </button>
              <button 
                onClick={() => scrollToSection('featured')}
                className="px-5 py-2 hover:bg-[#FAF7F2] text-xs font-medium text-stone-800 hover:text-[#641824] transition text-left cursor-pointer"
              >
                Indo-Western Sets
              </button>
              <button 
                onClick={() => scrollToSection('featured')}
                className="px-5 py-2 hover:bg-[#FAF7F2] text-xs font-medium text-stone-800 hover:text-[#641824] transition text-left cursor-pointer"
              >
                Bespoke Bandhgalas
              </button>
              <button 
                onClick={() => scrollToSection('featured')}
                className="px-5 py-2 hover:bg-[#FAF7F2] text-xs font-medium text-stone-800 hover:text-[#641824] transition text-left cursor-pointer"
              >
                Kurta Pajama Sets
              </button>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('collections')}
            className="hover:text-[#641824] transition uppercase cursor-pointer"
          >
            Collections
          </button>

          <button
            onClick={() => navigateTo('enquiry')}
            className={`transition uppercase cursor-pointer ${
              activePage === 'enquiry' ? 'text-[#641824]' : 'hover:text-[#641824]'
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <a 
            href="tel:7291912200" 
            className="hidden sm:flex items-center space-x-2 text-[12px] font-medium text-stone-700 hover:text-[#641824] transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#B38738]" />
            <span>7291912200</span>
          </a>

          <button 
            onClick={() => navigateTo('enquiry')}
            className="bg-[#641824] hover:bg-[#4E121B] text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-2.5 transition duration-200 shadow-sm cursor-pointer"
          >
            Enquire Now
          </button>
        </div>

      </div>
    </nav>
  );
}