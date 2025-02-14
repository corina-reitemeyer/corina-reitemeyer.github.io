import React from 'react'
import { useInView } from 'react-intersection-observer'

interface DualLaptopsCompactSectionProps {
  laptopsImage: string // Single image for the laptops
  backgroundColor?: string
  backgroundImage?: string // Background vector image
}

const DualLaptopsCompactSection: React.FC<DualLaptopsCompactSectionProps> = ({
  laptopsImage,
  backgroundColor = '#FFF4B0',
  backgroundImage,
}) => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true })

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden py-24"
      style={{ backgroundColor }}
    >
      {/* ✅ Background Image (if provided) */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background Vectors"
          className="absolute z-0 w-[90%] max-w-[1200px] opacity-100 md:max-w-[1400px] xl:max-w-[2200px]"
        />
      )}

      {/* ✅ Laptop Screens Layer - Enlarged for Large Screens */}
      <div className="relative z-10 mx-auto flex items-center justify-center">
        <img
          src={laptopsImage}
          alt="Dual Laptop Screens"
          className={`w-full max-w-[1000px] transform transition-all duration-700 ease-in-out sm:max-w-[1200px] md:max-w-[1400px] lg:max-w-[1800px] xl:max-w-[2600px] ${
            inView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        />
      </div>
    </section>
  )
}

export default DualLaptopsCompactSection
