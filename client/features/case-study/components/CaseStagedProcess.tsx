import { useEffect, useId, useRef, useState, type MouseEvent } from 'react'
import { useScrollReveal } from '../../../lib/useScrollReveal'

type ProcessStep = {
  id: string
  label: string
  description: string
  /** Shown as a small eyebrow above this step, marks the start of a new phase. */
  groupLabel?: string
}

type Props = {
  heading: string
  description?: string
  loopLabel?: string
  steps: ProcessStep[]
}

export default function CaseStagedProcess({
  heading,
  description,
  loopLabel,
  steps,
}: Props) {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''
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
    scrollRef.current?.scrollBy({ left: direction * 208, behavior: 'smooth' })
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
  }

  const arrowWrapperClass = (hasLoop: boolean) =>
    `flex flex-none items-center transition-opacity duration-200 disabled:pointer-events-none disabled:opacity-0 ${hasLoop ? 'pb-8' : ''}`
  const arrowButtonClass =
    'border-rule text-paper-muted hover:text-paper flex h-9 w-9 flex-none items-center justify-center border transition-colors duration-200'

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
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="case-staged__snap bg-ink w-full py-20 sm:py-28"
    >
      <div className={`reveal reveal--1 mx-auto max-w-6xl px-6 sm:px-10 xl:px-0 ${revealClass}`}>
        <h2
          id={headingId}
          className="text-paper mb-2 max-w-measure text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.05] tracking-[-0.02em]"
        >
          {heading}
        </h2>
        {description && (
          <p className="text-paper-muted mb-10 max-w-measure text-base leading-relaxed">
            {description}
          </p>
        )}

        <div className="mt-10 flex items-stretch gap-2">
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
              className={`from-ink pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r to-transparent transition-opacity duration-200 ${
                canScrollLeft ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div
              className={`from-ink pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l to-transparent transition-opacity duration-200 ${
                canScrollRight ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex -- draggable scroll region; tabIndex is the standard fix for axe's scrollable-region-focusable rule, letting native arrow-key scrolling work once focused */}
            <div
              ref={scrollRef}
              role="region"
              aria-label={`${heading}, scrollable`}
              tabIndex={0}
              onScroll={updateEdges}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
              className="custom-scrollbar-hide cursor-grab select-none overflow-x-auto pb-2 active:cursor-grabbing focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <div className="inline-flex flex-col gap-3">
                <div className="flex items-start gap-1">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-none items-start">
                      <div className="w-36 flex-none sm:w-40">
                        <p className="text-teal-mid mb-2 h-8 font-normal text-xs uppercase leading-4 tracking-[0.12em]">
                          {step.groupLabel ?? ''}
                        </p>
                        <div className="border-rule h-full border px-4 py-4">
                          <p className="text-paper text-sm font-semibold">{step.label}</p>
                          <p className="text-paper-muted mt-1 text-xs leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {index < steps.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="text-paper-muted/40 mt-[4.25rem] flex-none px-1 text-base"
                        >
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {loopLabel && (
                  <div className="relative h-5 w-full" aria-hidden="true">
                    <div className="border-rule absolute inset-x-[72px] top-0 h-4 rounded-b-lg border-b border-l border-r sm:inset-x-[80px]" />
                  </div>
                )}
              </div>
            </div>
            {/* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */}
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

        {loopLabel && (
          <p className="text-paper-muted mt-10 max-w-measure text-sm leading-relaxed">
            {loopLabel}
          </p>
        )}
      </div>
    </section>
  )
}
