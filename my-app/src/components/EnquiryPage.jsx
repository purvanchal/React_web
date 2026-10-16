import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, ExternalLink } from 'lucide-react';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1E090C]">
      
      {/* 1. Maroon Header Banner */}
      <section className="bg-[#420D14] text-white py-20 px-6 md:px-12 lg:px-20 border-b border-[#5A141E]">
        <div className="max-w-[1300px] mx-auto text-left">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-[#C5A869] font-medium mb-3">
            CONTACT US
          </p>
          <h1 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] font-normal tracking-tight leading-tight">
            Let's Find Your Perfect Look
          </h1>
          <p className="text-xs md:text-sm text-stone-300 font-light leading-relaxed mt-4 max-w-2xl">
            Tell us about your occasion — a wedding, a festival, or a wardrobe refresh — and our stylists will reach out with curated recommendations.
          </p>
        </div>
      </section>

      {/* 2. Main Two-Column Content: Form (Left) & Visit Us (Right) */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Send an Enquiry Form */}
          <div className="lg:col-span-7 text-left">
            <h2 className="font-serif-luxury text-3xl md:text-4xl text-[#1E090C] font-normal tracking-tight">
              Send an Enquiry
            </h2>
            <p className="text-xs text-stone-500 font-light mt-2 mb-10">
              Fields marked by the form are required. We usually respond within a few hours during opening hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-white border border-[#C5A869]/50 shadow-sm">
                <p className="text-[#641824] font-serif-luxury text-2xl font-medium mb-2">Thank You for Reaching Out</p>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  Your enquiry has been received. Our senior bridal consultant will contact you via phone/WhatsApp at <strong>{formData.phone}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase font-bold text-stone-600 mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-stone-300 px-4 py-3 text-xs md:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#641824] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase font-bold text-stone-600 mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="72919 12200"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-stone-300 px-4 py-3 text-xs md:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#641824] transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase font-bold text-stone-600 mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-stone-300 px-4 py-3 text-xs md:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#641824] transition"
                  />
                </div>

                {/* Requirement / Message */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase font-bold text-stone-600 mb-2">
                    REQUIREMENT / MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about the occasion, styles you love, or the piece you're looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-stone-300 p-4 text-xs md:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#641824] transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-[#641824] hover:bg-[#4E121B] text-white text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-3.5 transition duration-300 shadow-sm"
                  >
                    SEND ENQUIRY
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Visit Us Sidebar Box */}
          <div className="lg:col-span-5 bg-[#F6F1E8] border border-[#EBE1D0] p-8 md:p-10 flex flex-col justify-between text-left">
            <div>
              <h3 className="font-serif-luxury text-2xl text-[#1E090C] font-normal mb-8">
                Visit Us
              </h3>

              {/* Location 1: Workshop */}
              <div className="bg-white border border-[#E5DAC6] p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#B08D46] flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-stone-700 font-light leading-relaxed">
                    <p className="text-[10px] tracking-widest text-[#B08D46] uppercase font-bold mb-1">
                      WORKSHOP / WAREHOUSE
                    </p>
                    <p>12/4 Sarai</p>
                    <p>Faridabad, Haryana 121003</p>
                    <p>India</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <a
                    href="https://www.google.com/maps/place/Purvanchal+Collection+Pvt.+Ltd+(+Sarai+Khwaja)/@28.4750259,77.3036621,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce7e8ef3ae515:0x95e665c2dd327136!8m2!3d28.4750212!4d77.306237!16s%2Fg%2F11w1qnrg6x?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#641824] hover:bg-[#4E121B] text-white text-[10px] font-semibold tracking-[0.2em] uppercase py-2.5 flex items-center justify-center space-x-1 transition"
                  >
                    <span>GET DIRECTIONS</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Location 2: Retail Showroom */}
              <div className="bg-white border border-[#E5DAC6] p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#B08D46] flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-stone-700 font-light leading-relaxed">
                    <p className="text-[10px] tracking-widest text-[#B08D46] uppercase font-bold mb-1">
                      RETAIL SHOWROOM
                    </p>
                    <p>Shop No–22/22, in the front of Street No–23</p>
                    <p>Vijay Nambardar Market, Molarband Extension</p>
                    <p>New Delhi, Badarpur – 110044, India</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <a
                    href="https://www.google.com/maps/place/Purvanchal+Collection+Pvt,+Ltd.+(saree+GODAM)/@28.4963814,77.3100692,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce6e1b471d9e3:0x8decb5a3a9fa8f99!8m2!3d28.4963767!4d77.3126441!16s%2Fg%2F11gffb8czw?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#641824] hover:bg-[#4E121B] text-white text-[10px] font-semibold tracking-[0.2em] uppercase py-2.5 flex items-center justify-center space-x-1 transition"
                  >
                    <span>GET DIRECTIONS</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Direct Contacts Info */}
              <div className="space-y-4 pt-2 border-t border-[#E5DAC6] text-xs text-stone-700 font-light">
                <div>
                  <p className="text-[10px] tracking-widest text-stone-400 uppercase font-semibold mb-1">
                    CUSTOMER SUPPORT
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Phone className="w-3.5 h-3.5 text-[#B08D46]" />
                    <a href="tel:7291912200" className="hover:text-[#641824] transition">7291912200</a>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Phone className="w-3.5 h-3.5 text-[#B08D46]" />
                    <a href="tel:8700001056" className="hover:text-[#641824] transition">8700001056</a>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[10px] tracking-widest text-stone-400 uppercase font-semibold mb-1">
                    EMAIL
                  </p>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-[#B08D46]" />
                    <a href="mailto:Purvanchalcollections97@gmail.com" className="hover:text-[#641824] transition break-all">
                      Purvanchalcollections97@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[10px] tracking-widest text-stone-400 uppercase font-semibold mb-1">
                    OPENING HOURS
                  </p>
                  <div className="flex items-center space-x-2 text-stone-600">
                    <Clock className="w-3.5 h-3.5 text-[#B08D46]" />
                    <span>7 Days a Week: 10:00 AM – 9:00 PM</span>
                  </div>
                </div>

                {/* Social Inline SVGs */}
                <div className="flex space-x-3 pt-4">
                  <a
                    href="https://instagram.com/purvanchal_wholesale"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 border border-stone-300 hover:border-[#641824] flex items-center justify-center text-stone-600 hover:text-[#641824] transition bg-white"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UChC43JoW97cZ0yo25wKiFTA"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 border border-stone-300 hover:border-[#641824] flex items-center justify-center text-stone-600 hover:text-[#641824] transition bg-white"
                    aria-label="YouTube"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>

            {/* Studio Bottom Photo Banner */}
            <div className="mt-8 overflow-hidden aspect-[16/7] relative">
              <img
                src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80"
                alt="Bridal Studio Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <span className="text-[10px] tracking-wider uppercase text-white font-medium drop-shadow">
                  Bridal Suite & Atelier Consultations Complimentary
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}