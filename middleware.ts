// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check maintenance mode from environment
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';
  
  // Your secret admin path - change this to match your folder name
  const secretAdminPath = '/secure-maintenance-xyz789';
  
  // Always allow your secret admin page and API routes
  const isAdminPath = 
    pathname === secretAdminPath ||
    pathname.startsWith('/api/toggle-maintenance') ||
    pathname.startsWith('/api/maintenance-status');
  
  // Always allow static assets and maintenance page itself
  const isExcludedPath = 
    pathname === '/maintenance' ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico' ||
    pathname.includes('.');
  
  // Redirect to maintenance page if mode is ON and not an excluded path
  if (isMaintenanceMode && !isExcludedPath && !isAdminPath) {
    const maintenanceUrl = new URL('/maintenance', request.url);
    return NextResponse.redirect(maintenanceUrl);
  }
  
  // Redirect from maintenance to home if mode is OFF
  if (!isMaintenanceMode && pathname === '/maintenance') {
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};