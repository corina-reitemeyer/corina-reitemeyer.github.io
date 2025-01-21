import React from 'react'

interface WireframeImage {
  src: string
  alt: string
}

interface WireframesSectionProps {
  subtitle: string
  title: string
  description: string
  image: WireframeImage // Change to accept a single image
}

const WireframesSection: React.FC<WireframesSectionProps> = ({
  subtitle,
  title,
  description,
  image,
}) => {
  return (
    <section className="bg-[#E6F8FF] py-24">
      <div className="container mx-auto flex h-[600px] max-w-4xl flex-col justify-between">
        {/* Header Section */}
        <div>
          <p className="text-lg font-semibold text-[#40B0C8]">{subtitle}</p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-6 text-lg text-gray-700">{description}</p>
        </div>

        {/* Image Section */}
        <div className="flex h-full items-end justify-center">
          <img
            src={image.src}
            alt={image.alt}
            className="mt-20 max-w-full rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default WireframesSection
