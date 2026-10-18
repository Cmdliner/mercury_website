import Link from "next/link"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import type { FeatureRow } from "@/lib/content"

export function ProductMenuLink({ row }: { row: FeatureRow }) {
  const Icon = row.icon

  return (
    <NavigationMenuLink
      render={<Link href={`#${row.id}`} />}
      closeOnClick
      className="items-start gap-3 p-3"
    >
      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
        <Icon className="size-4" />
      </span>
      <span className="grid gap-0.5">
        <span className="font-medium">{row.eyebrow}</span>
        <span className="text-xs text-muted-foreground">{row.summary}</span>
      </span>
    </NavigationMenuLink>
  )
}
