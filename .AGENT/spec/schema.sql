-- Supabase schema for Barcelona Aesthetics Clinic
-- Run this in your Supabase SQL editor

create table if not exists treatments (
  id bigint generated always as identity primary key,
  title text not null,
  slug text not null unique,
  category text,
  description text,
  content text,
  image_url text
);

create table if not exists doctors (
  id bigint generated always as identity primary key,
  name text not null,
  specialization text,
  bio text,
  image_url text
);

create table if not exists testimonials (
  id bigint generated always as identity primary key,
  name text not null,
  text text not null,
  image_url text,
  approved boolean not null default false
);

create table if not exists blog_posts (
  id bigint generated always as identity primary key,
  title text not null,
  slug text not null unique,
  content text,
  image_url text,
  created_at timestamp with time zone not null default now()
);

create table if not exists contacts (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  phone text,
  treatment_interest text,
  message text,
  created_at timestamp with time zone not null default now()
);

-- Recommended Row Level Security (adjust policies to your needs)
alter table testimonials enable row level security;
create policy if not exists "Public read approved testimonials" on testimonials for select using (approved = true);

alter table treatments enable row level security;
create policy if not exists "Public read treatments" on treatments for select using (true);

alter table doctors enable row level security;
create policy if not exists "Public read doctors" on doctors for select using (true);

alter table blog_posts enable row level security;
create policy if not exists "Public read posts" on blog_posts for select using (true);

alter table contacts enable row level security;
-- Inserts should be allowed from anon users, but rows are not selectable
create policy if not exists "Anon insert contacts" on contacts for insert with check (true);
create policy if not exists "No select for anon" on contacts for select using (false);

