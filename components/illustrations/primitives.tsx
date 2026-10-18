type IsoPlaneProps = {
  /** Where the plane's origin lands on the canvas. */
  x: number
  y: number
  children: React.ReactNode
}

/**
 * Draws flat shapes as if lying on an isometric floor: everything inside is
 * authored in plain x/y and projected to the canvas.
 */
export function IsoPlane({ x, y, children }: IsoPlaneProps) {
  return <g transform={`matrix(0.866 0.5 -0.866 0.5 ${x} ${y})`}>{children}</g>
}

type PanelProps = {
  width: number
  height: number
  x?: number
  y?: number
  radius?: number
  /** Solid ink fill, for buttons and emphasis. */
  strong?: boolean
}

/** A card-coloured slab with an ink outline. Hides whatever sits behind it. */
export function Panel({
  width,
  height,
  x = 0,
  y = 0,
  radius = 6,
  strong = false,
}: PanelProps) {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={radius}
      vectorEffect="non-scaling-stroke"
      className={strong ? "fill-current" : "fill-(--slab)"}
    />
  )
}

type BarProps = {
  x: number
  y: number
  width: number
  height?: number
  strong?: boolean
}

/** A rounded stroke-less bar standing in for a line of text or a value. */
export function Bar({ x, y, width, height = 3.5, strong = false }: BarProps) {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={height / 2}
      stroke="none"
      className={strong ? "fill-current" : "fill-current/30"}
    />
  )
}
