import {
  useId,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type SVGProps,
} from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

type Photo = { src: string; alt: string }

const photos: Photo[] = [
  {
    src: '/images/community/salsa-therapy-performers-2024.webp',
    alt: 'Corina with the Salsa Therapy dance school performers backstage, 2024',
  },
  {
    src: '/images/community/corina-jono-wellington-latin-showcase.webp',
    alt: 'Corina performing at the Wellington Latin Showcase',
  },
  {
    src: '/images/community/corina-mentor-summer-of-tech.webp',
    alt: 'Corina mentoring a student during a Summer of Tech session',
  },
  {
    src: '/images/community/corina-event-photo.webp',
    alt: 'Corina photographing at a tech event',
  },
]

/** Pixels of drift per animation frame (~60fps), a slow, steady crawl. */
const AUTOPLAY_SPEED = 0.4
const TILE_STEP = 448

function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <rect x="5" y="4" width="3" height="12" rx="1" fill="currentColor" />
      <rect x="12" y="4" width="3" height="12" rx="1" fill="currentColor" />
    </svg>
  )
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M6 4.5v11l9-5.5-9-5.5Z" fill="currentColor" />
    </svg>
  )
}

/** Photos rendered three times so there's always a full screen of images to
 *  scroll into in either direction; the middle copy is the only one exposed
 *  to assistive tech, the two flanking copies are aria-hidden clones used
 *  purely to make the loop visually seamless. */
const loopedPhotos = [0, 1, 2].flatMap((setIndex) =>
  photos.map((photo) => ({
    ...photo,
    key: `${photo.src}-${setIndex}`,
    isReal: setIndex === 1,
  })),
)

function PhotoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const driftPositionRef = useRef(0)
  const isDraggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartScrollLeftRef = useRef(0)
  const scrollEndTimeoutRef = useRef<number>()
  const [isHovering, setIsHovering] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  /** One third of the (tripled) scroll content -- the width of a single,
   *  real set of photos. */
  const getSetWidth = () => {
    const el = scrollRef.current
    return el ? el.scrollWidth / 3 : 0
  }

  /** Once scroll position drifts into a cloned set, silently jump back by
   *  one set width so it looks like the scroll never stopped. Since the
   *  clones are pixel-identical to the real set, the jump is invisible. */
  const wrapIfNeeded = () => {
    const el = scrollRef.current
    if (!el || isDraggingRef.current) return
    const setWidth = getSetWidth()
    if (setWidth <= 0) return
    if (el.scrollLeft < setWidth * 0.5) {
      el.scrollLeft += setWidth
    } else if (el.scrollLeft > setWidth * 1.5) {
      el.scrollLeft -= setWidth
    }
    driftPositionRef.current = el.scrollLeft
  }

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    if (!isDraggingRef.current) {
      driftPositionRef.current = el.scrollLeft
    }
    window.clearTimeout(scrollEndTimeoutRef.current)
    scrollEndTimeoutRef.current = window.setTimeout(wrapIfNeeded, 120)
  }

  const scrollByStep = (direction: 1 | -1) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: direction * TILE_STEP, behavior: 'smooth' })
  }

  const handleDragStart = (e: MouseEvent) => {
    const el = scrollRef.current
    if (!el) return
    isDraggingRef.current = true
    dragStartXRef.current = e.pageX
    dragStartScrollLeftRef.current = el.scrollLeft
  }

  const handleDragMove = (e: MouseEvent) => {
    const el = scrollRef.current
    if (!el || !isDraggingRef.current) return
    e.preventDefault()
    el.scrollLeft = dragStartScrollLeftRef.current - (e.pageX - dragStartXRef.current)
  }

  const stopDragging = () => {
    isDraggingRef.current = false
    const el = scrollRef.current
    if (el) driftPositionRef.current = el.scrollLeft
    wrapIfNeeded()
  }

  const arrowButtonClass =
    'bg-ink/80 text-paper flex h-10 w-10 flex-none items-center justify-center rounded-full border border-rule backdrop-blur-sm transition-colors duration-200 hover:border-teal-mid'

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const setWidth = el.scrollWidth / 3
    el.scrollLeft = setWidth
    driftPositionRef.current = setWidth

    window.addEventListener('resize', wrapIfNeeded)
    window.addEventListener('mouseup', stopDragging)
    return () => {
      window.removeEventListener('resize', wrapIfNeeded)
      window.removeEventListener('mouseup', stopDragging)
      window.clearTimeout(scrollEndTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion || isPaused || isHovering) return

    let frame: number

    const drift = () => {
      const el = scrollRef.current
      if (el) {
        driftPositionRef.current += AUTOPLAY_SPEED
        el.scrollLeft = driftPositionRef.current
        wrapIfNeeded()
      }
      frame = window.requestAnimationFrame(drift)
    }

    frame = window.requestAnimationFrame(drift)
    return () => window.cancelAnimationFrame(frame)
  }, [isPaused, isHovering])

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative min-w-0">
        <div className="from-ink pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent" />
        <div className="from-ink pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent" />

        {/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex -- draggable scroll region; tabIndex is the standard fix for axe's scrollable-region-focusable rule, letting native arrow-key scrolling work once focused */}
        <div
          ref={scrollRef}
          role="region"
          aria-label="Photos, scrollable"
          tabIndex={0}
          onScroll={handleScroll}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className="custom-scrollbar-hide cursor-grab select-none overflow-x-auto active:cursor-grabbing focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          <div className="flex gap-6">
            {loopedPhotos.map((photo) => (
              <img
                key={photo.key}
                src={photo.src}
                alt={photo.isReal ? photo.alt : ''}
                aria-hidden={!photo.isReal}
                className="aspect-[4/3] w-[26rem] flex-none object-cover sm:w-[28rem]"
              />
            ))}
          </div>
        </div>
        {/* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */}

        <button
          type="button"
          onClick={() => scrollByStep(-1)}
          aria-label="Scroll left"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          <span className={arrowButtonClass}>
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <button
          type="button"
          onClick={() => scrollByStep(1)}
          aria-label="Scroll right"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          <span className={arrowButtonClass}>
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-pressed={isPaused}
          aria-label={isPaused ? 'Play photo carousel' : 'Pause photo carousel'}
          className="absolute bottom-4 right-4 z-20 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          <span className={arrowButtonClass}>
            {isPaused ? (
              <PlayIcon className="h-4 w-4" />
            ) : (
              <PauseIcon className="h-4 w-4" />
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

export default function CommunitySection() {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section
      ref={sectionRef}
      id="community"
      aria-labelledby={headingId}
      className="w-full bg-ink py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 xl:px-0">
        <div
          className={`reveal reveal--1 relative mb-10 max-w-measure sm:mb-14 ${revealClass}`}
        >
          <p className="mb-3 text-xs font-normal uppercase tracking-[0.16em] text-teal-mid">
            Community &amp; dance
          </p>
          <h2
            id={headingId}
            className="text-[clamp(2rem,5vw,3rem)] font-bold leading-[0.98] tracking-[-0.03em] text-paper"
          >
            Latin dance and the tech community
          </h2>
        </div>

        <div className={`reveal reveal--2 ${revealClass}`}>
          <p className="text-paper-muted max-w-measure mb-8">
            I care about growing capability in the people around me, and showing
            up for the communities I&rsquo;m part of, whether that&rsquo;s
            performing, teaching salsa, shooting event photography, or mentoring
            someone finding their feet in a new field.
          </p>

          <PhotoCarousel />
        </div>
      </div>
    </section>
  )
}
