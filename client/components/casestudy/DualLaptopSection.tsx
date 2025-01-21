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
    <section className="dual-laptops-section" style={{ backgroundColor }}>
      <div className="laptops-container">
        {laptops.map((laptop, index) => (
          <img
            key={index}
            src={laptop.src}
            alt={laptop.alt}
            className="laptop-image"
          />
        ))}
      </div>
    </section>
  )
}

export default DualLaptopsSection
