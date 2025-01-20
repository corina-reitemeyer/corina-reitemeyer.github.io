import React from 'react'

interface MobileScreen {
  src: string
  alt: string
}

interface ThreeScreensSectionProps {
  screens: MobileScreen[]
}

const ThreeScreensSection: React.FC<ThreeScreensSectionProps> = ({
  screens,
}) => {
  return (
    <section className="three-screens-section">
      <div className="screens-container">
        {screens.map((screen, index) => (
          <img
            key={index}
            src={screen.src}
            alt={screen.alt}
            className="screen-image"
          />
        ))}
      </div>
    </section>
  )
}

export default ThreeScreensSection
