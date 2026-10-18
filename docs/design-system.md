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
| `brand` / `brand-soft` / `brand-deep` | Emerald accent, its mint tint, and the forest dark |
| `sun` / `sun-soft` / `sun-ink` | Amber accent, its tint, and a readable amber for text |
| `sky` / `sky-soft` | Soft blue accent and its tint |
| `destructive` | Errors |

Accent tones (mint, sun, sky) are mapped to classes in `lib/tones.ts`; change colour decisions there, not in components.

Dark surfaces: add `theme-night` (blue-black) or `theme-forest` (deep green) to a container. Every token above is remapped inside it, so
shadcn components and the rules above work unchanged on dark sections and the sign-in page.

## Type scale (utilities)
`text-display` (hero), `text-title` (section), `text-subtitle` (row heading), `text-heading`
(card title), `text-lead` (intro paragraph), `text-eyebrow` (small mono label).

## Layout primitives
- `Container` : centred, `max-w-6xl`, responsive gutters.
- `Section` : full-width band with the shared vertical rhythm. `tone` is `default | muted | mint | sun | night | forest`;
  `spacing="bottom"` removes the top padding for a section that follows closely.
- `Capsule` : the pill motif (from the desktop sign-in design). Decoration only.

## Rules
- Depth comes from tone and borders, not shadows. Shadows are for popups only.
- Photography is monochrome (`Photo` applies grayscale). Tint it by multiplying it over a coloured parent for a duotone look.
- Photos live in `public/photos` and are imported statically in `lib/images.ts`; always render them with `next/image`. Use `next/link` for every link.
- Alternate light, tinted and night bands so every section is clearly defined.
