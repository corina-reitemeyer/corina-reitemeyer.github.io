import { useEffect, useId, useState, type SVGProps } from 'react'

type Keyword = {
  id: string
  label: string
  detail: string
}

const keywords: Keyword[] = [
  {
    id: 'design-systems',
    label: 'design systems',
    detail:
      'Tokens, components, and shared language so design and engineering stay in sync as the product grows.',
  },
  {
    id: 'product',
    label: 'product',
    detail:
      'Turning ambiguous problems into product decisions that hold up under real constraints.',
  },
  {
    id: 'code',
    label: 'code',
    detail:
      'Enough front-end fluency in HTML, CSS, and React to prototype and ship real interfaces, especially with AI pairing.',
  },
  {
    id: 'accessibility',
    label: 'accessibility',
    detail:
      'Practical experience applying WCAG 2.1 in NZ Government work, designing for everyone, not just the majority.',
  },
]

function HandSquiggle(props: SVGProps<SVGSVGElement>) {
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

function HandAsterisk(props: SVGProps<SVGSVGElement>) {
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

export default function ImpactStatement() {
  const headingId = useId()
  const panelId = useId()
  const [isInView, setIsInView] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [displayKeyword, setDisplayKeyword] = useState<Keyword | null>(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsInView(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const revealClass = isInView ? 'is-inview' : ''
  const activeKeyword = keywords.find((k) => k.id === activeId) ?? null

  useEffect(() => {
    if (activeKeyword) setDisplayKeyword(activeKeyword)
  }, [activeKeyword])

  const open = (id: string) => setActiveId(id)
  const close = (id: string) =>
    setActiveId((prev) => (prev === id ? null : prev))

  const renderKeyword = (keyword: Keyword) => (
    <span key={keyword.id} className="hero-keyword">
      <button
        type="button"
        className="text-teal-mid hover:text-teal-mist focus-visible:outline-focus m-0 inline cursor-pointer border-0 bg-transparent p-0 align-baseline outline-none transition-colors duration-75 ease-out [font:inherit] [line-height:inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        aria-expanded={activeId === keyword.id}
        aria-controls={panelId}
        onMouseEnter={() => open(keyword.id)}
        onMouseLeave={() => close(keyword.id)}
        onFocus={() => open(keyword.id)}
        onBlur={() => close(keyword.id)}
        onClick={() => open(keyword.id)}
      >
        {keyword.label}
      </button>
    </span>
  )

  return (
    <section
      id="top"
      aria-labelledby={headingId}
      className="bg-ink relative flex min-h-[100dvh] w-full items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="atmosphere-wash absolute inset-0" />
        <div className="atmosphere-rules absolute inset-0" />
        <HandSquiggle className="ink-draw text-teal-mid/60 absolute bottom-10 left-6 h-6 w-[140px] sm:left-10" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-6 pb-[112px] pt-[112px] sm:px-10 sm:pb-[164px] sm:pt-[164px] xl:px-0">
        <p
          className={`reveal reveal--1 text-teal-mid mb-2 flex items-center gap-2 font-normal text-xs uppercase tracking-[0.16em] sm:mb-3 ${revealClass}`}
        >
          <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
            <span className="bg-teal-mid absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-teal-mid relative inline-flex h-1.5 w-1.5 rounded-full shadow-[0_0_6px_var(--teal-mid)]" />
          </span>
          Available for new opportunities
        </p>

        <h1
          id={headingId}
          className={`reveal reveal--2 text-paper mb-6 w-full text-[clamp(3.75rem,13vw,8.5rem)] font-bold leading-[0.92] tracking-[-0.04em] sm:mb-8 ${revealClass}`}
        >
          <span className="block">A designer</span>
          <span className="block">who builds.</span>
        </h1>

        <p
          className={`hero-deck reveal reveal--3 max-w-measure text-paper-muted text-[clamp(1.1rem,1.8vw,1.25rem)] ${revealClass}`}
        >
          Corina is a digital product designer who bridges{' '}
          {renderKeyword(keywords[0])}, {renderKeyword(keywords[1])}, and{' '}
          {renderKeyword(keywords[2])}, using AI to ship it herself, with{' '}
          {renderKeyword(keywords[3])} always at the center.
        </p>
      </div>

      <div
        id={panelId}
        role="note"
        aria-live="polite"
        aria-hidden={!activeKeyword}
        className={`pointer-events-none absolute right-6 top-1/2 z-10 hidden max-w-xs -translate-y-1/2 transition-opacity duration-150 ease-out sm:right-10 sm:block lg:max-w-sm ${activeKeyword ? 'opacity-100' : 'opacity-0'}`}
      >
        {displayKeyword && (
          <div className="flex items-start gap-3">
            <HandAsterisk className="ink-draw text-teal-mid mt-1 h-4 w-4 shrink-0" />
            <p className="font-note text-note text-[clamp(1.15rem,2vw,1.4rem)] font-medium leading-snug">
              {displayKeyword.detail}
            </p>
          </div>
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
