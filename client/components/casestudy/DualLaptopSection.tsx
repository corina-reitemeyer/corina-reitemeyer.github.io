import React from 'react'

interface LaptopImage {
  src: string
  alt: string
}

interface DualLaptopsSectionProps {
  laptops: LaptopImage[]
  backgroundColor?: string
}

const DualLaptopsSection: React.FC<DualLaptopsSectionProps> = ({
  laptops,
  backgroundColor = '#FFF4B0',
}) => {
  return (
    <section className="relative py-16" style={{ backgroundColor }}>
      <div className="grid h-auto w-full grid-cols-2 items-center">
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
