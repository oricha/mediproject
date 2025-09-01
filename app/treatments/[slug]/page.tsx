import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getTreatmentBySlug, listTreatments } from '@/lib/db'
import { ServiceJsonLd } from '@/components/StructuredData'

export const revalidate = 600

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  try {
    const treatments = await listTreatments()
    return treatments.map(t => ({ slug: t.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const treatment = await getTreatmentBySlug(params.slug)
    if (!treatment) return { title: 'Treatment not found' }
    return {
      title: `${treatment.title} | Barcelona Aesthetics`,
      description: treatment.description ?? undefined,
    }
  } catch {
    return { title: 'Treatment | Barcelona Aesthetics' }
  }
}

export default async function TreatmentDetail({ params }: Props) {
  const treatment = await getTreatmentBySlug(params.slug)
  if (!treatment) return notFound()
  return (
    <article className="prose max-w-none">
      <h1 className="font-serif text-3xl mb-2">{treatment.title}</h1>
      {treatment.description && <p className="text-gray-700">{treatment.description}</p>}
      {treatment.content && <div className="mt-4 whitespace-pre-wrap">{treatment.content}</div>}
      <ServiceJsonLd
        name={treatment.title}
        description={treatment.description}
        url={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/treatments/${treatment.slug}`}
        image={treatment.image_url}
      />
    </article>
  )
}
