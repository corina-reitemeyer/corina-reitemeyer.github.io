import React from 'react'
import { motion } from 'framer-motion'

interface DualLaptopsSectionProps {
  laptopsImage: string
  backgroundColor?: string
  backgroundImage?: string
}

const DualLaptopsSection: React.FC<DualLaptopsSectionProps> = ({
  laptopsImage,
  backgroundColor = '#FFEAA1',
  backgroundImage,
}) => {
  return (
    <section
      className="relative flex min-h-[600px] w-screen items-center justify-center py-12 sm:py-16"
      style={{ backgroundColor }}
    >
      {/* ✅ Background Layer (Squiggles) - Expands & Centers Behind Laptops */}
      {backgroundImage && (
        <motion.img
          src={backgroundImage}
          alt="Background Vectors"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2 -z-10 w-[120%] max-w-[1600px] -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      )}

      {/* ✅ Foreground Layer (Laptops) - Positioned on Top */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex items-center justify-center"
      >
        <img
          src={laptopsImage}
          alt="Laptop Screens"
          className="w-full max-w-[900px] sm:max-w-[1000px] md:max-w-[1100px] lg:max-w-[1200px] xl:max-w-[1800px]"
        />
      </motion.div>
    </section>
  )
}

export default DualLaptopsSection
