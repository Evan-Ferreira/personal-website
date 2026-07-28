import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SESSION_COOKIE, verifySessionToken } from '@/lib/auth/session';

// Gate the admin portal + its API. The login page and login endpoint stay public
// so you can actually authenticate. (Next 16 renamed `middleware` → `proxy`.)
export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*'],
};

const PUBLIC_PATHS = new Set(['/admin/login', '/api/admin/login']);

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (PUBLIC_PATHS.has(pathname)) {
        return NextResponse.next();
    }

    const token = request.cookies.get(SESSION_COOKIE)?.value;
    const secret = process.env.ADMIN_COOKIE_SECRET ?? '';
    const authed = token && secret ? await verifySessionToken(token, secret) : false;

    if (authed) {
        return NextResponse.next();
    }

    if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/admin/login';
    loginUrl.search = '';
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
}
