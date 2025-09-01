import Link from 'next/link'

export function Navbar() {
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-serif tracking-wide">Barcelona Aesthetics</Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/treatments">Treatments</Link>
          <Link href="/doctors">Doctors</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="rounded-md bg-gold px-3 py-1 text-white">Book</Link>
        </nav>
      </div>
    </header>
  )
}

