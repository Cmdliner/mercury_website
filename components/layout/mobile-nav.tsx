"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { NAV_LINKS, SIGN_IN_PATH } from "@/lib/constants"
import { FEATURE_ROWS } from "@/lib/content"

const LINKS = [
  { label: "Product", href: `#${FEATURE_ROWS[0].id}` },
  ...NAV_LINKS,
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="md:hidden"
          />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="grid px-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="border-b border-border py-3.5 text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto grid gap-2 p-4">
          <Link
            href={SIGN_IN_PATH}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Sign in
          </Link>
          <WaitlistDialog size="lg">Request early access</WaitlistDialog>
        </div>
      </SheetContent>
    </Sheet>
  )
}
