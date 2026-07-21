import { useId } from 'react'

export type CaseStagedImage = {
  id: string
  src: string
  alt: string
  caption: string
}

export type CaseStagedPanel = {
  id: string
  tone: 'teal' | 'slate' | 'moss'
  grid: 'full' | 'pair' | 'process'
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
  pair: 'grid grid-cols-1 gap-6 sm:grid-cols-2',
  process: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
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
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(18rem,26rem)_1fr]">
        <aside className="border-rule border-b px-6 py-16 sm:px-10 sm:py-20 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-center lg:border-b-0 lg:border-r lg:px-12">
          <div className="max-w-md">
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
        </aside>

        <div className="flex flex-col">
          {panels.map((panel) => (
            <div
              key={panel.id}
              className={`case-staged__snap case-panel--${panel.tone} flex min-h-[80dvh] items-center px-6 py-16 sm:px-10`}
            >
              <div className={`w-full ${GRID_CLASS[panel.grid]}`}>
                {panel.images.map((image) => (
                  <figure key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover"
                    />
                    <figcaption className="text-paper-muted mt-3 text-sm italic leading-relaxed">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
