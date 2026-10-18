"use client"

import { createPortal } from "react-dom"

import { MenuToggle } from "@/components/layout/menu-toggle"
import { MobileMenuPanel } from "@/components/layout/mobile-menu-panel"
import { useIsClient } from "@/hooks/use-is-client"
import { useMobileMenu } from "@/hooks/use-mobile-menu"

/**
 * The toggle lives in the header; the panel is portalled to <body> because the
 * header's backdrop blur would otherwise trap a fixed-position child inside it.
 */
export function MobileNav() {
  const { open, toggle, close } = useMobileMenu()
  const isClient = useIsClient()

  return (
    <>
      <MenuToggle open={open} onToggle={toggle} />
      {isClient
        ? createPortal(
            <MobileMenuPanel open={open} onNavigate={close} />,
            document.body
          )
        : null}
    </>
  )
}
