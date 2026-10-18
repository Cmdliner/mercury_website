import { LegalToc } from "@/components/legal/legal-toc"
import { Section } from "@/components/shared/section"
import type { LegalSection } from "@/lib/legal"

type LegalDocumentProps = {
  updated: string
  sections: LegalSection[]
}

/** A long-form document: contents on the left, numbered sections on the right. */
export function LegalDocument({ updated, sections }: LegalDocumentProps) {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
        <LegalToc sections={sections} />
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground">Last updated {updated}</p>
          <div className="mt-10 grid gap-12">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-heading">
                  <span className="mr-3 font-mono text-sm font-normal text-subtle-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.items ? (
                  <ul className="mt-4 grid gap-2.5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 size-1.5 shrink-0 bg-foreground"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
