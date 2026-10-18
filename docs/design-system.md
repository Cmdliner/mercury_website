# Mercury website design system

Everything visual comes from `app/globals.css`. Do not hard-code colours or font sizes in components.

## Colour tokens (Tailwind class names)
| Token | Use |
|---|---|
| `background` / `surface-muted` / `card` | Page, tinted band, raised surface |
| `foreground` | Primary text and primary buttons |
| `muted-foreground` | Secondary text |
| `subtle-foreground` | Tertiary text, eyebrows, footnotes |
| `border` / `border-strong` | Hairlines / dividers that must be seen |
| `brand` / `brand-soft` | Muted green accent and its tint (status pills, check marks) |
| `destructive` | Errors |

Dark surfaces: add `theme-night` to a container. Every token above is remapped inside it, so
shadcn components and the rules above work unchanged on dark sections and the sign-in page.

## Type scale (utilities)
`text-display` (hero), `text-title` (section), `text-subtitle` (row heading), `text-heading`
(card title), `text-lead` (intro paragraph), `text-eyebrow` (small mono label).

## Layout primitives
- `Container` : centred, `max-w-6xl`, responsive gutters.
- `Section` : full-width band with the shared vertical rhythm. `tone` is `default | muted | night`;
  `spacing="bottom"` removes the top padding for a section that follows closely.
- `Capsule` : the pill motif (from the desktop sign-in design). Decoration only.

## Rules
- Depth comes from tone and borders, not shadows. Shadows are for popups only.
- Photography is always monochrome (`Photo` applies grayscale).
- Alternate light, tinted and night bands so every section is clearly defined.
