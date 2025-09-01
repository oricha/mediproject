import { listApprovedTestimonials } from '@/lib/db'
import { Testimonial } from '@/components/Testimonial'

export const revalidate = 600

export const metadata = {
  title: 'Testimonials | Barcelona Aesthetics',
  description: 'Real patient stories curated for quality and authenticity.',
}

export default async function TestimonialsPage() {
  const testimonials = await listApprovedTestimonials()
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map(t => (
          <Testimonial key={t.id} t={t} />
        ))}
      </div>
    </div>
  )
}
