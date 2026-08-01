import Link from 'next/link';

export default function AdminPage() {
    return (
        <div className="flex flex-col mt-2 gap-4">
            <nav className="flex flex-col gap-2">
                <Link
                    href="/admin/photos"
                    className="text-fg-secondary hover:text-fg-primary active:text-fg-primary transition-all ease-in-out duration-150"
                >
                    Add a /life photo →
                </Link>
            </nav>
        </div>
    );
}
