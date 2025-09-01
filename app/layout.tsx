import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { OrgJsonLd } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Barcelona Aesthetics Clinic',
  description: 'Luxury medical aesthetics in Barcelona — treatments, experts, and bookings.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container-page py-10">
          {children}
        </main>
        <Footer />
        <OrgJsonLd />
      </body>
    </html>
  )
}
