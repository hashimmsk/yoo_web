import Link from "next/link";
import { EXTERNAL_LINKS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy-900 text-navy-200 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Wonsuk Yoo, PhD
            </h3>
            <p className="text-sm leading-relaxed text-navy-300">
              Research Associate Professor<br />
              School of Nursing and Health Studies<br />
              University of Miami<br />
              Coral Gables, FL 33124
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={EXTERNAL_LINKS.universityProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  University of Miami Profile
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.pubmed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  PubMed Publications
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.sonhs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  School of Nursing &amp; Health Studies
                </a>
              </li>
              <li>
                <a
                  href={`mailto:wyoo@miami.edu`}
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  wyoo@miami.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-800 text-center text-xs text-navy-400">
          &copy; {new Date().getFullYear()} Wonsuk Yoo. University of Miami.
        </div>
      </div>
    </footer>
  );
}
