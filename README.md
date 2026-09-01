# Aniket Pal - Digital Marketing & Social Media Management Platform

A high-converting, modern portfolio and lead generation platform for digital marketing and social media management services. Built with Next.js (App Router), Tailwind CSS, Supabase, and Cloudinary.

## Author & Engineering
- **Architect & Developer**: Deepesh Sharma (CTO & Co-Founder, [Focitech.in Profile](https://focitech.in/deepesh-sharma))
- **Company**: [Focitech Solutions](https://focitech.in)

## Features

- **Pixel-Accurate Visual Design**: Soft white luxury glassmorphism (`#F8FAFC`, frosted glass panels, ambient mesh glow, warm golden amber accents).
- **Interactive Agency Tools**:
  - Social Media ROI & Growth Estimator.
  - Before vs After Profile Transformation Showcase.
  - Live Brand Achievement Marquee.
  - Localized Client FAQs.
- **Service Offerings**: Structured showcases for Instagram Management, YouTube Management, Facebook Management, Video Editing, and Reels Creation.
- **Client Inquiries & Lead Capture**: Real-time consultation booking and contact form synced directly to Supabase with instant local fallback.
- **Admin Control Panel (`/admin12300`)**:
  - Secure passcode-protected secret management portal.
  - Inquiries dashboard with direct WhatsApp (`wa.me`) and email lead triggers.
  - Status updates (`New`, `Contacted`, `Converted`, `Archived`).
  - Cloudinary media uploader for case studies, reels, and photos.
- **Containerization & Deployment Ready**: Multi-stage standalone Docker build, Docker Compose orchestration, and 1-click Vercel monorepo configuration.

## Tech Stack

- **Framework**: Next.js 14 (App Router), React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database & Auth**: Supabase (PostgreSQL)
- **Media CDN**: Cloudinary
- **Containerization**: Docker & Docker Compose

## Quick Start

### 1. Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) (Admin portal at [http://localhost:3000/admin12300](http://localhost:3000/admin12300)).

---

## Docker & Container Deployment

### Running with Docker Compose

```bash
# Build and start container in detached mode
docker compose up -d --build

# View logs
docker compose logs -f

# Stop container
docker compose down
```

---

## Deploying to Vercel (Monorepo & Standard)

1. Push this repository to GitHub.
2. Import the project in [Vercel Dashboard](https://vercel.com/new).
3. If deployed inside a monorepo, set the **Root Directory** to the website folder.
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`
   - `ADMIN_PASSWORD` (or `NEXT_PUBLIC_ADMIN_PIN`)
5. Click **Deploy**.

---

## Supabase Database Setup

1. Open your Supabase SQL Editor.
2. Execute `supabase/schema.sql` to initialize tables, security policies, and seed data.

## License & Attribution

Copyright (c) 2025-2026 Deepesh Sharma (CTO & Co-Founder, [Focitech.in](https://focitech.in/deepesh-sharma)). All Rights Reserved.
Distributed under the terms of the Focitech Attribution & Source Code License. See [LICENSE](LICENSE) for full details.
