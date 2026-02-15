import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
    // Style unordered lists
    ul: ({ children, ...props }) => (
        <ul className="list-disc list-inside ml-4 space-y-1 my-6" {...props}>
            {children}
        </ul>
    ),

    // Style ordered lists
    ol: ({ children, ...props }) => (
        <ol className="list-decimal list-inside ml-4 space-y-1 my-6" {...props}>
            {children}
        </ol>
    ),

    // Style list items
    li: ({ children, ...props }) => (
        <li className="lg:text-base/7 text-sm/7" {...props}>
            {children}
        </li>
    ),

    // Style headings
    h1: ({ children, ...props }) => (
        <h1
            className="mt-10 -mb-2 lg:text-base text-sm/7 text-fg-tertiary"
            {...props}
        >
            {children}
        </h1>
    ),

    h2: ({ children, ...props }) => (
        <h2
            className="mt-8 -mb-2 lg:text-sm text-xs/7 text-fg-tertiary"
            {...props}
        >
            {children}
        </h2>
    ),

    // Style paragraphs
    p: ({ children, ...props }) => (
        <p className="my-6 lg:text-base/7 text-sm/7 font-light" {...props}>
            {children}
        </p>
    ),

    // Style bold text
    strong: ({ children, ...props }) => (
        <strong className="font-semibold" {...props}>
            {children}
        </strong>
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
