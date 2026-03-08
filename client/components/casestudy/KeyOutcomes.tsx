import { useId } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Outcome = {
  id: string
  title: string
  description: string
  iconNode?: React.ReactNode
  iconEmoji?: string
  iconSrc?: string
  iconAlt?: string
}

interface KeyOutcomesProps {
  title?: string
  outcomes: Outcome[]
  className?: string
}

type OutcomeIconProps = {
  iconNode?: React.ReactNode
  iconEmoji?: string
  iconSrc?: string
  iconAlt?: string
}

function OutcomeIcon({
  iconNode,
  iconEmoji,
  iconSrc,
  iconAlt,
}: OutcomeIconProps) {
  if (iconNode) {
    return (
      <span
        aria-hidden="true"
        className="grid h-7 w-7 place-items-center text-[#CBEDE8]"
      >
        {iconNode}
      </span>
    )
  }

  if (iconSrc) {
    return (
      <img
        src={iconSrc}
        alt={iconAlt?.trim() ?? ''}
        aria-hidden={iconAlt?.trim() ? undefined : 'true'}
        className="h-7 w-7"
      />
    )
  }

  if (iconEmoji) {
    return (
      <span aria-hidden="true" className="text-3xl text-[#CBEDE8]">
        {iconEmoji}
      </span>
    )
  }

  return null
}

export default function KeyOutcomes({
  title = 'Key Outcomes',
  outcomes,
  className = '',
}: KeyOutcomesProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  if (outcomes.length === 0) return null

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className={`relative mb-10 bg-[#08082a] px-6 py-16 sm:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id={headingId}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          {title}
        </h2>

        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {outcomes.map((outcome, index) => (
            <li
              key={outcome.id}
              className={`rounded-lg bg-[#0f0f3a] transition-all duration-700 ease-in-out ${
                inView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              style={
                shouldReduceMotion
                  ? undefined
                  : { transitionDelay: `${index * 80}ms` }
              }
            >
              <div className="flex h-full flex-col items-center px-14 py-16 text-center">
                <OutcomeIcon
                  iconNode={outcome.iconNode}
                  iconEmoji={outcome.iconEmoji}
                  iconSrc={outcome.iconSrc}
                  iconAlt={outcome.iconAlt}
                />
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-slate-300">{outcome.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
