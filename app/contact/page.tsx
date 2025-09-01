'use client'
import type { Metadata } from 'next'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Contact & Booking | Barcelona Aesthetics',
  description: 'Request appointments or ask questions — we respond within one business day.',
}

export default function ContactPage() {
  const [pending, setPending] = useState(false)
  const [ok, setOk] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setOk(null)
    setErr(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) })
      if (!res.ok) throw new Error(await res.text())
      setOk('Request received. We will contact you soon.')
      e.currentTarget.reset()
    } catch (e: any) {
      setErr(e?.message ?? 'Something went wrong')
    } finally {
      setPending(false)
    }
  }

  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Contact & Booking</h1>
      <p className="text-gray-700 mb-4">We respond within one business day. Fields marked * are required.</p>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        <input name="name" placeholder="Name *" className="border p-3 rounded" required aria-required />
        <input name="email" placeholder="Email *" type="email" className="border p-3 rounded" required aria-required />
        <input name="phone" placeholder="Phone" className="border p-3 rounded" />
        <input name="treatment_interest" placeholder="Preferred Treatment" className="border p-3 rounded" />
        <textarea name="message" placeholder="Message" className="border p-3 rounded md:col-span-2" rows={5} />
        <button disabled={pending} className="md:col-span-2 rounded bg-gold text-white px-4 py-2">{pending ? 'Sending…' : 'Send'}</button>
      </form>
      {ok && <p className="text-green-700 mt-3">{ok}</p>}
      {err && <p className="text-red-700 mt-3">{err}</p>}
    </div>
  )
}
