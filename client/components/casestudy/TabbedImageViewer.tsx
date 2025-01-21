import React, { useState } from 'react'
import Lightbox from './LightBox'

interface TabbedImageViewerProps {
  images: { path: string; tabName?: string; caption?: string }[]
}

const TabbedImageViewer: React.FC<TabbedImageViewerProps> = ({ images }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          src={lightboxImage}
          alt="Expanded view"
          onClose={closeLightbox}
        />
      )}

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {images.map((image, index) => (
          <button
            key={index}
            className={`text-md px-4 py-2 font-semibold ${
              selectedTab === index
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500 hover:text-black'
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {image.tabName}
          </button>
        ))}
      </div>

      {/* Selected Image */}
      <div className="mt-6">
        <button
          onClick={() => openLightbox(images[selectedTab].path)}
          className="focus:outline-none"
        >
          <img
            src={images[selectedTab].path}
            alt={images[selectedTab].caption || 'Tabbed image'}
            className="w-full max-w-4xl rounded-lg"
          />
        </button>
        {images[selectedTab].caption && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {images[selectedTab].caption}
          </p>
        )}
      </div>
    </div>
  )
}

export default TabbedImageViewer
