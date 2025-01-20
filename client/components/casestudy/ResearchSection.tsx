import React from 'react'

interface ResearchSectionProps {
  title: string
  subtitle?: string
  description: string
  result: string
  note?: string
  imageSrc: string
  imageAlt: string
  backgroundColor?: string
}

const ResearchSection: React.FC<ResearchSectionProps> = ({
  title,
  subtitle,
  description,
  result,
  note,
  imageSrc,
  imageAlt,
  backgroundColor = '#E3F3FF', // Default light blue
}) => {
  return (
    <section className="research-section" style={{ backgroundColor }}>
      <div className="research-container">
        <div className="research-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className="research-text">
          {subtitle && <p className="research-subtitle">{subtitle}</p>}
          <h2 className="research-title">{title}</h2>
          <p className="research-description">{description}</p>
          <p className="research-result">
            <strong>Result:</strong> {result}
          </p>
          {note && <p className="research-note">{note}</p>}
        </div>
      </div>
    </section>
  )
}

export default ResearchSection
