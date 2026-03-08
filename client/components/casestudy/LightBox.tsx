import { useEffect, useRef, useState } from 'react'

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
  triggerRef?: React.RefObject<HTMLElement>
}

export default function Lightbox({
  src,
  alt,
  onClose,
  triggerRef,
}: LightboxProps) {
  const [zoom, setZoom] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Move focus into dialog on open
  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [])

  // Restore focus to trigger element on close
  useEffect(() => {
    const trigger = triggerRef?.current
    return () => {
      trigger?.focus()
    }
  }, [triggerRef])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Focus trap — keep Tab and Shift+Tab within the dialog
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const focusable = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (focusable.length === 0) {
        e.preventDefault()
        return
      }

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    dialog.addEventListener('keydown', onKeyDown)
    return () => dialog.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Image lightbox'}
      className="fixed inset-0 z-50 bg-black/80"
    >
      <div className="absolute inset-0" aria-hidden="true" onClick={onClose} />

      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-5 top-5 z-50 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <img src="/images/Close.webp" alt="" className="h-8 w-8" />
      </button>

      <div
        className={
          zoom
            ? 'h-screen w-screen overflow-auto p-4'
            : 'grid h-screen w-screen place-items-center'
        }
      >
        <button
          type="button"
          onClick={() => setZoom((z) => !z)}
          aria-pressed={zoom}
          aria-label={zoom ? 'Zoom out' : 'Zoom in'}
          className={`relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
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
