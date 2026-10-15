import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Floating CTA */}
      <a
        href="https://wa.me/917291912200"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-lg transition duration-200 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
      </a>

      {/* Quick Call CTA */}
      <a
        href="tel:7291912200"
        aria-label="Direct Call"
        className="w-12 h-12 bg-[#641824] hover:bg-[#4E121B] text-white rounded-full flex items-center justify-center shadow-lg transition duration-200 hover:scale-105"
      >
        <Phone className="w-5 h-5 fill-white stroke-none" />
      </a>
    </div>
  );
}