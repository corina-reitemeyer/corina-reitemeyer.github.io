import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { defaultViewport } from '../../lib/motion'

type CaseStudyVideoCta = {
  label: string
  href: string
  external?: boolean
}

type CaseStudyVideoProps = {
  src: string
  poster?: string
  title: string
  caption?: string
  captionsSrc?: string
  cta?: CaseStudyVideoCta
}

export default function CaseStudyVideo({
  src,
  poster,
  title,
  caption,
  captionsSrc,
  cta,
}: CaseStudyVideoProps) {
  const figureId = useId()
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby={figureId}
      className="bg-[#08082a] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-0">
        <h2
          id={figureId}
          className="mb-8 text-3xl font-bold text-white antialiased sm:text-4xl"
        >
          {title}
        </h2>
        <motion.figure
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={defaultViewport}
        >
          <video
            src={src}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            aria-label={title}
            className="w-full rounded-xl"
          >
            {captionsSrc && (
              <track
                kind="captions"
                src={captionsSrc}
                srcLang="en"
                label="English"
                default
              />
            )}
          </video>
          {caption && (
            <figcaption className="mt-3 text-sm text-slate-400 antialiased">
              {caption}
            </figcaption>
          )}
        </motion.figure>
        {cta && (
          <div className="mt-8">
            <a
              href={cta.href}
              {...(cta.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#08082a] transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#08082a]"
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
