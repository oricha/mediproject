import Link from 'next/link'

export function Hero() {
  return (
    <section className="rounded-2xl p-10 bg-gradient-to-br from-beige to-pure">
      <h1 className="font-serif text-3xl md:text-5xl mb-3">Your Skin, Our Passion</h1>
      <p className="text-gray-700 max-w-2xl">Confianza, innovación médica y cuidado personalizado en un entorno de lujo.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/book" className="rounded-md bg-gold px-4 py-2 text-white shadow-gold-sm hover:shadow-gold-md transition">Agendar consulta</Link>
        <Link href="/treatments" className="rounded-md border px-4 py-2 hover:shadow-gold-sm transition">Saber más</Link>
      </div>
    </section>
  )
}
