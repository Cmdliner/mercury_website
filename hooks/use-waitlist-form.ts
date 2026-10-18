"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { ApiError } from "@/lib/api/api-error"
import { joinWaitlist } from "@/lib/api/waitlist"
import { waitlistSchema, type WaitlistInput } from "@/lib/validations/waitlist"

const FALLBACK_MESSAGE = "Something went wrong. Please try again."

export function useWaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { fullName: "", email: "", businessName: "" },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await joinWaitlist(values)
      setIsSubmitted(true)
    } catch (error) {
      toast.error(error instanceof ApiError ? error.message : FALLBACK_MESSAGE)
    }
  })

  return { form, onSubmit, isSubmitted }
}
