import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type MobileMenuLinkProps = {
  href: string
  label: string
  open: boolean
  /** Position in the menu, used to stagger the entrance. */
  index: number
  size?: "lg" | "md"
  onNavigate: () => void
}

const STAGGER_START_MS = 160
const STAGGER_STEP_MS = 55

/** A menu row that slides and fades in a beat after the one above it. */
export function MobileMenuLink({
  href,
  label,
  open,
  index,
  size = "lg",
  onNavigate,
}: MobileMenuLinkProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      style={{
        transitionDelay: open
          ? `${STAGGER_START_MS + index * STAGGER_STEP_MS}ms`
          : "0ms",
      }}
      className={cn(
        "group flex items-center justify-between border-b border-border py-4 font-semibold tracking-tight transition-[opacity,translate] duration-500 ease-out",
        size === "lg" ? "text-[2rem] leading-tight" : "text-xl",
        open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      )}
    >
      {label}
      <ArrowUpRightIcon className="size-5 text-subtle-foreground transition-colors group-hover:text-brand group-active:text-brand" />
    </Link>
  )
}
