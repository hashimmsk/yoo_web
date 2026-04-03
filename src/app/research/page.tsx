import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import {
  researchAreas,
  fundedProjects,
  invitedLectures,
  conferencePresentations,
} from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research areas, funded projects, and scholarly contributions of Dr. Wonsuk Yoo in biostatistics, clinical trial design, and cancer research.",
};

export default function ResearchPage() {
  const activeProjects = fundedProjects.filter((p) => p.status === "active");
  const pendingProjects = fundedProjects.filter((p) => p.status === "pending");

  return (
    <PageWrapper>
      <SectionHeading
        title="Research"
        subtitle="Advancing biostatistical methodology, clinical trial design, and data-driven approaches to cancer research."
      />

      {/* Research areas */}
      <section className="space-y-8 mb-16">
        {researchAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-xl border border-border bg-white p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-navy-900 mb-3">
              {area.title}
            </h3>
            <p className="text-sm text-navy-700 leading-relaxed mb-4">
              {area.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {area.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-navy-800"
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
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Funded projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-navy-900 mb-6">
          Funded Research Projects
        </h2>

        {activeProjects.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Active
            </h3>
            <div className="space-y-4">
              {activeProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        )}

        {pendingProjects.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">
              Pending
            </h3>
            <div className="space-y-4">
              {pendingProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Invited lectures */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-navy-900 mb-6">
          Invited Lectures
        </h2>
        <div className="space-y-4">
          {invitedLectures.map((lecture) => (
            <div
              key={lecture.title}
              className="flex gap-4 items-start rounded-lg border border-border/50 bg-surface p-4"
            >
              <div className="shrink-0 text-sm font-medium text-accent whitespace-nowrap">
                {lecture.date}
              </div>
              <div>
                <div className="text-sm font-semibold text-navy-900">
                  {lecture.title}
                </div>
                <div className="text-sm text-muted mt-0.5">{lecture.venue}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conference presentations */}
      <section>
        <h2 className="text-2xl font-bold text-navy-900 mb-6">
          Selected Conference Presentations
        </h2>
        <div className="space-y-3">
          {conferencePresentations.map((pres) => (
            <div
              key={pres.title}
              className="flex gap-4 items-start"
            >
              <span className="shrink-0 text-sm font-mono text-muted">
                {pres.year}
              </span>
              <div>
                <div className="text-sm font-medium text-navy-900">
                  {pres.title}
                </div>
                <div className="text-sm text-muted italic">{pres.venue}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof fundedProjects)[number];
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-5">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="text-xs font-medium text-white bg-navy-600 px-2 py-0.5 rounded">
          {project.agency}
        </span>
        {project.grantId && (
          <span className="text-xs text-muted font-mono">
            {project.grantId}
          </span>
        )}
        <span className="text-xs text-muted">{project.period}</span>
      </div>
      <h4 className="text-sm font-semibold text-navy-900 leading-snug">
        {project.title}
      </h4>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        <span>
          PI: {project.pi}
        </span>
        <span>Role: {project.role}</span>
        {project.amount && <span>{project.amount}</span>}
      </div>
    </div>
  );
}
