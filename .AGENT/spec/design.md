# Application Design

## Overview
- Stack: Next.js (App Router, TypeScript), Tailwind CSS, Supabase (DB, auth, storage), Vercel (hosting/CDN).
- Goals: Luxury, fast UX; dynamic content from Supabase; secure contact capture; strong SEO and i18n.

## Information Architecture
- Public routes: `/`, `/treatments`, `/treatments/[slug]`, `/doctors`, `/about`, `/testimonials`, `/blog`, `/blog/[slug]`, `/contact`, legal pages.
- Data sources:
  - `treatments` → list and detail pages.
  - `doctors` → profiles listing.
  - `testimonials` (approved=true) → testimonials page + homepage highlights.
  - `blog_posts` → blog list and post detail.
  - `contacts` → write-only from public via API route.

## Data & Access
- RLS policies (see `schema.sql`) allow public read for non-sensitive tables; `contacts` is insert-only for anon.
- Client: `@supabase/supabase-js` with anon keys for public reads.
- Server: Service role key in API routes for privileged writes (`/api/contact`). Never expose service key to client.

## Rendering Strategy
- Static + ISR for SEO and speed:
  - `treatments`, `blog_posts` pre-rendered per slug with `revalidate` (e.g., 5–15 min).
  - Lists (`/treatments`, `/blog`) revalidated on interval.
  - `/testimonials` reads only approved entries; also ISR.
  - `/contact` is dynamic client form posting to API route.

## UI/UX & Styling
- Tailwind with a luxury palette (white, beige, gold, deep accents).
- Typography: serif headings, sans body; subtle motion (fade/scroll).
- Components: `Navbar`, `Footer`, `Hero`, `Card`, `Testimonial`, `DoctorCard`, `SectionHeading`.
- Accessibility: semantic HTML, focus states, color contrast AA, form validation and error messaging.

## SEO & Analytics
- Per-page metadata and OpenGraph tags; canonical URLs; sitemap and robots.
- Structured data (JSON-LD) for organization, medical business, and articles.
- Analytics: privacy-friendly (e.g., Vercel Analytics or GA4 with consent gate).

## Internationalization
- Locales: `es`, `ca`, `en` with `next-intl` or `next-i18next`.
- Content fields provide localized variants or fallback strategy; slugs per locale for blog/treatments.

## Performance
- Next/Image for all images; responsive sizes; lazy loading.
- Code-splitting via route segments; avoid heavy client libs.
- Cache headers tuned via ISR; minimal client state; use server components by default.

## Security & Compliance
- Input validation on API routes; rate limiting (edge middleware or Supabase functions) for forms.
- Cookie consent banner; GDPR pages; secure headers via Next config.
- Secrets only in server environment; principle of least privilege in policies.

## Deployment
- Vercel project with environment variables for prod/preview/dev.
- Preview deployments on PRs; migration via running `schema.sql` in Supabase.
