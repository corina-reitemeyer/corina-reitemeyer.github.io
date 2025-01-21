import React from 'react'
import { useInView } from 'react-intersection-observer'

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
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#9EEEFF] py-24"
    >
      {/* Background SVG Circles */}
      <div className="absolute inset-0 -z-10">
        {/* Top Left Circle */}
        <img
          src="/images/shapes/ritmo-circle.svg"
          alt="Decorative circle"
          className="absolute left-0 top-0 h-72 w-72 opacity-20"
        />
        {/* Bottom Right Circle */}
        <img
          src="/images/shapes/ritmo-circle.svg"
          alt="Decorative circle"
          className="absolute bottom-0 right-0 h-72 w-72 opacity-20"
        />
      </div>

      {/* Mobile Screens */}
      <div className="container relative mx-auto h-[600px]">
        {/* Left Screen */}
        <img
          src={screens[0]?.src}
          alt={screens[0]?.alt}
          className={`absolute left-[15%] top-28 w-[40%] max-w-[300px] transform transition-transform delay-200 duration-700 ease-in-out ${
            inView ? 'translate-y-0' : 'translate-y-24'
          }`}
        />

        {/* Center Screen */}
        <img
          src={screens[1]?.src}
          alt={screens[1]?.alt}
          className={`delay-400 absolute left-1/2 top-10 w-[40%] max-w-[300px] -translate-x-1/2 transform transition-transform duration-700 ease-in-out ${
            inView ? 'translate-y-0' : 'translate-y-24'
          }`}
        />

        {/* Right Screen */}
        <img
          src={screens[2]?.src}
          alt={screens[2]?.alt}
          className={`delay-600 absolute right-[15%] top-28 w-[40%] max-w-[300px] transform transition-transform duration-700 ease-in-out ${
            inView ? 'translate-y-0' : 'translate-y-24'
          }`}
        />
      </div>
    </section>
  )
}

export default ThreeScreensSection
