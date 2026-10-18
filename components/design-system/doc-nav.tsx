import Link from "next/link"

import { DOC_SECTIONS } from "@/lib/design-tokens"

export function DocNav() {
  return (
    <nav aria-label="Design system" className="lg:sticky lg:top-24 lg:self-start">
      <p className="text-eyebrow">Design system</p>
      <ol className="mt-5 grid gap-2.5 border-l border-border-strong">
        {DOC_SECTIONS.map((section) => (
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
