import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import PublicationList from "@/components/PublicationList";
import { publications, bookChapters } from "@/data/publications";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed publications and book chapters by Dr. Wonsuk Yoo spanning clinical trial design, cancer biostatistics, and epidemiology.",
};

export default function PublicationsPage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Publications"
        subtitle="Peer-reviewed journal articles, book chapters, and other scholarly works."
      />

      <div className="mb-8 p-4 rounded-lg bg-surface border border-border text-sm text-navy-700">
        A complete and up-to-date list is available on{" "}
        <a
          href={EXTERNAL_LINKS.pubmed}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline font-medium"
        >
          PubMed
        </a>
        .
      </div>

      <PublicationList publications={publications} bookChapters={bookChapters} />
    </PageWrapper>
  );
}
