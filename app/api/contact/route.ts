import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabaseServer'
import { z } from 'zod'

// naive in-memory rate limit per IP (server instance only)
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const hits = new Map<string, number[]>()

function rateLimit(ip: string) {
  const now = Date.now()
  const arr = hits.get(ip) ?? []
  const recent = arr.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length <= RATE_LIMIT_MAX
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const Schema = z.object({
      name: z.string().min(2).max(100),
      email: z.string().email().max(200),
      phone: z.string().max(50).optional().nullable(),
      treatment_interest: z.string().max(120).optional().nullable(),
      message: z.string().max(2000).optional().nullable(),
    })
    const parsed = Schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'validation_failed', issues: parsed.error.flatten() }, { status: 400 })
    }
    const payload = parsed.data

    // basic rate limit
    const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const { error } = await supabaseServer.from('contacts').insert(payload)
    if (error) throw error

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'unknown error' }, { status: 500 })
  }
}
