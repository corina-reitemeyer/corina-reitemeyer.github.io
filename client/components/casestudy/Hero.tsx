// CaseStudyNavy.tsx
import { motion } from 'framer-motion'

type Props = {
  intro: string
  company: string // e.g., "Company"
  project: string // e.g., "Project"
  imageSrc: string
  imageAlt?: string
  scope: string // long paragraph
  involvement: string // sentence or comma-separated list
  meta: {
    // shows as: 2025 • Product Design • AI
    date: string
    type: string
    specialisation?: string
  }
}

export default function CaseStudyNavy({
  intro,
  company,
  project,
  imageSrc,
  imageAlt = '',
  scope,
  involvement,
  meta,
}: Props) {
  return (
    <section className="w-full bg-[#08082a] text-white">
      <div className="sm:py-18 container mx-auto max-w-6xl px-6 py-14 pt-28 sm:px-8">
        {/* 1) Large intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="
    max-w-4xl pb-8 text-3xl font-semibold leading-[1.4]
    text-white sm:pb-14
    sm:text-3xl sm:leading-[1.4]
    md:text-4xl md:leading-[1.3]
    lg:text-5xl lg:leading-[1.25]
  "
        >
          {intro}
        </motion.h2>

        {/* 2) Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="sm:mt-18 sm:mt-14"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-md object-cover"
          />
        </motion.div>

        {/* 3) Details */}
        <div className="md:gap-18 mt-28 grid grid-cols-1 gap-10 sm:mt-32 md:grid-cols-12">
          {/* Left */}
          <div className="md:col-span-4">
            <p className="text-3xl font-semibold leading-tight text-[#CBEDE8]">
              {company}
              <br />
              <span className="font-semibold text-white">{project}</span>
            </p>
          </div>

          {/* Right */}
          <div className="md:col-span-8">
            <h3 className=" text-md font-semibold uppercase text-white/100">
              Scope
            </h3>
            <p className="max-w-prose text-white/70">{scope}</p>

            <h3 className="text-md mt-8 font-semibold uppercase tracking-wide text-white/100">
              Involvement
            </h3>
            <p className="max-w-prose text-white/70">{involvement}</p>

            <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 font-semibold">
              {meta.date}
              <MetaDot>{meta.type}</MetaDot>
              <MetaDot>{meta.specialisation}</MetaDot>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Meta item with a dot separator to the left (except first in row) */
function MetaDot({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative pl-4 text-white">
      <span
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 text-white"
      >
        •
      </span>
      {children}
    </span>
  )
}
