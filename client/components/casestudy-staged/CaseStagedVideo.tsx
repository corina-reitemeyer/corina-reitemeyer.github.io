import { useId } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

type Props = {
  mark: string
  title: string
  src: string
  poster?: string
  caption?: string
  cta?: { label: string; href: string; external?: boolean }
}

export default function CaseStagedVideo({
  mark,
  title,
  src,
  poster,
  caption,
  cta,
}: Props) {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="case-staged__snap bg-ink w-full py-20 sm:py-28"
    >
      <div className={`reveal reveal--1 mx-auto max-w-6xl px-6 sm:px-10 xl:px-0 ${revealClass}`}>
        <p className="text-teal-mid mb-4 font-normal text-[0.72rem] uppercase tracking-[0.16em]">
          ({mark})
        </p>
        <h2
          id={headingId}
          className="text-paper mb-8 text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.05] tracking-[-0.02em]"
        >
          {title}
        </h2>
        <figure>
          <video
            src={src}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            aria-label={title}
            className="w-full"
          />
          {caption && (
            <figcaption className="text-paper-muted mt-3 text-sm italic leading-relaxed">
              {caption}
            </figcaption>
          )}
        </figure>
        {cta && (
          <a
            href={cta.href}
            target={cta.external ? '_blank' : undefined}
            rel={cta.external ? 'noreferrer' : undefined}
            className="text-teal-mid hover:text-teal-bright mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
          >
            {cta.label}
            <span aria-hidden="true">{cta.external ? '↗' : '→'}</span>
          </a>
        )}
      </div>
    </section>
  )
}
