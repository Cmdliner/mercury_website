/** The person who builds Mercury, shown in the footer credit. */
export const AUTHOR = {
  name: "Cmdliner",
  avatar: "/brand/cmdliner.svg",
  bio: "Software developer building Mercury, finance software for businesses that run more than one store.",
  github: "https://github.com/Cmdliner",
  /** Set NEXT_PUBLIC_AUTHOR_EMAIL to show an email option. Left out of the source on purpose. */
  email: process.env.NEXT_PUBLIC_AUTHOR_EMAIL ?? "",
} as const
