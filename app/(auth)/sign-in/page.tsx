import type { Metadata } from "next"

import { AuthFrame } from "@/components/auth/auth-frame"
import { SignInForm } from "@/components/auth/sign-in-form"

export const metadata: Metadata = {
  title: "Sign in | Mercury",
  robots: { index: false },
}

export default function SignIn() {
  return (
    <AuthFrame>
      <SignInForm />
    </AuthFrame>
  )
}
