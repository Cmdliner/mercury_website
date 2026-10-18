/** The screens of the product tour, in the order the cursor visits them. */
export type TourStep = {
  src: string
  alt: string
  /** The tab this screen belongs to. */
  tab: string
  title: string
  description: string
  /** Where the cursor clicks next, as a share of the screenshot (0 to 1). */
  next: { x: number; y: number }
}

const px = (x: number, y: number) => ({ x: x / 1280, y: y / 720 })

export const TOUR_STEPS: TourStep[] = [
  {
    src: "/screens/desktop/login.png",
    alt: "The Mercury sign-in screen",
    tab: "Sign in",
    title: "Sign in and you are in.",
    description: "One account for the whole business, on your desktop.",
    next: px(335, 529),
  },
  {
    src: "/screens/desktop/dashboard-overview.png",
    alt: "The overview with balances, sales today and recent transactions",
    tab: "Overview",
    title: "Every store at a glance.",
    description: "Balances, sales and what is waiting to settle, the moment you open the app.",
    next: px(86, 230),
  },
  {
    src: "/screens/desktop/stores.png",
    alt: "The stores page with a card for each store",
    tab: "Stores",
    title: "Each store has its own books.",
    description: "A virtual account per branch, so payments never get mixed up.",
    next: px(97, 276),
  },
  {
    src: "/screens/desktop/payments.png",
    alt: "The payments page showing the account number a customer pays into",
    tab: "Payments",
    title: "Show customers where to pay.",
    description: "Pick a store and read out the account number, or copy it in one click.",
    next: px(107, 322),
  },
  {
    src: "/screens/desktop/transactions.png",
    alt: "The transactions list with filters",
    tab: "Transactions",
    title: "Every payment, filterable.",
    description: "Filter by store, type and status, then open any row.",
    next: px(450, 400),
  },
  {
    src: "/screens/desktop/transactions-detail.png",
    alt: "A transaction opened to show its ledger entries",
    tab: "Transactions",
    title: "See exactly where it went.",
    description: "The ledger entries behind each payment, never typed in by hand.",
    next: px(96, 368),
  },
  {
    src: "/screens/desktop/accounts.png",
    alt: "The accounts page with balances and recent ledger entries",
    tab: "Accounts",
    title: "Know where the money sits.",
    description: "Operating, settlement, spending and reserve, straight from the ledger.",
    next: px(81, 460),
  },
  {
    src: "/screens/desktop/staff.png",
    alt: "The staff page with roles",
    tab: "Staff",
    title: "Give people the right access.",
    description: "Managers, cashiers and accountants each see only what they should.",
    next: px(450, 349),
  },
  {
    src: "/screens/desktop/staff-detail.png",
    alt: "A staff member opened to show what they can do",
    tab: "Staff",
    title: "Clear on what each role can do.",
    description: "Open anyone to see their store and permissions.",
    next: px(946, 214),
  },
]

export const TOUR_TABS: string[] = [...new Set(TOUR_STEPS.map((step) => step.tab))]
