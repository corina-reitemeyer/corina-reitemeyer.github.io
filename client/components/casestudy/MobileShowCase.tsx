import { useInView } from 'react-intersection-observer'

interface MobileScreensShowcaseProps {
  image: { src: string; alt: string }
  backgroundImage?: string // ✅ New: Optional background image
  backgroundColor?: string // ✅ New: Optional background color
}

const MobileScreensShowcase: React.FC<MobileScreensShowcaseProps> = ({
  image,
  backgroundImage,
  backgroundColor = '#9EEEFF', // Default light blue
}) => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true })

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center px-6 py-24 md:px-12" // ✅ Added padding for left/right margins
      style={{ backgroundColor }}
    >
      {/* ✅ Background Image (if provided) */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background Pattern"
          className="absolute z-0 w-full max-w-[1200px] opacity-100 md:max-w-[1400px] xl:max-w-[1600px]"
        />
      )}

      {/* ✅ Mobile Screens Layer */}
      <div className="relative z-10 mx-auto flex items-center justify-center">
        <img
          src={image.src}
          alt={image.alt}
          className={`h-auto max-w-[90%] object-contain transition-all duration-700 ease-in-out sm:max-w-[80%] md:max-w-[70%] lg:max-w-7xl ${
            inView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        />
      </div>
    </section>
  )
}

export default MobileScreensShowcase
