import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { Card } from '@/components/Card'
import { BeforeAfter } from '@/components/BeforeAfter'
import { SocialGrid } from '@/components/SocialGrid'
import { listBlogPosts, listDoctors } from '@/lib/db'
import Link from 'next/link'

export default async function HomePage() {
  const [posts, doctors] = await Promise.all([
    listBlogPosts().then(p => p.slice(0, 3)),
    listDoctors().then(d => d.slice(0, 3)),
  ])
  return (
    <div className="space-y-16">
      <Hero />

      {/* Services & Treatments */}
      <section>
        <SectionHeading>Servicios & Tratamientos</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            'Botox',
            'Lifting Facial',
            'Liposucción',
            'Skin Care',
            'Rejuvenecimiento Facial',
            'Abdominoplastia',
          ].map((t) => (
            <Card key={t} className="transition hover:shadow-gold-sm">
              <div className="font-medium">{t}</div>
              <div className="text-sm text-gray-600">Cuidado premium con tecnología de vanguardia.</div>
              <div className="mt-3">
                <Link href="/treatments" className="text-sm underline">Saber más</Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Inspirational Block */}
      <section className="rounded-2xl bg-deep text-white p-10">
        <p className="text-xl md:text-2xl font-serif max-w-3xl">
          Define tu silueta, realza tu belleza, confía en los expertos.
        </p>
        <svg className="mt-6 w-48 text-gold" viewBox="0 0 200 30" fill="none" aria-hidden>
          <path d="M2 20 C 40 5, 80 35, 120 10 S 180 25, 198 12" stroke="currentColor" strokeWidth="2" />
        </svg>
      </section>

      {/* Procedures & Testimonial */}
      <section>
        <SectionHeading>Cirugía Estética & Procedimientos</SectionHeading>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {['Liposucción', 'Aumento de senos', 'Rejuvenecimiento facial', 'Abdominoplastia'].map((p) => (
            <li key={p} className="rounded-xl border p-3 bg-white">{p}</li>
          ))}
        </ul>
        <div className="mt-6">
          <Card>
            <div className="flex items-center gap-3">
              <div className="text-gold" aria-hidden>{'★★★★★'}</div>
              <div className="text-sm text-gray-600">Resultados reales, pacientes satisfechos</div>
            </div>
            <p className="mt-2 text-gray-800">“El equipo fue increíblemente profesional. Mis resultados superaron las expectativas.”</p>
          </Card>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section>
        <SectionHeading>Antes & Después</SectionHeading>
        <BeforeAfter />
      </section>

      {/* Team & Trust */}
      <section>
        <SectionHeading>El mejor equipo para cuidar de ti</SectionHeading>
        <p className="text-gray-700 mb-4">Certificaciones, experiencia y atención personalizada.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {doctors.map((d) => (
            <Card key={d.id}>
              <div className="font-medium">{d.name}</div>
              {d.specialization && <div className="text-sm text-gray-600">{d.specialization}</div>}
            </Card>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/about" className="rounded-md border px-4 py-2">Conócenos</Link>
        </div>
      </section>

      {/* Blog grid */}
      <section>
        <SectionHeading>Blog</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((p) => (
            <Card key={p.id}>
              <div className="font-medium">{p.title}</div>
              <div className="mt-2">
                <Link href={`/blog/${p.slug}`} className="text-sm underline">Leer más</Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Social & Community */}
      <section>
        <SectionHeading>Comunidad</SectionHeading>
        <SocialGrid />
      </section>
    </div>
  )
}
