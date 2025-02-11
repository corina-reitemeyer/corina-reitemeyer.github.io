import React from 'react'
import { useInView } from 'react-intersection-observer'

interface ThreeScreensSectionProps {
  screensImage: string
  backgroundColor?: string
  backgroundImage?: string
}

const ThreeScreensSection: React.FC<ThreeScreensSectionProps> = ({
  screensImage,
  backgroundColor = '#9EEEFF',
  backgroundImage,
}) => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true })

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[600px] items-center justify-center py-24"
      style={{ backgroundColor }}
    >
      {/* ✅ Background Image (Ritmo Circles) - Positioned Directly Behind Phones */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background Circles"
          className="absolute z-0 w-[90%] max-w-[800px] opacity-100 md:max-w-[1000px] xl:max-w-[1700px]"
        />
      )}

      {/* ✅ Mobile Screens Layer - Centered on Top */}
      <div className="relative z-10 mx-auto flex items-center justify-center">
        <img
          src={screensImage}
          alt="Mobile Screens"
          className={`w-full max-w-[600px] transform transition-all duration-700 ease-in-out sm:max-w-[700px] md:max-w-[850px] lg:max-w-[1000px] xl:max-w-[1200px] ${
            inView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        />
      </div>
    </section>
  )
}

export default ThreeScreensSection
