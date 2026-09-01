'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Users, 
  MessageSquare, 
  UploadCloud, 
  Settings, 
  CheckCircle, 
  Clock, 
  Phone, 
  Mail, 
  ExternalLink, 
  Lock, 
  ArrowLeft, 
  Database,
  Image as ImageIcon,
  Copy,
  Plus
} from 'lucide-react';
import { getInquiries, updateInquiryStatus, isSupabaseConfigured } from '../../lib/supabaseClient';
import { uploadToCloudinary } from '../../lib/cloudinary';
import { INITIAL_SITE_DATA } from '../../lib/mockData';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  
  const [activeTab, setActiveTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if session token exists
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('aniket_admin_auth');
      if (auth === 'true') {
        setIsAuthenticated(true);
        loadInquiries();
      }
    }
  }, []);

  const loadInquiries = async () => {
    const data = await getInquiries();
    setInquiries(data || []);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem('aniket_admin_auth', 'true');
        loadInquiries();
      } else {
        setAuthError(data.error || 'Invalid Admin Passcode.');
      }
    } catch (err) {
      setAuthError('Connection error. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('aniket_admin_auth');
    setIsAuthenticated(false);
  };

  const handleStatusChange = async (id, newStatus) => {
    await updateInquiryStatus(id, newStatus);
    loadInquiries();
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadToCloudinary(file);
      setUploadedUrl(res.secure_url || res.url);
    } catch (err) {
      console.error(err);
      alert('Upload error: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#080612] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#100c24] border border-purple-500/30 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/20 text-amber-400 border border-amber-400/30 flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-white">Aniket Pal Admin Portal</h2>
            <p className="text-xs text-gray-400">Enter Admin Passcode to manage leads & media</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Passcode</label>
              <input
                type="password"
                placeholder="Enter admin passcode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
              />
              {authError && <p className="text-xs text-rose-400 mt-1">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full glow-yellow-btn py-3.5 rounded-xl font-bold transition cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="text-center">
            <Link href="/" className="text-xs text-gray-400 hover:text-white inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080612] text-white">
      {/* Top Header */}
      <header className="bg-[#0f0b24] border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Live Site
          </Link>
          <div className="h-4 w-[1px] bg-white/20" />
          <h1 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            Aniket Pal Control Center
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>Supabase: {isSupabaseConfigured ? 'Live Connected' : 'Local Fallback'}</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs text-rose-400 hover:text-rose-300 font-semibold px-3 py-1.5 rounded-lg border border-rose-500/30"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Admin Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition ${
              activeTab === 'inquiries' ? 'bg-amber-400 text-black font-bold' : 'bg-white/5 text-gray-300 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Inquiries & Leads ({inquiries.length})
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition ${
              activeTab === 'media' ? 'bg-amber-400 text-black font-bold' : 'bg-white/5 text-gray-300 hover:text-white'
            }`}
          >
            <UploadCloud className="w-4 h-4" />
            Cloudinary Media Hub
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition ${
              activeTab === 'content' ? 'bg-amber-400 text-black font-bold' : 'bg-white/5 text-gray-300 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            Site Configuration
          </button>
        </div>

        {/* Tab 1: Inquiries / Leads */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-panel p-5 rounded-2xl border border-white/10">
                <p className="text-xs text-gray-400 font-medium">Total Inquiries</p>
                <p className="text-2xl font-black text-white mt-1">{inquiries.length}</p>
              </div>
              <div className="glass-panel p-5 rounded-2xl border border-white/10">
                <p className="text-xs text-gray-400 font-medium">New Leads</p>
                <p className="text-2xl font-black text-amber-400 mt-1">
                  {inquiries.filter(i => i.status === 'new').length}
                </p>
              </div>
              <div className="glass-panel p-5 rounded-2xl border border-white/10">
                <p className="text-xs text-gray-400 font-medium">Contacted / Converted</p>
                <p className="text-2xl font-black text-emerald-400 mt-1">
                  {inquiries.filter(i => i.status === 'contacted' || i.status === 'converted').length}
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-5 border-b border-white/10 flex items-center justify-between">
                <h3 className="font-bold text-white">Client Inquiry Messages</h3>
                <button
                  onClick={loadInquiries}
                  className="text-xs text-amber-400 hover:underline"
                >
                  Refresh Leads
                </button>
              </div>

              {inquiries.length === 0 ? (
                <div className="p-12 text-center text-gray-400">
                  No inquiries received yet. Submit a test form on the home page.
                </div>
              ) : (
                <div className="divide-y divide-white/10">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-5 space-y-3 hover:bg-white/[0.02] transition">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-white text-base">{inq.name}</span>
                          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                            inq.status === 'new' ? 'bg-amber-500/20 text-amber-400 border border-amber-400/30' :
                            inq.status === 'converted' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30' :
                            'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                          }`}>
                            {inq.status}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {inq.created_at ? new Date(inq.created_at).toLocaleString() : 'Just now'}
                        </span>
                      </div>

                      <div className="text-xs text-gray-300 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-black/30 p-3 rounded-lg">
                        <div><strong className="text-gray-400">Service:</strong> {inq.service || 'Social Media Management'}</div>
                        <div><strong className="text-gray-400">Phone:</strong> {inq.phone}</div>
                        <div><strong className="text-gray-400">Email:</strong> {inq.email || 'N/A'}</div>
                      </div>

                      {inq.message && (
                        <p className="text-xs text-gray-300 italic bg-white/[0.02] p-3 rounded-lg border border-white/5">
                          "{inq.message}"
                        </p>
                      )}

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <div className="flex items-center gap-2">
                          <a
                            href={`https://wa.me/91${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${inq.name}, Aniket Pal here regarding your social media management inquiry.`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1"
                          >
                            <Phone className="w-3 h-3" /> WhatsApp Lead
                          </a>
                          {inq.email && (
                            <a
                              href={`mailto:${inq.email}?subject=Social Media Management - Aniket Pal`}
                              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white flex items-center gap-1"
                            >
                              <Mail className="w-3 h-3" /> Send Email
                            </a>
                          )}
                        </div>

                        {/* Status selector */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">Status:</span>
                          <select
                            value={inq.status || 'new'}
                            onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                            className="text-xs bg-[#1a1438] border border-white/20 rounded-md px-2 py-1 text-white focus:outline-none"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="converted">Converted</option>
                            <option value="archived">Archived</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Cloudinary Media Hub */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <UploadCloud className="w-6 h-6 text-amber-400" />
                  Cloudinary Asset Upload
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Upload client project reels, graphics, thumbnails, or case study photos to Cloudinary.
                </p>
              </div>

              {/* File Dropzone */}
              <div className="border-2 border-dashed border-purple-500/40 rounded-2xl p-8 text-center hover:border-amber-400 transition bg-black/20">
                <input
                  type="file"
                  id="mediaFile"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept="image/*,video/*"
                />
                <label htmlFor="mediaFile" className="cursor-pointer block space-y-3">
                  <div className="w-14 h-14 rounded-full bg-purple-600/20 text-purple-400 mx-auto flex items-center justify-center">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-amber-400 hover:underline">
                      Click to choose image or video
                    </span>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, MP4 up to 50MB</p>
                  </div>
                </label>
              </div>

              {uploading && (
                <div className="text-center text-sm text-amber-400 animate-pulse">
                  Uploading media to Cloudinary...
                </div>
              )}

              {uploadedUrl && (
                <div className="bg-black/50 p-4 rounded-xl border border-emerald-500/40 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                    <CheckCircle className="w-4 h-4" /> Media Uploaded Successfully!
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={uploadedUrl}
                      className="w-full text-xs bg-black/60 border border-white/10 px-3 py-2 rounded-lg text-gray-300 font-mono"
                    />
                    <button
                      onClick={() => copyToClipboard(uploadedUrl)}
                      className="glow-yellow-btn px-4 py-2 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      {copied ? 'Copied!' : 'Copy URL'}
                    </button>
                  </div>

                  <div className="relative h-48 max-w-sm rounded-lg overflow-hidden border border-white/10">
                    <img src={uploadedUrl} alt="Uploaded" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Site Configuration */}
        {activeTab === 'content' && (
          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">Live Site Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <span className="text-gray-400">Phone Number:</span>
                <p className="text-white font-bold text-sm mt-1">+91 {INITIAL_SITE_DATA.about.phone}</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <span className="text-gray-400">Email Address:</span>
                <p className="text-white font-bold text-sm mt-1">{INITIAL_SITE_DATA.about.email}</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <span className="text-gray-400">Location:</span>
                <p className="text-white font-bold text-sm mt-1">{INITIAL_SITE_DATA.about.location}</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <span className="text-gray-400">Supabase SQL Schema:</span>
                <p className="text-emerald-400 font-mono text-xs mt-1">supabase/schema.sql ready</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
