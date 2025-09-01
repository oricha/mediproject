import { MetadataRoute } from 'next'
import { listBlogPosts, listTreatments } from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/treatments',
    '/doctors',
    '/about',
    '/testimonials',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
  ].map(p => ({ url: `${base}${p}`, changefreq: 'weekly', priority: 0.7 }))

  const [treatments, posts] = await Promise.all([listTreatments(), listBlogPosts()])

  const dynamicRoutes: MetadataRoute.Sitemap = [
    ...treatments.map(t => ({ url: `${base}/treatments/${t.slug}`, changefreq: 'weekly', priority: 0.8 })),
    ...posts.map(p => ({ url: `${base}/blog/${p.slug}`, changefreq: 'weekly', priority: 0.6 })),
  ]

  return [...staticRoutes, ...dynamicRoutes]
}

