import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest) {
  // Try to get the session token cookie
  const sessionToken = request.cookies.get('next-auth.session-token')

  // Check if we're already on the login page
  const isLoginPage = request.nextUrl.pathname === '/login'

  // If there's no session token and we're not already on the login page, redirect to login
  if (!sessionToken && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  console.log(sessionToken?.value, 'tokennnn')

  // If there is a session token and we're on the login page, redirect to dashboard
  if (sessionToken && isLoginPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // For all other cases, allow the request to proceed
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/login/username'],
}
