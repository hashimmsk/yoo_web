"use client";

import { useState, useMemo } from "react";
import type { Publication } from "@/data/publications";

interface PublicationListProps {
  publications: Publication[];
  bookChapters?: Publication[];
}

export default function PublicationList({ publications, bookChapters }: PublicationListProps) {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("all");

  const years = useMemo(() => {
    const yrs = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
    return yrs;
  }, [publications]);

  const filtered = useMemo(() => {
    let list = publications;
    if (yearFilter !== "all") {
      list = list.filter((p) => p.year === Number(yearFilter));
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.journal.toLowerCase().includes(q)
      );
    }
    return list.sort((a, b) => b.year - a.year);
  }, [publications, query, yearFilter]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by title, author, or journal..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
          />
        </div>
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="px-4 py-2.5 border border-border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
        >
          <option value="all">All Years</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-muted mb-6">
        Showing {filtered.length} of {publications.length} publications
      </p>

      {/* Publication list */}
      <ol className="space-y-6">
        {filtered.map((pub, i) => (
          <li key={`${pub.title}-${pub.year}`} className="group">
            <div className="flex gap-3">
              <span className="shrink-0 mt-0.5 text-xs font-mono text-navy-400 w-6 text-right">
                {i + 1}.
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-navy-900 leading-snug">
                  {pub.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{pub.authors}</p>
                <p className="mt-0.5 text-sm">
                  <span className="italic text-navy-600">{pub.journal}</span>
                  {pub.volume && <>, {pub.volume}</>}
                  {pub.pages && <>, {pub.pages}</>}
                  <span className="text-muted"> ({pub.year})</span>
                </p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline font-medium"
                    >
                      DOI
                    </a>
                  )}
                  {pub.pmid && (
                    <a
                      href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline font-medium"
                    >
                      PubMed
                    </a>
                  )}
                  {pub.pmcid && (
                    <a
                      href={`https://www.ncbi.nlm.nih.gov/pmc/articles/${pub.pmcid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline font-medium"
                    >
                      PMC
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Book chapters */}
      {bookChapters && bookChapters.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-bold text-navy-900 mb-6">Book Chapters</h3>
          <ol className="space-y-4">
            {bookChapters.map((pub) => (
              <li key={pub.title} className="flex gap-3">
                <span className="shrink-0 mt-0.5 text-xs font-mono text-navy-400 w-6 text-right">
                  1.
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-navy-900">{pub.title}</h4>
                  <p className="mt-0.5 text-sm text-muted">{pub.authors}</p>
                  <p className="mt-0.5 text-sm italic text-navy-600">
                    {pub.journal}{pub.pages && `, pp. ${pub.pages}`} ({pub.year})
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
