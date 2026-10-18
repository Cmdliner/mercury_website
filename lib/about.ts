export type Principle = {
  title: string
  description: string
}

export const ABOUT_STORY: string[] = [
  "Mercury is finance and expense tracking for businesses that run more than one store. Each branch gets its own accounts and ledger, and every branch rolls up into one clear view of the whole business.",
  "Most owners start with a notebook, then a spreadsheet, then a spreadsheet per store. It works until the second or third branch, when nobody can say with confidence where the money is. Mercury exists to replace that patchwork with one calm, trustworthy system.",
  "We are starting with pharmacy chains, because they feel the problem sharply: many small payments, several locations and daily reconciliation. The same ideas apply to any business with more than one till.",
]

export const PRINCIPLES: Principle[] = [
  {
    title: "One set of books per store",
    description:
      "Every branch keeps its own accounts, staff and history, so a number always belongs to somewhere specific.",
  },
  {
    title: "Balances you can trace",
    description:
      "Balances are derived from ledger entries, never typed in. Any figure can be followed back to what produced it.",
  },
  {
    title: "Calm by design",
    description:
      "A quiet, uncluttered interface that puts the numbers first, so a busy owner can read the day at a glance.",
  },
  {
    title: "Built with owners",
    description:
      "Early access opens to a small group first. Their questions shape what we build next.",
  },
]

export const ABOUT_STATUS: string[] = [
  "The desktop app and the ledger service behind it are being built now.",
  "Early access will open to a small group of businesses first.",
  "Join the waitlist and we will email you when it is your turn.",
]
