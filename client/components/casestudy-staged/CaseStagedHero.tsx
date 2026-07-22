import { Link } from 'react-router-dom'
import {
  HandAsterisk,
  HandLoop,
  HandSquiggle,
  HandUnderlineSimple,
  ScrollMouseIcon,
} from '../icons/Doodles'

type Props = {
  backHref: string
  backLabel?: string
  meta: string
  title: string
  marginNote?: string
  disclaimer?: string
}

export default function CaseStagedHero({
  backHref,
  backLabel = 'Back to work',
  meta,
  title,
  marginNote = 'case notes',
  disclaimer,
}: Props) {
  return (
    <section
      aria-labelledby="case-staged-heading"
      className="case-staged__snap bg-ink relative flex min-h-[100dvh] w-full items-center overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="atmosphere-wash absolute inset-0" />
        <div className="atmosphere-rules absolute inset-0" />
        <HandSquiggle className="text-teal-mid/60 absolute bottom-10 left-6 h-6 w-[140px] sm:left-10" />
        <HandLoop className="text-teal-mid/50 absolute bottom-8 left-[168px] hidden h-5 w-5 -rotate-6 sm:left-[196px] sm:block" />

        <div className="absolute right-6 top-24 hidden -rotate-2 text-right sm:right-10 sm:top-28 sm:block">
          <p className="margin-note ink-write">{marginNote}</p>
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
          <HandAsterisk className="text-teal-mid h-4 w-4 shrink-0" />
          <p className="text-teal-mid font-normal text-xs uppercase tracking-[0.16em]">
            {meta}
          </p>
        </div>
        <h1
          id="case-staged-heading"
          className="text-paper relative max-w-[16ch] text-[clamp(2.75rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em]"
        >
          {title}
        </h1>
        <HandUnderlineSimple className="text-teal-mid/70 mt-2 h-3 w-[90px]" />
        {disclaimer && (
          <p className="text-paper-muted mt-6 max-w-measure text-sm italic leading-relaxed">
            {disclaimer}
          </p>
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 right-6 z-10 flex flex-col items-center gap-2 text-paper-muted sm:bottom-10 sm:right-10"
      >
        <span className="font-normal text-xs uppercase tracking-[0.16em]">
          Scroll
        </span>
        <ScrollMouseIcon className="h-7 w-4 sm:h-8 sm:w-5" />
      </div>
    </section>
  )
}
