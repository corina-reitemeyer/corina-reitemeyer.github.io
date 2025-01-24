import React from 'react'

interface Image {
  src: string
  alt: string
}

interface TwoRowsImagesSectionProps {
  desktopImage?: Image // Optional desktop image
  bottomRowImages?: Image[] // Optional bottom row images
  backgroundColor?: string
}

const TwoRowsImagesSection: React.FC<TwoRowsImagesSectionProps> = ({
  desktopImage,
  bottomRowImages = [], // Default to an empty array
  backgroundColor = '#B5BFFF', // Default background color
}) => {
  const hasBottomRow = bottomRowImages.length > 0

  return (
    <section
      className={`relative flex flex-col items-center py-20 ${
        hasBottomRow ? '' : 'h-screen' // Make section full height if no bottom row
      }`}
      style={{ backgroundColor }}
    >
      {/* Top Row: Single Desktop Image */}
      {desktopImage && (
        <div
          className={`w-screen overflow-hidden ${
            hasBottomRow ? '' : 'absolute bottom-0' // Align to bottom if no bottom row
          }`}
        >
          <img
            src={desktopImage.src}
            alt={desktopImage.alt}
            className="h-auto w-full object-contain"
          />
        </div>
      )}

      {/* Bottom Row: Mobile Screens */}
      {hasBottomRow && (
        <div className="mt-16 flex w-full max-w-screen-xl justify-center gap-8">
          {bottomRowImages.map((image, index) => (
            <div
              key={`bottom-${index}`}
              className={`relative w-[20%] flex-shrink-0 ${
                index === 0
                  ? 'mt-36' // Lower alignment for the left mobile
                  : index === 1
                    ? 'mt-10' // Centered alignment for the middle mobile
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
      )}
    </section>
  )
}

export default TwoRowsImagesSection
