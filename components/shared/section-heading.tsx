import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  size?: "lg" | "md"
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  size = "lg",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="text-eyebrow">{eyebrow}</p>
      <h2 className={cn("mt-4", size === "lg" ? "text-title" : "text-subtitle")}>
        {title}
      </h2>
      {description ? <p className="text-lead mt-5">{description}</p> : null}
    </div>
  )
}
