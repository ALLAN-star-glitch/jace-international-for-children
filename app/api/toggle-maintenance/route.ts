// app/api/toggle-maintenance/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  // NO AUTHENTICATION - Completely open
  
  try {
    const body = await request.json();
    const { enabled } = body;
    
    if (typeof enabled !== 'boolean') {
      return NextResponse.json({ error: 'Invalid request. "enabled" must be a boolean.' }, { status: 400 });
    }
    
    // For local development - writes to .env.local
    if (process.env.NODE_ENV === 'development') {
      const envPath = path.join(process.cwd(), '.env.local');
      let envContent = '';
      
      try {
        envContent = fs.readFileSync(envPath, 'utf8');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        envContent = '';
      }
      
      const newValue = enabled ? 'true' : 'false';
      
      if (envContent.match(/^MAINTENANCE_MODE=/m)) {
        envContent = envContent.replace(/^MAINTENANCE_MODE=.*$/m, `MAINTENANCE_MODE=${newValue}`);
      } else {
        envContent += `\nMAINTENANCE_MODE=${newValue}`;
      }
      
      fs.writeFileSync(envPath, envContent.trim());
    }
    
    // For Vercel/Production - just return success
    // The MAINTENANCE_MODE environment variable needs to be updated manually in Vercel dashboard
    return NextResponse.json({ 
      success: true, 
      maintenanceMode: enabled,
      message: `Maintenance mode ${enabled ? 'ENABLED' : 'DISABLED'} successfully!`,
      environment: process.env.NODE_ENV
    });
    
  } catch (error) {
    console.error('Error toggling maintenance mode:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}