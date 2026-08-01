import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SESSION_COOKIE, isSessionAuthed } from '@/lib/auth/session';

// Gate the admin portal + its API. Login routes are excluded from the matcher
export const config = {
    matcher: [
        '/admin',
        '/admin/((?!login(?:/|$)).*)',
        '/api/admin/((?!login(?:/|$)).*)',
    ],
};

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const token = request.cookies.get(SESSION_COOKIE)?.value;
    const authed = await isSessionAuthed(token);

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
