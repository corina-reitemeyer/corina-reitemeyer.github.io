import React from 'react'
import { useInView } from 'react-intersection-observer'

interface TwoRowsImagesSectionProps {
  desktopImage?: { src: string; alt: string } // Desktop product image (Top row)
  bottomRowImages?: { src: string; alt: string }[] // Bottom row product images (Multiple mobile screens)
  backgroundColor?: string
  topBackgroundImage?: string // Background vector behind the top row
  bottomBackgroundImage?: string // Background vector behind the bottom row
}

const TwoRowsImagesSection: React.FC<TwoRowsImagesSectionProps> = ({
  desktopImage,
  bottomRowImages = [],
  backgroundColor = '#90AEFF',
  topBackgroundImage,
  bottomBackgroundImage,
}) => {
  const hasBottomRow = bottomRowImages.length > 0

  // Hook for the desktop image animation
  const { ref: desktopRef, inView: desktopInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  // Hooks for each mobile product image (predefined before rendering)
  const mobileRefs = bottomRowImages.map(() =>
    useInView({ triggerOnce: true, threshold: 0.2 }),
  )

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor }}
    >
      {topBackgroundImage && (
        <img
          src={topBackgroundImage}
          alt="Top Background Vectors"
          className="absolute left-1/2 top-1/2 z-0 w-[90%] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 object-cover opacity-100 md:max-w-[1200px] xl:max-w-[2000px]"
        />
      )}

      {/* ✅ Scroll-Triggered Animated Desktop Product Image */}
      {desktopImage && (
        <div
          ref={desktopRef}
          className={`relative z-10 flex h-screen w-full items-center justify-center transition-all duration-700 ease-out ${
            desktopInView
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-10 scale-95 opacity-0'
          }`}
        >
          <img
            src={desktopImage.src}
            alt={desktopImage.alt}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {bottomBackgroundImage && (
        <img
          src={bottomBackgroundImage}
          alt="Bottom Background Vectors"
          className="absolute left-1/2 top-1/2 z-0 w-[90%] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 object-cover opacity-100 md:max-w-[1200px] xl:max-w-[2000px]"
        />
      )}

      {/* ✅ Staggered Animated Bottom Row: Mobile Product Images */}
      {hasBottomRow && (
        <div className="relative z-10 mb-24 mt-24 flex w-full max-w-screen-xl justify-center gap-8">
          {bottomRowImages.map((image, index) => {
            const { ref, inView } = mobileRefs[index] // Get pre-defined hook

            return (
              <div
                key={`bottom-${index}`}
                ref={ref}
                className={`relative flex-shrink-0 transition-all duration-700 ease-out ${
                  inView
                    ? `translate-y-0 scale-100 opacity-100`
                    : 'translate-y-10 scale-90 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }} // Add stagger effect
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[80vh] w-auto object-contain"
                />
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default TwoRowsImagesSection
