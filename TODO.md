Update

- Input validation: Added Zod to the contact API (app/api/contact/route.ts) for strict payload validation with clear error responses. Keeps existing rate limit.
- SEO JSON-LD: Added ServiceJsonLd (treatments) and ArticleJsonLd (blog posts) and wired them in detail pages for richer search snippets. Sitewide OrgJsonLd remains in layout.
- Seed data: Created .AGENT/spec/seed.sql with sample treatments, doctors, testimonials (approved), and blog posts for quick demo.
- Docs/scripts: Updated package.json to include zod; README now references the new seed file and notes JSON‑LD.

How to proceed

- In Supabase, run ./.AGENT/spec/seed.sql after the schema to populate sample data.
- Start the app with npm run dev, test dynamic pages (/treatments, /blog) and the contact form.
- Optional: set NEXT_PUBLIC_SITE_URL for correct sitemap/robots and JSON-LD URLs.

Next options

- Implement i18n scaffolding (next-intl) and externalize strings.
- Add unit tests for lib/db.ts and API tests for /api/contact.
- Add email notifications for contact submissions (Supabase Functions/SMTP).
  Which would you like me to tackle next?
