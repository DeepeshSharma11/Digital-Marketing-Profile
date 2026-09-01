'use client';

import React, { useState } from 'react';
import { ArrowRight, Send, CheckCircle2, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { submitInquiry } from '../lib/supabaseClient';
import { INITIAL_SITE_DATA } from '../lib/mockData';

export default function ContactSection({ onOpenLetTalk }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Instagram Management',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const about = INITIAL_SITE_DATA.about;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitInquiry(formData);
      setSent(true);
      setFormData({ name: '', phone: '', email: '', service: 'Instagram Management', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#080614]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Banner from Layout.jpeg: "Ready to Grow Your Business?" */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#170f38] via-[#1f154c] to-[#120e2e] border border-purple-500/30 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                Ready to{' '}
                <span className="text-amber-400">Grow Your Business?</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Let's work together to build your brand and achieve amazing results.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <button
                onClick={onOpenLetTalk}
                className="glow-yellow-btn px-8 py-4 rounded-xl text-base font-bold flex items-center gap-3 shadow-glow-yellow"
              >
                <span>Contact Me Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Extended Lead Form & Contact Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Info & Social Connection (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-2">Get in Touch</span>
              <h3 className="text-3xl font-extrabold text-white">Let's Discuss Your Next Campaign</h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Whether you need dedicated social media management, viral reels, or YouTube channel growth, send a message and get a tailored strategy.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={`tel:${about.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/50 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Direct Phone / WhatsApp</p>
                  <p className="text-sm font-bold text-white group-hover:text-amber-400">+91 {about.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${about.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/50 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-600/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Address</p>
                  <p className="text-sm font-bold text-white group-hover:text-amber-400 break-all">{about.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location Base</p>
                  <p className="text-sm font-bold text-white">{about.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form directly saved to Supabase (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative shadow-2xl">
              
              {sent ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto animate-bounce" />
                  <h4 className="text-2xl font-bold text-white">Thank You for Connecting!</h4>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Your project details have been received. Aniket will review your requirements and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Your Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Required Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#140f2b] border border-white/15 text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Instagram Management">Instagram Management</option>
                        <option value="YouTube Management">YouTube Management</option>
                        <option value="Facebook Management">Facebook Management</option>
                        <option value="Video Shoot & Editing">Video Shoot & Editing</option>
                        <option value="Reels & Content Creation">Reels & Content Creation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Message / Requirements</label>
                    <textarea
                      rows="4"
                      placeholder="Tell us about your brand goals, target audience, or current challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full glow-yellow-btn py-4 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Send Inquiry to Aniket'}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
