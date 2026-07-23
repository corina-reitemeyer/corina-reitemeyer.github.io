import { useId, useRef, useState } from 'react'
import Lightbox from './LightBox'

type CaseStagedImage = {
  id: string
  src: string
  alt: string
  caption: string
}

type CaseStagedPanel = {
  id: string
  grid: 'full' | 'process'
  images: CaseStagedImage[]
}

type Props = {
  railTitle: string
  railLede: string
  aboutParagraphs: string[]
  meta: { label: string; value: string }[]
  panels: CaseStagedPanel[]
}

const GRID_CLASS: Record<CaseStagedPanel['grid'], string> = {
  full: 'grid grid-cols-1',
  process: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
}

function GalleryImage({ image }: { image: CaseStagedImage }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <figure>
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
  )
}

export default function CaseStagedSplit({
  railTitle,
  railLede,
  aboutParagraphs,
  meta,
  panels,
}: Props) {
  const headingId = useId()

  return (
    <section aria-label="Project overview" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(25rem,37.5rem)_1fr]">
        <div className="border-rule border-b px-6 py-16 sm:px-10 sm:py-20 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-center lg:border-b-0 lg:border-r lg:px-12">
          <div className="max-w-[40rem]">
            <h2
              id={headingId}
              className="text-paper mb-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.02em]"
            >
              {railTitle}
            </h2>
            <p className="text-paper-muted mb-8 text-base leading-relaxed">
              {railLede}
            </p>

            <h3 className="text-teal-mid mb-3 font-normal text-xs uppercase tracking-[0.12em]">
              About
            </h3>
            <div className="text-paper-muted mb-8 space-y-3 text-sm leading-relaxed">
              {aboutParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="border-rule grid grid-cols-2 gap-x-6 gap-y-4 border-t pt-6">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-teal-mid font-normal text-xs uppercase tracking-[0.12em]">
                    {item.label}
                  </dt>
                  <dd className="text-paper mt-1 text-sm">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-col">
          {panels.map((panel) => (
            <div
              key={panel.id}
              className="bg-ink flex items-center px-6 py-16 sm:px-10 lg:min-h-[70dvh] xl:min-h-[80dvh]"
            >
              <div className={`w-full ${GRID_CLASS[panel.grid]}`}>
                {panel.images.map((image) => (
                  <GalleryImage key={image.id} image={image} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
