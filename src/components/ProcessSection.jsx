'use client';

import React from 'react';
import { MessageSquare, FileSpreadsheet, Edit3, TrendingUp } from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';

const processIcons = {
  MessageSquare: { icon: MessageSquare, bg: 'bg-blue-600', shadow: 'shadow-blue-500/25' },
  FileSpreadsheet: { icon: FileSpreadsheet, bg: 'bg-cyan-600', shadow: 'shadow-cyan-500/25' },
  Edit3: { icon: Edit3, bg: 'bg-pink-600', shadow: 'shadow-pink-500/25' },
  TrendingUp: { icon: TrendingUp, bg: 'bg-amber-500', shadow: 'shadow-amber-500/25' }
};

export default function ProcessSection() {
  const steps = INITIAL_SITE_DATA.process;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            My Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            Streamlined workflow from concept to viral growth
          </p>
        </div>

        {/* 4-Step Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const iconConfig = processIcons[step.icon] || processIcons.MessageSquare;
            const IconComp = iconConfig.icon;

            return (
              <div
                key={step.step || idx}
                className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col items-center text-center relative group"
              >
                {/* Step Circle Badge */}
                <div className="relative mb-5">
                  <div className={`w-16 h-16 rounded-full ${iconConfig.bg} text-white flex items-center justify-center shadow-lg ${iconConfig.shadow} group-hover:scale-110 group-hover:rotate-6 transition duration-300 z-10 relative`}>
                    <IconComp className="w-8 h-8" />
                  </div>
                  
                  {/* Subtle outer pulse */}
                  <div className={`absolute inset-0 rounded-full ${iconConfig.bg} opacity-20 animate-ping`} />
                </div>

                {/* Step Details */}
                <span className="text-xs font-black text-amber-600 uppercase tracking-wider mb-1">
                  {step.name}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-amber-600 transition">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-[220px] leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
