import React from 'react'

interface VisualDesignSectionProps {
  subtitle: string
  title: string
  description: string
  descriptionSecond?: string // New optional prop
  images: { src: string; alt: string }[]
  subtitleColor: 'ritmo' | 'ow' | 'moe' // Keys for mapping colors
}

const VisualDesignSection: React.FC<VisualDesignSectionProps> = ({
  subtitle,
  title,
  description,
  descriptionSecond,
  images,
  subtitleColor,
}) => {
  const subtitleColorMap: Record<'ritmo' | 'ow' | 'moe', string> = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-3xl space-y-16 px-6 sm:px-8 lg:max-w-4xl">
        {/* Top Text Section */}
        <div>
          <p
            className="text-lg"
            style={{ color: subtitleColorMap[subtitleColor] }}
          >
            {subtitle}
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-6 text-lg text-gray-700">{description}</p>
        </div>

        {/* Top Image */}
        {images.length > 0 && (
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute left-4 top-4 h-[70%] w-[80%]"></div>
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="relative h-auto w-full rounded-lg object-cover"
            />
          </div>
        )}

        {/* Bottom Section */}
        <div>
          {/* Second Paragraph (if provided) */}
          {descriptionSecond && (
            <p className="mt-6 text-lg text-gray-700">{descriptionSecond}</p>
          )}

          {/* Bottom Image */}
          {images.length > 1 && (
            <div className="relative mt-12 overflow-hidden rounded-lg">
              <div className="absolute left-4 top-4 h-[70%] w-[80%]"></div>
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="relative h-auto w-full rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default VisualDesignSection
