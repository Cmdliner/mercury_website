# Mercury website design system

The living version of this document is the **/design-system** page of the site (source: `app/design-system`, `components/design-system`, `lib/design-tokens.ts`). It shows every token, type style, control, motion token, photo, the logo and the icon set. Start there; this file is the short written summary.

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

## Hues
Colour comes from hues, not one global accent. `lib/hues.ts` defines six (amber, blue, red, green, violet, teal). Capability cards each use one; each feature row (stores amber, accounts blue, reconciliation teal) keeps its own across its label, check marks and panel. `hueVars(hue)` sets CSS variables so everything inside an element recolours: `--brand` and `--brand-soft` for labels and check marks, `--tone`, `--tint` and `--slab` for panels and line art.

## Motion
Add motion with the `motion-safe:` variant so reduced-motion users get none. Keyframes are tokens in `globals.css`: `animate-float`, `animate-drift`, `animate-grow`, `animate-pulse-ring`, `animate-rise`, `animate-slow-zoom`. Sections fade in on scroll with `Reveal` (`components/shared/reveal.tsx`, driven by `useInView`); stagger siblings with its `delay` prop.

## Illustrations
Line illustrations live in `components/illustrations`. Draw flat shapes inside an `IsoPlane` (it projects them isometrically) using `Panel` and `Bar`; strokes follow the text colour, so they work on light and dark. `CapabilityCard` shows one per capability, chosen by id.

## Rules
- Depth comes from tone and borders, not shadows. Shadows are for popups only.
- Use real photography before the Screens section; app screens appear only in Screens. Photos are full colour (`grayscale={false}`); never tint them.
- Photos live in `public/photos` and are imported statically in `lib/images.ts`; always render them with `next/image`. Use `next/link` for every link.
- Alternate default, muted and night bands so every section is clearly defined.
