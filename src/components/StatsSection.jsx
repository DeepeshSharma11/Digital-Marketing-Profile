'use client';

import React from 'react';
import { Users, BarChart3, Rocket, Star } from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';

const statIcons = {
  Users: { icon: Users, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
  BarChart3: { icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  Rocket: { icon: Rocket, color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-200' },
  Star: { icon: Star, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200' },
};

export default function StatsSection() {
  const stats = INITIAL_SITE_DATA.stats;

  return (
    <section className="py-14 bg-white/40 backdrop-blur-md border-y border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const iconConfig = statIcons[item.icon] || statIcons.Users;
            const IconComp = iconConfig.icon;

            return (
              <div
                key={item.id || idx}
                className="flex items-center justify-center sm:justify-start gap-4 p-5 rounded-2xl bg-white/70 border border-white/90 shadow-sm hover:shadow-md transition group"
              >
                <div className={`w-14 h-14 rounded-2xl ${iconConfig.bg} ${iconConfig.border} border flex items-center justify-center ${iconConfig.color} group-hover:scale-110 transition duration-300 shrink-0`}>
                  <IconComp className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight group-hover:text-amber-600 transition">
                    {item.value}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-bold">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
