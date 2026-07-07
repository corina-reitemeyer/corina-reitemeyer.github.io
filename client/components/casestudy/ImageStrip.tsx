import { useId, useRef, useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Lightbox from '../casestudy/LightBox'
import { defaultViewport } from '../../lib/motion'

type GalleryImage = {
  id: string
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
  /** Wraps the image in a decorative browser-chrome frame (traffic-light dots). */
  frame?: 'browser'
}

type ImageGalleryProps = {
  images: GalleryImage[]
  title?: string
  className?: string
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

// Triggers slightly later than the site default (0.2) since the strip's
// images are taller and would otherwise animate while mostly off-screen.
const sharedViewport = { ...defaultViewport, amount: 0.35 } as const

function getImageLabel(image: GalleryImage, index: number): string {
  return image.caption || image.alt || `Image ${index + 1}`
}

function isAnimatedGif(src: string): boolean {
  return src.toLowerCase().endsWith('.gif')
}

type GifFrameProps = {
  src: string
  alt: string
  width?: number
  height?: number
  imgClassName: string
  onOpen: () => void
  triggerRef: (el: HTMLButtonElement | null) => void
}

// Animated GIFs have no native pause control and autoplay indefinitely, which
// fails WCAG 2.2.2 (Pause, Stop, Hide). Since the browser gives us no API to
// pause GIF playback, pausing works by snapshotting the currently-displayed
// frame onto a canvas and showing that in place of the animating <img>.
function GifFrame({
  src,
  alt,
  width,
  height,
  imgClassName,
  onOpen,
  triggerRef,
}: GifFrameProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [paused, setPaused] = useState(false)

  const togglePause = (e: React.MouseEvent) => {
    e.stopPropagation()
    const img = imgRef.current
    const canvas = canvasRef.current
    if (!img || !canvas) return

    if (!paused) {
      // Bail if the image hasn't actually loaded yet: freezing now would
      // snapshot a 0x0 canvas and hide the still-loading GIF behind it.
      if (!img.naturalWidth || !img.naturalHeight) return
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      canvas.getContext('2d')?.drawImage(img, 0, 0)
    }
    setPaused((p) => !p)
  }

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={onOpen}
        aria-label={`Open enlarged image: ${alt}`}
        className="group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#08082a]"
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={width}
          height={height}
          className={`${imgClassName} cursor-zoom-in transition group-hover:opacity-90`}
        />
      </button>

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${
          paused ? '' : 'hidden'
        } ${imgClassName}`}
      />

      <button
        type="button"
        onClick={togglePause}
        aria-pressed={paused}
        aria-label={paused ? 'Play animation' : 'Pause animation'}
        className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur transition hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {paused ? (
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path d="M6 4l10 6-10 6V4z" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path d="M6 4h3v12H6V4zm5 0h3v12h-3V4z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default function ImageGallery({
  images,
  title = 'Work',
  className = '',
}: ImageGalleryProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])

  const items = images.filter((image) => Boolean(image?.src))
  const activeImage = activeIndex !== null ? items[activeIndex] : undefined

  if (items.length === 0) return null

  return (
    <>
      <section
        aria-labelledby={headingId}
        className={`bg-[#08082a] py-16 sm:py-24 ${className}`}
      >
        <div className="container mx-auto max-w-6xl px-6 sm:px-8">
          <h2
            id={headingId}
            className="mb-6 text-3xl font-extrabold text-white md:text-4xl"
          >
            {title}
          </h2>

          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul role="list" className="space-y-8 md:space-y-10">
            {items.map((image, index) => {
              const imgClassName = `w-full object-cover ${
                image.frame === 'browser' ? '' : 'rounded-xl'
              }`

              return (
                <li key={image.id}>
                  <motion.figure
                    className="w-full"
                    variants={shouldReduceMotion ? undefined : itemVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView={shouldReduceMotion ? undefined : 'visible'}
                    viewport={sharedViewport}
                  >
                    <div
                      className={
                        image.frame === 'browser'
                          ? 'overflow-hidden rounded-xl border border-white/10 bg-[#1c1c3a] shadow-2xl shadow-black/40'
                          : ''
                      }
                    >
                      {image.frame === 'browser' && (
                        <div
                          aria-hidden="true"
                          className="flex items-center gap-1.5 border-b border-white/10 bg-[#14142c] px-4 py-2.5"
                        >
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                        </div>
                      )}

                      {isAnimatedGif(image.src) ? (
                        <GifFrame
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          imgClassName={imgClassName}
                          onOpen={() => setActiveIndex(index)}
                          triggerRef={(el) => {
                            triggerRefs.current[index] = el
                          }}
                        />
                      ) : (
                        <button
                          ref={(el) => {
                            triggerRefs.current[index] = el
                          }}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          aria-label={`Open enlarged image: ${getImageLabel(image, index)}`}
                          className="group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#08082a]"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            decoding="async"
                            width={image.width}
                            height={image.height}
                            className={`${imgClassName} cursor-zoom-in transition group-hover:opacity-90`}
                          />
                        </button>
                      )}
                    </div>

                    {image.caption && (
                      <figcaption className="mt-2 text-left text-sm text-slate-300">
                        {image.caption}
                      </figcaption>
                    )}
                  </motion.figure>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {activeImage && (
        <Lightbox
          src={activeImage.src}
          alt={activeImage.alt}
          onClose={() => setActiveIndex(null)}
          triggerRef={{ current: triggerRefs.current[activeIndex ?? 0] }}
        />
      )}
    </>
  )
}
