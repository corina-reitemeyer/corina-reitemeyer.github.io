import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type PillTag = {
  label: string
  emoji?: string
  emojiLabel?: string
}

type ImpactStatementProps = {
  greeting?: string
  lines: React.ReactNode[]
  pills?: PillTag[]
  pillsLabel?: string
  align?: 'left' | 'center'
  className?: string
  padded?: boolean
  bgSvgSrc?: string
}

export default function ImpactStatement({
  greeting,
  lines,
  pills,
  pillsLabel = 'Designer profile summary',
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
  const padY = padded ? 'py-4 md:py-16' : ''

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
          className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-right"
        />
      )}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10 xl:px-0">
        <div className={`flex w-full flex-col gap-6 sm:gap-12 ${alignClasses}`}>
          <motion.h1
            id={headingId}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[48px] sm:font-bold sm:leading-[1.2] md:text-[64px] md:leading-[1.15] xl:text-[72px] xl:leading-[1.1] 2xl:text-[96px] 2xl:leading-[1.2]"
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
              aria-label={pillsLabel}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
              animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`flex list-none flex-wrap gap-3 p-0 ${isCenter ? 'justify-center' : 'justify-start'}`}
            >
              {pills.map((pill, i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 pb-[9px] pt-[7px] text-sm leading-none text-white backdrop-blur-sm"
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
