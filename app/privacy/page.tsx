import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Barcelona Aesthetics',
}

export default function PrivacyPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Privacy Policy</h1>
      <p className="text-gray-700">This is a placeholder. Add GDPR-compliant content before launch.</p>
    </div>
  )
}
