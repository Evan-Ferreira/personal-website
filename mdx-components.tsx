import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
    // Style unordered lists
    ul: ({ children, ...props }) => (
        <ul className="list-disc list-inside ml-4 space-y-1 my-2" {...props}>
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
        <h1 className="text-xs text-fg-tertiary mb-2 mt-6" {...props}>
            {children}
        </h1>
    ),

    // Style paragraphs
    p: ({ children, ...props }) => (
        <p className="mb-4 text-sm" {...props}>
            {children}
        </p>
    ),

    // Style blockquotes
    blockquote: ({ children, ...props }) => (
        <blockquote
            className="border-l-3 border-gray-300 pl-3 my-3 italic text-sm"
            {...props}
        >
            {children}
        </blockquote>
    ),
};

export function useMDXComponents(): MDXComponents {
    return components;
}
