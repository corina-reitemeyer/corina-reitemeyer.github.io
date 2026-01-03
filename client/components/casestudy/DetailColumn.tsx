// components/TwoColumnDetail.tsx
import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from '../casestudy/LightBox'

type DetailImage = {
  src: string
  alt?: string
  caption?: string
}

interface DetailSection {
  subtitle?: React.ReactNode
  body?: React.ReactNode | React.ReactNode[]
}

interface TwoColumnDetailProps {
  heading: React.ReactNode
  subtitle?: React.ReactNode
  body?: React.ReactNode | React.ReactNode[]
  sections?: DetailSection[]
  images?: DetailImage[]
  className?: string
}

export default function TwoColumnDetail({
  heading,
  subtitle,
  body,
  sections = [], // ✅ destructure + default
  images = [],
  className = '',
}: TwoColumnDetailProps) {
  const bodyItems = Array.isArray(body) ? body : body ? [body] : []

  // only show up to 3 images
  const pics = images.slice(0, 3)

  // --- Lightbox state ---
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightbox = useCallback((idx: number) => {
    setActiveIndex(idx)
    setIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => setIsOpen(false), [])

  // --- Animations ---
  const listVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <section className={`w-full bg-[#08082a] text-white ${className}`}>
      <div className="container mx-auto my-16 max-w-6xl px-6 sm:my-24 sm:px-8">
        {/* Two columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          {/* Left: heading */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-extrabold leading-tight text-white">
              {heading}
            </h2>
          </div>

          {/* Right: content */}
          <div className="-mb-4 space-y-10 sm:mb-4 md:col-span-8">
            {/* Backwards-compatible single block */}
            {(subtitle || bodyItems.length > 0) && (
              <div>
                {subtitle && (
                  <h3 className="text-lg font-semibold text-white">
                    {subtitle}
                  </h3>
                )}
                {bodyItems.length > 0 && (
                  <div className={subtitle ? 'mt-4 space-y-4' : 'space-y-4'}>
                    {bodyItems.map((para, i) => (
                      <p key={i} className="max-w-prose text-white/70">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* New multi-section support */}
            {sections.map((section, i) => {
              const sectionBody = Array.isArray(section.body)
                ? section.body
                : section.body
                  ? [section.body]
                  : []

              return (
                <div key={i}>
                  {section.subtitle && (
                    <h3 className="text-lg font-semibold text-white">
                      {section.subtitle}
                    </h3>
                  )}
                  {sectionBody.length > 0 && (
                    <div className="mt-4 space-y-4">
                      {sectionBody.map((para, j) => (
                        <p key={j} className="max-w-prose text-white/70">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        {/* ✅ CLOSES the grid before images */}

        {/* Images (0–3) with stagger + lightbox */}
        {pics.length > 0 && (
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-16 space-y-10"
          >
            {pics.map((img, i) => (
              <motion.figure
                key={`${img.src}-${i}`}
                className="w-full"
                variants={itemVariants}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="group block w-full focus:outline-none"
                  aria-label={`Open image ${i + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt ?? ''}
                    className="w-full cursor-zoom-in rounded-md object-cover transition group-hover:opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                </button>

                {img.caption && (
                  <figcaption className="mt-2 text-left text-sm text-white/70">
                    {img.caption}
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          src={pics[activeIndex]?.src || ''}
          alt={pics[activeIndex]?.alt || ''}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}
