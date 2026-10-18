import {
  ArrowRight,
  Check,
  CheckCheck,
  Construction,
  Hammer,
  HardHat,
  LoaderCircle,
  Minus,
  Plus,
  Store,
  Wallet,
  type LucideIcon,
} from "lucide-react"

/**
 * What the design-system page documents. app/globals.css is the source of
 * truth for values; this file describes how each token is meant to be used.
 */

export type DocSectionLink = { id: string; title: string }

export const DOC_SECTIONS: DocSectionLink[] = [
  { id: "principles", title: "Principles" },
  { id: "colour", title: "Colour" },
  { id: "typography", title: "Typography" },
  { id: "layout", title: "Layout and shape" },
  { id: "controls", title: "Controls" },
  { id: "motion", title: "Motion" },
  { id: "imagery", title: "Imagery" },
  { id: "brand", title: "Logo and icons" },
]

export const PRINCIPLES_LIST: { title: string; body: string }[] = [
  {
    title: "Calm, clear, professional",
    body: "Generous space, strong contrast and few things competing. Depth comes from tone and borders, not shadows.",
  },
  {
    title: "Tokens, not values",
    body: "Colours, type sizes and spacing come from tokens in app/globals.css. Never hard-code a hex or a font size in a component.",
  },
  {
    title: "Real over decorative",
    body: "Use real photography before the Screens section, and keep app screens for Screens. No grids, gradients for their own sake or stock emoji.",
  },
  {
    title: "Colour with a job",
    body: "Hues belong to features (amber stores, blue accounts, teal reconciliation). Green means success, amber means caution.",
  },
]

export type ColorToken = { name: string; variable: string; usage: string }
export type ColorGroup = { title: string; description: string; tokens: ColorToken[] }

export const COLOR_GROUPS: ColorGroup[] = [
  {
    title: "Surfaces",
    description: "What things sit on.",
    tokens: [
      { name: "background", variable: "--background", usage: "Page background" },
      { name: "surface-muted", variable: "--surface-muted", usage: "Tinted bands and panels" },
      { name: "card", variable: "--card", usage: "Raised surfaces and inputs" },
    ],
  },
  {
    title: "Text",
    description: "Three levels of emphasis.",
    tokens: [
      { name: "foreground", variable: "--foreground", usage: "Headings, body, primary buttons" },
      { name: "muted-foreground", variable: "--muted-foreground", usage: "Secondary text" },
      { name: "subtle-foreground", variable: "--subtle-foreground", usage: "Footnotes, tertiary" },
    ],
  },
  {
    title: "Lines",
    description: "Borders and focus.",
    tokens: [
      { name: "border", variable: "--border", usage: "Hairlines and card edges" },
      { name: "border-strong", variable: "--border-strong", usage: "Dividers that must be seen" },
      { name: "input", variable: "--input", usage: "Field borders" },
      { name: "ring", variable: "--ring", usage: "Focus ring" },
    ],
  },
  {
    title: "Status",
    description: "Meaning, never decoration.",
    tokens: [
      { name: "success", variable: "--success", usage: "Active, Reconciled" },
      { name: "success-soft", variable: "--success-soft", usage: "Success pill background" },
      { name: "sun", variable: "--sun", usage: "Caution, under construction" },
      { name: "sun-soft", variable: "--sun-soft", usage: "Caution background" },
      { name: "destructive", variable: "--destructive", usage: "Errors" },
    ],
  },
  {
    title: "Accent slot",
    description: "Neutral for now. Set --brand once an accent is chosen.",
    tokens: [
      { name: "brand", variable: "--brand", usage: "Emphasis, check marks, hue override" },
      { name: "brand-soft", variable: "--brand-soft", usage: "Tint behind brand marks" },
    ],
  },
]

export type TypeStyle = {
  name: string
  className: string
  spec: string
  usage: string
  sample: string
}

