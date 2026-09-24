import { NextRequest, NextResponse } from 'next/server';

function unauthorized(message: string) {
  return new NextResponse(message, {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="LayeR Admin", charset="UTF-8"',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

export function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // This editor only previews local configuration; it cannot persist changes.
  // Keep it off the public deployment until a persistent CMS and session auth exist.
  if (process.env.VERCEL_ENV === 'production') {
    return new NextResponse('Not found', {
      status: 404,
      headers: { 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    return unauthorized('Admin authentication is not configured.');
  }

  const authHeader = request.headers.get('authorization');

  if (authHeader?.startsWith('Basic ')) {
    try {
      const credentials = atob(authHeader.slice(6));
      const separatorIndex = credentials.indexOf(':');

      if (separatorIndex !== -1) {
        const username = credentials.slice(0, separatorIndex);
        const password = credentials.slice(separatorIndex + 1);

        if (username === expectedUsername && password === expectedPassword) {
          return NextResponse.next();
        }
      }
    } catch { /* Malformed Basic credentials are unauthorized. */ }
  }

  return unauthorized('Authentication required for local image manager.');
}

export const config = {
  matcher: '/admin/:path*',
};
