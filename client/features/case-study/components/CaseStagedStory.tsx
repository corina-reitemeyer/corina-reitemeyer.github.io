import { useId, useRef, useState, type CSSProperties, type SVGProps } from 'react'
import { useScrollReveal } from '../../../lib/useScrollReveal'
import Lightbox from './LightBox'

export type CaseStagedParagraph = string | { text: string; bold?: boolean }

/** Fine-line ripple, echoing the "ink in water" motif used elsewhere on the site: a literal and thematic nod for a reflections section. */
function RippleDrawing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 220 220" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        className="ink-stroke"
        d="M110 92c9 0 17 6 17 15s-8 15-18 15-16-6-16-14 7-16 17-16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
        style={{ '--ink-delay': '0s', '--ink-duration': '0.6s' } as CSSProperties}
      />
      <path
        className="ink-stroke"
        d="M110 55c30 0 55 22 55 52s-24 55-56 55-54-24-54-54c0-14 4-25 10-34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
        style={{ '--ink-delay': '0.25s', '--ink-duration': '0.9s' } as CSSProperties}
      />
      <path
        className="ink-stroke"
        d="M109 18c48 0 90 37 92 85 2 46-36 89-89 91-45 2-85-30-93-73"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
        style={{ '--ink-delay': '0.55s', '--ink-duration': '1.2s' } as CSSProperties}
      />
    </svg>
  )
}

export type CaseStagedListItem = {
  title: string
  description: string | CaseStagedParagraph[]
}

export function renderParagraphs(paragraphs: CaseStagedParagraph[]) {
  return paragraphs.map((p, i) =>
    typeof p === 'string' ? (
      <p key={i}>{p}</p>
    ) : (
      <p key={i} className={p.bold ? 'text-paper font-semibold' : undefined}>
        {p.text}
      </p>
    ),
  )
}

function renderDescription(description: string | CaseStagedParagraph[]) {
  return renderParagraphs(
    typeof description === 'string' ? [description] : description,
  )
}

type Props = {
  /** Eyebrow label grouping a run of sections under a named phase of the
   *  story (e.g. "The Problem", "The Approach", "The Outcome"). Pass it only
   *  on the first section of each group -- omit on the rest so the label
   *  doesn't repeat down the page. */
  category?: string
  title: string
  body?: CaseStagedParagraph[]
  items?: CaseStagedListItem[]
  itemsIntro?: CaseStagedParagraph[]
  itemsLayout?: 'rows' | 'grid'
  image?: {
    src: string
    alt: string
    caption: string
    links?: { label: string; href: string }[]
    /** Small label distinguishing process/exploration artifacts (sketches,
     *  wireframes, XD screenshots) from final shipped product imagery. */
    tag?: string
  }
  variant?: 'default' | 'outcome'
  /** Extra breathing room below the section on very large screens, e.g. for
   *  the last grid before a visually distinct section (like Reflections). */
  spacingBottom?: 'default' | 'loose'
}

function CategoryLabel({ category }: { category?: string }) {
  if (!category) return null
  return (
    <p className="text-teal-mid mb-3 font-normal text-xs uppercase tracking-[0.16em]">
      {category}
    </p>
  )
}

