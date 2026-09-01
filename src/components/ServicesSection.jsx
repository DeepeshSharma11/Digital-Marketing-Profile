'use client';

import React from 'react';
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  Video, 
  Clapperboard, 
  Check 
} from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';

const iconMap = {
  Instagram: { icon: Instagram, color: 'from-pink-500 to-rose-500', shadow: 'rgba(236,72,153,0.3)' },
  Youtube: { icon: Youtube, color: 'from-red-600 to-red-500', shadow: 'rgba(239,68,68,0.3)' },
  Facebook: { icon: Facebook, color: 'from-blue-600 to-blue-500', shadow: 'rgba(59,130,246,0.3)' },
  Video: { icon: Video, color: 'from-fuchsia-600 to-purple-600', shadow: 'rgba(192,38,211,0.3)' },
  Clapperboard: { icon: Clapperboard, color: 'from-violet-600 to-indigo-600', shadow: 'rgba(139,92,246,0.3)' }
};

export default function ServicesSection({ onOpenLetTalk }) {
  const services = INITIAL_SITE_DATA.services;

  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#090717]">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(124,58,237,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Services
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-medium">
            Complete Social Media Solutions to Grow Your Brand
          </p>
        </div>

        {/* 5-Column Responsive Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, idx) => {
            const iconConfig = iconMap[service.iconName] || iconMap.Instagram;
            const IconComp = iconConfig.icon;

            return (
              <div
                key={service.id || idx}
                className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group border border-white/10"
              >
                {/* Header of card with icon */}
                <div>
                  <div className="flex justify-center mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconConfig.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition duration-300`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white text-center mb-5 group-hover:text-amber-400 transition min-h-[44px] flex items-center justify-center">
                    {service.title}
                  </h3>

                  {/* Bullet Checklist */}
                  <ul className="space-y-2.5 text-xs text-gray-300">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Trigger */}
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <button
                    onClick={onOpenLetTalk}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition inline-flex items-center gap-1 group-hover:underline"
                  >
                    Get Strategy →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
