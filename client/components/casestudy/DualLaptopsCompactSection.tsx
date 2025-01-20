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
    <section
      className="dual-laptops-compact-section"
      style={{ backgroundColor }}
    >
      <div className="compact-laptops-container">
        {laptops.map((laptop, index) => (
          <img
            key={index}
            src={laptop.src}
            alt={laptop.alt}
            className="compact-laptop-image"
          />
        ))}
      </div>
    </section>
  )
}

export default DualLaptopsCompactSection
