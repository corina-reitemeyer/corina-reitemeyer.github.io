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
      'I build the shared language between Figma and code, working directly in Storybook: tokens, components, and contribution rules that keep both sides honest.',
  },
  {
    title: 'Design engineering',
    summary:
      "Full-stack fundamentals from a coding bootcamp mean I know what's happening under the hood, with AI in the loop to move fast without cutting corners.",
  },
  {
    title: 'Product design',
    summary:
      'AI closes the gap between an idea and something real, prototyping straight in code, but the people in the loop, customers and my team, are what make it worth shipping.',
  },
  {
    title: 'Designing for AI',
    summary:
      'For AI features that need trust: clear controls, readable outputs, and flows where people stay in charge of the next step.',
  },
  {
    title: 'Learning design',
    summary:
      'Instructional design grounded in real learning theory: microlearning built in Storyline, accessibility-checked, and paced for people who are busy, not captive.',
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
      className="w-full bg-ink py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 xl:px-0">
        <div
          className={`reveal reveal--1 relative mb-10 sm:mb-14 ${revealClass}`}
        >
          <h2
            id={headingId}
            className="mb-4 text-[clamp(2.85rem,7vw,4.75rem)] font-bold leading-[0.92] tracking-[-0.04em] text-paper"
          >
            <span className="block">Ways I</span>
            <span className="block text-teal-mid">can help</span>
          </h2>
          <p className="max-w-measure text-paper-muted">
            These are some of the ways I can support product teams, from
            product design, to systems work to shipped interfaces.
          </p>
          <p className="margin-note ink-draw ink-write mt-6" aria-hidden="true">
            open to book
          </p>
        </div>

        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        <ol
          role="list"
          className={`reveal reveal--2 grid grid-cols-1 gap-4 border-t border-rule pt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ${revealClass}`}
        >
          {services.map((service) => (
            <li key={service.title}>
              <Link
                to="/contact"
                className="group flex h-full flex-col gap-4 border border-rule p-6 transition-colors duration-200 ease-out hover:border-teal-mid sm:p-7"
              >
                <span className="flex-1">
                  <h3 className="mb-2 block text-lg font-semibold text-paper">
                    {service.title}
                  </h3>
                  <span className="block text-sm leading-relaxed text-paper-muted">
                    {service.summary}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="block whitespace-nowrap text-right text-xs font-normal uppercase tracking-[0.12em] text-teal-mid opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
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
