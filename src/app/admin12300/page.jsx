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
  Save
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
    alert('Transformation Proof Saved Successfully!');
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
            onClick={() => setActiveTab('gallery')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition ${
              activeTab === 'gallery' ? 'bg-amber-400 text-black font-bold' : 'bg-white/5 text-gray-300 hover:text-white'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Before-After Proofs ({galleryList.length})
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
                  <MessageSquare className="w-12 h-12 mx-auto text-gray-600 mb-3" />
                  <p>No client inquiries recorded yet.</p>
                </div>
              ) : (
                <div className="divide-y divide-white/5">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-6 hover:bg-white/[0.02] transition space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-white text-base">{inq.name}</span>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {inq.service}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {new Date(inq.created_at).toLocaleDateString()}
                        </span>
                      </div>

                      <p className="text-sm text-gray-300 bg-black/30 p-3.5 rounded-xl border border-white/5">
                        "{inq.message || 'No additional message provided'}"
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          {inq.phone && (
                            <a
                              href={`https://wa.me/91${inq.phone.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                            >
                              <Phone className="w-3.5 h-3.5" /> WhatsApp: {inq.phone}
                            </a>
                          )}
                          {inq.email && (
                            <a
                              href={`mailto:${inq.email}`}
                              className="text-blue-400 hover:underline flex items-center gap-1"
                            >
                              <Mail className="w-3.5 h-3.5" /> {inq.email}
                            </a>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <select
                            value={inq.status || 'new'}
                            onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                            className="text-xs bg-black/60 border border-white/20 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-amber-400"
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
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <Plus className="w-5 h-5 text-amber-400" />
                    {editingProofId ? 'Edit Transformation Card' : 'Add New Transformation Proof'}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Upload before/after proof screenshots and configure client statistics
                  </p>
                </div>
                {editingProofId && (
                  <button
                    onClick={() => {
                      setEditingProofId(null);
                      setNewProof({ name: '', handle: '', category: 'Lifestyle & Business', growth: '+1,500 Followers', image: '' });
                    }}
                    className="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/20"
                  >
                    Cancel Editing
                  </button>
                )}
              </div>

              <form onSubmit={handleSaveProof} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Client / Brand Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Verma"
                      value={newProof.name}
                      onChange={(e) => setNewProof({ ...newProof, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Instagram Handle *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. @rahul_fitness"
                      value={newProof.handle}
                      onChange={(e) => setNewProof({ ...newProof, handle: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Category / Niche</label>
                    <input
                      type="text"
                      placeholder="e.g. Fitness & Gym, Beauty & Salon, Politician"
                      value={newProof.category}
                      onChange={(e) => setNewProof({ ...newProof, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Growth Badge *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. +2,400 Followers"
                      value={newProof.growth}
                      onChange={(e) => setNewProof({ ...newProof, growth: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>
                </div>

                {/* Image Upload / URL */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Before & After Screenshot *</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Enter Image URL or upload below (e.g. /gallery/jitendra.webp)"
                      value={newProof.image}
                      onChange={(e) => setNewProof({ ...newProof, image: e.target.value })}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                    <label className="glow-outline-btn px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shrink-0">
                      <UploadCloud className="w-4 h-4" />
                      <span>{proofUploading ? 'Uploading...' : 'Upload Image'}</span>
                      <input type="file" accept="image/*" onChange={handleProofImageUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                {newProof.image && (
                  <div className="mt-2 flex items-center gap-3 p-3 bg-black/30 rounded-xl border border-white/10 w-fit">
                    <img src={newProof.image} alt="Preview" className="h-16 w-auto object-contain rounded-lg" />
                    <span className="text-xs text-emerald-400 font-semibold">Image Ready</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="glow-yellow-btn px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingProofId ? 'Update Transformation Card' : 'Save & Publish to Gallery'}</span>
                </button>
              </form>
            </div>

            {/* List of Live Proofs */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-black text-white">Live Gallery Proofs ({galleryList.length})</h3>
                <button
                  onClick={handleResetGallery}
                  className="text-xs text-gray-400 hover:text-amber-400 transition"
                >
                  Reset to Defaults
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryList.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between"
                  >
                    <div className="relative h-48 w-full bg-black/40 rounded-xl overflow-hidden flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="h-full w-auto object-contain" />
                      <div className="absolute top-2 right-2 bg-emerald-500/90 text-white font-black text-[11px] px-2 py-0.5 rounded-md">
                        {item.growth}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-extrabold text-white text-base">{item.name}</h4>
                        <p className="text-xs text-gray-400">{item.handle} • {item.category}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditProof(item)}
                          className="p-2 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-black transition text-gray-300"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProof(item.id)}
                          className="p-2 rounded-lg bg-white/10 hover:bg-rose-500 hover:text-white transition text-gray-300"
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
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-black text-white">Upload Assets to Cloudinary CDN</h3>
                <p className="text-xs text-gray-400 mt-1">Upload client photos, case studies, or portfolio images directly to Cloudinary.</p>
              </div>

              <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center space-y-4 hover:border-amber-400/50 transition">
                <UploadCloud className="w-12 h-12 mx-auto text-amber-400" />
                <div>
                  <label className="glow-yellow-btn px-6 py-3 rounded-xl text-sm font-bold cursor-pointer inline-flex items-center gap-2">
                    <span>{uploading ? 'Uploading to Cloudinary...' : 'Choose Media File'}</span>
                    <input type="file" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
                <p className="text-xs text-gray-500">Supports JPG, PNG, WEBP, MP4 (Max 25MB)</p>
              </div>

              {uploadedUrl && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-2">
                  <p className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" /> Media Uploaded Successfully:
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={uploadedUrl}
                      className="flex-1 bg-black/60 border border-white/10 text-xs px-3 py-2 rounded-lg text-gray-300 font-mono"
                    />
                    <button
                      onClick={() => copyToClipboard(uploadedUrl)}
                      className="glow-yellow-btn px-3 py-2 rounded-lg text-xs font-bold"
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
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-xl font-black text-white">Live Site Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-300">
              <div className="space-y-1 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-gray-400 font-semibold">Primary Phone</span>
                <p className="font-bold text-white text-sm">{INITIAL_SITE_DATA.about.phone}</p>
              </div>
              <div className="space-y-1 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-gray-400 font-semibold">Official Email</span>
                <p className="font-bold text-white text-sm">{INITIAL_SITE_DATA.about.email}</p>
              </div>
              <div className="space-y-1 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-gray-400 font-semibold">Location</span>
                <p className="font-bold text-white text-sm">{INITIAL_SITE_DATA.about.location}</p>
              </div>
              <div className="space-y-1 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-gray-400 font-semibold">Secret Admin Path</span>
                <p className="font-bold text-amber-400 text-sm font-mono">/admin12300</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
