# Beauty Clinic Website (Barcelona)

A Next.js (App Router) project with Tailwind CSS and Supabase. Implements core routes, a contact form stored in Supabase, and placeholders for treatments, doctors, testimonials, and blog.

## Quick Start
1. Copy environment file:
   - `cp .env.example .env.local`
   - Fill `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.
2. Create database schema in Supabase:
   - Open Supabase SQL editor and run `./.AGENT/spec/schema.sql`.
   - (Optional) Seed sample content with `./.AGENT/spec/seed.sql`.
3. Install dependencies and run locally:
   - `npm install`
   - `npm run dev` (http://localhost:3000)
4. Optional: set `NEXT_PUBLIC_SITE_URL` for sitemap/robots.

## Key Commands
- `npm run dev`: Start dev server
- `npm run build`: Production build
- `npm start`: Run production build

## Structure
- `app/`: Routes (`/`, `/treatments`, `/doctors`, `/about`, `/testimonials`, `/blog`, `/contact`, legal)
- `app/api/contact/route.ts`: Inserts contact requests into `contacts` (rate-limited)
- `app/sitemap.ts`, `app/robots.ts`: SEO files
- `components/`: `Navbar`, `Footer`
- `lib/`: Supabase clients and typed query helpers
- `.AGENT/spec/`: Requirements, schema, design, tasks

## Notes
- Pages are wired to Supabase reads with ISR; ensure RLS policies match.
- Protect server secrets; never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.
- Add i18n, images, and CI per `.AGENT/spec/tasks.md` when ready.
 - Sample JSON-LD is embedded sitewide and per treatment/blog for SEO.
