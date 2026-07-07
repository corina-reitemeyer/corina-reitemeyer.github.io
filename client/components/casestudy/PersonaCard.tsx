import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { defaultViewport } from '../../lib/motion'

type PersonaFact = {
  label: string
  value: string
}

type PersonaCardProps = {
  name: string
  title: string
  context?: string
  avatarSrc: string
  avatarAlt: string
  facts: PersonaFact[]
  quote?: string
  className?: string
}

export default function PersonaCard({
  name,
  title,
  context,
  avatarSrc,
  avatarAlt,
  facts,
  quote,
  className = '',
}: PersonaCardProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={defaultViewport}
      aria-labelledby={headingId}
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f3a] ${className}`}
    >
      <div className="flex flex-col items-center gap-5 border-b border-white/10 bg-white/[0.03] px-6 py-8 text-center sm:flex-row sm:text-left">
        <img
          src={avatarSrc}
          alt={avatarAlt}
          className="h-24 w-24 flex-none rounded-full bg-white/5 object-cover"
        />
        <div>
          <h3
            id={headingId}
            className="text-2xl font-bold text-white antialiased"
          >
            {name}
          </h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-[#CBEDE8]/80">
            {title}
          </p>
          {context && (
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              {context}
            </p>
          )}
        </div>
      </div>

      <dl className="grid grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-2 sm:px-8">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 antialiased">
              {fact.label}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-slate-300 antialiased">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      {quote && (
        <div className="px-6 pb-8 sm:px-8">
          <blockquote className="border-t border-white/10 pt-6 text-base italic leading-relaxed text-slate-300 antialiased">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </div>
      )}
    </motion.div>
  )
}
