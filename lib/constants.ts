export const SITE = {
  name: "Mercury",
  title: "Mercury | Finance for multi-store businesses",
  description:
    "Mercury gives every store its own accounts, ledger and daily reconciliation, so multi-store businesses always know where the money is.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  copyrightYear: 2026,
} as const

export const SIGN_IN_PATH = "/sign-in"

/** Mercury is still being built, so the call to action is the waitlist. */
export const WAITLIST_CTA = "Join the waitlist"
export const WAITLIST_CTA_SHORT = "Join waitlist"

export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Screens", href: "#screens" },
  { label: "FAQ", href: "#faq" },
] as const

export const STORE_COUNT_VALUES = ["1-2", "3-5", "6-10", "10+"] as const
export type StoreCount = (typeof STORE_COUNT_VALUES)[number]

export const STORE_COUNT_OPTIONS: ReadonlyArray<{
  value: StoreCount
  label: string
}> = [
  { value: "1-2", label: "1 to 2 stores" },
  { value: "3-5", label: "3 to 5 stores" },
  { value: "6-10", label: "6 to 10 stores" },
  { value: "10+", label: "More than 10 stores" },
]
