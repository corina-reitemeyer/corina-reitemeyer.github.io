import React from 'react'

interface LaptopImage {
  src: string
  alt: string
}

interface DualLaptopsSectionProps {
  laptops: LaptopImage[]
  backgroundColor?: string // Optional prop for dynamic background color
  backgroundImage?: string // Optional prop for background image
}

const DualLaptopsSection: React.FC<DualLaptopsSectionProps> = ({
  laptops,
  backgroundColor = '#FFF4B0', // Default background color
  backgroundImage, // Optional background image
}) => {
  return (
    <section
      className="relative w-screen py-12 sm:py-16"
      style={{
        backgroundColor,
      }}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            zIndex: 1,
          }}
        />
      )}

      {/* Content (Laptops) */}
      <div className="relative z-10 grid h-auto w-full grid-cols-1 items-center gap-y-6 sm:grid-cols-2 sm:gap-y-0">
        {/* Left Laptop */}
        <div className="relative flex justify-center sm:justify-start">
          <img
            src={laptops[0]?.src}
            alt={laptops[0]?.alt}
            className="h-auto w-[75vw] object-contain sm:w-[48vw]"
          />
        </div>

        {/* Right Laptop */}
        <div className="relative flex justify-center sm:justify-end">
          <img
            src={laptops[1]?.src}
            alt={laptops[1]?.alt}
            className="h-auto w-[75vw] object-contain sm:w-[48vw]"
          />
        </div>
      </div>
    </section>
  )
}

export default DualLaptopsSection
