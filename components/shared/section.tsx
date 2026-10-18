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
}

/** A full-width band with the shared vertical rhythm and centred container. */
export function Section({
  tone = "default",
  spacing = "both",
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
      <Container>{children}</Container>
    </section>
  )
}
