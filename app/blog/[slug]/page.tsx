import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getBlogPostBySlug, listBlogPosts } from '@/lib/db'
import { ArticleJsonLd } from '@/components/StructuredData'

export const revalidate = 600

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  try {
    const posts = await listBlogPosts()
    return posts.map(p => ({ slug: p.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getBlogPostBySlug(params.slug)
    if (!post) return { title: 'Post not found' }
    return { title: `${post.title} | Barcelona Aesthetics` }
  } catch {
    return { title: 'Blog | Barcelona Aesthetics' }
  }
}

export default async function BlogPost({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) return notFound()
  return (
    <article className="prose max-w-none">
      <h1 className="font-serif text-3xl mb-2">{post.title}</h1>
      {post.content && <div className="mt-4 whitespace-pre-wrap">{post.content}</div>}
      <ArticleJsonLd
        headline={post.title}
        datePublished={post.created_at}
        url={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog/${post.slug}`}
        image={post.image_url}
      />
    </article>
  )
}
