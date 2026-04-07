// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get maintenance mode from Redis
  let isMaintenanceMode = false;
  try {
    const value = await redis.get('maintenanceMode');
    isMaintenanceMode = value === true;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // Fallback to environment variable if Redis fails
    isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';
  }
  
  const secretAdminPath = '/secure-maintenance-xyz789';
  
  const isAllowedPath = 
    pathname === secretAdminPath ||
    pathname === '/maintenance' ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico' ||
    pathname.includes('.');
  
  if (isMaintenanceMode && !isAllowedPath) {
    const maintenanceUrl = new URL('/maintenance', request.url);
    return NextResponse.redirect(maintenanceUrl);
  }
  
  if (!isMaintenanceMode && pathname === '/maintenance') {
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};