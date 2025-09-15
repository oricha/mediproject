import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { OrgJsonLd } from '@/components/StructuredData'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Barcelona Aesthetics Clinic',
  description: 'Luxury medical aesthetics in Barcelona — treatments, experts, and bookings.',
  openGraph: {
    title: 'Barcelona Aesthetics Clinic',
    description: 'Luxury medical aesthetics in Barcelona — treatments, experts, and bookings.',
    type: 'website',
    url: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
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
