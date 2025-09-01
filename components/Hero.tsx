import Link from 'next/link'

export function Hero() {
  return (
    <section className="rounded-2xl bg-beige p-10">
      <h1 className="font-serif text-3xl md:text-5xl mb-3">Rediscover Your Beauty</h1>
      <p className="text-gray-700 max-w-2xl">Excellence, innovation, and personalized care in Barcelona. Explore world-class medical aesthetics in a luxurious environment.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/contact" className="rounded-md bg-gold px-4 py-2 text-white">Book Appointment</Link>
        <Link href="/treatments" className="rounded-md border px-4 py-2">Explore Treatments</Link>
      </div>
    </section>
  )
}

