import React from 'react'

interface LaptopImage {
  src: string
  alt: string
}

interface DualLaptopsCompactSectionProps {
  laptops: LaptopImage[]
  backgroundColor?: string
  backgroundImage?: string // Added backgroundImage to the interface
}

const DualLaptopsCompactSection: React.FC<DualLaptopsCompactSectionProps> = ({
  laptops,
  backgroundColor = '#FFF4B0',
  backgroundImage,
}) => {
  return (
    <section
      className="relative py-36"
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
            backgroundSize: 'cover', // Adjust as needed
            zIndex: 1, // Ensure it's behind the laptop images
          }}
        />
      )}

      {/* Content (Laptops) */}
      <div className="relative z-10 flex h-auto w-full items-center justify-between">
        {laptops.map((laptop, index) => (
          <img
            key={index}
            src={laptop.src}
            alt={laptop.alt}
            className={`h-auto object-contain ${index === 0 ? 'ml-0' : 'mr-0'}`}
            style={{
              width: 'auto',
              height: '30vw',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default DualLaptopsCompactSection
