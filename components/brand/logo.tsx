import Link from "next/link"

import { LogoMark } from "@/components/brand/logo-mark"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Mercury home"
      className={cn("flex items-center gap-2 text-foreground", className)}
    >
      <LogoMark className="size-7" />
      <span className="text-xl font-semibold tracking-tight">mercury</span>
    </Link>
  )
}
