import { getSupabaseAnon } from './supabaseAnonServer'

export type Treatment = {
  id: number
  title: string
  slug: string
  category: string | null
  description: string | null
  content: string | null
  image_url: string | null
}

export type Doctor = {
  id: number
  name: string
  specialization: string | null
  bio: string | null
  image_url: string | null
}

export type Testimonial = {
  id: number
  name: string
  text: string
  image_url: string | null
  approved: boolean
}

export type BlogPost = {
  id: number
  title: string
  slug: string
  content: string | null
  image_url: string | null
  created_at: string
}

export async function listTreatments(): Promise<Treatment[]> {
  const supabase = getSupabaseAnon()
  const { data, error } = await supabase.from('treatments').select('*').order('title')
  if (error) throw error
  return data as Treatment[]
}

export async function getTreatmentBySlug(slug: string): Promise<Treatment | null> {
  const supabase = getSupabaseAnon()
  const { data, error } = await supabase.from('treatments').select('*').eq('slug', slug).maybeSingle()
  if (error) throw error
  return data as Treatment | null
}

export async function listDoctors(): Promise<Doctor[]> {
  const supabase = getSupabaseAnon()
  const { data, error } = await supabase.from('doctors').select('*').order('name')
  if (error) throw error
  return data as Doctor[]
}

export async function listApprovedTestimonials(): Promise<Testimonial[]> {
  const supabase = getSupabaseAnon()
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('approved', true)
    .order('id', { ascending: false })
  if (error) throw error
  return data as Testimonial[]
}

export async function listBlogPosts(): Promise<BlogPost[]> {
  const supabase = getSupabaseAnon()
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data as BlogPost[]
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = getSupabaseAnon()
  const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).maybeSingle()
  if (error) throw error
  return data as BlogPost | null
}

