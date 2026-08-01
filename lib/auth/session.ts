import { getIronSession, unsealData, type SessionOptions } from 'iron-session';
import { cookies } from 'next/headers';

export type AdminSession = { authed?: boolean };

export const SESSION_COOKIE = 'admin_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days, in seconds

export function sessionOptions(): SessionOptions {
    const password = process.env.ADMIN_COOKIE_SECRET;
    if (!password) throw new Error('ADMIN_COOKIE_SECRET is not set');
    return {
        password,
        cookieName: SESSION_COOKIE,
        ttl: SESSION_MAX_AGE,
        cookieOptions: {
            httpOnly: true,
            secure:
                process.env.NEXT_PUBLIC_ENV !== 'dev' &&
                process.env.NEXT_PUBLIC_ENV !== 'staging',
            sameSite: 'strict',
            path: '/',
            maxAge: SESSION_MAX_AGE,
        },
    };
}

/** For route handlers / server components (uses next/headers cookies()). */
export async function getSession() {
    return getIronSession<AdminSession>(await cookies(), sessionOptions());
}

/** Proxy-safe read: decrypt the raw cookie value with Web Crypto only. */
export async function isSessionAuthed(
    rawCookie: string | undefined,
): Promise<boolean> {
    if (!rawCookie) return false;
    try {
        const data = await unsealData<AdminSession>(rawCookie, {
            password: process.env.ADMIN_COOKIE_SECRET ?? '',
            ttl: SESSION_MAX_AGE,
        });
        return !!data.authed;
    } catch {
        return false;
    }
}
