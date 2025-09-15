import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agendar consulta | Barcelona Aesthetics',
  description: 'Reserva una consulta con nuestro equipo médico de confianza.',
}

export default function BookPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Agendar consulta</h1>
      <p className="text-gray-700 mb-4">Déjanos tus datos y preferencias y te contactaremos en un día hábil.</p>
      <Link href="/contact" className="rounded-md bg-gold text-white px-4 py-2">Ir al formulario</Link>
    </div>
  )
}

