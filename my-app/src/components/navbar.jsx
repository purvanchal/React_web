import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar({ activePage, setActivePage, setSelectedCategory }) {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'women' | 'men' | null

  const navigateTo = (page) => {
    if (setActivePage) {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setActiveDropdown(null);
  };

  const handleCategoryClick = (categoryName) => {
    if (setSelectedCategory) setSelectedCategory(categoryName);
    if (setActivePage) setActivePage('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveDropdown(null);
  };

  const scrollToSection = (id) => {
    navigateTo('home');
    setActiveDropdown(null);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav 
      className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-200"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between relative">
        
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
        <div className="hidden lg:flex items-center space-x-8 text-[12px] font-semibold tracking-[0.16em] uppercase text-stone-700 h-full">
          <button
            onClick={() => navigateTo('home')}
            onMouseEnter={() => setActiveDropdown(null)}
            className={`transition uppercase cursor-pointer ${
              activePage === 'home' && !activeDropdown ? 'text-[#641824]' : 'hover:text-[#641824]'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => navigateTo('about')}
            onMouseEnter={() => setActiveDropdown(null)}
            className={`transition uppercase cursor-pointer ${
              activePage === 'about' ? 'text-[#641824]' : 'hover:text-[#641824]'
            }`}
          >
            About Us
          </button>

          {/* Women Dropdown Trigger */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => setActiveDropdown('women')}
          >
            <button
              onClick={() => scrollToSection('women')}
              className={`flex items-center space-x-1 uppercase cursor-pointer transition ${
                activeDropdown === 'women' ? 'text-[#641824]' : 'hover:text-[#641824]'
              }`}
            >
              <span>Women</span>
              <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-300 ${
                activeDropdown === 'women' ? 'rotate-180' : ''
              }`} />
            </button>
          </div>

          {/* Men Dropdown Trigger */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => setActiveDropdown('men')}
          >
            <button
              onClick={() => scrollToSection('featured')}
              className={`flex items-center space-x-1 uppercase cursor-pointer transition ${
                activeDropdown === 'men' ? 'text-[#641824]' : 'hover:text-[#641824]'
              }`}
            >
              <span>Men</span>
              <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-300 ${
                activeDropdown === 'men' ? 'rotate-180' : ''
              }`} />
            </button>
          </div>

          <button
            onClick={() => scrollToSection('collections')}
            onMouseEnter={() => setActiveDropdown(null)}
            className="hover:text-[#641824] transition uppercase cursor-pointer"
          >
            Collections
          </button>

          <button
            onClick={() => navigateTo('enquiry')}
            onMouseEnter={() => setActiveDropdown(null)}
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

      {/* =========================================================================
          FULL-WIDTH MEGA MENU WITH DELICATE TRANSITION EFFECTS
          ========================================================================= */}
      {activeDropdown && (
        <div 
          className="absolute top-full left-0 w-full bg-[#FAF7F2] border-t border-b border-[#E8DEC9] shadow-[0_25px_50px_rgba(45,13,18,0.12)] py-12 px-6 lg:px-16 transition-all duration-300 transform origin-top animate-dropdown"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            
            {activeDropdown === 'women' ? (
              /* WOMEN MEGA MENU */
              <>
                {/* Column 1: Drapes & Silhouettes */}
                <div className="lg:col-span-4 pl-4">
                  <h4 className="text-[11px] font-bold tracking-[0.28em] text-[#B08D46] uppercase mb-6 flex items-center space-x-2">
                    <span>DRAPES & SILHOUETTES</span>
                  </h4>
                  <ul className="space-y-3.5">
                    {['Sarees', 'Lehenga', 'Bridal Lehenga'].map((item) => (
                      <li key={item}>
                        <button 
                          onClick={() => handleCategoryClick(item)}
                          className="group flex items-center space-x-2 text-stone-800 hover:text-[#641824] text-sm font-normal tracking-wide transition-all duration-200 hover:translate-x-2 cursor-pointer"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B08D46] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <span className="transition-transform duration-200">{item}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Everyday & Occasion */}
                <div className="lg:col-span-4 pl-4">
                  <h4 className="text-[11px] font-bold tracking-[0.28em] text-[#B08D46] uppercase mb-6">
                    EVERYDAY & OCCASION
                  </h4>
                  <ul className="space-y-3.5">
                    {['Suits', 'Kurtis', 'Festive Wear'].map((item) => (
                      <li key={item}>
                        <button 
                          onClick={() => handleCategoryClick(item)}
                          className="group flex items-center space-x-2 text-stone-800 hover:text-[#641824] text-sm font-normal tracking-wide transition-all duration-200 hover:translate-x-2 cursor-pointer"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B08D46] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <span className="transition-transform duration-200">{item}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: The Bridal Edit Visual Banner */}
                <div className="lg:col-span-4 flex justify-end">
                  <div 
                    onClick={() => handleCategoryClick('Bridal Lehenga')}
                    className="relative w-full max-w-[380px] h-[195px] overflow-hidden group cursor-pointer shadow-md border border-[#E5DAC6]"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80" 
                      alt="The Bridal Edit" 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5">
                      <h3 className="font-serif-luxury text-2xl text-white font-normal tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                        The Bridal Edit
                      </h3>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* MEN MEGA MENU */
              <>
                {/* Column 1: Royal Silhouettes */}
                <div className="lg:col-span-4 pl-4">
                  <h4 className="text-[11px] font-bold tracking-[0.28em] text-[#B08D46] uppercase mb-6">
                    HERITAGE & ROYAL SILHOUETTES
                  </h4>
                  <ul className="space-y-3.5">
                    {["Groom's Sherwanis", 'Bespoke Bandhgalas', 'Indo-Western Sets'].map((item) => (
                      <li key={item}>
                        <button 
                          onClick={() => handleCategoryClick(item)}
                          className="group flex items-center space-x-2 text-stone-800 hover:text-[#641824] text-sm font-normal tracking-wide transition-all duration-200 hover:translate-x-2 cursor-pointer"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B08D46] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <span className="transition-transform duration-200">{item}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Modern Celebration */}
                <div className="lg:col-span-4 pl-4">
                  <h4 className="text-[11px] font-bold tracking-[0.28em] text-[#B08D46] uppercase mb-6">
                    MODERN CELEBRATION
                  </h4>
                  <ul className="space-y-3.5">
                    {['Kurta Pajama Sets', 'Nehru & Modi Jackets', 'Turban, Stole & Accessories'].map((item) => (
                      <li key={item}>
                        <button 
                          onClick={() => handleCategoryClick(item)}
                          className="group flex items-center space-x-2 text-stone-800 hover:text-[#641824] text-sm font-normal tracking-wide transition-all duration-200 hover:translate-x-2 cursor-pointer"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B08D46] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <span className="transition-transform duration-200">{item}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: The Groom's Atelier Visual Banner */}
                <div className="lg:col-span-4 flex justify-end">
                  <div 
                    onClick={() => handleCategoryClick("Groom's Sherwanis")}
                    className="relative w-full max-w-[380px] h-[195px] overflow-hidden group cursor-pointer shadow-md border border-[#E5DAC6]"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" 
                      alt="The Groom's Atelier" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5">
                      <h3 className="font-serif-luxury text-2xl text-white font-normal tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                        The Groom's Atelier
                      </h3>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </nav>
  );
}