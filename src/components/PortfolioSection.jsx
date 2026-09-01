'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';

export default function PortfolioSection({ onOpenLetTalk }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', 'Instagram', 'YouTube', 'Reels & Ads'];
  const portfolio = INITIAL_SITE_DATA.portfolio;

  const filteredItems = activeCategory === 'All'
    ? portfolio
    : portfolio.filter(item => item.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-black uppercase tracking-widest text-amber-600">Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Featured Case Studies & Work
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
                    : 'bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden group cursor-pointer flex flex-col"
            >
              {/* Media Preview */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-amber-700 border border-amber-200 shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Info & Metrics */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  {Object.entries(item.metrics || {}).map(([key, val]) => (
                    <div key={key} className="text-center">
                      <span className="block font-black text-slate-900">{val}</span>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed case study */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="relative h-72 w-full rounded-2xl overflow-hidden">
                <img src={selectedItem.imageUrl} alt={selectedItem.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-black text-amber-600 uppercase tracking-wider">{selectedItem.category}</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">{selectedItem.title}</h3>
                <p className="text-sm text-slate-600 mt-2 font-medium">{selectedItem.description}</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => { setSelectedItem(null); onOpenLetTalk(); }}
                  className="flex-1 glow-yellow-btn py-3.5 rounded-xl text-sm font-bold text-center"
                >
                  Get Similar Results for My Brand
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
