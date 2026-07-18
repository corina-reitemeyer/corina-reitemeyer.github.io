import { useId } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { defaultViewport } from '../../lib/motion'
import Disclaimer from './Disclaimer'
import CtaLink from './CtaLink'
import Paragraphs from './Paragraphs'

type Highlight = {
  id: string
  label: string
  description: string
}

type MetaItem = {
  label: string
  value: string
}

type Cta = {
  label: string
  href: string
  external?: boolean
}

type CaseStudyNavyProps = {
  intro: string
  company: string
  project: string
  imageSrc: string
  imageAlt: string
  imageCaption?: string
  disclaimer?: string
  overview: string | string[]
  involvement: string
  meta: MetaItem[]
  highlights?: Highlight[]
  ctas?: Cta[]
  className?: string
}

type DetailItemProps = {
  term: string
  description: string | string[]
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

function DetailItem({ term, description }: DetailItemProps) {
  return (
    <div>
      <dt className="text-sm font-semibold uppercase tracking-wide text-white antialiased">
        {term}
      </dt>
      <dd className="mt-2 max-w-prose space-y-5 text-slate-300 antialiased">
        <Paragraphs>{description}</Paragraphs>
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
  disclaimer,
  overview,
  involvement,
  meta,
  highlights,
  ctas,
  className = '',
}: CaseStudyNavyProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby={headingId}
      className={`w-full bg-[#08082a] text-white ${className}`}
    >
      <div className="container mx-auto max-w-6xl px-6 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
        {/* Hook headline — the page's h1: no other heading on a case study page
            precedes it, so this is the primary landmark for screen reader users
            navigating by heading level. */}
        <motion.h1
          id={headingId}
          className="text-[40px] font-extrabold leading-[1.05] tracking-tight text-white antialiased sm:text-[48px] sm:font-bold sm:leading-[1.2] md:text-[64px] md:leading-[1.15] xl:text-[72px] xl:leading-[1.1] 2xl:text-[96px] 2xl:leading-[1.2]"
          variants={shouldReduceMotion ? undefined : fadeInUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={defaultViewport}
        >
          {intro}
        </motion.h1>

        {/* Impact highlights — right under headline */}
        {highlights && highlights.length > 0 && (
          <motion.ul
            aria-label="Project highlights"
            variants={shouldReduceMotion ? undefined : fadeInUpDelayed}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={defaultViewport}
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
          viewport={defaultViewport}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-xl object-cover"
            loading="eager"
            decoding="async"
          />
          {imageCaption && (
            <figcaption className="mt-3 text-sm text-slate-400 antialiased">
              {imageCaption}
            </figcaption>
          )}
        </motion.figure>

        {disclaimer && <Disclaimer className="mt-6">{disclaimer}</Disclaimer>}

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

        {/* Metadata strip */}
        {meta && meta.length > 0 && (
          <dl className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-4 lg:gap-x-0 lg:gap-y-6 lg:rounded-2xl lg:border lg:border-white/20 lg:p-6">
            {meta.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2 rounded-xl bg-white/5 p-4 lg:rounded-none lg:bg-transparent lg:p-0 lg:px-6 ${
                  index !== 0 ? 'lg:border-l lg:border-white/10' : ''
                }`}
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 antialiased">
                  {item.label}
                </dt>
                <dd className="text-base font-medium text-white antialiased">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {/* CTAs */}
        {ctas && ctas.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <CtaLink
                key={cta.label}
                label={cta.label}
                href={cta.href}
                external={cta.external}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
