"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { ApiError } from "@/lib/api/api-error"
import { signIn } from "@/lib/api/auth"
import { signInSchema, type SignInInput } from "@/lib/validations/sign-in"

const FALLBACK_MESSAGE = "Something went wrong. Please try again."

export function useSignInForm() {
  const form = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await signIn(values)
    } catch (error) {
      toast.error(error instanceof ApiError ? error.message : FALLBACK_MESSAGE)
    }
  })

  return { form, onSubmit }
}
