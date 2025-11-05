import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// Define public routes (accessible without authentication)
const publicRoutes = ['users/new', '/accounts', '/login', '/signup', '/forgot-password', '/']; // Add your public routes here

// Define private routes (require authentication)
const privateRoutes = ['/dashboard', '/profile', '/settings']; // Add your private routes here

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the route is a public route
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next(); // Allow access to public routes
  }

  // Check for authentication (e.g., a token in a cookie or header)
  const isAuthenticated = req.cookies.has('auth_token'); // Replace with your actual authentication check

  // If the route is private and the user is not authenticated, redirect to login
  if (privateRoutes.includes(pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL('/accounts', req.url));
  }

  // If authenticated or if the route is public, proceed
  return NextResponse.next();
}

// Configure the matcher to specify which paths the middleware should run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Apply middleware to all routes except API routes, static files, and favicon
};