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
    <section className="overlapping-images-section" style={{ backgroundColor }}>
      <div className="overlapping-images-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`overlapping-image overlapping-image-${index}`}
          />
        ))}
      </div>
    </section>
  )
}

export default OverlappingImagesSection
