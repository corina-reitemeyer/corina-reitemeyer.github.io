import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { defaultViewport } from '../../lib/motion'

type PullQuoteProps = {
  quote: string
  attribution?: string
  attributionRole?: string
  tag?: string
  className?: string
}

export default function PullQuote({
  quote,
  attribution,
  attributionRole,
  tag,
  className = '',
}: PullQuoteProps) {
  const quoteId = useId()
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.figure
      aria-labelledby={quoteId}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={defaultViewport}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-10 sm:px-14 sm:py-14 ${className}`}
    >
      <motion.span
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7, rotate: -4 }}
        whileInView={
          shouldReduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }
        }
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        viewport={defaultViewport}
        className="pointer-events-none absolute -top-6 left-6 select-none font-serif text-[8rem] leading-none text-[#CBEDE8]/15 sm:left-8 sm:text-[10rem]"
      >
        &ldquo;
      </motion.span>

      {tag && (
        <motion.span
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          viewport={defaultViewport}
          className="relative mb-6 inline-block rounded-full border border-[#CBEDE8]/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#CBEDE8]/80"
        >
          {tag}
        </motion.span>
      )}

      <motion.blockquote
        id={quoteId}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        viewport={defaultViewport}
        className="relative text-2xl font-semibold leading-snug text-white antialiased sm:text-3xl"
      >
        {quote}
      </motion.blockquote>

      {(attribution || attributionRole) && (
        <motion.figcaption
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          viewport={defaultViewport}
          className="relative mt-6 text-sm text-slate-400 antialiased"
        >
          {attribution && (
            <span className="font-semibold text-slate-300">{attribution}</span>
          )}
          {attribution && attributionRole && (
            <span className="mx-2 text-slate-400">·</span>
          )}
          {attributionRole}
        </motion.figcaption>
      )}
    </motion.figure>
  )
}
