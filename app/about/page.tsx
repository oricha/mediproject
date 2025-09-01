import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About the Clinic | Barcelona Aesthetics',
  description:
    'Exclusive treatments in luxury facilities with personalized care and experienced doctors in Barcelona.',
}

export default function AboutPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">About the Clinic</h1>
      <p className="text-gray-700 max-w-3xl">We offer exclusive treatments in luxury facilities with personalized care, backed by experienced doctors and cutting-edge technology.</p>
    </div>
  )
}
