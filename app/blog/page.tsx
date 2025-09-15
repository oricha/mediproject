import Link from 'next/link'
import { listBlogPostsPage } from '@/lib/db'

export const revalidate = 600

export const metadata = {
  title: 'Clinic Blog | Barcelona Aesthetics',
  description: 'Trends, research, and news from our clinic in Barcelona.',
}

export default async function BlogPage({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Math.max(1, Number(searchParams?.page ?? 1))
  const pageSize = 6
  const { items: posts, count } = await listBlogPostsPage(page, pageSize)
  const totalPages = Math.max(1, Math.ceil(count / pageSize))
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Clinic Blog</h1>
      <div className="space-y-4">
        {posts.map((p) => (
          <article key={p.id} className="border rounded-xl p-5">
            <h2 className="text-xl font-medium">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <div className="text-xs text-gray-500">{new Date(p.created_at).toLocaleDateString()}</div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Link
          href={`/blog?page=${Math.max(1, page - 1)}`}
          aria-disabled={page <= 1}
          className={`rounded-md border px-3 py-1 ${page <= 1 ? 'pointer-events-none opacity-50' : ''}`}
        >
          Prev
        </Link>
        <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>
        <Link
          href={`/blog?page=${Math.min(totalPages, page + 1)}`}
          aria-disabled={page >= totalPages}
          className={`rounded-md border px-3 py-1 ${page >= totalPages ? 'pointer-events-none opacity-50' : ''}`}
        >
          Next
        </Link>
      </div>
    </div>
  )
}
