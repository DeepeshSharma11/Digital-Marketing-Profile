'use client';

import React from 'react';
import { Flame, Sparkles, TrendingUp, Video, Award, Instagram, Youtube } from 'lucide-react';

export default function LiveMarquee() {
  const items = [
    { icon: Flame, text: "Viral Reels Strategy (1.2M+ Reach)", color: "text-amber-600" },
    { icon: TrendingUp, text: "100+ Brands Scaled in UP & NCR", color: "text-purple-600" },
    { icon: Video, text: "4K Cinema Shoots & High-Pace Edits", color: "text-blue-600" },
    { icon: Instagram, text: "Instagram Growth & Bio Optimization", color: "text-pink-600" },
    { icon: Youtube, text: "YouTube SEO & High-CTR Thumbnails", color: "text-red-600" },
    { icon: Award, text: "100% Organic Engagement Tactics", color: "text-emerald-600" },
  ];

  return (
    <div className="w-full py-4 bg-white/60 backdrop-blur-xl border-y border-slate-200/80 overflow-hidden relative shadow-sm">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex items-center space-x-10 shrink-0 px-4">
          {items.concat(items).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5 shrink-0">
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                  {item.text}
                </span>
                <span className="text-slate-300 font-bold ml-6">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
