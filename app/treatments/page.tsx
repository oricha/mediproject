import Link from 'next/link'
import { listTreatments } from '@/lib/db'

export const revalidate = 600

export const metadata = {
  title: 'Treatments | Barcelona Aesthetics',
  description: 'Explore our catalog of world-class medical aesthetic treatments in Barcelona.',
}

export default async function TreatmentsPage() {
  const treatments = await listTreatments()
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">All Treatments</h1>
      <p className="text-gray-700 mb-6">Browse our catalog and select a treatment to learn more.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {treatments.map(t => (
          <Link key={t.id} href={`/treatments/${t.slug}`} className="border rounded-xl p-5 hover:shadow-sm">
            <div className="font-medium">{t.title}</div>
            {t.description && <div className="text-sm text-gray-600 line-clamp-2">{t.description}</div>}
          </Link>
        ))}
      </div>
    </div>
  )
}
