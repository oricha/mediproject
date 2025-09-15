"use client"
import { useId, useState } from 'react'
import Image from 'next/image'

type Props = {
  beforeSrc?: string
  afterSrc?: string
  altBefore?: string
  altAfter?: string
}

export function BeforeAfter({ beforeSrc, afterSrc, altBefore = 'Antes', altAfter = 'Después' }: Props) {
  const id = useId()
  const [pos, setPos] = useState(50)

  return (
    <div className="relative w-full max-w-3xl" aria-labelledby={`ba-${id}-label`}>
      <div id={`ba-${id}-label`} className="sr-only">Comparativa antes y después</div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border">
        {/* After */}
        {afterSrc ? (
          <Image src={afterSrc} alt={altAfter} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gray-200" aria-hidden />
        )}
        {/* Before overlay */}
        <div className="absolute inset-0" style={{ width: `${pos}%` }}>
          {beforeSrc ? (
            <Image src={beforeSrc} alt={altBefore} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 bg-gray-300" aria-hidden />
          )}
        </div>
        {/* Divider/Handle */}
        <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="h-full w-0.5 bg-white shadow-lg" aria-hidden />
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-gold shadow-gold-sm border border-white" aria-hidden />
        </div>
      </div>
      <label htmlFor={`range-${id}`} className="mt-3 block text-sm text-gray-700">
        Arrastra la perilla o usa las flechas para comparar
      </label>
      <input
        id={`range-${id}`}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(parseInt(e.target.value))}
        className="mt-2 w-full"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pos}
        aria-label="Control de comparación antes/después"
      />
    </div>
  )
}

