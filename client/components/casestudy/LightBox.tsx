import { useEffect } from 'react'

const Lightbox = ({
  src,
  alt,
  onClose,
}: {
  src: string
  alt: string
  onClose: () => void
}) => {
  // Handle closing the lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      role="dialog"
      aria-labelledby="lightbox-title"
      aria-modal="true"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-50 p-2"
        aria-label="Close lightbox"
        tabIndex={0}
      >
        <img src="/images/Close.webp" alt="Close" className="h-8 w-8" />
      </button>

      {/* Lightbox Image */}
      <img
        src={src}
        alt={alt}
        className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-3xl"
      />
    </div>
  )
}

export default Lightbox
