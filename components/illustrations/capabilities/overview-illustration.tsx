import { IllustrationFrame } from "@/components/illustrations/illustration-frame"
import { Bar, IsoPlane, Panel } from "@/components/illustrations/primitives"

const BAR_HEIGHTS = [22, 34, 28, 46, 38, 58, 42, 52, 30]

/** A dashboard with stat tiles and a bar chart, and one tile floating above it. */
export function OverviewIllustration() {
  return (
    <IllustrationFrame>
      <IsoPlane x={190} y={44}>
        <Panel width={190} height={120} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <Panel x={12 + i * 58} y={12} width={50} height={32} radius={4} />
            <Bar x={18 + i * 58} y={19} width={20} />
            <Bar x={18 + i * 58} y={29} width={32} height={5} strong />
          </g>
        ))}
        {BAR_HEIGHTS.map((height, i) => (
          <rect
            key={i}
            x={14 + i * 19}
            y={110 - height}
            width={12}
            height={height}
            rx={2}
            stroke="none"
            className={i === 5 ? "fill-current" : "fill-current/30"}
          />
        ))}
      </IsoPlane>
      <IsoPlane x={262} y={14}>
        <Panel width={58} height={36} radius={4} />
        <Bar x={8} y={11} width={26} />
        <Bar x={8} y={21} width={40} height={5} strong />
      </IsoPlane>
    </IllustrationFrame>
  )
}
