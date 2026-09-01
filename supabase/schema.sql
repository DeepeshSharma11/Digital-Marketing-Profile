-- ==========================================================
-- Supabase Schema for Aniket Pal Social Media & Digital Marketing
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/_/sql
-- ==========================================================

-- 1. Site Settings Table
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Services Table
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  icon TEXT NOT NULL,
  badge_color TEXT DEFAULT 'purple',
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Before & After Transformation Proofs Gallery Table
CREATE TABLE IF NOT EXISTS public.gallery_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  handle TEXT NOT NULL,
  category TEXT NOT NULL,
  growth TEXT NOT NULL,
  image TEXT NOT NULL,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Portfolio / Case Studies Table
CREATE TABLE IF NOT EXISTS public.portfolio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  video_url TEXT,
  metrics JSONB DEFAULT '{"reach": "250K+", "engagement": "18.5%", "followers_gain": "+12.4K"}'::jsonb,
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  featured BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Testimonials Table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  client_role TEXT NOT NULL,
  client_avatar TEXT,
  review TEXT NOT NULL,
  rating INT DEFAULT 5,
  verified BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Process Steps Table
CREATE TABLE IF NOT EXISTS public.process_steps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  step_number INT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  color_accent TEXT NOT NULL
);

-- 7. Stats Counter Table
CREATE TABLE IF NOT EXISTS public.stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  icon TEXT NOT NULL,
  display_order INT DEFAULT 0
);

-- 8. Client Inquiries / Leads Table
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  service TEXT,
  budget TEXT,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'converted', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.process_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Idempotent RLS Policies
DROP POLICY IF EXISTS "Public can view site_settings" ON public.site_settings;
CREATE POLICY "Public can view site_settings" ON public.site_settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view services" ON public.services;
CREATE POLICY "Public can view services" ON public.services FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view gallery_items" ON public.gallery_items;
CREATE POLICY "Public can view gallery_items" ON public.gallery_items FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view portfolio" ON public.portfolio;
CREATE POLICY "Public can view portfolio" ON public.portfolio FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view testimonials" ON public.testimonials;
CREATE POLICY "Public can view testimonials" ON public.testimonials FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view process_steps" ON public.process_steps;
CREATE POLICY "Public can view process_steps" ON public.process_steps FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view stats" ON public.stats;
CREATE POLICY "Public can view stats" ON public.stats FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can submit inquiries" ON public.inquiries;
CREATE POLICY "Public can submit inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Admin full access inquiries" ON public.inquiries;
CREATE POLICY "Admin full access inquiries" ON public.inquiries FOR ALL USING (true);

DROP POLICY IF EXISTS "Admin full access gallery_items" ON public.gallery_items;
CREATE POLICY "Admin full access gallery_items" ON public.gallery_items FOR ALL USING (true);

DROP POLICY IF EXISTS "Admin full access site_settings" ON public.site_settings;
CREATE POLICY "Admin full access site_settings" ON public.site_settings FOR ALL USING (true);

DROP POLICY IF EXISTS "Admin full access services" ON public.services;
CREATE POLICY "Admin full access services" ON public.services FOR ALL USING (true);

DROP POLICY IF EXISTS "Admin full access portfolio" ON public.portfolio;
CREATE POLICY "Admin full access portfolio" ON public.portfolio FOR ALL USING (true);

DROP POLICY IF EXISTS "Admin full access testimonials" ON public.testimonials;
CREATE POLICY "Admin full access testimonials" ON public.testimonials FOR ALL USING (true);

DROP POLICY IF EXISTS "Admin full access process_steps" ON public.process_steps;
CREATE POLICY "Admin full access process_steps" ON public.process_steps FOR ALL USING (true);

DROP POLICY IF EXISTS "Admin full access stats" ON public.stats;
CREATE POLICY "Admin full access stats" ON public.stats FOR ALL USING (true);

-- Seed Initial Gallery Data
INSERT INTO public.gallery_items (name, handle, category, growth, image, display_order) VALUES
('Jitendra Patel', '@jitendrapatel0008_', 'Lifestyle & Business', '+2,281 Followers', '/gallery/jitendra.webp', 1),
('सुनीता पाल (Sunita Pal)', '@sunitapal_117', 'Political & Public Figure', '+6,200 Followers', '/gallery/sunita.webp', 2),
('Suryaprakash Pal', '@suryaprakash.pal.39', 'Social Worker & Public Profile', '+1,000 Followers', '/gallery/suryaprakash.webp', 3),
('Aazad (SwiftLines)', '@swiftlines0224', 'Content Creator (Bareilly)', '+1,819 Followers (From 0)', '/gallery/swiftliner.webp', 4)
ON CONFLICT DO NOTHING;

-- Seed Initial Stats Data
INSERT INTO public.stats (label, value, icon, display_order) VALUES
('Happy Clients', '50+', 'users', 1),
('Projects Completed', '100+', 'bar-chart', 2),
('Years Experience', '3+', 'rocket', 3),
('Client Satisfaction', '100%', 'star', 4)
ON CONFLICT DO NOTHING;

-- Seed Initial Process Steps Data
INSERT INTO public.process_steps (step_number, title, subtitle, description, icon, color_accent) VALUES
(1, 'Step 1', 'Consultation', 'Understand your goals & requirements.', 'message-circle', '#3B82F6'),
(2, 'Step 2', 'Strategy', 'Plan the best strategy for your brand.', 'clipboard-list', '#06B6D4'),
(3, 'Step 3', 'Create & Manage', 'Create engaging content & manage your pages.', 'edit-3', '#EC4899'),
(4, 'Step 4', 'Analyze & Grow', 'Track performance & grow your brand.', 'trending-up', '#EAB308')
ON CONFLICT DO NOTHING;

-- Seed Initial Services Data
INSERT INTO public.services (title, category, icon, badge_color, items, display_order) VALUES
('Instagram Management', 'instagram', 'Instagram', '#E1306C', '["Profile Optimization", "Content Creation", "Hashtag Research", "Engagement", "Growth Strategy"]'::jsonb, 1),
('YouTube Management', 'youtube', 'Youtube', '#FF0000', '["Channel Setup", "SEO Optimization", "Content Strategy", "Video Uploading", "Growth & Analytics"]'::jsonb, 2),
('Facebook Management', 'facebook', 'Facebook', '#1877F2', '["Page Setup", "Content Creation", "Ads Management", "Audience Targeting", "Engagement Boost"]'::jsonb, 3),
('Video Shoot & Editing', 'video', 'Video', '#D946EF', '["Professional Shoot", "Video Editing", "Reels & Shorts", "Transitions & Effects", "Color Grading"]'::jsonb, 4),
('Reels & Content Creation', 'reels', 'Clapperboard', '#8B5CF6', '["Creative Posts", "Captions & Reels", "Stories & Carousels", "Infographics", "Trendy Content"]'::jsonb, 5)
ON CONFLICT DO NOTHING;
