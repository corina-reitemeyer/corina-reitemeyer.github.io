import { useMemo, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Lightbox from '../casestudy/LightBox'

type GalleryImage = {
  src: string
  alt?: string
  caption?: string
  width?: number
  height?: number
}

type Props = {
  images: GalleryImage[]
}

export default function ImageGallery({ images }: Props) {
  const scrollerRef = useRef<HTMLUListElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const items = useMemo(() => images?.filter(Boolean) ?? [], [images])

  const openLightbox = useCallback((idx: number) => {
    setActiveIndex(idx)
    setIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => setIsOpen(false), [])

  // mobile strip scroll helper
  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: 'smooth' })
  }

  if (items.length === 0) return null

  // Each image animates when it enters the viewport
  const inViewProps = {
    initial: { opacity: 0, y: 16, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.45, ease: 'easeOut' },
    viewport: { once: true, amount: 0.35 },
  } as const

  return (
    <section className="bg-[#08082a] py-10 sm:py-14">
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        {/* MOBILE HEADING (aligns with images) */}
        <div className="mx-auto w-full max-w-6xl md:hidden">
          <h2 className="mb-6 text-3xl font-extrabold text-white">Work</h2>
        </div>

        {/* MOBILE/TABLET (<= md): horizontal strip with snap */}
        <div className="relative md:hidden">
          <ul
            ref={scrollerRef}
            className="
              custom-scrollbar-hide flex touch-pan-x snap-x snap-mandatory
              overflow-x-auto [-webkit-overflow-scrolling:touch]
            "
            style={{ gap: 20 }}
            aria-label="Project image strip"
          >
            {items.map((img, i) => (
              <motion.li
                key={i}
                className="shrink-0 snap-start"
                {...inViewProps}
              >
                <figure className="w-[84vw] sm:w-[70vw]">
                  <button
                    type="button"
                    onClick={() => openLightbox(i)}
                    className="group block w-full focus:outline-none"
                    aria-label={`Open image ${i + 1}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt || ''}
                      loading="lazy"
                      decoding="async"
                      className="h-[240px] w-full cursor-zoom-in rounded-xl object-cover transition group-hover:opacity-90 sm:h-[300px]"
                      width={img.width}
                      height={img.height}
                    />
                  </button>
                  {img.caption && (
                    <figcaption className="mt-2 text-left text-sm text-white/70">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              </motion.li>
            ))}
          </ul>

          {items.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scrollBy(-1)}
                className="absolute left-0 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:flex"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scrollBy(1)}
                className="absolute right-0 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:flex"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* DESKTOP (>= md): heading + stacked images in the same container width */}
        <div className="hidden md:block">
          {/* Heading aligned to image left edge */}
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="mb-6 text-left text-4xl font-bold text-white">
              Work
            </h2>
          </div>

          <div className="mx-auto mb-12 w-full max-w-6xl space-y-10">
            {items.map((img, i) => (
              <motion.figure key={i} className="w-full" {...inViewProps}>
                <button
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="group block w-full focus:outline-none"
                  aria-label={`Open image ${i + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt || ''}
                    loading="lazy"
                    decoding="async"
                    className="w-full cursor-zoom-in rounded-xl object-cover transition group-hover:opacity-90"
                    width={img.width}
                    height={img.height}
                  />
                </button>
                {img.caption && (
                  <figcaption className="mb-16 mt-2 text-left text-sm text-white/70">
                    {img.caption}
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox shows current image */}
      {isOpen && (
        <Lightbox
          src={items[activeIndex]?.src || ''}
          alt={items[activeIndex]?.alt || ''}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}
