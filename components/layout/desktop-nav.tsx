"use client"

import Link from "next/link"

import { ProductMenuLink } from "@/components/layout/product-menu-link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NAV_LINKS } from "@/lib/constants"
import { FEATURE_ROWS } from "@/lib/content"
import { cn } from "@/lib/utils"

/** Quiet grey text that darkens on hover, with no pill background. */
const ITEM_CLASS =
  "bg-transparent px-3 text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-popup-open:text-foreground"

export function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={ITEM_CLASS}>
            Product
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-80 gap-1 p-1">
              {FEATURE_ROWS.map((row) => (
                <li key={row.id}>
                  <ProductMenuLink row={row} />
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {NAV_LINKS.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              render={<Link href={link.href} />}
              className={cn(navigationMenuTriggerStyle(), ITEM_CLASS)}
            >
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
