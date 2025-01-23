import React from 'react'

interface LaptopImage {
  src: string
  alt: string
}

interface DualLaptopsCompactSectionProps {
  laptops: LaptopImage[]
  backgroundColor?: string
}

const DualLaptopsCompactSection: React.FC<DualLaptopsCompactSectionProps> = ({
  laptops,
  backgroundColor = '#FFF4B0',
}) => {
  return (
    <section className="relative py-36" style={{ backgroundColor }}>
      <div className="flex h-auto w-full items-center justify-between">
        {laptops.map((laptop, index) => (
          <img
            key={index}
            src={laptop.src}
            alt={laptop.alt}
            className={`h-auto object-contain ${index === 0 ? 'ml-0' : 'mr-0'}`}
            style={{
              width: 'auto', // Each laptop image takes ~48% of the viewport width
              height: '30vw',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default DualLaptopsCompactSection
