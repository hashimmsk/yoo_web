import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact information and professional links for ${profile.name}.`,
};

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
    external: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
  },
  {
    label: "University Profile",
    value: "University of Miami Faculty Page",
    href: EXTERNAL_LINKS.universityProfile,
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    ),
  },
  {
    label: "PubMed",
    value: "Publication Record",
    href: EXTERNAL_LINKS.pubmed,
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    ),
  },
  {
    label: "School of Nursing & Health Studies",
    value: "SONHS at University of Miami",
    href: EXTERNAL_LINKS.sonhs,
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
      />
    ),
  },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Contact"
        subtitle="Get in touch or find me through the following channels."
      />

      <div className="max-w-2xl">
        {/* Contact card */}
        <div className="rounded-xl border border-border bg-white p-6 sm:p-8 mb-10">
          <h3 className="text-lg font-bold text-navy-900 mb-1">
            {profile.name}, {profile.credentials}
          </h3>
          <p className="text-sm text-muted mb-6">
            {profile.title}
            <br />
            {profile.department}
            <br />
            {profile.institution}
            <br />
            {profile.location}
          </p>

          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      {link.icon}
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy-900 group-hover:text-accent transition-colors">
                      {link.label}
                      {link.external && (
                        <svg
                          className="inline-block ml-1 h-3 w-3 text-muted"
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
                    </div>
                    <div className="text-sm text-muted">{link.value}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mailing address */}
        <div className="rounded-lg bg-surface border border-border p-5">
          <h3 className="text-sm font-semibold text-navy-900 mb-2">
            Mailing Address
          </h3>
          <p className="text-sm text-navy-700 leading-relaxed">
            {profile.name}, {profile.credentials}
            <br />
            {profile.department}
            <br />
            {profile.institution}
            <br />
            Coral Gables, FL 33124
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
