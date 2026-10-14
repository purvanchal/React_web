import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Collections from './components/collections';
import Centerdisplay from './components/centerDisplay'

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-950 font-sans selection:bg-amber-400 selection:text-emerald-950">
      <Navbar />
      <Hero />
      <Collections />
      <Centerdisplay />
    </div>
  );
}