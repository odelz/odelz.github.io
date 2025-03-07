'use client'

import { useState } from 'react'
import { IoRefreshCircle, IoSaveOutline } from 'react-icons/io5';

interface Color {
  hex: string;
  name: string;
}
const adjectives = [
  'Sleepy', 'Dancing', 'Tired', 'Disco', 'Weighted',
  'Wobbly', 'Silly lil', 'Sparkly', 'Wibbly', 'Blobby', 'Legiterally',
  'Curious', 'nitpicky'
]

const nouns = [
  'Bingbong', 'Muffin', 'Griffin', 'Despair', 'Bean',
  'Pickle Rick', 'Knight', 'Blergh', 'Lark', 'Pollypocket', 'Goose', 'Blob', 'blipblop'
]

export const ColorPalette = () => {
  const [colors, setColors] = useState<Color[]>([])
  const [savedPalettes, setSavedPalettes] = useState<Color[][]>([])

  const generateRandomColor = (): Color => {
    const hex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]

    return {
      hex,
      name: `${randomAdjective} ${randomNoun}`

    }
  }

  const generatePalette = () => {
    const newColors = Array(5).fill(null).map(() => generateRandomColor())
    setColors(newColors)
  }

  const savePalette = () => {
    setSavedPalettes([...savedPalettes, colors])
  }

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex)
  }

  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Color Palette Generator</h2>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="aspect-square rounded cursor-pointer transition-transform hover:scale-105"
            style={{ backgroundColor: color.hex }}
            onClick={() => copyToClipboard(color.hex)}
          >
            <div className="p-2 bg-black/50 text-white text-xs mt-auto">
              <span>{color.hex}</span>
              <br />
              <span className="text-xs opacity-75">{color.name}</span>

            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-row gap-2'>
        <button
          onClick={generatePalette}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 mr-2 flex items-center gap-2 hover:bg-blue-600 transition-colors"
        >
          
          <span>Generate New Palette</span>
          <IoRefreshCircle className="text-xl" />
        </button>
        {colors.length > 0 && (
          <button
            onClick={savePalette}
            className="bg-green-500 text-white px-4 py-2 rounded mb-4 mr-2 flex items-center gap-2 hover:bg-green-600 transition-colors"
          >
            <span>Save</span>
            <IoSaveOutline className="text-xl" />

          </button>
        )}
      </div>

      {savedPalettes.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Saved Palettes</h3>
          <div className="space-y-4">
            {savedPalettes.map((palette, i) => (
              <div key={i} className="grid grid-cols-5 gap-2">
                {palette.map((color, j) => (
                  <div
                    key={j}
                    className="aspect-square rounded"
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}