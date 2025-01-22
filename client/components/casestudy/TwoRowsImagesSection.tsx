import React from 'react'

interface Image {
  src: string
  alt: string
}

interface TwoRowsImagesSectionProps {
  desktopImage: Image // Single desktop image
  bottomRowImages: Image[]
  backgroundColor?: string
}

const TwoRowsImagesSection: React.FC<TwoRowsImagesSectionProps> = ({
  desktopImage,
  bottomRowImages,
  backgroundColor = '#B5BFFF', // Default background color
}) => {
  return (
    <section
      className="relative flex flex-col items-center py-20"
      style={{ backgroundColor }}
    >
      {/* Top Row: Single Desktop Image */}
      <div className="w-screen overflow-hidden">
        <img
          src={desktopImage.src}
          alt={desktopImage.alt}
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Bottom Row: Mobile Screens */}
      <div className="mt-16 flex w-full max-w-screen-xl justify-center gap-8">
        {bottomRowImages.map((image, index) => (
          <div
            key={`bottom-${index}`}
            className={`relative w-[20%] flex-shrink-0 ${
              index === 0
                ? 'mt-36' // Lower alignment for the left mobile
                : index === 1
                  ? 'mt-0' // Centered alignment for the middle mobile
                  : 'mt-[-36px]' // Higher alignment for the right mobile
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TwoRowsImagesSection
