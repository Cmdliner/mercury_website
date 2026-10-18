import { CheckList } from "@/components/shared/check-list"
import { SectionHeading } from "@/components/shared/section-heading"
import type { FeatureRow as FeatureRowData } from "@/lib/content"
import { cn } from "@/lib/utils"

type FeatureRowProps = {
  row: FeatureRowData
  /** Put the visual on the left on large screens. */
  flip?: boolean
  children: React.ReactNode
}

/** Two columns on large screens: copy on one side, a visual on the other. */
export function FeatureRow({ row, flip = false, children }: FeatureRowProps) {
  return (
    <div
      id={row.id}
      className="grid scroll-mt-24 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20"
    >
      <div className={cn(flip && "lg:order-2")}>
        <SectionHeading
          size="md"
          eyebrow={row.eyebrow}
          title={row.title}
          description={row.description}
        />
        <CheckList items={row.points} className="mt-8" />
      </div>
      <div className={cn(flip && "lg:order-1")}>{children}</div>
    </div>
  )
}
