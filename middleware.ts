// middleware.ts (in project root)
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if maintenance mode is enabled
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';
  
  // Get the requested path
  const { pathname } = request.nextUrl;
  
  console.log(`[Middleware] Path: ${pathname}, Maintenance Mode: ${isMaintenanceMode}`); // For debugging
  
  // ALWAYS allow these paths (critical for Next.js to function)
  const isExcludedPath = 
    pathname === '/maintenance' ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico' ||
    pathname.includes('.') || // Static files like .jpg, .png, .css, .js
    pathname === '/api/toggle-maintenance'; // Allow toggle API if you have it
  
  // If maintenance is ON and path is NOT excluded → redirect to maintenance
  if (isMaintenanceMode && !isExcludedPath) {
    console.log(`[Middleware] Redirecting ${pathname} to /maintenance`);
    const maintenanceUrl = new URL('/maintenance', request.url);
    return NextResponse.redirect(maintenanceUrl);
  }
  
  // If maintenance is OFF and user is on maintenance page → redirect to home
  if (!isMaintenanceMode && pathname === '/maintenance') {
    console.log(`[Middleware] Redirecting from /maintenance to /`);
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl);
  }
  
  return NextResponse.next();
}

// Apply to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};