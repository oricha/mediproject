#!/usr/bin/env markdown
# Requirements: Beauty Clinic Website (Barcelona)

## 1. General Overview
- **Framework**: Next.js (React-based, optimized for Vercel deployment).
- **Backend / DB**: Supabase (for data storage, authentication, forms, and potentially appointment booking).
- **Deployment**: Vercel (fast builds, CDN, serverless functions).
- **Target audience**: Wealthy clientele seeking exclusive beauty & aesthetic treatments in Barcelona.
- **Goals**:
    - Present premium services and treatments clearly.
    - Build trust through testimonials, doctor profiles, and clinic photos.
    - Allow easy appointment booking and contact.
    - Deliver a **luxurious, modern, fast** website experience.

---

## 2. Core Pages & Routes
- `/` → Home page
- `/treatments` → List of all treatments (categories + detail pages)
- `/treatments/[slug]` → Dynamic treatment detail page
- `/doctors` → Doctor profiles with photos + bios
- `/about` → About the clinic (philosophy, facilities, certifications)
- `/testimonials` → Testimonials (with Supabase backend for CRUD)
- `/blog` → Articles, trends, clinic news
- `/blog/[slug]` → Dynamic blog article page
- `/contact` → Contact form + booking request
- `/privacy`, `/terms`, `/cookies` → Legal pages (mandatory for GDPR)

---

## 3. Home Page Sections
- **Header / Navbar**
    - Logo
    - Navigation menu
    - Topbar: address, phone (click-to-call), email, social icons
    - CTA button: *Book Appointment*

- **Hero Section**
    - High-end imagery (clinic, luxury aesthetic mood)
    - Headline: “Rediscover Your Beauty with World-Class Medical Aesthetics in Barcelona.”
    - Subheadline: “Excellence, Innovation, Personalized Care.”
    - CTA buttons: *Book Appointment* / *Explore Treatments*

- **About the Clinic**
    - Short intro about exclusivity and luxury.
    - CTA: *Meet Our Experts*.

- **Featured Treatments**
    - 4–6 cards with photo, short description, and link to detail page.
    - Example: Facial Aesthetics, Body Contouring, Skin Treatments, Rejuvenation.

- **Why Choose Us**
    - Icons + text: Experienced Doctors, Luxury Facilities, Cutting-edge Technology, Personalized Care.

- **Testimonials**
    - Carousel or grid of patient reviews.
    - Pull data dynamically from Supabase.

- **Doctors Section**
    - Grid of doctor cards (photo, specialization, link to full profile).

- **Contact & Booking**
    - Map embed (Google Maps).
    - Contact info (address, phone, email).
    - Booking/contact form powered by Supabase.

- **Footer**
    - Quick links (pages, treatments, contact).
    - Social media.
    - Opening hours.
    - Legal links (Privacy, Terms, Cookies).

---

## 4. Supabase Integration
- **Database schema**
    - `treatments`: id, title, slug, category, description, content, image_url
    - `doctors`: id, name, specialization, bio, image_url
    - `testimonials`: id, name, text, image_url, approved (bool)
    - `blog_posts`: id, title, slug, content, image_url, created_at
    - `contacts`: id, name, email, phone, treatment_interest, message, created_at

- **APIs / Features**
    - Fetch content dynamically via Supabase (treatments, doctors, blog, testimonials).
    - Secure form submission (contact/appointments saved in Supabase).
    - Admin access (future enhancement) for CRUD management.

---

## 5. UI & Styling
- **Framework**: Tailwind CSS (fast, responsive design).
- **Design Language**:
    - Colors: white, beige, gold, muted blue/green (luxury palette).
    - Typography:
        - Headers: serif (luxury feel).
        - Body: clean sans-serif (modern readability).
    - Imagery: high-res clinic interiors, beauty treatments, happy clients.
    - Animations: subtle fade-ins, smooth scroll.

---

## 6. Functionality
- **Contact Form** (Next.js API Route + Supabase storage)
    - Fields: Name, Email, Phone, Preferred Treatment (dropdown from `treatments`), Message.
    - Auto-save to Supabase `contacts` table.
    - Send email notification (via Supabase Functions or external SMTP).

- **Testimonials**
    - Dynamic from Supabase with moderation flag (`approved = true`).

- **SEO**
    - Next.js `next-seo` for structured metadata.
    - OpenGraph and Twitter Cards for social sharing.
    - Optimized slugs for treatments/blog.

- **Performance**
    - Image optimization via Next.js `<Image />`.
    - ISR (Incremental Static Regeneration) for treatments/blog.

- **Internationalization (i18n)**
    - At least: Spanish, Catalan, English.
    - Use `next-intl` or `next-i18next`.

- **Security & Compliance**
    - SSL via Vercel.
    - GDPR cookie consent banner.
    - Privacy & terms pages.

---

## 7. Future Enhancements
- Online appointment booking system (integrate with Supabase or third-party like Calendly).
- Admin dashboard for managing treatments, testimonials, and blog posts.
- Loyalty programs / membership area (Supabase auth).
- WhatsApp chat widget.
- Before/after gallery with filters.

---

## 8. Call-to-Actions
- **Primary CTA**: *Book Appointment* (visible in hero, header, treatments).
- **Secondary CTA**: *Explore Treatments*, *Meet Our Experts*.
- Contact CTA repeated across sections.

---

## 9. Deployment & Hosting
- **Hosting**: Vercel.
- **Database & Auth**: Supabase.
- **CMS-like behavior**: Content fetched dynamically via Supabase tables.
- **CI/CD**: GitHub → Vercel auto-deploy.  
