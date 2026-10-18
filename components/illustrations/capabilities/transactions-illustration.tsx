import { IllustrationFrame } from "@/components/illustrations/illustration-frame"
import { Bar, IsoPlane, Panel } from "@/components/illustrations/primitives"

const ROWS = [0, 1, 2, 3, 4]

/** A stack of two ledger sheets; the front one lists money in and out. */
export function TransactionsIllustration() {
  return (
    <IllustrationFrame>
      <IsoPlane x={198} y={30}>
        <Panel width={190} height={120} />
      </IsoPlane>
      <IsoPlane x={178} y={60}>
        <Panel width={190} height={120} />
        {ROWS.map((i) => {
          const top = 14 + i * 20
          const incoming = i % 2 === 0
          return (
            <g key={i}>
              <circle
                cx={16}
                cy={top + 5}
                r={5}
                vectorEffect="non-scaling-stroke"
                className={incoming ? "fill-current" : "fill-(--slab)"}
              />
              <Bar x={30} y={top} width={58 + ((i * 11) % 26)} />
              <Bar x={30} y={top + 8} width={34} height={3} />
              <Bar x={140} y={top + 2} width={36} height={4.5} strong={incoming} />
            </g>
          )
        })}
      </IsoPlane>
    </IllustrationFrame>
  )
}
