import { useId } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

type Meta = {
  date: string
  type: string
  specialisation?: string
}

type CaseStudyNavyProps = {
  intro: string
  company: string
  project: string
  imageSrc: string
  imageAlt: string
  imageCaption?: string
  scope: string
  involvement: string
  team: string
  meta: Meta
  className?: string
}

type DetailItemProps = {
  term: string
  description: string
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const fadeInUpDelayed: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
  },
}

const sharedViewport = { once: true, amount: 0.2 } as const

function DetailItem({ term, description }: DetailItemProps) {
  return (
    <div>
      <dt className="text-sm font-semibold uppercase tracking-wide text-white">
        {term}
      </dt>
      <dd className="mt-2 max-w-prose text-slate-300">{description}</dd>
    </div>
  )
}

export default function CaseStudyNavy({
  intro,
  company,
  project,
  imageSrc,
  imageAlt,
  imageCaption,
  scope,
  involvement,
  team,
  meta,
  className = '',
}: CaseStudyNavyProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()

  const metaItems = [meta.date, meta.type, meta.specialisation].filter(
    Boolean,
  ) as string[]

  return (
    <section
      aria-labelledby={headingId}
      className={`w-full bg-[#08082a] text-white ${className}`}
    >
      <div className="container mx-auto max-w-6xl px-6 pb-14 pt-28 sm:px-8 sm:pb-16">
        <motion.h2
          id={headingId}
          className="max-w-4xl pb-8 text-3xl font-semibold leading-[1.4] text-white sm:pb-14 md:text-4xl md:leading-[1.3] lg:text-5xl lg:leading-[1.25]"
          variants={shouldReduceMotion ? undefined : fadeInUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={sharedViewport}
        >
          {intro}
        </motion.h2>

        <motion.figure
          className="mt-14 sm:mt-16"
          variants={shouldReduceMotion ? undefined : fadeInUpDelayed}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={sharedViewport}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-md object-cover"
            loading="eager"
            decoding="async"
          />
          {imageCaption && (
            <figcaption className="mt-3 text-sm text-slate-300">
              {imageCaption}
            </figcaption>
          )}
        </motion.figure>

        <div className="mt-28 grid grid-cols-1 gap-10 sm:mt-32 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-3xl font-semibold leading-tight">
              <span className="block text-[#CBEDE8]">{company}</span>
              <span className="block text-white">{project}</span>
            </p>
          </div>

          <div className="md:col-span-8">
            <dl className="space-y-8">
              <DetailItem term="Scope" description={scope} />
              <DetailItem term="Role / Involvement" description={involvement} />
              <DetailItem term="Team & Stakeholders" description={team} />
            </dl>

            {metaItems.length > 0 && (
              <div className="mt-12">
                <h3 className="sr-only">Project metadata</h3>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
                <ul
                  role="list"
                  className="flex flex-wrap items-center gap-y-2 font-semibold text-white"
                >
                  {metaItems.map((item, index) => (
                    <li key={item} className="flex items-center">
                      {index > 0 && (
                        <span aria-hidden="true" className="mx-4">
                          •
                        </span>
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
