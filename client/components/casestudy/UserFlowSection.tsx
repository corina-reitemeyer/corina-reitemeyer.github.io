import React from 'react'
import TabbedImageViewer from './TabbedImageViewer'

interface TabbedImage {
  path: string
  caption?: string
  tabName?: string // Optional tab name
}

interface UserFlowProps {
  overheadTitle: string // Overhead title for the section
  title: string
  description: string
  images: TabbedImage[] // Array of images with captions and optional tab names
  overheadTitleColor: 'ritmo' | 'ow' | 'moe' // Dynamic color for the overhead title
}

const UserFlow: React.FC<UserFlowProps> = ({
  overheadTitle,
  title,
  description,
  images,
  overheadTitleColor,
}) => {
  const overheadTitleColorMap = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className="py-28">
      <div className="container mx-auto max-w-4xl">
        {/* Overhead Title */}
        <p
          className="text-lg font-semibold"
          style={{ color: overheadTitleColorMap[overheadTitleColor] }}
        >
          {overheadTitle}
        </p>

        {/* Section Title and Description */}
        <div className="mb-12">
          <h3 className="mt-2 text-4xl font-bold text-gray-900">{title}</h3>
          <p className="mt-4 text-lg text-gray-700">{description}</p>
        </div>

        {/* Render TabbedImageViewer if multiple images, or single image with caption */}
        {images.length > 1 ? (
          <div className="mt-24">
            <TabbedImageViewer images={images} />
          </div>
        ) : (
          <div className="mt-8">
            <img
              src={images[0].path}
              alt={images[0].caption || 'User flow image'}
              className="mx-auto w-full max-w-3xl rounded-lg"
            />
            {images[0].caption && (
              <p className="mt-16 text-center text-sm text-gray-600">
                {images[0].caption}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default UserFlow
