import { Octokit } from '@octokit/rest';

/** Git file mode for a normal non-executable file (what `git add` uses by default). */
const GIT_FILE_MODE_NORMAL = '100644' as const;

/** A text file (committed as utf-8) or a binary file (committed as base64). */
export type CommitFile =
    | { path: string; text: string }
    | { path: string; data: Buffer };

type Env = { token: string; owner: string; repo: string; base: string };

function readEnv(): Env {
    const token = process.env.GITHUB_TOKEN;
    const fullRepo = process.env.GITHUB_REPO;
    const base = process.env.GITHUB_DEFAULT_BRANCH;
    if (!token || !fullRepo || !base) {
        throw new Error(
            'GitHub not configured: set GITHUB_TOKEN, GITHUB_REPO, and GITHUB_DEFAULT_BRANCH.',
        );
    }
    const [owner, repo] = fullRepo.split('/');
    if (!owner || !repo) {
        throw new Error('GITHUB_REPO must be in "owner/name" form.');
    }
    return { token, owner, repo, base };
}

export type OpenPRResult = { url: string; number: number };

export async function openPhotoPR(opts: {
    branch: string;
    title: string;
    body: string;
    files: CommitFile[];
}): Promise<OpenPRResult> {
    const env = readEnv();
    const { token, owner, repo, base } = env;
    const octokit = new Octokit({ auth: token });

    // 1. Base branch head + its tree.
    const { data: ref } = await octokit.git.getRef({
        owner,
        repo,
        ref: `heads/${base}`,
    });
    const baseSha = ref.object.sha;
    const { data: baseCommit } = await octokit.git.getCommit({
        owner,
        repo,
        commit_sha: baseSha,
    });

    // 2. A blob per file (binary → base64, text → utf-8).
    const tree = [];
    for (const file of opts.files) {
        const blob =
            'data' in file
                ? {
                      content: file.data.toString('base64'),
                      encoding: 'base64' as const,
                  }
                : { content: file.text, encoding: 'utf-8' as const };
        const { data: created } = await octokit.git.createBlob({
            owner,
            repo,
            ...blob,
        });
        tree.push({
            path: file.path,
            mode: GIT_FILE_MODE_NORMAL,
            type: 'blob' as const,
            sha: created.sha,
        });
    }

    // 3. Tree → commit → branch ref.
    const { data: newTree } = await octokit.git.createTree({
        owner,
        repo,
        base_tree: baseCommit.tree.sha,
        tree,
    });
    const { data: commit } = await octokit.git.createCommit({
        owner,
        repo,
        message: opts.title,
        tree: newTree.sha,
        parents: [baseSha],
    });
    await octokit.git.createRef({
        owner,
        repo,
        ref: `refs/heads/${opts.branch}`,
        sha: commit.sha,
    });

    // 4. Open the PR.
    const { data: pr } = await octokit.pulls.create({
        owner,
        repo,
        title: opts.title,
        head: opts.branch,
        base,
        body: opts.body,
    });
    return { url: pr.html_url, number: pr.number };
}
