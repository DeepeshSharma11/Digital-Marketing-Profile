'use client';

import React from 'react';
import { Users, BarChart3, Rocket, Star } from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';

const statIcons = {
  Users: { icon: Users, color: 'text-purple-400', bg: 'bg-purple-600/20', border: 'border-purple-500/30' },
  BarChart3: { icon: BarChart3, color: 'text-blue-400', bg: 'bg-blue-600/20', border: 'border-blue-500/30' },
  Rocket: { icon: Rocket, color: 'text-pink-400', bg: 'bg-pink-600/20', border: 'border-pink-500/30' },
  Star: { icon: Star, color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-400/30' },
};

export default function StatsSection() {
  const stats = INITIAL_SITE_DATA.stats;

  return (
    <section className="py-14 bg-[#0a071a] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const iconConfig = statIcons[item.icon] || statIcons.Users;
            const IconComp = iconConfig.icon;

            return (
              <div
                key={item.id || idx}
                className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition group"
              >
                <div className={`w-14 h-14 rounded-2xl ${iconConfig.bg} ${iconConfig.border} border flex items-center justify-center ${iconConfig.color} group-hover:scale-110 transition duration-300 shrink-0`}>
                  <IconComp className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-400 transition">
                    {item.value}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium">
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
