"use client"

import { toast } from "sonner"

import { GoogleIcon } from "@/components/icons/google-icon"
import { Button } from "@/components/ui/button"

export function GoogleButton() {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className="w-full"
      onClick={() => toast.info("Google sign in is not open yet.")}
    >
      <GoogleIcon className="size-4" />
      Continue with Google
    </Button>
  )
}
