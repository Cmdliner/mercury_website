# Mercury website design system

Everything visual comes from `app/globals.css`. Do not hard-code colours or font sizes in components.

## Colour tokens (Tailwind class names)
| Token | Use |
|---|---|
| `background` / `surface-muted` / `card` | Page, tinted band, raised surface |
| `foreground` | Primary text and primary buttons |
| `muted-foreground` | Secondary text |
| `subtle-foreground` | Tertiary text and footnotes (still passes contrast) |
| `border` / `border-strong` | Hairlines / dividers that must be seen |
| `brand` / `brand-soft` / `brand-deep` | The accent slot. Neutral for now; set `--brand` in globals.css once an accent is chosen |
| `sun` / `sun-soft` / `sun-ink` | Amber, used for the under-construction badge and as a minor accent |
| `success` / `success-soft` | Green, only for status (Active, Reconciled), as in the desktop app |

Green is not an accent colour, and there is currently no accent: everything is black, white and neutral. Do not tint photos or panels.

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

## Controls
Buttons, inputs, selects and tabs have square corners. Primary is solid black, outline is a black
border that fills on hover.

## Illustrations
Line illustrations live in `components/illustrations`. Draw flat shapes inside an `IsoPlane` (it projects them isometrically) using `Panel` and `Bar`; strokes follow the text colour, so they work on light and dark. `CapabilityCard` shows one per capability, chosen by id.

## Rules
- Depth comes from tone and borders, not shadows. Shadows are for popups only.
- Photography is monochrome (`Photo` applies grayscale) except the hero, which is full colour (`grayscale={false}`). Never tint photos.
- Photos live in `public/photos` and are imported statically in `lib/images.ts`; always render them with `next/image`. Use `next/link` for every link.
- Alternate default, muted and night bands so every section is clearly defined.
