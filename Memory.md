# Memory: Aniket Digital Market Website

## Project Overview
- **Type**: Next.js Digital Marketing & Social Media Agency Website & CMS
- **Client**: Aniket Pal - Social Media Manager & Content Creator (Bareilly, UP)
- **Architect & Developer**: Deepesh Sharma (CTO & Co-Founder, Focitech.in)
- **Developer Profile**: `https://focitech.in/deepesh-sharma`
- **Theme**: Luxury Soft White Glassmorphic Aesthetic (`#F8FAFC`, frosted glass panels, ambient mesh glow, warm golden amber accents)
- **Reference Layout**: `Layout.jpeg`
- **Repository**: `https://github.com/DeepeshSharma11/Digital-Marketing-Profile.git`
- **Tech Stack**:
  - Frontend: Next.js 14 (App Router), React 18, Tailwind CSS, Lucide React
  - Backend/DB: Supabase (PostgreSQL, Realtime, Auth) with local offline fallback
  - Media Management: Cloudinary (Direct uploads, asset transformation via secure environment variables)
  - Admin Dashboard: Secret hidden route `/admin12300` with full Lead & Before-After Proof Gallery CRUD
  - Deployment: Docker (Multi-stage standalone), Docker Compose, and Vercel

## Key Sections (Layout.jpeg & Custom Extensions)
1. Header & Navigation (Compact sleek `h-14` navbar with refined smaller typography & Transformations link)
2. Hero Section (Headline, Gradient accent, Dual CTAs, Social buttons, Floating Badge, Camera/Editor setup with live stats 10K/25K/50K)
3. Live Brand Achievement Marquee (Infinite ticker with real deliverables)
4. Services (Instagram, YouTube, Facebook, Video Shoot & Editing, Reels & Content Creation in frosted glass cards)
5. Real Client Transformations Before & After Gallery (Exact client names with responsive compact lightbox modal)
6. Interactive Social Media ROI & Growth Estimator (Custom niche calculation for cafes, gyms, doctors, creators)
7. Before vs After Profile Transformation Showcase (Interactive toggle)
8. About Me (Photo with glowing border, Bio, Location, Phone, Email, "Know More" CTA)
9. Stats Counter (50+ Clients, 100+ Projects, 3+ Years, 100% Satisfaction in white glass)
10. 4-Step Process (Consultation -> Strategy -> Create & Manage -> Analyze & Grow)
11. Portfolio & Case Studies Showcase (Cloudinary-backed with modal)
12. Client Testimonials & Reviews
13. Frequently Asked Questions Accordion (Natural localized Q&A)
14. Lead Capture / Contact Form + CTA Banner (Supabase `inquiries` table)
15. Footer with branding, social links & developer attribution linking directly to `https://focitech.in/deepesh-sharma`
16. Quick Direct WhatsApp Floating Button
17. Admin CMS (Secret URL: `/admin12300` in matching Soft White Glassmorphic UI) for leads, Before-After Proofs CRUD management, and Cloudinary media

## Status Log
- 2026-09-01: Removed repetitive GPU `backdrop-filter: blur`, layer explosion `will-change`, and `content-visibility` reflow jumps to deliver 120fps/144Hz zero-lag fast scrolling.
