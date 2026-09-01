'use client';

import React from 'react';
import { ArrowRight, Instagram, Youtube, Facebook, Heart, ThumbsUp, Users, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenLetTalk }) {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-hero-gradient">
      {/* Background Soft Atmospheric Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Grow Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 block sm:inline">
                Professional Social Media Management!
              </span>
            </h1>

            <p className="text-slate-600 text-lg sm:text-xl max-w-2xl font-medium leading-relaxed mx-auto lg:mx-0">
              Smart Strategies. Engaging Content. Real Results. I help businesses build their brand, reach the right audience, and grow online.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenLetTalk}
                className="glow-yellow-btn px-8 py-4 rounded-xl text-base font-bold flex items-center gap-3 transition shadow-lg shadow-amber-500/20"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#portfolio"
                className="glow-outline-btn px-8 py-4 rounded-xl text-base transition"
              >
                View My Work
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[2px] shadow-md hover:scale-110 transition"
                aria-label="Instagram"
              >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-pink-600 hover:scale-105 transition">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-red-50 border border-red-200 p-[2px] shadow-md hover:scale-110 transition flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 p-[2px] shadow-md hover:scale-110 transition flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Hero Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Mission Floating Circular Badge */}
            <div className="absolute -top-6 -left-6 sm:-left-10 z-30 floating-badge w-28 h-28 sm:w-32 sm:h-32 rounded-full p-2 flex flex-col items-center justify-center text-center">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-blue-100">Your Growth Is</span>
              <span className="text-sm sm:text-base font-black text-amber-300 leading-tight">OUR MISSION!</span>
              <Sparkles className="w-3.5 h-3.5 text-yellow-200 mt-0.5" />
            </div>

            {/* Floating Live Metric Cards in Soft White Glass */}
            <div className="absolute top-6 right-0 sm:-right-4 z-30 space-y-2.5">
              <div className="bg-white/90 backdrop-blur-md border border-pink-200 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-pink-500/10">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                <span className="text-slate-800 font-bold text-xs">10K</span>
              </div>

              <div className="bg-white/90 backdrop-blur-md border border-blue-200 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-blue-500/10">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <ThumbsUp className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-slate-800 font-bold text-xs">25K</span>
              </div>

              <div className="bg-white/90 backdrop-blur-md border border-purple-200 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-purple-500/10">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-slate-800 font-bold text-xs">50K</span>
              </div>
            </div>

            {/* Main Creative Setup Card (White Glass) */}
            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border border-white/80 bg-white/70 backdrop-blur-xl shadow-2xl p-4">
              
              {/* Creator Image */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden">
                <img
                  src="/aniket.jpeg"
                  alt="Aniket Pal - Social Media Creator"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Video Editing Monitor Simulation Overlay */}
              <div className="mt-3 p-3 rounded-xl bg-slate-900 text-white border border-slate-700 space-y-2 shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-gray-300">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Live Editing Studio
                  </span>
                  <span className="font-mono text-gray-400">4K • 60FPS</span>
                </div>
                {/* Timeline visual */}
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                  <div className="w-1/3 bg-amber-400" />
                  <div className="w-1/4 bg-pink-500" />
                  <div className="w-1/4 bg-blue-500" />
                  <div className="w-1/6 bg-emerald-400" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
