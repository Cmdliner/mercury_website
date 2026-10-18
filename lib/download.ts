/** The current Windows release of Mercury Desktop. Update these when a new build is published. */
export const RELEASE = {
  version: "0.1.0",
  platform: "Windows 10 and 11, 64-bit",
  file: "/downloads/Mercury-0.1.0-win-x64.zip",
  size: "57 MB",
  released: "October 2026",
  sha256: "d91d342f19cb2adf8e39e9e72dc07ed97f9920c50e9b635aa29f9def45e56d4b",
} as const

export const REQUIREMENTS: string[] = [
  "Windows 10 (version 1809) or Windows 11, 64-bit",
  "Nothing else to install: the .NET runtime is included",
  "About 200 MB of free disk space",
  "An internet connection to sync your stores",
]

export const INSTALL_STEPS: { title: string; description: string }[] = [
  {
    title: "Download and unzip",
    description: "Save the file, then right-click it and choose Extract All.",
  },
  {
    title: "Open Mercury",
    description:
      "Run Mercury.Desktop.exe. If Windows shows a SmartScreen notice, choose More info, then Run anyway.",
  },
  {
    title: "Set up your business",
    description:
      "Create an account, add your first store and copy its payment account. It takes a few minutes.",
  },
]

export type DesktopScreen = {
  src: string
  alt: string
  title: string
  description: string
}

export const DESKTOP_SCREENS: DesktopScreen[] = [
  {
    src: "/screens/desktop/dashboard-overview.png",
    alt: "The Mercury overview with balances, sales today and recent transactions",
    title: "One view of every store",
    description:
      "Balances, sales and what is waiting to settle, the moment you open the app.",
  },
  {
    src: "/screens/desktop/stores.png",
    alt: "The Stores page with a card for each store",
    title: "Every store, its own books",
    description:
      "Each branch has its own virtual account, so payments never get mixed up.",
  },
  {
    src: "/screens/desktop/payments.png",
    alt: "The Payments page showing the account number a customer pays into",
    title: "Show customers where to pay",
    description:
      "Pick a store, read out the account number or copy it in one click.",
  },
]
