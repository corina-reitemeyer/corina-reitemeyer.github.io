import { useState } from 'react'
import Lightbox from './LightBox.tsx'

const TabbedImageViewer: React.FC<{
  images: { path: string; caption?: string }[]
}> = ({ images }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <div className="space-y-8">
      {/* Lightbox Modal */}
      {lightboxImage && (
        <Lightbox
          src={lightboxImage}
          alt="Expanded view"
          onClose={closeLightbox}
        />
      )}

      {/* Tabs Container */}
      <div className="flex space-x-6 border-b border-gray-200 pb-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`px-4 py-2 text-sm font-semibold transition ${
              selectedTab === index
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>

      {/* Selected Image */}
      <div className="w-full">
        <button
          onClick={() => openLightbox(images[selectedTab].path)}
          className="focus:outline-none"
        >
          <img
            src={images[selectedTab].path}
            alt={images[selectedTab].caption || 'Tabbed image'}
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
        </button>

        {/* Image Caption */}
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
