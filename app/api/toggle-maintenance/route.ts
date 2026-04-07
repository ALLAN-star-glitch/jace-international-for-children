// app/api/toggle-maintenance/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  // IMPORTANT: Add authentication in production!
  // For now, this works in development
  if (process.env.NODE_ENV === 'production') {
    // Add your auth check here
    // Example: Check for admin session or API key
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_API_KEY}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }
  
  try {
    const body = await request.json();
    const { enabled } = body;
    
    if (typeof enabled !== 'boolean') {
      return NextResponse.json({ error: 'Invalid request. "enabled" must be a boolean.' }, { status: 400 });
    }
    
    const envPath = path.join(process.cwd(), '.env.local');
    let envContent = '';
    
    // Read existing .env.local
    try {
      envContent = fs.readFileSync(envPath, 'utf8');
    } catch (err) {
      // File doesn't exist, create empty content
      envContent = '';
    }
    
    // Update or add MAINTENANCE_MODE line
    const newValue = enabled ? 'true' : 'false';
    
    if (envContent.match(/^MAINTENANCE_MODE=/m)) {
      // Replace existing line
      envContent = envContent.replace(/^MAINTENANCE_MODE=.*$/m, `MAINTENANCE_MODE=${newValue}`);
    } else {
      // Add new line
      envContent += `\nMAINTENANCE_MODE=${newValue}`;
    }
    
    // Write back to file
    fs.writeFileSync(envPath, envContent.trim());
    
    // Note: In production with Vercel/Railway, you might need a different approach
    // Consider using a database or Redis instead of file system
    
    return NextResponse.json({ 
      success: true, 
      maintenanceMode: enabled,
      message: `Maintenance mode ${enabled ? 'enabled' : 'disabled'}`
    });
    
  } catch (error) {
    console.error('Error toggling maintenance mode:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}