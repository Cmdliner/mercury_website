import { ApiError } from "@/lib/api/api-error"
import type { WaitlistInput } from "@/lib/validations/waitlist"

const FALLBACK_MESSAGE = "Something went wrong. Please try again."

export async function joinWaitlist(input: WaitlistInput): Promise<void> {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })

  if (response.ok) return

  const body = (await response.json().catch(() => null)) as {
    message?: string
  } | null
  throw new ApiError(body?.message ?? FALLBACK_MESSAGE, response.status)
}
