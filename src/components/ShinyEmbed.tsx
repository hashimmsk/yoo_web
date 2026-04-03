"use client";

import { useState } from "react";

interface ShinyEmbedProps {
  url: string;
  title: string;
  fallbackMessage?: string;
}

export default function ShinyEmbed({ url, title, fallbackMessage }: ShinyEmbedProps) {
  const [loading, setLoading] = useState(true);
  const isPlaceholder = url.includes("your-account");

  if (isPlaceholder) {
    return (
      <div className="rounded-xl border-2 border-dashed border-navy-200 bg-navy-50 p-8 sm:p-12 text-center">
        <svg className="mx-auto h-12 w-12 text-navy-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h3 className="text-lg font-semibold text-navy-800 mb-2">Application Pending Deployment</h3>
        <p className="text-sm text-navy-600 max-w-md mx-auto leading-relaxed">
          {fallbackMessage ||
            `The ${title} application will be available here once deployed to shinyapps.io. Update the URL in src/data/tools.ts after deployment.`}
        </p>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl border border-border overflow-hidden bg-white" style={{ minHeight: "700px" }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface z-10">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-accent border-t-transparent" />
            <p className="mt-3 text-sm text-muted">Loading {title}...</p>
          </div>
        </div>
      )}
      <iframe
        src={url}
        title={title}
        className="w-full border-0"
        style={{ height: "800px", minHeight: "700px" }}
        onLoad={() => setLoading(false)}
        allow="clipboard-write"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
      />
    </div>
  );
}
