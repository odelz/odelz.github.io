'use client'

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
            <p>
              This website is a personal portfolio that does not collect any personal data.
              However, it uses the following third-party services:
            </p>
            
            <ul className="list-disc pl-5 space-y-1">
              <li>GitHub Pages for hosting</li>
              <li>Google Fonts for typography</li>
            </ul>
            
            <p>
              These services may collect anonymous usage data. For more information,
              please refer to their respective privacy policies.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500">
              Last updated: March 7, 2024
            </p>
          </div>
        </div>
      )}
    </div>
  )
}