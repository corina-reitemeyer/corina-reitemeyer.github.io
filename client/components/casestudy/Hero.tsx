import { useId } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

type Highlight = {
  id: string
  label: string
  description: string
}

type MetaItem = {
  label: string
  value: string
}

type CaseStudyNavyProps = {
  intro: string
  company: string
  project: string
  imageSrc: string
  imageAlt: string
  imageCaption?: string
  overview: string
  involvement: string
  meta: MetaItem[]
  highlights?: Highlight[]
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
      <dt className="text-sm font-semibold uppercase tracking-wide text-white antialiased">
        {term}
      </dt>
      <dd className="mt-2 max-w-prose text-slate-300 antialiased">
        {description}
      </dd>
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
  overview,
  involvement,
  meta,
  highlights,
  className = '',
}: CaseStudyNavyProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby={headingId}
      className={`w-full bg-[#08082a] text-white ${className}`}
    >
      <div className="container mx-auto max-w-6xl px-6 pb-14 pt-28 sm:px-8 sm:pb-16">
        {/* Hook headline */}
        <motion.h2
          id={headingId}
          className="max-w-4xl text-3xl font-semibold leading-[1.4] text-white antialiased md:text-4xl md:leading-[1.3] lg:text-5xl lg:leading-[1.25]"
          variants={shouldReduceMotion ? undefined : fadeInUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={sharedViewport}
        >
          {intro}
        </motion.h2>

        {/* Impact highlights — right under headline */}
        {highlights && highlights.length > 0 && (
          <motion.ul
            aria-label="Project highlights"
            variants={shouldReduceMotion ? undefined : fadeInUpDelayed}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={sharedViewport}
            className="mt-10 grid list-none grid-cols-1 gap-8 border-t border-white/10 p-0 pt-10 sm:mt-12 sm:grid-cols-3 sm:pt-12"
          >
            {highlights.map((highlight) => (
              <li key={highlight.id} className="flex flex-col gap-2">
                <span className="text-xl font-bold text-white antialiased sm:text-2xl">
                  {highlight.label}
                </span>
                <span className="text-base text-slate-300 antialiased">
                  {highlight.description}
                </span>
              </li>
            ))}
          </motion.ul>
        )}

        {/* Cover image */}
        <motion.figure
          className="mt-12 sm:mt-16"
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
            <figcaption className="mt-3 text-sm text-slate-400 antialiased">
              {imageCaption}
            </figcaption>
          )}
        </motion.figure>

        {/* Metadata strip */}
        {meta && meta.length > 0 && (
          <dl className="mt-12 grid grid-cols-2 gap-x-0 gap-y-6 rounded-2xl border border-white/20 p-6 sm:mt-14 sm:grid-cols-4 sm:p-8">
            {meta.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2 px-6 ${
                  index !== 0 ? 'border-l border-white/10' : ''
                }`}
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 antialiased">
                  {item.label}
                </dt>
                <dd className="text-base font-medium text-white antialiased">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {/* Overview + Role/Involvement */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-3xl font-semibold leading-tight antialiased">
              <span className="block text-[#CBEDE8]">{company}</span>
              <span className="block text-white">{project}</span>
            </p>
          </div>

          <div className="md:col-span-8">
            <dl className="space-y-8">
              <DetailItem term="Overview" description={overview} />
              <DetailItem term="Involvement" description={involvement} />
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
