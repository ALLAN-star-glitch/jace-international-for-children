// app/api/toggle-maintenance/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { enabled } = body;
    
    // Store as boolean, not string
    await redis.set('maintenanceMode', enabled === true);
    
    // Verify what was stored
    const verify = await redis.get('maintenanceMode');
    console.log('Stored:', enabled, 'Verified:', verify);
    
    return NextResponse.json({ 
      success: true, 
      maintenanceMode: enabled,
      verified: verify
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const value = await redis.get('maintenanceMode');
    const isEnabled = value === true || value === 'true';
    return NextResponse.json({ maintenanceMode: isEnabled });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ maintenanceMode: false });
  }
} 