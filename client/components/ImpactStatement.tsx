import { createContext, useContext, useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type PillTag = {
  label: string
  emoji?: string
  emojiLabel?: string
}

type KeywordColor = 'primary' | 'secondary'

type ActiveKeyword = {
  id: string
  fact: string
  color: KeywordColor
}

type KeywordContextValue = {
  activate: (keyword: ActiveKeyword) => void
  deactivate: (id: string) => void
}

const KeywordContext = createContext<KeywordContextValue | null>(null)

const keywordColorClasses: Record<KeywordColor, string> = {
  primary: 'text-teal-mid',
  secondary: 'text-teal-bright',
}

function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 0c.3 2.9 1.1 4.7 2.1 5.9C11.3 6.9 13.1 7.7 16 8c-2.9.3-4.7 1.1-5.9 2.1C8.9 11.3 8.1 13.1 8 16c-.3-2.9-1.1-4.7-2.1-5.9C4.7 9.1 2.9 8.3 0 8c2.9-.3 4.7-1.1 5.9-2.1C6.9 4.7 7.7 2.9 8 0Z" />
    </svg>
  )
}

type ImpactKeywordProps = {
  id: string
  color: KeywordColor
  fact: string
  children: React.ReactNode
}

export function ImpactKeyword({ id, color, fact, children }: ImpactKeywordProps) {
  const ctx = useContext(KeywordContext)
  if (!ctx) {
    throw new Error('ImpactKeyword must be rendered inside an ImpactStatement line')
  }
  const { activate, deactivate } = ctx
  const factId = `${id}-fact`

  return (
    <button
      type="button"
      className={`kw m-0 inline cursor-pointer border-0 bg-transparent p-0 align-baseline outline-none transition-opacity duration-300 ease-out [font:inherit] [line-height:inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus ${keywordColorClasses[color]}`}
      onMouseEnter={() => activate({ id, fact, color })}
      onMouseLeave={() => deactivate(id)}
      onFocus={() => activate({ id, fact, color })}
      onBlur={() => deactivate(id)}
      aria-describedby={factId}
    >
      {children}
      <span id={factId} className="sr-only">
        {fact}
      </span>
    </button>
  )
}

type ImpactStatementProps = {
  greeting?: string
  lines: React.ReactNode[]
  pills?: PillTag[]
  pillsLabel?: string
  align?: 'left' | 'center'
  className?: string
  padded?: boolean
}

export default function ImpactStatement({
  greeting,
  lines,
  pills,
  pillsLabel = 'Designer profile summary',
  align = 'left',
  className = '',
  padded = false,
}: ImpactStatementProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()
  const [active, setActive] = useState<ActiveKeyword | null>(null)

  const activate = (keyword: ActiveKeyword) => setActive(keyword)
  const deactivate = (id: string) =>
    setActive((prev) => (prev?.id === id ? null : prev))

  const isCenter = align === 'center'
  const alignClasses = isCenter
    ? 'text-center items-center'
    : 'text-left items-start'
  const padY = padded ? 'py-4 md:py-16' : ''

  return (
    <section
      aria-labelledby={headingId}
      className={`relative w-full overflow-visible ${padY} ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10 xl:px-0">
        <div className={`flex w-full flex-col gap-6 sm:gap-12 ${alignClasses}`}>
          <KeywordContext.Provider value={{ activate, deactivate }}>
            <motion.h1
              id={headingId}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[48px] sm:font-bold sm:leading-[1.2] md:text-[64px] md:leading-[1.15] xl:text-[72px] xl:leading-[1.1] 2xl:text-[96px] 2xl:leading-[1.2]"
            >
              {greeting && (
                <span className="block w-full text-paper-muted">
                  {greeting}
                </span>
              )}
              {lines.map((line, i) => (
                <span
                  key={i}
                  className="impact-headline block w-full text-paper"
                >
                  {line}
                </span>
              ))}
            </motion.h1>

            <div
              aria-live="polite"
              className={`flex min-h-[20px] w-full items-start sm:min-h-[24px] ${isCenter ? 'justify-center text-center' : 'justify-end text-right'}`}
            >
              <AnimatePresence>
                {active && (
                  <motion.p
                    key={active.id}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
                    animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex max-w-2xl -rotate-1 items-start gap-2 text-left font-note text-[clamp(1.15rem,2vw,1.4rem)] font-medium text-note"
                  >
                    <SparkleIcon
                      className={`mt-1 h-3.5 w-3.5 shrink-0 ${keywordColorClasses[active.color]}`}
                    />
                    <span>{active.fact}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </KeywordContext.Provider>

          {pills && pills.length > 0 && (
            <motion.ul
              role="list"
              aria-label={pillsLabel}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
              animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`flex list-none flex-wrap gap-3 p-0 ${isCenter ? 'justify-center' : 'justify-start'}`}
            >
              {pills.map((pill, i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-charcoal-soft px-4 pb-[9px] pt-[7px] text-sm leading-none text-paper backdrop-blur-sm"
                >
                  {pill.emoji ? (
                    <>
                      <span>{pill.label}</span>
                      <span
                        role="img"
                        aria-label={pill.emojiLabel ?? pill.emoji}
                      >
                        {pill.emoji}
                      </span>
                    </>
                  ) : (
                    pill.label
                  )}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </section>
  )
}
