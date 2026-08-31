import { useId, useRef, useState } from 'react'
import { useScrollReveal } from '../../../lib/useScrollReveal'
import Lightbox from './LightBox'
import { renderParagraphs, type CaseStagedParagraph } from './CaseStagedStory'

type Props = {
  date: string
  title: string
  tags?: string[]
  body: CaseStagedParagraph[]
  image?: { src: string; alt: string; caption: string }
  /** Shown once, above the dateline, on the first entry only -- introduces the log itself. */
  sectionIntro?: { eyebrow: string; heading: string; lede?: string }
}

export default function CaseStagedLogEntry({
  date,
  title,
  tags,
  body,
  image,
  sectionIntro,
}: Props) {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <section ref={sectionRef} aria-labelledby={headingId} className="bg-ink w-full">
      {/* Sticky date must not sit inside a transformed ancestor -- the .reveal fade
          uses transform, and Chromium breaks position:sticky under a transformed
          ancestor. So .reveal wraps the content column only, not this outer grid. */}
      <div className="mx-auto max-w-2xl px-6 sm:px-10 xl:px-0">
        {sectionIntro && (
          <div className={`reveal reveal--1 pt-20 sm:pt-28 ${revealClass}`}>
            <p className="text-teal-mid mb-3 font-normal text-xs uppercase tracking-[0.16em]">
              {sectionIntro.eyebrow}
            </p>
            <h2 className="text-paper text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              {sectionIntro.heading}
            </h2>
            {sectionIntro.lede && (
              <p className="text-paper-muted mt-4 text-base leading-relaxed">
                {sectionIntro.lede}
              </p>
            )}
          </div>
        )}

        <div
          className={`border-rule border-t py-10 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-6 sm:py-14 lg:grid-cols-[8rem_1fr] ${
            sectionIntro ? 'mt-14 sm:mt-20' : ''
          }`}
        >
          {/* Chromium doesn't honor position:sticky on a stretched grid item directly --
              a plain wrapper div as the grid item, with the sticky node as its child,
              works around it. */}
          <div className="sm:h-full">
            <p className="text-teal-mid mb-4 font-normal text-xs uppercase tracking-[0.16em] sm:sticky sm:top-24 sm:mb-0 sm:pt-1">
              {date}
            </p>
          </div>

          <div className={`reveal reveal--1 ${revealClass}`}>
            {tags && tags.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-rule text-teal-mid rounded-full border px-2.5 py-1 font-normal text-xs uppercase tracking-[0.08em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h3
              id={headingId}
              className="text-paper mb-4 text-xl font-bold leading-[1.15] tracking-[-0.02em] sm:text-2xl"
            >
              {title}
            </h3>
            <div className="text-paper-muted max-w-measure space-y-4 text-base leading-relaxed">
              {renderParagraphs(body)}
            </div>

            {image && (
              <figure className="mt-6">
                <button
                  ref={triggerRef}
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  aria-label={`Open enlarged image: ${image.caption || image.alt}`}
                  className="group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full cursor-zoom-in object-cover transition-opacity duration-200 group-hover:opacity-90"
                  />
                </button>
                <figcaption className="text-paper-muted mt-3 text-sm italic leading-relaxed">
                  {image.caption}
                </figcaption>

                {isLightboxOpen && (
                  <Lightbox
                    src={image.src}
                    alt={image.alt}
                    onClose={() => setIsLightboxOpen(false)}
                    triggerRef={triggerRef}
                  />
                )}
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
