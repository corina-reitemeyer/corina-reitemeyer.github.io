import React from 'react'

interface CompetitiveAnalysisSectionProps {
  subtitle: string
  title: string
  description: string
  images: { src: string; alt: string }[]
}

const CompetitiveAnalysisSection: React.FC<CompetitiveAnalysisSectionProps> = ({
  subtitle,
  title,
  description,
  images,
}) => {
  return (
    <section className="libraries-analysis-section">
      <div className="libraries-analysis-header">
        <p className="libraries-analysis-subtitle">{subtitle}</p>
        <h2 className="libraries-analysis-title">{title}</h2>
        <p className="libraries-analysis-description">{description}</p>
      </div>
      <div className="libraries-analysis-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="libraries-analysis-image"
          />
        ))}
      </div>
    </section>
  )
}

export default CompetitiveAnalysisSection