export default function CaseStagedStory({
  category,
  title,
  body,
  items,
  itemsIntro,
  itemsLayout = 'rows',
  image,
  variant = 'default',
  spacingBottom = 'default',
}: Props) {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  if (items) {
    return (
      <section
        ref={sectionRef}
        aria-labelledby={headingId}
        className={`bg-ink w-full py-24 sm:py-32 ${
          spacingBottom === 'loose' ? 'xl:pb-56' : ''
        }`}
      >
        <div className={`reveal reveal--1 mx-auto max-w-6xl px-6 sm:px-10 xl:px-0 ${revealClass}`}>
          <div
            className={
              itemsLayout === 'grid' && items.length < 3
                ? 'lg:mx-auto lg:max-w-[66.6667%]'
                : ''
            }
          >
            <div className="mb-10 max-w-measure sm:mb-14">
              <CategoryLabel category={category} />
              <h2
                id={headingId}
                className="text-paper text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.05] tracking-[-0.02em]"
              >
                {title}
              </h2>
              {itemsIntro && (
                <div className="text-paper-muted mt-4 space-y-3 text-base leading-relaxed">
                  {renderParagraphs(itemsIntro)}
                </div>
              )}
            </div>

            {itemsLayout === 'grid' ? (
              /* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */
              <ul
                role="list"
                className={`grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 ${
                  items.length >= 3 ? 'lg:grid-cols-3' : ''
                }`}
              >
                {items.map((item) => (
                  <li key={item.title}>
                    <h3 className="border-rule text-paper mb-4 border-b pb-3 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <div className="text-paper-muted space-y-2 text-sm leading-relaxed">
                      {renderDescription(item.description)}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              /* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */
              <ul role="list" className="divide-rule border-rule divide-y border-t">
                {items.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-6 sm:py-7"
                  >
                    <div>
                      <h3 className="text-paper mb-1 text-lg font-semibold sm:text-xl">
                        {item.title}
                      </h3>
                      <div className="text-paper-muted max-w-measure space-y-2 text-sm leading-relaxed">
                        {renderDescription(item.description)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    )
  }

  const hasSecondColumn = Boolean(image || variant === 'outcome')

  if (!hasSecondColumn) {
    return (
      <section
        ref={sectionRef}
        aria-labelledby={headingId}
        className="bg-ink w-full py-24 sm:py-32"
      >
        <div
          className={`reveal reveal--1 mx-auto max-w-2xl px-6 text-left sm:px-10 xl:px-0 ${revealClass}`}
        >
          <CategoryLabel category={category} />
          <h2
            id={headingId}
            className="text-paper mb-6 text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.05] tracking-[-0.02em]"
          >
            {title}
          </h2>
          <div className="text-paper-muted space-y-4 text-base leading-relaxed">
            {renderParagraphs(body ?? [])}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className={`relative w-full overflow-hidden ${
        variant === 'outcome'
          ? 'bg-charcoal flex min-h-[100dvh] items-center py-20'
          : 'bg-ink py-24 sm:py-32'
      }`}
    >
      {variant === 'outcome' && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <div className="atmosphere-wash absolute inset-0" />
          <div className="atmosphere-corner-rules absolute inset-0" />
        </div>
      )}

      <div
        className={`reveal reveal--1 relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:px-10 lg:gap-16 xl:px-0 ${
          image ? 'lg:grid-cols-[1fr_1fr]' : 'lg:grid-cols-[1fr_minmax(20rem,28rem)]'
        } ${revealClass}`}
      >
        <div className={image ? 'lg:order-2' : ''}>
          <CategoryLabel
            category={[category, image?.tag].filter(Boolean).join(' · ')}
          />
          <h2
            id={headingId}
            className="text-paper mb-6 max-w-measure text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.05] tracking-[-0.02em]"
          >
            {title}
          </h2>
          <div className="text-paper-muted max-w-measure space-y-4 text-base leading-relaxed">
            {renderParagraphs(body ?? [])}
          </div>
        </div>

        {image ? (
          <figure className="lg:order-1">
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
                className="w-full cursor-zoom-in object-cover transition-opacity duration-200 group-hover:opacity-90"
              />
            </button>
            <figcaption className="text-paper-muted mt-3 text-sm italic leading-relaxed">
              {image.caption}
            </figcaption>
            {image.links && image.links.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {image.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-teal-mid hover:text-teal-mist inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </figure>
        ) : variant === 'outcome' ? (
          <div className="flex items-center justify-center">
            {isInView && (
              <RippleDrawing className="text-teal-mid/70 h-auto w-full max-w-[16rem]" />
            )}
          </div>
        ) : null}
      </div>

      {image && isLightboxOpen && (
        <Lightbox
          src={image.src}
          alt={image.alt}
          onClose={() => setIsLightboxOpen(false)}
          triggerRef={triggerRef}
        />
      )}
    </section>
  )
}
