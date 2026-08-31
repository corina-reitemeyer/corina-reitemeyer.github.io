import { useId, useRef, useState } from 'react'
import { useScrollReveal } from '../../../lib/useScrollReveal'
import Lightbox from './LightBox'
import { renderParagraphs, type CaseStagedParagraph } from './CaseStagedStory'

type LogStep = {
  id: string
  label: string
  description: string
  /** Shown as a small eyebrow above this step, marks the start of a new phase. */
  groupLabel?: string
}

type Props = {
  date: string
  title: string
  tags?: string[]
  body?: CaseStagedParagraph[]
  image?: { src: string; alt: string; caption: string }
  video?: { src: string; poster?: string; caption?: string }
  /** Compact vertical step list -- the narrow-column alternative to the wide
   *  CaseStagedProcess scroller, for when a log entry itself is the step-by-step beat. */
  steps?: LogStep[]
  /** Note shown under the steps when the sequence loops back on itself. */
  loopLabel?: string
  /** Shown once, above the dateline, on the first entry only -- introduces the log itself. */
  sectionIntro?: { eyebrow: string; heading: string; lede?: string }
  /** Extra breathing room below the entry, for the last one on the page --
   *  matches the closing weight other case studies get from their outcome
   *  section or adjacent-nav block, since the log has neither. */
  spacingBottom?: 'default' | 'loose'
}

export default function CaseStagedLogEntry({
  date,
  title,
  tags,
  body,
  image,
  video,
  steps,
  loopLabel,
  sectionIntro,
  spacingBottom = 'default',
}: Props) {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className={`bg-ink w-full ${spacingBottom === 'loose' ? 'pb-24 sm:pb-32 xl:pb-40' : ''}`}
    >
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
                    className="border-rule text-teal-mid inline-flex items-center rounded-full border px-2.5 pb-1.5 pt-1 font-normal text-xs leading-none"
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
            {body && (
              <div className="text-paper-muted max-w-measure space-y-4 text-base leading-relaxed">
                {renderParagraphs(body)}
              </div>
            )}

            {video && (
              <figure className={body ? 'mt-6' : ''}>
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={title}
                  className="w-full"
                />
                {video.caption && (
                  <figcaption className="text-paper-muted mt-3 text-sm italic leading-relaxed">
                    {video.caption}
                  </figcaption>
                )}
              </figure>
            )}

            {steps && steps.length > 0 && (
              <div className={body ? 'mt-6' : ''}>
                {steps.map((step, index) => (
                  <div key={step.id}>
                    {step.groupLabel && (
                      <p className="text-teal-mid mb-1.5 text-xs font-normal uppercase tracking-[0.12em]">
                        {step.groupLabel}
                      </p>
                    )}
                    <div className="border-rule border px-4 py-3">
                      <p className="text-paper text-sm font-semibold">{step.label}</p>
                      <p className="text-paper-muted mt-1 text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="text-paper-muted/40 flex justify-center py-1 text-base"
                      >
                        ↓
                      </div>
                    )}
                  </div>
                ))}
                {loopLabel && (
                  <p className="text-paper-muted mt-4 text-sm leading-relaxed">{loopLabel}</p>
                )}
              </div>
            )}

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
