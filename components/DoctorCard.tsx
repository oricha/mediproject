import Image from 'next/image'
import { type Doctor } from '@/lib/db'
import { Card } from './Card'

export function DoctorCard({ d }: { d: Doctor }) {
  return (
    <Card>
      {d.image_url && (
        <Image src={d.image_url} alt={d.name} width={400} height={280} className="rounded-md mb-3 object-cover h-48 w-full" />
      )}
      <div className="font-medium">{d.name}</div>
      {d.specialization && <div className="text-sm text-gray-600">{d.specialization}</div>}
      {d.bio && <p className="text-sm text-gray-700 mt-2 line-clamp-3">{d.bio}</p>}
    </Card>
  )}

