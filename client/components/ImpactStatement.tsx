import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type PillTag = {
  label: string
  emoji?: string
  emojiLabel?: string
}

type ImpactStatementProps = {
  greeting?: string
  lines: (string | React.ReactNode)[]
  pills?: PillTag[]
  align?: 'left' | 'center'
  className?: string
  padded?: boolean
  bgSvgSrc?: string
}

export default function ImpactStatement({
  greeting,
  lines,
  pills,
  align = 'left',
  className = '',
  padded = false,
  bgSvgSrc,
}: ImpactStatementProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()

  const isCenter = align === 'center'
  const alignClasses = isCenter
    ? 'text-center items-center'
    : 'text-left items-start'
  const padY = padded ? 'py-24 md:py-32' : ''

  return (
    <section
      aria-labelledby={headingId}
      className={`relative w-full overflow-visible ${padY} ${className}`}
    >
      {bgSvgSrc && (
        <img
          src={bgSvgSrc}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-screen max-w-none -translate-x-1/2 -translate-y-1/2 select-none"
        />
      )}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-0">
        <div className={`flex w-full flex-col gap-6 ${alignClasses}`}>
          <motion.h1
            id={headingId}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full text-[28px] font-bold leading-[1.25] tracking-tight sm:text-[48px] sm:leading-[1.2] md:text-[64px] md:leading-[1.15] lg:text-[48px] lg:leading-[1.1] xl:text-[80px] xl:leading-[1.08] 2xl:text-[96px] 2xl:leading-[1.2]"
          >
            {greeting && (
              <span className="block w-full text-white/70">{greeting}</span>
            )}
            {lines.map((line, i) => (
              <span key={i} className="block w-full text-white">
                {line}
              </span>
            ))}
          </motion.h1>

          {pills && pills.length > 0 && (
            <motion.ul
              role="list"
              aria-label="Designer profile summary"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
              animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`flex list-none flex-wrap gap-3 p-0 ${isCenter ? 'justify-center' : 'justify-start'}`}
            >
              {pills.map((pill, i) => (
                <li
                  key={i}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm"
                >
                  {pill.emoji ? (
                    <>
                      {pill.label}{' '}
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
