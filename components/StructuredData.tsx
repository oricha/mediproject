export function OrgJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Barcelona Aesthetics Clinic',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Barcelona',
      addressCountry: 'ES',
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function ServiceJsonLd({
  name,
  description,
  url,
  image,
}: {
  name: string
  description?: string | null
  url: string
  image?: string | null
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description: description || undefined,
    url,
    image: image || undefined,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Barcelona Aesthetics Clinic',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function ArticleJsonLd({
  headline,
  datePublished,
  url,
  image,
}: {
  headline: string
  datePublished: string
  url: string
  image?: string | null
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    datePublished,
    mainEntityOfPage: url,
    image: image || undefined,
    publisher: { '@type': 'Organization', name: 'Barcelona Aesthetics Clinic' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
