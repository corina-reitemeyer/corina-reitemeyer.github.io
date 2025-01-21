import React, { useEffect, useState } from 'react'

interface MobileScreensShowcaseProps {
  image: { src: string; alt: string }
}

const MobileScreensShowcase: React.FC<MobileScreensShowcaseProps> = ({
  image,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100) // Delay to ensure smooth transition
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-[#9EEEFF] py-16">
      <div className="max-w-8xl container mx-auto flex flex-col justify-between">
        {/* Image Section */}
        <div className="flex h-full items-end justify-center overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className={`h-auto max-h-full max-w-full object-contain transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
    </section>
  )
}

export default MobileScreensShowcase
