import { useEffect, useState } from 'react'

const Lightbox = ({
  src,
  alt,
  onClose,
}: {
  src: string
  alt: string
  onClose: () => void
}) => {
  const [zoom, setZoom] = useState(false)

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-50 p-2"
        aria-label="Close lightbox"
      >
        <img src="/images/Close.webp" alt="Close" className="h-8 w-8" />
      </button>

      {/* Fit container (zoom off) OR scroll/pan container (zoom on) */}
      <div
        className={
          zoom
            ? 'h-screen w-screen overflow-auto p-4'
            : 'grid h-screen w-screen place-items-center'
        }
      >
        {/* Use a button for toggling zoom -> keyboard accessible */}
        <button
          type="button"
          onClick={() => setZoom((z) => !z)}
          aria-pressed={zoom}
          aria-label={zoom ? 'Zoom out' : 'Zoom in'}
          className={zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'}
        >
          <img
            src={src}
            alt={alt}
            className="h-[96svh] w-[96svw] rounded-3xl object-contain"
          />
        </button>
      </div>
    </div>
  )
}

export default Lightbox
