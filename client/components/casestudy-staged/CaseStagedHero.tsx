import { Link } from 'react-router-dom'
import type { SVGProps } from 'react'

type Props = {
  backHref: string
  backLabel?: string
  meta: string
  title: string
  marginNote?: string
}

function HandAsterisk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false" {...props}>
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

function HandSquiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 24" fill="none" aria-hidden="true" focusable="false" {...props}>
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

function HandUnderline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 90 14" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        className="ink-stroke"
        d="M3 8c14-5 30-6 44-3s25 4 40-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
      />
    </svg>
  )
}

function HandLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" focusable="false" {...props}>
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

function ScrollMouseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 40" fill="none" aria-hidden="true" focusable="false" {...props}>
      <rect
        x="1.25"
        y="1.25"
        width="21.5"
        height="37.5"
        rx="10.75"
        stroke="currentColor"
        strokeWidth="1.5"
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

export default function CaseStagedHero({
  backHref,
  backLabel = 'Back to work',
  meta,
  title,
  marginNote = 'case notes',
}: Props) {
  return (
    <section
      aria-labelledby="case-staged-heading"
      className="case-staged__snap bg-ink relative flex min-h-[100dvh] w-full items-center overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="atmosphere-wash absolute inset-0" />
        <div className="atmosphere-rules absolute inset-0" />
        <HandSquiggle className="ink-draw text-teal-mid/60 absolute bottom-10 left-6 h-6 w-[140px] sm:left-10" />
        <HandLoop className="ink-draw text-teal-mid/50 absolute bottom-8 left-[168px] hidden h-5 w-5 -rotate-6 sm:left-[196px] sm:block" />

        <div className="absolute right-6 top-24 hidden -rotate-2 text-right sm:right-10 sm:top-28 sm:block">
          <p className="margin-note ink-draw ink-write">{marginNote}</p>
        </div>
      </div>

      <Link
        to={backHref}
        aria-label={backLabel}
        className="text-paper-muted hover:text-paper absolute left-6 top-6 z-10 inline-flex items-center gap-2 text-sm transition-colors duration-200 sm:left-10 sm:top-10"
      >
        <span aria-hidden="true">←</span>
        {backLabel}
      </Link>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10 xl:px-0">
        <div className="mb-6 flex items-center gap-2.5">
          <HandAsterisk className="ink-draw text-teal-mid h-4 w-4 shrink-0" />
          <p className="text-teal-mid font-normal text-[0.72rem] uppercase tracking-[0.16em]">
            {meta}
          </p>
        </div>
        <h1
          id="case-staged-heading"
          className="text-paper relative max-w-[16ch] text-[clamp(2.75rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em]"
        >
          {title}
        </h1>
        <HandUnderline className="ink-draw text-teal-mid/70 mt-2 h-3 w-[90px]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 right-6 z-10 flex flex-col items-center gap-2 text-paper-muted sm:bottom-10 sm:right-10"
      >
        <span className="font-normal text-[0.6rem] uppercase tracking-[0.16em]">
          Scroll
        </span>
        <ScrollMouseIcon className="h-7 w-4 sm:h-8 sm:w-5" />
      </div>
    </section>
  )
}
