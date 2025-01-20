import React from 'react'

interface MobileScreen {
  src: string
  alt: string
}

interface MobileScreensShowcaseProps {
  title: string
  description: string
  screens: MobileScreen[]
}

const MobileScreensShowcase: React.FC<MobileScreensShowcaseProps> = ({
  title,
  description,
  screens,
}) => {
  return (
    <section className="mobile-screens-showcase">
      <div className="mobile-screens-header">
        <h2 className="mobile-screens-title">{title}</h2>
        <p className="mobile-screens-description">{description}</p>
      </div>
      <div className="mobile-screens-gallery">
        {screens.map((screen, index) => (
          <img
            key={index}
            src={screen.src}
            alt={screen.alt}
            className="mobile-screen-image"
          />
        ))}
      </div>
    </section>
  )
}

export default MobileScreensShowcase
