import { useId, useRef, useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Lightbox from '../casestudy/LightBox'

type GalleryImage = {
  id: string
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

type ImageGalleryProps = {
  images: GalleryImage[]
  title?: string
  className?: string
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

const sharedViewport = { once: true, amount: 0.35 } as const

function getImageLabel(image: GalleryImage, index: number): string {
  return image.caption || image.alt || `Image ${index + 1}`
}

export default function ImageGallery({
  images,
  title = 'Work',
  className = '',
}: ImageGalleryProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])

  const items = images.filter((image) => Boolean(image?.src))
  const activeImage = activeIndex !== null ? items[activeIndex] : undefined

  if (items.length === 0) return null

  return (
    <>
      <section
        aria-labelledby={headingId}
        className={`bg-[#08082a] py-10 sm:py-14 ${className}`}
      >
        <div className="container mx-auto max-w-6xl px-6 sm:px-8">
          <h2
            id={headingId}
            className="mb-6 text-3xl font-extrabold text-white md:text-4xl"
          >
            {title}
          </h2>

          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul role="list" className="space-y-8 md:space-y-10">
            {items.map((image, index) => (
              <li key={image.id}>
                <motion.figure
                  className="w-full"
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  initial={shouldReduceMotion ? false : 'hidden'}
                  whileInView={shouldReduceMotion ? undefined : 'visible'}
                  viewport={sharedViewport}
                >
                  <button
                    ref={(el) => {
                      triggerRefs.current[index] = el
                    }}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Open enlarged image: ${getImageLabel(image, index)}`}
                    className="group block w-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#08082a]"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      width={image.width}
                      height={image.height}
                      className="w-full cursor-zoom-in rounded-xl object-cover transition group-hover:opacity-90"
                    />
                  </button>

                  {image.caption && (
                    <figcaption className="mt-2 text-left text-sm text-slate-300">
                      {image.caption}
                    </figcaption>
                  )}
                </motion.figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {activeImage && (
        <Lightbox
          src={activeImage.src}
          alt={activeImage.alt}
          onClose={() => setActiveIndex(null)}
          triggerRef={{ current: triggerRefs.current[activeIndex ?? 0] }}
        />
      )}
    </>
  )
}
