# Database Schema (Supabase)

This app uses Supabase. Apply `schema.sql` in the Supabase SQL editor to create tables and policies.

## Tables
- `treatments`: id, title, slug (unique), category, description, content, image_url
- `doctors`: id, name, specialization, bio, image_url
- `testimonials`: id, name, text, image_url, approved (bool)
- `blog_posts`: id, title, slug (unique), content, image_url, created_at
- `contacts`: id, name, email, phone, treatment_interest, message, created_at

## Policies
- Public can read: `treatments`, `doctors`, `blog_posts`, and only approved `testimonials`.
- Anyone can insert into `contacts`; only privileged roles can read.

## Usage
- Client reads with `NEXT_PUBLIC_SUPABASE_*` keys.
- API route `/api/contact` inserts into `contacts` using `SUPABASE_SERVICE_ROLE_KEY` (server only).

