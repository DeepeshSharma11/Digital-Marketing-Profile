'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Do I need to be in Bareilly or can we work remotely across India?",
    a: "We work both locally in Bareilly (in-person shoots, store visits, event coverage) and remotely for brands across India. For remote clients, you can ship products or send raw footage, and we handle all scripting, sound design, editing, and growth strategies."
  },
  {
    q: "How fast can I expect to see real growth in views and followers?",
    a: "Within the first 14 to 30 days of consistent posting with our hook-testing framework, most accounts see an immediate 3x–10x increase in non-follower reach and viral reel discovery."
  },
  {
    q: "Do you provide video editing if I already have raw recordings?",
    a: "Yes! You can simply upload raw mobile or camera videos to Google Drive/Cloudinary, and we turn them into high-converting reels with subtitles, zooms, sound effects, and color grading."
  },
  {
    q: "Will you also handle running paid Meta (Instagram & Facebook) Ads?",
    a: "Absolutely. We set up laser-targeted local geo-ads for restaurants, doctors, fitness gyms, and retail stores to drive walk-in customers and WhatsApp leads directly to your business."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            Everything you need to know about working together
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden transition duration-300 border border-white/90"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-600 transition"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed font-normal border-t border-slate-100 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
