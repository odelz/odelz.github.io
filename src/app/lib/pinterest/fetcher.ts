import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'
import type { Pin, PinterestResponse } from './types'
import { FEATURES } from './config'

export async function fetchPinterestPins(): Promise<Pin[]> {
  const token = process.env.PINTEREST_ACCESS_TOKEN?.trim()
  if (!token) {
    throw new Error('Pinterest access token not found')
  }
  try {
    const response = await fetch('https://api.pinterest.com/v5/user_account', {
      method: 'GET',
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
    
    const pinsResponse = await fetch('https://api.pinterest.com/v5/pins', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    if (!pinsResponse.ok) {
      const errorData = await pinsResponse.json()
      throw new Error(`Pinterest API pins error: ${JSON.stringify(errorData, null, 2)}`)
    }
    console.log(pinsResponse);
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
  const pinsFilePath = join(dataDir, 'pins.json')

  mkdirSync(dataDir, { recursive: true })

  console.log('📍 Fetching Pinterest pins...')
  const newPins = await fetchPinterestPins()
  // Check if the pins.json file exists
  if (existsSync(pinsFilePath)) {
    console.log('📂 Checking existing cached pins...')
    const cachedPins = JSON.parse(readFileSync(pinsFilePath, 'utf-8')) as Pin[]

    // Compare the last fetched pin with the first stored pin
    const lastFetchedPin = newPins[0]
    const firstStoredPin = cachedPins[0]

    if (lastFetchedPin.id === firstStoredPin.id) {
      console.log('✅ No new pins found. Skipping update.')
      return
    }

    // Find the index where new pins start
    const newPinsStartIndex = newPins.findIndex(
      (pin) => pin.id === firstStoredPin.id
    )

    if (newPinsStartIndex !== -1) {
      console.log('✨ New pins found. Appending to existing data...')
      const pinsToAppend = newPins.slice(0, newPinsStartIndex)
      const updatedPins = [...pinsToAppend, ...cachedPins]

      writeFileSync(pinsFilePath, JSON.stringify(updatedPins, null, 2))
      console.log(`✅ Appended ${pinsToAppend.length} new pins to the cache.`)
    } else {
      console.log('✨ Completely new set of pins found. Replacing cache...')
      const updatedPins = [...newPins, ...cachedPins]
      writeFileSync(pinsFilePath, JSON.stringify(updatedPins, null, 2))
      console.log(`✅ Saved ${newPins.length} new pins.`)
    }
  } else {
    // If no cache exists, save the new pins
    console.log('📂 No cached pins found. Saving new pins...')
    writeFileSync(pinsFilePath, JSON.stringify(newPins, null, 2))
    console.log(`✅ Saved ${newPins.length} Pinterest pins`)
  }
  writeFileSync(
    join(dataDir, 'pins.json'),
    JSON.stringify(newPins, null, 2)
  )
  console.log(`✅ Saved ${newPins.length} Pinterest pins`)
}