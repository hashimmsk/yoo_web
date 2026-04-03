import Link from "next/link";
import { profile } from "@/data/profile";
import { tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import SectionHeading from "@/components/SectionHeading";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-accent-light text-sm font-medium uppercase tracking-wider mb-3">
              {profile.department}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {profile.name}
              <span className="text-navy-400">, {profile.credentials}</span>
            </h1>
            <p className="mt-2 text-lg text-navy-300">
              {profile.title} &middot; {profile.institution}
            </p>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-navy-200 max-w-2xl">
              {profile.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/research"
                className="inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-colors"
              >
                View Research
              </Link>
              <Link
                href="/publications"
                className="inline-flex items-center px-5 py-2.5 border border-navy-600 text-navy-200 hover:bg-navy-800 text-sm font-medium rounded-lg transition-colors"
              >
                Publications
              </Link>
              <a
                href={EXTERNAL_LINKS.pubmed}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 border border-navy-600 text-navy-200 hover:bg-navy-800 text-sm font-medium rounded-lg transition-colors"
              >
                PubMed
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research highlights */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Research Focus"
            subtitle="Bridging biostatistics, clinical trial design, and machine learning to advance cancer research and public health."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Clinical Trial Design",
                desc: "Developing innovative Phase 0, Phase 1, and Phase 2 trial designs with expertise in neuro-oncology and glioblastoma studies.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 3h1a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                ),
              },
              {
                title: "Machine Learning & AI",
                desc: "Applying neural networks and transfer learning to historical control adjustment and predictive modeling in oncology trials.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                ),
              },
              {
                title: "Cancer Epidemiology",
                desc: "Investigating disparities in cancer incidence, HPV vaccination, and developing community-based prevention strategies.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent mb-4">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research tools */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Research Tools"
            subtitle="Interactive applications for statistical analysis and clinical trial data visualization."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "55+", label: "Peer-Reviewed Publications" },
              { value: "20+", label: "Years in Biostatistics" },
              { value: "5", label: "Funded Research Projects" },
              { value: "30+", label: "Students Mentored" },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
