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
    id: 'interface',
    label: 'interface',
    detail:
      'Clear hierarchy and interaction design that makes the next step feel obvious.',
  },
  {
    id: 'code',
    label: 'code',
    detail:
      'Production UI that ships—responsive, performant, and maintainable beyond the prototype.',
  },
  {
    id: 'accessibility',
    label: 'accessibility',
    detail:
      'Keyboard paths, focus, contrast, and semantic structure—including in learning products, where the UI must never compete with the lesson.',
  },
]

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

export default function ImpactStatement() {
  const headingId = useId()
  const panelId = useId()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsInView(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const activeKeyword = keywords.find((k) => k.id === activeId) ?? null
  const isRevealing = activeKeyword !== null
  const revealClass = isInView ? 'is-inview' : ''

  const open = (id: string) => setActiveId(id)
  const close = (id: string) =>
    setActiveId((prev) => (prev === id ? null : prev))
  const toggle = (id: string) =>
    setActiveId((prev) => (prev === id ? null : id))

  const renderKeyword = (keyword: Keyword) => (
    <span key={keyword.id} className="hero-keyword">
      <button
        type="button"
        className="hero-keyword__trigger m-0 inline cursor-pointer border-0 bg-transparent p-0 align-baseline text-teal-mid outline-none [font:inherit] [line-height:inherit] hover:text-teal-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
        aria-expanded={activeId === keyword.id}
        aria-controls={panelId}
        onMouseEnter={() => open(keyword.id)}
        onMouseLeave={() => close(keyword.id)}
        onFocus={() => open(keyword.id)}
        onBlur={() => close(keyword.id)}
        onClick={() => toggle(keyword.id)}
      >
        {keyword.label}
      </button>
    </span>
  )

  return (
    <section
      id="top"
      aria-labelledby={headingId}
      className="relative flex min-h-[100dvh] w-full items-center overflow-hidden bg-ink"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="atmosphere-wash absolute inset-0" />
        <div className="atmosphere-rules absolute inset-0" />
        <HandSquiggle className="ink-draw absolute bottom-10 left-6 h-6 w-[140px] text-teal-mid/60 sm:left-10" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 pb-16 pt-[80px] sm:gap-12 sm:px-10 sm:pt-[156px] xl:px-0">
        <h1
          id={headingId}
          className={`hero-title reveal reveal--2 w-full text-[40px] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-[48px] sm:font-bold sm:leading-[1.2] md:text-[64px] md:leading-[1.15] xl:text-[72px] xl:leading-[1.1] 2xl:text-[96px] 2xl:leading-[1.2] ${revealClass}`}
        >
          Corina is a digital product designer who helps teams bridge{' '}
          {renderKeyword(keywords[0])}, {renderKeyword(keywords[1])}, and{' '}
          {renderKeyword(keywords[2])} — with {renderKeyword(keywords[3])} at the center.
        </h1>

        <div
          className={`reveal reveal--1 flex w-full items-start justify-end text-right ${revealClass}`}
        >
          <div
            id={panelId}
            role="note"
            aria-live="polite"
            aria-hidden={!isRevealing}
            className={`max-w-2xl ${isRevealing ? 'is-open' : ''}`}
          >
            {activeKeyword && (
              <>
                <p className="mb-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-teal-mid">
                  {activeKeyword.label}
                </p>
                <p className="text-base leading-relaxed text-paper-muted">
                  {activeKeyword.detail}
                </p>
              </>
            )}
          </div>

          <div
            aria-hidden={isRevealing}
            className={`max-w-2xl ${isRevealing ? 'hidden' : ''}`}
          >
            <p className="mb-2 flex items-center justify-end gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-paper-muted">
              <HandAsterisk className="ink-draw h-4 w-4 text-teal-mid" />
              Sidenote¹
            </p>
            <p className="text-base leading-relaxed text-paper-muted">
              Currently taking on select engagements with product teams—including
              learning and education products. Based in Australia · open to remote.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
