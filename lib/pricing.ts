export type BillingCycle = "monthly" | "yearly"

/** Paying yearly is billed as ten months, so two are free. */
export const YEARLY_MONTHS_BILLED = 10
export const YEARLY_FREE_MONTHS = 12 - YEARLY_MONTHS_BILLED

export type PlanId = "starter" | "growth" | "scale" | "enterprise"

export type Plan = {
  id: PlanId
  name: string
  tagline: string
  /** Price per month when billed monthly, in naira. Null means "talk to us". */
  monthly: number | null
  /** The most stores the plan covers. Null means no fixed limit. */
  storeLimit: number | null
  storesLabel: string
  features: string[]
  featured?: boolean
  cta: string
}

/**
 * Mercury charges by the number of stores, because that is what grows with a business. Staff are
 * never charged per seat, and Mercury takes no percentage of the money that moves through a store.
 */
export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Try Mercury with one store, free for good.",
    monthly: 0,
    storeLimit: 1,
    storesLabel: "1 store",
    features: [
      "A payment account number for your store",
      "A ledger that balances itself, with account buckets",
      "A live overview of balances and sales",
      "You plus 2 staff",
      "The last 90 days of history",
    ],
    cta: "Start free",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For owners running a handful of branches.",
    monthly: 15_000,
    storeLimit: 5,
    storesLabel: "Up to 5 stores",
    features: [
      "A separate payment account for every store",
      "Daily reconciliation of payments against sales",
      "Unlimited staff, with roles for managers and cashiers",
      "An accountant seat that sees every store",
      "Link a bank account you already use",
      "Full history, reports and exports",
    ],
    featured: true,
    cta: "Choose Growth",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For growing chains with a finance team.",
    monthly: 45_000,
    storeLimit: 20,
    storesLabel: "Up to 20 stores",
    features: [
      "Everything in Growth, for up to 20 stores",
      "Compare stores side by side",
      "Spot the store where the numbers drift",
      "Priority support from the team",
      "A guided onboarding call",
    ],
    cta: "Choose Scale",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large networks with their own needs.",
    monthly: null,
    storeLimit: null,
    storesLabel: "More than 20 stores",
    features: [
      "Everything in Scale",
      "A dedicated contact at Mercury",
      "Custom onboarding and migration",
      "Terms and support agreed with you",
    ],
    cta: "Talk to us",
  },
]

export function getPlan(id: PlanId): Plan {
  return PLANS.find((plan) => plan.id === id)!
}

/** What a plan costs per month on the chosen cycle. Null for a custom plan. */
export function pricePerMonth(plan: Plan, cycle: BillingCycle): number | null {
  if (plan.monthly === null) return null
  if (cycle === "monthly") return plan.monthly
  return Math.round((plan.monthly * YEARLY_MONTHS_BILLED) / 12)
}

/** The total billed once a year. Null for a custom plan. */
export function yearlyTotal(plan: Plan): number | null {
  return plan.monthly === null ? null : plan.monthly * YEARLY_MONTHS_BILLED
}

/** The smallest plan that covers this many stores. */
export function recommendPlan(stores: number): Plan {
  return (
    PLANS.find((plan) => plan.storeLimit !== null && stores <= plan.storeLimit) ??
    getPlan("enterprise")
  )
}

export const ESTIMATOR_MAX_STORES = 25

export type ComparisonValue = boolean | string

export type ComparisonRow = {
  label: string
  /** One value per plan, in the order of PLANS. */
  values: [ComparisonValue, ComparisonValue, ComparisonValue, ComparisonValue]
}

export type ComparisonGroup = { title: string; rows: ComparisonRow[] }

export const COMPARISON: ComparisonGroup[] = [
  {
    title: "Stores and money",
    rows: [
      { label: "Stores", values: ["1", "Up to 5", "Up to 20", "Unlimited"] },
      { label: "A payment account for each store", values: [true, true, true, true] },
      { label: "Link a bank account you already use", values: [false, true, true, true] },
      { label: "Ledger and account buckets", values: [true, true, true, true] },
      { label: "Daily reconciliation", values: [false, true, true, true] },
    ],
  },
  {
    title: "People",
    rows: [
      { label: "Staff", values: ["2", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Roles for managers and cashiers", values: [false, true, true, true] },
      { label: "Accountant seat", values: [false, true, true, true] },
    ],
  },
  {
    title: "Insight",
    rows: [
      { label: "Overview of balances and sales", values: [true, true, true, true] },
      { label: "History", values: ["90 days", "Full", "Full", "Full"] },
      { label: "Reports and exports", values: [false, true, true, true] },
      { label: "Compare stores side by side", values: [false, false, true, true] },
    ],
  },
  {
    title: "Support",
    rows: [
      { label: "Help from the team", values: ["Email", "Email", "Priority", "Dedicated"] },
      { label: "Guided onboarding", values: [false, false, true, true] },
    ],
  },
]

export type PricingPrinciple = {
  title: string
  description: string
}

export const PRICING_PRINCIPLES: PricingPrinciple[] = [
  {
    title: "No cut of your sales",
    description:
      "Mercury does not take a percentage of the money your customers pay. You pay for the software, and the money is yours.",
  },
  {
    title: "Staff are never extra",
    description:
      "Add every cashier, manager and accountant you need. Plans are priced by stores, not by people.",
  },
  {
    title: "Provider fees stay visible",
    description:
      "If a payment provider charges for an account or a transfer, it is shown on its own line and passed on at cost, never marked up.",
  },
]

export type PricingFaq = { question: string; answer: string }

export const PRICING_FAQS: PricingFaq[] = [
  {
    question: "Do you take a cut of my payments?",
    answer:
      "No. Mercury charges a flat price for the plan. We never take a percentage of what your customers pay. Any fee a payment provider charges is shown separately and passed on at cost.",
  },
  {
    question: "What counts as a store?",
    answer:
      "Each branch with its own payment account, books and staff is one store. A warehouse or head office that only holds stock does not need one.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Starter is free for one store with no time limit, so you can try Mercury with your real data before you pay for anything.",
  },
  {
    question: "What happens if I open another store?",
    answer:
      "When you go past your plan's store limit, Mercury asks you to move up a plan. Nothing is switched off in the meantime, and you only pay the new price from that point.",
  },
  {
    question: "Can I change or cancel my plan?",
    answer:
      "Yes, at any time. Moving up takes effect straight away, and moving down or cancelling takes effect at the end of the period you have paid for.",
  },
  {
    question: "Are these the final prices?",
    answer:
      "Mercury is still being built, so these are the prices we plan to launch with and they may change. People on the waitlist are told before anything is charged.",
  },
]
