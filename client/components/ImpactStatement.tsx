import { motion } from 'framer-motion'
import React from 'react'

type ImpactStatementProps = {
  lines: (string | React.ReactNode)[]
  align?: 'left' | 'center'
  className?: string
  padded?: boolean
  bgSvgSrc?: string
}

export default function ImpactStatement({
  lines,
  align = 'left',
  className = '',
  padded = false,
  bgSvgSrc,
}: ImpactStatementProps) {
  const isCenter = align === 'center'

  const alignClasses = isCenter
    ? 'text-center items-center'
    : 'text-left items-start'

  const padY = padded ? 'py-24 md:py-32' : ''

  return (
    <section
      className={`
        relative w-full overflow-visible
        ${padY}
        ${className}
      `}
    >
      {/* Full-viewport SVG background */}
      {bgSvgSrc && (
        <img
          src={bgSvgSrc}
          alt=""
          aria-hidden
          className="
            pointer-events-none absolute
            left-1/2 top-1/2 z-0
            h-auto w-screen
            max-w-none -translate-x-1/2
            -translate-y-1/2
            select-none
          "
        />
      )}

      {/* Constrained content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-0">
        <div className={`flex w-full flex-col ${alignClasses}`}>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              w-full text-[40px] font-bold leading-[1.25]
              tracking-tight
              text-white
              sm:text-[75px] sm:leading-[1.2]
              md:text-[100px] md:leading-[1.15]
              lg:text-[72px] lg:leading-[1.1]
              xl:text-[130px] xl:leading-[1.08]
              2xl:text-[150px] 2xl:leading-[1.2]
            "
          >
            {lines.map((line, i) => (
              <span key={i} className="block w-full">
                {line}
              </span>
            ))}
          </motion.h1>
        </div>
      </div>
    </section>
  )
}
