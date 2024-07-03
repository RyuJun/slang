import { NextResponse, NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const puuid = url.pathname.split('/').pop();
  // const puuid = request.pathname.split('/').pop();
  // return NextResponse.redirect(new URL('/home', request.url));
}

export const config = {
  matcher: ['/detail/:path*'],
};
