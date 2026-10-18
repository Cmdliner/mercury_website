"use client"

import { toast } from "sonner"

import { GoogleButton } from "@/components/auth/google-button"
import { PasswordInput } from "@/components/auth/password-input"
import { FormField } from "@/components/shared/form-field"
import { OrDivider } from "@/components/shared/or-divider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSignInForm } from "@/hooks/use-sign-in-form"

export function SignInForm() {
  const { form, onSubmit } = useSignInForm()
  const { errors, isSubmitting } = form.formState

  return (
    <div>
      <h1 className="text-subtitle">
        Welcome back.
        <br />
        Sign in to Mercury.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Pick up where you left off: balances, reconciliation and every store in
        one place.
      </p>

      <div className="mt-9 grid gap-5">
        <GoogleButton />
        <OrDivider />

        <form onSubmit={onSubmit} noValidate className="grid gap-4">
          <FormField label="Email address" htmlFor="email" error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="owner@mercury.ng"
              aria-invalid={!!errors.email}
              {...form.register("email")}
            />
          </FormField>

          <FormField
            label="Password"
            htmlFor="password"
            error={errors.password?.message}
            action={
              <button
                type="button"
                onClick={() => toast.info("Password reset is not available yet.")}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Forgot password?
              </button>
            }
          >
            <PasswordInput
              id="password"
              autoComplete="current-password"
              aria-invalid={!!errors.password}
              {...form.register("password")}
            />
          </FormField>

          <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 w-full">
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>

      <p className="mt-9 border-t border-border pt-6 text-xs leading-relaxed text-subtle-foreground">
        By signing in, you agree to Mercury&apos;s terms of service and privacy
        policy.
      </p>
    </div>
  )
}
