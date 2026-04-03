import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `Academic biography and background of ${profile.name}, ${profile.title} at the ${profile.institution}.`,
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <SectionHeading title="About" subtitle={`${profile.title}, ${profile.department}`} />

      {/* Biography */}
      <section className="prose prose-slate max-w-none mb-12">
        {profile.bioParagraphs.map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-navy-800">
            {p}
          </p>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">Education</h3>
          <ul className="space-y-4">
            {profile.education.map((ed) => (
              <li key={ed.degree} className="flex gap-3">
                <div className="shrink-0 mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{ed.degree}</div>
                  <div className="text-sm text-muted">
                    {ed.institution}, {ed.year}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Research interests */}
        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">Research Interests</h3>
          <ul className="space-y-2">
            {profile.researchInterests.map((interest) => (
              <li key={interest} className="flex items-start gap-2 text-sm text-navy-800">
                <svg className="h-4 w-4 mt-0.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {interest}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Academic positions */}
      <section className="mt-12">
        <h3 className="text-xl font-bold text-navy-900 mb-4">Academic Positions</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-semibold text-navy-900 pr-4">Period</th>
                <th className="pb-3 font-semibold text-navy-900 pr-4">Role</th>
                <th className="pb-3 font-semibold text-navy-900">Institution</th>
              </tr>
            </thead>
            <tbody>
              {profile.experience.map((exp) => (
                <tr key={`${exp.role}-${exp.period}`} className="border-b border-border/50">
                  <td className="py-3 pr-4 text-muted whitespace-nowrap">{exp.period}</td>
                  <td className="py-3 pr-4 font-medium text-navy-900">{exp.role}</td>
                  <td className="py-3 text-navy-700">
                    {exp.institution}
                    {"location" in exp && exp.location && <span className="text-muted"> — {exp.location}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Awards & Honors */}
      <section className="mt-12">
        <h3 className="text-xl font-bold text-navy-900 mb-4">Awards &amp; Honors</h3>
        <ul className="space-y-3">
          {profile.awards.map((award) => (
            <li key={award.title} className="flex gap-3">
              <div className="shrink-0 mt-1.5 h-2 w-2 rounded-full bg-accent" />
              <div>
                <div className="font-semibold text-navy-900 text-sm">{award.title}</div>
                <div className="text-sm text-muted">
                  {award.organization}, {award.year}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Professional memberships */}
      <section className="mt-12">
        <h3 className="text-xl font-bold text-navy-900 mb-4">Professional Memberships</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {profile.memberships.map((m) => (
            <li key={m.organization} className="flex items-start gap-2 text-sm text-navy-800">
              <svg className="h-4 w-4 mt-0.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {m.organization}
              <span className="text-muted">(since {m.since})</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Editorial & administrative */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">Editorial Service</h3>
          <ul className="space-y-2">
            {profile.editorialService.map((e) => (
              <li key={e.journal} className="text-sm text-navy-800">
                <span className="font-medium">{e.role}</span>, {e.journal} (since {e.since})
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">Administrative Roles</h3>
          <ul className="space-y-3">
            {profile.administrativeRoles.map((r) => (
              <li key={r.role} className="flex gap-3">
                <div className="shrink-0 mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <div className="font-medium text-navy-900 text-sm">{r.role}</div>
                  {"institution" in r && r.institution && (
                    <div className="text-sm text-muted">{r.institution}</div>
                  )}
                  <div className="text-sm text-muted">{r.period}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Teaching */}
      <section className="mt-12">
        <h3 className="text-xl font-bold text-navy-900 mb-4">Teaching</h3>
        <p className="text-sm text-navy-800 mb-3">
          <span className="font-medium">Current Course:</span> {profile.teaching.current}
        </p>
        <p className="text-sm text-muted mb-4">
          Over fifteen years of graduate teaching experience in biostatistics, epidemiology, informatics, big health databases, and research methods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {profile.teaching.courses.map((c) => (
            <div key={c} className="text-sm text-navy-700 flex items-start gap-2">
              <span className="text-muted">&bull;</span> {c}
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
