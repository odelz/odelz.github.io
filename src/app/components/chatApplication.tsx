'use client'

import Script from 'next/script'
import { useState, useRef, useEffect } from 'react'

declare global {
  interface Window {
    puter: {
      ai: {
        chat: (message: string) => Promise<string>
      }
      print: (message: string) => void
    }
  }
}

interface ChatMessage {
  text: string
  isUser: boolean
}

export const ChatApplication = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || !isScriptLoaded) return

    const userMessage = inputValue.trim()
    setInputValue('')
    setMessages(prev => [...prev, { text: userMessage, isUser: true }])
    setIsLoading(true)

    try {
      const response = await window.puter.ai.chat(userMessage)
      setMessages(prev => [...prev, { text: response, isUser: false }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { 
        text: 'Sorry, I encountered an error. Please try again.',
        isUser: false 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Script
        src="https://js.puter.com/v2/"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <div className="w-full max-w-md mx-auto">
        <div className="rounded-lg shadow-lg bg-gray-50 overflow-hidden">
          <div className="h-[400px] overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${msg.isUser ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    msg.isUser 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left">
                <div className="inline-block p-3 rounded-lg bg-gray-200">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded"
                disabled={!isScriptLoaded || isLoading}
              />
              <button
                type="submit"
                disabled={!isScriptLoaded || isLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}