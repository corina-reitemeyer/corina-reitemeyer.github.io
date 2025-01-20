import React from 'react'

interface TabbedImage {
  path: string
  caption: string
}

interface UserFlowProps {
  title: string
  description: string
  type: 'tabbed' | 'tall' // Determines which layout to render
  tabbedImages?: TabbedImage[] // For the Tabbed Image Viewer
  tallImage?: string // For the Tall Image
  caption?: string // Caption for the Tall Image
  additionalImage?: string // Additional image (when using Tabbed Viewer + Separate Image)
}

const UserFlow: React.FC<UserFlowProps> = ({
  title,
  description,
  type,
  tabbedImages,
  tallImage,
  caption,
  additionalImage,
}) => {
  return (
    <div className="bg-light-gray rounded-lg px-8 py-12">
      <h3 className="text-primary mb-2 text-lg font-bold">{title}</h3>
      <p className="mb-8 text-lg">{description}</p>

      {type === 'tabbed' && tabbedImages && (
        <div className="mb-8">
          {/* Tabbed Viewer */}
          <div className="tabs">
            {tabbedImages.map((image, index) => (
              <div key={index} className="tab-content">
                <img
                  src={image.path}
                  alt={image.caption}
                  className="mb-4 h-auto w-full rounded-lg"
                />
                <p className="text-md text-center">{image.caption}</p>
              </div>
            ))}
          </div>
          {additionalImage && (
            <img
              src={additionalImage}
              alt="Additional Content"
              className="mt-6 h-auto w-full rounded-lg"
            />
          )}
        </div>
      )}

      {type === 'tall' && tallImage && caption && (
        <div>
          {/* Tall Image */}
          <img
            src={tallImage}
            alt={caption}
            className="mb-4 h-auto w-full rounded-lg"
          />
          <p className="text-md text-center">{caption}</p>
        </div>
      )}
    </div>
  )
}

export default UserFlow
