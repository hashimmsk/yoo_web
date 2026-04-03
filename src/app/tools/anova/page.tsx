import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import ShinyEmbed from "@/components/ShinyEmbed";
import { tools } from "@/data/tools";

const tool = tools.find((t) => t.id === "anova")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.shortDescription,
};

export default function AnovaPage() {
  return (
    <PageWrapper>
      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/tools" className="hover:text-accent transition-colors">
          Tools
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy-900 font-medium">{tool.name}</span>
      </nav>

      <div className="mb-8">
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-3">
          {tool.category}
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
          {tool.name}
        </h1>
        <p className="mt-3 text-base text-navy-700 leading-relaxed max-w-3xl">
          {tool.description}
        </p>
      </div>

      {/* Features */}
      <div className="mb-8 rounded-lg bg-surface border border-border p-5">
        <h2 className="text-sm font-semibold text-navy-900 mb-3">Features</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {tool.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-navy-700"
            >
              <svg
                className="h-4 w-4 mt-0.5 text-accent shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Embedded app */}
      <ShinyEmbed url={tool.iframeUrl!} title={tool.name} />
    </PageWrapper>
  );
}
