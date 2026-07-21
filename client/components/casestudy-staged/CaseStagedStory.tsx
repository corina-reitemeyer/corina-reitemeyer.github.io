import { useId, useRef, useState, type CSSProperties, type SVGProps } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'
import Lightbox from '../casestudy/LightBox'

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

export type CaseStagedListItem = { title: string; description: string }

type Props = {
  mark: string
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
  }
  note?: { label: string; text: string }
  variant?: 'default' | 'outcome'
}

export default function CaseStagedStory({
  mark,
  title,
  body,
  items,
  itemsIntro,
  itemsLayout = 'rows',
  image,
  note,
  variant = 'default',
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
        className="case-staged__snap bg-ink w-full py-20 sm:py-28"
      >
        <div className={`reveal reveal--1 mx-auto max-w-6xl px-6 sm:px-10 xl:px-0 ${revealClass}`}>
          <div className="mb-10 max-w-measure sm:mb-14">
            <p className="text-teal-mid mb-4 font-normal text-[0.72rem] uppercase tracking-[0.16em]">
              ({mark})
            </p>
            <h2
              id={headingId}
              className="text-paper text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.05] tracking-[-0.02em]"
            >
              {title}
            </h2>
            {itemsIntro && (
              <div className="text-paper-muted mt-4 space-y-3 text-base leading-relaxed">
                {itemsIntro.map((p, i) =>
                  typeof p === 'string' ? (
                    <p key={i}>{p}</p>
                  ) : (
                    <p key={i} className={p.bold ? 'text-paper font-semibold' : undefined}>
                      {p.text}
                    </p>
                  ),
                )}
              </div>
            )}
          </div>

          {itemsLayout === 'grid' ? (
            /* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */
            <ul
              role="list"
              className="border-rule grid grid-cols-1 gap-x-12 gap-y-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {items.map((item, i) => (
                <li key={item.title}>
                  <p className="text-teal-mid mb-2 font-normal text-xs">
                    ({String(i + 1).padStart(2, '0')})
                  </p>
                  <h3 className="text-paper mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-paper-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            /* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */
            <ul role="list" className="divide-rule border-rule divide-y border-t">
              {items.map((item, i) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-6 sm:py-7"
                >
                  <span className="text-teal-mid font-normal text-xs sm:w-10 sm:shrink-0">
                    ({String(i + 1).padStart(2, '0')})
                  </span>
                  <div>
                    <p className="text-paper mb-1 text-lg font-semibold sm:text-xl">
                      {item.title}
                    </p>
                    <p className="text-paper-muted max-w-measure text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    )
  }

  const hasSecondColumn = Boolean(image || note || variant === 'outcome')

  if (!hasSecondColumn) {
    return (
      <section
        ref={sectionRef}
        aria-labelledby={headingId}
        className="case-staged__snap bg-ink w-full py-20 sm:py-28"
      >
        <div
          className={`reveal reveal--1 mx-auto max-w-2xl px-6 text-left sm:px-10 xl:px-0 ${revealClass}`}
        >
          <p className="text-teal-mid mb-4 font-normal text-[0.72rem] uppercase tracking-[0.16em]">
            ({mark})
          </p>
          <h2
            id={headingId}
            className="text-paper mb-6 text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.05] tracking-[-0.02em]"
          >
            {title}
          </h2>
          <div className="text-paper-muted space-y-4 text-base leading-relaxed">
            {(body ?? []).map((p, i) =>
              typeof p === 'string' ? (
                <p key={i}>{p}</p>
              ) : (
                <p key={i} className={p.bold ? 'text-paper font-semibold' : undefined}>
                  {p.text}
                </p>
              ),
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className={`case-staged__snap relative w-full overflow-hidden ${
        variant === 'outcome'
          ? 'bg-charcoal flex min-h-[100dvh] items-center py-20'
          : 'bg-ink py-20 sm:py-28'
      }`}
    >
      {variant === 'outcome' && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-0 origin-center transition-all duration-[1600ms] ease-out ${
            isInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
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
          <p className="text-teal-mid mb-4 font-normal text-[0.72rem] uppercase tracking-[0.16em]">
            ({mark})
          </p>
          <h2
            id={headingId}
            className="text-paper mb-6 max-w-measure text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.05] tracking-[-0.02em]"
          >
            {title}
          </h2>
          <div className="text-paper-muted max-w-measure space-y-4 text-base leading-relaxed">
            {(body ?? []).map((p, i) =>
              typeof p === 'string' ? (
                <p key={i}>{p}</p>
              ) : (
                <p key={i} className={p.bold ? 'text-paper font-semibold' : undefined}>
                  {p.text}
                </p>
              ),
            )}
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
                      className="text-teal-mid hover:text-teal-bright inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </figure>
        ) : note ? (
          <aside className="border-rule border-l pl-6">
            <p className="text-teal-mid mb-2 font-normal text-[0.7rem] uppercase tracking-[0.1em]">
              {note.label}
            </p>
            <p className="text-paper-muted text-sm leading-relaxed">{note.text}</p>
          </aside>
        ) : variant === 'outcome' ? (
          <div className="flex items-center justify-center">
            <RippleDrawing className="text-teal-mid/70 h-auto w-full max-w-[16rem]" />
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
