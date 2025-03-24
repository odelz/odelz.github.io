'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import pinsData from '@public/data/pins.json'
import type { Pin } from '@/app/lib/pinterest/types'

export const PinterestGrid = () => {
  const pins = pinsData as Pin[] 

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
    {pins.map((pin: Pin) => (
      <div
        key={pin.id}
        className="flex items-center justify-center w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden"
        style={{ backgroundColor: pin.dominant_color }}
      >
        <a
          href={pin.link || undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full h-full"
        >
          <Image
            src={pin.media.images['600x'].url}
            alt={pin.alt_text || pin.description}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            className="object-contain w-auto h-auto"
          />
        </a>
      </div>
    ))}
  </div>
  )
}