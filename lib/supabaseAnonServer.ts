import { createClient } from '@supabase/supabase-js'

// Server-side anon client for public reads via RLS
const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export function getSupabaseAnon() {
  if (!url || !anon) throw new Error('Missing NEXT_PUBLIC_SUPABASE_* env vars')
  return createClient(url, anon, { auth: { persistSession: false } })
}

