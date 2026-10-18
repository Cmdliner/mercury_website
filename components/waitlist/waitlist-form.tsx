"use client"

import { Controller } from "react-hook-form"

import { FormField } from "@/components/shared/form-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { WaitlistSuccess } from "@/components/waitlist/waitlist-success"
import { useWaitlistForm } from "@/hooks/use-waitlist-form"
import { STORE_COUNT_OPTIONS } from "@/lib/constants"

export function WaitlistForm() {
  const { form, onSubmit, isSubmitted } = useWaitlistForm()
  const { register, control, formState } = form
  const { errors, isSubmitting } = formState

  if (isSubmitted) return <WaitlistSuccess />

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <FormField label="Full name" htmlFor="fullName" error={errors.fullName?.message}>
        <Input
          id="fullName"
          autoComplete="name"
          aria-invalid={!!errors.fullName}
          {...register("fullName")}
        />
      </FormField>

      <FormField label="Work email" htmlFor="email" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </FormField>

      <FormField
        label="Business name"
        htmlFor="businessName"
        error={errors.businessName?.message}
      >
        <Input
          id="businessName"
          autoComplete="organization"
          aria-invalid={!!errors.businessName}
          {...register("businessName")}
        />
      </FormField>

      <FormField
        label="How many stores do you run?"
        htmlFor="storeCount"
        error={errors.storeCount?.message}
      >
        <Controller
          control={control}
          name="storeCount"
          render={({ field }) => (
            <Select
              items={STORE_COUNT_OPTIONS}
              value={field.value ?? null}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                id="storeCount"
                className="w-full"
                aria-invalid={!!errors.storeCount}
              >
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                {STORE_COUNT_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </FormField>

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2">
        {isSubmitting ? "Sending..." : "Join the waitlist"}
      </Button>
    </form>
  )
}
