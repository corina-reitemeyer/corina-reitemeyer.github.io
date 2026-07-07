import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { defaultViewport } from '../../lib/motion'

type ProcessStep = {
  id: string
  label: string
  description: string
  /** Shown as a small eyebrow above this step, marks the start of a new phase. */
  groupLabel?: string
}

type ProcessFrameworkProps = {
  steps: ProcessStep[]
  loopLabel?: string
  caption?: string
  className?: string
}

export default function ProcessFramework({
  steps,
  loopLabel,
  caption,
  className = '',
}: ProcessFrameworkProps) {
  const shouldReduceMotion = useReducedMotion()
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartScrollLeftRef = useRef(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateEdges = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  const scrollByStep = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({
      left: direction * 208,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    })
  }

  const handleDragStart = (e: React.MouseEvent) => {
    const el = scrollRef.current
    if (!el) return
    isDraggingRef.current = true
    dragStartXRef.current = e.pageX
    dragStartScrollLeftRef.current = el.scrollLeft
  }

  const handleDragMove = (e: React.MouseEvent) => {
    const el = scrollRef.current
    if (!el || !isDraggingRef.current) return
    e.preventDefault()
    el.scrollLeft = dragStartScrollLeftRef.current - (e.pageX - dragStartXRef.current)
  }

  const stopDragging = () => {
    isDraggingRef.current = false
  }

  const arrowWrapperClass = (hasLoop: boolean) =>
    `flex flex-none items-center transition-opacity duration-200 disabled:pointer-events-none disabled:opacity-0 ${hasLoop ? 'pb-8' : ''}`
  const arrowButtonClass =
    'flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:text-white'

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    window.addEventListener('mouseup', stopDragging)
    return () => {
      window.removeEventListener('resize', updateEdges)
      window.removeEventListener('mouseup', stopDragging)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps])

  return (
    <figure className={className}>
      {(loopLabel || caption) && (
        <figcaption className="mb-6 space-y-3 pl-11">
          {caption && (
            <h3 className="text-xl font-bold text-white antialiased sm:text-2xl">
              {caption}
            </h3>
          )}
          {loopLabel && (
            <p className="text-sm text-slate-400">{loopLabel}</p>
          )}
        </figcaption>
      )}

      <div className="flex items-stretch gap-2">
        <button
          type="button"
          onClick={() => scrollByStep(-1)}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className={arrowWrapperClass(Boolean(loopLabel))}
        >
          <span className={arrowButtonClass} aria-hidden="true">
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

        <div className="relative min-w-0 flex-1">
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#08082a] to-transparent transition-opacity duration-200 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#08082a] to-transparent transition-opacity duration-200 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions -- draggable scroll viewport, not a discrete control; keyboard/screen-reader users have the arrow buttons */}
          <div
            ref={scrollRef}
            onScroll={updateEdges}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            className="custom-scrollbar-hide cursor-grab select-none overflow-x-auto pb-2 active:cursor-grabbing"
          >
            <div className="inline-flex flex-col gap-3">
              <div className="flex items-start gap-1">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex flex-none items-start">
                    <motion.div
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                      whileInView={
                        shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                      }
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: index * 0.06,
                      }}
                      viewport={defaultViewport}
                      className="w-36 flex-none sm:w-40"
                    >
                      <p className="mb-2 h-8 text-[10px] font-semibold uppercase leading-4 tracking-[0.15em] text-[#CBEDE8]/70">
                        {step.groupLabel ?? ''}
                      </p>
                      <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4">
                        <p className="text-sm font-semibold text-white antialiased">
                          {step.label}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>

                    {index < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-[4.25rem] flex-none px-1 text-base text-white/20"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {loopLabel && (
                <div className="relative h-5 w-full" aria-hidden="true">
                  <div className="absolute inset-x-[72px] top-0 h-4 rounded-b-lg border-b border-l border-r border-white/20 sm:inset-x-[80px]">
                    <span className="absolute -top-[6px] left-0 h-0 w-0 -translate-x-1/2 border-x-[5px] border-b-[6px] border-x-transparent border-b-white/30" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollByStep(1)}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className={arrowWrapperClass(Boolean(loopLabel))}
        >
          <span className={arrowButtonClass} aria-hidden="true">
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
      </div>
    </figure>
  )
}
