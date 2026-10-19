import { Container } from "@/components/shared/container"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  /** A short header that gets out of the way, for long documents. */
  compact?: boolean
  /** Centre the header and let the text run wider. */
  align?: "left" | "center"
}

/** Title block for inner pages, on the plain page background. */
export function PageHeader({
  eyebrow,
  title,
  description,
  compact = false,
  align = "left",
}: PageHeaderProps) {
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
      <Container className={align === "center" ? "text-center" : undefined}>
        <p className="text-eyebrow">{eyebrow}</p>
        <h1
          className={cn(
            "text-title mt-5",
            align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl"
          )}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              "text-lead mt-5",
              align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl"
            )}
          >
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  )
}
