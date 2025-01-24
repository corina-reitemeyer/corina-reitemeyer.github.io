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
      className="relative w-screen py-16"
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
      <div className="relative z-10 grid h-auto w-full grid-cols-2 items-center">
        {/* Left Laptop */}
        <div className="relative flex justify-start">
          <img
            src={laptops[0]?.src}
            alt={laptops[0]?.alt}
            className="h-auto w-[48vw] object-contain"
            style={{
              marginTop: '100px', // Lower the left laptop
            }}
          />
        </div>

        {/* Right Laptop */}
        <div className="relative flex justify-end">
          <img
            src={laptops[1]?.src}
            alt={laptops[1]?.alt}
            className="h-auto w-[48vw] object-contain"
            style={{
              marginBottom: '100px', // Raise the right laptop
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default DualLaptopsSection
