import {
  CheckCheck,
  Store,
  Wallet,
  type LucideIcon,
} from "lucide-react"

export type VisualId = "stores" | "accounts" | "reconciliation"

export type FeatureRow = {
  id: string
  eyebrow: string
  title: string
  summary: string
  description: string
  points: string[]
  icon: LucideIcon
  visual: VisualId
}

export type CapabilityId =
  | "overview"
  | "transactions"
  | "detail"
  | "staff"
  | "payments"
  | "onboarding"

export type Capability = {
  id: CapabilityId
  title: string
  description: string
}

export type Step = {
  title: string
  description: string
}

export type Screen = {
  id: string
  title: string
  description: string
  src: string
  alt: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const VALUE_POINTS: string[] = [
  "One workspace for every branch",
  "Each store keeps its own accounts and staff",
  "Balances you can trace back to the ledger",
]

export const FEATURE_ROWS: FeatureRow[] = [
  {
    id: "stores",
    eyebrow: "Stores",
    title: "Every store gets its own books.",
    summary: "Separate books for each branch",
    description:
      "Register your business once, then add each branch. Mercury keeps accounts, staff and activity separate per store, while you see the whole business at once.",
    points: [
      "Add a branch whenever you open one",
      "Accounts, staff and history for every store",
      "One overview across every location",
    ],
    icon: Store,
    visual: "stores",
  },
  {
    id: "accounts",
    eyebrow: "Accounts",
    title: "Buckets that show where every naira belongs.",
    summary: "Operating, settlement, inventory",
    description:
      "Split money into Operating, Settlement, Inventory and spending accounts. Balances are calculated from ledger entries, never typed in by hand.",
    points: [
      "Accounts for operating, settlement, inventory and spending",
      "Balances derived from the ledger",
      "Trace any figure back to the entries behind it",
    ],
    icon: Wallet,
    visual: "accounts",
  },
  {
    id: "reconciliation",
    eyebrow: "Reconciliation",
    title: "Close each day knowing it adds up.",
    summary: "Payments against sales",
    description:
      "Compare the day's payments received against sales and see when a store has reconciled. Open any transaction to trace exactly what happened.",
    points: [
      "Payments received against sales, per day",
      "A clear reconciled status for each store",
      "Filter activity by store or account",
    ],
    icon: CheckCheck,
    visual: "reconciliation",
  },
]

export const CAPABILITIES: Capability[] = [
  {
    id: "overview",
    title: "One overview",
    description:
      "Balances, sales and recent activity across every store on a single screen.",
  },
  {
    id: "transactions",
    title: "Transaction log",
    description:
      "A full activity log you can filter by store and account.",
  },
  {
    id: "detail",
    title: "Detail on demand",
    description:
      "Open any transaction or account in a side panel without losing your place.",
  },
  {
    id: "staff",
    title: "Staff",
    description:
      "Add your team and place them in the stores they work in.",
  },
  {
    id: "payments",
    title: "Customer payment page",
    description:
      "A simple page per store with clear bank transfer details, recorded against that store.",
  },
  {
    id: "onboarding",
    title: "Guided setup",
    description:
      "From owner account to first store, with each step laid out for you.",
  },
]

export const STEPS: Step[] = [
  {
    title: "Register your business",
    description:
      "Create your Mercury workspace as the owner. You only set up the business once.",
  },
  {
    title: "Add your stores",
    description:
      "Add each pharmacy or shop, along with the staff who work in it. Every store gets its own set of accounts.",
  },
  {
    title: "Track every naira",
    description:
      "Record what comes in and what goes out against each account. Balances and reconciliation update from the ledger.",
  },
]

export const SCREENS: Screen[] = [
  {
    id: "overview",
    title: "Overview",
    description:
      "Total balance, available funds and today's sales across every store, with recent transactions alongside.",
    src: "/screens/dashboard.png",
    alt: "Mercury overview screen showing total balance, sales today and recent transactions",
  },
  {
    id: "stores",
    title: "Stores",
    description: "All your branches in one place, each with its own books.",
    src: "/screens/stores.png",
    alt: "Mercury stores screen listing each branch",
  },
  {
    id: "transactions",
    title: "Transactions",
    description: "A full activity log you can filter by store and account.",
    src: "/screens/transactions.png",
    alt: "Mercury transactions screen with a filterable list of activity",
  },
  {
    id: "accounts",
    title: "Accounts",
    description:
      "Operating, settlement and spending accounts, with balances derived from the ledger.",
    src: "/screens/accounts.png",
    alt: "Mercury accounts screen listing balances for each account",
  },
  {
    id: "payment-page",
    title: "Payment page",
    description:
      "What your customers see when they pay a store by bank transfer.",
    src: "/screens/receive-payment.png",
    alt: "Mercury customer payment page with amount entry and bank transfer details",
  },
]

export const FAQS: FaqItem[] = [
  {
    question: "Who is Mercury for?",
    answer:
      "Businesses that run more than one store. We are starting with pharmacy chains, but anything with several locations and money moving through each of them will fit.",
  },
  {
    question: "How do account buckets work?",
    answer:
      "Each store has accounts such as Operating, Settlement, Inventory and spending. You record money in and out against them, and each account's balance is derived from those entries.",
  },
  {
    question: "What does ledger-derived balance mean?",
    answer:
      "Mercury never stores a balance by hand. Every balance is the sum of the ledger entries for that account, so a number on screen can always be traced back to what produced it.",
  },
  {
    question: "Can my staff use it too?",
    answer:
      "Yes. As the owner you add staff and place them in the stores they work in.",
  },
  {
    question: "Is Mercury available yet?",
    answer:
      "Mercury is still in development. Join the waitlist and we will reach out when early access opens.",
  },
]
