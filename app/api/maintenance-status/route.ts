// app/api/maintenance-status/route.ts
import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

// Initialize Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    // Actually read from Redis
    const value = await redis.get('maintenanceMode');
    console.log('Redis value in status API:', value); // Debug log
    
    // Convert to boolean properly
    const isEnabled = value === true || value === 'true';
    
    return NextResponse.json({ 
      maintenanceMode: isEnabled,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error reading from Redis:', error);
    return NextResponse.json({ maintenanceMode: false, error: 'Redis error' });
  }
}