import { createHash, timingSafeEqual } from 'node:crypto';
import { NextResponse } from 'next/server';
import {
    createSessionToken,
    SESSION_COOKIE,
    SESSION_MAX_AGE,
} from '@/lib/auth/session';

export const runtime = 'nodejs';

/** Constant-time string comparison (hash to equal length so timingSafeEqual is safe). */
function safeEqual(a: string, b: string): boolean {
    const ha = createHash('sha256').update(a).digest();
    const hb = createHash('sha256').update(b).digest();
    return timingSafeEqual(ha, hb);
}

export async function POST(request: Request) {
    const passcode = process.env.ADMIN_PASSCODE;
    const secret = process.env.ADMIN_COOKIE_SECRET;
    if (!passcode || !secret) {
        return NextResponse.json(
            { error: 'Admin auth is not configured.' },
            { status: 500 },
        );
    }

    let submitted = '';
    const contentType = request.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
        const body = (await request.json().catch(() => ({}))) as {
            passcode?: unknown;
        };
        submitted = typeof body.passcode === 'string' ? body.passcode : '';
    } else {
        const form = await request.formData();
        submitted = String(form.get('passcode') ?? '');
    }

    if (!submitted || !safeEqual(submitted, passcode)) {
        return NextResponse.json({ error: 'Invalid passcode.' }, { status: 401 });
    }

    const token = await createSessionToken(secret);
    const res = NextResponse.json({ ok: true });
    res.cookies.set(SESSION_COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: SESSION_MAX_AGE,
    });
    return res;
}

/** Log out. */
export async function DELETE() {
    const res = NextResponse.json({ ok: true });
    res.cookies.set(SESSION_COOKIE, '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 0,
    });
    return res;
}
