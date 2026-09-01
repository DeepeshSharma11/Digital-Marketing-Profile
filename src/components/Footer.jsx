'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Youtube, Facebook, Phone, Mail, MapPin, ShieldAlert, Code2, Sparkles, Heart } from 'lucide-react';
import { INITIAL_SITE_DATA } from '../lib/mockData';
import { getDeveloperAttribution, enforceBrandIntegrity } from '../lib/branding';

export default function Footer() {
  const about = INITIAL_SITE_DATA.about;
  const brand = getDeveloperAttribution();

  useEffect(() => {
    enforceBrandIntegrity();
  }, []);

  return (
    <footer className="bg-[#05030c] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-purple-900/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white italic font-serif">
                Aniket Pal
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mt-0.5">
                Social Media Manager & Content Creator
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${about.phone}`} className="hover:text-white transition">
                  {about.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={`mailto:${about.email}`} className="hover:text-white transition break-all">
                  {about.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{about.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="#home" className="hover:text-amber-400 transition">Home</Link></li>
              <li><Link href="#about" className="hover:text-amber-400 transition">About Me</Link></li>
              <li><Link href="#services" className="hover:text-amber-400 transition">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-amber-400 transition">Portfolio</Link></li>
              <li><Link href="#contact" className="hover:text-amber-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Follow (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Follow Me</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-pink-600/20 border border-pink-500/40 text-pink-400 flex items-center justify-center hover:bg-pink-600 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 text-red-500 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Daily growth tips, behind-the-scenes editing workflows, and case studies.
            </p>
          </div>

        </div>

        {/* Bottom Bar with Irrevocable Developer & CTO Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Aniket Pal. All Rights Reserved.</p>

          {/* Focitech Developer Signature Badge */}
          <div className="flex items-center">
            <a
              href={brand.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-500/50 hover:bg-purple-950/30 transition group text-gray-400 hover:text-white"
            >
              <Code2 className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-12 transition duration-300" />
              <span>
                Architected & Engineered by{' '}
                <strong className="text-white group-hover:text-amber-400 transition font-semibold">
                  {brand.developer}
                </strong>{' '}
                <span className="text-purple-400 text-[11px]">({brand.role}, {brand.company})</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
