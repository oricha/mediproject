import { listDoctors } from '@/lib/db'
import { DoctorCard } from '@/components/DoctorCard'

export const revalidate = 600

export const metadata = {
  title: 'Our Doctors | Barcelona Aesthetics',
  description: 'Meet our experts in medical aesthetics in Barcelona.',
}

export default async function DoctorsPage() {
  const doctors = await listDoctors()
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Our Doctors</h1>
      <p className="text-gray-700 mb-6">Meet our experts in medical aesthetics.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctors.map(d => (
          <DoctorCard key={d.id} d={d} />
        ))}
      </div>
    </div>
  )
}
