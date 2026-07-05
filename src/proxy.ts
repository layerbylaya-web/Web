import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const expectedPassword = process.env.ADMIN_PASSWORD || 'local-only-password';
  const authHeader = request.headers.get('authorization');

  if (authHeader?.startsWith('Basic ')) {
    const credentials = atob(authHeader.slice(6));
    const [, password] = credentials.split(':');

    if (password === expectedPassword) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Authentication required for local image manager.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="LayeR Admin", charset="UTF-8"',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

export const config = {
  matcher: '/admin/:path*',
};
