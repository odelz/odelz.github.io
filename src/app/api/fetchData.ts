import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import type { Pin, PinterestResponse } from '../components/pinterest/types'
import { FEATURES } from '../config'

export async function fetchPinterestPins(): Promise<Pin[]> {
  const token = process.env.PINTEREST_ACCESS_TOKEN?.trim()
  if (!token) {
    throw new Error('Pinterest access token not found')
  }
  try {
    const response = await fetch('https://api.pinterest.com/v5/pins', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      console.error('Pinterest API Authentication Error:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        error: errorData
      })
      throw new Error(`Pinterest API auth error: ${JSON.stringify(errorData, null, 2)}`)
    }
    // If auth works, fetch pins
    const pinsResponse = await fetch('https://api.pinterest.com/v5/boards/me/pins', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    
    if (!pinsResponse.ok) {
      const errorData = await pinsResponse.json()
      throw new Error(`Pinterest API pins error: ${JSON.stringify(errorData, null, 2)}`)
    }
    const data: PinterestResponse = await pinsResponse.json()
    return data.items || []
  } catch (error) {
    console.error('Error fetching Pinterest pins:', error)
    return []
  }
}

export async function generatePinterestData() {
  if (!FEATURES.PINTEREST_ENABLED) {
    console.log('📍 Pinterest integration disabled')
    return
  }
  const dataDir = join(process.cwd(), 'public', 'data')
  mkdirSync(dataDir, { recursive: true })

  console.log('📍 Fetching Pinterest pins...')
  const pins = await fetchPinterestPins()
  writeFileSync(
    join(dataDir, 'pins.json'),
    JSON.stringify(pins, null, 2)
  )
  console.log(`✅ Saved ${pins.length} Pinterest pins`)
}