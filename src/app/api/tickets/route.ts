import json from '../../../data/ticket.json'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Return the tickets data from the JSON file
    return NextResponse.json(json, { status: 200 })
  } catch (error) {
    // Handle any errors that might occur
    console.error('Error fetching tickets:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tickets' },
      { status: 500 }
    )
  }
}