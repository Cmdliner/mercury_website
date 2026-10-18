import { TokenValue } from "@/components/design-system/token-value"
import type { ColorToken } from "@/lib/design-tokens"

export function ColorSwatch({ token }: { token: ColorToken }) {
  return (
    <div>
      <div
        className="h-20 border border-border-strong"
        style={{ background: `var(${token.variable})` }}
      />
      <p className="mt-3 text-sm font-medium">{token.name}</p>
      <p className="font-mono text-xs text-muted-foreground">{token.variable}</p>
      <TokenValue variable={token.variable} />
      <p className="mt-1 text-sm text-muted-foreground">{token.usage}</p>
    </div>
  )
}
