import Link from 'next/link'

export function SocialGrid() {
  // Fallback: static placeholders to avoid external API usage
  const items = Array.from({ length: 6 }).map((_, i) => ({ id: i }))
  return (
    <div>
      <div className="mb-3 text-sm text-gray-600">Síguenos en Instagram <span className="font-medium">#RoyalClinic</span></div>
      <div className="grid grid-cols-3 gap-2">
        {items.map((it) => (
          <div key={it.id} className="aspect-square rounded-xl bg-gray-200" aria-hidden />
        ))}
      </div>
      <div className="mt-4">
        <Link href="https://instagram.com/royalclinic" className="text-sm underline" target="_blank">@royalclinic</Link>
      </div>
    </div>
  )
}

