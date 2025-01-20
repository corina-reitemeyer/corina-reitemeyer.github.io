import React from 'react'

interface BackgroundSectionProps {
  subtitle: string
  title: string
  date: string
  description: string
  imageSrc: string
  imageAlt: string
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  subtitle,
  title,
  date,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="background-section">
      <div className="background-content">
        <p className="background-subtitle">{subtitle}</p>
        <h2 className="background-title">{title}</h2>
        <p className="background-date">{date}</p>
        <p className="background-description">{description}</p>
      </div>
      <div className="background-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  )
}

export default BackgroundSection
