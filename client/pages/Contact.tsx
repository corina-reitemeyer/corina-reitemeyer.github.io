import { useEffect, useId, useState, type CSSProperties } from 'react'
import contactData from '../../src/contactdata.json'
import type ContactData from '../../models/contactdata'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import HandUnderline from '../components/contact/HandUnderline'

export default function Contact() {
  const data: ContactData = contactData
  const headingId = useId()
  const [isInView, setIsInView] = useState(false)

  useDocumentTitle('Contact • Corina Reitemeyer')

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsInView(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const revealClass = isInView ? 'is-inview' : ''

  return (
    <header
      aria-labelledby={headingId}
      className="bg-ink relative flex min-h-[100dvh] w-full items-center overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="atmosphere-wash absolute inset-0" />
        <div className="atmosphere-rules absolute inset-0" />
        <p className="margin-note ink-write absolute right-16 top-40 hidden sm:right-24 sm:top-48 sm:block">
          {data.marginNote}
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-[112px] sm:px-10 sm:pb-24 sm:pt-[164px] xl:px-0">
        <p
          className={`reveal reveal--1 text-teal-mid mb-3 font-normal text-xs uppercase tracking-[0.16em] ${revealClass}`}
        >
          {data.eyebrow}
        </p>

        <h1
          id={headingId}
          className={`reveal reveal--2 text-paper mb-6 max-w-[12ch] text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] ${revealClass}`}
        >
          {data.title}
        </h1>

        <p
          className={`reveal reveal--3 max-w-measure text-paper-muted mb-12 text-[clamp(1.1rem,1.8vw,1.3rem)] ${revealClass}`}
        >
          {data.lede}
        </p>

        <div
          className={`reveal reveal--4 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 ${revealClass}`}
        >
          <div>
            <p className="text-paper-muted mb-2 font-normal text-xs uppercase tracking-[0.12em]">
              Email
            </p>
            <a
              href={`mailto:${data.email}`}
              className="text-paper hover:text-teal-mist relative mb-3 inline-block pb-1 text-[clamp(1.15rem,2vw,1.45rem)] font-medium tracking-[-0.01em] transition-colors duration-200"
            >
              <span className="relative z-10">{data.email}</span>
              <HandUnderline
                className="text-teal-mid/80 pointer-events-none absolute -left-2 -right-14 bottom-0 h-[0.38em] -rotate-[0.8deg]"
                style={{ '--ink-duration': '1.4s', '--ink-delay': '1.3s' } as CSSProperties}
              />
            </a>
            <p className="text-paper-muted max-w-[22rem] text-sm leading-relaxed">
              {data.emailHint}
            </p>
          </div>

          <div>
            <p className="text-paper-muted mb-2 font-normal text-xs uppercase tracking-[0.12em]">
              {data.meetingLabel}
            </p>
            <a
              href={data.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paper text-ink hover:bg-teal-mist mb-3 mt-3 inline-flex min-h-[2.75rem] items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5"
            >
              Pick a time
            </a>
            <p className="text-paper-muted max-w-[22rem] text-sm leading-relaxed">
              {data.meetingHint}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
