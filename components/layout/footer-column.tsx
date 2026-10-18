import Link from "next/link"

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
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
