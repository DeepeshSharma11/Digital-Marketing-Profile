'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';

export default function TestimonialsSection() {
  const testimonials = INITIAL_SITE_DATA.testimonials;

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            Hear directly from business owners and creators I work with
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-8 rounded-3xl relative space-y-6 flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 text-amber-500">
                {[...Array(item.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed font-medium">
                "{item.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-sm"
                />
                <div>
                  <h4 className="text-slate-900 font-extrabold text-sm">{item.name}</h4>
                  <p className="text-xs text-amber-700 font-bold">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
