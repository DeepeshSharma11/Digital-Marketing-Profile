'use client';

import React, { useState } from 'react';
import { Sparkles, ExternalLink, TrendingUp, Eye, Heart } from 'lucide-react';
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
    <section id="portfolio" className="py-20 md:py-28 relative bg-[#060410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Case Studies & Work
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/25'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
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
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden group cursor-pointer border border-white/10 flex flex-col"
            >
              {/* Media Preview */}
              <div className="relative h-60 w-full overflow-hidden bg-black">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-amber-400 border border-amber-400/30">
                  {item.category}
                </div>
              </div>

              {/* Info & Metrics */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  {Object.entries(item.metrics || {}).map(([key, val]) => (
                    <div key={key} className="text-center">
                      <span className="block font-bold text-white">{val}</span>
                      <span className="text-[10px] text-gray-400 uppercase">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed case study */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl bg-[#0f0c20] border border-purple-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="relative h-72 w-full rounded-xl overflow-hidden">
                <img src={selectedItem.imageUrl} alt={selectedItem.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{selectedItem.category}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedItem.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{selectedItem.description}</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => { setSelectedItem(null); onOpenLetTalk(); }}
                  className="flex-1 glow-yellow-btn py-3 rounded-lg text-sm font-bold text-center"
                >
                  Get Similar Results for My Brand
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg"
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
