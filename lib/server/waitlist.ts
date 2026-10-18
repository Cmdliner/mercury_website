import "server-only"

import type { WaitlistInput } from "@/lib/validations/waitlist"

export type SubmitResult =
  | { ok: true }
  | { ok: false; status: number; message: string }

/**
 * Hands a validated waitlist entry to the Mercury backend. The endpoint is
 * read from WAITLIST_API_URL so the website needs no knowledge of the C# API
 * beyond that single URL.
 */
export async function submitWaitlistEntry(
  entry: WaitlistInput
): Promise<SubmitResult> {
  const endpoint = process.env.WAITLIST_API_URL

  if (!endpoint) {
    if (process.env.NODE_ENV === "production") {
      return {
        ok: false,
        status: 503,
        message: "The waitlist is not open yet. Please check back soon.",
      }
    }
    console.info("[waitlist] WAITLIST_API_URL not set, entry not stored", entry)
    return { ok: true }
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    })
    if (response.ok) return { ok: true }
    return {
      ok: false,
      status: 502,
      message: "We could not save your request. Please try again.",
    }
  } catch {
    return {
      ok: false,
      status: 502,
      message: "We could not reach our servers. Please try again.",
    }
  }
}
