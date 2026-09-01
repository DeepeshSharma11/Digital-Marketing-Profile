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
  Instagram: { icon: Instagram, color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' },
  Youtube: { icon: Youtube, color: 'from-red-600 to-red-500', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
  Facebook: { icon: Facebook, color: 'from-blue-600 to-blue-500', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  Video: { icon: Video, color: 'from-fuchsia-600 to-purple-600', bg: 'bg-fuchsia-50', text: 'text-fuchsia-600', border: 'border-fuchsia-200' },
  Clapperboard: { icon: Clapperboard, color: 'from-violet-600 to-indigo-600', bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200' }
};

export default function ServicesSection({ onOpenLetTalk }) {
  const services = INITIAL_SITE_DATA.services;

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            My Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Complete Social Media Solutions to Grow Your Brand
          </p>
        </div>

        {/* 5-Column Responsive Services Grid in Soft White Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, idx) => {
            const iconConfig = iconMap[service.iconName] || iconMap.Instagram;
            const IconComp = iconConfig.icon;

            return (
              <div
                key={service.id || idx}
                className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Header of card with icon */}
                <div>
                  <div className="flex justify-center mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconConfig.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition duration-300`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 text-center mb-5 group-hover:text-amber-600 transition min-h-[44px] flex items-center justify-center">
                    {service.title}
                  </h3>

                  {/* Bullet Checklist */}
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Trigger */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 text-center">
                  <button
                    onClick={onOpenLetTalk}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 transition inline-flex items-center gap-1 group-hover:underline"
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
