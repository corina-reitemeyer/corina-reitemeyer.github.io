// components/TwoColumnDetail.tsx
import React from 'react'
import { motion } from 'framer-motion'

type DetailImage = {
  src: string
  alt?: string
  caption?: string
}

interface TwoColumnDetailProps {
  heading: React.ReactNode
  subtitle?: React.ReactNode
  body?: React.ReactNode | React.ReactNode[]
  images?: DetailImage[]
  className?: string
}

export default function TwoColumnDetail({
  heading,
  subtitle,
  body,
  images = [],
  className = '',
}: TwoColumnDetailProps) {
  const bodyItems = Array.isArray(body) ? body : body ? [body] : []

  // 0–3 images
  const pics = images.slice(0, 3)

  const listVariants = {
    hidden: { opacity: 1 }, // keep container visible, we only animate children
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
      <div className="container mx-auto my-24 max-w-6xl px-6 sm:px-8">
        {/* Two columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          {/* Left: heading */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-extrabold leading-tight text-white">
              {heading}
            </h2>
          </div>

          {/* Right: subtitle + body */}
          <div className="mb-4 md:col-span-8">
            {subtitle && (
              <h3 className="text-lg font-semibold text-white">{subtitle}</h3>
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
        </div>

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
                <img
                  src={img.src}
                  alt={img.alt ?? ''}
                  className="w-full rounded-md object-cover"
                  loading="lazy"
                  decoding="async"
                />
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
    </section>
  )
}
