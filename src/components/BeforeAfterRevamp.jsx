'use client';

import React, { useState } from 'react';
import { Sparkles, XCircle, CheckCircle2, TrendingDown, TrendingUp, Flame } from 'lucide-react';

export default function BeforeAfterRevamp({ onOpenLetTalk }) {
  const [activeView, setActiveView] = useState('after');

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-2">
            The Difference Strategy Makes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Before vs. After Aniket's Management
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            See how smart content pacing, hooks, and clean aesthetics completely transform brand credibility.
          </p>

          {/* Toggle Pills */}
          <div className="inline-flex p-1.5 rounded-full bg-slate-200/80 border border-slate-300 mt-8">
            <button
              onClick={() => setActiveView('before')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition ${
                activeView === 'before'
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ❌ Typical Unoptimized Page
            </button>
            <button
              onClick={() => setActiveView('after')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition ${
                activeView === 'after'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ✅ After Aniket's Growth Blueprint
            </button>
          </div>
        </div>

        {/* Dynamic Display Card */}
        <div className="max-w-4xl mx-auto">
          {activeView === 'before' ? (
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border-2 border-rose-200 bg-rose-50/30 space-y-6 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-200/80 pb-4">
                <div>
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Current State</span>
                  <h3 className="text-xl font-black text-slate-900">Inconsistent Posting & Zero Retention</h3>
                </div>
                <div className="flex items-center gap-2 text-rose-600 font-black text-sm bg-rose-100 px-3.5 py-1.5 rounded-full">
                  <TrendingDown className="w-4 h-4" />
                  <span>Stagnant Growth & Low Reach</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-white border border-rose-200 space-y-1">
                  <span className="text-slate-400 font-semibold">Average Reel Views</span>
                  <p className="text-xl font-bold text-slate-700">200 - 500 views</p>
                  <p className="text-[11px] text-rose-600 font-medium">Audience drops off within 2 seconds</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-rose-200 space-y-1">
                  <span className="text-slate-400 font-semibold">Visual Identity</span>
                  <p className="text-xl font-bold text-slate-700">Random Canva Templates</p>
                  <p className="text-[11px] text-rose-600 font-medium">No clear color palette or branding</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-rose-200 space-y-1">
                  <span className="text-slate-400 font-semibold">Customer Conversions</span>
                  <p className="text-xl font-bold text-slate-700">0 - 1 Leads / Month</p>
                  <p className="text-[11px] text-rose-600 font-medium">Profile lacks call-to-action & WhatsApp link</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border-2 border-emerald-300 bg-emerald-50/20 space-y-6 animate-fadeIn shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-200/80 pb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">After Transformation</span>
                  <h3 className="text-xl font-black text-slate-900">4K Cinematic Content & High-Conversion Funnel</h3>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-black text-sm bg-emerald-100 px-3.5 py-1.5 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>10x Organic Reach Surge</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-white border border-emerald-200 space-y-1 shadow-sm">
                  <span className="text-slate-500 font-semibold">Average Reel Views</span>
                  <p className="text-xl font-black text-emerald-700">25,000 - 150,000+ views</p>
                  <p className="text-[11px] text-emerald-600 font-semibold">Viral hooks with 85%+ retention rate</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-emerald-200 space-y-1 shadow-sm">
                  <span className="text-slate-500 font-semibold">Visual Identity</span>
                  <p className="text-xl font-black text-emerald-700">Studio Grade Aesthetic</p>
                  <p className="text-[11px] text-emerald-600 font-semibold">Sony 4K footage & custom branded fonts</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-emerald-200 space-y-1 shadow-sm">
                  <span className="text-slate-500 font-semibold">Customer Conversions</span>
                  <p className="text-xl font-black text-emerald-700">25 - 60+ Direct Inquiries</p>
                  <p className="text-[11px] text-emerald-600 font-semibold">Active DM funnels & Bio lead capture</p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
