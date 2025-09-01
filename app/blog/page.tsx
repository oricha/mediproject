import Link from 'next/link'
import { listBlogPosts } from '@/lib/db'

export const revalidate = 600

export const metadata = {
  title: 'Clinic Blog | Barcelona Aesthetics',
  description: 'Trends, research, and news from our clinic in Barcelona.',
}

export default async function BlogPage() {
  const posts = await listBlogPosts()
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Clinic Blog</h1>
      <div className="space-y-4">
        {posts.map(p => (
          <article key={p.id} className="border rounded-xl p-5">
            <h2 className="text-xl font-medium">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <div className="text-xs text-gray-500">{new Date(p.created_at).toLocaleDateString()}</div>
          </article>
        ))}
      </div>
    </div>
  )
}
