import { useId, useRef, useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Lightbox from '../casestudy/LightBox'

type DetailImage = {
  id: string
  src: string
  alt: string
  caption?: string
}

type DetailContent = React.ReactNode | React.ReactNode[]

type DetailSection = {
  id: string
  subtitle?: React.ReactNode
  body?: DetailContent
}

interface TwoColumnDetailProps {
  heading: React.ReactNode
  subtitle?: React.ReactNode
  body?: DetailContent
  sections?: DetailSection[]
  images?: DetailImage[]
  className?: string
}

function toArray(content?: DetailContent): React.ReactNode[] {
  if (!content) return []
  return Array.isArray(content) ? content : [content]
}

function getImageLabel(image: DetailImage, index: number): string {
  return image.caption || image.alt || `Image ${index + 1}`
}

const listVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
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

const sharedViewport = { once: true, amount: 0.25 } as const

export default function TwoColumnDetail({
  heading,
  subtitle,
  body,
  sections = [],
  images = [],
  className = '',
}: TwoColumnDetailProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()

  const introBody = toArray(body)
  const visibleImages = images.slice(0, 3)

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])

  const hasIntro = Boolean(subtitle) || introBody.length > 0
  const activeImage =
    activeIndex !== null ? visibleImages[activeIndex] : undefined

  return (
    <>
      <section
        aria-labelledby={headingId}
        className={`w-full bg-[#08082a] text-white ${className}`}
      >
        <div className="container mx-auto my-16 max-w-6xl px-6 sm:my-24 sm:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <h2
                id={headingId}
                className="text-3xl font-extrabold leading-tight text-white"
              >
                {heading}
              </h2>
            </div>

            <div className="space-y-10 md:col-span-8">
              {hasIntro && (
                <div>
                  {subtitle && (
                    <h3 className="text-lg font-semibold text-white">
                      {subtitle}
                    </h3>
                  )}
                  {introBody.length > 0 && (
                    <div className={subtitle ? 'mt-4 space-y-4' : 'space-y-4'}>
                      {introBody.map((paragraph, index) => (
                        <p key={index} className="max-w-prose text-slate-300">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {sections.map((section) => {
                const sectionBody = toArray(section.body)
                const hasSectionContent =
                  Boolean(section.subtitle) || sectionBody.length > 0

                if (!hasSectionContent) return null

                return (
                  <div key={section.id} className="space-y-4">
                    {section.subtitle && (
                      <h3 className="text-lg font-semibold text-white">
                        {section.subtitle}
                      </h3>
                    )}
                    {sectionBody.length > 0 && (
                      <div className="space-y-4">
                        {sectionBody.map((paragraph, paragraphIndex) => (
                          <p
                            key={`${section.id}-p-${paragraphIndex}`}
                            className="max-w-prose text-slate-300"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {visibleImages.length > 0 && (
            <motion.div
              className="mt-16 space-y-10"
              variants={shouldReduceMotion ? undefined : listVariants}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView={shouldReduceMotion ? undefined : 'visible'}
              viewport={sharedViewport}
            >
              {visibleImages.map((image, index) => (
                <motion.figure
                  key={image.id}
                  className="w-full"
                  variants={shouldReduceMotion ? undefined : itemVariants}
                >
                  <button
                    ref={(el) => {
                      triggerRefs.current[index] = el
                    }}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Open enlarged image: ${getImageLabel(image, index)}`}
                    className="group block w-full rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#08082a]"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full cursor-zoom-in rounded-md object-cover transition group-hover:opacity-90"
                    />
                  </button>

                  {image.caption && (
                    <figcaption className="mt-2 text-left text-sm text-slate-300">
                      {image.caption}
                    </figcaption>
                  )}
                </motion.figure>
              ))}
            </motion.div>
          )}
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
