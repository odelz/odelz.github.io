'use client'

import Link from 'next/link'
import { useState } from 'react'

export const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 font-inter">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="text-sm text-pink-400 dark:text-gray-300 hover:underline font-inter"
        >
          Privacy Policy
        </button>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-pink-400">Privacy Policy</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-pink-300 hover:text-pink-400 transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p className="mb-4">
              This website does not collect personal data. For more details about our privacy practices, please visit:
            </p>
            <Link 
              href="/privacy"
              className="text-pink-600 hover:underline"
            >
              Full Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}