'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import pinsData from '@public/data/pins.json'

interface PinImage {
    width: number
    height: number
    url: string
  }
  
  interface PinMedia {
    media_type: string
    images: {
      '150x150': PinImage
      '400x300': PinImage
      '600x': PinImage
      '1200x': PinImage
    }
  }
  
  interface Pin {
    id: string
    link: string
    title: string
    description: string
    dominant_color: string
    alt_text: string
    media: PinMedia
  }
  
  interface PinterestResponse {
    items: Pin[]
    bookmark: string
  }



export const PinterestCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const pins = pinsData


  const nextSlide = () => {
    if (!pins) return
    setCurrentIndex((prevIndex) => 
      prevIndex === pins.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    if (!pins) return
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? pins.length - 1 : prevIndex - 1
    )
  }


  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-lg aspect-video relative">
        
        {pins && (
          <>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {pins.map((pin : Pin) => (
                <div key={pin.id} className="flex-shrink-0 w-full">
                   <a 
                    href={pin.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative aspect-video"
                  >
                    <Image
                      src={pin.media.images['600x'].url}
                      alt={pin.alt_text || pin.description}
                      fill
                      className="object-cover"
                      style={{ backgroundColor: pin.dominant_color }}
                    />
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-2 rounded-full"
              aria-label="Previous slide"
            >
              <IoChevronBackOutline className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-2 rounded-full"
              aria-label="Next slide"
            >
              <IoChevronForwardOutline className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-4">
              {pins.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-pink-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}