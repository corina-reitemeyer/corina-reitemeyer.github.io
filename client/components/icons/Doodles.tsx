import type { SVGProps } from 'react'

/** Hand-drawn ink doodles and small decorative icons, shared across hero
 *  sections that previously each defined their own copy. */

export function HandAsterisk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        className="ink-stroke"
        d="M16 4v24M6.5 10.5l19 11M6.5 21.5l19-11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
      />
    </svg>
  )
}

/** Wide squiggle -- used in ImpactStatement and CaseStagedHero. */
export function HandSquiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 140 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        className="ink-stroke"
        d="M4 14c12-8 22-8 34-2s22 8 34 2 22-8 34-2 20 7 30 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
      />
    </svg>
  )
}

/** Narrower, tighter squiggle -- distinct shape from HandSquiggle, used on
 *  the Making page. */
export function HandSquiggleCompact(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 28"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        className="ink-stroke"
        d="M4 18c8-12 16 8 24-2s14-2 22 4 14-10 26-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
      />
    </svg>
  )
}

export function HandLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        className="ink-stroke"
        d="M14 5c6 0 9 4 9 9s-4 9-10 9-8-4-8-8 3-8 8-9c2-.3 5 0 6 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
      />
    </svg>
  )
}

type ScrollMouseIconProps = SVGProps<SVGSVGElement> & {
  outlineWidth?: number
}

export function ScrollMouseIcon({
  outlineWidth = 1.5,
  ...props
}: ScrollMouseIconProps) {
  return (
    <svg
      viewBox="0 0 24 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect
        x="1.25"
        y="1.25"
        width="21.5"
        height="37.5"
        rx="10.75"
        stroke="currentColor"
        strokeWidth={outlineWidth}
      />
      <circle
        className="motion-safe:animate-scroll-wheel"
        cx="12"
        cy="11"
        r="2.5"
        fill="currentColor"
      />
    </svg>
  )
}
