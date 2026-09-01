'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Youtube, Facebook, Phone, Mail, MapPin, Code2 } from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';
import { getDeveloperAttribution, enforceBrandIntegrity } from '../lib/branding';

export default function Footer() {
  const about = INITIAL_SITE_DATA.about;
  const brand = getDeveloperAttribution();

  useEffect(() => {
    enforceBrandIntegrity();
  }, []);

  return (
    <footer className="bg-white/60 backdrop-blur-xl border-t border-slate-200/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">

          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-slate-900 italic font-serif">
                Aniket Pal
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mt-0.5">
                Social Media Manager & Content Creator
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`tel:${about.phone}`} className="hover:text-slate-900 transition font-medium">
                  {about.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-600 shrink-0" />
                <a href={`mailto:${about.email}`} className="hover:text-slate-900 transition break-all font-medium">
                  {about.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="font-medium">{about.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><Link href="#home" className="hover:text-amber-600 transition">Home</Link></li>
              <li><Link href="#about" className="hover:text-amber-600 transition">About Me</Link></li>
              <li><Link href="#services" className="hover:text-amber-600 transition">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-amber-600 transition">Portfolio</Link></li>
              <li><Link href="#contact" className="hover:text-amber-600 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Follow (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Follow Me</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-pink-50 border border-pink-200 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Daily growth tips, behind-the-scenes editing workflows, and case studies.
            </p>
          </div>

        </div>

        {/* Bottom Bar with Developer & CTO Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Aniket Pal. All Rights Reserved.</p>

          {/* Focitech Developer Signature Badge */}
          <div className="flex items-center">
            <a
              href={brand.url}
              target="_blank"
              rel="author external noopener noreferrer"
              title="Architected & Engineered by Deepesh Sharma (CTO & Co-Founder, Focitech.in)"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 hover:border-purple-300 hover:bg-purple-50 transition group text-slate-600 hover:text-slate-900 shadow-sm"
            >
              <Code2 className="w-3.5 h-3.5 text-purple-600 group-hover:rotate-12 transition duration-300" />
              <span>
                Built by{' '}
                <strong className="text-slate-900 group-hover:text-amber-600 transition font-bold">
                  Team Foci
                </strong>{' '}
                <span className="text-purple-600 text-[11px] font-semibold">(Focitech)</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
