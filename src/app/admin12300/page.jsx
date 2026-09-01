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
  Plus,
  Trash2,
  Edit3,
  TrendingUp,
  Instagram,
  Save,
  Sparkles,
  LogOut,
  RefreshCw
} from 'lucide-react';
import { getInquiries, updateInquiryStatus, isSupabaseConfigured } from '../../lib/supabaseClient';
import { uploadToCloudinary } from '../../lib/cloudinary';
import { INITIAL_SITE_DATA, getStoredGallery, saveStoredGallery } from '../../lib/mockData';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  
  const [activeTab, setActiveTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  // Gallery CRUD State
  const [galleryList, setGalleryList] = useState([]);
  const [newProof, setNewProof] = useState({
    name: '',
    handle: '',
    category: 'Lifestyle & Business',
    growth: '+1,500 Followers',
    image: ''
  });
  const [proofUploading, setProofUploading] = useState(false);
  const [editingProofId, setEditingProofId] = useState(null);

  useEffect(() => {
    // Check if session token exists
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('aniket_admin_auth');
      if (auth === 'true') {
        setIsAuthenticated(true);
        loadInquiries();
        loadGalleryData();
      }
    }
  }, []);

  const loadGalleryData = () => {
    setGalleryList(getStoredGallery());
  };

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
        loadGalleryData();
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

  const handleProofImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setProofUploading(true);
    try {
      const res = await uploadToCloudinary(file);
      const url = res.secure_url || res.url;
      setNewProof(prev => ({ ...prev, image: url }));
    } catch (err) {
      console.error(err);
      alert('Upload error: ' + err.message);
    } finally {
      setProofUploading(false);
    }
  };

  const handleSaveProof = (e) => {
    e.preventDefault();
    if (!newProof.name || !newProof.image) {
      alert('Please provide Client Name and Image.');
      return;
    }

    let updatedList;
    if (editingProofId) {
      updatedList = galleryList.map(item => 
        item.id === editingProofId ? { ...newProof, id: editingProofId } : item
      );
      setEditingProofId(null);
    } else {
      const newItem = {
        ...newProof,
        id: 'gal-' + Date.now()
      };
      updatedList = [newItem, ...galleryList];
    }

    setGalleryList(updatedList);
    saveStoredGallery(updatedList);
    setNewProof({
      name: '',
      handle: '',
      category: 'Lifestyle & Business',
      growth: '+1,500 Followers',
      image: ''
    });
  };

  const handleEditProof = (item) => {
    setEditingProofId(item.id);
    setNewProof(item);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleDeleteProof = (id) => {
    if (!confirm('Are you sure you want to delete this proof card?')) return;
    const updated = galleryList.filter(item => item.id !== id);
    setGalleryList(updated);
    saveStoredGallery(updated);
  };

  const handleResetGallery = () => {
    if (!confirm('Reset gallery to default screenshots?')) return;
    setGalleryList(INITIAL_SITE_DATA.gallery);
    saveStoredGallery(INITIAL_SITE_DATA.gallery);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Login View in Soft White Glass
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex items-center justify-center p-4 relative">
        <div className="bg-mesh-canvas" />

        <div className="w-full max-w-md glass-panel p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/90 space-y-6 relative z-10 animate-fadeIn">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Aniket Pal Admin Portal</h2>
            <p className="text-xs text-slate-500 font-medium">Enter secure passkey to manage leads & proofs</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Admin Passcode</label>
              <input
                type="password"
                placeholder="Enter secret passcode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm font-medium shadow-sm transition"
              />
              {authError && <p className="text-xs text-rose-600 font-bold mt-1.5">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full glow-yellow-btn py-3.5 rounded-xl font-bold transition cursor-pointer text-sm shadow-md shadow-amber-500/20"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs font-bold text-slate-500 hover:text-amber-600 inline-flex items-center gap-1.5 transition">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard in Soft White Glass
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 relative">
      <div className="bg-mesh-canvas" />

      {/* Top Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/80 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xs font-bold text-slate-600 hover:text-amber-600 flex items-center gap-1 transition">
            <ArrowLeft className="w-4 h-4" /> Live Site
          </Link>
          <div className="h-4 w-[1px] bg-slate-200" />
          <h1 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
            Aniket Pal Control Center
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200 font-bold">
            <Database className="w-3.5 h-3.5 text-emerald-600" />
            <span>Supabase: {isSupabaseConfigured ? 'Live Connected' : 'Local Storage'}</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs text-rose-600 hover:text-rose-700 font-bold px-3 py-1.5 rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 transition flex items-center gap-1"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Admin Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200/80 pb-4">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition ${
              activeTab === 'inquiries' 
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25' 
                : 'bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquiries & Leads ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition ${
              activeTab === 'gallery' 
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25' 
                : 'bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Before-After Proofs ({galleryList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`px-5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition ${
              activeTab === 'media' 
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25' 
                : 'bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <UploadCloud className="w-4 h-4" />
            <span>Cloudinary Media Hub</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`px-5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition ${
              activeTab === 'content' 
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25' 
                : 'bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Site Configuration</span>
          </button>
        </div>

        {/* Tab 1: Inquiries / Leads */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="glass-panel p-6 rounded-2xl border border-white/90">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Inquiries</p>
                <p className="text-3xl font-black text-slate-900 mt-1">{inquiries.length}</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/90">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">New Leads</p>
                <p className="text-3xl font-black text-amber-600 mt-1">
                  {inquiries.filter(i => i.status === 'new').length}
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/90">
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Converted Clients</p>
                <p className="text-3xl font-black text-emerald-600 mt-1">
                  {inquiries.filter(i => i.status === 'contacted' || i.status === 'converted').length}
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-3xl border border-white/90 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-200/80 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Client Inquiry Messages</h3>
                  <p className="text-xs text-slate-500 font-medium">Direct leads captured via website form</p>
                </div>
                <button
                  onClick={loadInquiries}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 transition"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Refresh
                </button>
              </div>

              {inquiries.length === 0 ? (
                <div className="p-14 text-center text-slate-400 space-y-2">
                  <MessageSquare className="w-12 h-12 mx-auto text-slate-300" />
                  <p className="text-sm font-semibold">No client inquiries recorded yet.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-6 hover:bg-slate-50/70 transition space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="font-extrabold text-slate-900 text-base">{inq.name}</span>
                          <span className="text-xs px-3 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-bold">
                            {inq.service}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {new Date(inq.created_at).toLocaleDateString()}
                        </span>
                      </div>

                      <p className="text-sm text-slate-700 bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-medium">
                        "{inq.message || 'No additional message provided'}"
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-4 text-xs font-bold">
                          {inq.phone && (
                            <a
                              href={`https://wa.me/91${inq.phone.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center gap-1.5 transition"
                            >
                              <Phone className="w-3.5 h-3.5" /> WhatsApp: {inq.phone}
                            </a>
                          )}
                          {inq.email && (
                            <a
                              href={`mailto:${inq.email}`}
                              className="text-blue-700 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 flex items-center gap-1.5 transition"
                            >
                              <Mail className="w-3.5 h-3.5" /> {inq.email}
                            </a>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <label className="text-xs text-slate-500 font-bold">Status:</label>
                          <select
                            value={inq.status || 'new'}
                            onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                            className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-800 font-bold focus:outline-none focus:border-amber-500 shadow-sm"
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

        {/* Tab 2: Before & After Proofs Gallery Manager */}
        {activeTab === 'gallery' && (
          <div className="space-y-8">
            
            {/* Create / Edit Form */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/90 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                    <Plus className="w-5 h-5 text-amber-500" />
                    {editingProofId ? 'Edit Transformation Card' : 'Add New Transformation Proof'}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Upload screenshot proof and configure follower growth figures
                  </p>
                </div>
                {editingProofId && (
                  <button
                    onClick={() => {
                      setEditingProofId(null);
                      setNewProof({ name: '', handle: '', category: 'Lifestyle & Business', growth: '+1,500 Followers', image: '' });
                    }}
                    className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-bold shadow-sm"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>

              <form onSubmit={handleSaveProof} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Client / Brand Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Jitendra Patel"
                      value={newProof.name}
                      onChange={(e) => setNewProof({ ...newProof, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 text-sm font-medium shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Instagram Handle *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. @jitendrapatel0008_"
                      value={newProof.handle}
                      onChange={(e) => setNewProof({ ...newProof, handle: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 text-sm font-medium shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Category / Niche</label>
                    <input
                      type="text"
                      placeholder="e.g. Fitness & Gym, Beauty & Salon, Politician"
                      value={newProof.category}
                      onChange={(e) => setNewProof({ ...newProof, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 text-sm font-medium shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Growth Badge *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. +2,281 Followers"
                      value={newProof.growth}
                      onChange={(e) => setNewProof({ ...newProof, growth: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 text-sm font-medium shadow-sm"
                    />
                  </div>
                </div>

                {/* Image Upload / URL */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Before & After Screenshot *</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Image URL (e.g. /gallery/jitendra.webp or Cloudinary URL)"
                      value={newProof.image}
                      onChange={(e) => setNewProof({ ...newProof, image: e.target.value })}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 text-sm font-medium shadow-sm"
                    />
                    <label className="glow-outline-btn px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shrink-0">
                      <UploadCloud className="w-4 h-4 text-amber-600" />
                      <span>{proofUploading ? 'Uploading...' : 'Upload Image'}</span>
                      <input type="file" accept="image/*" onChange={handleProofImageUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                {newProof.image && (
                  <div className="mt-2 flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 w-fit">
                    <img src={newProof.image} alt="Preview" className="h-16 w-auto object-contain rounded-lg border border-slate-200" />
                    <span className="text-xs text-emerald-700 font-bold">Image Attached</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="glow-yellow-btn px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingProofId ? 'Update Card' : 'Save & Publish to Gallery'}</span>
                </button>
              </form>
            </div>

            {/* List of Live Proofs */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/90 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Live Gallery Proofs ({galleryList.length})</h3>
                  <p className="text-xs text-slate-500 font-medium">Currently visible on the public website</p>
                </div>
                <button
                  onClick={handleResetGallery}
                  className="text-xs font-bold text-slate-500 hover:text-amber-600 transition"
                >
                  Reset to Defaults
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryList.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 flex flex-col justify-between shadow-sm hover:shadow-md transition"
                  >
                    <div className="relative h-48 w-full bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center border border-slate-100">
                      <img src={item.image} alt={item.name} className="h-full w-auto object-contain" />
                      <div className="absolute top-2 right-2 bg-emerald-600 text-white font-black text-[11px] px-2.5 py-1 rounded-md shadow-sm">
                        {item.growth}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-base">{item.name}</h4>
                        <p className="text-xs text-slate-500 font-medium">{item.handle} • {item.category}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditProof(item)}
                          className="p-2 rounded-lg bg-slate-100 hover:bg-amber-500 hover:text-white transition text-slate-700"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProof(item.id)}
                          className="p-2 rounded-lg bg-slate-100 hover:bg-rose-600 hover:text-white transition text-slate-700"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Cloudinary Media Hub */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/90 space-y-6 shadow-sm">
              <div>
                <h3 className="text-xl font-black text-slate-900">Upload Assets to Cloudinary CDN</h3>
                <p className="text-xs text-slate-500 font-medium mt-1">Upload client photos, case studies, or portfolio images directly to Cloudinary.</p>
              </div>

              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center space-y-4 hover:border-amber-500 transition bg-slate-50/50">
                <UploadCloud className="w-12 h-12 mx-auto text-amber-500" />
                <div>
                  <label className="glow-yellow-btn px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2">
                    <span>{uploading ? 'Uploading to Cloudinary...' : 'Choose Media File'}</span>
                    <input type="file" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
                <p className="text-xs text-slate-400 font-medium">Supports JPG, PNG, WEBP, MP4 (Max 25MB)</p>
              </div>

              {uploadedUrl && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <p className="text-xs text-emerald-800 font-bold flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> Media Uploaded Successfully:
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={uploadedUrl}
                      className="flex-1 bg-white border border-slate-200 text-xs px-3 py-2 rounded-lg text-slate-700 font-mono shadow-sm"
                    />
                    <button
                      onClick={() => copyToClipboard(uploadedUrl)}
                      className="glow-yellow-btn px-4 py-2 rounded-lg text-xs font-bold"
                    >
                      {copied ? 'Copied!' : 'Copy URL'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: Site Configuration */}
        {activeTab === 'content' && (
          <div className="glass-panel p-8 rounded-3xl border border-white/90 space-y-6 shadow-sm">
            <div>
              <h3 className="text-xl font-black text-slate-900">Live Site Information</h3>
              <p className="text-xs text-slate-500 font-medium">Default metadata & configuration</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
              <div className="space-y-1 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Primary Phone</span>
                <p className="font-extrabold text-slate-900 text-sm">{INITIAL_SITE_DATA.about.phone}</p>
              </div>
              <div className="space-y-1 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Official Email</span>
                <p className="font-extrabold text-slate-900 text-sm">{INITIAL_SITE_DATA.about.email}</p>
              </div>
              <div className="space-y-1 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Location</span>
                <p className="font-extrabold text-slate-900 text-sm">{INITIAL_SITE_DATA.about.location}</p>
              </div>
              <div className="space-y-1 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Secret Admin Path</span>
                <p className="font-extrabold text-amber-600 text-sm font-mono">/admin12300</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
