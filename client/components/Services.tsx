import { useId } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../lib/useScrollReveal'

type Service = {
  title: string
  summary: string
}

const services: Service[] = [
  {
    title: 'Design systems',
    summary:
      'I rebuild the shared language between Figma and code: tokens, components, and contribution rules teams can actually keep.',
  },
  {
    title: 'Design to front-end support',
    summary:
      'I sit in the seam: design reviews that speak in props and PRs, and production UI that still matches the intent.',
  },
  {
    title: 'AI-assisted product design',
    summary:
      'For AI features that need trust: clear controls, readable outputs, and flows where people stay in charge of the next step.',
  },
  {
    title: 'Product design',
    summary:
      'From paper drafts to shipped interaction, especially learning and editorial products where the UI should never compete with the content.',
  },
  {
    title: 'UX/UI audits',
    summary:
      'A hard look at accessibility, hierarchy, and interaction quality, with a short list of fixes ordered by what will actually ship.',
  },
]

export default function Services() {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby={headingId}
      className="w-full bg-ink py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-[1fr_minmax(14rem,22rem)] lg:gap-16 xl:px-0">
        <div className={`reveal reveal--1 relative lg:order-2 ${revealClass}`}>
          <p className="mb-3 font-light text-[0.72rem] uppercase tracking-[0.16em] text-teal-mid">
            (05) Engagements
          </p>
          <h2
            id={headingId}
            className="mb-4 text-[clamp(2.85rem,7vw,4.75rem)] font-bold leading-[0.92] tracking-[-0.04em] text-paper"
          >
            <span className="block">Select</span>
            <span className="block text-teal-mid">services</span>
          </h2>
          <p className="max-w-measure text-paper-muted">
            Ways I show up for product teams, from systems work to shipped
            interfaces.
          </p>
          <p className="margin-note ink-draw ink-write mt-6" aria-hidden="true">
            open to book
          </p>
        </div>

        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        <ol
          role="list"
          className={`reveal reveal--2 divide-y divide-rule border-y border-rule lg:order-1 ${revealClass}`}
        >
          {services.map((service, i) => (
            <li key={service.title}>
              <Link
                to="/contact"
                className="group flex flex-col gap-2 py-6 transition-colors duration-150 ease-out sm:flex-row sm:items-baseline sm:gap-6 sm:py-7"
              >
                <span
                  aria-hidden="true"
                  className="font-light text-xs text-teal-mid sm:w-8 sm:shrink-0"
                >
                  ({String(i + 1).padStart(2, '0')})
                </span>
                <span className="flex-1">
                  <span className="mb-1 block text-lg font-semibold text-paper sm:text-xl">
                    {service.title}
                  </span>
                  <span className="block max-w-measure text-sm leading-relaxed text-paper-muted">
                    {service.summary}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="whitespace-nowrap font-light text-xs uppercase tracking-[0.1em] text-teal-mid opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  Inquire →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
