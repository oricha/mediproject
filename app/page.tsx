import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { Card } from '@/components/Card'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <section>
        <SectionHeading>Featured Treatments</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Facial Aesthetics","Body Contouring","Skin Rejuvenation"].map((t)=>(
            <Card key={t}>
              <div className="font-medium">{t}</div>
              <div className="text-sm text-gray-600">Premium care with cutting-edge technology.</div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
