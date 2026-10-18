import { IllustrationFrame } from "@/components/illustrations/illustration-frame"
import { Bar, IsoPlane, Panel } from "@/components/illustrations/primitives"

/** Three team members on a store card, one of them highlighted. */
export function StaffIllustration() {
  return (
    <IllustrationFrame>
      <IsoPlane x={186} y={50}>
        <Panel width={190} height={118} />
        {[0, 1, 2].map((i) => {
          const cx = 36 + i * 60
          return (
            <g key={i}>
              <circle
                cx={cx}
                cy={36}
                r={12}
                vectorEffect="non-scaling-stroke"
                className={i === 1 ? "fill-current" : "fill-(--slab)"}
              />
              <path
                d={`M${cx - 18} 76a18 18 0 0 1 36 0`}
                vectorEffect="non-scaling-stroke"
              />
              <Bar x={cx - 16} y={86} width={32} strong={i === 1} />
              <Bar x={cx - 11} y={96} width={22} height={3} />
            </g>
          )
        })}
      </IsoPlane>
    </IllustrationFrame>
  )
}
