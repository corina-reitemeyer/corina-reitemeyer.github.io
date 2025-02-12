import React from 'react'
import { useInView } from 'react-intersection-observer'

interface OverlappingImagesSectionProps {
  productImage: string // Single image for the product screens
  backgroundColor?: string
  backgroundImage?: string // Background vector image
}

const OverlappingImagesSection: React.FC<OverlappingImagesSectionProps> = ({
  productImage,
  backgroundColor = '#90AEFF', // Default light blue
  backgroundImage,
}) => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true })

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* ✅ Background Image (Correctly Positioned) */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background Vectors"
          className="absolute left-1/2 top-1/2 z-0 w-[90%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 object-cover opacity-100 md:max-w-[1000px] xl:max-w-[2000px]"
        />
      )}

      {/* ✅ Product Image - Now Covers the Section */}
      <div className="relative z-10 h-full w-full">
        <img
          src={productImage}
          alt="Product Screens"
          className={`absolute left-0 top-0 h-full w-full transform object-cover transition-all duration-700 ease-in-out ${
            inView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        />
      </div>
    </section>
  )
}

export default OverlappingImagesSection
