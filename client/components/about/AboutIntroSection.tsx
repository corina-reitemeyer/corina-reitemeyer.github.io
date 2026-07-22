import { useId, type SVGProps } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

function HandAsterisk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        className="ink-stroke"
        d="M16 4v24M6.5 10.5l19 11M6.5 21.5l19-11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
      />
    </svg>
  )
}

export default function AboutIntroSection() {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="w-full bg-ink py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-[10rem_1fr_14rem] lg:gap-16 xl:px-0">
        <div
          className={`reveal reveal--1 flex items-start gap-3 lg:flex-col lg:gap-4 ${revealClass}`}
        >
          <h2 id={headingId} className="text-2xl font-bold text-paper">
            Who I am
          </h2>
          <HandAsterisk className="hidden h-5 w-5 text-teal-mid lg:block" />
        </div>

        <div
          className={`reveal reveal--2 max-w-measure space-y-5 text-paper-muted ${revealClass}`}
        >
          <p>
            I&rsquo;m a Senior Product Designer, originally from Germany and New
            Zealand, which gave me a structured but practical way of thinking.
          </p>
          <p>
            I specialise in making complexity feel simple, whether that&rsquo;s
            a messy digital platform or a difficult concept that needs to become
            learnable. Accessibility is at the core of everything I design,
            because good design and good learning should work for everyone.
          </p>
          <p>
            Cuban salsa instructor (on hiatus) and former Code Bootcamp teaching
            facilitator. Turns out teaching is just design with a live audience!
          </p>
          <p className="flex flex-wrap items-center gap-1.5 text-sm">
            <span className="font-semibold text-paper-muted">Accolades:</span>
            <a
              href="https://bestawards.co.nz/digital/student-digital/massey-university-college-of-creative-arts/infinite/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-teal-mid transition-colors duration-200 hover:text-teal-mist"
            >
              Best Awards, 2018
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>

        <div className={`reveal reveal--3 ${revealClass}`}>
          <img
            src="/images/corina-about.webp"
            alt="Corina Reitemeyer"
            className="mb-4 aspect-[4/5] w-full max-w-[14rem] rounded-2xl object-cover motion-safe:hover:animate-wiggle"
          />
          <p
            className="margin-note ink-write !text-paper"
            aria-hidden="true"
          >
            ^INFJ, but sometimes a selective extrovert
          </p>
        </div>
      </div>
    </section>
  )
}
