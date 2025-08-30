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

  // keep images predictable (0–3)
  const pics = images.slice(0, 3)
  const cols =
    pics.length === 1
      ? 'grid-cols-1'
      : pics.length === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section className={`w-full bg-[#08082a] text-white ${className}`}>
      <div className="py-18 container mx-auto my-24 max-w-6xl px-6 sm:px-8">
        {/* Two columns */}
        <div className="md:gap-18 grid grid-cols-1 gap-10 md:grid-cols-12">
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

        {/* Optional images (0–3) */}
        {pics.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="mt-16"
          >
            <div className={`grid gap-6 ${cols}`}>
              {pics.map((img, i) => (
                <figure key={`${img.src}-${i}`} className="w-full">
                  <img
                    src={img.src}
                    alt={img.alt ?? ''}
                    className="w-full rounded-md object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {img.caption && (
                    <figcaption className="mt-2 text-sm text-white/70">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
