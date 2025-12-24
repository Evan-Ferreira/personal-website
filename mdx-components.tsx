import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
    // Style unordered lists
    ul: ({ children, ...props }) => (
        <ul className="list-disc list-inside ml-4 space-y-1" {...props}>
            {children}
        </ul>
    ),

    // Style list items
    li: ({ children, ...props }) => (
        <li className="text-sm" {...props}>
            {children}
        </li>
    ),
    // Style headings
    h1: ({ children, ...props }) => (
        <h1 className="text-xs text-fg-tertiary mb-4" {...props}>
            {children}
        </h1>
    ),

    // Style paragraphs
    p: ({ children, ...props }) => (
        <p className="mb-4 text-sm" {...props}>
            {children}
        </p>
    ),
};

export function useMDXComponents(): MDXComponents {
    return components;
}
