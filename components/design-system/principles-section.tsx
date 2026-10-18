import { DocSection } from "@/components/design-system/doc-section"
import { PRINCIPLES_LIST } from "@/lib/design-tokens"

export function PrinciplesSection() {
  return (
    <DocSection
      id="principles"
      title="Principles"
      description="A short set of rules to follow before reaching for anything new."
    >
      <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {PRINCIPLES_LIST.map((principle, index) => (
          <li key={principle.title} className="border-t border-border-strong pt-5">
            <span className="font-mono text-sm text-subtle-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-heading mt-3">{principle.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {principle.body}
            </p>
          </li>
        ))}
      </ul>
    </DocSection>
  )
}
