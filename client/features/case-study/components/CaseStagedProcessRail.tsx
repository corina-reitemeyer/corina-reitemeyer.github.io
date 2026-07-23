import { useRef, useState } from 'react'
import { renderParagraphs, type CaseStagedParagraph } from './CaseStagedStory'
import Lightbox from './LightBox'

type CaseStagedProcessEntry = {
  id: string
  title: string
  body: CaseStagedParagraph[]
  image: { src: string; alt: string; caption: string }
}

type Props = {
  /** Main heading for this rail -- the named phase of the story (e.g.
   *  "The Approach"), same size as the other top-level section titles. Omit
   *  if a preceding section in the same phase already carries the label. */
  category?: string
  /** Small eyebrow above the heading, distinguishing this rail's imagery as
   *  process/exploration work (e.g. "Process"). */
  railLabel: string
  entries: CaseStagedProcessEntry[]
}

function ProcessEntryItem({ title, body, image }: CaseStagedProcessEntry) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <div>
      <h3 className="text-paper mb-3 max-w-measure text-xl font-semibold leading-snug sm:text-2xl">
        {title}
      </h3>
      <div className="text-paper-muted mb-5 max-w-measure space-y-3 text-sm leading-relaxed sm:text-base">
        {renderParagraphs(body)}
      </div>
      <figure className="max-w-md">
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
        <figcaption className="text-paper-muted mt-2 text-xs italic leading-relaxed">
          {image.caption}
        </figcaption>
      </figure>

      {isLightboxOpen && (
        <Lightbox
          src={image.src}
          alt={image.alt}
          onClose={() => setIsLightboxOpen(false)}
          triggerRef={triggerRef}
        />
      )}
    </div>
  )
}

export default function CaseStagedProcessRail({
  category,
  railLabel,
  entries,
}: Props) {
  return (
    <section
      aria-label={railLabel}
      className="bg-ink w-full py-28 sm:py-40"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:gap-16 sm:px-10 lg:grid-cols-[minmax(12rem,16rem)_1fr] xl:px-0">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-teal-mid mb-3 font-normal text-xs uppercase tracking-[0.16em]">
            {railLabel}
          </p>
          {category && (
            <h2 className="text-paper text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              {category}
            </h2>
          )}
        </div>

        <div className="flex flex-col gap-12 sm:gap-16">
          {entries.map((entry) => (
            <ProcessEntryItem key={entry.id} {...entry} />
          ))}
        </div>
      </div>
    </section>
  )
}