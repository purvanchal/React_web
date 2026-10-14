import React, { useState } from 'react';
import { MapPin, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 via-black/30 to-transparent text-white">
      {/* 1. Left: Brand Logo */}
      <div className="z-10 flex items-center">
        <a href="#home" className="inline-block">
          <img
            src="/logo.png"
            alt="Purvanchal Collection Logo"
            className="h-10 md:h-12 w-auto object-contain cursor-pointer drop-shadow-md"
          />
        </a>
      </div>

      {/* 2. Absolute Dead Center: Navigation Links (Desktop) */}
      <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest absolute left-1/2 transform -translate-x-1/2">
        <a href="#home" className="hover:text-amber-400 transition-colors">
          HOME
        </a>
        <a href="#about" className="hover:text-amber-400 transition-colors">
          ABOUT US
        </a>

        {/* Women Dropdown */}
        <div className="relative group cursor-pointer flex items-center gap-1 hover:text-amber-400 transition-colors py-2">
          <span>WOMEN</span>
          <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
          <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-neutral-900/95 border border-amber-400/20 py-2 px-4 rounded shadow-xl min-w-[140px] text-left">
            <a href="#sarees" className="py-1 text-[11px] text-neutral-200 hover:text-amber-400">Sarees</a>
            <a href="#suits" className="py-1 text-[11px] text-neutral-200 hover:text-amber-400">Suits</a>
            <a href="#lehengas" className="py-1 text-[11px] text-neutral-200 hover:text-amber-400">Lehengas</a>
          </div>
        </div>

        {/* Men Dropdown */}
        <div className="relative group cursor-pointer flex items-center gap-1 hover:text-amber-400 transition-colors py-2">
          <span>MEN</span>
          <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
          <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-neutral-900/95 border border-amber-400/20 py-2 px-4 rounded shadow-xl min-w-[140px] text-left">
            <a href="#mens-ethnic" className="py-1 text-[11px] text-neutral-200 hover:text-amber-400">Kurta &amp; Sherwani</a>
            <a href="#mens-casual" className="py-1 text-[11px] text-neutral-200 hover:text-amber-400">Shirts &amp; Jeans</a>
          </div>
        </div>

        <a href="#contact" className="hover:text-amber-400 transition-colors">
          CONTACT US
        </a>
      </nav>

      {/* 3. Right: Actions & Socials */}
      <div className="z-10 flex items-center space-x-3 md:space-x-4">
        <div className="hidden lg:flex items-center space-x-3">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-white text-emerald-950 flex items-center justify-center hover:bg-amber-400 hover:text-neutral-950 transition-colors shadow-sm"
            title="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-white text-emerald-950 flex items-center justify-center hover:bg-amber-400 hover:text-neutral-950 transition-colors shadow-sm"
            title="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Reach Us Button */}
        <button className="bg-white text-emerald-950 px-4 py-2 rounded-full text-xs font-bold tracking-wider flex items-center gap-1.5 hover:bg-amber-400 hover:text-neutral-950 transition-all shadow-md active:scale-95">
          <MapPin size={14} />
          <span>REACH US</span>
        </button>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-neutral-200 hover:text-amber-400 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950/95 border-b border-neutral-800 p-6 flex flex-col space-y-4 text-sm font-medium tracking-wide">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">HOME</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">ABOUT US</a>
          <a href="#women" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">WOMEN</a>
          <a href="#men" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">MEN</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">CONTACT US</a>
        </div>
      )}
    </header>
  );
}