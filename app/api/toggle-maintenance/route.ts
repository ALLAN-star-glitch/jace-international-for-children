// app/api/toggle-maintenance/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

// Initialize Redis with your environment variables
const redis = Redis.fromEnv();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { enabled } = body;
    
    if (typeof enabled !== 'boolean') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
    
    // Save to Redis
    await redis.set('maintenanceMode', enabled);
    
    return NextResponse.json({ 
      success: true, 
      maintenanceMode: enabled,
      message: `Maintenance mode ${enabled ? 'ENABLED' : 'DISABLED'} successfully!`
    });
    
  } catch (error) {
    console.error('Error toggling maintenance mode:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const maintenanceMode = await redis.get('maintenanceMode');
    return NextResponse.json({ maintenanceMode: maintenanceMode === true });
  } catch (error) {
    return NextResponse.json({ maintenanceMode: false });
  }
}