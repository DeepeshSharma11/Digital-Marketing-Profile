# Memory: Aniket Digital Market Website

## Project Overview
- **Type**: Next.js Digital Marketing & Social Media Agency Website & CMS
- **Client**: Aniket Pal - Social Media Manager & Content Creator (Bareilly, UP)
- **Architect & Developer**: Deepesh Sharma (CTO & Co-Founder, Focitech.in)
- **Theme**: Luxury Soft White Glassmorphic Aesthetic (`#F8FAFC`, frosted glass panels, ambient mesh glow, warm golden amber accents)
- **Reference Layout**: `Layout.jpeg`
- **Repository**: `https://github.com/DeepeshSharma11/Digital-Marketing-Profile.git`
- **Tech Stack**:
  - Frontend: Next.js 14 (App Router), React 18, Tailwind CSS, Lucide React
  - Backend/DB: Supabase (PostgreSQL, Realtime, Auth) with local offline fallback
  - Media Management: Cloudinary (Direct uploads, asset transformation via secure environment variables)
  - Admin Dashboard: Secret hidden route `/admin12300` for lead management, content CRUD, and settings
  - Deployment: Docker (Multi-stage standalone), Docker Compose, and Vercel

## Key Sections (Layout.jpeg & Custom Extensions)
1. Header & Navigation (Logo, Nav Links, "Let's Talk" CTA modal in frosted white glass)
2. Hero Section (Headline, Gradient accent, Dual CTAs, Social buttons, Floating Badge, Camera/Editor setup with live stats 10K/25K/50K)
3. Live Brand Achievement Marquee (Infinite ticker with real deliverables)
4. Services (Instagram, YouTube, Facebook, Video Shoot & Editing, Reels & Content Creation in frosted glass cards)
5. Interactive Social Media ROI & Growth Estimator (Custom niche calculation for cafes, gyms, doctors, creators)
6. Before vs After Profile Transformation Showcase (Interactive toggle)
7. About Me (Photo with glowing border, Bio, Location, Phone, Email, "Know More" CTA)
8. Stats Counter (50+ Clients, 100+ Projects, 3+ Years, 100% Satisfaction in white glass)
9. 4-Step Process (Consultation -> Strategy -> Create & Manage -> Analyze & Grow)
10. Portfolio & Case Studies Showcase (Cloudinary-backed with modal)
11. Client Testimonials & Reviews
12. Frequently Asked Questions Accordion (Natural localized Q&A)
13. Lead Capture / Contact Form + CTA Banner (Supabase `inquiries` table)
14. Footer with branding, social links & developer attribution (`Deepesh Sharma, CTO & Co-Founder, Focitech.in`)
15. Quick Direct WhatsApp Floating Button
16. Admin CMS (Secret URL: `/admin12300`) for leads (WhatsApp & Email direct triggers), content, and Cloudinary media

## Status Log
- 2026-09-01: Applied GPU hardware acceleration (`transform: translate3d`), isolated `.bg-mesh-canvas` to eliminate scroll repaints, and added `content-visibility: auto` (`.section-smooth`) for zero-lag 60/120fps scrolling.
