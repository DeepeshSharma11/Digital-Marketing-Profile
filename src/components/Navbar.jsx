'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenLetTalk }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/75 backdrop-blur-xl border-b border-slate-200/60 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-wide text-slate-900 italic font-serif group-hover:text-amber-600 transition">
              Aniket Pal
            </span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-amber-600 -mt-1">
              Social Media Manager
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-amber-600 font-bold text-sm transition border-b-2 border-amber-500 pb-0.5">
              Home
            </Link>
            <Link href="#about" className="text-slate-600 font-medium text-sm transition hover:text-amber-600">
              About
            </Link>
            <Link href="#services" className="text-slate-600 font-medium text-sm transition hover:text-amber-600">
              Services
            </Link>
            <Link href="#portfolio" className="text-slate-600 font-medium text-sm transition hover:text-amber-600">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-slate-600 font-medium text-sm transition hover:text-amber-600">
              Testimonials
            </Link>
            <Link href="#contact" className="text-slate-600 font-medium text-sm transition hover:text-amber-600">
              Contact
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenLetTalk}
              className="glow-yellow-btn px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide shadow-md shadow-amber-500/20 active:scale-95 transition"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onOpenLetTalk}
              className="glow-yellow-btn px-3.5 py-1.5 rounded-lg text-xs font-bold"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 rounded-lg bg-slate-100 border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-amber-600 rounded-md hover:bg-slate-50"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            About
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            Portfolio
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-amber-600 rounded-md hover:bg-slate-50"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
