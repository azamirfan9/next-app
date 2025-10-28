import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('auth_token')?.value;
  if(!userToken) {
     //return NextResponse.redirect(new URL('/accounts',request.url))
  }
  else {
   //return NextResponse.redirect(new URL('/accounts', request.url))
  }
}
export const config = {
  //matcher: '/users',
  matcher: ['/users/:path*', '/profile/:path*', '/settings/:path*', '/login'], 
  // Example: all paths under /dashboard, /profile, /settings, and /login
}