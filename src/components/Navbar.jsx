'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldAlert } from 'lucide-react';

export default function Navbar({ onOpenLetTalk }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#080612]/85 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white italic font-serif group-hover:text-amber-400 transition">
              Aniket Pal
            </span>
            <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 -mt-1">
              Social Media Manager
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-amber-400 font-medium text-sm transition hover:text-amber-300 border-b-2 border-amber-400 pb-0.5">
              Home
            </Link>
            <Link href="#about" className="text-gray-300 font-medium text-sm transition hover:text-white hover:text-amber-400">
              About
            </Link>
            <Link href="#services" className="text-gray-300 font-medium text-sm transition hover:text-white hover:text-amber-400">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-300 font-medium text-sm transition hover:text-white hover:text-amber-400">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-gray-300 font-medium text-sm transition hover:text-white hover:text-amber-400">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-300 font-medium text-sm transition hover:text-white hover:text-amber-400">
              Contact
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/admin"
              className="text-xs text-gray-400 hover:text-amber-400 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-amber-400/50 transition"
              title="Admin CMS & Leads"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Admin</span>
            </Link>

            <button
              onClick={onOpenLetTalk}
              className="glow-yellow-btn px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide shadow-lg shadow-amber-500/20 active:scale-95 transition"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onOpenLetTalk}
              className="glow-yellow-btn px-3.5 py-1.5 rounded-md text-xs font-bold"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0a24] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-amber-400 rounded-md hover:bg-white/5"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-gray-300 hover:text-white rounded-md hover:bg-white/5"
          >
            About
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-gray-300 hover:text-white rounded-md hover:bg-white/5"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-gray-300 hover:text-white rounded-md hover:bg-white/5"
          >
            Portfolio
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-gray-300 hover:text-white rounded-md hover:bg-white/5"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-gray-300 hover:text-white rounded-md hover:bg-white/5"
          >
            Contact
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-purple-300 bg-purple-900/20 rounded-md"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Admin Portal</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
