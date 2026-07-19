import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

type Tab = {
  id: string
  label: string
  detail: string
}

const tabs: Tab[] = [
  {
    id: 'latin-dance',
    label: 'Latin dance',
    detail:
      'Four years teaching salsa in Aotearoa New Zealand, plus plenty more just dancing at socials and practicas. Rhythm, trust, and shared rooms are the same things that make a good product feel right.',
  },
  {
    id: 'teaching',
    label: 'Teaching & sharing',
    detail:
      'As a Technical Facilitator at Dev Academy, I taught career-changers to code. TEFL certified too. Teaching dance, language, and code all comes down to the same thing: break it down, and make the next step obvious.',
  },
]

export default function CommunitySection() {
  const headingId = useId()
  const panelId = useId()
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  const activeTab = tabs[activeIndex]

  const focusTab = (index: number) => {
    const next = (index + tabs.length) % tabs.length
    setActiveIndex(next)
    tabRefs.current[next]?.focus()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      focusTab(activeIndex + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      focusTab(activeIndex - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      focusTab(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      focusTab(tabs.length - 1)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="community"
      aria-labelledby={headingId}
      className="w-full bg-ink py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 xl:px-0">
        <div className={`reveal reveal--1 relative mb-10 max-w-measure sm:mb-14 ${revealClass}`}>
          <p className="mb-3 font-light text-[0.72rem] uppercase tracking-[0.16em] text-teal-mid">
            (05) Community &amp; dance
          </p>
          <h2
            id={headingId}
            className="text-[clamp(2rem,5vw,3rem)] font-bold leading-[0.98] tracking-[-0.03em] text-paper"
          >
            Latin dance and the rooms that hold people
          </h2>
          <p
            aria-hidden="true"
            className="margin-note ink-draw ink-write absolute right-0 top-1 hidden sm:block"
          >
            more than steps
          </p>
        </div>

        <div className={`reveal reveal--2 max-w-measure ${revealClass}`}>
          <div
            role="tablist"
            aria-label="Community topics"
            className="mb-6 flex gap-2 border-b border-rule"
          >
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeIndex === i}
                aria-controls={panelId}
                tabIndex={activeIndex === i ? 0 : -1}
                onClick={() => setActiveIndex(i)}
                onKeyDown={onKeyDown}
                className={`-mb-px border-b-2 px-1 pb-3 text-base font-medium transition-colors duration-150 ease-out ${
                  activeIndex === i
                    ? 'border-teal-mid text-paper'
                    : 'border-transparent text-paper-muted hover:text-paper'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={panelId}
            aria-labelledby={`tab-${activeTab.id}`}
            className="text-paper-muted"
          >
            <p>{activeTab.detail}</p>
          </div>

          <div
            aria-hidden="true"
            className="mt-8 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-rule text-center font-light text-xs uppercase tracking-[0.12em] text-paper-muted"
          >
            TODO: replace with a real {activeTab.label} photo
          </div>
        </div>
      </div>
    </section>
  )
}
