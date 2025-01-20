import React from 'react'

interface Image {
  src: string
  alt: string
}

interface TwoRowsImagesSectionProps {
  topRowImages: Image[]
  bottomRowImages: Image[]
  backgroundColor?: string
}

const TwoRowsImagesSection: React.FC<TwoRowsImagesSectionProps> = ({
  topRowImages,
  bottomRowImages,
  backgroundColor = '#B5BFFF', // Default background color
}) => {
  return (
    <section className="two-rows-images-section" style={{ backgroundColor }}>
      <div className="top-row-container">
        {topRowImages.map((image, index) => (
          <img
            key={`top-${index}`}
            src={image.src}
            alt={image.alt}
            className={`top-row-image top-row-image-${index}`}
          />
        ))}
      </div>
      <div className="bottom-row-container">
        {bottomRowImages.map((image, index) => (
          <img
            key={`bottom-${index}`}
            src={image.src}
            alt={image.alt}
            className="bottom-row-image"
          />
        ))}
      </div>
    </section>
  )
}

export default TwoRowsImagesSection