export const TYPE_SCALE: TypeStyle[] = [
  {
    name: "Display",
    className: "text-display",
    spec: "40 to 60px, 600, -0.04em",
    usage: "Hero headline, once per page",
    sample: "One set of books for every store you run.",
  },
  {
    name: "Title",
    className: "text-title",
    spec: "34 to 56px, 600, -0.035em",
    usage: "Section headline",
    sample: "Everything around the ledger.",
  },
  {
    name: "Subtitle",
    className: "text-subtitle",
    spec: "28 to 40px, 600, -0.03em",
    usage: "Feature row headline",
    sample: "Every store gets its own books.",
  },
  {
    name: "Heading",
    className: "text-heading",
    spec: "20px, 600, -0.015em",
    usage: "Card and step titles",
    sample: "Account buckets",
  },
  {
    name: "Lead",
    className: "text-lead",
    spec: "17 to 20px, muted",
    usage: "Intro paragraph under a headline",
    sample: "Balances are derived from ledger entries, never typed in by hand.",
  },
  {
    name: "Eyebrow",
    className: "text-eyebrow",
    spec: "12px mono, uppercase, 0.14em",
    usage: "Small label above a headline",
    sample: "How it works",
  },
]

export const FONTS: {
  name: string
  className: string
  variable: string
  usage: string
  sample: string
}[] = [
  {
    name: "Geist",
    className: "font-sans",
    variable: "--font-geist-sans",
    usage: "All interface text and headings",
    sample: "Every store, one clear set of books.",
  },
  {
    name: "Geist Mono",
    className: "font-mono",
    variable: "--font-geist-mono",
    usage: "Eyebrows, step numbers, token names",
    sample: "01 · ₦1,240,500",
  },
  {
    name: "Instrument Serif",
    className: "font-serif italic",
    variable: "--font-instrument-serif",
    usage: "Waitlist headline only. Use sparingly.",
    sample: "Join the waitlist.",
  },
]

export const RADII: { name: string; className: string; usage: string }[] = [
  { name: "Square", className: "rounded-none", usage: "Buttons, inputs, selects, tabs, badges" },
  { name: "xl", className: "rounded-xl", usage: "App windows, small cards" },
  { name: "2xl", className: "rounded-2xl", usage: "Capability cards" },
  { name: "3xl", className: "rounded-3xl", usage: "Photo panels, dialogs, big containers" },
  { name: "Full", className: "rounded-full", usage: "Status pills, menu toggle, close button" },
]

export const MOTION_TOKENS: { name: string; className: string; usage: string }[] = [
  { name: "animate-rise", className: "motion-safe:animate-rise", usage: "Hero entrance, staggered with animation-delay" },
  { name: "animate-float", className: "motion-safe:animate-float", usage: "Floating cards" },
  { name: "animate-drift", className: "motion-safe:animate-drift", usage: "Line art behind panels" },
  { name: "animate-grow", className: "motion-safe:animate-grow", usage: "Chart bars" },
  { name: "animate-pulse-ring", className: "motion-safe:animate-pulse-ring", usage: "Reconciled pill" },
  { name: "animate-slow-zoom", className: "motion-safe:animate-slow-zoom", usage: "Hero photo" },
]

export const ICONS: { name: string; icon: LucideIcon; usage: string }[] = [
  { name: "Store", icon: Store, usage: "Stores" },
  { name: "Wallet", icon: Wallet, usage: "Accounts" },
  { name: "CheckCheck", icon: CheckCheck, usage: "Reconciliation" },
  { name: "Check", icon: Check, usage: "Check lists, success" },
  { name: "ArrowRight", icon: ArrowRight, usage: "Primary call to action" },
  { name: "Plus", icon: Plus, usage: "FAQ closed" },
  { name: "Minus", icon: Minus, usage: "FAQ open" },
  { name: "HardHat", icon: HardHat, usage: "Under construction" },
  { name: "Hammer", icon: Hammer, usage: "Under construction" },
  { name: "Construction", icon: Construction, usage: "Under construction" },
  { name: "LoaderCircle", icon: LoaderCircle, usage: "Building, loading" },
]
