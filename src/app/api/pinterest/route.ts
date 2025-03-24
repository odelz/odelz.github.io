export const dynamic = 'force-static'
export const revalidate = false

import { NextResponse } from 'next/server'
import { generatePinterestData } from '@/app/lib/pinterest/fetcher'

export async function GET() {
  try {
    await generatePinterestData()
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate Pinterest data' },
      { status: 500 }
    )
  }
}