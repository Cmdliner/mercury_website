import Link from "next/link"

import type { LegalSection } from "@/lib/legal"

/** Sticky list of section links beside a long document. */
export function LegalToc({ sections }: { sections: LegalSection[] }) {
  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
      <p className="text-eyebrow">On this page</p>
      <ol className="mt-5 grid gap-2.5 border-l border-border-strong">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className="-ml-px block border-l border-transparent py-0.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
