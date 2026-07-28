/**
 * Minimal GitHub REST client for opening a photo PR from the admin portal.
 *
 * The Vercel runtime filesystem is read-only, so instead of writing files and
 * committing locally, the upload route creates a branch + commit + PR via the API.
 * Merging the PR triggers Vercel's normal deploy, so the photo enters the exact
 * same static, committed pipeline as laptop-added photos.
 *
 * Requires env: GITHUB_TOKEN (Contents R/W + Pull requests R/W on the repo),
 * GITHUB_REPO ("owner/name"), GITHUB_DEFAULT_BRANCH (defaults to "main").
 */
const API = 'https://api.github.com';

/** A text file (committed as utf-8) or a binary file (committed as base64). */
export type CommitFile =
    | { path: string; text: string }
    | { path: string; data: Buffer };

type Env = { token: string; repo: string; base: string };

function readEnv(): Env {
    const token = process.env.GITHUB_TOKEN;
    const repo = process.env.GITHUB_REPO;
    const base = process.env.GITHUB_DEFAULT_BRANCH || 'main';
    if (!token || !repo) {
        throw new Error(
            'GitHub not configured: set GITHUB_TOKEN and GITHUB_REPO.',
        );
    }
    return { token, repo, base };
}

async function gh<T>(
    env: Env,
    path: string,
    init?: { method?: string; body?: unknown },
): Promise<T> {
    const res = await fetch(`${API}${path}`, {
        method: init?.method ?? 'GET',
        headers: {
            Authorization: `Bearer ${env.token}`,
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'User-Agent': 'evanferreira-admin-portal',
            'Content-Type': 'application/json',
        },
        body: init?.body ? JSON.stringify(init.body) : undefined,
        cache: 'no-store',
    });
    if (!res.ok) {
        const detail = await res.text().catch(() => '');
        throw new Error(`GitHub ${init?.method ?? 'GET'} ${path} → ${res.status}: ${detail}`);
    }
    return res.json() as Promise<T>;
}

export type OpenPRResult = { url: string; number: number };

export async function openPhotoPR(opts: {
    branch: string;
    title: string;
    body: string;
    files: CommitFile[];
}): Promise<OpenPRResult> {
    const env = readEnv();
    const { repo } = env;

    // 1. Base branch head + its tree.
    const ref = await gh<{ object: { sha: string } }>(
        env,
        `/repos/${repo}/git/ref/heads/${env.base}`,
    );
    const baseSha = ref.object.sha;
    const baseCommit = await gh<{ tree: { sha: string } }>(
        env,
        `/repos/${repo}/git/commits/${baseSha}`,
    );

    // 2. A blob per file (binary → base64, text → utf-8).
    const tree = [];
    for (const file of opts.files) {
        const blob =
            'data' in file
                ? { content: file.data.toString('base64'), encoding: 'base64' }
                : { content: file.text, encoding: 'utf-8' };
        const created = await gh<{ sha: string }>(env, `/repos/${repo}/git/blobs`, {
            method: 'POST',
            body: blob,
        });
        tree.push({
            path: file.path,
            mode: '100644' as const,
            type: 'blob' as const,
            sha: created.sha,
        });
    }

    // 3. Tree → commit → branch ref.
    const newTree = await gh<{ sha: string }>(env, `/repos/${repo}/git/trees`, {
        method: 'POST',
        body: { base_tree: baseCommit.tree.sha, tree },
    });
    const commit = await gh<{ sha: string }>(env, `/repos/${repo}/git/commits`, {
        method: 'POST',
        body: { message: opts.title, tree: newTree.sha, parents: [baseSha] },
    });
    await gh(env, `/repos/${repo}/git/refs`, {
        method: 'POST',
        body: { ref: `refs/heads/${opts.branch}`, sha: commit.sha },
    });

    // 4. Open the PR.
    const pr = await gh<{ html_url: string; number: number }>(
        env,
        `/repos/${repo}/pulls`,
        {
            method: 'POST',
            body: {
                title: opts.title,
                head: opts.branch,
                base: env.base,
                body: opts.body,
            },
        },
    );
    return { url: pr.html_url, number: pr.number };
}
