'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Maximize2, X, TrendingUp, Instagram } from 'lucide-react';
import { getStoredGallery, INITIAL_SITE_DATA } from '../lib/mockData';

export default function BeforeAfterGallery({ onOpenLetTalk }) {
  const [activeModalImage, setActiveModalImage] = useState(null);
  const [galleryList, setGalleryList] = useState(INITIAL_SITE_DATA.gallery);

  useEffect(() => {
    setGalleryList(getStoredGallery());
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalImage(null);
    };
    if (activeModalImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalImage]);

  return (
    <section id="transformation-gallery" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Client Growth Proof
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            Real before & after results managed by Aniket Pal
          </p>
        </div>

        {/* Visual-First Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {galleryList.map((client) => (
            <div
              key={client.id}
              className="glass-panel rounded-3xl overflow-hidden border border-white/90 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div 
                className="relative w-full overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setActiveModalImage(client)}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  loading="lazy"
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition duration-300"
                />
                
                {/* Click to expand overlay */}
                <button
                  aria-label="Expand image"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-sm opacity-80 group-hover:opacity-100 hover:scale-110 transition"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Client Header Bar */}
              <div className="p-4 sm:p-5 bg-white/90 border-t border-slate-200/80 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                    {client.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mt-0.5">
                    <Instagram className="w-3 h-3 text-pink-600" />
                    <span>{client.handle}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600 font-semibold">{client.category}</span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {client.growth}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenLetTalk}
            className="glow-yellow-btn px-8 py-3.5 rounded-xl text-sm font-bold shadow-md shadow-amber-500/20"
          >
            Grow Your Instagram Account Now →
          </button>
        </div>

        {/* 100% Scrollable & Scaled Lightbox Modal */}
        {activeModalImage && (
          <div 
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 flex min-h-screen items-center justify-center animate-fadeIn"
            onClick={() => setActiveModalImage(null)}
          >
            <div 
              className="relative my-auto w-full max-w-xl bg-white rounded-2xl shadow-2xl p-4 sm:p-5 flex flex-col space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 shrink-0">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-none">{activeModalImage.name}</h3>
                  <p className="text-[11px] text-slate-500 font-bold mt-1">{activeModalImage.handle} • {activeModalImage.category}</p>
                </div>
                <button
                  onClick={() => setActiveModalImage(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-700 transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable & Centered Image Container */}
              <div className="w-full max-h-[55vh] overflow-y-auto rounded-xl bg-slate-50 p-2 flex justify-center border border-slate-100">
                <img
                  src={activeModalImage.image}
                  alt={activeModalImage.name}
                  className="max-h-[52vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex justify-between items-center pt-2 border-t border-slate-200 shrink-0">
                <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {activeModalImage.growth}
                </span>
                <button
                  onClick={() => { setActiveModalImage(null); onOpenLetTalk(); }}
                  className="glow-yellow-btn px-5 py-2 rounded-lg text-xs font-bold shadow-sm"
                >
                  Get Similar Growth
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
