type DocSectionProps = {
  id: string
  title: string
  description?: string
  children: React.ReactNode
}

/** A titled block of the design-system page. */
export function DocSection({ id, title, description, children }: DocSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border-strong pt-12">
      <h2 className="text-subtitle">{title}</h2>
      {description ? <p className="text-lead mt-4 max-w-2xl">{description}</p> : null}
      <div className="mt-10 grid gap-12">{children}</div>
    </section>
  )
}
