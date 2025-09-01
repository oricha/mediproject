import { type Testimonial as T } from '@/lib/db'
import { Card } from './Card'

export function Testimonial({ t }: { t: T }) {
  return (
    <Card>
      <p className="text-gray-800">“{t.text}”</p>
      <footer className="mt-2 text-sm text-gray-600">— {t.name}</footer>
    </Card>
  )
}

