/** Shared canvas for the line illustrations: thin ink strokes that follow the text colour. */
export function IllustrationFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 360 260"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-auto w-full"
    >
      {children}
    </svg>
  )
}
