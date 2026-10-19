import { Container } from "@/components/shared/container"
import { cn } from "@/lib/utils"

type SectionTone = "default" | "muted" | "night"

const TONES: Record<SectionTone, string> = {
  default: "",
  muted: "border-y border-border bg-surface-muted",
  night: "theme-night bg-background text-foreground",
}

type SectionProps = React.ComponentProps<"section"> & {
  tone?: SectionTone
  /** "bottom" drops the top padding for a section that follows closely. */
  spacing?: "both" | "bottom"
  /** "wide" lets the content run wider than the standard page width. */
  width?: "default" | "wide"
}

/** A full-width band with the shared vertical rhythm and centred container. */
export function Section({
  tone = "default",
  spacing = "both",
  width = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-16",
        spacing === "both" ? "py-section" : "pb-section",
        TONES[tone],
        className
      )}
      {...props}
    >
      <Container className={width === "wide" ? "max-w-7xl" : undefined}>
        {children}
      </Container>
    </section>
  )
}
