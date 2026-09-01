'use client';

import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';

export default function AboutSection({ onOpenLetTalk }) {
  const about = INITIAL_SITE_DATA.about;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Creator Portrait Card with Glowing Yellow/Gold Frame (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative p-2 rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-500 to-purple-500 shadow-glow-yellow group max-w-[320px] w-full">
              <div className="relative h-96 w-full rounded-[20px] overflow-hidden bg-slate-100 shadow-inner">
                <img
                  src="/aniket.jpeg"
                  alt="Aniket Pal"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-black text-lg">Aniket Pal</p>
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">Social Media Strategist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Content (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div>
              <span className="text-amber-600 font-extrabold text-sm uppercase tracking-wider block mb-1">
                {about.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                {about.heading}
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {about.bio1}
            </p>

            <p className="text-amber-700 font-bold text-base">
              {about.bio2}
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                onClick={onOpenLetTalk}
                className="glow-yellow-btn px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md shadow-amber-500/20"
              >
                <span>Know More About Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Contact & Details Box (3 cols) */}
          <div className="lg:col-span-3">
            <div className="glass-panel p-6 rounded-3xl space-y-6">
              
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Location</p>
                  <p className="text-sm font-bold text-slate-900">{about.location}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Direct Call / WhatsApp</p>
                  <a
                    href={`tel:${about.phone}`}
                    className="text-sm font-bold text-slate-900 hover:text-amber-600 transition"
                  >
                    +91 {about.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Email Address</p>
                  <a
                    href={`mailto:${about.email}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-600 transition break-all"
                  >
                    {about.email}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
