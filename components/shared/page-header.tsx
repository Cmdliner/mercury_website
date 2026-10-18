import { Container } from "@/components/shared/container"

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  /** A short header that gets out of the way, for long documents. */
  compact?: boolean
}

/** Title block for inner pages, on the plain page background. */
export function PageHeader({ eyebrow, title, description, compact = false }: PageHeaderProps) {
  if (compact) {
    return (
      <section className="border-b border-border pt-10 pb-7 sm:pt-12">
        <Container>
          <p className="text-eyebrow">{eyebrow}</p>
          <h1 className="text-subtitle mt-3">{title}</h1>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              {description}
            </p>
          ) : null}
        </Container>
      </section>
    )
  }

  return (
    <section className="border-b border-border pt-16 pb-14 sm:pt-24 sm:pb-16">
      <Container>
        <p className="text-eyebrow">{eyebrow}</p>
        <h1 className="text-title mt-5 max-w-3xl">{title}</h1>
        {description ? (
          <p className="text-lead mt-5 max-w-2xl">{description}</p>
        ) : null}
      </Container>
    </section>
  )
}
