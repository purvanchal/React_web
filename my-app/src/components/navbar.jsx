import React from 'react';
import { MapPin } from 'lucide-react';

export default function navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent text-white">
      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wider">
        <a href="#home" className="hover:text-amber-400 transition">HOME</a>
        <a href="#about" className="hover:text-amber-400 transition">ABOUT US</a>
        <div className="relative group cursor-pointer flex items-center gap-1">
          <span>WOMEN</span>
          <span className="text-[10px]">▼</span>
        </div>
        <div className="relative group cursor-pointer flex items-center gap-1">
          <span>MEN</span>
          <span className="text-[10px]">▼</span>
        </div>
        <a href="#contact" className="hover:text-amber-400 transition">CONTACT US</a>
      </nav>

      {/* Brand Logo */}
      <div className="flex flex-col items-center">
        <div className="text-amber-400 font-bold text-2xl tracking-widest flex items-center gap-1">
          <span>▲</span> अरूण
        </div>
        <span className="text-[9px] tracking-[0.2em] text-amber-200 uppercase opacity-80">
          ARUN SAARIYA PVT LTD • SINCE 1981 •
        </span>
      </div>

      {/* Right Actions & Socials */}
      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex items-center space-x-3">
          {/* Facebook SVG */}
          <a href="#" className="w-8 h-8 rounded-full bg-white text-emerald-950 flex items-center justify-center hover:bg-amber-400 transition" title="Facebook">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
          </a>
          {/* Instagram SVG */}
          <a href="#" className="w-8 h-8 rounded-full bg-white text-emerald-950 flex items-center justify-center hover:bg-amber-400 transition" title="Instagram">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          {/* YouTube SVG */}
          <a href="#" className="w-8 h-8 rounded-full bg-white text-emerald-950 flex items-center justify-center hover:bg-amber-400 transition" title="YouTube">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
        <button className="bg-white text-emerald-950 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-amber-400 transition shadow-lg">
          <MapPin size={14} />
          REACH US
        </button>
      </div>
    </header>
  );
}