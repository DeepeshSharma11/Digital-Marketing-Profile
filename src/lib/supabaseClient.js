import { createClient } from '@supabase/supabase-js';
import { INITIAL_SITE_DATA } from './mockData';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('placeholder') &&
  !supabaseAnonKey.includes('placeholder')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Storage layer helper (Supabase with LocalStorage / Memory Fallback)
export async function getInquiries() {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) return data;
  }
  
  if (typeof window !== 'undefined') {
    const local = localStorage.getItem('aniket_inquiries');
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {
        // ignore
      }
    }
  }
  return [
    {
      id: 'demo-1',
      name: 'Vikram Singh',
      email: 'vikram@business.in',
      phone: '9876543210',
      service: 'Instagram Management',
      budget: '₹25,000 - ₹50,000 / mo',
      message: 'Looking for complete Instagram revamp for our local retail chain in Bareilly.',
      status: 'new',
      created_at: new Date().toISOString()
    }
  ];
}

export async function submitInquiry(inquiryData) {
  const newEntry = {
    ...inquiryData,
    id: `inq-${Date.now()}`,
    status: 'new',
    created_at: new Date().toISOString()
  };

  // 1. Direct Email Delivery via FormSubmit.co (shayar.boy200@gmail.com)
  try {
    await fetch('https://formsubmit.co/ajax/shayar.boy200@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `New Lead from Portfolio: ${inquiryData.name || 'Website Inquiry'}`,
        _template: 'table',
        _captcha: 'false',
        'Client Name': inquiryData.name,
        'Phone Number': inquiryData.phone,
        'Email Address': inquiryData.email || 'N/A',
        'Required Service': inquiryData.service || 'Instagram Management',
        'Message / Goals': inquiryData.message || 'No message provided',
        'Submission Date': new Date().toLocaleString('en-IN')
      })
    });
  } catch (formSubmitErr) {
    console.warn('FormSubmit notification error:', formSubmitErr);
  }

  // 2. Persist in Supabase DB if configured
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('inquiries').insert([inquiryData]).select();
      if (!error && data) return { success: true, data: data[0] };
    } catch (err) {
      console.warn('Supabase insert failed, storing locally:', err);
    }
  }

  // 3. Fallback storage
  if (typeof window !== 'undefined') {
    const existing = await getInquiries();
    const updated = [newEntry, ...existing];
    localStorage.setItem('aniket_inquiries', JSON.stringify(updated));
  }
  return { success: true, data: newEntry };
}

export async function updateInquiryStatus(id, newStatus) {
  if (isSupabaseConfigured && supabase) {
    await supabase.from('inquiries').update({ status: newStatus }).eq('id', id);
  }
  if (typeof window !== 'undefined') {
    const existing = await getInquiries();
    const updated = existing.map(item => item.id === id ? { ...item, status: newStatus } : item);
    localStorage.setItem('aniket_inquiries', JSON.stringify(updated));
  }
  return { success: true };
}
