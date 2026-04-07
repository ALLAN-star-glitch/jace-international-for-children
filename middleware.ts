// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  let isMaintenanceMode = false;
  try {
    const value = await redis.get('maintenanceMode');
    // Handle both boolean and string values
    isMaintenanceMode = value === true || value === 'true';
  } catch (error) {
    console.error('Redis error:', error);
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