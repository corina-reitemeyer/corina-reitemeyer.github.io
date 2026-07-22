import { useEffect, useId, useState } from 'react'
import ProjectData from '../../data/projects.json'
import Project from '../../data/projects.types'
import ProjectGrid from './components/ProjectGrid'
import { ROUTES } from '../../lib/routes'

export default function ProductDesign() {
  const headingId = useId()
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsInView(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const revealClass = isInView ? 'is-inview' : ''

  return (
    <>
      <header
        aria-labelledby={headingId}
        className="relative w-full overflow-hidden bg-ink"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="atmosphere-wash absolute inset-0" />
          <div className="atmosphere-rules absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-[112px] sm:px-10 sm:pb-24 sm:pt-[164px] xl:px-0">
          <p
            className={`reveal reveal--1 mb-3 text-xs font-normal uppercase tracking-[0.16em] text-teal-mid ${revealClass}`}
          >
            Work
          </p>

          <h1
            id={headingId}
            className={`reveal reveal--2 mb-8 text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-paper ${revealClass}`}
          >
            <span className="block">Product design,</span>
            <span className="block">under real constraints.</span>
          </h1>

          <p
            className={`reveal reveal--3 max-w-measure text-[clamp(1.1rem,1.8vw,1.25rem)] text-paper-muted ${revealClass}`}
          >
            An AI feature, a growth project, and two design systems &mdash; I
            can zoom out to build the system and zoom in to ship the feature.
          </p>
        </div>
      </header>

      <ProjectGrid
        projects={ProjectData as Project[]}
        linkPrefix={ROUTES.digitalProduct}
      />
    </>
  )
}
