import React from 'react';
import { ArrowRight, Mail, Phone, Clock } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer({ setActivePage, setSelectedCategory }) {
  const navigateTo = (page) => {
    if (setActivePage) {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategoryNav = (cat) => {
    if (setSelectedCategory) setSelectedCategory(cat);
    if (setActivePage) setActivePage('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2A070D] text-white overflow-hidden relative border-t border-[#3F0E17]">
      
      {/* 1. Upper CTA Section */}
      <div className="py-24 px-6 text-center max-w-4xl mx-auto border-b border-white/10">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#C5A869] font-medium mb-3">
          BEGIN YOUR JOURNEY
        </p>
        <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] font-normal tracking-tight leading-tight">
          Let's Find Your Perfect Look
        </h2>
        <p className="mt-4 text-xs md:text-sm text-stone-300/80 font-light max-w-lg mx-auto leading-relaxed">
          Share your occasion and style preferences — our stylists will curate pieces just for you.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigateTo('enquiry')}
            className="inline-flex items-center space-x-3 bg-[#B89758] hover:bg-[#a68648] text-[#290B10] px-8 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase transition duration-300 shadow-md group cursor-pointer"
          >
            <span>SEND AN ENQUIRY</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* 2. Main 4-Column Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
        
        {/* Col 1: Brand & Bio */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-3 mb-5">
            <div className="w-11 h-11 rounded-full border border-[#B38738] p-0.5 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#3B1117] flex items-center justify-center overflow-hidden">
                <img 
                  src={logo} 
                  alt="Purvanchal Logo" 
                  className="w-[200%] h-[200%] max-w-[200%] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden text-[#D4AF37] font-serif font-bold text-xs">PC</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl font-bold tracking-wide text-white">
                Purvanchal
              </span>
              <span className="text-[8px] tracking-[0.25em] text-[#C5A869] uppercase font-medium">
                Collection · Pvt. Ltd.
              </span>
            </div>
          </div>

          <p className="text-xs text-stone-300/70 font-light leading-relaxed mb-6">
            Premium Indian ethnic wear crafted for celebrations, weddings and unforgettable moments — where tradition meets timeless elegance.
          </p>

          {/* Social Badges */}
          <div className="flex space-x-3">
            <a
              href="https://instagram.com/purvanchal_wholesale"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 border border-white/20 hover:border-[#C5A869] flex items-center justify-center text-stone-300 hover:text-[#C5A869] transition"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 border border-white/20 hover:border-[#C5A869] flex items-center justify-center text-stone-300 hover:text-[#C5A869] transition"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#C5A869] font-semibold mb-6">
            QUICK LINKS
          </h4>
          <ul className="space-y-3 text-xs text-stone-300 font-light">
            <li>
              <button 
                onClick={() => navigateTo('home')}
                className="hover:text-white transition flex items-center space-x-2 cursor-pointer"
              >
                <span>—</span> <span>Home</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('about')}
                className="hover:text-white transition flex items-center space-x-2 cursor-pointer"
              >
                <span>—</span> <span>About Us</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryNav('Lehenga')}
                className="hover:text-white transition flex items-center space-x-2 cursor-pointer"
              >
                <span>—</span> <span>Women</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('collections')}
                className="hover:text-white transition flex items-center space-x-2 cursor-pointer"
              >
                <span>—</span> <span>Collections</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('enquiry')} 
                className="hover:text-white transition flex items-center space-x-2 cursor-pointer"
              >
                <span>—</span> <span>Contact Us</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Store & Workshop Locations */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#C5A869] font-semibold mb-6">
            OUR LOCATIONS
          </h4>
          
          <div className="mb-5 text-xs text-stone-300/80 leading-relaxed font-light">
            <p className="text-[10px] tracking-widest text-stone-400 uppercase font-semibold mb-1">
              WORKSHOP / WAREHOUSE
            </p>
            <p>12/4 Sarai</p>
            <p>Faridabad, Haryana 121003</p>
            <p>India</p>
          </div>

          <div className="text-xs text-stone-300/80 leading-relaxed font-light">
            <p className="text-[10px] tracking-widest text-stone-400 uppercase font-semibold mb-1">
              RETAIL SHOWROOM
            </p>
            <p>Shop No–22/22, in the front of Street No–23</p>
            <p>Vijay Nambardar Market, Molarband Extension</p>
            <p>New Delhi, Badarpur – 110044, India</p>
          </div>

          <div className="mt-4 flex items-center space-x-2 text-[11px] text-[#C5A869]">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
            <span>7 Days a Week: 10:00 AM – 9:00 PM</span>
          </div>
        </div>

        {/* Col 4: Contact Information */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#C5A869] font-semibold mb-6">
            CONTACT
          </h4>

          <div className="space-y-4 text-xs text-stone-300/80 font-light">
            <div className="flex items-start space-x-3">
              <Mail className="w-4 h-4 text-[#C5A869] flex-shrink-0 mt-0.5" />
              <a 
                href="mailto:Purvanchalcollections97@gmail.com"
                className="hover:text-white transition break-all"
              >
                Purvanchalcollections97@gmail.com
              </a>
            </div>

            <div className="pt-2">
              <p className="text-[10px] tracking-widest text-stone-400 uppercase font-semibold mb-1">
                CUSTOMER SUPPORT
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <Phone className="w-3.5 h-3.5 text-[#C5A869]" />
                <a href="tel:7291912200" className="hover:text-white transition">
                  7291912200
                </a>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <Phone className="w-3.5 h-3.5 text-[#C5A869]" />
                <a href="tel:8700001056" className="hover:text-white transition">
                  8700001056
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-6 text-center text-[11px] tracking-widest text-stone-400 uppercase">
        © 2026 Purvanchal Collection Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}