import { createHash, timingSafeEqual } from 'node:crypto';
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth/session';

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

    const body = await request.json();

    if (!body?.passcode || !safeEqual(body.passcode, passcode)) {
        return NextResponse.json(
            { error: 'Invalid passcode.' },
            { status: 401 },
        );
    }

    const session = await getSession();
    session.authed = true;
    await session.save();
    return NextResponse.json({ ok: true });
}

/** Log out. */
export async function DELETE() {
    const session = await getSession();
    session.destroy();
    return NextResponse.json({ ok: true });
}
