import React from 'react'
import { useInView } from 'react-intersection-observer'

interface MobileScreen {
  src: string
  alt: string
}

interface ThreeScreensSectionProps {
  screens: MobileScreen[]
  backgroundColor?: string // Optional dynamic background color
  backgroundImage?: string // Optional background image
}

const ThreeScreensSection: React.FC<ThreeScreensSectionProps> = ({
  screens,
  backgroundColor = '#9EEEFF', // Default background color
  backgroundImage, // Optional background image
}) => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      style={{
        backgroundColor,
      }}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      )}

      {/* Mobile Screens */}
      <div className="container relative mx-auto sm:h-[700px] lg:h-[800px]">
        {/* Left Screen */}
        <img
          src={screens[0]?.src}
          alt={screens[0]?.alt}
          className={`absolute left-[15%] top-32 w-[20%] max-w-[300px] transform transition-transform delay-200 duration-700 ease-in-out ${
            inView ? 'translate-y-0' : 'translate-y-24'
          }`}
        />

        {/* Center Screen */}
        <img
          src={screens[1]?.src}
          alt={screens[1]?.alt}
          className={`delay-400 absolute left-1/2 top-10 w-[20%] max-w-[300px] -translate-x-1/2 transform transition-transform duration-700 ease-in-out ${
            inView ? 'translate-y-0' : 'translate-y-24'
          }`}
        />

        {/* Right Screen */}
        <img
          src={screens[2]?.src}
          alt={screens[2]?.alt}
          className={`delay-600 absolute right-[15%] top-24 w-[20%] max-w-[300px] transform transition-transform duration-700 ease-in-out ${
            inView ? 'translate-y-0' : 'translate-y-24'
          }`}
        />
      </div>
    </section>
  )
}

export default ThreeScreensSection
