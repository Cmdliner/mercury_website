import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

type FooterColumnProps = {
  title: string
  links: ReadonlyArray<{ label: string; href: string }>
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <nav aria-label={title}>
      <p className="text-eyebrow">{title}</p>
      <ul className="mt-5 grid gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-[color,translate] duration-300 hover:translate-x-1 hover:text-foreground"
            >
              {link.label}
              <ArrowUpRightIcon
                aria-hidden="true"
                className="size-3.5 -translate-x-1 opacity-0 transition-[opacity,translate] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
