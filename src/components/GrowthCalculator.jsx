'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, Eye, Users, Video, CheckCircle } from 'lucide-react';

const niches = [
  { id: 'cafe', name: 'Cafe & Restaurant', multiplier: 1.4, icon: '☕' },
  { id: 'fitness', name: 'Gym & Fitness Trainer', multiplier: 1.6, icon: '🏋️' },
  { id: 'fashion', name: 'Fashion & Clothing Retail', multiplier: 1.5, icon: '👗' },
  { id: 'doctor', name: 'Doctors & Healthcare', multiplier: 1.2, icon: '🩺' },
  { id: 'creator', name: 'Personal Brand & Creator', multiplier: 1.8, icon: '🎙️' },
];

export default function GrowthCalculator({ onOpenLetTalk }) {
  const [selectedNiche, setSelectedNiche] = useState(niches[0]);
  const [reelsCount, setReelsCount] = useState(15);
  const [budgetTier, setBudgetTier] = useState('Standard Growth');

  const estimatedViews = Math.round(reelsCount * 28000 * selectedNiche.multiplier);
  const estimatedFollowers = Math.round(reelsCount * 420 * selectedNiche.multiplier);
  const estimatedReach = Math.round(estimatedViews * 1.6);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Growth Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Calculate Your Brand's Viral Potential
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            See realistic monthly views, reach, and organic follower growth based on our proven campaigns in UP & NCR.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden border border-white/90">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Niche Selector */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                  1. Select Your Business Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {niches.map((n) => (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => setSelectedNiche(n)}
                      className={`p-3 rounded-2xl text-xs font-bold text-left transition flex items-center gap-2 border ${
                        selectedNiche.id === n.id
                          ? 'bg-amber-500 text-white border-amber-600 shadow-md shadow-amber-500/25'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300'
                      }`}
                    >
                      <span className="text-base">{n.icon}</span>
                      <span className="truncate">{n.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reels Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    2. Monthly Content / Reels Volume
                  </label>
                  <span className="text-sm font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {reelsCount} Reels / Month
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="30"
                  step="2"
                  value={reelsCount}
                  onChange={(e) => setReelsCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                  <span>8 Reels (Starter)</span>
                  <span>15 Reels (Recommended)</span>
                  <span>30 Reels (Aggressive)</span>
                </div>
              </div>

              {/* What's included checklist */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-700 mb-2">Included in this plan:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Scripting & Trending Hooks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>4K Cinema Video Edits</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Viral Audio Research</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Weekly Analytics Tracking</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Live Projected Metrics Output (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#1e1438] text-white p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col justify-between space-y-6">
              
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400">
                  Projected 30-Day Results
                </span>
                <h4 className="text-xl font-extrabold text-white">Estimated Brand Reach</h4>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Eye className="w-5 h-5 text-amber-400" />
                    <span className="text-xs text-gray-300">Estimated Views</span>
                  </div>
                  <span className="text-lg font-black text-amber-400">
                    {(estimatedViews / 1000).toFixed(0)}K+
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-pink-400" />
                    <span className="text-xs text-gray-300">Organic Follower Gain</span>
                  </div>
                  <span className="text-lg font-black text-pink-400">
                    +{estimatedFollowers.toLocaleString()}
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className="text-xs text-gray-300">Estimated Accounts Reached</span>
                  </div>
                  <span className="text-lg font-black text-blue-400">
                    {(estimatedReach / 1000).toFixed(0)}K+
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenLetTalk}
                className="w-full glow-yellow-btn py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/30"
              >
                <span>Get This Growth Plan</span>
                <Sparkles className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
