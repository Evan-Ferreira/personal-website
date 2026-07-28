/**
 * Stateless admin session cookie.
 *
 * The cookie holds `<expiry>.<HMAC(expiry)>` signed with ADMIN_COOKIE_SECRET.
 * The passcode itself is never stored in the cookie. Uses Web Crypto so the same
 * helper works in `proxy.ts` and in Node route handlers.
 */
export const SESSION_COOKIE = 'admin_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days, in seconds

const encoder = new TextEncoder();

function toBase64Url(bytes: Uint8Array): string {
    let bin = '';
    for (const b of bytes) bin += String.fromCharCode(b);
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(value: string): Uint8Array {
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    const pad = normalized.length % 4 ? 4 - (normalized.length % 4) : 0;
    const bin = atob(normalized + '='.repeat(pad));
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
    return crypto.subtle.importKey(
        'raw',
        encoder.encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign', 'verify'],
    );
}

export async function createSessionToken(secret: string): Promise<string> {
    const expiry = Date.now() + SESSION_MAX_AGE * 1000;
    const payload = toBase64Url(encoder.encode(String(expiry)));
    const key = await hmacKey(secret);
    const sig = new Uint8Array(
        await crypto.subtle.sign('HMAC', key, encoder.encode(payload)),
    );
    return `${payload}.${toBase64Url(sig)}`;
}

export async function verifySessionToken(
    token: string,
    secret: string,
): Promise<boolean> {
    const [payload, sig] = token.split('.');
    if (!payload || !sig) return false;

    let valid = false;
    try {
        const key = await hmacKey(secret);
        const signature = fromBase64Url(sig);
        valid = await crypto.subtle.verify(
            'HMAC',
            key,
            signature.buffer.slice(
                signature.byteOffset,
                signature.byteOffset + signature.byteLength,
            ) as ArrayBuffer,
            encoder.encode(payload),
        );
    } catch {
        return false;
    }
    if (!valid) return false;

    const expiry = Number(new TextDecoder().decode(fromBase64Url(payload)));
    return Number.isFinite(expiry) && expiry > Date.now();
}
