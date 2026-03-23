import ReactMarkdown from 'react-markdown';

interface SafeMarkdownProps {
  content: string;
  className?: string;
}

/**
 * SafeMarkdown component - Safely renders markdown content without using dangerouslySetInnerHTML.
 * This prevents XSS vulnerabilities when rendering user-influenced or dynamic content.
 * 
 * @param content - The markdown string to render
 * @param className - Optional CSS classes for styling
 */
const SafeMarkdown = ({ content, className = "" }: SafeMarkdownProps) => {
  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <ReactMarkdown
        components={{
          // Custom heading styles matching the original design
          h1: ({ children }) => (
            <h1 className="text-base font-bold text-foreground mt-4 mb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-sm font-bold text-foreground mt-3 mb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-sm font-semibold text-foreground mt-3 mb-1">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="whitespace-pre-line mb-2">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-inherit">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default SafeMarkdown;
