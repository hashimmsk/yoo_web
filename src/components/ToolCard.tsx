import Link from "next/link";
import type { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
  featured?: boolean;
}

export default function ToolCard({ tool, featured }: ToolCardProps) {
  const className = `group block rounded-xl border border-border bg-white p-6 transition-all hover:shadow-lg hover:border-accent/30 ${
    featured ? "sm:p-8" : ""
  }`;

  const content = (
    <>
      <div className="mb-2">
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
          {tool.category}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-navy-900 group-hover:text-accent transition-colors">
        {tool.name}
        {tool.isExternal && (
          <svg
            className="inline-block ml-1.5 h-4 w-4 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        {featured ? tool.description : tool.shortDescription}
      </p>
      {featured && (
        <ul className="mt-4 space-y-1.5">
          {tool.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-navy-700">
              <svg className="h-4 w-4 mt-0.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-sm font-medium text-accent group-hover:underline">
        {tool.isExternal ? "Visit Application" : "Open Tool"} &rarr;
      </div>
    </>
  );

  if (tool.isExternal) {
    return (
      <a
        href={tool.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={tool.href} className={className}>
      {content}
    </Link>
  );
}
