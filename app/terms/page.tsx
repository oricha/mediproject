import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Barcelona Aesthetics',
}

export default function TermsPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Terms & Conditions</h1>
      <p className="text-gray-700">This is a placeholder. Add legal terms before launch.</p>
    </div>
  )
}
