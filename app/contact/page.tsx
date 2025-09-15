import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Booking | Barcelona Aesthetics',
  description: 'Request appointments or ask questions — we respond within one business day.',
}

export default function ContactPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Contact & Booking</h1>
      <p className="text-gray-700 mb-4">We respond within one business day. Fields marked * are required.</p>
      <ContactForm />
    </div>
  )
}
