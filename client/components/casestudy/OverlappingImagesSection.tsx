import React from 'react'

interface OverlappingImage {
  src: string
  alt: string
}

interface OverlappingImagesSectionProps {
  images: OverlappingImage[]
  backgroundColor?: string
}

const OverlappingImagesSection: React.FC<OverlappingImagesSectionProps> = ({
  images,
  backgroundColor = '#B5BFFF', // Default light blue
}) => {
  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="relative h-full w-full">
        {/* Top Image - Right */}
        {images.length > 0 && (
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="z-00 absolute right-40 top-[-5%] h-auto w-[45%] object-cover"
          />
        )}

        {/* Bottom Image - Left */}
        {images.length > 1 && (
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="absolute bottom-[-5%] left-40 z-10 h-auto w-[45%] object-cover"
          />
        )}
      </div>
    </section>
  )
}

export default OverlappingImagesSection
