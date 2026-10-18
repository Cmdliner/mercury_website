import { IllustrationFrame } from "@/components/illustrations/illustration-frame"
import { Bar, IsoPlane, Panel } from "@/components/illustrations/primitives"

const STEPS = [0, 1, 2]

/** A setup checklist: two steps done, the third in progress, with a progress bar. */
export function OnboardingIllustration() {
  return (
    <IllustrationFrame>
      <IsoPlane x={190} y={46}>
        <Panel width={186} height={118} />
        {STEPS.map((i) => {
          const cy = 26 + i * 30
          const done = i < 2
          return (
            <g key={i}>
              {i < 2 ? (
                <path
                  d={`M22 ${cy + 8}V${cy + 22}`}
                  vectorEffect="non-scaling-stroke"
                  opacity={0.5}
                />
              ) : null}
              <circle
                cx={22}
                cy={cy}
                r={8}
                vectorEffect="non-scaling-stroke"
                strokeDasharray={done ? undefined : "2 3"}
                className={done ? "fill-current" : "fill-(--slab)"}
              />
              {done ? (
                <path
                  d={`M18.5 ${cy}l2.5 2.5 4.5-5`}
                  vectorEffect="non-scaling-stroke"
                  className="stroke-background"
                />
              ) : null}
              <Bar x={40} y={cy - 6} width={70} strong={done} />
              <Bar x={40} y={cy + 3} width={44} height={3} />
            </g>
          )
        })}
        <Bar x={14} y={104} width={158} height={5} />
        <Bar x={14} y={104} width={100} height={5} strong />
      </IsoPlane>
    </IllustrationFrame>
  )
}
