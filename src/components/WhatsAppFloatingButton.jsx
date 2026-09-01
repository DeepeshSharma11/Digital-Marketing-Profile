'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';

export default function WhatsAppFloatingButton() {
  const phone = INITIAL_SITE_DATA.about.phone;
  const whatsappUrl = `https://wa.me/91${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Aniket, I saw your digital marketing website and want to discuss social media management for my business.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all duration-300 group"
    >
      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
        <MessageCircle className="w-4 h-4 fill-white" />
      </div>
      <span className="hidden sm:inline text-xs font-black tracking-wide pr-1">
        WhatsApp Aniket
      </span>
    </a>
  );
}
