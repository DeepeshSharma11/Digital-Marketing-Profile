'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenLetTalk }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col group leading-none">
            <span className="text-lg sm:text-xl font-black tracking-wide text-slate-900 italic font-serif group-hover:text-amber-600 transition">
              Aniket Pal
            </span>
            <span className="text-[9px] font-bold tracking-widest uppercase text-amber-600 mt-0.5">
              Social Media Manager
            </span>
          </Link>

          {/* Desktop Nav Links (Compact & Sleek) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-amber-600 font-bold text-xs transition border-b-2 border-amber-500 pb-0.5">
              Home
            </Link>
            <Link href="#about" className="text-slate-600 font-semibold text-xs transition hover:text-amber-600">
              About
            </Link>
            <Link href="#services" className="text-slate-600 font-semibold text-xs transition hover:text-amber-600">
              Services
            </Link>
            <Link href="#transformation-gallery" className="text-slate-600 font-semibold text-xs transition hover:text-amber-600">
              Transformations
            </Link>
            <Link href="#portfolio" className="text-slate-600 font-semibold text-xs transition hover:text-amber-600">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-slate-600 font-semibold text-xs transition hover:text-amber-600">
              Testimonials
            </Link>
            <Link href="#contact" className="text-slate-600 font-semibold text-xs transition hover:text-amber-600">
              Contact
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenLetTalk}
              className="glow-yellow-btn px-4 py-1.5 rounded-lg text-xs font-extrabold tracking-wide shadow-sm shadow-amber-500/20 active:scale-95 transition"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onOpenLetTalk}
              className="glow-yellow-btn px-3 py-1 rounded-md text-[11px] font-bold"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-1.5 rounded-lg bg-slate-100 border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-2 pb-5 space-y-2 shadow-xl">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-1.5 text-sm font-bold text-amber-600 rounded-md hover:bg-slate-50"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            About
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            Services
          </Link>
          <Link
            href="#transformation-gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            Transformations
          </Link>
          <Link
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            Portfolio
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
