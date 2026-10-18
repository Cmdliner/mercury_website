import { IllustrationFrame } from "@/components/illustrations/illustration-frame"
import { Bar, IsoPlane, Panel } from "@/components/illustrations/primitives"

/** A customer payment page with an amount field and a button, and a naira coin beside it. */
export function PaymentsIllustration() {
  return (
    <IllustrationFrame>
      <IsoPlane x={196} y={42}>
        <Panel width={160} height={126} />
        <Bar x={14} y={14} width={50} height={5} strong />
        <Panel x={14} y={32} width={132} height={28} radius={3} />
        <text
          x={24}
          y={51}
          fontSize={14}
          fontWeight={600}
          stroke="none"
          className="fill-foreground"
        >
          ₦0.00
        </text>
        <Panel x={14} y={70} width={132} height={22} radius={3} strong />
        <text
          x={80}
          y={84}
          fontSize={9}
          fontWeight={500}
          textAnchor="middle"
          stroke="none"
          className="fill-background"
        >
          Continue
        </text>
        <Bar x={14} y={104} width={70} height={3} />
        <Bar x={14} y={112} width={46} height={3} />
      </IsoPlane>
      <circle
        cx={286}
        cy={50}
        r={22}
        vectorEffect="non-scaling-stroke"
        className="fill-(--slab)"
      />
      <text
        x={286}
        y={58}
        fontSize={22}
        fontWeight={600}
        textAnchor="middle"
        stroke="none"
        className="fill-current"
      >
        ₦
      </text>
    </IllustrationFrame>
  )
}
