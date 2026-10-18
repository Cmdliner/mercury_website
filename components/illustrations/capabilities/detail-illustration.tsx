import { IllustrationFrame } from "@/components/illustrations/illustration-frame"
import { Bar, IsoPlane, Panel } from "@/components/illustrations/primitives"

/** A list with a detail drawer sliding in over it. */
export function DetailIllustration() {
  return (
    <IllustrationFrame>
      <IsoPlane x={160} y={72}>
        <Panel width={170} height={110} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <Bar x={14} y={14 + i * 24} width={70} />
            <Bar x={14} y={23 + i * 24} width={40} height={3} />
            <Bar x={118} y={17 + i * 24} width={34} height={4.5} />
          </g>
        ))}
      </IsoPlane>
      <IsoPlane x={248} y={34}>
        <Panel width={88} height={118} />
        <Bar x={10} y={12} width={44} height={5} strong />
        <Bar x={10} y={28} width={66} />
        <Bar x={10} y={38} width={54} />
        <Bar x={10} y={48} width={60} />
        <Bar x={10} y={58} width={36} />
        <Panel x={10} y={88} width={68} height={18} radius={3} strong />
      </IsoPlane>
    </IllustrationFrame>
  )
}
