/* eslint-disable @typescript-eslint/no-unused-vars */
// app/api/maintenance-status/route.ts
import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function GET() {
  try {
    const value = await redis.get('maintenanceMode');
    // Ensure we return a proper boolean
    const isEnabled = value === true || value === 'true';
    return NextResponse.json({ maintenanceMode: isEnabled });
  } catch (error) {
    return NextResponse.json({ maintenanceMode: false });
  }
}