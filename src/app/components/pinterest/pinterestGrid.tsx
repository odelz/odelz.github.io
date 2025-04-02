'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import pinsData from '@public/data/pins.json'
import type { Pin } from '@/app/lib/pinterest/types'

export const PinterestGrid = () => {
  const pins = [...pinsData].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()) as Pin[]
  const pinsLength = pins.length
  const [currentPage, setCurrentPage] = useState(0)
  const pinsPerPage = 12 

  // Calculate the current page's pins
  const startIndex = currentPage * pinsPerPage
  const endIndex = startIndex + pinsPerPage
  const currentPins = pins.slice(startIndex, endIndex)

  // Handle navigation
  const handleNextPage = () => {
    if (startIndex + pinsPerPage < pinsLength) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className={"p-2 rounded-full text-pink-500 hover:text-pink-700"}
          >
            {currentPage === 0 ? '' :<IoChevronBackOutline size={24} />}
          </button>
          <button
            onClick={handleNextPage}
            disabled={startIndex + pinsPerPage >= pins.length}
            className={"p-2 rounded-full text-pink-500 hover:text-pink-700"}
          >
            {startIndex + pinsPerPage >= pins.length ? '' :<IoChevronForwardOutline size={24} />}
          </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {currentPins.map((pin: Pin) => (
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
  </div>
  )
}