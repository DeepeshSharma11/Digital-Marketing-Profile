'use client';

import React from 'react';
import { MessageSquare, FileSpreadsheet, Edit3, TrendingUp, ArrowRight } from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';

const processIcons = {
  MessageSquare: { icon: MessageSquare, bg: 'bg-blue-600', shadow: 'shadow-blue-500/40' },
  FileSpreadsheet: { icon: FileSpreadsheet, bg: 'bg-cyan-600', shadow: 'shadow-cyan-500/40' },
  Edit3: { icon: Edit3, bg: 'bg-pink-600', shadow: 'shadow-pink-500/40' },
  TrendingUp: { icon: TrendingUp, bg: 'bg-amber-500', shadow: 'shadow-amber-500/40' }
};

export default function ProcessSection() {
  const steps = INITIAL_SITE_DATA.process;

  return (
    <section className="py-20 md:py-28 relative bg-[#080614]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Process
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 font-medium">
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
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step Circle Badge */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-full ${iconConfig.bg} text-white flex items-center justify-center shadow-lg ${iconConfig.shadow} group-hover:scale-110 group-hover:rotate-6 transition duration-300 z-10 relative`}>
                    <IconComp className="w-8 h-8" />
                  </div>
                  
                  {/* Subtle outer pulse */}
                  <div className={`absolute inset-0 rounded-full ${iconConfig.bg} opacity-30 animate-ping`} />
                </div>

                {/* Connecting Arrow for Desktop (between steps) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-white/20 z-0 pointer-events-none" />
                )}

                {/* Step Details */}
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {step.name}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 max-w-[220px] leading-relaxed">
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
