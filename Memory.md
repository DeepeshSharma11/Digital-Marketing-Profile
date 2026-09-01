# Memory: Aniket Digital Market Website

## Project Overview
- **Type**: Next.js Digital Marketing & Social Media Agency Website & CMS
- **Client**: Aniket Pal - Social Media Manager & Content Creator (Bareilly, UP)
- **Architect & Developer**: Deepesh Sharma (CTO & Co-Founder, Focitech.in)
- **Reference Layout**: `Layout.jpeg`
- **Repository**: `https://github.com/DeepeshSharma11/Digital-Marketing-Profile.git`
- **Tech Stack**:
  - Frontend: Next.js 14 (App Router), React 18, Tailwind CSS, Lucide React
  - Backend/DB: Supabase (PostgreSQL, Realtime, Auth) with local offline fallback
  - Media Management: Cloudinary (Direct uploads, asset transformation via secure environment variables)
  - Admin Dashboard: Dedicated `/admin` route for lead management, content CRUD, and settings
  - Deployment: Docker (Multi-stage standalone), Docker Compose, and Vercel

## Key Sections (Layout.jpeg)
1. Header & Navigation (Logo, Nav Links, "Let's Talk" CTA modal)
2. Hero Section (Headline, Gradient accent, Dual CTAs, Social buttons, Floating Badge, Camera/Editor setup with live stats 10K/25K/50K)
3. Services (Instagram, YouTube, Facebook, Video Shoot & Editing, Reels & Content Creation)
4. About Me (Photo with glowing border, Bio, Location, Phone, Email, "Know More" CTA)
5. Stats Counter (50+ Clients, 100+ Projects, 3+ Years, 100% Satisfaction)
6. 4-Step Process (Consultation -> Strategy -> Create & Manage -> Analyze & Grow)
7. Portfolio & Case Studies Showcase (Cloudinary-backed with modal)
8. Lead Capture / Contact Form + CTA Banner (Supabase `inquiries` table)
9. Footer with branding, social links & developer attribution (`Deepesh Sharma, CTO & Co-Founder, Focitech.in`)
10. Admin CMS (`/admin`) for leads (WhatsApp & Email direct triggers), content, and Cloudinary media

## Status Log
- 2026-09-01: Migrated admin password authentication to dynamic server API route (`/api/admin/verify`), reading strictly from `process.env.ADMIN_PASSWORD` / `NEXT_PUBLIC_ADMIN_PIN` with zero hardcoded credentials in client bundles.
