import React from 'react'

interface TabbedImage {
  path: string
  caption: string
}

interface UserFlowItem {
  type: 'tabbed' | 'tall' // Determines which layout to render
  tabbedImages?: TabbedImage[] // For the Tabbed Image Viewer
  tallImage?: string // For the Tall Image
  caption?: string // Caption for the Tall Image
  additionalImage?: string // Additional image (when using Tabbed Viewer + Separate Image)
}

interface UserFlowProps {
  title: string
  description: string
  userflows: UserFlowItem[] // Allows multiple user flow items
}

const UserFlow: React.FC<UserFlowProps> = ({
  title,
  description,
  userflows,
}) => {
  return (
    <div className="bg-light-gray rounded-lg px-8 py-12">
      {/* Section Title and Description */}
      <h3 className="text-primary mb-2 text-lg font-bold">{title}</h3>
      <p className="mb-8 text-lg">{description}</p>

      {/* Render Each User Flow */}
      {userflows.map((flow, index) => (
        <div key={index} className="mb-12">
          {/* Tabbed Layout */}
          {flow.type === 'tabbed' && flow.tabbedImages ? (
            <div className="mb-8">
              <div className="tabs grid grid-cols-1 gap-4 sm:grid-cols-2">
                {flow.tabbedImages.map((image, i) => (
                  <div key={i} className="tab-content">
                    <img
                      src={image.path}
                      alt={image.caption}
                      className="mb-4 h-auto w-full rounded-lg shadow-md"
                    />
                    <p className="text-md text-center text-gray-700">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
              {/* Additional Image */}
              {flow.additionalImage && (
                <img
                  src={flow.additionalImage}
                  alt="Additional Content"
                  className="mt-6 h-auto w-full rounded-lg shadow-md"
                />
              )}
            </div>
          ) : (
            flow.type === 'tabbed' && (
              <p className="text-center text-red-500">
                Tabbed layout requires images.
              </p>
            )
          )}

          {/* Tall Layout */}
          {flow.type === 'tall' && flow.tallImage && flow.caption ? (
            <div>
              <img
                src={flow.tallImage}
                alt={flow.caption}
                className="mb-4 h-auto w-full rounded-lg shadow-md"
              />
              <p className="text-md text-center text-gray-700">
                {flow.caption}
              </p>
            </div>
          ) : (
            flow.type === 'tall' && (
              <p className="text-center text-red-500">
                Tall layout requires an image and a caption.
              </p>
            )
          )}
        </div>
      ))}
    </div>
  )
}

export default UserFlow
