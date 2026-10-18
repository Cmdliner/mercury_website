import { z } from "zod"

import { STORE_COUNT_VALUES } from "@/lib/constants"

export const waitlistSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(80, "Name is too long"),
  email: z.email("Enter a valid email address").max(120, "Email is too long"),
  businessName: z
    .string()
    .trim()
    .min(2, "Enter your business name")
    .max(100, "Business name is too long"),
  storeCount: z.enum(STORE_COUNT_VALUES, {
    error: "Select how many stores you run",
  }),
})

export type WaitlistInput = z.infer<typeof waitlistSchema>
