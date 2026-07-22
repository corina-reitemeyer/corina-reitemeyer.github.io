import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../../lib/useDocumentTitle'
import { ROUTES } from '../../lib/routes'
import { HandLoop } from '../../components/icons/Doodles'

export default function NotFound() {
  const headingId = useId()
  const [isInView, setIsInView] = useState(false)

  useDocumentTitle('Page not found • Corina Reitemeyer')

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsInView(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const revealClass = isInView ? 'is-inview' : ''

  return (
    <header
      aria-labelledby={headingId}
      className="bg-ink relative flex min-h-[100dvh] w-full items-center overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="atmosphere-wash absolute inset-0" />
        <div className="atmosphere-rules absolute inset-0" />
        <p className="margin-note ink-write absolute right-16 top-40 hidden -rotate-2 sm:right-24 sm:top-48 sm:block">
          you&rsquo;ve wandered off the map
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-[112px] sm:px-10 sm:pb-24 sm:pt-[164px] xl:px-0">
        <p
          className={`reveal reveal--1 text-teal-mid mb-3 flex items-center gap-2 font-normal text-xs uppercase tracking-[0.16em] ${revealClass}`}
        >
          <HandLoop className="h-4 w-4" />
          404
        </p>

        <h1
          id={headingId}
          className={`reveal reveal--2 text-paper mb-6 max-w-[14ch] text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] ${revealClass}`}
        >
          Off the map.
        </h1>

        <p
          className={`reveal reveal--3 max-w-measure text-paper-muted mb-12 text-[clamp(1.1rem,1.8vw,1.3rem)] ${revealClass}`}
        >
          This page doesn&rsquo;t exist — moved, renamed, or maybe it was never
          real. Let&rsquo;s get you back on track.
        </p>

        <div
          className={`reveal reveal--4 flex flex-wrap items-center gap-x-8 gap-y-4 ${revealClass}`}
        >
          <Link
            to="/"
            className="bg-paper text-ink hover:bg-teal-mist inline-flex min-h-[2.75rem] items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5"
          >
            Back to home
          </Link>
          <Link
            to={ROUTES.digitalProducts}
            className="text-teal-mid hover:text-teal-mist inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
          >
            See selected work
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
