import { Container } from "@/components/shared/container"
import { Photo } from "@/components/shared/photo"
import type { Photo as PhotoData } from "@/lib/images"

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  /** When given, the header becomes a full-colour photo band under the glass header. */
  photo?: PhotoData
}

/** Title block for inner pages. Plain by default, or over a softened photo. */
export function PageHeader({ eyebrow, title, description, photo }: PageHeaderProps) {
  if (photo) {
    return (
      <section className="theme-night relative isolate -mt-16 overflow-hidden bg-background text-foreground">
        <Photo
          photo={photo}
          sizes="100vw"
          priority
          grayscale={false}
          className="-z-10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-black/55 backdrop-blur-[3px]"
        />
        <Container className="pt-40 pb-20 sm:pt-48 sm:pb-24">
          <p className="text-eyebrow text-foreground/80">{eyebrow}</p>
          <h1 className="text-display mt-5 max-w-3xl [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground [text-shadow:0_1px_18px_rgba(0,0,0,0.55)] sm:text-xl">
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
