import { submitWaitlistEntry } from "@/lib/server/waitlist"
import { waitlistSchema } from "@/lib/validations/waitlist"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = waitlistSchema.safeParse(body)

  if (!parsed.success) {
    return Response.json(
      { message: "Please check the details you entered." },
      { status: 400 }
    )
  }

  const result = await submitWaitlistEntry(parsed.data)
  if (!result.ok) {
    return Response.json({ message: result.message }, { status: result.status })
  }

  return Response.json({ ok: true }, { status: 201 })
}
