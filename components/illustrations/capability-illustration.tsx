import { DetailIllustration } from "@/components/illustrations/capabilities/detail-illustration"
import { OnboardingIllustration } from "@/components/illustrations/capabilities/onboarding-illustration"
import { OverviewIllustration } from "@/components/illustrations/capabilities/overview-illustration"
import { PaymentsIllustration } from "@/components/illustrations/capabilities/payments-illustration"
import { StaffIllustration } from "@/components/illustrations/capabilities/staff-illustration"
import { TransactionsIllustration } from "@/components/illustrations/capabilities/transactions-illustration"
import type { CapabilityId } from "@/lib/content"

const ILLUSTRATIONS: Record<CapabilityId, React.ComponentType> = {
  overview: OverviewIllustration,
  transactions: TransactionsIllustration,
  detail: DetailIllustration,
  staff: StaffIllustration,
  payments: PaymentsIllustration,
  onboarding: OnboardingIllustration,
}

export function CapabilityIllustration({
  id,
  className,
}: {
  id: CapabilityId
  className?: string
}) {
  const Illustration = ILLUSTRATIONS[id]

  return (
    <div className={className}>
      <Illustration />
    </div>
  )
}
