import React from 'react'

interface WireframeImage {
  src: string
  alt: string
}

interface WireframesSectionProps {
  subtitle: string
  title: string
  description: string
  image: WireframeImage // Single image
  subtitleColor: 'ritmo' | 'ow' | 'moe' // Dynamic subtitle color options
}

const WireframesSection: React.FC<WireframesSectionProps> = ({
  subtitle,
  title,
  description,
  image,
  subtitleColor,
}) => {
  const subtitleColorMap = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className="bg-[#E6F8FF] pt-24">
      <div className="container mx-auto max-w-4xl px-6 sm:px-8">
        {/* Text Content */}
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

        {/* Image Section */}
        <div className="mt-8">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full max-w-full rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default WireframesSection
