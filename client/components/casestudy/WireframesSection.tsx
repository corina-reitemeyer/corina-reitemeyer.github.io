import React from 'react'

interface WireframeImage {
  src: string
  alt: string
}

interface WireframesSectionProps {
  subtitle: string
  title: string
  description: string
  images: WireframeImage[]
}

const WireframesSection: React.FC<WireframesSectionProps> = ({
  subtitle,
  title,
  description,
  images,
}) => {
  return (
    <section className="wireframes-section">
      <div className="wireframes-header">
        <p className="wireframes-subtitle">{subtitle}</p>
        <h2 className="wireframes-title">{title}</h2>
        <p className="wireframes-description">{description}</p>
      </div>
      <div className="wireframes-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="wireframe-image"
          />
        ))}
      </div>
    </section>
  )
}

export default WireframesSection
