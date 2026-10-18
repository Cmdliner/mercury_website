/** Sample figures for the in-page product previews. Mirrors the desktop design. */

export type StorePreview = {
  name: string
  location: string
  balance: number
}

export type AccountPreview = {
  name: string
  normalBalance: "Debit" | "Credit"
  balance: number
}

export const STORES_PREVIEW: StorePreview[] = [
  { name: "Mercury Ikeja", location: "Ikeja, Lagos", balance: 1_820_400 },
  { name: "Mercury Yaba", location: "Yaba, Lagos", balance: 940_200 },
  { name: "Mercury Lekki", location: "Lekki, Lagos", balance: 2_059_800 },
]

export const ACCOUNTS_PREVIEW: AccountPreview[] = [
  { name: "Operating", normalBalance: "Debit", balance: 1_240_000 },
  { name: "Settlement", normalBalance: "Credit", balance: 420_000 },
  { name: "Premium spending", normalBalance: "Debit", balance: 85_000 },
  { name: "General spending", normalBalance: "Debit", balance: 75_400 },
  { name: "Inventory", normalBalance: "Debit", balance: 2_340_000 },
]

export const SALES_TODAY = 1_240_500

/** Relative bar heights (percent) for the sales sparkline. */
export const SALES_BARS = [28, 40, 52, 64, 82, 30, 44, 56, 72, 88, 34, 48]
