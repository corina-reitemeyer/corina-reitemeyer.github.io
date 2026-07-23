import { useEffect, useId, useState } from 'react'
import ProjectData from '../../data/projects.json'
import Project from '../../data/projects.types'
import ProjectGrid from './components/ProjectGrid'
import { ROUTES } from '../../lib/routes'
import { useMountReveal } from '../../lib/useMountReveal'
import { ScrollMouseIcon } from '../../components/icons/Doodles'

export default function ProductDesign() {
  const headingId = useId()
  const isInView = useMountReveal()
  const [hasScrolled, setHasScrolled] = useState(false)

  const revealClass = isInView ? 'is-inview' : ''

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

      <div
        aria-hidden="true"
        className="flex flex-col items-center gap-2 py-3 text-paper-muted sm:hidden"
      >
        <span className="font-normal text-xs uppercase tracking-[0.16em]">
          Scroll
        </span>
        <ScrollMouseIcon className="h-7 w-4" />
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed bottom-6 right-6 z-10 hidden flex-col items-center gap-2 text-paper-muted transition-opacity duration-300 sm:flex sm:bottom-10 sm:right-10 ${
          hasScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <span className="font-normal text-xs uppercase tracking-[0.16em]">
          Scroll
        </span>
        <ScrollMouseIcon className="h-7 w-4 sm:h-8 sm:w-5" />
      </div>

      <ProjectGrid
        projects={ProjectData as Project[]}
        linkPrefix={ROUTES.digitalProduct}
      />
    </>
  )
}
