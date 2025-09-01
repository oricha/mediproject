# Implementation Tasks (High Quality)

-[ ]  Phase 1 — Environment & Tooling
 -[ ] Initialize Next.js (App Router, TS) and Tailwind. DONE
 -[ ] Add ESLint + `eslint-config-next` and Prettier; configure CI lint step.
 -[ ] Set environment templates (`.env.example`); document variables in README. DONE

-[ ]  Phase 2 — Database & Access
 -[ ] Apply `schema.sql` in Supabase; verify tables and RLS.
 -[ ] Seed minimal content for treatments, doctors, blog_posts, testimonials.
 -[ ] Create service role and anon keys; store in Vercel env + `.env.local`.
 -[ ] Add typed data models and query helpers in `lib/db.ts`.

-[ ]  Phase 3 — Data Fetching & Caching
 -[ ] Implement server data loaders for lists/detail with `revalidate` per route.
 -[ ] Add type-safe mappers and error handling; return 404 on missing slugs.
 -[ ] Implement testimonial read (approved only) and blog pagination.

-[ ]  Phase 4 — UI Components & Pages
 -[ ] Build shared components: `Hero`, `SectionHeading`, `Card`, `DoctorCard`, `Testimonial`.
 -[ ] Implement pages: Home, Treatments (list + detail), Doctors, Testimonials, Blog (list + detail), About, Legal.
 -[ ] Wire components to Supabase queries; replace all TODOs.

-[ ]  Phase 5 — Forms & API
 -[ ] Finalize `/contact` form with client validation (zod/yup) and accessibility states.
 -[ ] API route inserts into `contacts`; add request schema validation and basic rate limit.
 -[ ] Optional: email notification via Supabase Functions or SMTP.

-[ ]  Phase 6 — SEO, i18n, Accessibility
 -[ ] Add per-page metadata, OG tags; sitemap.xml and robots.txt.
 -[ ] Introduce `next-intl` (locales: `es`, `ca`, `en`); externalize all strings.
 -[ ] Accessibility pass: landmarks, labels, contrast, keyboard nav.

-[ ]  Phase 7 — Performance & Quality
 -[ ] Audit with Lighthouse; optimize images and critical CSS.
 -[ ] Enable Next/Image on all media; ensure CLS-free hero sections.
 -[ ] Add unit tests (utils, loaders), integration tests (API), E2E (Playwright).

-[ ]  Phase 8 — CI/CD & Ops
 -[ ] GitHub Actions: lint, build, type-check, tests; preview deploy to Vercel.
 -[ ] Error monitoring (Sentry) and basic logging in API routes.
 -[ ] Final security review: headers, secrets, RLS policies, backups.

-[ ]  Acceptance Criteria
 -[ ] All pages render with real data, ISR configured, no console errors.
 -[ ] Contact submissions persist to Supabase; API validates and rate-limits.
 -[ ] Lint/type/test pipelines pass; a11y and performance meet targets (90+).
 -[ ] i18n works across locales with localized slugs for treatments/blog.
