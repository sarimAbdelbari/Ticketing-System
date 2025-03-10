import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of public routes that don't require authentication
const publicRoutes = ['/login', '/register', '/forgot-password'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));
  
  // Add your authentication logic here
  // For now, we'll just let all requests through
  // In a real app, you would check for authentication tokens/cookies
  
  return NextResponse.next();
}

export const config = {
  // Specify which paths the middleware should run on
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};