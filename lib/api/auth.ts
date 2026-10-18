import { ApiError } from "@/lib/api/api-error"
import type { SignInInput } from "@/lib/validations/sign-in"

const SIMULATED_LATENCY_MS = 900

/**
 * Placeholder until the Mercury auth backend is wired up: credentials are not
 * sent anywhere, and the call always reports that sign in is not open yet.
 */
export async function signIn(input: SignInInput): Promise<void> {
  void input
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS))
  throw new ApiError(
    "Sign in is not open yet. Join the waitlist and we will let you know.",
    503
  )
}
